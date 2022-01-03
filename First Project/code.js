const ham = document.querySelector('.ham')
const mobilemenu = document.querySelector('UL')
const header = document.querySelector('#header .header')
ham.addEventListener('click',()=>{
    ham.classList.toggle('close')
    mobilemenu.classList.toggle('active')
})

document.addEventListener('scroll',()=>{
    let scrollPosition = window.scrollY ;
    if (scrollPosition > 450){
        header.style.backgroundColor = '#29323c'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})
