function Register () {
const Fname = document.getElementById("F-name");
const Lname = document.getElementById("L-name");
const Phone = document.getElementById("PhoneNumber");
const Email = document.getElementById("Email");
const Password = document.getElementById("Pass");
const ConfPassword = document.getElementById("ConfPass");
let hasError = false;
const cbx = document.getElementById("Acord");




if (!cbx.checked) {
    hasError = true;
   document.getElementById("Cbx-Error").innerHTML = "You have to agree our terms and conditions";
}

if (Fname.value.length === 0 || !Fname.value.match(/^[a-zA-Z ]+$/)) {
    Fname.classList.add("Error");
    hasError = true;
    document.getElementById("F-name-Error").innerHTML = "Please enter your First Name";

}

if (Lname.value.length === 0 || !Lname.value.match(/^[a-zA-Z ]+$/)) {
    Lname.classList.add("Error");
    hasError = true;
    document.getElementById("L-name-Error").innerHTML = "Please enter your Last Name";
}

if (Phone.value.length === 0 || !Phone.value.match(/^\+{0,1}[0-9]{10,11}$/)) {
    Phone.classList.add("Error");
    hasError = true;
    document.getElementById("Phone-Error").innerHTML = "Please enter your phone number (e.g. 0756234987 or e.g. +40756234987)";

}

if (Email.value.length === 0 || !Email.value.match(/^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
    Email.classList.add("Error");
    hasError = true;
    document.getElementById("Email-Error").innerHTML = "Please enter your e-mail";
}

if (Password.value.length <8 || Password.value.length >16) {
    Password.classList.add("Error");
    hasError = true;
    document.getElementById("Pass-Error").innerHTML = "Please enter your password (8-16 characters)";
}

if (ConfPassword.value.length <8 || ConfPassword.value.length >16) {
ConfPassword.classList.add("Error");
hasError = true;
document.getElementById("Confpass-Error").innerHTML = "Please confirm your password (8-16 characters)";
}


else if (Password.value !== ConfPassword.value) {
    ConfPassword.classList.add("Error");
    hasError = true;
    document.getElementById("Confpass-Error").innerHTML = "Passwords do not match";
   
}


if (!hasError) {
    document.getElementById("Registered").innerHTML = "You have successfully registered!"
}
}

function RemoveError(id,error) {
    const Remove = document.getElementById(id);
    const RemoveWriteErr = document.getElementById(error);
    Remove.classList.remove("Error");
    RemoveWriteErr.innerHTML = "";
   
}

function image () {
    let NavMenu = document.getElementById("NavMenu");
    NavMenu.classList.toggle("hidden");
}

