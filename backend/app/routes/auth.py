from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
import sys
import os

# Garante que o Python encontre o arquivo database.py na raiz do backend
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))
from database import get_db_connection

auth_bp = Blueprint('auth', __name__)

@auth_bp.route("/api/auth/cadastro", methods=["POST"])
def cadastro():
    dados = request.get_json() or {}
    nome = dados.get("nome")
    telefone = dados.get("telefone")
    email = dados.get("email")
    cargo = dados.get("cargo", "")
    crmv = dados.get("crmv")
    senha = dados.get("senha")
    confirmar_senha = dados.get("confirmar_senha")

    if not all([nome, email, cargo, senha, confirmar_senha]):
        return jsonify({"erro": "Preencha todos os campos obrigatórios."}), 400

    if senha != confirmar_senha:
        return jsonify({"erro": "A senha e a confirmação de senha não coincidem."}), 400

    cargo_limpo = str(cargo).strip().lower()
    if "tecnico" in cargo_limpo or "técnico" in cargo_limpo:
        perfil = "tecnico"
    elif "admin" in cargo_limpo:
        perfil = "admin"
    else:
        perfil = "solicitante" 

    senha_hash = generate_password_hash(senha)
    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute("SELECT id FROM usuarios WHERE email = %s;", (email,))
        if cur.fetchone():
            return jsonify({"erro": "Este e-mail já está cadastrado no VetTrace."}), 400

        query = """
            INSERT INTO usuarios (
                nome,
                email,
                senha_hash,
                perfil,
                telefone,
                crmv,
                ativo
            )
            VALUES (
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                TRUE
            )
            RETURNING id, nome, email, perfil, telefone, crmv;
        """
        cur.execute(query, (nome, email, senha_hash, perfil, telefone, crmv))
        novo_usuario = cur.fetchone()
        conn.commit()

        if isinstance(novo_usuario, dict):
            res_id = novo_usuario.get("id")
            res_nome = novo_usuario.get("nome")
            res_email = novo_usuario.get("email")
            res_perfil = novo_usuario.get("perfil")
        else:
            res_id = novo_usuario[0]
            res_nome = novo_usuario[1]
            res_email = novo_usuario[2]
            res_perfil = novo_usuario[3]

        return jsonify({
            "mensagem": "Conta criada com sucesso!", 
            "usuario": {
                "id": res_id,
                "nome": res_nome,
                "email": res_email,
                "perfil": res_perfil
            }
        }), 201

    except Exception as e:
        if conn: conn.rollback()
        return jsonify({"erro": f"Erro interno no servidor: {str(e)}"}), 500
    finally:
        if conn:
            cur.close()
            conn.close()


@auth_bp.route("/api/auth/login", methods=["POST"])
def login():
    dados = request.get_json() or {}
    email = dados.get("email")
    senha = dados.get("senha")

    if not email or not senha:
        return jsonify({"erro": "E-mail e senha são obrigatórios."}), 400

    conn = None
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute("SELECT id, nome, email, senha_hash, perfil, telefone, crmv, ativo FROM usuarios WHERE email = %s;", (email,))
        usuario = cur.fetchone()

        if not usuario:
            return jsonify({"erro": "E-mail ou senha incorretos."}), 401

        if isinstance(usuario, dict):
            u_id, u_nome, u_email, u_senha_hash, u_perfil, u_telefone , u_crmv ,u_ativo = usuario["id"], usuario["nome"], usuario["email"], usuario["senha_hash"], usuario["perfil"], usuario["telefone"],usuario["crmv"] ,usuario["ativo"]
        else:
            u_id, u_nome, u_email, u_senha_hash, u_perfil, u_telefone,u_crmv ,u_ativo = usuario[0], usuario[1], usuario[2], usuario[3], usuario[4], usuario[5],usuario[6], usuario[7]

        if not u_ativo or not check_password_hash(u_senha_hash, senha):
            return jsonify({"erro": "E-mail ou senha incorretos."}), 401

        identity = {"id": u_id, "perfil": u_perfil}
        token_acesso = create_access_token(identity=identity)

        return jsonify({
            "mensagem": "Login realizado com sucesso!",
            "token": token_acesso,
            "usuario": {
                "id": u_id,
                "nome": u_nome,
                "email": u_email,
                "perfil": u_perfil,
                "telefone": u_telefone,
                "crmv": u_crmv
            }
        }), 200
    except Exception as e:
        return jsonify({"erro": f"Erro interno no servidor: {str(e)}"}), 500
    finally:
        if conn:
            cur.close()
            conn.close()