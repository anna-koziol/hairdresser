function validateNameSurname() {
    if (name.length > 2 && surname.length > 2) {
        return true;
    } else {
        return false;
    }
}

function validateEmail() {
    //https://www.w3resource.com/javascript/form/email-validation.php
    if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) && mail.indexOf('.') > 0) {
        return true;
    } else {
        return false;
    }
}


function validateDate() {
    let today = new Date().toISOString().slice(0, 10);
    return (today < date);
}