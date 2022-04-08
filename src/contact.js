let contact = () => {
    const content = document.getElementById('content');
    let contactInfoBox = document.createElement('div');
    contactInfoBox.classList.add('menuItemBox');
    contactInfoBox.textContent = "You can contact us at qjwiejqowej@gmail.com or 919203039110";
    content.appendChild(contactInfoBox);
}

export default contact;