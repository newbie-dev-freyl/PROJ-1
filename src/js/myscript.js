const navTop = document.querySelector('.nav-top');
const navTopToggle = navTop.previousElementSibling;
const navTopBackButton = document.querySelectorAll('[back-button]');


navTopToggle.onclick = function () {
    navTop.toggleAttribute('show');
    navTopToggle.toggleAttribute('toggled');
}


function fn_screen_width(size) {
    if (document.documentElement.getBoundingClientRect().width > size) {
        navTopBackButton.forEach(button => {
            button.parentElement.style.display = "none"; 
        })
    }
}

window.onload = function () {
    navTop.setAttribute('data-transform-type', 'bottom');
    fn_screen_width(736);
}

window.onresize = function () {
    fn_screen_width(736);
}