/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/creatable-js/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/creatable-js/lib/index.js ***!
  \************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e=null){this.el=e?document.querySelector(e):null}e.r(t),e.d(t,{default:()=>n}),n.prototype={constructor:n,append:function(e){return this.el=this.el.appendChild(document.createElement(e)),this},attribute:function(e,t){return this.el.setAttribute(e,t),this},addClass:function(e){const t=e.trim().split(/^|\s+/);return this.el.classList.add(...t),this},insertAfter:function(e){return this.el=this.el.insertAdjacentElement("afterend",document.createElement(e)),this},insertBefore:function(e){return this.el=this.el.insertAdjacentElement("beforebegin",document.createElement(e)),this},insertParent:function(e){const t=document.createElement(e),n=this.el;return this.el.parentNode.replaceChild(t,n),t.appendChild(n),this.el=t,this},prepend:function(e){return this.el=this.el.insertBefore(document.createElement(e),this.el.firstChild),this},removeClass:function(e){const t=e.trim().split(/^|\s+/);return this.el.classList.remove(...t),this},select:function(e){if(this.el=document.querySelector(e),!this.el)throw new Error(`Element with selector '${e}' could not be found.`);return this},selectChild:function(e){if(this.el=this.el.querySelector(e),!this.el)throw new Error(`Element with selector '${e}' could not be found.`);return this},selectNext:function(){return this.el=this.el.nextSibling,this},selectParent:function(){return this.el=this.el.parentNode,this},selectPrev:function(){return this.el=this.el.previousSibling,this},text:function(e){return this.el.innerText=e,this}},module.exports=t})();

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var creatable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creatable-js */ "./node_modules/creatable-js/lib/index.js");
/* harmony import */ var creatable_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creatable_js__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var el = new (creatable_js__WEBPACK_IMPORTED_MODULE_0___default())(); //// Counter ////

function count() {
  var count = -1;
  return function () {
    return ++count;
  };
}

var counter = count(); //// Function calls ////

var functionSeries = []; // Add colors

functionSeries.push(function () {
  var calls = "el\n  .select('.col-middle')\n  .addClass('bg-blue')\n  .insertAfter('div')\n  .addClass('col col-right bg-yellow')\n  .attribute('style', 'opacity: 0;')\n  .append('div')\n  .attribute('style', 'padding: 0 20px; width: calc(100% - 40px); max-width: 450px; text-align: left;')\n  .append('h2')\n  .text('Code Log')\n  .insertAfter('p')\n  .addClass('code-log')\n  .select('button')\n  .addClass('pointer')\n  .text(\"Let's fix this button\")\n  ";
  el.select('.col-middle').addClass('bg-blue').insertAfter('div').addClass('col col-right bg-yellow').attribute('style', 'opacity: 0;').append('div').attribute('style', 'padding: 0 20px; width: calc(100% - 40px); max-width: 450px; text-align: left;').append('h2').text('Code Log').insertAfter('p').addClass('code-log').select('button').addClass('pointer').text("Let's fix this button");
  el.select('.code-log').insertBefore('p').append('strong').text('const el = new Creatable()').selectParent().selectNext().text(calls);
}); // Style button

functionSeries.push(function () {
  var calls = "el\n  .select('button')\n  .attribute(\n    'style',\n    'width: fit-content; padding: 10px 20px; margin: 0 20px; border: none;border-radius: 3px; background: var(--magenta); color: #fff; font-weight: 700;'\n  )\n  .text('Now, show our code')\n  ";
  el.select('button').attribute('style', 'width: fit-content; padding: 10px 20px; margin: 0 20px; border: none;border-radius: 3px; background: var(--magenta); color: #fff; font-weight: 700;').text('Now, show our code');
  el.select('.code-log').text(calls);
}); // Show log

functionSeries.push(function () {
  var calls = "el\n  .select('.code-log')\n  .selectParent()\n  .selectParent()\n  .attribute('style', 'opacity: 1; transition: opacity .35s ease-in-out; line-height: 1.4rem; font-size: 1rem;')\n  .select('button')\n  .text('Ok, go on - create some elements')\n  ";
  el.select('.code-log').selectParent().selectParent().attribute('style', 'opacity: 1; transition: opacity .35s ease-in-out; line-height: 1.4rem; font-size: 1rem;').select('button').text('Ok, go on - create some elements');
  el.select('.code-log').text(calls);
}); // Create input

functionSeries.push(function () {
  var calls = "el\n  .select('main')\n  .prepend('div')\n  .addClass('col col-left bg-purple')\n  .append('div')\n  .attribute('style', 'padding: 0 20px; max-width: 450px;')\n  .append('input')\n  .attribute('placeholder', 'This is an ugly input')\n  .attribute('id', 'custom-input')\n  .attribute('multiple')\n  .select('button')\n  .text(\"Make it of type 'file'\")\n ";
  el.select('main').prepend('div').addClass('col col-left bg-purple').append('div').attribute('style', 'padding: 0 20px; max-width: 450px;').append('input').attribute('placeholder', 'This is an ugly input').attribute('id', 'custom-input').attribute('multiple').select('button').text("Make it of type 'file'");
  el.select('.code-log').text(calls);
}); // Add attribute to input

functionSeries.push(function () {
  var calls = "el\n  .select('input')\n  .attribute('type', 'file')\n  .select('button')\n  .text('Add a label and a span')\n";
  el.select('input').attribute('type', 'file').select('button').text('Add a label and a span');
  el.select('.code-log').text(calls);
}); // Prettify input: step 1

functionSeries.push(function () {
  var calls = "el\n  .select('input')\n  .insertParent('label')\n  .addClass('upload-holder')\n  .append('span')\n  .attribute('style', 'color: #fff;')\n  .select('input')\n  .addClass('file-input')\n  .select('button')\n  .text('A few more things ...')\n  .select('.col-left div')\n  .append('div')\n  .addClass('note')\n  .attribute('style', 'opacity: 0;')\n";
  el.select('input').insertParent('label').addClass('upload-holder').append('span').attribute('style', 'color: #fff;').select('input').addClass('file-input').select('button').text('A few more things ...').select('.col-left div').append('div').addClass('note').attribute('style', 'opacity: 0;');
  el.select('.code-log').text(calls);
}); // Prettify input: step 2

functionSeries.push(function () {
  var calls = "el\n  .select('.upload-holder span')\n  .text('Filezz go here ...')\n  .selectParent()\n  ...\n  .select('.note')\n  .attribute('style', 'opacity: 1;  transition: opacity .35s 1s ease-in-out;')\n  .append('p')\n  .text('* You can find my function for appending names of uploaded files on')\n  .attribute('style', 'color: #fff; line-height: 1.1rem; font-size: 0.8rem;')\n  .append('a')\n  .attribute('href', 'https://github.com/3tw/reusable-javascript/blob/master/helpers.js')\n  .attribute('target', '_blank')\n  .attribute('rel', 'noopener')\n  .attribute('style', 'padding-left: 5px; color: #fff;')\n  .text('GitHub')\n";
  el.select('.upload-holder span').text('Filezz go here ...').selectParent().insertAfter('h3').attribute('style', 'color: #fff; margin: 20px 0 5px 0;').text('a place for your files:').insertAfter('div').attribute('style', 'padding: 10px; background: #fff; line-height: 1.2rem; font-size: 0.8rem;').addClass('file-holder').select('button').removeClass('pointer').text('Try out your new input!').selectParent().attribute('style', 'background-color: var(--magenta); transition: background-color .35s ease-in-out').select('.note').attribute('style', 'opacity: 1;  transition: opacity .35s 1s ease-in-out;').append('p').text('* You can find my function for appending names of uploaded files on').attribute('style', 'color: #fff; line-height: 1.1rem; font-size: 0.8rem;').append('a').attribute('href', 'https://github.com/3tw/reusable-javascript/blob/master/helpers.js').attribute('target', '_blank').attribute('rel', 'noopener').attribute('style', 'padding-left: 5px; color: #fff;').text('GitHub');
  el.select('.code-log').text(calls);
  appendUploadName('custom-input', '.file-holder');
}); //// Listeners ////

document.querySelector('button').addEventListener('click', function () {
  // counter()
  var currentCount = counter();

  if (currentCount < functionSeries.length) {
    functionSeries[currentCount]();
  }
}); //// Helpers ////

/**
 * Append uploaded file name(s)
 * @param {String} inputId Id of the input with type='file'
 * @param {String} nameHolder Selector for element where span elements with file names are appended
 * @returns {void} 
 */

function appendUploadName(inputId, nameHolder) {
  document.getElementById(inputId).addEventListener('change', function () {
    var loadedFiles = _toConsumableArray(document.getElementById(inputId).files);

    if (loadedFiles) {
      document.querySelector(nameHolder).classList.add('active');
      loadedFiles.forEach(function (file) {
        var fileNameEl = document.createElement('span');
        var fileNameText = document.createTextNode(file.name);
        fileNameEl.appendChild(fileNameText);
        document.querySelector(nameHolder).appendChild(fileNameEl);
      });
    }
  });
}
})();

/******/ })()
;