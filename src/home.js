import nav from './nav.js';

let home = () => {
    let content = document.getElementById('content');

    if(!document.querySelector('nav')) {
        let navbar = nav();
        content.appendChild(navbar);
    }
    if(!document.querySelector('.about1')) {
        let exampleDiv = document.createElement('div');
        exampleDiv.classList.add('about1');
        exampleDiv.style.flex = "1";
        exampleDiv.style.margin = "10%";
        exampleDiv.style.width = "50%";
        exampleDiv.style.height = "50%";
        exampleDiv.style.backgroundColor = "blue";
        content.appendChild(exampleDiv);
        console.log('made it to end of home page'); 
    }
   
}
export default home;