import psycopg2

connection = None
cursor = None

try:
    connection = psycopg2.connect(
        user="admin",
        password="admin",
        host="localhost",
        port="5432",
        database="dvdrental"
    )

    cursor = connection.cursor()

    print('informace o postgresql db:')
    cursor.execute("SELECT * FROM film WHERE film_id = 1")

    record = cursor.fetchone() # pri vice zaznamech je fetchall()
    print(record)  
except:
    print('neco se posralo brasko')
finally:
    if cursor:
        cursor.close()
    if connection:
        connection.close()
    print('pripojeni bylo uzavreno.')