function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - document.querySelector('#desktop-nav').offsetHeight,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });

    const mobileNavLinks = document.querySelectorAll('#mobile-nav .menu-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
            toggleMenu(); // Close the mobile menu after clicking a link
        });
    });

});