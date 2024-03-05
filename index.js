// SHOW MENU

const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('menu-toggle'),
    navClose = document.getElementById('nav-close');

    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
    }

    if (navClose) {
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }