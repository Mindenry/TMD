// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.padding = '0.5rem 2rem';
    } else {
        document.querySelector('.navbar').style.padding = '1rem 2rem';
    }
});

// Initialize carousel with autoplay
var myCarousel = document.querySelector('#bandCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000,
    wrap: true
});