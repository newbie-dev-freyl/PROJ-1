const navTop=document.querySelector(".nav-top"),navTopToggle=navTop.previousElementSibling,navTopBackButton=document.querySelectorAll("[back-button]");function fn_screen_width(t){document.documentElement.getBoundingClientRect().width>t&&(navTop.removeAttribute("show"),navTopBackButton.forEach((t=>{t.parentElement.style.display="none"})))}navTopToggle.onclick=function(){navTop.toggleAttribute("show"),navTopToggle.toggleAttribute("toggled")},window.onload=function(){navTop.setAttribute("data-transform-type","bottom"),fn_screen_width(736)},window.onresize=function(){fn_screen_width(736)};
//# sourceMappingURL=myscript.js.map