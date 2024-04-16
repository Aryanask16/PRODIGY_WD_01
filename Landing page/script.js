// Change navigation menu style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333';
    }
});


// Smooth scrolling to section when menu item is clicked
document.querySelectorAll('ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

