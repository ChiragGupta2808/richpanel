from flask import Flask, request, Blueprint, jsonify, render_template, url_for, redirect
from db.connection import connectionDb
from flask_mongoengine import MongoEngine
from flask_cors import CORS
import os
import stripe

# from models.auth import create_user, login_user

payment = Blueprint('payment', __name__)

# This is your test secret API key.
stripe.api_key = 'sk_test_51NdnsPSBItKImWPpJPEdaT4avAxeMYNAKwaSRz1bbeHGogEbkVxsSEPtHzstxOYuMBy5StwcFVcM0qjKlETgAAM800MZGGrnla'

@payment.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        paymentIntent = stripe.PaymentIntent.create(
            amount=1099,
            currency="inr",
            payment_method_types=["card"],
            metadata={"integration_check": "accept_a_payment"},
        )
        # checkout_session = stripe.checkout.Session.create(
        #     line_items=[
        #         {
        #             # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        #             'price': '{{PRICE_ID}}',
        #             'quantity': 1,
        #         },
        #     ],
        #     mode='payment',
        #     success_url=request.base_url + '/success.html',
        #     cancel_url=request.base_url + '/cancel.html',
        # )
    except Exception as e:
        return str(e)

    return render_template("checkout.html", client_secret=paymentIntent.client_secret)