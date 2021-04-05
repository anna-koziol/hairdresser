function booking() {
    let validationStatus = true;
    getData();
    event.preventDefault();

    //Form validation
    error.innerHTML = " ";
    if (!validateNameSurname()) {
        validationStatus = false;
        error.innerHTML += "Error! Incorrect name and/or surname format. ";
    }

    if (!validateDate()) {
        validationStatus = false;
        error.innerHTML += "Error! Selected date should be from the future. ";
    }
    if (!validateEmail()) {
        validationStatus = false;
        error.innerHTML += "Error! Incorrect mail format. ";
    }
    if (!validatePhone()) {
        validationStatus = false;
        error.innerHTML += "Error! Incorrect phone number format. ";
    }


    if (validationStatus) {
        //Funkcja PHP
        var datetime = date + " " + hour + ':00';

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
                    error.innerHTML = "The selected date is already taken, try another one. ";
                } else {
                    error.innerHTML = "Error! Unexpected error, please try again later. ";
                }
            }
        };

        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("name=" + name + "&surname=" + surname + "&mail=" + mail + "&phone=" + phone + "&date=" + date + "&hour=" + datetime + "&service=" + service + "&first=" + first);
    }

}