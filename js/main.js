const toggleImage = document.getElementById("toggle-image");
const navList = document.getElementById("nav-list");
const closeButton = document.getElementById("close-button");
const gallery = document.querySelector('#gallery-images');
let images = document.querySelectorAll('#gallery-images li');
let currentIndex = 1;
const slideDuration = 5000;


const firstImageClone = images[0].cloneNode(true);
const lastImageClone = images[images.length - 1].cloneNode(true);

gallery.appendChild(firstImageClone);
gallery.insertBefore(lastImageClone, images[0]);

images = document.querySelectorAll('#gallery-images li');
gallery.style.transform = `translateX(-100%)`;

function slide() {
    const imageCount = images.length;

    currentIndex++;
    gallery.style.transition = "transform 0.5s ease-in-out";
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;

    if (currentIndex === imageCount - 1) {
        setTimeout(() => {
            gallery.style.transition = "none";
            gallery.style.transform = `translateX(-100%)`;
            currentIndex = 1;
        }, 500);
    }

    if (currentIndex === 0) {
        setTimeout(() => {
            gallery.style.transition = "none";
            gallery.style.transform = `translateX(-${(imageCount - 2) * 100}%)`;
            currentIndex = imageCount - 2;
        }, 500);
    }

    setTimeout(slide, slideDuration);
}

setTimeout(slide, slideDuration);

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
