

function menu(){
    //tab 2 here
    console.log('yo from menu()');
    const mainDiv = document.createElement('main');
    mainDiv.className = 'mainMenu';
    mainDiv.id = 'active';
    const headerMenu = document.createElement('h1');
    headerMenu.className = 'headerMenu'
    headerMenu.textContent = 'Menu';
    mainDiv.appendChild(headerMenu);
    return mainDiv;
    // const menuDiv = document.createElement('div');
    // menuDiv.id = 'active';
    // menuDiv.className = 'menClass';
    // const h1d = document.createElement('h1');
    // h1d.textContent = 'Menu page';
    // menuDiv.appendChild(h1d);
    // return menuDiv;
}

export {menu}