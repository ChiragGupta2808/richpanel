from flask import Flask, request, Blueprint, jsonify, render_template, url_for
from db.connection import connectionDb
from flask_mongoengine import MongoEngine
from flask_cors import CORS

from models.auth import create_user, login_user

home = Blueprint('home', __name__)

@home.route("/signin", methods=['POST'])
def admin_signin():
    content = request.get_json()
    email = content.get('email', '')
    password = content.get('password', '')
    user = login_user(email, password)
    if user:
        return jsonify({"success": 1, "message": "Login Successful", "data": {"data":user}})
    return jsonify({"success": 0, "message": "Unable to signin", "data": {None}})    

@home.route("/register", methods=['POST'])
def admin_signup():
    content = request.get_json()
    name = content.get('name', '')
    email = content.get('email', '')
    password = content.get('password', '')
    user = create_user(name, email, password)
    if user:
        return jsonify({"success": 1, "message": "Signup Successful", "data": {"data":user}})
    return jsonify({"success": 0, "message": "Signup Not Successful", "data": {None}})