from datetime import date, datetime

class Residuo:
    def __init__(
        self,
        id=None,
        tipo_grupo=None,
        descricao=None,
        quantidade=None,
        unidade=None,
        data_registro=None,
        status="armazenado",
        setor_gerador=None,
        responsavel_id=None,
        created_at=None
    ):
        self.id = id
        self.tipo_grupo = tipo_grupo
        self.descricao = descricao
        self.quantidade = quantidade
        self.unidade = unidade
        self.data_registro = data_registro
        self.status = status
        self.setor_gerador = setor_gerador
        self.responsavel_id = responsavel_id
        self.created_at = created_at

    def to_dict(self):
        return {
            "id": self.id,
            "tipo_grupo": self.tipo_grupo,
            "descricao": self.descricao,
            "quantidade": self.quantidade,
            "unidade": self.unidade,
            "data_registro": self.data_registro,
            "status": self.status,
            "setor_gerador": self.setor_gerador,
            "responsavel_id": self.responsavel_id,
            "created_at": self.created_at
        }