from flask import Flask
from flask_cors import CORS
from flask_mysqldb import MySQL

#pip freeze > requirements.txt -> menti a packagek nevét
#pip install -r requirements.txt -> a fájl segítségével leszedi az összes szükséges packaget

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'pedikurmanikur'
mysql = MySQL(app)

CORS(app)


@app.route("/api/members")
def members():
    return {"members": ["Member1","Member2","Member3"]}

@app.route('/api/insertdata')
def insertdata():
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO users(first_name,last_name,user_email,user_pass,user_name,user_role) VALUES('Zsolt','Plezer','zsoltplezer@gmail.com','asd123','zsui','felh')")
    mysql.connection.commit()
    cur.close()
    return "Done!!";



if __name__ == "__main__":
    app.run(host="localhost",port="5000",debug=True)