document.addEventListener("DOMContentLoaded", galleryFill);

function galleryFill() {

    const collection = ['./img/main-photo-4.jpg', './img/main-photo-5.jpg', './img/main-photo-6.jpg'];
    const squares = document.getElementsByClassName("gallery-square");
    let i = 0;

    for (let item of squares) {
        item.style.backgroundImage = "url(" + collection[i] + ")";
        i++;
        if (i == collection.length) {
            i = 0;
        }
    }
}