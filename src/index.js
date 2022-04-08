import './style.css';
import home from './home.js'
import about from './about.js';
import clear from './clear';


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
// navButtons[0].addEventListener('click',menu);
// navButtons[0].addEventListener('click',contact);



console.log(navButtons);