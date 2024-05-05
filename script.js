let current = 0;
let testimonials = document.querySelectorAll('.testimonial');

function displayTestimonial(index) {
    testimonials.forEach((test, i) => {
        test.style.display = (i === index ? 'block' : 'none');
    });
}

function changeTestimonial(dir) {
    current += dir;
    if (current >= testimonials.length) current = 0;
    if (current < 0) current = testimonials.length - 1;
    displayTestimonial(current);
}

document.getElementById('next').addEventListener('click', () => changeTestimonial(1));
document.getElementById('prev').addEventListener('click', () => changeTestimonial(-1));

// Initialize the first testimonial
displayTestimonial(current);
