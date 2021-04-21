import { startRestaurantPage } from '/home/dom/restaurantPage/dist/homePage.js';
import { makeTabs } from '/home/dom/restaurantPage/dist/buildTabs.js';
import { homePageCopyFunc } from '/home/dom/restaurantPage/dist/homePageCopy.js';
import { menu } from '/home/dom/restaurantPage/dist/menu.js';
import { contact } from '/home/dom/restaurantPage/dist/contact.js';

function component(){
    console.log('op')
  //get DOM element
    let contentDiv = document.getElementById('content');
  //append modules
    contentDiv.appendChild(startRestaurantPage());
    contentDiv.appendChild(makeTabs());
    contentDiv.appendChild(homePageCopyFunc());
    contentDiv.appendChild(menu());
    contentDiv.appendChild(contact());

  //get elements appended at page load
    const homePageDiv = document.querySelector('.mainSec');
    const menuPageDiv = document.querySelector('.mainMenu');
    const contactPageDiv = document.querySelector('.mainContact');  
  
  //get nav-tabs and add eventListeners
    const navTabs = document.querySelectorAll('.tab-buttons');
    const loopTabs = navTabs.forEach(el => {
      el.addEventListener('click', ()=>{
      
        if(el.id === 'home'){
          menuPageDiv.style.display = 'none';
          contactPageDiv.style.display = 'none';
          homePageDiv.style.display = 'block'
        }else if(el.id === 'menu'){
          contactPageDiv.style.display = 'none';
          homePageDiv.style.display = 'none';
          menuPageDiv.style.display = 'grid';
        }else{
          homePageDiv.style.display = 'none';
          menuPageDiv.style.display = 'none';
          contactPageDiv.style.display = 'grid';
        }
      })
    })

    return contentDiv
}
document.body.appendChild(component())


