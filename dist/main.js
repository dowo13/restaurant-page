/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/buildTabs.js":
/*!***************************!*\
  !*** ./dist/buildTabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeTabs\": () => (/* binding */ makeTabs)\n/* harmony export */ });\n\nconst makeTabs = ()=>{\n\n    const tabDiv  = document.createElement('div');\n    tabDiv.className = 'tab';\n    const homeTab = document.createElement('button');\n    homeTab.id = 'home';\n    homeTab.className = 'tab-buttons';\n    homeTab.textContent = 'Home'\n    const menuTab = document.createElement('button');\n    menuTab.id = 'menu';\n    menuTab.className = 'tab-buttons';\n    menuTab.textContent = 'Menu'\n    const contactTab = document.createElement('button');\n    contactTab.id = 'contact';\n    contactTab.className = 'tab-buttons';\n    contactTab.textContent = 'Contact';\n    \n    tabDiv.appendChild(homeTab);\n    tabDiv.appendChild(menuTab);\n    tabDiv.appendChild(contactTab);\n\n    return tabDiv;\n}\n\n\n//# sourceURL=webpack://restaurantpage/./dist/buildTabs.js?");

/***/ }),

/***/ "./dist/contact.js":
/*!*************************!*\
  !*** ./dist/contact.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n    //contact details\n    const mainDiv = document.createElement('main');\n    mainDiv.className = 'mainContact';\n    mainDiv.id = 'active';\n    const h1d = document.createElement('h1');\n    h1d.className = 'contactHeader';\n    h1d.textContent = 'Contact Us';\n    //add social media and phone icons\n    const phoneIcon = document.createElement('a');\n    phoneIcon.href = '#';\n    phoneIcon.className = 'fa fa-phone';\n    const phoneText = document.createElement('p');\n    phoneText.className = 'contactText';\n    phoneText.textContent = 'Phone us '\n    const fBook = document.createElement('a');\n    fBook.href = '#';\n    fBook.className = 'fa fa-facebook';\n    const fBookText = document.createElement('p');\n    fBookText.className = 'contactText';\n    fBookText.textContent = 'Facebook '\n    const twitterIcon = document.createElement('a');\n    twitterIcon.href = '#';\n    twitterIcon.className = 'fa fa-twitter';\n    const twitterText = document.createElement('p');\n    twitterText.className = 'contactText';\n    twitterText.textContent = 'Tweet us '\n    const emailIcon = document.createElement('a');\n    emailIcon.href = '#';\n    emailIcon.className = 'fa fa-envelope';\n    const emailText = document.createElement('p');\n    emailText.className = 'contactText';\n    emailText.textContent = 'Email us '\n\n    mainDiv.appendChild(h1d);\n    mainDiv.appendChild(phoneIcon);\n    mainDiv.appendChild(phoneText);\n    mainDiv.appendChild(fBook);\n    mainDiv.appendChild(fBookText);\n    mainDiv.appendChild(twitterIcon);\n    mainDiv.appendChild(twitterText);\n    mainDiv.appendChild(emailIcon);\n    mainDiv.appendChild(emailText);\n    return mainDiv;\n}\n\n\n//# sourceURL=webpack://restaurantpage/./dist/contact.js?");

/***/ }),

/***/ "./dist/homePage.js":
/*!**************************!*\
  !*** ./dist/homePage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startRestaurantPage\": () => (/* binding */ startRestaurantPage)\n/* harmony export */ });\n\nconst startRestaurantPage = ()=>{\n    //build divs\n    const intro = document.createElement('h1');\n    intro.className = 'intro';\n    intro.innerHTML = '<span class=\"material-icons\">set_meal</span>' + 'Fishers' + '<span class=\"material-icons\">set_meal</span>';\n\n    const hr = document.createElement('hr');\n    hr.className = 'hr'\n    // intro.appendChild(hr);\n\n    return intro;\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./dist/homePage.js?");

/***/ }),

/***/ "./dist/homePageCopy.js":
/*!******************************!*\
  !*** ./dist/homePageCopy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageCopyFunc\": () => (/* binding */ homePageCopyFunc)\n/* harmony export */ });\n\nconst homePageCopyFunc = ()=>{\n    const mainDiv = document.createElement('main');\n    mainDiv.className = 'mainSec';\n    mainDiv.id = 'active';\n    mainDiv.style.display = 'block';\n\n    const homePageIntro = document.createElement('h1');\n    homePageIntro.className = 'homeIntro';\n    homePageIntro.innerHTML = `Welcome to <span style=\"color: blue; font-size: 2.5rem; font-weight: bold; font-style: italic\"> Fishers </span>`\n\n    const para = document.createElement('p');\n    const para2 = document.createElement('p');\n    const para3 = document.createElement('p');\n\n    para.className = 'copyP';\n    // para.textContent = copyText;\n    para2.className = 'copyP2';\n    // para2.textContent = copy2;\n    para3.className = 'copy3';\n\n    const restPic = document.createElement('img');\n    restPic.className = 'restPic';\n    restPic.src = '/home/dom/restaurantPage/dist/restaurant.jpg';\n    restPic.alt = 'pic of inside restaurant';\n\n    const pic = document.createElement('img');\n    pic.className = 'fishPic';\n    pic.src = '/home/dom/restaurantPage/dist/fishnchips.jpg';\n    pic.alt = 'pic of fish and chips';\n\n    const pic1 = document.createElement('img');\n    pic1.className = 'pic1';\n    pic1.src = '/home/dom/restaurantPage/dist/chippyPic.png';\n    pic1.alt = 'more fish and chips pics'\n\n    const pic2 = document.createElement('img');\n    pic2.className = 'pic2';\n    pic2.src = '/home/dom/restaurantPage/dist/Seafood.jpg';\n    pic2.alt = 'inside of restaurant';\n\n\n    //copy text\n    let copyText = `Award winning Fish & Chips. With an extensive menu and the freshest fish you can get (caught on the very same day that it is used). FISHERS restaurant has been recognised the world over as the go to restaurant for Fish & Chips. Our Michelin starred chef prides himself on making the menu diverse and exciting, from our delicious line caught cod to our world famous Scampi in the basket, Fishies truly has a Fish for all, add that to our delicious chunky chips made from locally sourced potatoes, mouth watering mushy peas with tartare sauce and lashings of salt and vinegar, Fishers looks forward to welcoming you.`;\n\n    let copy2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh sit amet commodo nulla. Varius sit amet mattis vulputate. Faucibus vitae aliquet nec ullamcorper sit amet risus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Pellentesque id nibh tortor id aliquet lectus proin nibh. Eu mi bibendum neque egestas. Ultrices gravida dictum fusce ut. Est sit amet facilisis magna etiam tempor orci eu lobortis. Vestibulum morbi blandit cursus risus at ultrices. Faucibus interdum posuere lorem ipsum dolor. Dui accumsan sit amet nulla facilisi. Scelerisque varius morbi enim nunc faucibus a. Morbi tristique senectus et netus et malesuada fames ac turpis. In est ante in nibh mauris cursus mattis. Aliquet lectus proin nibh nisl condimentum id venenatis a. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. At augue eget arcu dictum varius duis. Pharetra convallis posuere morbi leo urna molestie. Tincidunt ornare massa eget egestas purus. Feugiat nibh sed pulvinar proin. Amet nulla facilisi morbi tempus iaculis. Fames ac turpis egestas maecenas pharetra convallis posuere. Tincidunt augue interdum velit euismod in pellentesque massa. Mi sit amet mauris commodo quis imperdiet massa. Pellentesque habitant morbi tristique senectus et. Platea dictumst vestibulum rhoncus est pellentesque. Sagittis nisl rhoncus mattis rhoncus urna. Est pellentesque elit ullamcorper dignissim cras tincidunt. Quis vel eros donec ac odio tempor orci dapibus ultrices. Nullam eget felis eget nunc lobortis mattis aliquam. Elit eget gravida cum sociis natoque penatibus.';\n\n    let copy3 = 'Platea dictumst vestibulum rhoncus est pellentesque. Sagittis nisl rhoncus mattis rhoncus urna. Est pellentesque elit ullamcorper dignissim cras tincidunt. Quis vel eros donec ac odio tempor orci dapibus ultrices. Nullam eget felis eget nunc lobortis mattis aliquam. Elit eget gravida cum sociis natoque penatibus.'\n\n    para.textContent = copyText;\n    para2.textContent = copy2;\n    para3.textContent = copy3;\n\n    mainDiv.appendChild(homePageIntro)\n    // mainDiv.appendChild(para);\n    // mainDiv.appendChild(para2);\n    // mainDiv.appendChild(para3);\n    mainDiv.appendChild(restPic)\n    mainDiv.appendChild(pic);\n    mainDiv.appendChild(para);\n    // mainDiv.appendChild(pic1);\n    mainDiv.appendChild(pic2);\n\n    return mainDiv;\n\n}\n\n\n//# sourceURL=webpack://restaurantpage/./dist/homePageCopy.js?");

/***/ }),

/***/ "./dist/menu.js":
/*!**********************!*\
  !*** ./dist/menu.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n\n\nfunction menu(){\n    //tab 2 here\n    console.log('yo from menu()');\n    const mainDiv = document.createElement('main');\n    mainDiv.className = 'mainMenu';\n    mainDiv.id = 'active';\n    const headerMenu = document.createElement('h1');\n    headerMenu.className = 'headerMenu'\n    headerMenu.textContent = 'Menu';\n\n    //create grid layout\n    const picDiv = document.createElement('div');\n    const showPic = document.createElement('img');\n    picDiv.className = 'menuSlides';\n    showPic.className = 'foodMenu';\n\n    picDiv.appendChild(showPic)\n    //add images of menu items on loop\n    let menuMains = ['/home/dom/restaurantPage/dist/menuItem.jpg', '/home/dom/restaurantPage/dist/menuItem1.jpeg', '/home/dom/restaurantPage/dist/menuitem2.jpg', '/home/dom/restaurantPage/dist/menuitem3.jpg', '/home/dom/restaurantPage/dist/menuitem4.jpg', '/home/dom/restaurantPage/dist/menuitem5.jpg', '/home/dom/restaurantPage/dist/menuitem6.jpg', '/home/dom/restaurantPage/dist/menuitem7.jpg', '/home/dom/restaurantPage/dist/menuitem8.jpg', '/home/dom/restaurantPage/dist/menuitem9.jpg', '/home/dom/restaurantPage/dist/menuitem10.jpg']\n\n    let menuDesserts = ['dist/pudding1.jpg', 'dist/pudding2.jpeg', 'dist/pudding3.jpg' ];\n\n    let picIndx = 0\n    function loopPics(arr){\n        //menu pic loops\n        for(let i=0; i< arr.length; i++){\n            console.log(arr[i])\n            showPic.src = arr[picIndx];\n            picIndx++\n            console.log()\n            if(picIndx === arr.length-1){\n                picIndx = 0\n            }\n        }\n    }\n    setInterval(() => {\n        loopPics(menuMains)\n    }, 2000);\n   \n    //side menu section\n    const lMenCont = document.createElement('p');\n    lMenCont.className = 'foodLeft';\n    const rMenCont = document.createElement('p');\n    rMenCont.className = 'foodRight';\n    //add pics of menu\n    const lePic = document.createElement('img');\n    lePic.className = 'menuPicLeft';\n    lePic.src = '/home/dom/restaurantPage/dist/kebabs.jpg' \n    const rightPic = document.createElement('img');\n    rightPic.className = 'menuPicRight';\n    rightPic.src = '/home/dom/restaurantPage/dist/menuBlackboard.png';\n\n    lMenCont.appendChild(lePic);\n    rMenCont.appendChild(rightPic);\n\n    mainDiv.appendChild(rMenCont)\n    mainDiv.appendChild(lMenCont)\n    headerMenu.appendChild(picDiv);\n    mainDiv.appendChild(headerMenu);\n    return mainDiv;\n   \n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./dist/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_dom_restaurantPage_dist_homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/homePage.js */ \"./dist/homePage.js\");\n/* harmony import */ var _home_dom_restaurantPage_dist_buildTabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dist/buildTabs.js */ \"./dist/buildTabs.js\");\n/* harmony import */ var _home_dom_restaurantPage_dist_homePageCopy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dist/homePageCopy.js */ \"./dist/homePageCopy.js\");\n/* harmony import */ var _home_dom_restaurantPage_dist_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dist/menu.js */ \"./dist/menu.js\");\n/* harmony import */ var _home_dom_restaurantPage_dist_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dist/contact.js */ \"./dist/contact.js\");\n\n\n\n\n\n\nfunction component(){\n    console.log('op')\n  //get DOM element\n    let contentDiv = document.getElementById('content');\n  //append modules\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_homePage_js__WEBPACK_IMPORTED_MODULE_0__.startRestaurantPage)());\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_buildTabs_js__WEBPACK_IMPORTED_MODULE_1__.makeTabs)());\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_homePageCopy_js__WEBPACK_IMPORTED_MODULE_2__.homePageCopyFunc)());\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)());\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact)());\n\n  //get elements appended at page load\n    const homePageDiv = document.querySelector('.mainSec');\n    const menuPageDiv = document.querySelector('.mainMenu');\n    const contactPageDiv = document.querySelector('.mainContact');  \n  \n  //get nav-tabs and add eventListeners\n    const navTabs = document.querySelectorAll('.tab-buttons');\n    const loopTabs = navTabs.forEach(el => {\n      el.addEventListener('click', ()=>{\n      \n        if(el.id === 'home'){\n          menuPageDiv.style.display = 'none';\n          contactPageDiv.style.display = 'none';\n          homePageDiv.style.display = 'block'\n        }else if(el.id === 'menu'){\n          contactPageDiv.style.display = 'none';\n          homePageDiv.style.display = 'none';\n          menuPageDiv.style.display = 'grid';\n        }else{\n          homePageDiv.style.display = 'none';\n          menuPageDiv.style.display = 'none';\n          contactPageDiv.style.display = 'grid';\n        }\n      })\n    })\n\n    return contentDiv\n}\ndocument.body.appendChild(component())\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;