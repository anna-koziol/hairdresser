function getData() {
    let name = document.getElementById("input-name").value;
    let surname = document.getElementById("input-surname").value;
    let mail = document.getElementById("input-mail").value;
    let phone = document.getElementById("input-phone").value;
    let date = document.getElementById("input-date").value;
    let hourIndex = document.getElementById("hours");
    let hour = hourIndex.options[hourIndex.selectedIndex].text;
    let service = document.getElementById("services").value;
    let first = document.getElementById("input-first").checked;
    let error = document.getElementById("error-text");

    return {
        name,
        surname,
        mail,
        phone,
        date,
        hourIndex,
        hour,
        service,
        first,
        error
    };
}