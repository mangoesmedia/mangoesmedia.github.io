const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "achuntelolan" && password === "@n00pat08") {
        alert("You have successfully logged in.");
        location.replace("./billamount.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})