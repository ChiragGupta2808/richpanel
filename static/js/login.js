//login js
$("#login-form").submit(function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.querySelector('input[name="remember"]').checked;

    data = {
        "email": email,
        "password": password
    }

    $.ajax({
        url: "/signin",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (res) {
            if (res.success) {
                let { data } = res.data;
                alert("Welcome " + data.name);
                window.location.href = "/pricing";
            } else {
                alert(res.message)
            }
        },
        error: function (xhr, status, error) {
            alert("Error: " + error);
        }
    });
});