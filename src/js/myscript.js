const toggle = document.querySelector('.nav-top__toggle');
const toggleMenu = document.querySelector('.nav-top__toggle + *');

toggle.addEventListener('click', () => {
    toggle.toggleAttribute('toggled');
    toggleMenu.toggleAttribute('show');
})

window.addEventListener('resize', () => {
    if (document.documentElement.getBoundingClientRect().width > 600 ) {
        toggle.removeAttribute('toggled');
        toggleMenu.removeAttribute('show');
    }
})