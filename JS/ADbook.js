function Login () {
const MailPhone = document.getElementById("MailPhone");
const Password = document.getElementById("Password");
let hasError = false;

if (MailPhone.value.length === 0 || !MailPhone.value.match(/^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
MailPhone.classList.add("Error");
hasError = true;
document.getElementById("MailPhone-Error").innerHTML = "Please enter your e-mail";
}

if (Password.value.length <8 || Password.value.length >16) {
  Password.classList.add("Error");
  hasError = true;
  document.getElementById("Password-Error").innerHTML = "Please enter your password (8-16 characters)";
}
if (!hasError) {
  document.getElementById("SuccesMessage").innerHTML = "You succesfully logged in!";
}
}

function RemoveError (id,error) {
const Error = document.getElementById(id);
const RemoveWriteErr = document.getElementById(error);
Error.classList.remove("Error");
RemoveWriteErr.innerHTML = "";
}

function image () {
  let NavMenu = document.getElementById("NavMenu");
  NavMenu.classList.toggle("hidden")
}

