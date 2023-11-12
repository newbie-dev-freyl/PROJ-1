const navTopToggleMenu = document.querySelector('.nav-top__toggle');
const navTop = document.querySelector('.nav-top');
const navTopSubMenuAll = document.querySelectorAll('.nav-top__submenu');
const navTopSubMenuLinkAll = document.querySelectorAll('.nav-top__menu a');

// FUNCTIONS

function fn_setup() {
    navTop.setAttribute('data-transform-type', 'bottom');

    let text;
    navTopSubMenuLinkAll.forEach(link => {
        if (link.hasAttribute('back-button')) {
            text = link.parentElement.parentElement.previousElementSibling.text;
            link.querySelector('[title]').innerHTML = text;
        }
    })

    navTopSubMenuLinkAll.forEach(link => {
        if (link.hasAttribute('toggle-menu') || link.hasAttribute('back-button')) {
            return;
        } else {
            link.querySelector('i').style.display = "none";
        }
    })
}

function fn_hide_navtop() {
    navTopToggleMenu.removeAttribute('toggled');
    navTop.removeAttribute('show');
}

function fn_show_navtop(){
    navTopToggleMenu.toggleAttribute('toggled');
    navTop.toggleAttribute('show');
}

function fn_hide_navtop_submenu() {
    navTopSubMenuAll.forEach(menu => {
        menu.removeAttribute('show');
    })
}

function fn_toggle_navtop_submenu() {
    navTopSubMenuLinkAll.forEach(link => {
        link.onclick = function () {
            if (link.hasAttribute('toggle-menu')) {
                link.nextElementSibling.setAttribute('show','')
            } else if (link.hasAttribute('back-button')) {
                link.parentElement.parentElement.removeAttribute('show')
            } else {
                fn_hide_navtop();
                fn_hide_navtop_submenu();
            }
        }
    })
}

function fn_screen_size(size) {
    if (document.documentElement.getBoundingClientRect().width > size) {
        fn_hide_navtop();
        fn_hide_navtop_submenu();
    } else {
        fn_toggle_navtop_submenu();
    }
}

function fn_disable_effect(secs) {
    let resizeTimer;
    document.body.setAttribute('effects-disabled','');

    resizeTimer = setTimeout(() => {
        document.body.removeAttribute('effects-disabled');
    }, secs)
}

// EVENTS

navTopToggleMenu.onclick = function () {
    fn_show_navtop()
    fn_hide_navtop_submenu();
}

window.onload = function () {
    fn_setup();
    fn_screen_size(736);
}

window.onresize = function () {
    fn_disable_effect(200);
    fn_screen_size(736);
}





