
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    const cards = document.querySelectorAll('.card');
    const slideInElements = document.querySelectorAll('.slide-in');

    cards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('visible');
        }
    });

    slideInElements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', handleScroll);


document.addEventListener('DOMContentLoaded', handleScroll);


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 25; 
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); 
