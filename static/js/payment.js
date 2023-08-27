const da = window.location.search
var stripe = Stripe('pk_test_51NdnsPSBItKImWPpmISOIDUqQ3Vsc7k3VBOIj5p0DLwmJoRG0XqUiP3jy5GTXE2Z17dxniaMeRSLZDHoQr0aBPgS00VGaAVwB0');
var elements = stripe.elements();

var elements = stripe.elements();
var style = {
    base: {
        color: "#32325d",
    }
};

var card = elements.create("card", { style: style });
card.mount("#card-element");

card.on('change', ({ error }) => {
    let displayError = document.getElementById('card-errors');
    if (error) {
        displayError.textContent = error.message;
    } else {
        displayError.textContent = '';
    }
});

var form = document.getElementById('payment-form');

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    stripe.confirmCardPayment(form.dataset.secret, {
        payment_method: {
            card: card,
            billing_details: {
                name: 'Jenny Rosen'
            }
        }
    }).then(function (result) {
        if (result.error) {
            // Show error
            console.log(result.error.message);
        } else {
            // Payment processed
            if (result.paymentIntent.status === 'succeeded') {
                console.log("Succes")
                window.location.replace("/currentPlan" + da)
            }
        }
    });
});

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const code = getQueryParam("code");
const plan = getQueryParam("plan");
const price = getQueryParam("price");
const quality = getQueryParam("quality");
const resolution = getQueryParam("resolution");
const devices = getQueryParam("devices");

document.addEventListener("DOMContentLoaded", function () {
    let per = plan === "monthly" ? "/mo" : "/yr";
    document.querySelector(".code").innerHTML = code;
    document.querySelector(".plan").innerHTML = plan;
    document.querySelector(".price").innerHTML = "₹" + price + per;
});