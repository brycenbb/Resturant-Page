let about = () => {
    if(!document.querySelector('.about')){
        const content = document.getElementById('content');
        let aboutDiv = document.createElement('div');
        aboutDiv.classList.add('about');
        aboutDiv.style.flex = "1";
        aboutDiv.style.margin = "10%";
        aboutDiv.style.width = "50%";
        aboutDiv.style.height = "50%";
        aboutDiv.style.backgroundColor = "red";
        content.appendChild(aboutDiv);
        console.log('made it to end of about page');
    }
}

export default about;