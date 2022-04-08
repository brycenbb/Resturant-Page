let menu = () => {
    const content = document.getElementById('content');
    content.classList.add('menuPage');

    for(let i =0; i < 5; i++) {
        let box = document.createElement('div');
        box.classList.add('menuItemBox');
        content.appendChild(box);
    }
}

export default menu;