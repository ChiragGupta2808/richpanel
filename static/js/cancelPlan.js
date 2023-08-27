function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

$(document).ready(function () {
    const code = getQueryParam("code");
    const plan = getQueryParam("plan");
    const price = getQueryParam("price");
    const quality = getQueryParam("quality");
    const resolution = getQueryParam("resolution");
    const devices = getQueryParam("devices");

    document.getElementsByClassName("plan-name")[0].innerHTML = code;
    document.getElementById("amount").innerHTML = price;
    document.getElementById("duration").innerHTML = plan === "yearly" ? "/yr" : "/mo";
    document.getElementById("devicesList").innerHTML = devices.split(',').join(' + ');

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const d = new Date();
    if (plan === "yearly") {
        const nextYear = d.getFullYear() + 1;
        let date = months[d.getMonth()] + " " + d.getDate() + ", " + nextYear;
        document.getElementById("cancelDate").innerHTML = date;
    }
    if (plan === "monthly") {
        const nextMonth = d.getMonth() + 1;
        let date = months[nextMonth] + " " + d.getDate() + ", " + d.getFullYear();
        document.getElementById("cancelDate").innerHTML = date;
    }
});