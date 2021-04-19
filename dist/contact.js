function contact(){
    //tab 3 here
    const mainDiv = document.createElement('main');
    mainDiv.className = 'mainContact';
    mainDiv.id = 'active';
    const h1d = document.createElement('h1');
    h1d.className = 'contactHeader';
    h1d.textContent = ' hello from contact page';
    mainDiv.appendChild(h1d);
    return mainDiv;
}
export {contact}