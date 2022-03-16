const copy =  document.getElementById('copy')
const footer = document.querySelector('footer')
const body = document.querySelector('body')

export function setCopyright(){
    if (copy){
        copy.innerText = `© ${new Date().getFullYear()} Lucie Vidářová. All rights reserved.`
    }
}

export function setFooterHeight(){
    body.style.setProperty('--footer-height', `${footer.clientHeight}px`);
}