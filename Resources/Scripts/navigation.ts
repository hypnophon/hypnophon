const menuBtn = document.getElementById('nebuBtn')
const nav = document.querySelector('nav')
const menu = document.querySelector('.nav__menu')
const menuItems = document.querySelectorAll('.nav__item')
const navItems = document.querySelectorAll('.nav__right > li > a')
const htmlDoc = document.querySelector('body')
const gallery = document.getElementById('gallery')
const social = document.querySelector('.social')
const contentScroll = document.querySelector('.content-scroll') as HTMLDivElement

function toggleOpenMenuClasses(){
    menuBtn.classList.toggle('burger--open')
    menu.classList.toggle('nav__menu--open')
    htmlDoc.classList.toggle('overflow-hidden')

    if (nav.classList.contains('nav--dark')){
        nav.classList.toggle('nav--menu-open')
        social.classList.toggle('social--menu-open')
    }
}

function toggleNavColors(){
    if(contentScroll.scrollTop >= gallery.offsetTop && contentScroll.scrollTop <= gallery.offsetTop + (window.innerHeight * .95)){
        nav.classList.add('nav--dark')
    }
    else{ 
        nav.classList.remove('nav--dark')
    }
}

function toggleSocialColors(){
    if(contentScroll.scrollTop >= gallery.offsetTop - (window.innerHeight / 2) && contentScroll.scrollTop <= gallery.offsetTop + (window.innerHeight / 2)){
        social.classList.add('social--dark')
    }    
    else{ 
        social.classList.remove('social--dark')
    }
}

function toggleNavClassesOnScroll(){
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function toggleNavClasses(scrollPosition){
        toggleNavColors()
        toggleSocialColors()
    }
    
    contentScroll.addEventListener('scroll', (e)=>{
        lastKnownScrollPosition = contentScroll.scrollTop;
        console.log(lastKnownScrollPosition)
        if (!ticking) {
            window.requestAnimationFrame(function() {
                toggleNavClasses(lastKnownScrollPosition);
              ticking = false;
            });
        
            ticking = true;
          }
      })
}

export function initNav(){
    menuBtn.addEventListener('click', () => {
        toggleOpenMenuClasses()
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleOpenMenuClasses()
        })
    })

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (menu.classList.contains('nav__menu--open')){
                toggleOpenMenuClasses()
            }           
        })
    })

    toggleNavClassesOnScroll()
}