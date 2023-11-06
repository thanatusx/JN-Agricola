
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

const slider = document.querySelector(".slider");

let slideIndex = 0;
const autoSlideInterval = 3000;

function showSlides(index) {
    if (index < 0) {
        index = slider.childElementCount - 1;
    }
    if (index >= slider.childElementCount) {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * 1500}px)`;
    slideIndex = index;
}

function autoSlide() {
    showSlides(slideIndex + 1);
}

setInterval(autoSlide, autoSlideInterval);

showSlides(slideIndex);

