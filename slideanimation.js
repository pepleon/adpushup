
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}


function handleScroll() {
    const slideInElements = document.querySelectorAll('.custom-slide-in');

    slideInElements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', handleScroll);


document.addEventListener('DOMContentLoaded', handleScroll);
