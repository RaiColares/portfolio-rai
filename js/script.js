/*================= icon navegacao====================*/

let menuIcon = document.querySelector('#menu-icon');
let navegacao = document.querySelector('.navegacao');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navegacao.classList.toggle('active');
};

/*===============scroll sections ativa o link======================*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });

    /*=====================barra de navegação fixa========================*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);



/* Remover ícone de taggle e barra de navegação quando o link da barra de navegação estiver ativo */

    menuIcon.classList.remove('bx-x');
    navegacao.classList.remove('active');
};

/* ====ANIMAÇÕES SCROLL==== */

const reveals = document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right, .reveal-bottom'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(item => {
    observer.observe(item);
});
