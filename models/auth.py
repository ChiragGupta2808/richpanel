from flask_mongoengine import MongoEngine
from mongoengine.queryset.visitor import Q
from datetime import datetime, timedelta

from .base import BaseDocument

db = MongoEngine()

class User(BaseDocument):
  name = db.StringField()
  email = db.EmailField(unique=True)
  password = db.StringField()

  meta = {
    'indexes': [
      {
        'fields': ["$email"],
        'default_language': 'english',
        'weights': {'email': 8}
      }
    ]
  }

def login_user(email="", password=""):
  if email and password: 
    email = email.lower()
    user = User.objects(email=email, password=password).first()  
    if user:
      return user
    return None  
  return None


def create_user(name="", email="", password=""):
  if not email or not password or not name:
    return None, "All details are required"
  email = email.lower()
  new_user = User(name=name, email=email, password=password)
  user = new_user.save()
  if user:
    return user
  return None