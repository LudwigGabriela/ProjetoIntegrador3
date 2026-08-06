# 🐾 VetTrace

<p align="center">
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</p>


## 📌 Sobre o Projeto

O **VetTrace** é um sistema de rastreabilidade e gerenciamento desenvolvido para clínicas veterinárias, com o objetivo de centralizar o controle de materiais esterilizados, gerenciamento de resíduos e registros operacionais.

A plataforma permite acompanhar todo o ciclo de vida dos materiais utilizados no ambiente clínico, garantindo maior controle, segurança e organização dos processos.

O projeto foi desenvolvido seguindo conceitos de:

- Engenharia de Software
- Banco de Dados Relacional
- Desenvolvimento Web
- Controle de acesso por usuários
- Auditoria e rastreabilidade de informações


---

# 🚀 Funcionalidades


## 🔐 Autenticação e Usuários

- Cadastro de usuários
- Login seguro com autenticação
- Controle de permissões por perfil:
  - Administrador
  - Técnico
  - Solicitante
- Gerenciamento de perfil do usuário


## 🧪 Gestão de Materiais Esterilizados

- Cadastro de materiais
- Controle de estoque
- Acompanhamento do ciclo de esterilização
- Controle de status:

```
Sujo
↓
Em esterilização
↓
Esterilizado
↓
Em uso
```


## 🗑️ Gestão de Resíduos

- Registro de resíduos gerados
- Classificação por tipo:

  - Infectante
  - Comum
  - Perfurocortante

- Controle de quantidade
- Registro de origem
- Histórico para auditoria


## 📊 Dashboard

Painel administrativo contendo:

- Quantidade de materiais cadastrados
- Resíduos registrados
- Status dos ciclos
- Indicadores gerais do sistema


## 📄 Relatórios

- Consulta de registros
- Filtros por período
- Histórico das operações realizadas


---

# 🏗️ Arquitetura do Sistema


```
VetTrace

├── Frontend
│   ├── HTML5
│   ├── CSS3
│   └── JavaScript
│
├── Backend
│   ├── Python
│   ├── Flask API
│   └── JWT Authentication
│
└── Banco de Dados
    └── PostgreSQL
```


---

# 🛠️ Tecnologias Utilizadas


## Backend

- Python
- Flask
- Flask-JWT-Extended
- Psycopg2
- Werkzeug


## Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap


## Banco de Dados

- PostgreSQL


---

# 📋 Pré-requisitos


Antes de iniciar, tenha instalado:


### Python

Versão recomendada:

```
Python 3.10+
```


Download:

https://www.python.org/


---

### PostgreSQL

Versão recomendada:

```
PostgreSQL 14+
```


Download:

https://www.postgresql.org/


---

# 🗄️ Configuração do Banco de Dados


## 1. Criar o banco


Abra o PostgreSQL e execute:


```sql
CREATE DATABASE vettrace;
```


Entre no banco:


```sql
\c vettrace;
```


---

# 2. Criar tabelas


Execute:


```sql

CREATE TABLE usuarios (

    id SERIAL PRIMARY KEY,

    nome VARCHAR(100) NOT NULL,

    email VARCHAR(120) UNIQUE NOT NULL,

    senha_hash TEXT NOT NULL,

    perfil VARCHAR(30) NOT NULL,

    telefone VARCHAR(20),

    crmv VARCHAR(50),

    ativo BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


```


---

# 👤 Perfis de Usuário


| Perfil | Permissões |
|---|---|
| Admin | Controle completo do sistema |
| Técnico | Operações clínicas e materiais |
| Solicitante | Solicitação de materiais |


---

# ⚙️ Configuração do Backend


Entre na pasta do backend:


```bash
cd backend
```


Crie um ambiente virtual:


```bash
python -m venv venv
```


Ative:


Windows:

```bash
venv\Scripts\activate
```


Linux:

```bash
source venv/bin/activate
```


Instale as dependências:


```bash
pip install -r requirements.txt
```


---

# 🔑 Configuração das variáveis


Crie um arquivo:


```
.env
```


Exemplo:


```env
DATABASE_HOST=localhost

DATABASE_NAME=vettrace

DATABASE_USER=postgres

DATABASE_PASSWORD=sua_senha

JWT_SECRET_KEY=sua_chave_secreta
```


---

# ▶️ Executando o Backend


Execute:


```bash
python app.py
```


Servidor iniciado:


```
http://127.0.0.1:5000
```


---

# 🌐 Executando o Frontend


Entre na pasta:


```bash
cd frontend
```


Abra:

```
paginas/login.html
```


ou utilize o Live Server do VS Code.


---

# 🔐 Login Inicial


Após cadastrar um usuário, utilize:


```
Email:
usuario cadastrado


Senha:
senha cadastrada
```


---

# 📂 Estrutura de Pastas


```
VetTrace

├── backend
│   ├── routes
│   ├── models
│   ├── database
│   └── app.py
│
├── frontend
│   ├── paginas
│   ├── estilos
│   ├── js
│   └── assets
│
└── README.md
```


---

# 🎨 Interface


![Dashboard VetTrace](https://github.com/user-attachments/assets/632388b4-6449-4d80-b2e9-fbf5b686d602)



Protótipo:

[Figma - VetTrace](https://www.figma.com/make/8uLDzoqZsqzk8zLYMic0pg/Veterinary-Management-Dashboard-Wireframe)


---

# 📈 Próximas Melhorias

- [ ] Controle completo de permissões
- [ ] Exportação de relatórios PDF
- [ ] Histórico completo de auditoria
- [ ] Dashboard com gráficos avançados
- [ ] Notificações internas


---

# 👥 Equipe de Desenvolvimento


| Nome | Função | GitHub |
|---|---|---|
| **Caio Peliz** | Scrum Master & Desenvolvedor | [@caiocardoso418](https://github.com/caiocardoso418) |
| **Gabriela Ludwig** | Product Owner & Desenvolvedora | [@LudwigGabriela](https://github.com/LudwigGabriela) |
| **Juan Talyson** | Database Administrator | [@juantalyson](https://github.com/juantalyson) |
| **Maria Elis** | UI/UX Designer & Documentação | [@mariaelis23](https://github.com/mariaelis23) |
| **Carlos Eduardo** | Tech Leader & Arquitetura | [@karlosmafra](https://github.com/karlosmafra) |


---

# 📄 Licença

Projeto desenvolvido para fins acadêmicos nos Projetos Integradores III e IV.

© 2026 VetTrace
