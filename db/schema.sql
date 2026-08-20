-- ============================================================
-- VetTrace - Script SQL para PostgreSQL
-- Execute no DBeaver, pgAdmin (Query Tool) ou psql
-- Versão 1.3 - inclui: crmv (formato UFXXXXX), telefone,
--                       data_hora do resíduo, setor de destino,
--                       cadáver: data_entrada como TIMESTAMP, proprietário,
--                       causa do óbito, destino previsto e data de saída


-- ============================================================
-- TABELA: usuarios
-- ============================================================
CREATE TABLE usuarios (
    id         SERIAL PRIMARY KEY,
    nome       VARCHAR(100) NOT NULL,
    email      VARCHAR(150) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    perfil     VARCHAR(20)  NOT NULL
                   CHECK (perfil IN ('admin', 'tecnico', 'solicitante')),
    crmv       VARCHAR(10)
                   CHECK (crmv IS NULL OR crmv ~ '^[A-Za-z]{2}-[0-9]{4,6}$'),
    telefone   VARCHAR(20),
    ativo      BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP    NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE  usuarios        IS 'Usuários do sistema VetTrace';
COMMENT ON COLUMN usuarios.perfil IS 'admin: acesso total | tecnico: operações | solicitante: consulta e registro';
COMMENT ON COLUMN usuarios.crmv   IS 'Registro profissional veterinário (CRMV) - formato UF-XXXX a UF-XXXXXX (ex: DF-12345)';
COMMENT ON COLUMN usuarios.telefone IS 'Telefone de contato do usuário';

-- ============================================================
-- TABELA: empresas
-- ============================================================
CREATE TABLE empresas (
    id           SERIAL PRIMARY KEY,
    razao_social VARCHAR(150) NOT NULL,
    cnpj         VARCHAR(18)  UNIQUE,
    telefone     VARCHAR(20),
    email        VARCHAR(150),
    tipo         VARCHAR(30)
                     CHECK (tipo IN ('coleta', 'descarte', 'terceirizada')),
    ativo        BOOLEAN   NOT NULL DEFAULT TRUE,
    created_at   TIMESTAMP NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE empresas IS 'Empresas responsáveis por coleta e descarte de resíduos e cadáveres';

-- ============================================================
-- TABELA: destinos_cadaver  (lookup)
-- ============================================================
CREATE TABLE destinos_cadaver (
    id        SERIAL PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

COMMENT ON TABLE destinos_cadaver IS 'Tipos de destino possíveis para cadáveres';

-- Dados fixos
INSERT INTO destinos_cadaver (descricao) VALUES
    ('labocien'),
    ('empresa_terceirizada'),
    ('proprietario');

-- ============================================================
-- TABELA: cadaveres
-- ============================================================
CREATE TABLE cadaveres (
    id                SERIAL PRIMARY KEY,
    especie           VARCHAR(100) NOT NULL,
    identificacao     VARCHAR(100),
    idade_anos        INTEGER,
    peso_kg           NUMERIC(6, 2),
    nome_proprietario VARCHAR(150),
    causa_obito       TEXT,
    data_entrada      TIMESTAMP    NOT NULL,
    data_saida        TIMESTAMP,
    destino_id        INTEGER      REFERENCES destinos_cadaver(id),
    status            VARCHAR(30)  NOT NULL DEFAULT 'congelado'
                          CHECK (status IN ('congelado', 'aguardando_retirada', 'retirado')),
    observacoes       TEXT,
    registrado_por    INTEGER      NOT NULL REFERENCES usuarios(id),
    created_at        TIMESTAMP    NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE  cadaveres                   IS 'Cadastro de cadáveres recebidos e armazenados na clínica';
COMMENT ON COLUMN cadaveres.status            IS 'congelado: armazenado | aguardando_retirada: liberado | retirado: saiu';
COMMENT ON COLUMN cadaveres.nome_proprietario IS 'Nome do proprietário do animal - nulo quando não identificado ou destino = labocien';
COMMENT ON COLUMN cadaveres.causa_obito       IS 'Causa do óbito informada na entrada do cadáver';
COMMENT ON COLUMN cadaveres.data_entrada      IS 'Data e hora exatas da entrada do cadáver na clínica';
COMMENT ON COLUMN cadaveres.data_saida        IS 'Data e hora da saída - preenchida automaticamente pelo trigger de retirada';
COMMENT ON COLUMN cadaveres.destino_id        IS 'Destino previsto na entrada - confirmado/atualizado pelo trigger de retirada';

-- ============================================================
-- TABELA: retiradas_cadaver
-- ============================================================
CREATE TABLE retiradas_cadaver (
    id             SERIAL PRIMARY KEY,
    cadaver_id     INTEGER      NOT NULL REFERENCES cadaveres(id),
    destino_id     INTEGER      NOT NULL REFERENCES destinos_cadaver(id),
    empresa_id     INTEGER      REFERENCES empresas(id),  -- nullable: só quando destino = empresa_terceirizada
    data_coleta    DATE         NOT NULL,
    quantidade     INTEGER      NOT NULL DEFAULT 1,
    tipo_residuo   VARCHAR(100),
    responsavel_id INTEGER      NOT NULL REFERENCES usuarios(id),
    observacoes    TEXT,
    created_at     TIMESTAMP    NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE  retiradas_cadaver            IS 'Registros de saída de cadáveres';
COMMENT ON COLUMN retiradas_cadaver.empresa_id IS 'Preenchido somente quando destino = empresa_terceirizada';

-- ============================================================
-- TABELA: categorias_descarte
-- ============================================================
CREATE TABLE categorias_descarte (
    id         SERIAL PRIMARY KEY,
    nome       VARCHAR(100) NOT NULL UNIQUE,
    descricao  TEXT,
    ativo      BOOLEAN   NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE categorias_descarte IS 'Categorias de descarte: Kit de Sutura, Caixa Grande, Perfurocortantes...';

-- Dados iniciais
INSERT INTO categorias_descarte (nome, descricao) VALUES
    ('Kit de Sutura',         'Materiais de sutura utilizados em procedimentos cirúrgicos'),
    ('Caixa Grande',          'Caixa cirúrgica grande com instrumental completo'),
    ('Caixa Média',           'Caixa cirúrgica média'),
    ('Caixa Pequena',         'Caixa cirúrgica pequena'),
    ('Materiais Contaminados','Materiais com contaminação biológica - Grupo A'),
    ('Perfurocortantes',      'Agulhas, lâminas e similares - Grupo E');

-- ============================================================
-- TABELA: descartes
-- ============================================================
CREATE TABLE descartes (
    id             SERIAL PRIMARY KEY,
    categoria_id   INTEGER   NOT NULL REFERENCES categorias_descarte(id),
    descricao      TEXT      NOT NULL,
    quantidade     INTEGER   NOT NULL,
    data_descarte  DATE      NOT NULL,
    responsavel_id INTEGER   NOT NULL REFERENCES usuarios(id),
    created_at     TIMESTAMP NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE descartes IS 'Registros de descarte de materiais';

-- ============================================================
-- TABELA: autoclaves
-- ============================================================
CREATE TABLE autoclaves (
    id                   SERIAL PRIMARY KEY,
    nome                 VARCHAR(100) NOT NULL,
    modelo               VARCHAR(100),
    tipo                 VARCHAR(50),
    capacidade_litros    NUMERIC(6, 2),
    metodo_funcionamento TEXT,
    ativo                BOOLEAN   NOT NULL DEFAULT TRUE,
    created_at           TIMESTAMP NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE autoclaves IS 'Equipamentos de esterilização cadastrados na clínica';

-- Dados das autoclaves do PGRSS
INSERT INTO autoclaves (nome, modelo, tipo, capacidade_litros, metodo_funcionamento) VALUES
    ('Autoclave Analógica',      'Analógica 32L',      'analógica', 32.00, 'Vapor saturado com água deionizada. Ciclo de 30-40 minutos, 450ml por ciclo.'),
    ('Autoclave Display Digital','Display Digital 42L', 'digital',   42.00, 'Vapor saturado com água deionizada. Ciclo de 40-50 minutos, 600ml por ciclo.');

-- ============================================================
-- TABELA: kits
-- ============================================================
CREATE TABLE kits (
    id         SERIAL PRIMARY KEY,
    nome       VARCHAR(100) NOT NULL,
    descricao  TEXT,
    tipo       VARCHAR(50),
    ativo      BOOLEAN   NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE kits IS 'Kits e caixas cirúrgicas que passam pelo processo de esterilização';

-- Dados da Ficha de Acompanhamento
INSERT INTO kits (nome, tipo) VALUES
    ('Caixa Grande',    'cirurgico'),
    ('Caixa Média',     'cirurgico'),
    ('Caixa Pequena',   'cirurgico'),
    ('Caixa Esofágica', 'cirurgico'),
    ('Caixa Hemostática','cirurgico'),
    ('Caixa Vascular',  'cirurgico');

-- ============================================================
-- TABELA: ciclos_esterilizacao
-- ============================================================
CREATE TABLE ciclos_esterilizacao (
    id                  SERIAL PRIMARY KEY,
    autoclave_id        INTEGER      NOT NULL REFERENCES autoclaves(id),
    data_hora_inicio    TIMESTAMP    NOT NULL,
    data_hora_fim       TIMESTAMP,
    temperatura_celsius NUMERIC(5, 2),
    pressao_bar         NUMERIC(5, 2),
    tempo_minutos       INTEGER,
    consumo_energia_kwh NUMERIC(8, 4),
    quantidade_kits     INTEGER,
    responsavel_id      INTEGER      NOT NULL REFERENCES usuarios(id),
    status              VARCHAR(20)  NOT NULL DEFAULT 'pendente'
                            CHECK (status IN ('pendente', 'efetivo', 'inefetivo')),
    created_at          TIMESTAMP    NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE  ciclos_esterilizacao        IS 'Registro de cada ciclo de esterilização realizado';
COMMENT ON COLUMN ciclos_esterilizacao.status IS 'pendente: aguardando validação | efetivo | inefetivo';

-- ============================================================
-- TABELA: ciclo_kits  (N:N entre ciclos e kits)
-- ============================================================
CREATE TABLE ciclo_kits (
    id         SERIAL PRIMARY KEY,
    ciclo_id   INTEGER NOT NULL REFERENCES ciclos_esterilizacao(id),
    kit_id     INTEGER NOT NULL REFERENCES kits(id),
    quantidade INTEGER NOT NULL DEFAULT 1,
    UNIQUE (ciclo_id, kit_id)
);

COMMENT ON TABLE ciclo_kits IS 'Associação entre ciclos de esterilização e os kits incluídos';

-- ============================================================
-- TABELA: validacoes_ciclo
-- ============================================================
CREATE TABLE validacoes_ciclo (
    id             SERIAL PRIMARY KEY,
    ciclo_id       INTEGER     NOT NULL UNIQUE REFERENCES ciclos_esterilizacao(id),
    responsavel_id INTEGER     NOT NULL REFERENCES usuarios(id),
    resultado      VARCHAR(20) NOT NULL
                       CHECK (resultado IN ('efetivo', 'inefetivo')),
    temperatura_ok BOOLEAN,
    pressao_ok     BOOLEAN,
    tempo_ok       BOOLEAN,
    observacoes    TEXT,
    data_validacao TIMESTAMP   NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE  validacoes_ciclo          IS 'Uma validação por ciclo - atualiza o status do ciclo';
COMMENT ON COLUMN validacoes_ciclo.ciclo_id IS 'UNIQUE: cada ciclo tem no máximo uma validação';

-- ============================================================
-- TABELA: residuos  (PGRSS - Grupos A, B, D, E)
-- ============================================================
CREATE TABLE residuos (
    id             SERIAL PRIMARY KEY,
    tipo_grupo     VARCHAR(5)   NOT NULL
                       CHECK (tipo_grupo IN ('A', 'B', 'D', 'E')),
    descricao      TEXT         NOT NULL,
    quantidade     NUMERIC(10, 2),
    unidade        VARCHAR(20)
                       CHECK (unidade IN ('kg', 'L', 'unidade')),
    data_registro  TIMESTAMP    NOT NULL,
    status         VARCHAR(30)  NOT NULL DEFAULT 'armazenado'
                       CHECK (status IN ('armazenado', 'coletado', 'descartado')),
    setor_gerador  VARCHAR(100),
    setor_destino  VARCHAR(100),
    responsavel_id INTEGER      REFERENCES usuarios(id),
    created_at     TIMESTAMP    NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE  residuos               IS 'Controle de resíduos conforme PGRSS RDC 222/2018';
COMMENT ON COLUMN residuos.tipo_grupo    IS 'A: infectantes | B: químicos | D: comuns | E: perfurocortantes';
COMMENT ON COLUMN residuos.data_registro IS 'Data e hora exatas do registro do resíduo';
COMMENT ON COLUMN residuos.setor_gerador IS 'Setor da clínica onde o resíduo foi gerado';
COMMENT ON COLUMN residuos.setor_destino IS 'Setor de destino do resíduo dentro do fluxo da clínica';

-- ============================================================
-- ÍNDICES para performance
-- ============================================================
CREATE INDEX idx_cadaveres_status         ON cadaveres(status);
CREATE INDEX idx_cadaveres_data_entrada   ON cadaveres(data_entrada);
CREATE INDEX idx_cadaveres_data_saida     ON cadaveres(data_saida);
CREATE INDEX idx_cadaveres_destino        ON cadaveres(destino_id);
CREATE INDEX idx_retiradas_cadaver_data   ON retiradas_cadaver(data_coleta);
CREATE INDEX idx_descartes_data           ON descartes(data_descarte);
CREATE INDEX idx_ciclos_data_inicio       ON ciclos_esterilizacao(data_hora_inicio);
CREATE INDEX idx_ciclos_status            ON ciclos_esterilizacao(status);
CREATE INDEX idx_ciclos_autoclave         ON ciclos_esterilizacao(autoclave_id);
CREATE INDEX idx_residuos_tipo_grupo      ON residuos(tipo_grupo);
CREATE INDEX idx_residuos_status          ON residuos(status);
CREATE INDEX idx_residuos_data_registro   ON residuos(data_registro);

-- ============================================================
-- TRIGGER: atualiza status do cadáver ao registrar retirada
-- ============================================================
CREATE OR REPLACE FUNCTION fn_atualiza_status_cadaver()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE cadaveres
       SET status     = 'retirado',
           data_saida = NEW.data_coleta,
           destino_id = NEW.destino_id
     WHERE id = NEW.cadaver_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_retirada_cadaver
AFTER INSERT ON retiradas_cadaver
FOR EACH ROW
EXECUTE FUNCTION fn_atualiza_status_cadaver();

-- ============================================================
-- TRIGGER: atualiza status do ciclo ao registrar validação
-- ============================================================
CREATE OR REPLACE FUNCTION fn_atualiza_status_ciclo()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE ciclos_esterilizacao
       SET status = NEW.resultado
     WHERE id = NEW.ciclo_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validacao_ciclo
AFTER INSERT ON validacoes_ciclo
FOR EACH ROW
EXECUTE FUNCTION fn_atualiza_status_ciclo();

-- ============================================================
-- FIM DO SCRIPT
-- ============================================================