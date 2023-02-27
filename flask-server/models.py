from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    user_id = db.Column(db.String(32),primary_key=True,unique=True, default=get_uuid)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    user_email = db.Column(db.String(345),unique=True, nullable=False)
    user_pass = db.Column(db.Text,nullable=False)
    user_name = db.Column(db.String(60),unique=True ,nullable=False)
    user_role = db.Column(db.String(1),nullable=False)