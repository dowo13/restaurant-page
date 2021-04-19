
const makeTabs = ()=>{

    const tabDiv  = document.createElement('div');
    tabDiv.className = 'tab';
    const homeTab = document.createElement('button');
    homeTab.id = 'home';
    homeTab.className = 'tab-buttons';
    homeTab.textContent = 'Home'
    const menuTab = document.createElement('button');
    menuTab.id = 'menu';
    menuTab.className = 'tab-buttons';
    menuTab.textContent = 'Menu'
    const contactTab = document.createElement('button');
    contactTab.id = 'contact';
    contactTab.className = 'tab-buttons';
    contactTab.textContent = 'Contact';
    
    tabDiv.appendChild(homeTab);
    tabDiv.appendChild(menuTab);
    tabDiv.appendChild(contactTab);

    return tabDiv;
}
export { makeTabs }