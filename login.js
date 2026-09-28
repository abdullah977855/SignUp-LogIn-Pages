const userEmail = document.getElementById("useremail");
const userPassword = document.getElementById("userpassword")
const logInButton = document.getElementById("login-button");

logInButton.addEventListener("click", () => {
    if (userPassword.value == "" || userEmail.value == "") {
        alert("Fill All Fields");
        return;
    }
    let userDataStrConvertArr = JSON.parse(localStorage.getItem("userData")) || [];
    const matchUser = userDataStrConvertArr.find((userData) => {
        return userData.email == userEmail.value && userData.password == userPassword.value;
    })
    console.log(matchUser);

    if (matchUser) {
        localStorage.setItem("currentUser", JSON.stringify(matchUser));
        window.location.replace("./welcome.html")
    } else {
        alert(("Invalid Email & Password"))
    }
})