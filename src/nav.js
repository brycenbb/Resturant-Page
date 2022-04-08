let nav = () => {
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    const homeBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.type = 'button';
    homeBtn.textContent = "Home";
    aboutBtn.type = 'button';
    aboutBtn.textContent = "About";
    menuBtn.type = 'button';
    menuBtn.textContent = "Menu";
    contactBtn.type = 'button';
    contactBtn.textContent = "Contact";

    nav.appendChild(homeBtn);
    nav.appendChild(aboutBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    nav.style.display = 'flex';
    nav.style.gap = '0.2rem';
    return nav;
}

export default nav;