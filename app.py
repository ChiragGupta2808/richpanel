from flask import Flask, request, jsonify, render_template, url_for
from db.connection import connectionDb
from flask_mongoengine import MongoEngine
from flask_cors import CORS
from controllers import *

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': 'entries',
    'host': 'mongodb+srv://chiraggupta2808:vR1Ed5LeWCN7uEOS@cluster0.ybfvvmz.mongodb.net/?retryWrites=true&w=majority'
}

db = MongoEngine(app)

CORS(app)

app.register_blueprint(home, url_prefix='/')
app.register_blueprint(payment, url_prefix='/guptaji')

@app.route('/')
@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/pricing')
def pricing():
    return render_template('pricing.html')

@app.route('/payment')
def payment():
    try:
        paymentIntent = stripe.PaymentIntent.create(
            amount=1099,
            currency="inr",
            payment_method_types=["card"],
            metadata={"integration_check": "accept_a_payment"},
        )
    except Exception as e:
        return str(e)
    return render_template('payment.html', client_secret=paymentIntent.client_secret)

@app.route('/currentPlan')
def currentPlan():
    return render_template('currentPlan.html')

@app.route('/cancelPlan')
def cancelPlan():
    return render_template('cancelPlan.html')

if __name__ == "__main__":
    app.run(debug=True)