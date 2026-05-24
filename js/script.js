/*Login*/

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("email-error")
const passwordError = document.getElementById("password-error")

form.addEventListener("submit", function(e){
    e.preventDefault();

    checkLogin();

});

function checkLogin(){

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === "student@gmail.com" && passwordValue === "12345678"){

        window.location.href = "dashboard.html";

    } else {

        //email validation
        if(email.value.trim()===""){
            email.parentElement.className='row error';
            emailError.innerHTML="Email is required"
        }
        else if(emailValue === "student@gmail.com"){
            email.parentElement.className="row success"
        }
        else{
            email.parentElement.className="row error";
            emailError.innerHTML="Invalid email"
        }

        //password validation
        if(password.value.trim()===""){
            password.parentElement.className="row error";
            passwordError.innerHTML="Password is required"
        }
        else if (passwordValue === "12345678"){
            password.parentElement.className="row success"
        }
        else if(password.value.trim().length < 3){
            password.parentElement.className="row error";
            passwordError.innerHTML="Password must be in 8 character only "
        }
        else {
            password.parentElement.className='row error';
            passwordError.innerHTML="Invalid password"
        }
        
    }

}