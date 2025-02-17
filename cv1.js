let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['an Electrical and Electronics Engineer.', 'a Data Scientist.', 'a Space Science Enthusiast.', 'a Web Developer.'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1200,
    loop: true,
  });

  