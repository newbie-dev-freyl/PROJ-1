const navTop = document.querySelector('.nav-top');
const navTopToggle = navTop.previousElementSibling;
const navTopLinkAll = navTop.querySelectorAll('a');
const navTopBackButtonAll = navTop.querySelectorAll('[back-button]');
const navTopSubMenuAll = navTop.querySelectorAll('.nav-top__submenu');


navTopToggle.onclick = function () {
    navTop.toggleAttribute('show');
    navTopToggle.toggleAttribute('toggled');

    navTopSubMenuAll.forEach(menu => {
        menu.removeAttribute('show');
    })
}


function fn_screen_width(size) {
    if (document.documentElement.getBoundingClientRect().width > size) {
        navTopBackButtonAll.forEach(button => {
            button.parentElement.style.display = "none";
        })
        
        navTop.removeAttribute('show');
        navTopToggle.removeAttribute('toggled');

        navTopSubMenuAll.forEach(menu => {
            menu.removeAttribute('show');
        })

    }  else  {
        
        navTopBackButtonAll.forEach(button => {
            button.parentElement.style.display = "block";
            const text = button.parentElement.parentElement.previousElementSibling.text;
            button.querySelector('[title]').innerHTML = text;
        })

        navTopLinkAll.forEach(link => {
            link.onclick = function () {
                if (link.hasAttribute('toggle-menu')) {
                    link.nextElementSibling.setAttribute('show','')
                } else if (link.hasAttribute('back-button')) {
                    link.parentElement.parentElement.removeAttribute('show')
                } else {
                    navTopSubMenuAll.forEach(menu => {
                        menu.removeAttribute('show');
                    })
                }
            }
        })
    }
}

window.onload = function () {
    navTop.setAttribute('data-transform-type', 'right');
    fn_screen_width(736);
}

window.onresize = function () {
    fn_screen_width(736);
}