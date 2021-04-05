var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "./php/reservationsList.php", true);
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        const table = document.getElementById('reservations-table');

        for (let item of data) {
            console.log(item);
            let row = document.createElement("tr");
            for (const [key, value] of Object.entries(item)) {
                let cell = document.createElement("td");
                if (key == "first") {
                    value == 0 ? cell.innerHTML = "✓" : cell.innerHTML = "✗";
                } else if (key == "serviceID") {
                    cell.innerHTML = "Service " + value;
                } else {
                    cell.innerHTML = value;
                }
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }
};

xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("");