document.getElementById("singIn-btn").addEventListener("click", () =>{
    const userNameInput = document.getElementById("userName-input");
    const userName = userNameInput.value;
    const passwordInput = document.getElementById("password-input");
    let password = passwordInput.value;

    if(userName=="admin" && password=="admin123"){
        window.location.assign("./index.html");
    }
    else{
        alert("Invalid username or password. Please try again.");
        userNameInput.value ="";
        passwordInput.value ="";
    }
})