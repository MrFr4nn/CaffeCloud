// js/script.js
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    // Provjeravamo je li nav-active klasa prisutna prije postavljanja animacije
                    if (nav.classList.contains('nav-active')) {
                         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}

// Funkcija za postavljanje aktivnog linka u navigaciji
const setActiveNavLink = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split("/").pop(); // Dobiva ime trenutne datoteke (npr. "index.html")

    navLinks.forEach(link => {
        // Ukloni 'active' klasu sa svih linkova prvo
        link.classList.remove('active');

        const linkPath = link.getAttribute('href').split("/").pop();

        // Ako je trenutna putanja prazna (root, npr. samo domena), i link je 'index.html' ili '/', označi ga kao aktivan
        // Ili ako se putanje podudaraju
        if ((currentPath === '' && (linkPath === 'index.html' || linkPath === '')) || linkPath === currentPath) {
            link.classList.add('active');
        }
    });
};


// Poziv funkcija kada se DOM učita
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    setActiveNavLink(); // Postavi aktivni link pri učitavanju stranice
});

// Dodatno: Ako se koristi hash navigacija ili SPA, možda će biti potrebno pozvati setActiveNavLink i na promjenu hasha ili rute.
// Za sada, ovo je dovoljno za multi-page website.

// CSS za animaciju linkova (ako nije u glavnom CSS-u)
// Može se dodati i direktno u style.css
// @keyframes navLinkFade {
//     from {
//         opacity: 0;
//         transform: translateX(50px);
//     }
//     to {
//         opacity: 1;
//         transform: translateX(0px);
//     }
// }
// Važno: Ova @keyframes definicija mora biti u CSS datoteci. Ako je ovdje, neće raditi.
// Prebacio sam je u CSS kao komentar, osigurajte da je otkomentirana ili već prisutna u vašem style.css.
// U style.css sam dodao logiku za opacity i transition-delay koja postiže sličan efekt za .nav-active li