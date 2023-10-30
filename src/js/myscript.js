const toggleMenu = document.querySelector('.toggle-menu');

const toggle = document.querySelector('.toggle');
const toggleIcons = toggle.querySelectorAll('i');


toggleIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        toggleIcons[0].classList.toggle('show-icon');
        toggleIcons[1].classList.toggle('hide-icon');
        toggleMenu.classList.toggle('show-menu');
    })
})