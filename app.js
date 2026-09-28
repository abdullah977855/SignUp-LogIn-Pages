const userName = document.getElementById("username");
const userPassword = document.getElementById("userpassword");
const userDob = document.getElementById("userdob");
const userEmail = document.getElementById("useremail");
const signUpButton = document.getElementById("signup-button");
let userDataArray = JSON.parse(localStorage.getItem("userData")) || [];

signUpButton.addEventListener("click", () => {
    if (userName.value == "" || userDob.value == "" || userEmail.value == "" || userPassword.value == "") {
        alert("Fill All Fields")
        return
    }
    let userDataObject = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        dob: userDob.value
    }
    userDataArray.push(userDataObject);
    let convertDataObjToStr = JSON.stringify(userDataArray)
    localStorage.setItem("userData", convertDataObjToStr);
    userName.value = "";
    userDob.value = "";
    userEmail.value = "";
    userPassword.value = "";
    window.location.replace("./login.html");
})