const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function toggleDarkLightM(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rbg(255 255 255 / 50%)' ;
    textBox.style.backgroundColor = isDark ? 'rbg(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.color = isDark ? 'rgb(255 255 255)' : 'rgb(0 0 0)';
    //TextContent is secure way to change text value of html element; modifying to children of toggle icon
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : 
            toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isDark ? imageMode('dark') : imageMode('light');
}

// Dark or light images
function imageMode(color) {
    image1.src = `img/undraw_Options_re_${color}-theme.svg`
    image2.src = `img/undraw_join_${color}-theme.svg`
    image3.src = `img/undraw_Navigation_${color}-theme.svg`
}




// Switch Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightM(true)
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightM(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightM(true);
    }
}