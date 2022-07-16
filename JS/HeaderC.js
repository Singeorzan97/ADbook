function SendMessage() {
    const Fname = document.getElementById("F-name");
    const Lname = document.getElementById("L-name");
    const Email = document.getElementById("Email");
    const Subject = document.getElementById("Subject");
    const Message = document.getElementById("Message");
    let hasError = false;
    if (Fname.value.length === 0 || !Fname.value.match(/^[a-zA-Z ]+$/)) {
        Fname.classList.add("Error");
        hasError = true;
        document.getElementById("F-name-Error").innerHTML = "Please enter your first name"
    }

    if (Lname.value.length === 0 || !Lname.value.match(/^[a-zA-Z ]+$/)) {
        Lname.classList.add("Error");
        hasError = true;
        document.getElementById("L-name-Error").innerHTML = "Please enter your last name"
    }

    if (Email.value.length === 0 || !Email.value.match(/^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
        Email.classList.add("Error");
        hasError = true;
        document.getElementById("Email-Error").innerHTML = "Please enter your email"
    }

    if (Subject.value.length === 0 || !Subject.value.match(/^[a-zA-Z ]+$/)) {
        Subject.classList.add("Error");
        hasError = true;
        document.getElementById("Subject-Error").innerHTML = "Please enter your subject"
    }

    if (Message.value.length === 0 || !Message.value.match(/^[a-zA-Z ]+$/)) {
        Message.classList.add("Error");
        hasError = true;
        document.getElementById("Message-Error").innerHTML = "Please enter the message you want to send us"
    }

if (!hasError) {
document.getElementById("MessageUs").innerHTML = "You successfully sent the message to us!";
    
}

}

function RemoveError(id,error) {
    const Remove = document.getElementById(id);
    const RemoveWriteErr = document.getElementById(error);
    Remove.classList.remove("Error");
    RemoveWriteErr.innerHTML = "";
}

function image() {
    let NavMenu = document.getElementById("NavMenu");
    NavMenu.classList.toggle("hidden");
}
