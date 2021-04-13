function validateNameSurname(name, surname) {
    if (name.length > 2 && surname.length > 2) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(mail) {
    //regex from https://www.w3resource.com/javascript/form/email-validation.php
    if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) && mail.indexOf('.') > 0) {
        return true;
    } else {
        return false;
    }
}

function validatePhone(phone) {
    if (phone.length > 8 && phone.length < 12) {
        return true;
    } else {
        return false;
    }
}

function validateDate(date) {
    let today = new Date().toISOString().slice(0, 10);
    return (today < date);
}