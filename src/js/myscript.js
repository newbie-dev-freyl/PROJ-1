const toggle = document.querySelector('.nav-top__toggle');
const toggleMenu = document.querySelector('.nav-top__toggle + *');



const navTop = document.querySelector('.nav-top');
const navTopSubMenuAll = navTop.querySelectorAll('.nav-top__submenu');
const navTopSubMenuToggleAll = navTop.querySelectorAll('a');
let resizeTimer;

function fn_remove_effects() {
    // REMOVE ANIMATION ON WINDOWS RESIZING AND TRANSITIONS DESKTOP AND MOBILE BREAKPOINTS =================================
    document.body.setAttribute('effects', 'off');

    //ON WINDOW RESIZING REMOVE ALL TRANSITIONS AND ANIMATION ================================================================
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.removeAttribute('effects');
    }, 100);
}

function fn_show_nav_top() {
    toggle.toggleAttribute('toggled');
    toggleMenu.toggleAttribute('show');
}

function fn_hide_nav_top() {
    toggle.removeAttribute('toggled');
    toggleMenu.removeAttribute('show');
}

function fn_toggle_submenu() {
    navTopSubMenuToggleAll.forEach(toggle => {
        toggle.addEventListener('click', () => {   
            if (toggle.hasAttribute('toggle-menu')) {
                toggle.nextElementSibling.setAttribute('show','');
            } else if (toggle.hasAttribute('back-button')) {
                toggle.parentElement.parentElement.removeAttribute('show');
            } else {
                navTopSubMenuAll.forEach(submenu => {
                    submenu.removeAttribute('show');
                })
            }
        })
    })
}



function fn_remove_show(el) {
    el.forEach(submenu => {
        submenu.removeAttribute('show','');
    })
}


toggle.addEventListener('click', () => {
    fn_show_nav_top();
    
})

window.addEventListener('resize', () => {
    fn_remove_effects();
    if (document.documentElement.getBoundingClientRect().width > 736 ) {
        fn_hide_nav_top();
        fn_remove_show(navTopSubMenuAll);
    } else {
        fn_toggle_submenu();
    }
})

window.addEventListener('load', () => {

    if (document.documentElement.getBoundingClientRect().width > 736 ) {
        fn_hide_nav_top();
        fn_remove_show(navTopSubMenuAll);
    } else {
        fn_toggle_submenu();
    }

    
    navTop.setAttribute('data-transform-type', 'right');
    navTopSubMenuAll.forEach(submenu => {
        let text = submenu.previousElementSibling.text;
        submenu.querySelector('[title]').innerHTML = text;
        submenu.setAttribute('data-transform-type', 'push-menu')
    })

    navTopSubMenuToggleAll.forEach(toggle => {
        if (toggle.hasAttribute('toggle-menu')) {
            return
        } if (toggle.hasAttribute('back-button')) {
            return
        }
        toggle.querySelector('i').style.opacity = 0;
    })

})

