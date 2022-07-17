burger = document.querySelector('.burger')
navList = document.querySelector('.navlist')
navbar = document.querySelector('.navbar')


burger.addEventListener('click', ()=>{
    navList.classList.toggle('vclassresp');
    navbar.classList.toggle('hnavresp');
})