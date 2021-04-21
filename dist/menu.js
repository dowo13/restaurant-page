

function menu(){
    //tab 2 here
    console.log('yo from menu()');
    const mainDiv = document.createElement('main');
    mainDiv.className = 'mainMenu';
    mainDiv.id = 'active';
    const headerMenu = document.createElement('h1');
    headerMenu.className = 'headerMenu'
    headerMenu.textContent = 'Menu';

    //create grid layout
    const picDiv = document.createElement('div');
    const showPic = document.createElement('img');
    picDiv.className = 'menuSlides';
    showPic.className = 'foodMenu';

    picDiv.appendChild(showPic)
    //add images of menu items on loop
    let menuMains = ['/home/dom/restaurantPage/dist/menuItem.jpg', '/home/dom/restaurantPage/dist/menuItem1.jpeg', '/home/dom/restaurantPage/dist/menuitem2.jpg', '/home/dom/restaurantPage/dist/menuitem3.jpg', '/home/dom/restaurantPage/dist/menuitem4.jpg', '/home/dom/restaurantPage/dist/menuitem5.jpg', '/home/dom/restaurantPage/dist/menuitem6.jpg', '/home/dom/restaurantPage/dist/menuitem7.jpg', '/home/dom/restaurantPage/dist/menuitem8.jpg', '/home/dom/restaurantPage/dist/menuitem9.jpg', '/home/dom/restaurantPage/dist/menuitem10.jpg']

    let menuDesserts = ['dist/pudding1.jpg', 'dist/pudding2.jpeg', 'dist/pudding3.jpg' ];

    let picIndx = 0
    function loopPics(arr){
        //menu pic loops
        for(let i=0; i< arr.length; i++){
            console.log(arr[i])
            showPic.src = arr[picIndx];
            picIndx++
            console.log()
            if(picIndx === arr.length-1){
                picIndx = 0
            }
        }
    }
    setInterval(() => {
        loopPics(menuMains)
    }, 2000);
   
    //side menu section
    const lMenCont = document.createElement('p');
    lMenCont.className = 'foodLeft';
    const rMenCont = document.createElement('p');
    rMenCont.className = 'foodRight';
    //add pics of menu
    const lePic = document.createElement('img');
    lePic.className = 'menuPicLeft';
    lePic.src = '/home/dom/restaurantPage/dist/kebabs.jpg' 
    const rightPic = document.createElement('img');
    rightPic.className = 'menuPicRight';
    rightPic.src = '/home/dom/restaurantPage/dist/menuBlackboard.png';

    lMenCont.appendChild(lePic);
    rMenCont.appendChild(rightPic);

    mainDiv.appendChild(rMenCont)
    mainDiv.appendChild(lMenCont)
    headerMenu.appendChild(picDiv);
    mainDiv.appendChild(headerMenu);
    return mainDiv;
   
}

export {menu}