from flask import Blueprint, request, jsonify
from ..services.residuo_service import criar_residuo, obter_peso_total

residuo_bp = Blueprint("residuo", __name__)

@residuo_bp.route("/residuo", methods=["POST"])
def cadastrar_residuo():
    dados = request.json

    residuo_id = criar_residuo(dados)

    return jsonify({
        "message": "Resíduo cadastrado com sucesso",
        "id": residuo_id
    }), 201


@residuo_bp.route("/residuo/peso-total", methods=["GET"])
def peso_total():
    total = obter_peso_total()

    return {
        "peso_total": total
    }, 200