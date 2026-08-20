# Banco de Dados — VetTrace

O banco roda em um container Docker. Cada pessoa do time roda o **seu próprio** container
localmente — o que compartilhamos é a *estrutura* do banco (`schema.sql`), não os dados.

---

## Pré-requisito

Docker Desktop instalado e em execução.
No Windows, ative a integração com WSL: **Settings → Resources → WSL Integration**.

Verifique:

```bash
docker --version
docker ps
```

Se `docker ps` der *permission denied* no WSL:

```bash
sudo usermod -aG docker $USER
```

Depois feche o terminal e rode `wsl --shutdown` no PowerShell.

---

## Subir o banco

Na raiz do projeto:

```bash
cp .env.example .env    # só na primeira vez
docker compose up -d
```

Pronto. O container sobe e **aplica o schema automaticamente** na primeira inicialização:
as 13 tabelas, os índices, os triggers e os dados de referência (destinos, categorias,
autoclaves e kits) já vêm criados. Ninguém precisa rodar SQL na mão.

### Se você já tem PostgreSQL instalado na máquina

A porta 5432 estará ocupada e o container não sobe. Edite seu `.env`:

```
POSTGRES_PORT=5433
DATABASE_URL=postgresql://vettrace:vettrace@localhost:5433/vettrace
```

O `.env` é local e não vai para o Git — cada um ajusta o seu.

---

## Verificar se funcionou

```bash
docker compose ps                                            # container deve estar "Up"
docker compose exec db psql -U vettrace -d vettrace -c "\dt" # deve listar 13 tabelas
```

Se o `psql` reclamar de socket logo após o `up`, espere ~10 segundos: o Postgres
ainda está inicializando. O `docker compose up -d` retorna quando o container
*inicia*, não quando o banco fica *pronto*.

---

## Comandos do dia a dia

| Ação | Comando |
|---|---|
| Subir | `docker compose up -d` |
| Parar (mantém dados) | `docker compose stop` |
| Parar e remover container | `docker compose down` |
| **Zerar o banco** | `docker compose down -v && docker compose up -d` |
| Ver logs | `docker compose logs -f db` |
| Abrir o psql | `docker compose exec db psql -U vettrace -d vettrace` |

⚠️ O `-v` no `down` apaga o volume — **todos os dados são perdidos**. É a forma
correta de recomeçar do zero, mas não tem volta.

---

## Conectar por DBeaver / pgAdmin

| Campo | Valor |
|---|---|
| Host | `localhost` |
| Porta | `5432` (ou `5433`, conforme seu `.env`) |
| Banco | `vettrace` |
| Usuário | `vettrace` |
| Senha | `vettrace` |

---

## Alterar o schema

O `db/schema.sql` é a **fonte de verdade** da estrutura do banco. Toda mudança
(nova tabela, nova coluna, novo índice) passa por ele.

1. Edite `db/schema.sql`
2. Recrie o banco: `docker compose down -v && docker compose up -d`
3. Teste
4. Commit numa branch e abra PR

O schema **não** é aplicado em bancos já existentes — só na primeira inicialização
do volume. Por isso o passo 2 é obrigatório para ver a mudança.

Não existe migration automática. Se alguém alterar o schema, avise no grupo:
todos precisam rodar `down -v && up -d` para ficar com a mesma estrutura.

---

## Como funciona por baixo

- **Imagem**: `postgres:18` — versão fixada de propósito. `latest` muda com o tempo
  e um cluster criado por uma versão não abre em outra major version.
- **Volume**: `vettrace-data` montado em `/var/lib/postgresql`. A partir do Postgres 18,
  os dados ficam em `/var/lib/postgresql/18/docker` — por isso o volume monta um nível
  acima, e **não** em `/var/lib/postgresql/data` como mostram tutoriais antigos.
- **Schema automático**: `db/schema.sql` é montado em `/docker-entrypoint-initdb.d/`.
  A imagem oficial executa qualquer `.sql` desse diretório na primeira inicialização.

---

## Problemas comuns

**`port is already allocated`**
Algo já usa a porta. Mude `POSTGRES_PORT` no `.env` para 5433.

**Container sobe e morre**
`docker compose logs db` mostra o motivo. Erro de sintaxe no `schema.sql` derruba
a inicialização inteira.

**Alterei o `schema.sql` e nada mudou**
O schema só roda com o volume vazio. Rode `docker compose down -v && docker compose up -d`.

**`No such file or directory` no socket**
O banco ainda está inicializando. Espere alguns segundos e tente de novo.