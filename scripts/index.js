function bookingFunction() {
    event.preventDefault();

    let validationStatus = true;
    const vars = getData();

    //Form validation
    vars.error.innerHTML = " ";
    if (!validateNameSurname(vars.name, vars.surname)) {
        validationStatus = false;
        vars.error.innerHTML += "Error! Incorrect name and/or surname format. ";
    }

    if (!validateDate(vars.date)) {
        validationStatus = false;
        vars.error.innerHTML += "Error! Selected date should be from the future. ";
    }
    if (!validateEmail(vars.mail)) {
        validationStatus = false;
        vars.error.innerHTML += "Error! Incorrect mail format. ";
    }
    if (!validatePhone(vars.phone)) {
        validationStatus = false;
        vars.error.innerHTML += "Error! Incorrect phone number format. ";
    }


    if (validationStatus) {
        var datetime = vars.date + " " + vars.hour + ':00';

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "./php/index.php", true);
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);

                if (this.responseText == "booked") {
                    const modal = document.getElementById('modal');

                    modal.classList.add("modal-flex");

                    setTimeout(function() {
                        modal.classList.remove("modal-flex");
                    }, 4000);
                } else if (this.responseText == "busy") {
                    vars.error.innerHTML = "The selected date is already taken, try another one. ";
                } else {
                    vars.error.innerHTML = "Error! Unexpected error, please try again later. ";
                }
            }
        };

        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("name=" + vars.name + "&surname=" + vars.surname + "&mail=" + vars.mail + "&phone=" + vars.phone + "&date=" + vars.date + "&hour=" + datetime + "&service=" + vars.service + "&first=" + vars.first);
    }

}