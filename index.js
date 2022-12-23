const sideMenu = document.querySelector('aside');
const menuBtn= document.querySelector('#menu-btn');
const closeBtn= document.querySelector('#close-btn');
const themeToggler= document.querySelector('.theme-toggler');

//abrir sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

//cerrar sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})


//cambio de color 
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-toggler')
})