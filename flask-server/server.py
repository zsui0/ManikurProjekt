from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_cors import CORS, cross_origin
from config import ApplicationConfig
from models import db, User

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)



with app.app_context():
    db.create_all()

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unathourized",}), 401
    
    user = User.query.filter_by(user_id=user_id).first()
    return jsonify({
        "id": user.user_id,
        "email": user.user_email
    })


@app.route("/register", methods=["POST"])
def register_user():
    user_email = request.json["email"]
    user_pass = request.json["password"]

    user_exists = User.query.filter_by(user_email=user_email).first() is not None
    if user_exists:
        return jsonify({"error": "User already exists",}), 409

    first_name = request.json["first"]
    last_name = request.json["last"]
    user_name = request.json["username"]
    user_role = request.json["role"]

    hashed_password = bcrypt.generate_password_hash(user_pass)
    new_user = User(user_email=user_email, user_pass=hashed_password,first_name=first_name,last_name=last_name,user_name=user_name,user_role=user_role)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.user_id

    return jsonify({
        "id": new_user.user_id,
        "email": new_user.user_email
    })

@app.route("/login", methods=["POST"])
def login_user():
    user_email = request.json["email"]
    user_pass = request.json["password"]

    user = User.query.filter_by(user_email=user_email).first()
    if user is None:
        return jsonify({"error": "Unathourized",}), 401
    
    if not bcrypt.check_password_hash(user.user_pass, user_pass):
        return jsonify({"error": "Unathourized",}), 401

    session["user_id"] = user.user_id

    return jsonify({
        "id": user.user_id,
        "email": user.user_email
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"


if __name__ == "__main__":
    app.run(debug=True)