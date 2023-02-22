const form = document.querySelector("form");

const yourName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const yourMessage = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

const yourEmail = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const yourAddress = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

function onSubmitting() {

    event.preventDefault();
    console.log("hello");

    if (checkLength(yourName, 0) === true) {
        nameError.style.display = "none";
    }else {
        nameError.style.display = "block";
    }
    if (checkLength(yourMessage, 9) === true) {
        messageError.style.display = "none";
    }else {
        messageError.style.display = "block";
    }
    if (checkLength(yourAddress, 24) === true) {
        addressError.style.display = "none";
    }else {
        addressError.style.display = "block";
    }

    if( checkEmailFormat(yourEmail.value)=== true) {
        emailError.style.display = "none";
    }else{
        emailError.style.display = "block";
    }

}

form.addEventListener("submit", onSubmitting);

function checkLength(inputLine, requirement) {
    if (inputLine.value.trim().length > requirement) {
        return true;
    }
    else {
        return false;
    }
}

function checkEmailFormat(emailInput) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailInput);
    return patternMatches;
}
