from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from .routes.auth import auth_bp  

app = Flask(__name__)

CORS(app) 
app.config["JWT_SECRET_KEY"] = "vettrace_chave_super_secreta"
jwt = JWTManager(app)

app.register_blueprint(auth_bp)

# Rota raiz para testar no navegador
@app.route("/", methods=["GET"])
def index():
    return jsonify({"mensagem": "API do VetTrace rodando com sucesso!"}), 200