from database import get_db_connection

conn = get_db_connection()
cur = conn.cursor()

cur.execute("SELECT COUNT(*) FROM usuarios")

resultado = cur.fetchone()

print(resultado)

cur.close()
conn.close()