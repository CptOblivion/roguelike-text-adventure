/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "index.html");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/styles.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/styles.css ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "styles.css");

/***/ }),

/***/ "./src/borders.ts":
/*!************************!*\
  !*** ./src/borders.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BORDER_DOUBLE: () => (/* binding */ BORDER_DOUBLE),
/* harmony export */   BORDER_DOUBLE_SINGLE: () => (/* binding */ BORDER_DOUBLE_SINGLE),
/* harmony export */   BORDER_SINGLE: () => (/* binding */ BORDER_SINGLE),
/* harmony export */   BORDER_SINGLE_DOUBLE: () => (/* binding */ BORDER_SINGLE_DOUBLE),
/* harmony export */   Borders: () => (/* binding */ Borders),
/* harmony export */   Sides: () => (/* binding */ Sides)
/* harmony export */ });
var Borders = /** @class */ (function () {
    function Borders(left, right, top, bottom, topLeft, topRight, bottomLeft, bottomRight) {
        if (left === void 0) { left = ''; }
        if (right === void 0) { right = ''; }
        if (top === void 0) { top = ''; }
        if (bottom === void 0) { bottom = ''; }
        if (topLeft === void 0) { topLeft = ''; }
        if (topRight === void 0) { topRight = ''; }
        if (bottomLeft === void 0) { bottomLeft = ''; }
        if (bottomRight === void 0) { bottomRight = ''; }
        this.left = left.substring(0, 1);
        this.right = right.substring(0, 1);
        this.top = top.substring(0, 1);
        this.bottom = bottom.substring(0, 1);
        this.topLeft = topLeft.substring(0, 1);
        this.topRight = topRight.substring(0, 1);
        this.bottomLeft = bottomLeft.substring(0, 1);
        this.bottomRight = bottomRight.substring(0, 1);
    }
    return Borders;
}());

// a handful of handy presets
var BORDER_SINGLE = new Borders('│', '│', '─', '─', '┌', '┐', '└', '┘');
var BORDER_DOUBLE = new Borders('║', '║', '═', '═', '╔', '╗', '╚', '╝');
var BORDER_DOUBLE_SINGLE = new Borders('║', '║', '─', '─', '╓', '╖', '╙', '╜');
var BORDER_SINGLE_DOUBLE = new Borders('│', '│', '═', '═', '╒', '╕', '╘', '╛');
var Sides = /** @class */ (function () {
    function Sides(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
    return Sides;
}());



/***/ }),

/***/ "./src/window-manager.ts":
/*!*******************************!*\
  !*** ./src/window-manager.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowRoot: () => (/* binding */ WindowRoot)
/* harmony export */ });
/* harmony import */ var _windows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windows */ "./src/windows.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var WindowRoot = /** @class */ (function (_super) {
    __extends(WindowRoot, _super);
    function WindowRoot(el) {
        var _this = _super.call(this) || this;
        _this.el = el;
        window.addEventListener('resize', _this._onWindowResize.bind(_this));
        _this._onWindowResize();
        return _this;
    }
    WindowRoot.prototype._onWindowResize = function () {
        this._updateCanvasSize();
        this.draw();
    };
    WindowRoot.prototype._updateCanvasSize = function () {
        // I hate this
        this.el.innerHTML = 'X';
        var baseHeight = this.el.offsetHeight;
        // TODO: optimize (double character count until new height found, then binary search back?)
        for (; this.el.offsetHeight === baseHeight; this.el.innerHTML += 'X') { }
        var heightTwoChars = this.el.offsetHeight;
        var width = this.el.innerHTML.length - 1;
        var height = Math.floor(window.innerHeight / (heightTwoChars - baseHeight));
        this.resize(width, height);
    };
    WindowRoot.prototype.draw = function () {
        this.update(this.width, this.height);
        this.el.innerHTML = this.grid.map(function (row) { return row.map(fixSpaces).join(''); }).join('\n');
    };
    return WindowRoot;
}(_windows__WEBPACK_IMPORTED_MODULE_0__.Window));

function fixSpaces(char) {
    if (char === ' ')
        return '&nbsp';
    return char;
}


/***/ }),

/***/ "./src/windows.ts":
/*!************************!*\
  !*** ./src/windows.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Window: () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var _borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borders */ "./src/borders.ts");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var ChildrenDirections;
(function (ChildrenDirections) {
    ChildrenDirections[ChildrenDirections["horizontal"] = 0] = "horizontal";
    ChildrenDirections[ChildrenDirections["vertical"] = 1] = "vertical";
})(ChildrenDirections || (ChildrenDirections = {}));
var Window = /** @class */ (function () {
    function Window() {
        this.width = 0;
        this.height = 0;
        this.margin = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides();
        this.padding = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides();
        this.sizeWeight = 1;
        this.children = [];
        this.childrenDirection = 0;
        this.grid = [];
    }
    Object.defineProperty(Window.prototype, "indexLeft", {
        get: function () {
            return this.padding.left + (this.borders.left ? 1 : 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Window.prototype, "indexRight", {
        get: function () {
            return this.width - this.padding.right - (this.borders.right ? 1 : 0) - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Window.prototype, "indexTop", {
        get: function () {
            return this.padding.top + (this.borders.top ? 1 : 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Window.prototype, "indexBottom", {
        get: function () {
            return this.height - this.padding.bottom - (this.borders.bottom ? 1 : 0) - 1;
        },
        enumerable: false,
        configurable: true
    });
    // TODO: settable mode to batch changes without redraw
    Window.prototype.setBorders = function (borders) {
        // TODO: check if border presence changed (no need to resize interior if no change)
        this.borders = borders;
        this.fillBorder();
        // TODO: recalculate children
    };
    /**
     * Populates the border around the frame
     */
    Window.prototype.fillBorder = function () {
        if (!this.borders) {
            return;
        }
        if (this.borders.left || this.borders.right) {
            for (var i = this.margin.top + 1; i < this.height - this.margin.bottom - 1; i++) {
                if (this.borders.left) {
                    this.grid[i][this.margin.left] = this.borders.left;
                }
                if (this.borders.right) {
                    this.grid[i][this.width - this.margin.right - 1] = this.borders.right;
                }
            }
        }
        if (this.borders.top || this.borders.bottom) {
            for (var i = this.margin.left + 1; i < this.width - this.margin.right - 1; i++) {
                if (this.borders.top) {
                    this.grid[this.margin.top][i] = this.borders.top;
                }
                if (this.borders.bottom) {
                    this.grid[this.height - this.margin.bottom - 1][i] = this.borders.bottom;
                }
            }
        }
        if (this.borders.topLeft)
            this.grid[this.margin.top][this.margin.left] = this.borders.topLeft;
        if (this.borders.topRight)
            this.grid[this.margin.top][this.width - this.margin.right - 1] = this.borders.topRight;
        if (this.borders.bottomLeft)
            this.grid[this.height - this.margin.bottom - 1][this.margin.left] = this.borders.bottomLeft;
        if (this.borders.bottomRight)
            this.grid[this.height - this.margin.bottom - 1][this.width - this.margin.right - 1] =
                this.borders.bottomRight;
    };
    /**
     * Resizes the frame
     *
     * @returns true if the size changed
     */
    Window.prototype.resize = function (width, height) {
        if (this.width == width && this.height == height) {
            return false;
        }
        this.width = width;
        this.height = height;
        this.grid = new Array(height).fill([]);
        for (var i in this.grid) {
            this.grid[i] = new Array(width).fill(' ');
        }
        this.fillBorder();
        return true;
    };
    Window.prototype.update = function (width, height) {
        var e_1, _a;
        if (!this.resize(width, height))
            return this.grid;
        console.log('not implemented yet');
        try {
            // negotiate size for children
            // pass final values to child in update
            for (var _b = __values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                child.update(width, height);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Window.prototype.addChild = function (child) {
        this.children.push(child);
    };
    return Window;
}());



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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window-manager */ "./src/window-manager.ts");
/* harmony import */ var _borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./borders */ "./src/borders.ts");
__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html");
__webpack_require__(/*! file-loader?name=[name].[ext]!./styles.css */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/styles.css");


function main() {
    console.log('initializing');
    var docMain = document.getElementById('main');
    docMain.innerHTML = 'loading...';
    drawFrame(docMain);
}
function drawFrame(el) {
    if (el === void 0) { el = document.body; }
    var windowManager = new _window_manager__WEBPACK_IMPORTED_MODULE_0__.WindowRoot(el);
    windowManager.setBorders(_borders__WEBPACK_IMPORTED_MODULE_1__.BORDER_DOUBLE);
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxDQUFDLG1EQUFhLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvYm9yZGVycy50cyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvd2luZG93LW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL3dpbmRvd3MudHMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0eWxlcy5jc3NcIjsiLCJleHBvcnQgY2xhc3MgQm9yZGVycyB7XHJcbiAgbGVmdDogc3RyaW5nO1xyXG4gIHJpZ2h0OiBzdHJpbmc7XHJcbiAgdG9wOiBzdHJpbmc7XHJcbiAgYm90dG9tOiBzdHJpbmc7XHJcbiAgdG9wTGVmdDogc3RyaW5nO1xyXG4gIHRvcFJpZ2h0OiBzdHJpbmc7XHJcbiAgYm90dG9tTGVmdDogc3RyaW5nO1xyXG4gIGJvdHRvbVJpZ2h0OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsZWZ0OiBzdHJpbmcgPSAnJyxcclxuICAgIHJpZ2h0OiBzdHJpbmcgPSAnJyxcclxuICAgIHRvcDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b206IHN0cmluZyA9ICcnLFxyXG4gICAgdG9wTGVmdDogc3RyaW5nID0gJycsXHJcbiAgICB0b3BSaWdodDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b21MZWZ0OiBzdHJpbmcgPSAnJyxcclxuICAgIGJvdHRvbVJpZ2h0OiBzdHJpbmcgPSAnJ1xyXG4gICkge1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3AgPSB0b3Auc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b20gPSBib3R0b20uc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3BMZWZ0ID0gdG9wTGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLnRvcFJpZ2h0ID0gdG9wUmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b21MZWZ0ID0gYm90dG9tTGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLmJvdHRvbVJpZ2h0ID0gYm90dG9tUmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYSBoYW5kZnVsIG9mIGhhbmR5IHByZXNldHNcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9TSU5HTEUgPSBuZXcgQm9yZGVycygn4pSCJywgJ+KUgicsICfilIAnLCAn4pSAJywgJ+KUjCcsICfilJAnLCAn4pSUJywgJ+KUmCcpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX0RPVUJMRSA9IG5ldyBCb3JkZXJzKCfilZEnLCAn4pWRJywgJ+KVkCcsICfilZAnLCAn4pWUJywgJ+KVlycsICfilZonLCAn4pWdJyk7XHJcbmV4cG9ydCBjb25zdCBCT1JERVJfRE9VQkxFX1NJTkdMRSA9IG5ldyBCb3JkZXJzKCfilZEnLCAn4pWRJywgJ+KUgCcsICfilIAnLCAn4pWTJywgJ+KVlicsICfilZknLCAn4pWcJyk7XHJcbmV4cG9ydCBjb25zdCBCT1JERVJfU0lOR0xFX0RPVUJMRSA9IG5ldyBCb3JkZXJzKCfilIInLCAn4pSCJywgJ+KVkCcsICfilZAnLCAn4pWSJywgJ+KVlScsICfilZgnLCAn4pWbJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZXMge1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICByaWdodDogbnVtYmVyO1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGJvdHRvbTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIgPSAwLCByaWdodDogbnVtYmVyID0gMCwgdG9wOiBudW1iZXIgPSAwLCBib3R0b206IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB0aGlzLnRvcCA9IHRvcDtcclxuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCb3JkZXJzLCBTaWRlcyB9IGZyb20gJy4vYm9yZGVycyc7XHJcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gJy4vd2luZG93cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93Um9vdCBleHRlbmRzIFdpbmRvdyB7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLl9vbldpbmRvd1Jlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgX29uV2luZG93UmVzaXplKCkge1xyXG4gICAgdGhpcy5fdXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlQ2FudmFzU2l6ZSgpIHtcclxuICAgIC8vIEkgaGF0ZSB0aGlzXHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICdYJztcclxuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcclxuICAgIC8vIFRPRE86IG9wdGltaXplIChkb3VibGUgY2hhcmFjdGVyIGNvdW50IHVudGlsIG5ldyBoZWlnaHQgZm91bmQsIHRoZW4gYmluYXJ5IHNlYXJjaCBiYWNrPylcclxuICAgIGZvciAoOyB0aGlzLmVsLm9mZnNldEhlaWdodCA9PT0gYmFzZUhlaWdodDsgdGhpcy5lbC5pbm5lckhUTUwgKz0gJ1gnKSB7fVxyXG4gICAgY29uc3QgaGVpZ2h0VHdvQ2hhcnMgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbC5pbm5lckhUTUwubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gKGhlaWdodFR3b0NoYXJzIC0gYmFzZUhlaWdodCkpO1xyXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy51cGRhdGUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmdyaWQubWFwKChyb3cpID0+IHJvdy5tYXAoZml4U3BhY2VzKS5qb2luKCcnKSkuam9pbignXFxuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhTcGFjZXMoY2hhcik6IHN0cmluZyB7XHJcbiAgaWYgKGNoYXIgPT09ICcgJykgcmV0dXJuICcmbmJzcCc7XHJcbiAgcmV0dXJuIGNoYXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQm9yZGVycywgU2lkZXMgfSBmcm9tICcuL2JvcmRlcnMnO1xyXG5cclxuZW51bSBDaGlsZHJlbkRpcmVjdGlvbnMge1xyXG4gIGhvcml6b250YWwgPSAwLFxyXG4gIHZlcnRpY2FsID0gMSxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvdyB7XHJcbiAgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIG1hcmdpbjogU2lkZXMgPSBuZXcgU2lkZXMoKTtcclxuICBwYWRkaW5nOiBTaWRlcyA9IG5ldyBTaWRlcygpO1xyXG4gIGJvcmRlcnM6IEJvcmRlcnM7XHJcblxyXG4gIHNpemVNaW46IG51bWJlcjtcclxuICBzaXplTWF4OiBudW1iZXI7XHJcbiAgc2l6ZVdlaWdodDogbnVtYmVyID0gMTtcclxuXHJcbiAgY2hpbGRyZW46IFdpbmRvd1tdID0gW107XHJcbiAgY2hpbGRyZW5EaXJlY3Rpb246IENoaWxkcmVuRGlyZWN0aW9ucyA9IDA7XHJcbiAgZ3JpZDogc3RyaW5nW11bXSA9IFtdO1xyXG4gIF9sYXN0V2lkdGg6IG51bWJlcjtcclxuICBfbGFzdEhlaWdodDogbnVtYmVyO1xyXG5cclxuICBnZXQgaW5kZXhMZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nLmxlZnQgKyAodGhpcy5ib3JkZXJzLmxlZnQgPyAxIDogMCk7XHJcbiAgfVxyXG4gIGdldCBpbmRleFJpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCAtIHRoaXMucGFkZGluZy5yaWdodCAtICh0aGlzLmJvcmRlcnMucmlnaHQgPyAxIDogMCkgLSAxO1xyXG4gIH1cclxuICBnZXQgaW5kZXhUb3AoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhZGRpbmcudG9wICsgKHRoaXMuYm9yZGVycy50b3AgPyAxIDogMCk7XHJcbiAgfVxyXG4gIGdldCBpbmRleEJvdHRvbSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC0gdGhpcy5wYWRkaW5nLmJvdHRvbSAtICh0aGlzLmJvcmRlcnMuYm90dG9tID8gMSA6IDApIC0gMTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHNldHRhYmxlIG1vZGUgdG8gYmF0Y2ggY2hhbmdlcyB3aXRob3V0IHJlZHJhd1xyXG5cclxuICBzZXRCb3JkZXJzKGJvcmRlcnM6IEJvcmRlcnMpIHtcclxuICAgIC8vIFRPRE86IGNoZWNrIGlmIGJvcmRlciBwcmVzZW5jZSBjaGFuZ2VkIChubyBuZWVkIHRvIHJlc2l6ZSBpbnRlcmlvciBpZiBubyBjaGFuZ2UpXHJcbiAgICB0aGlzLmJvcmRlcnMgPSBib3JkZXJzO1xyXG4gICAgdGhpcy5maWxsQm9yZGVyKCk7XHJcbiAgICAvLyBUT0RPOiByZWNhbGN1bGF0ZSBjaGlsZHJlblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUG9wdWxhdGVzIHRoZSBib3JkZXIgYXJvdW5kIHRoZSBmcmFtZVxyXG4gICAqL1xyXG4gIGZpbGxCb3JkZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9yZGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLmxlZnQgfHwgdGhpcy5ib3JkZXJzLnJpZ2h0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1hcmdpbi50b3AgKyAxOyBpIDwgdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ib3JkZXJzLmxlZnQpIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFtpXVt0aGlzLm1hcmdpbi5sZWZ0XSA9IHRoaXMuYm9yZGVycy5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3JkZXJzLnJpZ2h0KSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbaV1bdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gMV0gPSB0aGlzLmJvcmRlcnMucmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcCB8fCB0aGlzLmJvcmRlcnMuYm90dG9tKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1hcmdpbi5sZWZ0ICsgMTsgaSA8IHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodCAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMudG9wKSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbdGhpcy5tYXJnaW4udG9wXVtpXSA9IHRoaXMuYm9yZGVycy50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tKSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSAxXVtpXSA9IHRoaXMuYm9yZGVycy5ib3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcExlZnQpIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW3RoaXMubWFyZ2luLmxlZnRdID0gdGhpcy5ib3JkZXJzLnRvcExlZnQ7XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcFJpZ2h0KVxyXG4gICAgICB0aGlzLmdyaWRbdGhpcy5tYXJnaW4udG9wXVt0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHQgLSAxXSA9IHRoaXMuYm9yZGVycy50b3BSaWdodDtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tTGVmdClcclxuICAgICAgdGhpcy5ncmlkW3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gMV1bdGhpcy5tYXJnaW4ubGVmdF0gPSB0aGlzLmJvcmRlcnMuYm90dG9tTGVmdDtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tUmlnaHQpXHJcbiAgICAgIHRoaXMuZ3JpZFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDFdW3RoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodCAtIDFdID1cclxuICAgICAgICB0aGlzLmJvcmRlcnMuYm90dG9tUmlnaHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBmcmFtZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2l6ZSBjaGFuZ2VkXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy53aWR0aCA9PSB3aWR0aCAmJiB0aGlzLmhlaWdodCA9PSBoZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoaGVpZ2h0KS5maWxsKFtdKTtcclxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmdyaWQpIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHdpZHRoKS5maWxsKCcgJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbGxCb3JkZXIoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpKSByZXR1cm4gdGhpcy5ncmlkO1xyXG4gICAgY29uc29sZS5sb2coJ25vdCBpbXBsZW1lbnRlZCB5ZXQnKTtcclxuXHJcbiAgICAvLyBuZWdvdGlhdGUgc2l6ZSBmb3IgY2hpbGRyZW5cclxuICAgIC8vIHBhc3MgZmluYWwgdmFsdWVzIHRvIGNoaWxkIGluIHVwZGF0ZVxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGNoaWxkLnVwZGF0ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZENoaWxkKGNoaWxkKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwicmVxdWlyZSgnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9pbmRleC5odG1sJyk7XHJcbnJlcXVpcmUoJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vc3R5bGVzLmNzcycpO1xyXG5pbXBvcnQgeyBXaW5kb3dSb290IH0gZnJvbSAnLi93aW5kb3ctbWFuYWdlcic7XHJcbmltcG9ydCB7IEJPUkRFUl9ET1VCTEUsIFNpZGVzIH0gZnJvbSAnLi9ib3JkZXJzJztcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZycpO1xyXG4gIGNvbnN0IGRvY01haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gIGRvY01haW4uaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nO1xyXG5cclxuICBkcmF3RnJhbWUoZG9jTWFpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdGcmFtZShlbCA9IGRvY3VtZW50LmJvZHkpIHtcclxuICBjb25zdCB3aW5kb3dNYW5hZ2VyID0gbmV3IFdpbmRvd1Jvb3QoZWwpO1xyXG4gIHdpbmRvd01hbmFnZXIuc2V0Qm9yZGVycyhCT1JERVJfRE9VQkxFKTtcclxufVxyXG5cclxubWFpbigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=