# Instruções para Executar o Backend – VetTrace

## Pré-requisitos

Antes de começar, é necessário ter instalado:

* Python 3.11+ (recomendado)
* Git
* PostgreSQL

---

# 1. Clonar o repositório

Abra o terminal e execute:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd vettrace
```

---

# 2. Acessar a pasta do backend

```bash
cd backend
```

---

# 3. Criar o ambiente virtual

## Windows

```bash
python -m venv venv
```

## Linux/Mac

```bash
python3 -m venv venv
```

---

# 4. Ativar o ambiente virtual

## Windows

```bash
venv\Scripts\activate
```

## Linux/Mac

```bash
source venv/bin/activate
```

Após ativar, o terminal deverá mostrar algo parecido com:

```bash
(venv)
```

---

# 5. Instalar as dependências

```bash
pip install -r requirements.txt
```

---

# 6. Configurar variáveis de ambiente

Crie um arquivo chamado:

```bash
.env
```

Dentro dele, adicione:

```env
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=sua_chave_secreta
DATABASE_URL=postgresql://usuario:senha@localhost:5432/vettrace
```

Substitua:

* usuario → usuário do PostgreSQL
* senha → senha do PostgreSQL

---

# 7. Criar o banco de dados PostgreSQL

Abra o PostgreSQL e execute:

```sql
CREATE DATABASE vettrace;
```

---

# 8. Executar o backend

Ainda dentro da pasta backend:

```bash
python run.py
```

O terminal deverá exibir algo parecido com:

```bash
Running on http://127.0.0.1:5000
```

---

# 9. Testar funcionamento

Abra no navegador:

```text
http://127.0.0.1:5000
```

---

# Estrutura esperada do backend

```text
backend/
│
├── app/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── __init__.py
│
├── run.py
├── requirements.txt
├── .env
```

---

# Atualizar dependências

Sempre que instalar uma nova biblioteca:

```bash
pip freeze > requirements.txt
```

---

# Boas práticas

* Nunca subir a pasta venv para o GitHub
* Sempre criar uma branch para novas funcionalidades
* Sempre atualizar a branch main antes de começar uma tarefa
* Fazer commits pequenos e organizados

---

# Fluxo recomendado de desenvolvimento

```text
main
  └── feature/nome-da-feature
```

Exemplo:

```text
feature/cadastro-residuos
feature/dashboard
feature/login
```

---

# Comandos Git úteis

## Atualizar projeto

```bash
git pull
```

## Verificar branch atual

```bash
git branch
```

## Criar branch

```bash
git checkout -b feature/nova-feature
```

## Enviar alterações

```bash
git add .
git commit -m "feat: descrição"
git push
```

---

# Tecnologias utilizadas

## Frontend

* HTML
* CSS
* JavaScript
* Bootstrap

## Backend

* Python
* Flask

## Banco de Dados

* PostgreSQL

## Versionamento

* Git
* GitHub
