from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from database import get_db_connection

auth_bp = Blueprint('auth', __name__)


@auth_bp.route("/api/auth/cadastro", methods=["POST"])
def cadastro():
    dados = request.get_json()
    nome = dados.get("nome")
    email = dados.get("email")
    senha = dados.get("senha")
    confirmar_senha = dados.get("confirmar_senha")

    if not all([nome, email, senha, confirmar_senha]):
        return jsonify({"erro": "Todos os campos são obrigatórios."}), 400

    if senha != confirmar_senha:
        return jsonify({"erro": "A senha e a confirmação de senha não coincidem."}), 400

    perfil_padrao = 'solicitante'

    senha_hash = generate_password_hash(senha)
    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute("SELECT id FROM usuarios WHERE email = %s;", (email,))
        if cur.fetchone():
            return jsonify({"erro": "Este e-mail já está cadastrado no VetTrace."}), 400

        query = """
            INSERT INTO usuarios (nome, email, senha_hash, perfil, ativo)
            VALUES (%s, %s, %s, %s, TRUE)
            RETURNING id, nome, email, perfil;
        """
        cur.execute(query, (nome, email, senha_hash, perfil_padrao))
        novo_usuario = cur.fetchone()
        conn.commit()

        return jsonify({
            "mensagem": "Conta criada com sucesso!",
            "usuario": novo_usuario
        }), 201

    except Exception as e:
        if conn:
            conn.rollback()
        return jsonify({"erro": f"Erro interno no servidor: {str(e)}"}), 500
    finally:
        if conn:
            cur.close()
            conn.close()


@auth_bp.route("/api/auth/login", methods=["POST"])
def login():
    dados = request.get_json()
    email = dados.get("email")
    senha = dados.get("senha")

    if not email or not senha:
        return jsonify({"erro": "E-mail e senha são obrigatórios."}), 400

    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute("SELECT * FROM usuarios WHERE email = %s;", (email,))
        usuario = cur.fetchone()

        if not usuario or not usuario["ativo"] or not check_password_hash(usuario["senha_hash"], senha):
            return jsonify({"erro": "E-mail ou senha incorretos."}), 401

        identity = {"id": usuario["id"], "perfil": usuario["perfil"]}
        token_acesso = create_access_token(identity=identity)

        return jsonify({
            "mensagem": "Login realizado com sucesso!",
            "token": token_acesso,
            "usuario": {
                "id": usuario["id"],
                "nome": usuario["nome"],
                "perfil": usuario["perfil"]
            }
        }), 200

    except Exception as e:
        return jsonify({"erro": f"Erro interno no servidor: {str(e)}"}), 500
    finally:
        if conn:
            cur.close()
            conn.close()
