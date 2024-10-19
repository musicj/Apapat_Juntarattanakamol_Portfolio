const toggleImage = document.getElementById("toggle-image");
const navList = document.getElementById("nav-list");
const closeButton = document.getElementById("close-button");

document.addEventListener("DOMContentLoaded", function () {
    let scrollPosition = 0;

    toggleImage.addEventListener("click", function () {
        scrollPosition = window.scrollY;
        navList.classList.toggle("show");
        document.body.style.overflow = 'hidden';
    });

    closeButton.addEventListener("click", function () {
        navList.classList.remove("show");
        window.scrollTo(0, scrollPosition);
        document.body.style.overflow = '';
    });
});
