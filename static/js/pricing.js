let _code = "";
let _price;
let _plan;
let _quality;
let _resolution;
let _devices;
let _packages;
let monthlyPackages = {
  "Mobile": {
    price: 100,
    quality: "Good",
    resolution: "480p",
    devices: ["Phone", "Tablet"]
  },
  "Basic": {
    price: 200,
    quality: "Good",
    resolution: "480p",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  },
  "Standard": {
    price: 500,
    quality: "better",
    resolution: "1080p",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  },
  "Premium": {
    price: 700,
    quality: "Best",
    resolution: "4K + HDR",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  }
}

let yearlyPackages = {
  "Mobile": {
    price: 1000,
    quality: "Good",
    resolution: "480p",
    devices: ["Phone", "Tablet"]
  },
  "Basic": {
    price: 2000,
    quality: "Good",
    resolution: "480p",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  },
  "Standard": {
    price: 5000,
    quality: "better",
    resolution: "1080p",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  },
  "Premium": {
    price: 7000,
    quality: "Best",
    resolution: "4K + HDR",
    devices: ["Phone", "Tablet", "Computer", "TV"]
  }
}

monthlyClasses = {
  ".mobilePrice": "Rs. 100",
  ".basicPrice": "Rs. 200",
  ".standardPrice": "Rs. 500",
  ".premiumPrice": "Rs. 700"
}

yearlyClasses = {
  ".mobilePrice": "Rs. 1000",
  ".basicPrice": "Rs. 2000",
  ".standardPrice": "Rs. 5000",
  ".premiumPrice": "Rs. 7000"
}

document.querySelector("#monthly-sel").onclick = () => {
  console.log("Montly");
  document.querySelector("#monthly").checked = true
  _plan = "Monthly"
  _packages = monthlyPackages
  Object.keys(monthlyClasses).forEach(item => {
    document.querySelector(item).innerHTML = monthlyClasses[item]
  });
}

document.querySelector("#yearly-sel").onclick = () => {
  console.log("Yearly");
  _plan = "Yearly"
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