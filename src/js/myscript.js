const navTop = document.querySelector('.nav-top');
const navTopToggle = navTop.previousElementSibling;
const navTopLinkAll = navTop.querySelectorAll('a');
const navTopBackButtonAll = navTop.querySelectorAll('[back-button]');
const navTopSubMenuAll = navTop.querySelectorAll('.nav-top__submenu');

// FUNCTIONS =====================================================================
function fn_show_navtop() {
    navTop.toggleAttribute('show');
    navTopToggle.toggleAttribute('toggled');
}
function fn_hide_navtop() {
    navTop.removeAttribute('show');
    navTopToggle.removeAttribute('toggled');
}
function fn_hide_navtop_submenu() {
    navTopSubMenuAll.forEach(menu => {
        menu.removeAttribute('show');
    })
}
function fn_toggle_disable_effect() {
    let resizeTimer;
    document.body.setAttribute('effect-disabled', '')

    resizeTimer = setTimeout(() => {
        document.body.removeAttribute('effect-disabled', '')
    }, 200)
}
function fn_push_menu_navtop() {
    navTopLinkAll.forEach(link => {
        link.onclick = function () {
            if (link.hasAttribute('toggle-menu')) {
                link.nextElementSibling.setAttribute('show','')
            } else if (link.hasAttribute('back-button')) {
                link.parentElement.parentElement.removeAttribute('show')
            } else {
                fn_hide_navtop_submenu();
            }
        }
    })
}
function fn_hide_navtop_backbutton() {
    navTopBackButtonAll.forEach(button => {
        button.parentElement.style.display = "none";
    })
}
function fn_show_navtop_backbutton() {
    navTopBackButtonAll.forEach(button => {
        button.parentElement.style.display = "block";
    })
}
function fn_display_navtop_backbutton_label(){
    navTopBackButtonAll.forEach(button => {
        const text = button.parentElement.parentElement.previousElementSibling.text;
        button.querySelector('[title]').innerHTML = text;
    })
}
function fn_page_setup() {
    navTop.setAttribute('data-transform-type', 'right');
}
function fn_screen_width(size) {
    fn_toggle_disable_effect()
    if (document.documentElement.getBoundingClientRect().width > size) {
        fn_hide_navtop_backbutton();
        fn_hide_navtop();
        fn_hide_navtop_submenu();
    }  else  {
        fn_show_navtop_backbutton(); 
        fn_display_navtop_backbutton_label();
        fn_push_menu_navtop();
    }
}

// CLICK EVENTS =================================================================
navTopToggle.onclick = function () {
    fn_show_navtop();
    fn_hide_navtop_submenu();
}

// ONLOAD EVENT =================================================================
window.onload = function () {
    fn_page_setup();
    fn_screen_width(736);
}

// RESIZE EVENT =================================================================
window.onresize = function () {
    fn_screen_width(736);
}