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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/users.js\");\n/* harmony import */ var _tabsListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabsListener */ \"./src/tabsListener.js\");\n\n\n\nconst main = () => {\n  (0,_users__WEBPACK_IMPORTED_MODULE_0__.getUsers)();\n  (0,_tabsListener__WEBPACK_IMPORTED_MODULE_1__.tabsListener)();\n};\n\nmain();\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/app.js?");

/***/ }),

/***/ "./src/getAlbums.js":
/*!**************************!*\
  !*** ./src/getAlbums.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAlbums\": () => (/* binding */ getAlbums)\n/* harmony export */ });\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ \"./src/url.js\");\n\n\nconst getAlbums = (id) => {\n  fetch(`${_url__WEBPACK_IMPORTED_MODULE_0__.URL}/albums?userId=${id}`)\n    .then((response) => response.json())\n    .then((data) => {\n      renderAlbum(data);\n    });\n};\n\nconst renderAlbum = (albums) => {\n  document.querySelector(\"#albums_content\").innerHTML = \"\";\n  albums.forEach((album) => {\n    document.querySelector(\"#albums_content\").innerHTML += `\n            <h3>${album.title}</h3>`;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/getAlbums.js?");

/***/ }),

/***/ "./src/getInfo.js":
/*!************************!*\
  !*** ./src/getInfo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfo\": () => (/* binding */ getInfo)\n/* harmony export */ });\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ \"./src/url.js\");\n\n\nconst getInfo = async (id) => {\n  const response = await fetch(`${_url__WEBPACK_IMPORTED_MODULE_0__.URL}/users/${id}`);\n  const data = await response.json();\n  document.querySelector(\n    \"#info_content\"\n  ).innerHTML = `<h4>Name:</h4> ${data.name}; <br>\n          <h4>E-Mail:</h4> ${data.email}; <br>\n          <h4>Adress:</h4> City - ${data.address.city}, Street - ${data.address.street}, Suit -  ${data.address.suite}; <br>\n          <h4>Phone:</h4> ${data.phone};  <br>\n          <h4></h4>`;\n};\n\n\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/getInfo.js?");

/***/ }),

/***/ "./src/getPosts.js":
/*!*************************!*\
  !*** ./src/getPosts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ \"./src/url.js\");\n\n\nconst getPosts = (id) => {\n  fetch(`${_url__WEBPACK_IMPORTED_MODULE_0__.URL}/posts?userId=${id}`)\n    .then((response) => response.json())\n    .then((data) => {\n      renderPost(data);\n    });\n};\n\nconst renderPost = (posts) => {\n  document.querySelector(\"#posts_content\").innerHTML = \"\";\n  posts.forEach((post) => {\n    document.querySelector(\"#posts_content\").innerHTML += `\n          <h3>${post.title}</h3>\n          <p>${post.body}</p>`;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/getPosts.js?");

/***/ }),

/***/ "./src/getTodos.js":
/*!*************************!*\
  !*** ./src/getTodos.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodos\": () => (/* binding */ getTodos)\n/* harmony export */ });\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ \"./src/url.js\");\n\n\nconst getTodos = async (id) => {\n  const response = await fetch(`${_url__WEBPACK_IMPORTED_MODULE_0__.URL}/todos?userId=${id}`);\n  const data = await response.json();\n  renderToDos(data);\n};\n\nconst renderToDos = (todos) => {\n  document.querySelector(\"#todo_ul\").innerHTML = \"\";\n  todos.forEach((todo) => {\n    document.querySelector(\"#todo_ul\").innerHTML += `\n      <li>${todo.title}</li>`;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/getTodos.js?");

/***/ }),

/***/ "./src/tabsListener.js":
/*!*****************************!*\
  !*** ./src/tabsListener.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabsListener\": () => (/* binding */ tabsListener)\n/* harmony export */ });\nconst tabsListener = () => {\n  const tabs = document.querySelectorAll(\"#tabsWrapper div\");\n  for (let tab of tabs) {\n    tab.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n      const divs = document.querySelectorAll(\"#content div\");\n      const id = event.currentTarget.id;\n      for (let div of divs) {\n        if (id === div.id.split(\"_\")[0]) {\n          div.classList.remove(\"hidden\");\n          continue;\n        }\n        div.classList.add(\"hidden\");\n      }\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/tabsListener.js?");

/***/ }),

/***/ "./src/url.js":
/*!********************!*\
  !*** ./src/url.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"URL\": () => (/* binding */ URL)\n/* harmony export */ });\nconst URL = \"https://jsonplaceholder.typicode.com\";\n\n\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/url.js?");

/***/ }),

/***/ "./src/userListener.js":
/*!*****************************!*\
  !*** ./src/userListener.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usersListener\": () => (/* binding */ usersListener)\n/* harmony export */ });\n/* harmony import */ var _getInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInfo */ \"./src/getInfo.js\");\n/* harmony import */ var _getTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTodos */ \"./src/getTodos.js\");\n/* harmony import */ var _getPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getPosts */ \"./src/getPosts.js\");\n/* harmony import */ var _getAlbums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getAlbums */ \"./src/getAlbums.js\");\n\n\n\n\n\nconst usersListener = () => {\n  const list = document.querySelectorAll(\"#users div\");\n  for (let item of list) {\n    item.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n      const [, id] = event.currentTarget.id.split(\"_\"); // -> [user, id]\n      document.querySelector(\"#tabs\").classList.remove(\"hidden\");\n      (0,_getInfo__WEBPACK_IMPORTED_MODULE_0__.getInfo)(id);\n      (0,_getTodos__WEBPACK_IMPORTED_MODULE_1__.getTodos)(id);\n      (0,_getPosts__WEBPACK_IMPORTED_MODULE_2__.getPosts)(id);\n      (0,_getAlbums__WEBPACK_IMPORTED_MODULE_3__.getAlbums)(id);\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/userListener.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ \"./src/url.js\");\n/* harmony import */ var _userListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userListener */ \"./src/userListener.js\");\n\n\n\nconst getUsers = async () => {\n  const response = await fetch(`${_url__WEBPACK_IMPORTED_MODULE_0__.URL}/users`);\n  const data = await response.json();\n  renderUsers(data);\n  (0,_userListener__WEBPACK_IMPORTED_MODULE_1__.usersListener)();\n};\n\nconst renderUsers = (users) => {\n  const sect = document.querySelector(\"#users\");\n  users.forEach((user) => {\n    sect.innerHTML += `<div id=\"user_${user.id}\">\n        <h2>${user.username}</h2>\n        </div>`;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://32_05-05-21-mini-project-webpack/./src/users.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;