const showUserName = document.getElementById("showusername");
const showUserEmail = document.getElementById("showuseremail");
const showUserPassword = document.getElementById("showuserpassword");
const showUserDob = document.getElementById("showuserdob");
const logOutButton = document.getElementById("logout-button");

let currentUser = JSON.parse(localStorage.getItem("currentUser"))

if (!currentUser) {
    alert("Please LogIn First");
    window.location.replace('./login.html')
} else {
    showUserName.innerText = `User Name: ${currentUser.name}`;
    showUserEmail.innerText = `User Email: ${currentUser.email}`;
    showUserPassword.innerText = `User Password: ${currentUser.password}`;
    showUserDob.innerText = `User DOB: ${currentUser.dob}`;
}

logOutButton.addEventListener("click", function () {
    const confirmLogOut = confirm("Are you sure you want to Log Out!")
    if (confirmLogOut) {
        localStorage.removeItem("currentUser")
        window.location.replace("./login.html");
    }
})