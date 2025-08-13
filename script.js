const slider = document.getElementById("slider");
let currentPosition = 0;

function slide(direction) {
    const slideWidth = slider.children[0].offsetWidth;
    const visibleSlides = 4;
    const totalSlides = slider.children.length;

    currentPosition += direction;

    if (currentPosition < 0) {
        currentPosition = 0;
    } else if (currentPosition > totalSlides - visibleSlides) {
        currentPosition = 0; // Reset to beginning when reaching the end
    }

    slider.style.transform = `translateX(-${slideWidth * currentPosition}px)`;
}

// Automatically slide every 3 seconds
setInterval(() => {
    slide(1); // Slide to the right
}, 1000); // Adjust the interval time as needed (3000 ms = 3 seconds)

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    // Hide all slides and remove active class from dots
    slides.forEach((slide, index) => {
        slide.classList.remove('active'); // Remove active class for fading
        dots[index].classList.remove('active');
    });
    // Show the selected slide
    slides[slideIndex].classList.add('active'); // Add active class for fading
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Automatic slide change every 4 seconds
setInterval(nextSlide, 4000); // Change to 4000 ms

// Initial display
showSlide(currentSlide);

// Navigation controls
document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.next').addEventListener('click', nextSlide);

// Dot controls
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});
