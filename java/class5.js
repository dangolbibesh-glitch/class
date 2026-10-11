document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();

    let nameValue = document.getElementById("name").value;
    let nameerror = document.getElementById("error-name");
    let emailValue = document.getElementById("email").value;
    let emailerror = document.getElementById("error-email");
    let commentValue = document.getElementById("comment").value;
    let commenterror = document.getElementById("error-comment");
    if(nameValue== "") {
        nameerror.textContent = "Name is required.";
        return;
    }
    if(emailValue== "") {
        emailerror.textContent = "Email is required.";
        return;
    }
    if(commentValue== "") {
        commenterror.textContent = "Comment is required.";
        return;
    }
    alert("Form submitted! ");
});