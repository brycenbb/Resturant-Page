let about = () => {
    if(!document.querySelector('.about')){
        const content = document.getElementById('content');
        content.classList.add('aboutPage');
        let aboutDiv = document.createElement('div');
        aboutDiv.classList.add('about');
        // aboutDiv.style.flex = "1";
        aboutDiv.style.margin = "10%";
        aboutDiv.style.width = "50%";
        aboutDiv.style.height = "700px";
        aboutDiv.style.backgroundColor = "red";
        content.appendChild(aboutDiv);
        console.log('made it to end of about page');
    }
}

export default about;