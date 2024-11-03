// JavaScript for sticky navigation and mobile menu toggle
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }
};

// Mobile menu toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<span></span><span></span><span></span>'; // Three lines for hamburger icon
document.querySelector('nav').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active');
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('nav ul');
        navLinks.classList.remove('active');
    });
});