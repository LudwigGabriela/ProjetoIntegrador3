from flask import Blueprint, request, jsonify
from ..services.residuo_service import service_criar_residuo, service_obter_residuos, service_obter_peso_total

residuo_bp = Blueprint("residuo", __name__)

@residuo_bp.route("/residuo", methods=["POST"])
def criar_residuo():
    dados = request.json

    residuo_id = service_criar_residuo(dados)

    return jsonify({
        "message": "Resíduo cadastrado com sucesso",
        "id": residuo_id
    }), 201

@residuo_bp.route("/residuo", methods=["GET"])
def obter_residuos():
    residuos = service_obter_residuos()
    return jsonify(residuos)

@residuo_bp.route("/residuo/peso-total", methods=["GET"])
def obter_peso_total():
    total = service_obter_peso_total()

    return {
        "peso_total": total
    }, 200