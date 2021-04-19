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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n    //tab 3 here\n    const mainDiv = document.createElement('main');\n    mainDiv.className = 'mainContact';\n    mainDiv.id = 'active';\n    const h1d = document.createElement('h1');\n    h1d.className = 'contactHeader';\n    h1d.textContent = ' hello from contact page';\n    mainDiv.appendChild(h1d);\n    return mainDiv;\n}\n\n\n//# sourceURL=webpack://restaurantpage/./dist/contact.js?");

/***/ }),

/***/ "./dist/homePage.js":
/*!**************************!*\
  !*** ./dist/homePage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startRestaurantPage\": () => (/* binding */ startRestaurantPage)\n/* harmony export */ });\n\nconst startRestaurantPage = ()=>{\n    //build divs\n    const intro = document.createElement('h1');\n    intro.className = 'intro';\n    intro.innerHTML = '<span class=\"material-icons\">set_meal</span>' + 'Fishers' + '<span class=\"material-icons\">set_meal</span>';\n\n    const hr = document.createElement('hr');\n    hr.className = 'hr'\n    intro.appendChild(hr);\n\n    return intro;\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./dist/homePage.js?");

/***/ }),

/***/ "./dist/homePageCopy.js":
/*!******************************!*\
  !*** ./dist/homePageCopy.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageCopyFunc\": () => (/* binding */ homePageCopyFunc)\n/* harmony export */ });\n\nconst homePageCopyFunc = ()=>{\n    const mainDiv = document.createElement('main');\n    mainDiv.className = 'mainSec';\n    mainDiv.id = 'active';\n    mainDiv.style.display = 'grid'\n\n    const para = document.createElement('p');\n    const para2 = document.createElement('p');\n\n    para.className = 'copyP';\n    // para.textContent = copyText;\n    para2.className = 'copyP2';\n    // para2.textContent = copy2;\n\n    const pic = document.createElement('img');\n    pic.className = 'fishPic';\n    pic.src = '/home/dom/restaurantPage/dist/fishnchips.jpg';\n    pic.alt = 'pic of fish and chips';\n\n    //copy text\n    let copyText = 'Award winning Fish & Chips. With an extensive menu and the freshest fish you can get (caught on the very same day that it is used). FISHERS restaurant has been recognised the world over as the go to restaurant for Fish & Chips. Our Michelin starred chef prides himself on making the menu diverse and exciting, from our delicious line caught cod to our world famous Scampi in the basket, Fishies truly has a Fish for all, add that to our delicious chunky chips made from locally sourced potatoes, mouth watering mushy peas with tartare sauce and lashings of salt and vinegar, Fishers looks forward to welcoming you.';\n\n    let copy2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh sit amet commodo nulla. Varius sit amet mattis vulputate. Faucibus vitae aliquet nec ullamcorper sit amet risus. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Pellentesque id nibh tortor id aliquet lectus proin nibh. Eu mi bibendum neque egestas. Ultrices gravida dictum fusce ut. Est sit amet facilisis magna etiam tempor orci eu lobortis. Vestibulum morbi blandit cursus risus at ultrices. Faucibus interdum posuere lorem ipsum dolor. Dui accumsan sit amet nulla facilisi. Scelerisque varius morbi enim nunc faucibus a. Morbi tristique senectus et netus et malesuada fames ac turpis. In est ante in nibh mauris cursus mattis. Aliquet lectus proin nibh nisl condimentum id venenatis a. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. At augue eget arcu dictum varius duis. Pharetra convallis posuere morbi leo urna molestie. Tincidunt ornare massa eget egestas purus. Feugiat nibh sed pulvinar proin. Amet nulla facilisi morbi tempus iaculis. Fames ac turpis egestas maecenas pharetra convallis posuere. Tincidunt augue interdum velit euismod in pellentesque massa. Mi sit amet mauris commodo quis imperdiet massa. Pellentesque habitant morbi tristique senectus et. Platea dictumst vestibulum rhoncus est pellentesque. Sagittis nisl rhoncus mattis rhoncus urna. Est pellentesque elit ullamcorper dignissim cras tincidunt. Quis vel eros donec ac odio tempor orci dapibus ultrices. Nullam eget felis eget nunc lobortis mattis aliquam. Elit eget gravida cum sociis natoque penatibus.';\n\n    para.textContent = copyText;\n    para2.textContent = copy2;\n\n    mainDiv.appendChild(para);\n    mainDiv.appendChild(para2);\n    mainDiv.appendChild(pic);\n\n    return mainDiv;\n\n}\n\n\n//# sourceURL=webpack://restaurantpage/./dist/homePageCopy.js?");

/***/ }),

/***/ "./dist/menu.js":
/*!**********************!*\
  !*** ./dist/menu.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n\n\nfunction menu(){\n    //tab 2 here\n    console.log('yo from menu()');\n    const mainDiv = document.createElement('main');\n    mainDiv.className = 'mainMenu';\n    mainDiv.id = 'active';\n    const headerMenu = document.createElement('h1');\n    headerMenu.className = 'headerMenu'\n    headerMenu.textContent = 'Menu';\n    mainDiv.appendChild(headerMenu);\n    return mainDiv;\n    // const menuDiv = document.createElement('div');\n    // menuDiv.id = 'active';\n    // menuDiv.className = 'menClass';\n    // const h1d = document.createElement('h1');\n    // h1d.textContent = 'Menu page';\n    // menuDiv.appendChild(h1d);\n    // return menuDiv;\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./dist/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_dom_restaurantPage_dist_homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/homePage.js */ \"./dist/homePage.js\");\n/* harmony import */ var _home_dom_restaurantPage_dist_buildTabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dist/buildTabs.js */ \"./dist/buildTabs.js\");\n/* harmony import */ var _home_dom_restaurantPage_dist_homePageCopy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dist/homePageCopy.js */ \"./dist/homePageCopy.js\");\n/* harmony import */ var _home_dom_restaurantPage_dist_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dist/menu.js */ \"./dist/menu.js\");\n/* harmony import */ var _home_dom_restaurantPage_dist_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dist/contact.js */ \"./dist/contact.js\");\n\n\n\n\n\n\nfunction component(){\n    console.log('op')\n  //get DOM element\n    let contentDiv = document.getElementById('content');\n  //append modules\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_homePage_js__WEBPACK_IMPORTED_MODULE_0__.startRestaurantPage)());\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_buildTabs_js__WEBPACK_IMPORTED_MODULE_1__.makeTabs)());\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_homePageCopy_js__WEBPACK_IMPORTED_MODULE_2__.homePageCopyFunc)());\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)());\n    contentDiv.appendChild((0,_home_dom_restaurantPage_dist_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact)());\n\n  //get elements appended at page load\n    const homePageDiv = document.querySelector('.mainSec');\n    const menuPageDiv = document.querySelector('.mainMenu');\n    const contactPageDiv = document.querySelector('.mainContact');  \n  \n  //get nav-tabs and add eventListeners\n    const navTabs = document.querySelectorAll('.tab-buttons');\n    const loopTabs = navTabs.forEach(el => {\n      el.addEventListener('click', ()=>{\n      \n        if(el.id === 'home'){\n          menuPageDiv.style.display = 'none';\n          contactPageDiv.style.display = 'none';\n          homePageDiv.style.display = 'grid'\n        }else if(el.id === 'menu'){\n          contactPageDiv.style.display = 'none';\n          homePageDiv.style.display = 'none';\n          menuPageDiv.style.display = 'grid';\n        }else{\n          homePageDiv.style.display = 'none';\n          menuPageDiv.style.display = 'none';\n          contactPageDiv.style.display = 'grid';\n        }\n      })\n    })\n\n    return contentDiv\n}\ndocument.body.appendChild(component())\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

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