from flask import Flask
from flask_cors import CORS

#pip freeze > requirements.txt -> menti a packagek nevét
#pip install -r requirements.txt -> a fájl segítségével leszedi az összes szükséges packaget

app = Flask(__name__)
CORS(app)

@app.route("/members")
def members():
    return {"members": ["Member1","Member2","Member3"]}

if __name__ == "__main__":
    app.run(host="localhost",port="5000",debug=True)