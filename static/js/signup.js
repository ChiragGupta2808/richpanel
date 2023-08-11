$("#signup-form").submit(function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.querySelector('input[name="remember"]').checked;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    data = {
        "name": name,
        "email": email,
        "password": password
    }
    $.ajax({
        url: "/register",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(res) {
          if(res.success) {
            window.location.href = "/pricing";
          } else {
            alert(res.message)
          }
        },
        error: function(xhr, status, error) {
          document.getElementById("explore-form-btn").disabled = false;
          alert("Error: " + error);
        }
      });
});


$(document).ready(function () {});