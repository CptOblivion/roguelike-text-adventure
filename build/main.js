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
/* harmony import */ var _borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borders */ "./src/borders.ts");
/* harmony import */ var _windows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windows */ "./src/windows.ts");
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
    function WindowRoot(el, border, margin, padding) {
        if (margin === void 0) { margin = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides(); }
        if (padding === void 0) { padding = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides(); }
        var _this = _super.call(this, 0, 0, border, margin, padding) || this;
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
}(_windows__WEBPACK_IMPORTED_MODULE_1__.Window));

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
    function Window(width, height, borders, margin, padding) {
        if (margin === void 0) { margin = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides(); }
        if (padding === void 0) { padding = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides(); }
        this.width = 0;
        this.height = 0;
        this.childrenDirection = 0;
        this.grid = [];
        this.changed = true;
        this.margin = margin;
        this.padding = padding;
        this.borders = borders;
        this.resize(width, height);
        this.children = [];
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
    Window.prototype.resize = function (width, height) {
        if (this.width == width && this.height == height) {
            return;
        }
        this.changed = true;
        this.width = width;
        this.height = height;
        this.grid = new Array(height).fill([]);
        for (var i in this.grid) {
            this.grid[i] = new Array(width).fill(' ');
        }
        this.fillFrame();
    };
    Window.prototype.fillFrame = function () {
        this.changed = true;
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
    Window.prototype.update = function (width, height) {
        var e_1, _a;
        // if content hasn't changed, and all children haven't changed, return old value
        this.resize(width, height);
        if (!this.changed) {
            return {
                grid: this.grid,
                changed: false,
            };
        }
        console.log('not implemented');
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
        this.changed = false;
    };
    Window.prototype.addChild = function (child) {
        this.children.push(child);
    };
    Window.prototype.blit = function (target) { };
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
    var windowManager = new _window_manager__WEBPACK_IMPORTED_MODULE_0__.WindowRoot(el, _borders__WEBPACK_IMPORTED_MODULE_1__.BORDER_DOUBLE, new _borders__WEBPACK_IMPORTED_MODULE_1__.Sides(0, 0, 0, 1));
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDckQsQ0FBQztnQkFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDeEUsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMvRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDbkQsQ0FBQztnQkFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDM0UsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0Qs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QSxtQkFBTyxDQUFDLDZIQUE0QyxDQUFDLENBQUM7QUFDdEQsbUJBQU8sQ0FBQyw2SEFBNEMsQ0FBQyxDQUFDO0FBQ1I7QUFDRztBQUVqRCxTQUFTLElBQUk7SUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFFakMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxFQUFrQjtJQUFsQiwwQkFBSyxRQUFRLENBQUMsSUFBSTtJQUNuQyxJQUFNLGFBQWEsR0FBRyxJQUFJLHVEQUFVLENBQUMsRUFBRSxFQUFFLG1EQUFhLEVBQUUsSUFBSSwyQ0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2JvcmRlcnMudHMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL3dpbmRvdy1tYW5hZ2VyLnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy93aW5kb3dzLnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdHlsZXMuY3NzXCI7IiwiZXhwb3J0IGNsYXNzIEJvcmRlcnMge1xyXG4gIGxlZnQ6IHN0cmluZztcclxuICByaWdodDogc3RyaW5nO1xyXG4gIHRvcDogc3RyaW5nO1xyXG4gIGJvdHRvbTogc3RyaW5nO1xyXG4gIHRvcExlZnQ6IHN0cmluZztcclxuICB0b3BSaWdodDogc3RyaW5nO1xyXG4gIGJvdHRvbUxlZnQ6IHN0cmluZztcclxuICBib3R0b21SaWdodDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGVmdDogc3RyaW5nID0gJycsXHJcbiAgICByaWdodDogc3RyaW5nID0gJycsXHJcbiAgICB0b3A6IHN0cmluZyA9ICcnLFxyXG4gICAgYm90dG9tOiBzdHJpbmcgPSAnJyxcclxuICAgIHRvcExlZnQ6IHN0cmluZyA9ICcnLFxyXG4gICAgdG9wUmlnaHQ6IHN0cmluZyA9ICcnLFxyXG4gICAgYm90dG9tTGVmdDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b21SaWdodDogc3RyaW5nID0gJydcclxuICApIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMudG9wID0gdG9wLnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMuYm90dG9tID0gYm90dG9tLnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMudG9wTGVmdCA9IHRvcExlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3BSaWdodCA9IHRvcFJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMuYm90dG9tTGVmdCA9IGJvdHRvbUxlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b21SaWdodCA9IGJvdHRvbVJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGEgaGFuZGZ1bCBvZiBoYW5keSBwcmVzZXRzXHJcbmV4cG9ydCBjb25zdCBCT1JERVJfU0lOR0xFID0gbmV3IEJvcmRlcnMoJ+KUgicsICfilIInLCAn4pSAJywgJ+KUgCcsICfilIwnLCAn4pSQJywgJ+KUlCcsICfilJgnKTtcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilZAnLCAn4pWQJywgJ+KVlCcsICfilZcnLCAn4pWaJywgJ+KVnScpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX0RPVUJMRV9TSU5HTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilIAnLCAn4pSAJywgJ+KVkycsICfilZYnLCAn4pWZJywgJ+KVnCcpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX1NJTkdMRV9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pSCJywgJ+KUgicsICfilZAnLCAn4pWQJywgJ+KVkicsICfilZUnLCAn4pWYJywgJ+KVmycpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVzIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBib3R0b206IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyID0gMCwgcmlnaHQ6IG51bWJlciA9IDAsIHRvcDogbnVtYmVyID0gMCwgYm90dG9tOiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQm9yZGVycywgU2lkZXMgfSBmcm9tICcuL2JvcmRlcnMnO1xyXG5pbXBvcnQgeyBXaW5kb3cgfSBmcm9tICcuL3dpbmRvd3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd1Jvb3QgZXh0ZW5kcyBXaW5kb3cge1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbDogSFRNTEVsZW1lbnQsXHJcbiAgICBib3JkZXI/OiBCb3JkZXJzLFxyXG4gICAgbWFyZ2luOiBTaWRlcyA9IG5ldyBTaWRlcygpLFxyXG4gICAgcGFkZGluZzogU2lkZXMgPSBuZXcgU2lkZXMoKVxyXG4gICkge1xyXG4gICAgc3VwZXIoMCwgMCwgYm9yZGVyLCBtYXJnaW4sIHBhZGRpbmcpO1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uV2luZG93UmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5fb25XaW5kb3dSZXNpemUoKTtcclxuICB9XHJcblxyXG4gIF9vbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgIHRoaXMuX3VwZGF0ZUNhbnZhc1NpemUoKTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUNhbnZhc1NpemUoKSB7XHJcbiAgICAvLyBJIGhhdGUgdGhpc1xyXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnWCc7XHJcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAvLyBUT0RPOiBvcHRpbWl6ZSAoZG91YmxlIGNoYXJhY3RlciBjb3VudCB1bnRpbCBuZXcgaGVpZ2h0IGZvdW5kLCB0aGVuIGJpbmFyeSBzZWFyY2ggYmFjaz8pXHJcbiAgICBmb3IgKDsgdGhpcy5lbC5vZmZzZXRIZWlnaHQgPT09IGJhc2VIZWlnaHQ7IHRoaXMuZWwuaW5uZXJIVE1MICs9ICdYJykge31cclxuICAgIGNvbnN0IGhlaWdodFR3b0NoYXJzID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWwuaW5uZXJIVE1MLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAvIChoZWlnaHRUd29DaGFycyAtIGJhc2VIZWlnaHQpKTtcclxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMudXBkYXRlKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5ncmlkLm1hcCgocm93KSA9PiByb3cubWFwKGZpeFNwYWNlcykuam9pbignJykpLmpvaW4oJ1xcbicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZml4U3BhY2VzKGNoYXIpOiBzdHJpbmcge1xyXG4gIGlmIChjaGFyID09PSAnICcpIHJldHVybiAnJm5ic3AnO1xyXG4gIHJldHVybiBjaGFyO1xyXG59XHJcbiIsImltcG9ydCB7IEJvcmRlcnMsIFNpZGVzIH0gZnJvbSAnLi9ib3JkZXJzJztcclxuXHJcbmVudW0gQ2hpbGRyZW5EaXJlY3Rpb25zIHtcclxuICBob3Jpem9udGFsID0gMCxcclxuICB2ZXJ0aWNhbCA9IDEsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3cge1xyXG4gIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIGhlaWdodDogbnVtYmVyID0gMDtcclxuICBtYXJnaW46IFNpZGVzO1xyXG4gIHBhZGRpbmc6IFNpZGVzO1xyXG4gIGJvcmRlcnM6IEJvcmRlcnM7XHJcblxyXG4gIHNpemVNaW46IG51bWJlcjtcclxuICBzaXplTWF4OiBudW1iZXI7XHJcbiAgc2l6ZVdlaWdodDogbnVtYmVyO1xyXG5cclxuICBjaGlsZHJlbjogV2luZG93W107XHJcbiAgY2hpbGRyZW5EaXJlY3Rpb246IENoaWxkcmVuRGlyZWN0aW9ucyA9IDA7XHJcbiAgZ3JpZDogc3RyaW5nW11bXSA9IFtdO1xyXG4gIF9sYXN0V2lkdGg6IG51bWJlcjtcclxuICBfbGFzdEhlaWdodDogbnVtYmVyO1xyXG4gIGNoYW5nZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgIGJvcmRlcnM/OiBCb3JkZXJzLFxyXG4gICAgbWFyZ2luOiBTaWRlcyA9IG5ldyBTaWRlcygpLFxyXG4gICAgcGFkZGluZzogU2lkZXMgPSBuZXcgU2lkZXMoKVxyXG4gICkge1xyXG4gICAgdGhpcy5tYXJnaW4gPSBtYXJnaW47XHJcbiAgICB0aGlzLnBhZGRpbmcgPSBwYWRkaW5nO1xyXG4gICAgdGhpcy5ib3JkZXJzID0gYm9yZGVycztcclxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGluZGV4TGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFkZGluZy5sZWZ0ICsgKHRoaXMuYm9yZGVycy5sZWZ0ID8gMSA6IDApO1xyXG4gIH1cclxuICBnZXQgaW5kZXhSaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggLSB0aGlzLnBhZGRpbmcucmlnaHQgLSAodGhpcy5ib3JkZXJzLnJpZ2h0ID8gMSA6IDApIC0gMTtcclxuICB9XHJcbiAgZ2V0IGluZGV4VG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nLnRvcCArICh0aGlzLmJvcmRlcnMudG9wID8gMSA6IDApO1xyXG4gIH1cclxuICBnZXQgaW5kZXhCb3R0b20oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmhlaWdodCAtIHRoaXMucGFkZGluZy5ib3R0b20gLSAodGhpcy5ib3JkZXJzLmJvdHRvbSA/IDEgOiAwKSAtIDE7XHJcbiAgfVxyXG5cclxuICByZXNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLndpZHRoID09IHdpZHRoICYmIHRoaXMuaGVpZ2h0ID09IGhlaWdodCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoaGVpZ2h0KS5maWxsKFtdKTtcclxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmdyaWQpIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHdpZHRoKS5maWxsKCcgJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbGxGcmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgZmlsbEZyYW1lKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgIGlmICghdGhpcy5ib3JkZXJzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMubGVmdCB8fCB0aGlzLmJvcmRlcnMucmlnaHQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWFyZ2luLnRvcCArIDE7IGkgPCB0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMubGVmdCkge1xyXG4gICAgICAgICAgdGhpcy5ncmlkW2ldW3RoaXMubWFyZ2luLmxlZnRdID0gdGhpcy5ib3JkZXJzLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMucmlnaHQpIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFtpXVt0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHQgLSAxXSA9IHRoaXMuYm9yZGVycy5yaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMudG9wIHx8IHRoaXMuYm9yZGVycy5ib3R0b20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWFyZ2luLmxlZnQgKyAxOyBpIDwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9yZGVycy50b3ApIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW2ldID0gdGhpcy5ib3JkZXJzLnRvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm9yZGVycy5ib3R0b20pIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDFdW2ldID0gdGhpcy5ib3JkZXJzLmJvdHRvbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMudG9wTGVmdCkgdGhpcy5ncmlkW3RoaXMubWFyZ2luLnRvcF1bdGhpcy5tYXJnaW4ubGVmdF0gPSB0aGlzLmJvcmRlcnMudG9wTGVmdDtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMudG9wUmlnaHQpXHJcbiAgICAgIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW3RoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodCAtIDFdID0gdGhpcy5ib3JkZXJzLnRvcFJpZ2h0O1xyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5ib3R0b21MZWZ0KVxyXG4gICAgICB0aGlzLmdyaWRbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSAxXVt0aGlzLm1hcmdpbi5sZWZ0XSA9IHRoaXMuYm9yZGVycy5ib3R0b21MZWZ0O1xyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5ib3R0b21SaWdodClcclxuICAgICAgdGhpcy5ncmlkW3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gMV1bdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gMV0gPVxyXG4gICAgICAgIHRoaXMuYm9yZGVycy5ib3R0b21SaWdodDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgLy8gaWYgY29udGVudCBoYXNuJ3QgY2hhbmdlZCwgYW5kIGFsbCBjaGlsZHJlbiBoYXZlbid0IGNoYW5nZWQsIHJldHVybiBvbGQgdmFsdWVcclxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgaWYgKCF0aGlzLmNoYW5nZWQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBncmlkOiB0aGlzLmdyaWQsXHJcbiAgICAgICAgY2hhbmdlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnbm90IGltcGxlbWVudGVkJyk7XHJcblxyXG4gICAgLy8gbmVnb3RpYXRlIHNpemUgZm9yIGNoaWxkcmVuXHJcbiAgICAvLyBwYXNzIGZpbmFsIHZhbHVlcyB0byBjaGlsZCBpbiB1cGRhdGVcclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICBjaGlsZC51cGRhdGUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFkZENoaWxkKGNoaWxkKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgYmxpdCh0YXJnZXQpIHt9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsInJlcXVpcmUoJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vaW5kZXguaHRtbCcpO1xyXG5yZXF1aXJlKCdmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XSEuL3N0eWxlcy5jc3MnKTtcclxuaW1wb3J0IHsgV2luZG93Um9vdCB9IGZyb20gJy4vd2luZG93LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBCT1JERVJfRE9VQkxFLCBTaWRlcyB9IGZyb20gJy4vYm9yZGVycyc7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcnKTtcclxuICBjb25zdCBkb2NNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICBkb2NNYWluLmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJztcclxuXHJcbiAgZHJhd0ZyYW1lKGRvY01haW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3RnJhbWUoZWwgPSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgY29uc3Qgd2luZG93TWFuYWdlciA9IG5ldyBXaW5kb3dSb290KGVsLCBCT1JERVJfRE9VQkxFLCBuZXcgU2lkZXMoMCwgMCwgMCwgMSkpO1xyXG59XHJcblxyXG5tYWluKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==