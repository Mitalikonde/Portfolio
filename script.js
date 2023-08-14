// script.js
var navbar = document.getElementById("navbar");
var prevScrollPos = window.pageYOffset;

function handleScroll() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }

    prevScrollPos = currentScrollPos;
}

window.onscroll = handleScroll;


const navbarLinks = document.querySelectorAll('#navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});


