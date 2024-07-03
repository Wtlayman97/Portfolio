const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const darkModeToggle = document.querySelector('.switch input');
const body = document.body;

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
});

darkModeToggle.addEventListener('change', ()=>{
    if (darkModeToggle.checked){
        body.classList.add('dark');
        body.classList.remove('light');
        logo.src = 'L97LogoFinal_dark.png';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        logo.src = 'L97LogoFinal.png';
        localStorage.setItem('darkMode', 'disabled');
    }
});

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    body.classList.remove('light')
    darkModeToggle.checked = true;
    logo.src = 'L97LogoFinal_dark.png';
}