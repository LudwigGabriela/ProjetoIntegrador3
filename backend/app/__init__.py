from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from app.config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)
    app.config["JWT_SECRET_KEY"] = "vettrace_chave_super_secreta"
    CORS(app) 
    jwt = JWTManager(app)

    db.init_app(app)

    from app.routes.auth import auth_bp
    from app.routes.residuo import residuo_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(residuo_bp)
    
    # Rota raiz para testar no navegador
    @app.route("/", methods=["GET"])
    def index():
        return jsonify({"mensagem": "API do VetTrace rodando com sucesso!"}), 200
    
    # Rota para testar fetch
    @app.route("/teste", methods=["GET"])
    def teste():
        return {
            "status": "ok",
            "mensagem": "Comunicação funcionando"
        }, 200

    print("\nROTAS REGISTRADAS:")
    for rule in app.url_map.iter_rules():
        print(rule)

    return app