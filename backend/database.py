import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    return psycopg2.connect(
        host="localhost",
        database="vettrace",
        user="postgres",
        password="postgres",  
        cursor_factory=RealDictCursor
    )