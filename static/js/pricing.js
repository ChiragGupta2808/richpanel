let monthlyPackages = {
  "mobile": {
    price: 100,
    quality: "Good",
    resolution: "480p",
    devices: ["Phone", "Tablet"]
  },
  "basic": {
    price: 200,
    quality: "Good",
    resolution: "480p",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  },
  "standard": {
    price: 500,
    quality: "better",
    resolution: "1080p",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  },
  "premium": {
    price: 700,
    quality: "Best",
    resolution: "4K + HDR",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  }
}

let yearlyPackages = {
  "mobile": {
    price: 1000,
    quality: "Good",
    resolution: "480p",
    devices: ["Phone", "Tablet"]
  },
  "basic": {
    price: 2000,
    quality: "Good",
    resolution: "480p",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  },
  "standard": {
    price: 5000,
    quality: "better",
    resolution: "1080p",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  },
  "premium": {
    price: 7000,
    quality: "Best",
    resolution: "4K + HDR",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  }
}

let _code = "";
let _price;
let _plan="monthly";
let _quality;
let _resolution;
let _devices;
let _packages = monthlyPackages;

monthlyClasses = {
  ".mobilePrice": "₹ 100",
  ".basicPrice": "₹ 200",
  ".standardPrice": "₹ 500",
  ".premiumPrice": "₹ 700"
}

yearlyClasses = {
  ".mobilePrice": "₹ 1000",
  ".basicPrice": "₹ 2000",
  ".standardPrice": "₹ 5000",
  ".premiumPrice": "₹ 7000"
}

document.querySelector("#monthly-sel").onclick = () => {
  document.querySelector("#monthly").checked = true
  _plan = "monthly"
  _packages = monthlyPackages
  Object.keys(monthlyClasses).forEach(item => {
    document.querySelector(item).innerHTML = monthlyClasses[item]
  });
}

document.querySelector("#yearly-sel").onclick = () => {
  _plan = "yearly"
  document.querySelector("#yearly").checked = true
  _packages = yearlyPackages
  Object.keys(yearlyClasses).forEach(item => {
    document.querySelector(item).innerHTML = yearlyClasses[item]
  });
}

function setPackage(code) {
  let {price, quality, resolution, devices} = _packages[code];
  _code=code;
  _price=price;
  _quality=quality;
  _resolution=resolution;
  _devices=devices;
}

function goToPayment() {
  if(_code == ""){
    return alert("Please select a plan !");
  }

  window.location.href= `/payment?code=${_code}&plan=${_plan}&price=${_price}&quality=${_quality}&resolution=${_resolution}&devices=${_devices.join(',')}`
}