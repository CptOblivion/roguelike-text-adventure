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

/***/ "./src/interface/borders.ts":
/*!**********************************!*\
  !*** ./src/interface/borders.ts ***!
  \**********************************/
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

/***/ "./src/interface/window-manager.ts":
/*!*****************************************!*\
  !*** ./src/interface/window-manager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowRoot: () => (/* binding */ WindowRoot)
/* harmony export */ });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window */ "./src/interface/window.ts");
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
        var _this = _super.call(this, '--~~== root ==~~--') || this;
        _this.el = el;
        window.addEventListener('resize', _this._onWindowResize.bind(_this));
        _this._onWindowResize();
        return _this;
    }
    WindowRoot.prototype._onWindowResize = function () {
        this._updateCanvasSize();
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
        this.update();
    };
    WindowRoot.prototype.update = function () {
        this.grid = _window__WEBPACK_IMPORTED_MODULE_0__.WindowBase.prototype.update.call(this);
        this.el.innerHTML = this.grid.map(function (row) { return row.map(fixSpaces).join(''); }).join('\n');
        return this.grid;
    };
    return WindowRoot;
}(_window__WEBPACK_IMPORTED_MODULE_0__.WindowBase));

function fixSpaces(char) {
    if (char === ' ')
        return '&nbsp';
    return char;
}


/***/ }),

/***/ "./src/interface/window.ts":
/*!*********************************!*\
  !*** ./src/interface/window.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChildrenDirections: () => (/* binding */ ChildrenDirections),
/* harmony export */   TitlePosition: () => (/* binding */ TitlePosition),
/* harmony export */   WindowBase: () => (/* binding */ WindowBase)
/* harmony export */ });
/* harmony import */ var _borders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./borders */ "./src/interface/borders.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var ChildrenDirections;
(function (ChildrenDirections) {
    ChildrenDirections[ChildrenDirections["horizontal"] = 0] = "horizontal";
    ChildrenDirections[ChildrenDirections["vertical"] = 1] = "vertical";
})(ChildrenDirections || (ChildrenDirections = {}));
var SizeWithLock = /** @class */ (function () {
    function SizeWithLock() {
        this.size = 0;
        this.locked = false;
    }
    return SizeWithLock;
}());
var TitlePosition;
(function (TitlePosition) {
    TitlePosition[TitlePosition["left"] = 0] = "left";
    TitlePosition[TitlePosition["center"] = 1] = "center";
    TitlePosition[TitlePosition["right"] = 2] = "right";
})(TitlePosition || (TitlePosition = {}));
var WindowBase = /** @class */ (function () {
    function WindowBase(name) {
        this.titlePosition = 0;
        this.titleOffset = 3;
        this.width = 0;
        this.height = 0;
        this.margin = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides();
        this.padding = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides();
        this.sizeWeight = 1;
        this.children = [];
        this.childrenDirection = 0;
        this.grid = [];
        this.changed = true;
        this.name = name;
    }
    Object.defineProperty(WindowBase.prototype, "indexLeft", {
        get: function () {
            return this.padding.left + (this.borders.left ? 1 : 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "indexRight", {
        get: function () {
            return this.width - this.padding.right - (this.borders.right ? 1 : 0) - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "indexTop", {
        get: function () {
            return this.padding.top + (this.borders.top ? 1 : 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "indexBottom", {
        get: function () {
            return this.height - this.padding.bottom - (this.borders.bottom ? 1 : 0) - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "interiorHeight", {
        // TODO: check for off-by-one
        get: function () {
            return this.indexBottom - this.indexTop + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "interiorWidth", {
        get: function () {
            return this.indexRight - this.indexLeft + 1;
        },
        enumerable: false,
        configurable: true
    });
    WindowBase.prototype.addChild = function (child) {
        this.children.push(child);
    };
    /**
     * Resizes the frame
     *
     * @returns true if the size changed
     */
    WindowBase.prototype.resize = function (width, height) {
        // TODO: dole out remainder in size negotiation
        width = Math.floor(width);
        height = Math.floor(height);
        if (this.width == width && this.height == height)
            return;
        this.width = width;
        this.height = height;
        // console.log(`${this.name} resized to ${this.width} x ${this.height}`);
        this.grid = new Array(height).fill([]);
        for (var i in this.grid) {
            this.grid[i] = new Array(width).fill(' ');
        }
        // this.fillBorder();
        this.changed = true;
    };
    /**
     * Populates the border around the frame
     */
    WindowBase.prototype.fillBorder = function () {
        var titleOffset = this.titleOffset * -1;
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
                titleOffset++;
                if (this.title && titleOffset >= 0 && titleOffset < this.title.length) {
                    this.grid[this.margin.top][i] = this.title[titleOffset];
                }
                else if (this.borders.top) {
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
    WindowBase.prototype.update = function () {
        var _a;
        if (!this.changed)
            return this.grid;
        this.fillBorder();
        if (this.children.length === 0) {
            return this.grid;
        }
        var sizes = this.negotiateChildrenSize();
        var yPos = this.indexTop;
        for (var i in this.children) {
            this.children[i].resize(this.interiorWidth, sizes[i].size);
            var childGrid = this.children[i].update();
            _a = __read(this.blit(childGrid, [this.indexLeft, yPos]), 2), yPos = _a[1];
        }
        return this.grid;
    };
    /**
     *
     * @param grid source to blit into this.grid
     * @param position coordinate of top left corner of grid
     * @returns x,y coordinates of finished blit (clips to this.grid)
     */
    WindowBase.prototype.blit = function (grid, _a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        var originX = x; // x needs to get reset back every loop iteration
        if (grid.length === 0 || grid[0].length === 0) {
            return [x, y];
        }
        for (var childY = 0; childY < grid.length && y <= this.indexBottom; childY++, y++) {
            if (y < this.indexTop)
                continue;
            for (var childX = 0, x_1 = originX; childX < grid[0].length && x_1 <= this.indexRight; childX++, x_1++) {
                if (x_1 < this.indexLeft)
                    continue;
                this.grid[y][x_1] = grid[childY][childX];
            }
        }
        return [x, y];
    };
    WindowBase.prototype.negotiateChildrenSize = function () {
        // TODO: update to allow horiz
        // TODO: come up with some test cases to verify this actually behaves right (sizes come out correct with various weights and limits, edge cases like fractional results, overflows, and leftover space)
        // TODO: dole out remainder (low-priority, given we'll always have a textentry field of fixed size which seems to bypass the issue)
        var sizes = new Array(this.children.length);
        for (var i = 0; i < sizes.length; i++) {
            sizes[i] = {};
        }
        // TODO: better escape condition than just "cut after ten loops"
        // TODO: I feel like this can be done more gracefully without iteration
        for (var i = 0; i < 10; i++) {
            var weightSum = 0;
            var childrenRemaining = 0;
            var lockedSize = 0;
            // get available space
            for (var j in sizes) {
                if (sizes[j].locked) {
                    lockedSize += sizes[j].size;
                    continue;
                }
                childrenRemaining += 1;
                weightSum += this.children[j].sizeWeight;
            }
            if (childrenRemaining == 0) {
                // ran out of options
                return sizes;
            }
            var remainingSize = this.interiorHeight - lockedSize;
            if (remainingSize <= 0) {
                // ran out of space
                return sizes;
            }
            var renegotiate = false;
            for (var j in sizes) {
                if (sizes[j].locked)
                    continue;
                var child = this.children[j];
                sizes[j].size = (child.sizeWeight / weightSum) * remainingSize;
                if (child.sizeMax !== undefined && sizes[j].size >= child.sizeMax) {
                    sizes[j].size = child.sizeMax;
                    sizes[j].locked = true;
                    renegotiate = true;
                    continue;
                }
                if (child.sizeMin !== undefined && sizes[j].size <= child.sizeMin) {
                    sizes[j].size = child.sizeMin;
                    sizes[j].locked = true;
                    renegotiate = true;
                    continue;
                }
            }
            if (!renegotiate) {
                // got where we want to be
                return sizes;
            }
        }
        return sizes;
    };
    return WindowBase;
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
/* harmony import */ var _interface_window_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface/window-manager */ "./src/interface/window-manager.ts");
/* harmony import */ var _interface_borders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface/borders */ "./src/interface/borders.ts");
/* harmony import */ var _interface_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface/window */ "./src/interface/window.ts");
__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html");
__webpack_require__(/*! file-loader?name=[name].[ext]!./styles.css */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/styles.css");



function main() {
    console.log('initializing');
    var docMain = document.getElementById('main');
    docMain.innerHTML = 'loading...';
    buildWindow(docMain);
}
function buildWindow(el) {
    if (el === void 0) { el = document.body; }
    var windowManager = new _interface_window_manager__WEBPACK_IMPORTED_MODULE_0__.WindowRoot(el);
    windowManager.title = 'WINDOW MANAGER';
    windowManager.borders = _interface_borders__WEBPACK_IMPORTED_MODULE_1__.BORDER_DOUBLE;
    var mainScreen = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('main_screen');
    mainScreen.title = 'MAIN SCREEN';
    mainScreen.borders = _interface_borders__WEBPACK_IMPORTED_MODULE_1__.BORDER_SINGLE_DOUBLE;
    windowManager.addChild(mainScreen);
    var textField = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('text_field');
    textField.title = 'TEXT FIELD';
    textField.borders = _interface_borders__WEBPACK_IMPORTED_MODULE_1__.BORDER_DOUBLE_SINGLE;
    textField.sizeMin = 4;
    textField.sizeWeight = 0;
    windowManager.addChild(textField);
    windowManager.changed = true;
    windowManager.update();
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2UvYm9yZGVycy50cyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvaW50ZXJmYWNlL3dpbmRvdy1tYW5hZ2VyLnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2Uvd2luZG93LnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdHlsZXMuY3NzXCI7IiwiZXhwb3J0IGNsYXNzIEJvcmRlcnMge1xyXG4gIGxlZnQ6IHN0cmluZztcclxuICByaWdodDogc3RyaW5nO1xyXG4gIHRvcDogc3RyaW5nO1xyXG4gIGJvdHRvbTogc3RyaW5nO1xyXG4gIHRvcExlZnQ6IHN0cmluZztcclxuICB0b3BSaWdodDogc3RyaW5nO1xyXG4gIGJvdHRvbUxlZnQ6IHN0cmluZztcclxuICBib3R0b21SaWdodDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGVmdDogc3RyaW5nID0gJycsXHJcbiAgICByaWdodDogc3RyaW5nID0gJycsXHJcbiAgICB0b3A6IHN0cmluZyA9ICcnLFxyXG4gICAgYm90dG9tOiBzdHJpbmcgPSAnJyxcclxuICAgIHRvcExlZnQ6IHN0cmluZyA9ICcnLFxyXG4gICAgdG9wUmlnaHQ6IHN0cmluZyA9ICcnLFxyXG4gICAgYm90dG9tTGVmdDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b21SaWdodDogc3RyaW5nID0gJydcclxuICApIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMudG9wID0gdG9wLnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMuYm90dG9tID0gYm90dG9tLnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMudG9wTGVmdCA9IHRvcExlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3BSaWdodCA9IHRvcFJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMuYm90dG9tTGVmdCA9IGJvdHRvbUxlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b21SaWdodCA9IGJvdHRvbVJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGEgaGFuZGZ1bCBvZiBoYW5keSBwcmVzZXRzXHJcbmV4cG9ydCBjb25zdCBCT1JERVJfU0lOR0xFID0gbmV3IEJvcmRlcnMoJ+KUgicsICfilIInLCAn4pSAJywgJ+KUgCcsICfilIwnLCAn4pSQJywgJ+KUlCcsICfilJgnKTtcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilZAnLCAn4pWQJywgJ+KVlCcsICfilZcnLCAn4pWaJywgJ+KVnScpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX0RPVUJMRV9TSU5HTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilIAnLCAn4pSAJywgJ+KVkycsICfilZYnLCAn4pWZJywgJ+KVnCcpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX1NJTkdMRV9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pSCJywgJ+KUgicsICfilZAnLCAn4pWQJywgJ+KVkicsICfilZUnLCAn4pWYJywgJ+KVmycpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVzIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBib3R0b206IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyID0gMCwgcmlnaHQ6IG51bWJlciA9IDAsIHRvcDogbnVtYmVyID0gMCwgYm90dG9tOiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV2luZG93QmFzZSwgR3JpZCB9IGZyb20gJy4vd2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dSb290IGV4dGVuZHMgV2luZG93QmFzZSB7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCctLX5+PT0gcm9vdCA9PX5+LS0nKTtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuX29uV2luZG93UmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBfb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICB0aGlzLl91cGRhdGVDYW52YXNTaXplKCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlQ2FudmFzU2l6ZSgpIHtcclxuICAgIC8vIEkgaGF0ZSB0aGlzXHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICdYJztcclxuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcclxuICAgIC8vIFRPRE86IG9wdGltaXplIChkb3VibGUgY2hhcmFjdGVyIGNvdW50IHVudGlsIG5ldyBoZWlnaHQgZm91bmQsIHRoZW4gYmluYXJ5IHNlYXJjaCBiYWNrPylcclxuICAgIGZvciAoOyB0aGlzLmVsLm9mZnNldEhlaWdodCA9PT0gYmFzZUhlaWdodDsgdGhpcy5lbC5pbm5lckhUTUwgKz0gJ1gnKSB7fVxyXG4gICAgY29uc3QgaGVpZ2h0VHdvQ2hhcnMgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbC5pbm5lckhUTUwubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gKGhlaWdodFR3b0NoYXJzIC0gYmFzZUhlaWdodCkpO1xyXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCk6IEdyaWQge1xyXG4gICAgdGhpcy5ncmlkID0gV2luZG93QmFzZS5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuZ3JpZC5tYXAoKHJvdykgPT4gcm93Lm1hcChmaXhTcGFjZXMpLmpvaW4oJycpKS5qb2luKCdcXG4nKTtcclxuICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhTcGFjZXMoY2hhcik6IHN0cmluZyB7XHJcbiAgaWYgKGNoYXIgPT09ICcgJykgcmV0dXJuICcmbmJzcCc7XHJcbiAgcmV0dXJuIGNoYXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQm9yZGVycywgU2lkZXMgfSBmcm9tICcuL2JvcmRlcnMnO1xyXG5cclxuZXhwb3J0IGVudW0gQ2hpbGRyZW5EaXJlY3Rpb25zIHtcclxuICBob3Jpem9udGFsID0gMCxcclxuICB2ZXJ0aWNhbCA9IDEsXHJcbn1cclxuXHJcbi8vIFRPRE86IHR1cm4gaW50byBjbGFzcyB3aXRoIHdpZHRoIGFuZCBoZWlnaHQgbWV0aG9kcywgc2ltcGxlIGNvbnN0cnVjdG9yLCBjb29yZGluYXRlIGFjY2VzcyBmb3IgZ2V0dGluZyBhbmQgc2V0dGluZywgcHJvdGVjdGlvbnMgYWdhaW5zdCBvdXQgb2YgYm91bmRzIGFjY2Vzc1xyXG4vLyBUT0RPOiBtb3ZlIGJsaXQgaW50byBncmlkIGNsYXNzPyAobWF5YmUga2VlcCBpdCBpbiBXaW5kb3dCYXNlLCBzbyB3ZSBjYW4ga2VlcCB0aGUgcHJvdGVjdGVkIG1hcmdpbi9ib3JkZXIvcGFkZGluZyByZWdpb24pXHJcbi8vICAgIGFsdGVybmF0ZWx5LCBtb3ZlIHRvIGJsaXQsIGp1c3QgcmVtZW1iZXIgdG8gc2NhbGUgYW5kIG9mZnNldCBjb250ZW50cyBiZWZvcmUgYmxpdHRpbmdcclxuZXhwb3J0IHR5cGUgR3JpZCA9IHN0cmluZ1tdW107XHJcblxyXG5leHBvcnQgdHlwZSBQb3NpdGlvbiA9IFtudW1iZXIsIG51bWJlcl07XHJcblxyXG5jbGFzcyBTaXplV2l0aExvY2sge1xyXG4gIHNpemU6IG51bWJlciA9IDA7XHJcbiAgbG9ja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRpdGxlUG9zaXRpb24ge1xyXG4gIGxlZnQgPSAwLFxyXG4gIGNlbnRlciA9IDEsXHJcbiAgcmlnaHQgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93QmFzZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHRpdGxlUG9zaXRpb246IFRpdGxlUG9zaXRpb24gPSAwO1xyXG4gIHRpdGxlT2Zmc2V0OiBudW1iZXIgPSAzO1xyXG5cclxuICB3aWR0aDogbnVtYmVyID0gMDtcclxuICBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgbWFyZ2luOiBTaWRlcyA9IG5ldyBTaWRlcygpO1xyXG4gIHBhZGRpbmc6IFNpZGVzID0gbmV3IFNpZGVzKCk7XHJcbiAgYm9yZGVyczogQm9yZGVycztcclxuXHJcbiAgc2l6ZU1pbj86IG51bWJlcjtcclxuICBzaXplTWF4PzogbnVtYmVyO1xyXG4gIHNpemVXZWlnaHQ6IG51bWJlciA9IDE7XHJcblxyXG4gIGNoaWxkcmVuOiBXaW5kb3dCYXNlW10gPSBbXTtcclxuICBjaGlsZHJlbkRpcmVjdGlvbjogQ2hpbGRyZW5EaXJlY3Rpb25zID0gMDtcclxuICBncmlkOiBHcmlkID0gW107XHJcbiAgX2xhc3RXaWR0aDogbnVtYmVyO1xyXG4gIF9sYXN0SGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhbmdlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGdldCBpbmRleExlZnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhZGRpbmcubGVmdCArICh0aGlzLmJvcmRlcnMubGVmdCA/IDEgOiAwKTtcclxuICB9XHJcbiAgZ2V0IGluZGV4UmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoIC0gdGhpcy5wYWRkaW5nLnJpZ2h0IC0gKHRoaXMuYm9yZGVycy5yaWdodCA/IDEgOiAwKSAtIDE7XHJcbiAgfVxyXG4gIGdldCBpbmRleFRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFkZGluZy50b3AgKyAodGhpcy5ib3JkZXJzLnRvcCA/IDEgOiAwKTtcclxuICB9XHJcbiAgZ2V0IGluZGV4Qm90dG9tKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSB0aGlzLnBhZGRpbmcuYm90dG9tIC0gKHRoaXMuYm9yZGVycy5ib3R0b20gPyAxIDogMCkgLSAxO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogY2hlY2sgZm9yIG9mZi1ieS1vbmVcclxuICBnZXQgaW50ZXJpb3JIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4Qm90dG9tIC0gdGhpcy5pbmRleFRvcCArIDE7XHJcbiAgfVxyXG4gIGdldCBpbnRlcmlvcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleFJpZ2h0IC0gdGhpcy5pbmRleExlZnQgKyAxO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2hpbGQoY2hpbGQ6IFdpbmRvd0Jhc2UpIHtcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBmcmFtZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2l6ZSBjaGFuZ2VkXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAvLyBUT0RPOiBkb2xlIG91dCByZW1haW5kZXIgaW4gc2l6ZSBuZWdvdGlhdGlvblxyXG4gICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcclxuICAgIGhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcclxuICAgIGlmICh0aGlzLndpZHRoID09IHdpZHRoICYmIHRoaXMuaGVpZ2h0ID09IGhlaWdodCkgcmV0dXJuO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHJlc2l6ZWQgdG8gJHt0aGlzLndpZHRofSB4ICR7dGhpcy5oZWlnaHR9YCk7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoaGVpZ2h0KS5maWxsKFtdKTtcclxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmdyaWQpIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHdpZHRoKS5maWxsKCcgJyk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmZpbGxCb3JkZXIoKTtcclxuICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb3B1bGF0ZXMgdGhlIGJvcmRlciBhcm91bmQgdGhlIGZyYW1lXHJcbiAgICovXHJcbiAgZmlsbEJvcmRlcigpIHtcclxuICAgIGxldCB0aXRsZU9mZnNldCA9IHRoaXMudGl0bGVPZmZzZXQgKiAtMTtcclxuICAgIGlmICghdGhpcy5ib3JkZXJzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMubGVmdCB8fCB0aGlzLmJvcmRlcnMucmlnaHQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWFyZ2luLnRvcCArIDE7IGkgPCB0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMubGVmdCkge1xyXG4gICAgICAgICAgdGhpcy5ncmlkW2ldW3RoaXMubWFyZ2luLmxlZnRdID0gdGhpcy5ib3JkZXJzLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMucmlnaHQpIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFtpXVt0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHQgLSAxXSA9IHRoaXMuYm9yZGVycy5yaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMudG9wIHx8IHRoaXMuYm9yZGVycy5ib3R0b20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWFyZ2luLmxlZnQgKyAxOyBpIDwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGl0bGVPZmZzZXQrKztcclxuICAgICAgICBpZiAodGhpcy50aXRsZSAmJiB0aXRsZU9mZnNldCA+PSAwICYmIHRpdGxlT2Zmc2V0IDwgdGhpcy50aXRsZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW2ldID0gdGhpcy50aXRsZVt0aXRsZU9mZnNldF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvcmRlcnMudG9wKSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbdGhpcy5tYXJnaW4udG9wXVtpXSA9IHRoaXMuYm9yZGVycy50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tKSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSAxXVtpXSA9IHRoaXMuYm9yZGVycy5ib3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcExlZnQpIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW3RoaXMubWFyZ2luLmxlZnRdID0gdGhpcy5ib3JkZXJzLnRvcExlZnQ7XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcFJpZ2h0KVxyXG4gICAgICB0aGlzLmdyaWRbdGhpcy5tYXJnaW4udG9wXVt0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHQgLSAxXSA9IHRoaXMuYm9yZGVycy50b3BSaWdodDtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tTGVmdClcclxuICAgICAgdGhpcy5ncmlkW3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gMV1bdGhpcy5tYXJnaW4ubGVmdF0gPSB0aGlzLmJvcmRlcnMuYm90dG9tTGVmdDtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tUmlnaHQpXHJcbiAgICAgIHRoaXMuZ3JpZFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDFdW3RoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodCAtIDFdID1cclxuICAgICAgICB0aGlzLmJvcmRlcnMuYm90dG9tUmlnaHQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogR3JpZCB7XHJcbiAgICBpZiAoIXRoaXMuY2hhbmdlZCkgcmV0dXJuIHRoaXMuZ3JpZDtcclxuICAgIHRoaXMuZmlsbEJvcmRlcigpO1xyXG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLm5lZ290aWF0ZUNoaWxkcmVuU2l6ZSgpO1xyXG4gICAgbGV0IHlQb3MgPSB0aGlzLmluZGV4VG9wO1xyXG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZXNpemUodGhpcy5pbnRlcmlvcldpZHRoLCBzaXplc1tpXS5zaXplKTtcclxuICAgICAgY29uc3QgY2hpbGRHcmlkID0gdGhpcy5jaGlsZHJlbltpXS51cGRhdGUoKTtcclxuICAgICAgWywgeVBvc10gPSB0aGlzLmJsaXQoY2hpbGRHcmlkLCBbdGhpcy5pbmRleExlZnQsIHlQb3NdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGdyaWQgc291cmNlIHRvIGJsaXQgaW50byB0aGlzLmdyaWRcclxuICAgKiBAcGFyYW0gcG9zaXRpb24gY29vcmRpbmF0ZSBvZiB0b3AgbGVmdCBjb3JuZXIgb2YgZ3JpZFxyXG4gICAqIEByZXR1cm5zIHgseSBjb29yZGluYXRlcyBvZiBmaW5pc2hlZCBibGl0IChjbGlwcyB0byB0aGlzLmdyaWQpXHJcbiAgICovXHJcbiAgYmxpdChncmlkOiBHcmlkLCBbeCwgeV06IFBvc2l0aW9uKTogUG9zaXRpb24ge1xyXG4gICAgY29uc3Qgb3JpZ2luWCA9IHg7IC8vIHggbmVlZHMgdG8gZ2V0IHJlc2V0IGJhY2sgZXZlcnkgbG9vcCBpdGVyYXRpb25cclxuICAgIGlmIChncmlkLmxlbmd0aCA9PT0gMCB8fCBncmlkWzBdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY2hpbGRZID0gMDsgY2hpbGRZIDwgZ3JpZC5sZW5ndGggJiYgeSA8PSB0aGlzLmluZGV4Qm90dG9tOyBjaGlsZFkrKywgeSsrKSB7XHJcbiAgICAgIGlmICh5IDwgdGhpcy5pbmRleFRvcCkgY29udGludWU7XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGNoaWxkWCA9IDAsIHggPSBvcmlnaW5YO1xyXG4gICAgICAgIGNoaWxkWCA8IGdyaWRbMF0ubGVuZ3RoICYmIHggPD0gdGhpcy5pbmRleFJpZ2h0O1xyXG4gICAgICAgIGNoaWxkWCsrLCB4KytcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHggPCB0aGlzLmluZGV4TGVmdCkgY29udGludWU7XHJcbiAgICAgICAgdGhpcy5ncmlkW3ldW3hdID0gZ3JpZFtjaGlsZFldW2NoaWxkWF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgbmVnb3RpYXRlQ2hpbGRyZW5TaXplKCk6IFNpemVXaXRoTG9ja1tdIHtcclxuICAgIC8vIFRPRE86IHVwZGF0ZSB0byBhbGxvdyBob3JpelxyXG4gICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIHNvbWUgdGVzdCBjYXNlcyB0byB2ZXJpZnkgdGhpcyBhY3R1YWxseSBiZWhhdmVzIHJpZ2h0IChzaXplcyBjb21lIG91dCBjb3JyZWN0IHdpdGggdmFyaW91cyB3ZWlnaHRzIGFuZCBsaW1pdHMsIGVkZ2UgY2FzZXMgbGlrZSBmcmFjdGlvbmFsIHJlc3VsdHMsIG92ZXJmbG93cywgYW5kIGxlZnRvdmVyIHNwYWNlKVxyXG4gICAgLy8gVE9ETzogZG9sZSBvdXQgcmVtYWluZGVyIChsb3ctcHJpb3JpdHksIGdpdmVuIHdlJ2xsIGFsd2F5cyBoYXZlIGEgdGV4dGVudHJ5IGZpZWxkIG9mIGZpeGVkIHNpemUgd2hpY2ggc2VlbXMgdG8gYnlwYXNzIHRoZSBpc3N1ZSlcclxuICAgIGNvbnN0IHNpemVzID0gbmV3IEFycmF5KHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2l6ZXNbaV0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBiZXR0ZXIgZXNjYXBlIGNvbmRpdGlvbiB0aGFuIGp1c3QgXCJjdXQgYWZ0ZXIgdGVuIGxvb3BzXCJcclxuICAgIC8vIFRPRE86IEkgZmVlbCBsaWtlIHRoaXMgY2FuIGJlIGRvbmUgbW9yZSBncmFjZWZ1bGx5IHdpdGhvdXQgaXRlcmF0aW9uXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgbGV0IHdlaWdodFN1bSA9IDA7XHJcbiAgICAgIGxldCBjaGlsZHJlblJlbWFpbmluZyA9IDA7XHJcbiAgICAgIGxldCBsb2NrZWRTaXplID0gMDtcclxuICAgICAgLy8gZ2V0IGF2YWlsYWJsZSBzcGFjZVxyXG4gICAgICBmb3IgKGNvbnN0IGogaW4gc2l6ZXMpIHtcclxuICAgICAgICBpZiAoc2l6ZXNbal0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBsb2NrZWRTaXplICs9IHNpemVzW2pdLnNpemU7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGRyZW5SZW1haW5pbmcgKz0gMTtcclxuICAgICAgICB3ZWlnaHRTdW0gKz0gdGhpcy5jaGlsZHJlbltqXS5zaXplV2VpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGlsZHJlblJlbWFpbmluZyA9PSAwKSB7XHJcbiAgICAgICAgLy8gcmFuIG91dCBvZiBvcHRpb25zXHJcbiAgICAgICAgcmV0dXJuIHNpemVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZW1haW5pbmdTaXplID0gdGhpcy5pbnRlcmlvckhlaWdodCAtIGxvY2tlZFNpemU7XHJcbiAgICAgIGlmIChyZW1haW5pbmdTaXplIDw9IDApIHtcclxuICAgICAgICAvLyByYW4gb3V0IG9mIHNwYWNlXHJcbiAgICAgICAgcmV0dXJuIHNpemVzO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZW5lZ290aWF0ZSA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGNvbnN0IGogaW4gc2l6ZXMpIHtcclxuICAgICAgICBpZiAoc2l6ZXNbal0ubG9ja2VkKSBjb250aW51ZTtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bal07XHJcbiAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IChjaGlsZC5zaXplV2VpZ2h0IC8gd2VpZ2h0U3VtKSAqIHJlbWFpbmluZ1NpemU7XHJcbiAgICAgICAgaWYgKGNoaWxkLnNpemVNYXggIT09IHVuZGVmaW5lZCAmJiBzaXplc1tqXS5zaXplID49IGNoaWxkLnNpemVNYXgpIHtcclxuICAgICAgICAgIHNpemVzW2pdLnNpemUgPSBjaGlsZC5zaXplTWF4O1xyXG4gICAgICAgICAgc2l6ZXNbal0ubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgIHJlbmVnb3RpYXRlID0gdHJ1ZTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQuc2l6ZU1pbiAhPT0gdW5kZWZpbmVkICYmIHNpemVzW2pdLnNpemUgPD0gY2hpbGQuc2l6ZU1pbikge1xyXG4gICAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IGNoaWxkLnNpemVNaW47XHJcbiAgICAgICAgICBzaXplc1tqXS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcmVuZWdvdGlhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmVuZWdvdGlhdGUpIHtcclxuICAgICAgICAvLyBnb3Qgd2hlcmUgd2Ugd2FudCB0byBiZVxyXG4gICAgICAgIHJldHVybiBzaXplcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpemVzO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwicmVxdWlyZSgnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9pbmRleC5odG1sJyk7XHJcbnJlcXVpcmUoJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vc3R5bGVzLmNzcycpO1xyXG5pbXBvcnQgeyBXaW5kb3dSb290IH0gZnJvbSAnLi9pbnRlcmZhY2Uvd2luZG93LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBCT1JERVJfRE9VQkxFLCBCT1JERVJfU0lOR0xFX0RPVUJMRSwgQk9SREVSX0RPVUJMRV9TSU5HTEUgfSBmcm9tICcuL2ludGVyZmFjZS9ib3JkZXJzJztcclxuaW1wb3J0IHsgV2luZG93QmFzZSB9IGZyb20gJy4vaW50ZXJmYWNlL3dpbmRvdyc7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcnKTtcclxuICBjb25zdCBkb2NNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICBkb2NNYWluLmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJztcclxuXHJcbiAgYnVpbGRXaW5kb3coZG9jTWFpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkV2luZG93KGVsID0gZG9jdW1lbnQuYm9keSkge1xyXG4gIGNvbnN0IHdpbmRvd01hbmFnZXIgPSBuZXcgV2luZG93Um9vdChlbCk7XHJcbiAgd2luZG93TWFuYWdlci50aXRsZSA9ICdXSU5ET1cgTUFOQUdFUic7XHJcbiAgd2luZG93TWFuYWdlci5ib3JkZXJzID0gQk9SREVSX0RPVUJMRTtcclxuXHJcbiAgY29uc3QgbWFpblNjcmVlbiA9IG5ldyBXaW5kb3dCYXNlKCdtYWluX3NjcmVlbicpO1xyXG4gIG1haW5TY3JlZW4udGl0bGUgPSAnTUFJTiBTQ1JFRU4nO1xyXG4gIG1haW5TY3JlZW4uYm9yZGVycyA9IEJPUkRFUl9TSU5HTEVfRE9VQkxFO1xyXG4gIHdpbmRvd01hbmFnZXIuYWRkQ2hpbGQobWFpblNjcmVlbik7XHJcblxyXG4gIGNvbnN0IHRleHRGaWVsZCA9IG5ldyBXaW5kb3dCYXNlKCd0ZXh0X2ZpZWxkJyk7XHJcbiAgdGV4dEZpZWxkLnRpdGxlID0gJ1RFWFQgRklFTEQnO1xyXG4gIHRleHRGaWVsZC5ib3JkZXJzID0gQk9SREVSX0RPVUJMRV9TSU5HTEU7XHJcbiAgdGV4dEZpZWxkLnNpemVNaW4gPSA0O1xyXG4gIHRleHRGaWVsZC5zaXplV2VpZ2h0ID0gMDtcclxuICB3aW5kb3dNYW5hZ2VyLmFkZENoaWxkKHRleHRGaWVsZCk7XHJcbiAgd2luZG93TWFuYWdlci5jaGFuZ2VkID0gdHJ1ZTtcclxuICB3aW5kb3dNYW5hZ2VyLnVwZGF0ZSgpO1xyXG59XHJcblxyXG5tYWluKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==