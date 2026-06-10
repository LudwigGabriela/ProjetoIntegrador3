from database import get_db_connection

def service_criar_residuo(dados):
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO residuos (
            tipo_grupo,
            descricao,
            quantidade,
            unidade,
            data_registro,
            setor_gerador,
            responsavel_id
        )
        VALUES (%s,%s,%s,%s,%s,%s,%s)
        RETURNING id
    """, (
        dados["tipo_grupo"],
        dados["descricao"],
        dados["quantidade"],
        dados["unidade"],
        dados["data_registro"],
        dados["setor_gerador"],
        dados["responsavel_id"]
    ))

    residuo_id = cur.fetchone()["id"]

    conn.commit()

    cur.close()
    conn.close()

    return residuo_id


def service_obter_residuos():
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            id,
            tipo_grupo,
            descricao,
            quantidade,
            unidade,
            data_registro,
            status,
            setor_gerador
        FROM residuos
        ORDER BY id DESC
    """)

    residuos = cur.fetchall()

    cur.close()
    conn.close()

    return residuos


def service_obter_peso_total():
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT SUM(quantidade) AS peso_total
        FROM residuos
    """)

    resultado = cur.fetchone()

    cur.close()
    conn.close()

    return resultado["peso_total"] or 0