from database import get_db_connection

def service_criar_cadaver(dados):
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO cadaveres (
            especie,
            identificacao,
            idade_anos,
            peso_kg,
            data_entrada,
            status,
            observacoes,
            registrado_por,
            nome_proprietario,
            causa_obito,
            destino_id,
            data_saida
        )
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
        RETURNING id
    """, (
        dados["especie"],
        dados["identificacao"],
        dados["idade_anos"],
        dados["peso_kg"],
        dados["data_entrada"],
        dados["status"],
        dados["observacoes"],
        dados["registrado_por"],
        dados["nome_proprietario"],
        dados["causa_obito"],
        dados["destino_id"],
        dados["data_saida"]
    ))

    cadaver_id = cur.fetchone()["id"]

    conn.commit()

    cur.close()
    conn.close()

    return cadaver_id


def service_obter_cadaveres():
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            id,
            especie,
            identificacao,
            idade_anos,
            peso_kg,
            data_entrada,
            status,
            observacoes,
            registrado_por,
            nome_proprietario,
            causa_obito,
            destino_id,
            data_saida
        FROM cadaveres
        ORDER BY id DESC
    """)

    cadaveres = cur.fetchall()

    # Converter data para string para não ter influência de fuso horário
    for cadaver in cadaveres:
        if cadaver["data_entrada"]:
            cadaver["data_entrada"] = cadaver["data_entrada"].strftime("%Y-%m-%d %H:%M:%S")
        if cadaver["data_saida"]:
                    cadaver["data_saida"] = cadaver["data_saida"].strftime("%Y-%m-%d %H:%M:%S")

    cur.close()
    conn.close()

    return cadaveres
