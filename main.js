const carouselSlide = document.querySelector('.carousel-slide');
const projects = document.querySelectorAll('.project');

let counter = 0;
const size = projects[0].clientWidth;

function nextProject() {
    if (counter >= projects.length - 1) return;
    carouselSlide.style.transform = `translateX(${-size * (counter + 1)}px)`;
    counter++;
}

function prevProject() {
    if (counter <= 0) return;
    carouselSlide.style.transform = `translateX(${-size * (counter - 1)}px)`;
    counter--;
}
