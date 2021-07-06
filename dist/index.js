/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/creatable/addClass.js":
/*!***********************************!*\
  !*** ./src/creatable/addClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createClassArray(classString) {
  return classString.trim().split(/^|\s+/);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(classes) {
  var _this$el$classList;

  var classNames = createClassArray(classes);

  (_this$el$classList = this.el.classList).add.apply(_this$el$classList, _toConsumableArray(classNames));

  return this;
}

/***/ }),

/***/ "./src/creatable/append.js":
/*!*********************************!*\
  !*** ./src/creatable/append.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  this.el = this.el.appendChild(document.createElement(element));
  return this;
}

/***/ }),

/***/ "./src/creatable/attribute.js":
/*!************************************!*\
  !*** ./src/creatable/attribute.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(attribute, value) {
  this.el.setAttribute(attribute, value);
  return this;
}

/***/ }),

/***/ "./src/creatable/insertAfter.js":
/*!**************************************!*\
  !*** ./src/creatable/insertAfter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  this.el = this.el.insertAdjacentElement('afterend', document.createElement(element));
  return this;
}

/***/ }),

/***/ "./src/creatable/insertBefore.js":
/*!***************************************!*\
  !*** ./src/creatable/insertBefore.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  this.el = this.el.insertAdjacentElement('beforebegin', document.createElement(element));
  return this;
}

/***/ }),

/***/ "./src/creatable/prepend.js":
/*!**********************************!*\
  !*** ./src/creatable/prepend.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  this.el = this.el.insertBefore(document.createElement(element), this.el.firstChild);
  return this;
}

/***/ }),

/***/ "./src/creatable/removeClass.js":
/*!**************************************!*\
  !*** ./src/creatable/removeClass.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createClassArray(classString) {
  return classString.trim().split(/^|\s+/);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(classes) {
  var _this$el$classList;

  var classNames = createClassArray(classes);

  (_this$el$classList = this.el.classList).remove.apply(_this$el$classList, _toConsumableArray(classNames));

  return this;
}

/***/ }),

/***/ "./src/creatable/select.js":
/*!*********************************!*\
  !*** ./src/creatable/select.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  this.el = document.querySelector(selector);

  if (!this.el) {
    throw new Error("Element with selector '".concat(selector, "' could not be found."));
  }

  return this;
}

/***/ }),

/***/ "./src/creatable/selectChild.js":
/*!**************************************!*\
  !*** ./src/creatable/selectChild.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  this.el = this.el.querySelector(selector);

  if (!this.el) {
    throw new Error("Child element with selector '".concat(selector, "' could not be found."));
  }

  return this;
}

/***/ }),

/***/ "./src/creatable/selectNext.js":
/*!*************************************!*\
  !*** ./src/creatable/selectNext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  this.el = this.el.nextSibling;

  if (!this.el) {
    throw new Error("This element doesn't have a node immediately following it.");
  }

  return this;
}

/***/ }),

/***/ "./src/creatable/selectParent.js":
/*!***************************************!*\
  !*** ./src/creatable/selectParent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  this.el = this.el.parentNode;
  return this;
}

/***/ }),

/***/ "./src/creatable/selectPrev.js":
/*!*************************************!*\
  !*** ./src/creatable/selectPrev.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  this.el = this.el.previousSibling;

  if (!this.el) {
    throw new Error("This element doesn't have a node immediately preceding it.");
  }

  return this;
}

/***/ }),

/***/ "./src/creatable/text.js":
/*!*******************************!*\
  !*** ./src/creatable/text.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(text) {
  this.el.appendChild(document.createTextNode(text));
  return this;
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Creatable": () => (/* binding */ Creatable)
/* harmony export */ });
/* harmony import */ var _creatable_append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creatable/append.js */ "./src/creatable/append.js");
/* harmony import */ var _creatable_attribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creatable/attribute.js */ "./src/creatable/attribute.js");
/* harmony import */ var _creatable_addClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creatable/addClass.js */ "./src/creatable/addClass.js");
/* harmony import */ var _creatable_insertBefore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creatable/insertBefore.js */ "./src/creatable/insertBefore.js");
/* harmony import */ var _creatable_insertAfter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creatable/insertAfter.js */ "./src/creatable/insertAfter.js");
/* harmony import */ var _creatable_prepend_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creatable/prepend.js */ "./src/creatable/prepend.js");
/* harmony import */ var _creatable_removeClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./creatable/removeClass.js */ "./src/creatable/removeClass.js");
/* harmony import */ var _creatable_select_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./creatable/select.js */ "./src/creatable/select.js");
/* harmony import */ var _creatable_selectChild_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./creatable/selectChild.js */ "./src/creatable/selectChild.js");
/* harmony import */ var _creatable_selectNext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./creatable/selectNext.js */ "./src/creatable/selectNext.js");
/* harmony import */ var _creatable_selectParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./creatable/selectParent.js */ "./src/creatable/selectParent.js");
/* harmony import */ var _creatable_selectPrev_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./creatable/selectPrev.js */ "./src/creatable/selectPrev.js");
/* harmony import */ var _creatable_text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./creatable/text.js */ "./src/creatable/text.js");













function Creatable() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  this.el = selector;
}
Creatable.prototype = {
  constructor: Creatable,
  append: _creatable_append_js__WEBPACK_IMPORTED_MODULE_0__.default,
  attribute: _creatable_attribute_js__WEBPACK_IMPORTED_MODULE_1__.default,
  addClass: _creatable_addClass_js__WEBPACK_IMPORTED_MODULE_2__.default,
  insertAfter: _creatable_insertAfter_js__WEBPACK_IMPORTED_MODULE_4__.default,
  insertBefore: _creatable_insertBefore_js__WEBPACK_IMPORTED_MODULE_3__.default,
  prepend: _creatable_prepend_js__WEBPACK_IMPORTED_MODULE_5__.default,
  removeClass: _creatable_removeClass_js__WEBPACK_IMPORTED_MODULE_6__.default,
  select: _creatable_select_js__WEBPACK_IMPORTED_MODULE_7__.default,
  selectChild: _creatable_selectChild_js__WEBPACK_IMPORTED_MODULE_8__.default,
  selectNext: _creatable_selectNext_js__WEBPACK_IMPORTED_MODULE_9__.default,
  selectParent: _creatable_selectParent_js__WEBPACK_IMPORTED_MODULE_10__.default,
  selectPrev: _creatable_selectPrev_js__WEBPACK_IMPORTED_MODULE_11__.default,
  text: _creatable_text_js__WEBPACK_IMPORTED_MODULE_12__.default
};
})();

/******/ })()
;