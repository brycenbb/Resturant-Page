import './style.css';
import home from './home.js'
import about from './about.js';
import clear from './clear';
import menu from './menu';
import contact from './contact';


//Initial page load, creates navBar
home();


//TODO: Events for clicking each of the links at the top.
let navButtons = document.querySelector('nav').childNodes;
navButtons[0].addEventListener('click',function() {
    clear();
    home();
});
navButtons[1].addEventListener('click', function() {
    clear();
    about();
});
navButtons[2].addEventListener('click',function() {
    clear();
    menu();
});
navButtons[3].addEventListener('click',function() {
    clear();
    contact();
});



console.log(navButtons);