from flask import Blueprint, request, jsonify
from ..services.residuo_service import criar_residuo

residuo_bp = Blueprint("residuo", __name__)

@residuo_bp.route("/residuo", methods=["POST"])
def cadastrar_residuo():
    dados = request.json

    residuo_id = criar_residuo(dados)

    return jsonify({
        "message": "Resíduo cadastrado com sucesso",
        "id": residuo_id
    }), 201