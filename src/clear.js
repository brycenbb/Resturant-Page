
//Clears all of the content on the page besides the navigation bar.
let clear = () => {
    const content = document.getElementById('content');
    let child = content.lastChild;
    while(child){
        if(child === content.firstChild){
            break;
        }
        child.remove();
        child = content.lastChild;
    }

}

export default clear;