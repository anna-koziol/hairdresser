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


    if (validationStatus) {
        //Funkcja PHP
        var datetime = date + " " + hour + ':00';

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "./php/index.php", true);
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                const myModal = document.getElementById('exampleModal')
                const myInput = document.getElementById('myInput')

                myModal.addEventListener('shown.mdb.modal', () => {
                    myInput.focus()
                })
            }
        };

        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("name=" + name + "&surname=" + surname + "&mail=" + mail + "&phone=" + phone + "&date=" + date + "&hour=" + datetime + "&service=" + service + "&first=" + first);


    }

}