const menuBtn = document.querySelector('.menu.btn'),
    navMenu = document.querySelector('.navbar-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        navMenu.classList.add('show');
        navMenu = true;
    } else {
        menuBtn.classList.remove('open');
		menuOpen = false;
		navMenu.classList.remove('show');
		navMenu = false;
    }
});