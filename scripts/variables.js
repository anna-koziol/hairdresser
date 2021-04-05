var name, surname, mail, phone, date, hourIndex, hour, service, first, error;

function getData() {
    name = document.getElementById("input-name").value;
    surname = document.getElementById("input-surname").value;
    mail = document.getElementById("input-mail").value;
    phone = document.getElementById("input-phone").value;
    date = document.getElementById("input-date").value;
    hourIndex = document.getElementById("hours");
    hour = hourIndex.options[hourIndex.selectedIndex].text;
    service = document.getElementById("services").value;
    first = document.getElementById("input-first").checked;
    error = document.getElementById("error-text");
}