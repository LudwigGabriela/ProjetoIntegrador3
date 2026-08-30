# CENTRO UNIVERSITÁRIO DE BRASÍLIA
## FACULDADE DE TECNOLOGIA E CIÊNCIAS SOCIAIS APLICADAS
## CURSO DE CIÊNCIA DA COMPUTAÇÃO
## PROJETO INTEGRADOR III - TURMA B

**PROFESSOR ORIENTADOR: TIAGO LEITE PEREIRA**

# VetTrace

- 22302662 - Caio Peliz Cardoso 
- 22307226 - Carlos Eduardo Mafra de Moraes 
- 22303154 - Gabriela Moraes Ludwig 
- 22300875 - Juan Talyson Macêdo Dos Santos 
- 22306508 - Maria Elis de Almeida Braz 


BRASÍLIA, Agosto de 2026

---

## SUMÁRIO

- GLOSSÁRIO
1. Descrição do Projeto
2. Escopo do Projeto (EAP)
3. Problema/Oportunidade
4. Modelo de Negócio (BMC e SMC)
5. Cenários de Negócio
6. Benefícios da Solução
7. Público Alvo
8. Cronograma de Marcos
9. Requisitos Funcionais
10. Requisitos Não Funcionais
11. Protótipo Visual
12. Requisito dos MVPs
    - 12.1. Aplicativo Móvel
    - 12.2. Web Application
13. Modelo de Dados Backoffice
14. Resultados de Teste
    - 14.1. Informações do Documento
    - 14.2. Objetivo
    - 14.3. Escopo dos Testes
    - 14.4. Matriz de Testes e Devolutiva
    - 14.5. Casos de Teste Detalhados
      - CT-001 - Cadastro de Usuário
      - CT-002 - Login OAuth
      - CT-003 - Controle de Sessão
      - CT-004 - Cadastro de Resíduo
      - CT-005 - Consulta de Resíduos
      - CT-006 - Peso Total
      - CT-007 - Filtrar Consulta de Resíduos
      - CT-008 - Integração API
      - CT-009 - Persistência
      - CT-010 - Validação de Campos Obrigatórios
      - CT-011 - Validação de Valor dos Campos
- REGRAS DE NEGÓCIO
  1. Introdução
  2. Módulo: Controle de Acesso, Perfis e Autenticação
  3. Módulo: Gestão e Controle de Resíduos
  4. Módulo: Rastreabilidade de Cadáveres Congelados e Empresas
  5. Módulo: Controle de Materiais Esterilizados
  6. Regras de Sistema Gerais e Transversais
- Histórias de Usuário
- CRITÉRIOS DE ACEITAÇÃO
- Histórico de Reuniões com Stakeholders e Evolução do Escopo
  1. Registro Cronológico das Reuniões
  2. Matriz Definitiva de Funcionalidades (Pós-Reunião #03)
  3. Engenharia de Acessos: Matriz de Perfis de Usuários (RBAC)
  4. Plano de Contingência e Mitigação de Riscos
  5. Evidências Fotográficas e Registros de Validação
22. Marketing Digital (PI IV)
23. Últimas Telas implementadas no Front-end
24. Bibliografia
25. APÊNDICE I - TECNOLOGIAS UTILIZADAS
26. APÊNDICE II - VÍDEO DE APRESENTAÇÃO

---

## GLOSSÁRIO

- **API:** Interface de Programação de Aplicações
- **ANVISA:** Agência Nacional de Vigilância Sanitária
- **ERS:** Especificação de Requisitos de Software
- **MVP:** Mínimo Produto Viável
- **RDC:** Resolução da Diretoria Colegiada
- **RF:** Requisito Funcional
- **RN:** Regra de Negócio
- **RNF:** Requisito Não Funcional

---

## 1. Descrição do Projeto

### Objetivo:

Desenvolver competências em engenharia de software e gestão de projetos por meio da criação de um sistema web para controle de resíduos de saúde e materiais esterilizados.

### Descrição:

O projeto envolve o planejamento, desenvolvimento e entrega de um sistema web utilizando conceitos de engenharia de software, banco de dados, desenvolvimento web e metodologias ágeis.

Serão aplicadas disciplinas como:

- Engenharia de Software
- Banco de Dados
- Desenvolvimento Web
- Gestão de Projetos

---

## 2. Escopo do Projeto (EAP)

> <img width="1167" height="662" alt="image" src="https://github.com/user-attachments/assets/1277da9d-8a4d-44ba-8fd6-697db7e09797" />


**VetTrace** — Sistema Web para Gestão de Resíduos e Materiais Esterilizados

- **Gerenciamento do projeto**
  - Planejamento e cronograma
  - Controle de versão (Jira / GitHub)
- **Requisitos e análise**
  - Requisitos funcionais
  - Requisitos não funcionais
- **Modelagem e design**
  - Protótipo visual (Figma)
  - Modelo de dados (banco de dados)
- **Desenvolvimento do sistema**
  - Back-end e API
    - Gestão de resíduos
    - Registro e classificação
    - Controle de materiais
    - Status e estoque
  - Front-end web
    - Dashboard e relatório
- **Teste e qualidade**
- **Entrega e implementação**
  - Documentação final
  - Deploy e implementação na clínica

Link de referência (Miro):
https://miro.com/welcomeonboard/VUNGM0J1dytDaWNoNlpiSmNML3RsVDd5amZyamhubDVqK2xiZS83cnA1Tnh0VzIzWFZ2MDNnNGs1b1g3OGF4QWpIM2VjbnJhdGladmtJRm5aNjh3ejlpdzlBR3cvcjlYVUhTd3pUaU1ZaEZPWW5DUjhwekZleVRES2IwWEZnLzhBd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=781545237123

---

## 3. Problema/Oportunidade

A gestão de resíduos de saúde e o controle de materiais esterilizados são processos essenciais em ambientes clínicos, pois impactam diretamente a segurança sanitária e a qualidade do atendimento.

Na clínica veterinária do campus, esses processos são realizados de forma manual e descentralizada, o que dificulta o controle, aumenta a chance de erros e compromete a rastreabilidade das informações.

Além disso, a conformidade com normas sanitárias exige registros detalhados e organização adequada dos dados, o que nem sempre é atendido por métodos tradicionais.

Nesse contexto, surge a oportunidade de desenvolver um sistema digital que centralize essas informações, aumente a eficiência operacional e reduza riscos sanitários.

---

## 4. Modelo de Negócio (BMC e SMC)

| Parcerias Chave | Atividades Chave | Recursos Chave |
|---|---|---|
| Clínica veterinária<br>Instituição de ensino (CEUB) | Levantamento de requisitos<br>Desenvolvimento do sistema<br>Testes<br>Manutenção<br>Atualizações | Equipe de desenvolvimento<br>Computadores<br>Ambiente de desenvolvimento<br>Banco de dados<br>Servidor web |

| Proposta de Valor | Relacionamento | Canais |
|---|---|---|
| Controle eficiente de resíduos de saúde<br>Gestão de materiais esterilizados em tempo real<br>Redução de erros operacionais<br>Rastreabilidade completa das informações<br>Apoio à conformidade com normas sanitárias | Interface simples e intuitiva<br>Uso direto sem necessidade de suporte constante<br>Treinamento básico inicial | Aplicação web acessada via navegador<br>Uso dentro da clínica veterinária |

| Clientes | Estrutura de Custos | Fontes de Receita |
|---|---|---|
| Funcionários da clínica veterinária<br>Professores responsáveis<br>Técnicos/laboratoristas | Tempo de desenvolvimento<br>Infraestrutura (computadores, internet)<br>Ferramentas (GitHub, Miro, etc.) | Não possui<br>Poderia ser licenciado para clínicas no futuro |

---

## 5. Cenários de Negócio

| Dimensão | Pessimista | Realista | Otimista |
|---|---|---|---|
| Política | Aumento de exigências regulatórias | Normas mantidas | Incentivo à digitalização por parte dos órgãos reguladores |
| Econômica | Falta de recursos para soluções tecnológicas | Recursos básicos suficientes | Investimento em tecnologia |
| Social | Resistência dos funcionários ao uso do sistema | Adoção e adaptação gradual | Alta aceitação e reconhecimento dos benefícios |
| Tecnológica | Infraestrutura limitada (internet, equipamentos) | Ambiente tecnológico estável | Infraestrutura permite expansão e integração |

---

## 6. Benefícios da Solução

6.1. Melhor organização dos processos
6.2. Redução de erros operacionais
6.3. Rastreabilidade completa
6.4. Apoio à conformidade com normas sanitárias
6.5. Aumento da eficiência da clínica

---

## 7. Público Alvo

7.1. Funcionários da clínica veterinária
7.2. Professores e responsáveis técnicos

---

## 8. Cronograma de Marcos

Link Miro: https://miro.com/welcomeonboard/VUNGM0J1dytDaWNoNlpiSmNML3RsVDd5amZyamhubDVqK2xiZS83cnA1Tnh0VzIzWFZ2MDNnNGs1b1g3OGF4QWpIM2VjbnJhdGladmtJRm5aNjh3ejlpdzlBR3cvcjlYVUhTd3pUaU1ZaEZPWW5DUjhwekZleVRES2IwWEZnLzhBd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=781545237123

| Marco | Data |
|---|---|
| Sprint #01: requisitos, documento de visão e diagramas. | 24/03/2026 |
| Sprint #02: protótipos das telas, termo de anuência, histórias de usuário e critérios de aceitação. | 07/04/2026 |
| Sprint #03: estrutura inicial do backend; cadastro e edição de resíduos; registro resíduo, cadastro de materiais, controle de estoque. | 21/04/2026 |
| Sprint #04: testes do frontend; testes do backend. | 05/05/2026 |
| Sprint #05: Evidências práticas, controle de usuários; testes do frontend. | 19/05/2026 |
| Sprint #06: conclusão das páginas de cadastro de resíduos e cadastro de usuários, criar o campo de CRM do usuário, DRT, mudar data de resíduo e adicionar campo de destino no banco de dados. | 02/06/2026 |
| Sprint #07: backend na página de perfil de usuário, testes e melhorias no sistema. | 16/06/2026 |

---

## 9. Requisitos Funcionais

| Código | Descrição |
|---|---|
| RF001 | Registrar resíduos com classificação conforme normas |
| RF002 | Associar destino ao resíduo |
| RF003 | Armazenar histórico completo |
| RF004 | Cadastrar materiais reutilizáveis |
| RF005 | Atualizar status dos materiais |
| RF006 | Registrar data e hora das operações |
| RF007 | Exibir estoque atualizado |
| RF008 | Gerar relatórios |
| RF009 | Cadastrar cadáver |
| RF010 | Atualizar estéril |

---

## 10. Requisitos Não Funcionais

| Código | Tipo | Descrição |
|---|---|---|
| RNF001 | Performance | Disponibilidade contínua |
| RNF002 | Usabilidade | Aplicação web responsiva |
| RNF002 | Usabilidade | Interface intuitiva |
| RNF004 | Segurança | Segurança dos dados |
| RNF005 | Manutenibilidade | Código modular |
| RNF006 | Legal | Conformidade com RDC 222/2018 |

---

## 11. Protótipo Visual

https://www.figma.com/make/gnKxFzvvVbdYAFmEUAtayT/Veterinary-Management-Dashboard-Wireframe--c%C3%B3pia-?p=f&fullscreen=1

> <img width="1917" height="832" alt="image" src="https://github.com/user-attachments/assets/6aafa865-dd8d-4c90-b35c-77346c62d20c" />
> <img width="1916" height="827" alt="image" src="https://github.com/user-attachments/assets/d1b20088-d125-4f90-bd23-05f19ec83fbf" />
> <img width="1915" height="836" alt="image" src="https://github.com/user-attachments/assets/16c634fb-65b3-4840-abd7-10bd4d859ef1" />
> <img width="1917" height="837" alt="image" src="https://github.com/user-attachments/assets/63bfc0c3-a25c-4515-b0ee-b6e3a3bce121" />
> <img width="1900" height="841" alt="image" src="https://github.com/user-attachments/assets/35e63ca2-f4e9-433f-baf1-8dc3c2c48892" />






---

## 12. Requisito dos MVPs

### 12.1. Aplicativo Móvel

Não aplicável neste projeto.

### 12.2. Web Application

- Cadastro de resíduos
- Cadastro de estoque estéril
- Cadastro de cadáveres
- Controle de saída de resíduos
- Controle de descarte de resíduos
- Controle de materiais
- Dashboard básico
- Relatórios simples

---

## 13. Modelo de Dados Backoffice

> <img width="935" height="675" alt="image 6" src="https://github.com/user-attachments/assets/a00c8e8d-c066-46c4-9922-263db03b0fba" />


**Tabelas principais e campos:**

**usuarios**
- id (serial, PK)
- nome (varchar(100), NN)
- email (varchar(150), NN)
- senha_hash (varchar(255), NN)
- perfil (varchar(30), NN)
- ativo (boolean)
- created_at (timestamp)

**empresas**
- id (serial, PK)
- razao_social (varchar(150), NN)
- cnpj (varchar(14))
- telefone (varchar(20))
- email (varchar(150))
- tipo (varchar(30))
- ativo (boolean)
- created_at (timestamp)

**destinos_cadaver**
- id (serial, PK)
- descricao (varchar(50), NN)

**categorias_descarte**
- id (serial, PK)
- nome (varchar(100), NN)
- descricao (text)
- ativo (boolean)
- created_at (timestamp)

**kits**
- id (serial, PK)
- nome (varchar(100), NN)
- descricao (text)
- tipo (varchar(50))
- ativo (boolean)
- created_at (timestamp)

**autoclaves**
- id (serial, PK)
- nome (varchar(100), NN)
- modelo (varchar(100))
- tipo (varchar(30))
- capacidade_litros (decimal(6,2))
- metodo_funcionamento (text)
- ativo (boolean)
- created_at (timestamp)

**cadaveres**
- id (serial, PK)
- especie (varchar(100), NN)
- identificacao (varchar(100))
- idade_anos (integer)
- peso_kg (decimal(6,2))
- data_entrada (date, NN)
- status (varchar(30))
- observacoes (text)
- registrado_por (integer, FK → usuarios, NN)
- created_at (timestamp)

**residuos**
- id (serial, PK)
- tipo_grupo (varchar(5), NN)
- descricao (text)
- quantidade (decimal(10,2), NN)
- unidade (varchar(20))
- data_registro (date, NN)
- status (varchar(30))
- setor_gerador (varchar(100))
- responsavel_id (integer, FK → usuarios)
- created_at (timestamp)

**descartes**
- id (serial, PK)
- categoria_id (integer, FK → categorias_descarte, NN)
- descricao (text, NN)
- quantidade (integer, NN)
- data_descarte (date, NN)
- responsavel_id (integer, FK → usuarios, NN)
- created_at (timestamp)

**ciclos_esterilizacao**
- id (serial, PK)
- autoclave_id (integer, FK → autoclaves, NN)
- data_hora_inicio (timestamp, NN)
- data_hora_fim (timestamp)
- temperatura_celsius (decimal(5,2))
- pressao_bar (decimal(5,2))
- tempo_minutos (integer)
- consumo_energia_kwh (decimal(6,4))
- quantidade_kits (integer)
- responsavel_id (integer, FK → usuarios, NN)
- status (varchar(30))
- created_at (timestamp)

**retiradas_cadaver**
- id (serial, PK)
- cadaver_id (integer, FK → cadaveres, NN)
- destino_id (integer, FK → destinos_cadaver, NN)
- empresa_id (integer, FK → empresas)
- data_coleta (date, NN)
- quantidade (integer)
- tipo_residuo (varchar(100))
- responsavel_id (integer, FK → usuarios, NN)
- observacoes (text)
- created_at (timestamp)

**ciclo_kits**
- id (serial, PK)
- ciclo_id (integer, FK → ciclos_esterilizacao, NN)
- kit_id (integer, FK → kits, NN)
- quantidade (integer, NN)

**validacoes_ciclo**
- id (serial, PK)
- ciclo_id (integer, FK → ciclos_esterilizacao, NN)
- responsavel_id (integer, FK → usuarios, NN)
- resultado (varchar(30))
- temperatura_ok (boolean)
- pressao_ok (boolean)
- tempo_ok (boolean)
- observacoes (text)
- data_validacao (timestamp)

---

## 14. Resultados de Teste

### 14.1. Informações do Documento

| Projeto | Versão | Data | Responsáveis |
|---|---|---|---|
| VetTrace | 1.0 | 09/06/2026 | Carlos Eduardo e Caio Peliz |

### 14.2. Objetivo

Este documento descreve os procedimentos de testes realizados no sistema, os critérios de aceitação, os resultados obtidos e os impactos identificados. Seu objetivo é garantir a qualidade das funcionalidades desenvolvidas.

### 14.3. Escopo dos Testes

- Cadastro de usuários
- Autenticação
- Validação de campos
- Cadastro de resíduos
- Consulta de resíduos
- Integração Frontend-Backend
- Persistência de dados PostgreSQL
- Relatórios e indicadores

### 14.4. Matriz de Testes e Devolutiva

| ID | Funcionalidade | Tipo | Resultado Esperado | Devolutiva / Impacto |
|---|---|---|---|---|
| CT-001 | Cadastro de Usuário | Regra de Negócio | Cadastrar usuário válido | Sucesso |
| CT-002 | Login | Critério de Aceitação | Autenticar usuário | Sucesso |
| CT-003 | Controle de Sessão | Critério de Aceitação | Bloquear acesso indevido | Sucesso |
| CT-004 | Cadastro de Resíduo | Regra de Negócio | Salvar dados | Sucesso |
| CT-005 | Consulta de Resíduos | Regra de Negócio | Exibir registros | Sucesso |
| CT-006 | Peso Total | Regra de Negócio | Somar resíduos | Sucesso |
| CT-007 | Filtrar Consulta de Resíduos | Regra de Negócio | Exibir registros classificados por filtro | Falha |
| CT-008 | Integração API | Integração | Comunicação correta | Sucesso |
| CT-009 | Persistência | Integração | Manter dados | Sucesso |
| CT-010 | Validação de Campos Obrigatórios | Critério de Aceitação | Mensagem de erro | Sucesso |
| CT-011 | Validação de Valor dos Campos | Critério de Aceitação | Mensagem de erro | Sucesso |

### 14.5. Casos de Teste Detalhados

#### CT-001 - Cadastro de Usuário

**Objetivo:** Criar novo usuário

**Passos:**
1. Acessar tela
2. Informar dados válidos
3. Salvar

**Resultado Esperado:** Usuário cadastrado

**Resultado Obtido:** SUCESSO - Usuário é cadastrado e dados são salvos corretamente

#### CT-002 - Login OAuth

**Objetivo:** Autenticação

**Passos:**
1. Clicar em login
2. Autorizar provedor

**Resultado Esperado:** Acesso liberado

**Resultado Obtido:** SUCESSO - Usuário consegue acessar o sistema usando suas credenciais

#### CT-003 - Controle de Sessão

**Objetivo:** Autenticação

**Passos:**
1. Clicar em login
2. Preencher dados inválidos

**Resultado Esperado:** Acesso bloqueado

**Resultado Obtido:** SUCESSO - Tentativa de acesso com credenciais inválidas é bloqueada

#### CT-004 - Cadastro de Resíduo

**Objetivo:** Registrar resíduo

**Passos:**
1. Preencher formulário
2. Salvar

**Resultado Esperado:** Registro salvo

**Resultado Obtido:** SUCESSO - Resíduo é registrado e salvo corretamente

#### CT-005 - Consulta de Resíduos

**Objetivo:** Exibir registros

**Passos:**
1. Acessar página de controle de resíduos
2. Visualizar registros

**Resultado Esperado:** Exibir resíduos registrados

**Resultado Obtido:** SUCESSO - Resíduos registrados são exibidos corretamente

#### CT-006 - Peso Total

**Objetivo:** Somar resíduos

**Passos:**
1. Acessar página de controle de resíduos
2. Visualizar indicadores

**Resultado Esperado:** Exibir soma correta

**Resultado Obtido:** SUCESSO - Peso de todos os resíduos registrados é somado e exibido corretamente

#### CT-007 - Filtrar Consulta de Resíduos

**Objetivo:** Exibir resíduos filtrados

**Passos:**
1. Acessar página de controle de resíduos
2. Visualizar indicadores

**Resultado Esperado:** Exibir registros classificados por filtro

**Resultado Obtido:** FALHA - Filtro não é aplicado e todos os registros são exibidos

**Impacto:** Dificuldade na visualização de dados do sistema e geração de relatórios

#### CT-008 - Integração API

**Objetivo:** Comunicação correta

**Passos:**
1. Realizar requisição para a API
2. Conferir resposta

**Resultado Esperado:** Integração com a API funcionando

**Resultado Obtido:** SUCESSO - A API responde às requisições com sucesso

#### CT-009 - Persistência

**Objetivo:** Manter dados

**Passos:**
1. Enviar dados para o backend
2. Conferir o banco de dados

**Resultado Esperado:** Salvar registros no banco de dados

**Resultado Obtido:** SUCESSO - Os dados registrados ficam armazenados no banco de dados

#### CT-010 - Validação de Campos Obrigatórios

**Objetivo:** Mensagem de erro

**Passos:**
1. Deixar campo obrigatório do formulário vazio
2. Salvar formulário
3. Dispensar mensagem de erro

**Resultado Esperado:** Exibir mensagem de erro

**Resultado Obtido:** SUCESSO - É exibida uma mensagem informando que campos obrigatórios devem ser preenchidos

#### CT-011 - Validação de Valor dos Campos

**Objetivo:** Mensagem de erro

**Passos:**
1. Preencher campo do formulário com dados inválidos
2. Salvar formulário
3. Dispensar mensagem de erro

**Resultado Esperado:** Exibir mensagem de erro

**Resultado Obtido:** SUCESSO - É exibida uma mensagem informando que o campo deve seguir o formato correto

---

### Evidência dos Testes

> <img width="916" height="555" alt="image" src="https://github.com/user-attachments/assets/1c5e4815-2f4f-438e-b6be-e0a251162e03" />
> <img width="917" height="536" alt="image" src="https://github.com/user-attachments/assets/ceee732f-511c-4081-ba28-89fffd07b004" />
> <img width="922" height="527" alt="image" src="https://github.com/user-attachments/assets/2abd69c8-40bf-452e-bed5-df98ce28d00e" />
> <img width="916" height="517" alt="image" src="https://github.com/user-attachments/assets/176afcb4-9a22-4229-af28-c6ac37ba841b" />
> <img width="917" height="602" alt="image" src="https://github.com/user-attachments/assets/8c7a739f-7629-4041-aad7-f54f6d96cdf1" />
> <img width="916" height="555" alt="image" src="https://github.com/user-attachments/assets/45d1aca6-84a6-4cd8-a547-db4291c88a31" />
> <img width="917" height="537" alt="image" src="https://github.com/user-attachments/assets/d401f47a-fe13-45ca-a586-d0db07869294" />
> <img width="927" height="537" alt="image" src="https://github.com/user-attachments/assets/9b74815f-46e4-485b-9cf2-0a6f37087ac3" />
> <img width="922" height="502" alt="image" src="https://github.com/user-attachments/assets/02c4a487-d5b2-4464-bcbc-85c5525c40e7" />


**/Cadastro**

**Cadastro de usuário com sucesso**

```
POST http://127.0.0.1:5000/api/auth/cadastro

Body:
{
  "nome": "Caio Cardoso",
  "telefone": "61999999999",
  "email": "caio@teste.com",
  "cargo": "admin",
  "crmv": "",
  "senha": "123456",
  "confirmar_senha": "123456"
}

201 CREATED
{
  "mensagem": "Conta criada com sucesso!",
  "usuario": {
    "email": "caio@teste.com",
    "id": 10,
    "nome": "Caio Cardoso",
    "perfil": "admin"
  }
}
```

**Cadastro com senhas diferentes**

```
POST http://127.0.0.1:5000/api/auth/cadastro

Body:
{
  "nome": "Maria",
  "email": "maria@teste.com",
  "cargo": "admin",
  "senha": "123456",
  "confirmar_senha": "654321"
}

400 BAD REQUEST
{
  "erro": "A senha e a confirmação de senha não coincidem."
}
```

**Cadastro faltando campos**

```
POST http://127.0.0.1:5000/api/auth/cadastro

Body:
{
  "email": "teste@teste.com"
}

400 BAD REQUEST
{
  "erro": "Preencha todos os campos obrigatórios."
}
```

**Cadastro com e-mail já cadastrado**

```
POST http://127.0.0.1:5000/api/auth/cadastro

Body:
{
  "nome": "Caio",
  "email": "caio@teste.com",
  "cargo": "admin",
  "senha": "123456",
  "confirmar_senha": "123456"
}

400 BAD REQUEST
{
  "erro": "Este e-mail já está cadastrado no VetTrace."
}
```

**/Login**

**Login realizado com sucesso**

```
POST http://127.0.0.1:5000/api/auth/login

Body:
{
  "email": "caio@teste.com",
  "senha": "123456"
}

200 OK
{
  "mensagem": "Login realizado com sucesso!",
  "token": "<JWT omitido>",
  "usuario": {
    "email": "caio@teste.com",
    "id": 10,
    "nome": "Caio Cardoso",
    "perfil": "admin"
  }
}
```

**Login realizado com senha incorreta**

```
POST http://127.0.0.1:5000/api/auth/login

Body:
{
  "email": "caio@teste.com",
  "senha": "senha_errada"
}

401 UNAUTHORIZED
{
  "erro": "E-mail ou senha incorretos."
}
```

**Login com e-mail incorreto**

```
POST http://127.0.0.1:5000/api/auth/login

Body:
{
  "email": "naoexiste@teste.com",
  "senha": "123456"
}

401 UNAUTHORIZED
{
  "erro": "E-mail ou senha incorretos."
}
```

**/residuo**

**Cadastro de Resíduo**

```
POST http://127.0.0.1:5000/residuo

Body:
{
  "tipo_grupo": "A",
  "descricao": "Seringas contaminadas",
  "quantidade": 12.5,
  "unidade": "kg",
  "data_registro": "2026-06-09",
  "setor_gerador": "CC",
  "responsavel_id": 1
}

201 CREATED
{
  "id": 4,
  "message": "Resíduo cadastrado com sucesso"
}
```

**Consulta do Peso Total**

```
GET http://127.0.0.1:5000/residuo/peso-total

200 OK
{
  "peso_total": "13.50"
}
```

---

## REGRAS DE NEGÓCIO

### 1. Introdução

Este documento define de forma consolidada todas as regras de negócio que governam o comportamento, as restrições e as validações do sistema **VetTrace**, cobrindo o ciclo de desenvolvimento da **Sprint 1 até a Sprint 5**. Estas diretrizes asseguram a integridade lógica dos dados, a imutabilidade dos históricos operacionais e a estrita conformidade legal com as normativas sanitárias e ambientais vigentes, em especial a resolução **RDC 222/2018**.

### 2. Módulo: Controle de Acesso, Perfis e Autenticação

**RN29 – Autenticação Obrigatória**
- O acesso às funcionalidades, telas e dados do ecossistema VetTrace é estritamente restrito a usuários previamente cadastrados e ativos no banco de dados. O sistema deve exigir obrigatoriamente um identificador (*Login* ou *E-mail*) e uma *Senha válida* para conceder qualquer nível de acesso.

**RN30 – Validação de Credenciais e Segurança de Acesso**
- O sistema deve processar e validar as credenciais no ato da autenticação. Caso os dados informados sejam incorretos ou inexistentes, o sistema deve bloquear imediatamente o fluxo de navegação, negar o acesso e retornar uma mensagem genérica de erro ao usuário, impedindo vulnerabilidades de descoberta de dados.

**RN31 – Registro de Acesso ao Sistema (Log de Auditoria)**
- Cada evento de login bem-sucedido deve disparar um processo automatizado de auditoria que grava de forma imutável: a Data, a Hora exata e a identificação do Usuário responsável pelo login. Estas informações devem ser protegidas contra deleção e armazenadas perpetuamente para auditorias.

**RN32 / RN24 – Cadastro Único e Unicidade de Usuários**
- Para evitar redundâncias e problemas de rastreabilidade, o sistema deve impor chaves de unicidade no banco de dados. Não será permitida, sob hipótese alguma, a duplicidade de usuários baseada em campos idênticos de Login ou E-mail.

**RN33 – Obrigatoriedade de Informações Cadastrais**
- O formulário de inclusão de usuários possui preenchimento estritamente obrigatório. O sistema deve barrar e acusar inconsistência em cadastros que não contenham todos os seguintes metadados: Nome completo, E-mail único, Login exclusivo, Senha criptografada e o Tipo de Usuário (Nível de Acesso/Perfil).

**RN34 / RN25 – Controle de Permissões por Perfil de Acesso (RBAC)**

O sistema deve restringir e validar a execução de rotinas baseando-se no Perfil de Acesso associado ao usuário logado. O ecossistema VetTrace é composto por três perfis estanques:

1. **Perfil Administrador:** Possui controle total sobre a plataforma. É o único perfil com autorização legal e sistêmica para gerenciar usuários, alterar níveis de permissão, redefinir políticas de segurança e acessar telas de configurações avançadas do sistema.
2. **Perfil Técnico:** Perfil estritamente operacional e de gestão diária. O técnico possui autorização para realizar "quase tudo" na rotina prática do sistema (efetuar cadastros de resíduos, gerenciar entradas e saídas de cadáveres, movimentar materiais esterilizados e gerar relatórios analíticos). Fica terminantemente bloqueado de acessar áreas de configuração do sistema ou alterar permissões de outros usuários.
3. **Perfil Solicitante:** Perfil com restrição severa de navegação. O solicitante possui permissão única e exclusiva para interagir com o fluxo de solicitação de materiais reutilizáveis ou clínicos. Fica completamente impedido de registrar resíduos, dar baixas de cadáveres, gerar relatórios globais ou acessar qualquer painel administrativo.

### 3. Módulo: Gestão e Controle de Resíduos

**RN01 – Classificação Obrigatória do Resíduo**
- Todo e qualquer resíduo inserido no sistema necessita obrigatoriamente de uma classificação válida no exato momento do seu registro inicial, devendo ser categorizado rigidamente como: Infectante, Comum ou Perfurocortante. O sistema deve impedir o fechamento do formulário caso o operador não assinale uma das opções.

**RN02 – Destino Obrigatório do Resíduo**
- Não é permitido manter resíduos em estado de limbo de destinação. Todo registro deve possuir obrigatoriamente um destino atrelado no ato do cadastro ou da baixa: Descarte direto ou Encaminhamento. O motor de banco de dados deve recusar a transação se o campo estiver nulo.

**RN03 – Rastreabilidade Histórica do Resíduo**
- Cada ciclo de vida de resíduo gerado deve ser acompanhado de uma trilha contendo: a Data e hora do registro, a Origem física do procedimento gerador e a lista cronológica de Alterações realizadas. Dados consolidados não podem ser alterados ou sobrescritos sem que a versão anterior seja guardada no histórico.

**RN04 – Integridade e Validação dos Dados de Resíduos**
- O sistema deve aplicar regras aritméticas e temporais rígidas de validação: a Quantidade física informada deve ser obrigatoriamente um valor numérico real maior que zero, o Tipo e a Origem informados devem constar como ativos nas tabelas de parametrização e a Data/Hora informada nunca poderá ser uma data futura em relação ao relógio do servidor.

**RN05 / RN35 – Imutabilidade, Persistência e Proibição de Exclusão Física**
- Para fins de auditoria ambiental e sanitária, o registro principal de um resíduo é considerado imutável no que tange à sua existência física. O sistema é proibido de possuir funções de exclusão física (hard delete) para dados de resíduos. Eventuais correções de digitação devem ser tratadas como uma nova versão registrada na tabela de históricos, garantindo a rastreabilidade exigida por lei.

**RN36 – Atualização Automática das Consultas**
- As interfaces e telas de consulta de históricos e estoques de resíduos devem ser atualizadas dinamicamente. Sempre que um usuário (com perfil Técnico) realizar uma inserção ou baixa, os dados nas telas abertas de outros terminais devem atualizar automaticamente, sem necessidade de refresh manual da página.

**RN37 – Associação Compulsória do Usuário ao Registro**
- Todo cadastro de resíduo deve conter um vínculo relacional indissociável com a conta do usuário logado que realizou a operação. O sistema registrará e armazenará de maneira automática: o Usuário responsável, a Data e a Hora exata do cadastro.

### 4. Módulo: Rastreabilidade de Cadáveres Congelados e Empresas

**RN16 – Identificação Obrigatória do Cadáver**
- Todo cadáver animal direcionado para o armazenamento a frio deve possuir uma identificação única no sistema. O preenchimento dos campos Identificação do animal, Espécie e Data de entrada é considerado cláusula obrigatória para validação do formulário, impedindo registros anônimos.

**RN17 – Controle de Armazenamento de Cadáveres**
- O prontuário de armazenamento do cadáver deve conter, de forma obrigatória, os seguintes indicadores técnicos: Peso exato (em kg), Idade aproximada (quando informada pelo tutor/clínica), Motivo detalhado do armazenamento e a assinatura digital do Responsável pelo registro. Os dados devem ficar blindados para consulta e auditoria.

**RN18 – Registro Obrigatório de Entrada de Cadáveres**
- Toda entrada física no congelador deve gerar um registro automatizado capturando: Data, Hora, Quantidade e a identificação do Responsável operacional pelo recebimento, amarrando a ponta inicial da rastreabilidade.

**RN19 – Controle de Saída e Baixa de Cadáveres**
- Nenhum cadáver armazenado sob a tutela da clínica poderá ter sua saída efetivada no sistema sem o preenchimento obrigatório e casado dos seguintes dados: Empresa de coleta responsável, Data da retirada, Quantidade removida e o Tipo de saída (ex: Labocien ou Descarte Externo). O sistema bloqueará baixas que omitirem tais informações.

**RN20 – Validação de Quantidade Disponível (Saldo Negativo)**
- O motor de validação de estoque do sistema deve aplicar uma trava lógica intransponível: a quantidade de cadáveres selecionados para remoção/saída nunca poderá ser maior do que a quantidade volumétrica atualmente registrada como disponível no congelamento. O sistema deve bloquear qualquer operação que resulte em saldo ou inventário negativo.

**RN21 – Cadastro Único de Empresas de Coleta**
- As empresas prestadoras de serviço de descarte devem ser únicas. O sistema deve validar e rejeitar inserções redundantes no cadastro de fornecedores usando como chaves de validação impeditivas a duplicidade do Nome da Empresa ou do número do CNPJ.

**RN22 – Empresa Obrigatória para Retirada**
- Toda e qualquer movimentação classificada como saída (seja de lotes de resíduos ou de cadáveres) deve, por regra de integridade relacional, estar vinculada a uma empresa devidamente cadastrada e ativa no sistema. Saídas com destinos anônimos ou sem empresa associada serão bloqueadas pelo sistema.

**RN23 – Histórico Geral de Coletas**
- O sistema manterá um relatório histórico imutável focado nas operações de coletas realizadas pelas empresas terceirizadas. O registro de coleta deve conter indexados: a Empresa responsável, a Data, a Quantidade recolhida e o Usuário técnico responsável pelo registro da baixa. Exclusões físicas destes registros são estritamente proibidas.

### 5. Módulo: Controle de Materiais Esterilizados

**RN06 – Status Único por Material**
- Cada item ou instrumental cadastrado no inventário de reutilizáveis deve possuir estritamente um único status ativo por vez no banco de dados, sendo os status restritos a: Sujo, Em esterilização, Esterilizado ou Em uso. O sistema deve impedir, por meio de restrições lógicas, a existência de múltiplos status simultâneos para o mesmo item.

**RN07 – Controle e Lógica do Ciclo de Vida do Material**
- O fluxo de transição de status deve obedecer obrigatoriamente à seguinte sequência cronológica linear: Sujo → Em esterilização → Esterilizado → Em uso. O sistema deve aplicar inteligência de processo para bloquear quebras de fluxo inválidas (como, por exemplo, tentar alterar um material do status de Sujo diretamente para o status de Em uso, sem passar pela esterilização).

**RN08 – Registro Automático de Mudanças de Status**
- No exato momento em que o operador alterar o status do material, o sistema disparará uma rotina interna para capturar e registrar de forma 100% automatizada a Data e a Hora da transição, sem requerer ou permitir qualquer tipo de digitação ou intervenção manual do usuário nesses campos de tempo.

**RN09 – Histórico de Materiais**
- A plataforma deve salvar todas as mudanças históricas de status pelas quais os materiais passarem. Nenhuma atualização corrente ou alteração de lote poderá apagar, sobrescrever ou expurgar o registro histórico das movimentações anteriores, de forma a manter a auditoria do ciclo de uso dos instrumentais.

**RN10 – Prevenção de Uso Indevido e Risco Biológico**
- Por motivos de biossegurança clínica, materiais reutilizáveis e kits cirúrgicos só estarão liberados no sistema para movimentação e associação a procedimentos quando seu status atual for rigorosamente igual a Esterilizado. O sistema deve bloquear qualquer tentativa de liberação de uso para materiais que estejam sob os status de Sujo ou Em esterilização.

### 6. Regras de Sistema Gerais e Transversais

**RN11 – Registro Temporal Obrigatório (Timestamp)**
- Todas as operações realizadas, sem exceções, devem receber carimbo temporal automático contendo Data e Hora. Essa regra de auditoria se aplica de maneira universal a cadastros de resíduos, movimentações de materiais, logs de acesso e edições históricas.

**RN12 – Rastreabilidade Completa e Auditoria**
- O sistema deve ser desenvolvido para fornecer mecanismos nativos que permitam a consulta ágil de históricos, a auditoria retroativa de ações operacionais e a clara identificação de quem realizou alterações, quando as realizou e quais dados foram modificados.

**RN13 – Consistência e Integridade dos Dados**
- A arquitetura do banco de dados deve implementar restrições para evitar a duplicidade de materiais cadastrados, garantir a integridade relacional entre as tabelas (evitando registros órfãos) e aplicar rotinas severas de validação nas entradas de dados digitadas pelos usuários.

**RN14 – Interface Orientada ao Usuário (Usabilidade)**
- As interfaces do sistema devem ser desenhadas prezando pela simplicidade e clareza intuitiva. O sistema deve adotar mecanismos visuais de prevenção de erros (como campos de seleção e bloqueios lógicos prévios), minimizando falhas operacionais humanas por parte dos profissionais da clínica.

**RN15 / RN26 / RN27 / RN28 – Integridade dos Relatórios e Imutabilidade Auditável**
- Os relatórios operacionais e gerenciais gerados pela plataforma devem refletir com precisão matemática os dados reais armazenados no banco de dados, sendo vedada qualquer divergência de informações.
- Toda a movimentação de entrada, saída, coleta e descarte de materiais, cadáveres ou resíduos deve possuir amarração com Data, Hora, Usuário e Empresa parceira (quando aplicável), sendo proibida a exclusão física destas informações da base, mantendo o sistema em conformidade perpétua com as diretrizes da RDC 222/2018 e as boas práticas de gerenciamento sanitário.

---

## Histórias de Usuário

**Escopo e Papéis do Sistema:**

Conforme as diretrizes de controle de acesso estabelecidas para o sistema VetTrace, existem estritamente três perfis de usuários mapeados:

- **Administrador:** Possui controle total sobre as configurações e permissões do sistema, sendo o único responsável por gerenciar acessos, cadastrar usuários gerais e empresas parceiras. Não atua nas rotinas diárias operacionais se houver restrições, mas detém as funções de governança.
- **Técnico:** Usuário operacional avançado. É o perfil responsável por quase todas as operações práticas do sistema: registrar e destinar resíduos, cadastrar materiais reutilizáveis e atualizar status, gerenciar o controle de cadáveres congelados (entradas e saídas) e gerar relatórios completos de rastreabilidade e auditoria. Não possui permissão de administrador (configurações globais e permissões).
- **Solicitante:** Usuário com escopo estritamente limitado. Tem permissão exclusiva para realizar e acompanhar solicitações de materiais no sistema, não possuindo acesso a módulos de gestão de resíduos, cadáveres ou relatórios de rastreabilidade.

### 1. Módulo: Autenticação e Gestão de Usuários

**HU18 – Realizar login no sistema**

Como usuário do sistema (Administrador, Técnico ou Solicitante)
Quero realizar login com minhas credenciais
Para acessar as funcionalidades do VetTrace com segurança de acordo com meu perfil de acesso

Critérios de Aceitação:
- Deve permitir informar: E-mail ou login e Senha.
- O sistema deve validar as credenciais cadastradas.
- O usuário deve ser redirecionado para o dashboard específico do seu perfil após login válido.
- O sistema deve exibir mensagem de erro para credenciais inválidas.
- O acesso deve ser permitido apenas para usuários devidamente cadastrados e ativos.

**HU19 – Cadastrar usuário no sistema**

Como administrador
Quero cadastrar novos usuários e definir seus perfis
Para permitir acesso controlado e seguro ao sistema VetTrace

Critérios de Aceitação:
- Deve permitir informar: Nome, E-mail, Login, Senha e Tipo de usuário (Administrador, Técnico ou Solicitante).
- Todos os campos obrigatórios devem ser validados.
- O sistema não deve permitir a criação de usuários duplicados (mesmo login ou e-mail).
- O cadastro deve ser armazenado corretamente no banco de dados.
- O usuário cadastrado deve conseguir acessar o sistema imediatamente após o salvamento, respeitando as permissões do seu tipo.

**HU16 – Gerenciar permissões de usuários**

Como administrador
Quero controlar e revisar os níveis de acesso dos usuários
Para garantir a segurança das informações e assegurar que Solicitantes e Técnicos acessem apenas suas respectivas funções

Critérios de Aceitação:
1. Deve permitir a atribuição e alteração dos 3 perfis de acesso (Administrador, Técnico e Solicitante).
2. Usuários nos perfis Técnico e Solicitante não devem ter acesso a funções administrativas ou de configuração de permissões.
3. Todas as alterações de permissões de perfis devem gerar um registro automático de log (auditoria).
4. As novas diretrizes de permissão devem ser aplicadas imediatamente na sessão do usuário afetado.

### 2. Módulo: Gestão de Resíduos Veterinários

**HU01 / HU20 – Registrar resíduo gerado**

Como técnico
Quero registrar um resíduo gerado na clínica veterinária
Para garantir o controle regulatório e a rastreabilidade completa do descarte

Critérios de Aceitação:
- Deve permitir informar: Tipo de resíduo (infectante, comum, perfurocortante, etc.), Quantidade (peso/volume), Origem (cirurgia, consulta, laboratório, etc.) e Data e hora da geração.
- Todos os campos obrigatórios devem ser validados antes de salvar.
- O sistema deve registrar automaticamente o usuário (Técnico) responsável pelo lançamento.
- O registro deve ser salvo no banco de dados de forma imutável para o histórico e ficar disponível para consulta imediata.

**HU02 – Definir destino do resíduo**

Como técnico
Quero informar o destino inicial ou encaminhamento do resíduo cadastrado
Para manter o controle adequado em estrita conformidade com as normas sanitárias e ambientais

Critérios de Aceitação:
- Deve permitir selecionar opções normatizadas como: Descarte direto, Encaminhamento externo (ex: patologia, incineração, aterro especializado).
- O preenchimento do campo de destino é obrigatório para a finalização do ciclo do resíduo.
- Deve ser possível editar o destino em caso de correções operacionais.
- O sistema deve armazenar e exibir um histórico completo de qualquer alteração realizada no destino do lote.

**HU03 / HU21 – Consultar resíduos cadastrados**

Como técnico
Quero visualizar e filtrar as movimentações de resíduos registradas
Para acompanhar as operações realizadas e auditar os lotes na clínica

Critérios de Aceitação:
- Deve listar em tela todos os resíduos com: Tipo de resíduo, Quantidade, Origem, Destino e Data e hora.
- Deve fornecer filtros funcionais por: Tipo de resíduo e Período (Data inicial e final).
- Os dados devem ser exibidos de forma organizada e cronológica.
- As informações da listagem devem ser atualizadas automaticamente após novos registros no sistema.

### 3. Módulo: Gestão de Materiais Reutilizáveis e Solicitações

**HU05 – Cadastrar material reutilizável**

Como técnico
Quero cadastrar materiais reutilizáveis no sistema
Para controlar perfeitamente seu ciclo de esterilização e uso

Critérios de Aceitação:
- Deve permitir cadastrar: Nome do material e Categoria (opcional).
- O sistema deve impedir cadastros duplicados com o mesmo nome para evitar inconsistências no estoque.
- Por padrão, novos materiais devem entrar no sistema com o status inicial "Sujo" ou configurável.

**HU06 – Atualizar status do material**

Como técnico
Quero atualizar o status de conservação e esterilização do material
Para informar aos solicitantes se o item está pronto e seguro para uso clínico

Critérios de Aceitação:
- O sistema deve permitir transições estritas entre os seguintes status: Sujo, Em esterilização, Esterilizado e Em uso.
- Cada mudança de status deve registrar automaticamente o timestamp (Data e Hora) e o Técnico executor.
- O material deve reter apenas um status ativo por vez.
- O histórico completo de alterações de status deve ficar gravado para fins de rastreabilidade.

**HU07 – Visualizar estoque de materiais**

Como solicitante ou técnico
Quero visualizar a listagem e o estoque de materiais disponíveis
Para saber exatamente o que pode ser requisitado e utilizado nas rotinas veterinárias

Critérios de Aceitação:
- Deve listar os materiais exibindo de forma clara: Nome, Status atual e Quantidade (se aplicável).
- Deve permitir a aplicação de filtros por status (ex: listar apenas itens "Esterilizados").
- O sistema deve destacar visualmente os materiais que estão com status "Esterilizado" para facilitar a separação rápida.

**HU15 – Realizar e acompanhar solicitações (Usuários Solicitantes)**

Como solicitante
Quero solicitar materiais esterilizados específicos para procedimentos
Para garantir os insumos necessários para o atendimento clínico sem acessar áreas administrativas do sistema

Critérios de Aceitação:
- O Solicitante deve conseguir selecionar materiais com status "Esterilizado" e abrir uma requisição.
- O preenchimento de campos básicos (Procedimento, Quantidade, Data/Hora da necessidade) deve ser validado.
- O Solicitante deve possuir uma tela exclusiva para visualizar o andamento de suas próprias solicitações abertas.
- O perfil Solicitante fica completamente bloqueado de visualizar telas de relatórios gerais, cadastro de empresas ou registros de resíduos da clínica.

**HU08 – Identificar materiais pendentes de esterilização**

Como técnico
Quero identificar com agilidade quais materiais estão pendentes de processamento
Para priorizar as atividades de esterilização na autoclave e evitar o desabastecimento

Critérios de Aceitação:
- Deve exibir uma visão ou aba contendo exclusivamente materiais nos status: Sujo e Em esterilização.
- Deve permitir a ordenação por tempo de acesso no status atual.
- Deve possuir forte identificação visual cromática para agilizar o fluxo operacional.

### 4. Módulo: Controle de Cadáveres Congelados

**HU10 – Cadastrar cadáver congelado**

Como técnico
Quero registrar um cadáver congelado no sistema com seus dados clínicos
Para manter a correta rastreabilidade legal, sanitária e o controle de armazenamento físico

Critérios de Aceitação:
- Deve permitir informar: Identificação do animal, Espécie, Peso, Idade, Data de entrada e Motivo do armazenamento.
- Todos os campos obrigatórios listados devem ser validados pelo sistema antes do salvamento.
- O sistema deve vincular o registro ao freezer/gaveta correspondente (se disponível) e salvar no banco de dados.
- O registro deve ficar permanentemente arquivado e disponível para futuras consultas ou auditorias de vigilância sanitária.

**HU11 – Registrar entrada de cadáveres no armazenamento**

Como técnico
Quero registrar formalmente o lote de entrada de cadáveres no armazenamento congelado
Para manter o controle quantitativo e a capacidade volumétrica atualizada

Critérios de Aceitação:
- Deve permitir registrar: Data da entrada, Quantidade, Origem e o Técnico Responsável pela conferência.
- O sistema deve gravar a data e a hora da ação de forma automatizada.
- O histórico volumétrico do local de armazenamento deve ser atualizado instantaneamente.

**HU12 – Registrar saída de cadáveres do armazenamento**

Como técnico
Quero registrar a retirada física de cadáveres do armazenamento frigorífico
Para dar baixa no estoque e registrar a destinação final oficial

Critérios de Aceitação:
- Deve permitir informar: Empresa responsável pela remoção, Tipo de saída, Quantidade retirada e Data da retirada física.
- O campo de empresa coletora deve permitir a seleção de parceiros homologados cadastrados, incluindo opções como: Labocien, Empresa terceirizada ou outros destinos regulamentares.
- O sistema deve capturar a data e hora do registro de forma automática.
- O sistema deve bloquear saídas cujo quantitativo informado seja superior ao estoque atualmente disponível no armazenamento.

### 5. Módulo: Empresas de Coleta e Descarte

**HU13 – Cadastrar empresa responsável por destinação**

Como administrador
Quero cadastrar e homologar as empresas responsáveis pela coleta, transporte e descarte final de resíduos e cadáveres
Para que os técnicos possam vinculá-las corretamente nas operações de saída

Critérios de Aceitação:
- Deve permitir informar: Nome da empresa (Razão Social/Fantasia), CNPJ, Telefone de contato e Tipo de serviço prestado (Coleta de resíduos infectantes, recolhimento de cadáveres, etc.).
- O sistema deve validar o CNPJ e impedir o cadastro de empresas duplicadas.
- Deve permitir a edição posterior dos dados cadastrais por parte do Administrador.
- As empresas salvas e marcadas como ativas devem aparecer imediatamente nas listagens de seleção de saídas operadas pelos Técnicos.

**HU14 – Consultar histórico de coletas por empresa**

Como técnico
Quero visualizar o histórico consolidado de coletas efetuadas pelas empresas terceirizadas
Para acompanhar a frequência de descarte e fornecer comprovantes em fiscalizações

Critérios de Aceitação:
- A tela deve listar claramente: Empresa responsável, Data exata da coleta, Quantidade total recolhida e o Tipo de material/resíduo retirado da clínica.
- Deve disponibilizar filtros rápidos por: Intervalo de Data e Empresa Coletora.
- A exibição e estruturação dos dados devem ser limpas e organizadas.

### 6. Módulo: Relatórios de Rastreabilidade e Dashboard

**HU04 / HU17 – Gerar relatórios de rastreabilidade completa**

Como técnico
Quero gerar relatórios completos e consolidados de movimentações operacionais
Para analisar dados de descarte, comprovar conformidade legal (RDC 222/2018) e auditar o fluxo da clínica

Critérios de Aceitação:
- Deve permitir a geração de relatórios integrados englobando: Entradas de resíduos, Saídas/destinações de resíduos, Entradas de cadáveres, Saídas/retiradas de cadáveres e a indicação das Empresas responsáveis pelas coletas.
- Deve conter dados consolidados como o total de resíduos por período e classificação por tipo.
- Deve obrigar ou permitir filtros refinados por: Período (Data de/até), Empresa coletora e Tipo de material (infectante, comum, etc.).
- O relatório gerado deve ser exibido na tela de forma amigável e possuir dados 100% consistentes e sincronizados com os registros do banco de dados.

**HU09 – Visualizar dashboard geral**

Como técnico ou administrador
Quero visualizar um painel (dashboard) com os principais indicadores em tempo real
Para monitorar a situação geral da clínica e tomar decisões ágeis

Critérios de Aceitação:
- O painel deve consolidar e exibir graficamente ou em formato de cards: Total de resíduos veterinários registrados no período, Quantidade de materiais atualmente esterilizados e prontos, e Quantidade de materiais pendentes de esterilização.
- Os dados apresentados devem ser dinâmicos, atualizando-se de forma reativa conforme novas ações e lançamentos são salvos no sistema.
- A interface gráfica deve primar pela clareza, simplicidade e intuição visual.

### 7. Regras Gerais de Engenharia e Negócio

- **Rastreabilidade de Auditoria:** Toda e qualquer ação de inserção ou alteração de registros no sistema deve capturar e registrar automaticamente a Data, Hora e a Identificação do usuário executor.
- **Conformidade Sanitária:** Todas as classificações de resíduos, fluxos de destinação e regras de armazenamento devem seguir estritamente as diretrizes vigentes da resolução RDC 222/2018 da ANVISA.
- **Interface de Usuário:** O design das telas deve ser simples, limpo e altamente intuitivo, garantindo que o Técnico na operação diária e o Solicitante em suas requisições operem o sistema sem ruídos.

Critérios de Aceitação Detalhados:
https://docs.google.com/document/d/18yHIyWZkJKc1HxS_XIDpgWlphoUqBg4qKVRoPLzUu44/edit?usp=sharing

---

## CRITÉRIOS DE ACEITAÇÃO

### 1. Introdução

Este documento tem como objetivo definir de forma consolidada e centralizada todos os critérios de aceitação desenvolvidos ao longo do ciclo evolutivo do sistema VetTrace, abrangendo desde a Sprint 1 até a Sprint 5. O propósito principal é garantir que todas as funcionalidades entregues atendam rigorosamente aos requisitos funcionais, regras de negócio e necessidades operacionais dos usuários clínicos e administrativos.

O escopo integrado deste documento engloba a gestão completa de resíduos veterinários comuns e perigosos, o controle de ciclo de vida e estoque de materiais esterilizados, o controle de armazenamento e rastreabilidade de cadáveres congelados, o gerenciamento de coletas e retiradas por empresas terceirizadas homologadas, além de toda a administração de segurança, níveis de permissão e autenticação de usuários do sistema.

Todas as especificações aqui descritas asseguram a conformidade legal e operacional com as diretrizes regulatórias vigentes da vigilância sanitária e ambiental, seguindo estritamente a resolução RDC 222/2018.

### 2. Módulo: Gestão e Controle de Resíduos

**CA01 – Registro de Resíduos**
- **Descrição:** Permitir o cadastro completo, tipificado e detalhado de novos resíduos gerados nas dependências da clínica veterinária.
- **Critérios de Aceitação:**
  - O sistema deve disponibilizar interface para inserção dos seguintes dados obrigatórios:
    - Tipo de resíduo (com opções pré-definidas via seleção para: Infectante, Comum, Perfurocortante).
    - Data e Hora exatas do momento da geração ou pesagem.
    - Quantidade numérica (associada à respectiva unidade de medida padrão, como kg ou litros).
    - Origem física do resíduo (com opções de seleção para: Cirurgia, Consulta, Laboratório).
  - O sistema deve realizar a validação em tempo real de todos os campos obrigatórios, bloqueando o salvamento de registros incompletos.
  - Após a validação bem-sucedida, o registro deve ser devidamente gravado e armazenado no banco de dados.
  - O resíduo cadastrado deve ficar disponível imediatamente para consultas posteriores no histórico de movimentações.

**CA02 – Definição de Destino do Resíduo**
- **Descrição:** Associar o encaminhamento ou destino final correto a um resíduo previamente cadastrado no sistema.
- **Critérios de Aceitação:**
  - O sistema deve permitir ao usuário operador selecionar o destino através de uma das seguintes diretrizes:
    - Descarte direto.
    - Encaminhamento (armazenamento provisório ou área de descarte temporário).
  - O campo relativo ao preenchimento do destino deve ser tratado pelo sistema como obrigatório.
  - Deve ser permitido editar e atualizar a informação do destino mesmo após a conclusão do cadastro inicial do resíduo.
  - O sistema deve registrar automaticamente um histórico auditável de alterações, vinculando a cada modificação a Data, Hora e a identificação do usuário responsável.

**CA03 – Consulta de Histórico de Resíduos**
- **Descrição:** Visualizar e rastrear retroativamente todos os resíduos cadastrados na base de dados do sistema.
- **Critérios de Aceitação:**
  - O sistema deve listar todos os resíduos registrados de forma tabular, legível e cronológica.
  - A tela de listagem deve exibir de forma organizada as colunas básicas: Tipo, Quantidade, Destino, Origem e Data/Hora.
  - A interface deve fornecer componentes de filtros avançados para refinar os dados por:
    - Intervalo de Data (Início / Fim).
    - Tipo de resíduo.

**CA04 – Geração de Relatórios de Resíduos**
- **Descrição:** Emitir relatórios analíticos e consolidados de resíduos para fins de fiscalização, auditoria e tomadas de decisão gerenciais.
- **Critérios de Aceitação:**
  - O sistema deve estruturar e gerar relatórios contendo:
    - Total volumétrico acumulado de resíduos gerados por período.
    - Classificação e distribuição gráfica/percentual agrupada por tipo de resíduo.
  - O sistema deve obrigar a filtragem prévia por um intervalo de datas.
  - O relatório deve ser exibido diretamente em tela de forma formatada e responsiva.
  - Os dados consolidados no relatório devem ser 100% consistentes e matematicamente alinhados com os registros individuais gravados no banco de dados.

**CA14 – Registro de Entrada de Resíduos (Fluxo Clínico)**
- **Descrição:** Registrar especificamente a entrada e a volumetria de resíduos originados pelos procedimentos do ecossistema da clínica.
- **Critérios de Aceitação:**
  - O sistema deve permitir preencher na rotina de entrada: Tipo de resíduo, Quantidade, Data e hora, Origem e o Responsável pelo registro.
  - Todos os campos obrigatórios listados devem passar por rotinas de validação antes do armazenamento definitivo.
  - Uma vez salvos os dados no banco, as informações de entrada devem ficar disponíveis para consultas de auditoria e fins estatísticos.
  - O sistema deve manter a rastreabilidade unívoca do resíduo a partir deste ponto inicial.

**CA15 – Registro de Saídas de Resíduos**
- **Descrição:** Controlar, validar e dar baixa nos resíduos retirados das dependências físicas da clínica pelas empresas de coleta externa credenciadas.
- **Critérios de Aceitação:**
  - O sistema deve exigir a seleção e o preenchimento de: Empresa responsável pela coleta, Tipo de resíduo coletado, Quantidade exata retirada e Data física da retirada.
  - O sistema deve capturar e registrar de forma nativa e automática no banco de dados: Data, Hora e o Usuário logado responsável por homologar a saída.
  - O sistema deve aplicar uma regra de consistência de inventário: impedir qualquer retirada de resíduos que apresente quantidade superior àquela disponível e armazenada em estoque.
  - O histórico completo de retiradas anteriores deve ficar armazenado e disponível para consultas e relatórios fiscais.

**CA21 – Consulta de Resíduos Registrados (Painel Geral)**
- **Descrição:** Disponibilizar uma visão global dedicada à listagem e ao monitoramento ágil dos resíduos controlados.
- **Critérios de Aceitação:**
  - O sistema deve carregar e listar dinamicamente em tela as informações básicas: Tipo de resíduo, Quantidade, Origem, Data e hora.
  - Deve permitir buscas dinâmicas através de filtros rápidos baseados no Tipo e na Data de registro.
  - O sistema deve ser desenvolvido para que as informações atualizem de forma automática na tela assim que novos registros adjacentes forem incluídos.
  - Os dados de resíduos devem permanecer permanentemente salvos e disponíveis para manter a rastreabilidade histórica de longo prazo exigida por lei.

### 3. Módulo: Rastreabilidade de Cadáveres Congelados

**CA10 – Cadastro de Cadáveres Congelados**
- **Descrição:** Permitir o registro e controle cadastral minucioso de cadáveres animais direcionados ao armazenamento congelado para fins de descarte, necropsia ou encaminhamento laboratorial.
- **Critérios de Aceitação:**
  - O sistema deve disponibilizar campos para preenchimento obrigatório de:
    - Nome ou identificação única atribuída ao animal.
    - Espécie.
    - Peso exato (em kg).
    - Idade aproximada ou exata do animal.
    - Data da entrada no armazenamento frio.
    - Motivo explícito do armazenamento (ex: descarte sanitário, análise laboratorial).
    - Identificação do profissional responsável pelo registro.
  - O sistema deve validar todos os parâmetros de preenchimento obrigatório e impedir o salvamento de registros de cadáveres incompletos.
  - Após a gravação no banco de dados, o prontuário do cadáver deve ficar indexado e disponível para consultas posteriores.
  - O sistema deve gerar e registrar automaticamente um carimbo contendo a data e a hora do cadastro na plataforma.

**CA11 – Controle de Entrada de Cadáveres**
- **Descrição:** Registrar e contabilizar formalmente a entrada física de cadáveres no setor de armazenamento congelado da clínica.
- **Critérios de Aceitação:**
  - O sistema deve permitir a seleção estruturada de: Data de entrada, Quantidade, Origem/Setor gerador e o Funcionário responsável pelo recebimento.
  - O operador deve conseguir consultar com facilidade o histórico e os registros de entradas efetuadas anteriormente.
  - O sistema deve conter regras de validação para impedir a geração de registros duplicados ou inconsistentes sobre o mesmo animal.
  - Cada movimentação de entrada realizada deve obrigatoriamente gerar uma trilha ou histórico persistente de rastreabilidade para auditorias.

**CA12 – Controle de Saída de Cadáveres**
- **Descrição:** Registrar a baixa e documentar adequadamente a retirada física ou encaminhamento dos cadáveres que deixam o congelamento.
- **Critérios de Aceitação:**
  - O sistema deve exigir o preenchimento dos seguintes campos de saída: Tipo de saída, Empresa parceira responsável, Data da retirada e Quantidade retirada.
  - O sistema deve oferecer suporte e opções pré-configuradas para os seguintes tipos de destinação/saída:
    - Labocien.
    - Empresa terceirizada homologada para descarte sanitário.
    - Outros encaminhamentos devidamente parametrizados no sistema.
  - No ato da baixa, o sistema deve computar eletrônica e automaticamente: Data, Hora e o Usuário responsável pela operação.
  - Deve ser disponibilizada ferramenta para consulta do histórico consolidado de saídas de cadáveres.
  - O sistema deve impor uma validação rígida de estoque que impeça registrar uma saída com quantidade superior ao volume atualmente armazenado no congelador.

**CA13 – Cadastro de Empresas Responsáveis pela Coleta**
- **Descrição:** Cadastrar e gerenciar as informações cadastrais e legais das entidades parceiras ou terceirizadas que executam a coleta, transporte ou descarte final de resíduos e cadáveres.
- **Critérios de Aceitação:**
  - O sistema deve conter campos para capturar: Nome da empresa, CNPJ, Telefone de contato e o Tipo de serviço especializado realizado.
  - Regras de banco de dados devem impedir o cadastro de CNPJs duplicados no sistema.
  - O gestor deve poder acessar a ficha da empresa para editar e atualizar quaisquer informações necessárias.
  - As empresas salvas e com status ativo devem ser carregadas automaticamente como opções de seleção nas telas de retiradas/saídas de resíduos e cadáveres.
  - Qualquer alteração cadastral realizada na ficha da empresa deve gerar um log com o histórico detalhado de modificações.

### 4. Módulo: Controle de Materiais Esterilizados

**CA05 – Cadastro de Materiais**
- **Descrição:** Registrar no inventário da clínica os materiais e instrumentais cirúrgicos/clínicos reutilizáveis que necessitam passar por ciclos frequentes de esterilização.
- **Critérios de Aceitação:**
  - O sistema deve possuir interface para informar: Nome descritivo do material e Categoria associada (sendo esta última um campo opcional).
  - O sistema deve possuir validações que impeçam a inserção de materiais com nomes idênticos (cadastro duplicado).
  - O registro criado deve ser persistido de forma íntegra no banco de dados.

**CA06 – Atualização de Status dos Materiais**
- **Descrição:** Gerenciar o ciclo de vida e atualizar o estado situacional atual de cada material cadastrado.
- **Critérios de Aceitação:**
  - O sistema deve mapear e restringir o fluxo do material estritamente aos seguintes status padronizados: Sujo, Em esterilização, Esterilizado, Em uso.
  - A cada alteração manual ou sistêmica de status, a plataforma deve gravar automaticamente os metadados de Data e Hora da transição.
  - O sistema deve validar logicamente que um material possua estritamente apenas um status ativo por vez.
  - Toda a linha do tempo e o histórico de alterações de status de cada material devem ser armazenados de forma imutável no banco.

**CA07 – Visualização de Estoque**
- **Descrição:** Apresentar uma tela de consulta para verificação em tempo real dos materiais disponíveis e suas respectivas condições.
- **Critérios de Aceitação:**
  - A listagem gerada em tela deve detalhar os materiais com: Nome, Status atual e Quantidade cadastrada (sempre que aplicável ao item).
  - A tela deve fornecer um componente de filtro rápido para segregar a visualização por status do material.
  - Os materiais que estiverem marcados sob o status de Esterilizado devem ganhar destaque visual diferenciado na interface.

**CA08 – Identificação de Materiais Pendentes**
- **Descrição:** Filtrar e expor de maneira imediata os materiais críticos que necessitam urgentemente de procedimentos de autoclave ou higienização.
- **Critérios de Aceitação:**
  - O sistema deve isolar e listar exclusivamente os materiais cujos status atuais sejam iguais a: Sujo ou Em esterilização.
  - A listagem deve permitir a ordenação das colunas para facilitar o planejamento operacional.
  - Deve empregar componentes visuais com forte destaque de cores ou alertas para facilitar a rápida identificação dos lotes pendentes pelos operadores do setor.

### 5. Módulo: Dashboard Gerencial

**CA09 – Visualização do Dashboard Geral**
- **Descrição:** Centralizar os indicadores-chave de desempenho (KPIs) operacionais da clínica veterinária em uma tela executiva dinâmica.
- **Critérios de Aceitação:**
  - O painel de indicadores (Dashboard) deve carregar e apresentar de maneira consolidada:
    - Total geral e volumétrico de resíduos registrados e armazenados no período.
    - Indicador numérico de materiais atualmente na condição de Esterilizados.
    - Indicador de alerta com o quantitativo de materiais classificados como Pendentes de esterilização.
  - Os dados exibidos nos cartões e gráficos do Dashboard devem atualizar de forma automatizada sem a necessidade de recarregamento manual da página.
  - A interface gráfica deve seguir padrões rígidos de usabilidade, sendo limpa, intuitiva, legível e organizada de forma clara.

### 6. Módulo: Segurança, Controle de Acesso e Usuários

**CA16 – Cadastro de Solicitantes**
- **Descrição:** Permitir o cadastramento e gerenciamento de perfis de usuários do tipo solicitante na plataforma VetTrace.
- **Critérios de Aceitação:**
  - O formulário cadastral deve coletar os seguintes dados obrigatórios: Nome completo, Cargo/Função, E-mail funcional, Telefone de contato, além de um Login exclusivo e uma Senha criptografada.
  - O motor de validação deve verificar o preenchimento correto de todos os dados obrigatórios.
  - O sistema deve rejeitar o cadastro caso o E-mail ou o Login informados já existam na base de dados (bloqueio de duplicidade).
  - O registro bem-sucedido deve salvar as informações de forma segura no banco de dados.
  - O administrador deve possuir prerrogativa para acessar o perfil e editar as informações cadastrais do solicitante quando pertinente.

**CA17 – Controle de Permissões de Usuários**
- **Descrição:** Gerenciar de maneira granular os privilégios e níveis de permissão concedidos a cada perfil de usuário cadastrado.
- **Critérios de Aceitação:**
  - O sistema de segurança deve suportar e aplicar diferentes níveis de acesso baseados em funções (RBAC).
  - Regras de segurança a nível de aplicação devem bloquear perfis de usuários comuns ou solicitantes de acessarem rotinas administrativas ou configurações críticas do sistema.
  - Toda alteração de atribuição de privilégios efetuada deve registrar um histórico automatizado contendo: Data, Hora e o Usuário administrador que realizou a modificação.
  - As novas permissões ou restrições configuradas devem ser aplicadas pelo sistema imediatamente após a confirmação da atualização.

**CA19 – Login no Sistema**
- **Descrição:** Prover um mecanismo seguro de autenticação para permitir que usuários previamente cadastrados acessem as dependências digitais do sistema VetTrace.
- **Critérios de Aceitação:**
  - A tela de autenticação deve dispor de campos para que o usuário informe: Login ou E-mail e a sua Senha pessoal.
  - O sistema deve realizar o tratamento interno e validar se as credenciais digitadas conferem com a base de dados criptografada.
  - Usuários que fornecerem credenciais perfeitamente válidas devem receber permissão de acesso imediata e redirecionamento para a página inicial.
  - Caso as credenciais sejam incorretas ou inexistentes, o sistema deve bloquear o acesso e exibir uma mensagem de erro clara ao usuário na interface.
  - O acesso às rotinas e dados deve ser estritamente bloqueado para qualquer visitante não cadastrado e não autenticado.
  - A cada tentativa de login bem-sucedida, o sistema deve registrar eletronicamente nos logs de segurança a Data e a Hora exatas do acesso realizado.

**CA20 – Cadastro de Usuários (Administração Geral)**
- **Descrição:** Permitir que a área de administração ou usuários permitidos realizem a inclusão de novos operadores gerais no sistema VetTrace.
- **Critérios de Aceitação:**
  - A interface de cadastro deve exigir a inserção de: Nome, E-mail, Login, Senha e a definição explícita do Tipo de Usuário (Perfil/Função).
  - Todos os campos definidos como obrigatórios devem ser validados pela aplicação antes de prosseguir com o envio.
  - O sistema deve validar a exclusividade das informações de Login e E-mail, impedindo usuários duplicados na base.
  - O registro deve ser processado e salvo de forma correta e persistente no banco de dados.
  - Imediatamente após a conclusão bem-sucedida do cadastro, o novo usuário deve estar apto a realizar o login e utilizar o sistema respeitando o seu perfil.
  - O sistema deve fornecer funcionalidades posteriores para a edição e atualização das informações cadastrais do usuário.

### 7. Diretrizes e Regras Gerais do Sistema (Transversais)

Para garantir a integridade, conformidade e padronização contínua de toda a plataforma VetTrace independentemente da Sprint avaliada, são estabelecidas as seguintes regras globais de engenharia e negócio:

- **Logs Automáticos e Rastreabilidade:** Absolutamente todas as ações operacionais, inclusões, exclusões e modificações executadas no sistema devem registrar de forma nativa e automática em banco de dados: a Data, a Hora precisa e o Usuário responsável logado.
- **Rastreabilidade Extensa:** O sistema deve ter arquitetura projetada para garantir a rastreabilidade completa e de ponta a ponta de todo o ciclo de vida dos resíduos gerados e dos cadáveres armazenados nas dependências clínicas.
- **Conformidade Regulatória:** Toda a modelagem de dados, armazenamento de informações, descarte, triagem e relatórios gerados devem seguir estritamente as normativas e diretrizes sanitárias estabelecidas pela resolução RDC 222/2018.
- **Prevenção de Inconsistências:** O sistema deve implementar validações lógicas, máscaras de campos e chaves de segurança para impedir quaisquer inconsistências nos dados transacionados (tais como estoques negativos ou dados inválidos).
- **Padrão de Interface (UI/UX):** A interface de usuário de todos os módulos da plataforma deve ser projetada para ser simples, limpa, altamente intuitiva, responsiva e visualmente organizada para facilitar a rotina ágil da clínica.
- **Histórico e Imutabilidade Auditável:** O ecossistema deve armazenar e travar o histórico completo das alterações efetuadas. Estas informações históricas e logs correlatos devem permanecer permanentemente íntegras e disponíveis para fiscalizações ou auditorias regulatórias futuras.

Histórico de Reuniões e Escopo:
https://docs.google.com/document/d/179xgVlUkOz4l4m79fm-jZEACQvhjYwmmiZhgRPNq8Lc/edit?usp=sharing

---

## Histórico de Reuniões com Stakeholders e Evolução do Escopo

**Projeto:** VetTrace – Sistema de Rastreabilidade e Compliance Clínico
**Sprint de Referência:** Sprint #01 a Sprint #03
**Equipe:** 5 Integrantes (DBA, Backend x2, Frontend, UI/UX Designer)

Este documento registra formalmente a cadeia de custódia das decisões de projeto, o alinhamento com as partes interessadas (stakeholders) e as mudanças de escopo que moldaram a arquitetura e as regras de negócio do sistema VetTrace.

### 1. Registro Cronológico das Reuniões

| ID / Data | Participantes / Stakeholders | Pauta e Principais Deliberações | Impacto no Projeto |
|---|---|---|---|
| Reunião #01 — Fase de Alinhamento Inicial | Equipe VetTrace e Professor Responsável pela Clínica-Escola de Veterinária. | Exploração inicial do ambiente clínico e levantamento de dores operacionais e rotinas de descarte de insumos. | Perda de contato: Comunicação com este stakeholder foi interrompida. O grupo buscou a instância superior (Coordenação) para não comprometer o projeto. |
| Reunião #02 — Definição de Escopo Base | Equipe VetTrace e Coordenador do Curso/Clínica. | Identificação formal do problema: falta de rastreabilidade de resíduos biológicos e controle de materiais estéreis. Envio e formalização do Termo de Anuência. | Validação do Problema: Definição do núcleo do sistema (Resíduos + Estoque Estéril) e estabelecimento do vínculo legal com a instituição. |
| Reunião #03 — Validação de Interface e Expansão | Equipe VetTrace, Coordenador e Auxiliar Operacional da Clínica. | Apresentação do protótipo funcional do frontend. Coleta de feedbacks práticos do dia a dia operacional. Solicitação de novas frentes de controle (Cadáveres e Autoclave). | Expansão de Escopo: Inclusão de novos módulos na engenharia de dados e redefinição da matriz de perfis de acesso (RBAC). |

### 2. Matriz Definitiva de Funcionalidades (Pós-Reunião #03)

Com base no refinamento feito com a equipe operacional, as funcionalidades do sistema foram divididas em módulos críticos de governança:

- **Módulo de Resíduos Sólidos (Com Relatório):** Registro e rastreabilidade com persistência de peso, quantidade, categoria de risco (ANVISA) e empresa terceirizada responsável pela coleta. Geração de relatórios consolidados para auditoria.
- **Módulo de Material e Estoque Estéril (Com Relatório):** Controle do fluxo de insumos (Registrar, Solicitar, Controlar estados). Geração de relatórios de movimentação e validade.
- **Módulo de Descarte de Cadáveres (Sem Relatório):** Registro de dados biológicos (peso, idade, espécie) e controle estrito do destino final (Descarte/Cremação, Laboratório acadêmico ou Retirada pelo proprietário).
- **Módulo de Ciclos de Autoclaves (Sem Relatório):** Gerenciamento, monitoramento e registro dos ciclos físicos de esterilização do equipamento para fins de segurança sanitária.

### 3. Engenharia de Acessos: Matriz de Perfis de Usuários (RBAC)

Para garantir a segurança das informações e a integridade dos logs exigidos pela RDC 222/2018, o banco de dados e as rotas do backend implementarão três níveis de permissão:

- **Administrador:** Acesso irrestrito a todas as funcionalidades do sistema, dashboards estratégicos e gerenciamento de usuários (concessão e revogação de permissões).
- **Técnico:** Perfil operacional responsável pelos lançamentos diários no sistema. Possui permissão para registrar materiais, cadastrar cadáveres, abrir ciclos de autoclave e emitir relatórios de conformidade.
- **Solicitante:** Perfil restrito de ponta. Possui permissão exclusiva para realizar requisições de materiais estéreis para procedimentos, sem acesso à gestão de resíduos ou configurações do sistema.

### 4. Plano de Contingência e Mitigação de Riscos

Como evidência de gestão de riscos (exigida na Sprint #01), o grupo formalizou as seguintes ações:

- **Risco de Comunicação:** Mitigado com sucesso na transição da Reunião 1 para a Reunião 2, substituindo o stakeholder indisponível pela liderança direta (Coordenador) e pela usuária chave do sistema (Auxiliar Operacional).
- **Adaptação de Escopo ao Cenário Clínico:** Atendendo às solicitações do stakeholder na Reunião #03, o sistema VetTrace incorporou os módulos de controle de autoclave e registro de cadáveres (peso, idade, espécie e destinação). Com essas adições, a solução deixa de monitorar apenas o lixo comum e cirúrgico para se tornar uma plataforma central de governança sanitária da clínica-escola, cobrindo todas as frentes críticas de descarte biológico e biossegurança exigidas no cotidiano da instituição.

### 5. Evidências Fotográficas e Registros de Validação

> <img width="695" height="756" alt="image" src="https://github.com/user-attachments/assets/969ae875-4432-4f40-b875-033d591c2f6b" />
> <img width="966" height="700" alt="image" src="https://github.com/user-attachments/assets/fbb6da05-bda7-4b1c-a657-96477239bdf2" />
> <img width="930" height="657" alt="image" src="https://github.com/user-attachments/assets/13839085-dc91-4ce3-b3a6-05753bb604f2" />
> <img width="1032" height="492" alt="image" src="https://github.com/user-attachments/assets/f164b1f3-339a-4f94-bdb4-16f311dddf60" />
> <img width="482" height="731" alt="image" src="https://github.com/user-attachments/assets/c044a31b-87d0-41d5-b876-ed85be0b8a15" />
> <img width="1232" height="532" alt="image" src="https://github.com/user-attachments/assets/7adb8ad2-9100-4c91-af43-2f687ea9b2fd" />
> <img width="1052" height="532" alt="image" src="https://github.com/user-attachments/assets/5124c08b-4fb7-4d8e-bdb6-e13a9f7e193e" />


---

## 22. Marketing Digital (PI IV)

22.1. Plano de Marketing
   22.1.1. Estratégia de Monetização
   22.1.2. Estratégia de Divulgação do Produto
   22.1.3. Estratégia de Aquisição de Clientes
   22.1.4. Estratégia de Formação de Preços
   22.1.5. Desdobramento dos 4 Ps para os 4Cs

22.2. Vídeo Promocional

22.3. Vídeo de Instrução de uso do Produto

22.4. Insights de Mercado [Modelagem no Google Looker ou similar]

---

## 23. Últimas Telas implementadas no Front-end

23.1. Página de Login
> <img width="1363" height="645" alt="image" src="https://github.com/user-attachments/assets/19174ac4-3d35-4bfe-a5a9-fe4307fb362d" />

23.2. Página de Cadastro
> <img width="1367" height="657" alt="image" src="https://github.com/user-attachments/assets/b5588bf8-1d3d-46e2-9f63-47dfdbf8c373" />

23.3. Tela Inicial
> <img width="1372" height="647" alt="image" src="https://github.com/user-attachments/assets/07d5563e-bd28-4f8b-a4d9-4f24ab41ef61" />

23.4. Página de Estoque Estéril – Registro e Consulta
> <img width="1050" height="506" alt="image" src="https://github.com/user-attachments/assets/1a9f508b-58f1-4636-b8ae-74a3c9bf4036" />
> <img width="1067" height="507" alt="image" src="https://github.com/user-attachments/assets/a81ec80d-f06a-44ff-a2fa-778d3be4db67" />

23.5. Ciclos
> <img width="1067" height="510" alt="image" src="https://github.com/user-attachments/assets/251a0bf6-c34d-4250-986b-c196545b3471" />

23.6. Página de Solicitação de Material
> <img width="1076" height="506" alt="image" src="https://github.com/user-attachments/assets/4e0d8598-e4d8-4a5d-8926-8404b426f500" />

23.7. Página de Registro de Cadáveres
> <img width="1870" height="908" alt="Captura de tela 2026-06-30 091218" src="https://github.com/user-attachments/assets/3b576ba8-51dd-4a5a-9868-455ce770ea98" />


23.8. Página de Relatórios

> <img width="1892" height="901" alt="Captura de tela 2026-06-30 091244" src="https://github.com/user-attachments/assets/735aee39-9749-42aa-9fd0-e52874d84bfe" />
> <img width="1893" height="907" alt="Captura de tela 2026-06-30 091259" src="https://github.com/user-attachments/assets/53f45f1c-b72a-4f3b-840e-0269f2efdb9a" />

---

## 24. Bibliografia

*[Inserir as referências fazendo a ligação com as seções do trabalho. Em especial na parte de definição do modelo de negócio, estabelecimento do problema/oportunidade e todo e qualquer conteúdo utilizado e indicado para as atividades técnicas. Utilizar a ferramenta "Citações" do Google Docs no formato APA]*

---

## 25. APÊNDICE I - TECNOLOGIAS UTILIZADAS

### 25.1. Gestão

- Gestão do Projeto: https://miro.com/welcomeonboard/VUNGM0J1dytDaWNoNlpiSmNML3RsVDd5amZyamhubDVqK2xiZS83cnA1Tnh0VzIzWFZ2MDNnNGs1b1g3OGF4QWpIM2VjbnJhdGladmtJRm5aNjh3ejlpdzlBR3cvcjlYVUhTd3pUaU1ZaEZPWW5DUjhwekZleVRES2IwWEZnLzhBd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=781545237123
- Gestão da Configuração: https://github.com/LudwigGabriela/ProjetoIntegrador3
- Link GitHub: https://github.com/LudwigGabriela/ProjetoIntegrador3.git
- Link Notion: https://app.notion.com/p/Projeto-Integrador-lll-VetTrace-363820c6291a804ca322c52ed19840e8?source=copy_link

### 25.2. Desenvolvimento Front-End

- Prototipação: https://www.figma.com/make/gnKxFzvvVbdYAFmEUAtayT/Veterinary-Management-Dashboard-Wireframe--c%C3%B3pia-?p=f&fullscreen=1
- Frontend - Aplicação Web

### 25.3. Desenvolvimento Backend

- API Management - Postman
- Servidor de Aplicação - Flask
- Sistema Gerenciador de Banco de Dados - PostgreSQL

### 25.4. Testes e gestão de demandas

- Automação de testes
- Bug Tracking

### 25.5. Analítica

- Extração, Transformação e Carga
- Visualização de dados

---

## 26. APÊNDICE II - VÍDEO DE APRESENTAÇÃO

Link do vídeo de apresentação: https://www.youtube.com/watch?v=mRkTl-O3q0I
