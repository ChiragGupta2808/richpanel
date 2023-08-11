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
    console.log(code);
    document.querySelector(".code").innerHTML = code;
    document.querySelector(".plan").innerHTML = plan;
    document.querySelector(".price").innerHTML = price;
});

const urlParams = new URLSearchParams(window.location.search)

const mydevices = urlParams.get('devices')

console.log(mydevices.split(","));