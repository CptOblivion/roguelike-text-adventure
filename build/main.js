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
/* harmony export */   BORDER_INVISIBLE_TOP: () => (/* binding */ BORDER_INVISIBLE_TOP),
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
var BORDER_INVISIBLE_TOP = new Borders('', '', ' ', '', '', '', '', '');
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
        for (; this.el.offsetHeight === baseHeight; this.el.innerHTML += 'X') {
            // debug: change the function to async and enable the following line to watch the update go
            // await new Promise((r) => setTimeout(r, 20));
        }
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

// abusing truthiness in JS to map horizontal to false
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
        this.titlePosition = TitlePosition.left;
        this.titleShift = 3;
        this.width = 0;
        this.height = 0;
        this.margin = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides();
        this.padding = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides();
        this.sizeWeight = 1;
        this.children = [];
        this.contentDirection = ChildrenDirections.vertical;
        this.grid = [];
        this.changed = true;
        this.name = name;
    }
    Object.defineProperty(WindowBase.prototype, "indexLeft", {
        get: function () {
            var _a;
            return this.padding.left + (((_a = this.borders) === null || _a === void 0 ? void 0 : _a.left) ? 1 : 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "indexRight", {
        get: function () {
            var _a;
            return this.width - this.padding.right - (((_a = this.borders) === null || _a === void 0 ? void 0 : _a.right) ? 1 : 0) - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "indexTop", {
        get: function () {
            var _a;
            return this.padding.top + (((_a = this.borders) === null || _a === void 0 ? void 0 : _a.top) ? 1 : 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "indexBottom", {
        get: function () {
            var _a;
            return this.height - this.padding.bottom - (((_a = this.borders) === null || _a === void 0 ? void 0 : _a.bottom) ? 1 : 0) - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "interiorHeight", {
        get: function () {
            var _a, _b;
            return (this.height -
                this.padding.top -
                this.padding.bottom -
                (((_a = this.borders) === null || _a === void 0 ? void 0 : _a.top) ? 1 : 0) -
                (((_b = this.borders) === null || _b === void 0 ? void 0 : _b.bottom) ? 1 : 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "interiorWidth", {
        get: function () {
            var _a, _b;
            return (this.width -
                this.padding.left -
                this.padding.right -
                (((_a = this.borders) === null || _a === void 0 ? void 0 : _a.left) ? 1 : 0) -
                (((_b = this.borders) === null || _b === void 0 ? void 0 : _b.right) ? 1 : 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "contentSpace", {
        /**
         * returns interior space for main content direction
         */
        get: function () {
            if (this.contentDirection)
                return this.interiorHeight;
            return this.interiorWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "contentStart", {
        /**
         * returns content start within canvas along main content axis
         */
        get: function () {
            if (this.contentDirection)
                return this.indexTop;
            return this.indexLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowBase.prototype, "contentEnd", {
        /**
         * returns content end within canvas along main content axis
         */
        get: function () {
            if (this.contentDirection)
                return this.indexBottom;
            return this.indexRight;
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
     * Populates border and title around frame
     */
    WindowBase.prototype.fillBorder = function () {
        var titleOffset;
        if (this.title) {
            switch (this.titlePosition) {
                case TitlePosition.left:
                    titleOffset = -this.titleShift;
                    break;
                case TitlePosition.center:
                    titleOffset = Math.floor(-(this.width - this.title.length) / 2);
                    break;
                case TitlePosition.right:
                    titleOffset = -(this.width - this.title.length - this.titleShift);
                    break;
            }
        }
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
                if (this.borders.top) {
                    if (this.title && titleOffset >= 0 && titleOffset < this.title.length) {
                        this.grid[this.margin.top][i] = this.title[titleOffset];
                    }
                    else {
                        this.grid[this.margin.top][i] = this.borders.top;
                    }
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
        var _a, _b;
        if (!this.changed)
            return this.grid;
        this.fillBorder();
        if (this.children.length === 0) {
            return this.grid;
        }
        var sizes = this.negotiateChildrenSize();
        var contentPos = this.contentStart;
        if (this.contentDirection) {
            for (var i in this.children) {
                this.children[i].resize(this.interiorWidth, sizes[i].size);
                var childGrid = this.children[i].update();
                _a = __read(this.blit(childGrid, [this.indexLeft, contentPos]), 2), contentPos = _a[1];
            }
        }
        else {
            for (var i in this.children) {
                this.children[i].resize(sizes[i].size, this.interiorHeight);
                var childGrid = this.children[i].update();
                _b = __read(this.blit(childGrid, [contentPos, this.indexTop]), 1), contentPos = _b[0];
            }
        }
        return this.grid;
    };
    /**
     *
     * @param srcGrid source to blit into this grid
     * @param position coordinate of top left corner of grid
     * @returns x,y coordinates of finished blit (clipped to target grid)
     */
    WindowBase.prototype.blit = function (srcGrid, _a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        if (srcGrid.length === 0 || srcGrid[0].length === 0) {
            return [
                Math.max(Math.min(x, this.indexRight), this.indexLeft),
                Math.max(Math.min(y, this.indexBottom), this.indexTop),
            ];
        }
        for (var childY = 0, i = y; childY < srcGrid.length && i <= this.indexBottom; childY++, i++) {
            if (i < this.indexTop)
                continue;
            for (var childX = 0, j = x; childX < srcGrid[0].length && j <= this.indexRight; childX++, j++) {
                if (j < this.indexLeft)
                    continue;
                this.grid[i][j] = srcGrid[childY][childX];
            }
        }
        return [
            Math.max(Math.min(x + srcGrid[0].length, this.indexRight), this.indexLeft),
            Math.max(Math.min(y + srcGrid.length, this.indexBottom), this.indexTop),
        ];
    };
    WindowBase.prototype.negotiateChildrenSize = function () {
        // TODO: come up with some test cases to verify this actually behaves right (sizes come out correct with various weights and limits, edge cases like fractional results, overflows, and leftover space)
        // TODO: dole out remainder
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
            var remainingSize = this.contentSpace - lockedSize;
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
// copy base html and css
__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html");
__webpack_require__(/*! file-loader?name=[name].[ext]!./styles.css */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/styles.css");



function main() {
    console.log('initializing');
    var docMain = document.getElementById('main');
    setDarkMode(true);
    docMain.innerHTML = 'loading...';
    buildWindow(docMain);
}
function buildWindow(el) {
    if (el === void 0) { el = document.body; }
    var windowManager = new _interface_window_manager__WEBPACK_IMPORTED_MODULE_0__.WindowRoot(el);
    windowManager.title = 'ROOT WINDOW';
    windowManager.borders = _interface_borders__WEBPACK_IMPORTED_MODULE_1__.BORDER_DOUBLE;
    windowManager.titlePosition = 2;
    windowManager.titleShift = 23;
    var contentFrame = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('content_frame');
    contentFrame.title = 'CONTENT FRAME';
    contentFrame.contentDirection = 0;
    windowManager.addChild(contentFrame);
    var mainScreen = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('main_screen');
    mainScreen.title = 'MAIN SCREEN';
    mainScreen.titlePosition = 1;
    mainScreen.borders = _interface_borders__WEBPACK_IMPORTED_MODULE_1__.BORDER_INVISIBLE_TOP;
    contentFrame.addChild(mainScreen);
    var statusPanel = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('status_panel');
    statusPanel.title = 'STATUS PANEL';
    statusPanel.titlePosition = _interface_window__WEBPACK_IMPORTED_MODULE_2__.TitlePosition.center;
    statusPanel.borders = new _interface_borders__WEBPACK_IMPORTED_MODULE_1__.Borders('│', '', ' ', '', '│', '', '│', '');
    statusPanel.sizeWeight = 0;
    statusPanel.sizeMin = 20;
    contentFrame.addChild(statusPanel);
    var textField = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('text_field');
    textField.title = 'TEXT FIELD';
    textField.borders = new _interface_borders__WEBPACK_IMPORTED_MODULE_1__.Borders('', '', '─', '', '─', '─', '', '');
    textField.sizeMin = 3;
    textField.sizeWeight = 0;
    windowManager.addChild(textField);
    windowManager.changed = true;
    windowManager.update();
}
main();
function setDarkMode(dark) {
    var CLASS_DARK = 'dark';
    if (dark && !document.body.classList.contains(CLASS_DARK)) {
        document.body.classList.add(CLASS_DARK);
        return;
    }
    if (!dark && document.body.classList.contains(CLASS_DARK)) {
        document.body.classList.remove(CLASS_DARK);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSx1REFBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRSxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUN0QixTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN6QixhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWxDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzdCLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsSUFBSSxFQUFFLENBQUM7QUFFUCxTQUFTLFdBQVcsQ0FBQyxJQUFhO0lBQ2hDLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMxQixJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxPQUFPO0lBQ1QsQ0FBQztJQUNELElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDMUQsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2ludGVyZmFjZS9ib3JkZXJzLnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2Uvd2luZG93LW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2ludGVyZmFjZS93aW5kb3cudHMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0eWxlcy5jc3NcIjsiLCJleHBvcnQgY2xhc3MgQm9yZGVycyB7XHJcbiAgbGVmdDogc3RyaW5nO1xyXG4gIHJpZ2h0OiBzdHJpbmc7XHJcbiAgdG9wOiBzdHJpbmc7XHJcbiAgYm90dG9tOiBzdHJpbmc7XHJcbiAgdG9wTGVmdDogc3RyaW5nO1xyXG4gIHRvcFJpZ2h0OiBzdHJpbmc7XHJcbiAgYm90dG9tTGVmdDogc3RyaW5nO1xyXG4gIGJvdHRvbVJpZ2h0OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsZWZ0OiBzdHJpbmcgPSAnJyxcclxuICAgIHJpZ2h0OiBzdHJpbmcgPSAnJyxcclxuICAgIHRvcDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b206IHN0cmluZyA9ICcnLFxyXG4gICAgdG9wTGVmdDogc3RyaW5nID0gJycsXHJcbiAgICB0b3BSaWdodDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b21MZWZ0OiBzdHJpbmcgPSAnJyxcclxuICAgIGJvdHRvbVJpZ2h0OiBzdHJpbmcgPSAnJ1xyXG4gICkge1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3AgPSB0b3Auc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b20gPSBib3R0b20uc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3BMZWZ0ID0gdG9wTGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLnRvcFJpZ2h0ID0gdG9wUmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b21MZWZ0ID0gYm90dG9tTGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLmJvdHRvbVJpZ2h0ID0gYm90dG9tUmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYSBoYW5kZnVsIG9mIGhhbmR5IHByZXNldHNcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9JTlZJU0lCTEVfVE9QID0gbmV3IEJvcmRlcnMoJycsICcnLCAnICcsICcnLCAnJywgJycsICcnLCAnJyk7XHJcbmV4cG9ydCBjb25zdCBCT1JERVJfU0lOR0xFID0gbmV3IEJvcmRlcnMoJ+KUgicsICfilIInLCAn4pSAJywgJ+KUgCcsICfilIwnLCAn4pSQJywgJ+KUlCcsICfilJgnKTtcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilZAnLCAn4pWQJywgJ+KVlCcsICfilZcnLCAn4pWaJywgJ+KVnScpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX0RPVUJMRV9TSU5HTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilIAnLCAn4pSAJywgJ+KVkycsICfilZYnLCAn4pWZJywgJ+KVnCcpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX1NJTkdMRV9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pSCJywgJ+KUgicsICfilZAnLCAn4pWQJywgJ+KVkicsICfilZUnLCAn4pWYJywgJ+KVmycpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVzIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBib3R0b206IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyID0gMCwgcmlnaHQ6IG51bWJlciA9IDAsIHRvcDogbnVtYmVyID0gMCwgYm90dG9tOiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV2luZG93QmFzZSwgR3JpZCB9IGZyb20gJy4vd2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dSb290IGV4dGVuZHMgV2luZG93QmFzZSB7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCctLX5+PT0gcm9vdCA9PX5+LS0nKTtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuX29uV2luZG93UmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBfb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICB0aGlzLl91cGRhdGVDYW52YXNTaXplKCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlQ2FudmFzU2l6ZSgpIHtcclxuICAgIC8vIEkgaGF0ZSB0aGlzXHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICdYJztcclxuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcclxuICAgIC8vIFRPRE86IG9wdGltaXplIChkb3VibGUgY2hhcmFjdGVyIGNvdW50IHVudGlsIG5ldyBoZWlnaHQgZm91bmQsIHRoZW4gYmluYXJ5IHNlYXJjaCBiYWNrPylcclxuICAgIGZvciAoOyB0aGlzLmVsLm9mZnNldEhlaWdodCA9PT0gYmFzZUhlaWdodDsgdGhpcy5lbC5pbm5lckhUTUwgKz0gJ1gnKSB7XHJcbiAgICAgIC8vIGRlYnVnOiBjaGFuZ2UgdGhlIGZ1bmN0aW9uIHRvIGFzeW5jIGFuZCBlbmFibGUgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHdhdGNoIHRoZSB1cGRhdGUgZ29cclxuICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgMjApKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhlaWdodFR3b0NoYXJzID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWwuaW5uZXJIVE1MLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAvIChoZWlnaHRUd29DaGFycyAtIGJhc2VIZWlnaHQpKTtcclxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpOiBHcmlkIHtcclxuICAgIHRoaXMuZ3JpZCA9IFdpbmRvd0Jhc2UucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmdyaWQubWFwKChyb3cpID0+IHJvdy5tYXAoZml4U3BhY2VzKS5qb2luKCcnKSkuam9pbignXFxuJyk7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZml4U3BhY2VzKGNoYXIpOiBzdHJpbmcge1xyXG4gIGlmIChjaGFyID09PSAnICcpIHJldHVybiAnJm5ic3AnO1xyXG4gIHJldHVybiBjaGFyO1xyXG59XHJcbiIsImltcG9ydCB7IEJvcmRlcnMsIFNpZGVzIH0gZnJvbSAnLi9ib3JkZXJzJztcclxuXHJcbi8vIGFidXNpbmcgdHJ1dGhpbmVzcyBpbiBKUyB0byBtYXAgaG9yaXpvbnRhbCB0byBmYWxzZVxyXG5leHBvcnQgZW51bSBDaGlsZHJlbkRpcmVjdGlvbnMge1xyXG4gIGhvcml6b250YWwgPSAwLFxyXG4gIHZlcnRpY2FsID0gMSxcclxufVxyXG5cclxuLy8gVE9ETzogdHVybiBpbnRvIGNsYXNzIHdpdGggd2lkdGggYW5kIGhlaWdodCBtZXRob2RzLCBzaW1wbGUgY29uc3RydWN0b3IsIGNvb3JkaW5hdGUgYWNjZXNzIGZvciBnZXR0aW5nIGFuZCBzZXR0aW5nLCBwcm90ZWN0aW9ucyBhZ2FpbnN0IG91dCBvZiBib3VuZHMgYWNjZXNzXHJcbi8vIFRPRE86IG1vdmUgYmxpdCBpbnRvIGdyaWQgY2xhc3M/IChtYXliZSBrZWVwIGl0IGluIFdpbmRvd0Jhc2UsIHNvIHdlIGNhbiBrZWVwIHRoZSBwcm90ZWN0ZWQgbWFyZ2luL2JvcmRlci9wYWRkaW5nIHJlZ2lvbilcclxuLy8gICAgYWx0ZXJuYXRlbHksIG1vdmUgdG8gYmxpdCwganVzdCByZW1lbWJlciB0byBzY2FsZSBhbmQgb2Zmc2V0IGNvbnRlbnRzIGJlZm9yZSBibGl0dGluZ1xyXG5leHBvcnQgdHlwZSBHcmlkID0gc3RyaW5nW11bXTtcclxuXHJcbmV4cG9ydCB0eXBlIFBvc2l0aW9uID0gW251bWJlciwgbnVtYmVyXTtcclxuY2xhc3MgU2l6ZVdpdGhMb2NrIHtcclxuICBzaXplOiBudW1iZXIgPSAwO1xyXG4gIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaXRsZVBvc2l0aW9uIHtcclxuICBsZWZ0ID0gMCxcclxuICBjZW50ZXIgPSAxLFxyXG4gIHJpZ2h0ID0gMixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd0Jhc2Uge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICB0aXRsZVBvc2l0aW9uOiBUaXRsZVBvc2l0aW9uID0gVGl0bGVQb3NpdGlvbi5sZWZ0O1xyXG4gIHRpdGxlU2hpZnQgPSAzO1xyXG5cclxuICB3aWR0aDogbnVtYmVyID0gMDtcclxuICBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgbWFyZ2luOiBTaWRlcyA9IG5ldyBTaWRlcygpO1xyXG4gIHBhZGRpbmc6IFNpZGVzID0gbmV3IFNpZGVzKCk7XHJcbiAgYm9yZGVyczogQm9yZGVycztcclxuXHJcbiAgc2l6ZU1pbj86IG51bWJlcjtcclxuICBzaXplTWF4PzogbnVtYmVyO1xyXG4gIHNpemVXZWlnaHQ6IG51bWJlciA9IDE7XHJcblxyXG4gIGNoaWxkcmVuOiBXaW5kb3dCYXNlW10gPSBbXTtcclxuICBjb250ZW50RGlyZWN0aW9uOiBDaGlsZHJlbkRpcmVjdGlvbnMgPSBDaGlsZHJlbkRpcmVjdGlvbnMudmVydGljYWw7XHJcblxyXG4gIGdyaWQ6IEdyaWQgPSBbXTtcclxuICBfbGFzdFdpZHRoOiBudW1iZXI7XHJcbiAgX2xhc3RIZWlnaHQ6IG51bWJlcjtcclxuICBjaGFuZ2VkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGluZGV4TGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFkZGluZy5sZWZ0ICsgKHRoaXMuYm9yZGVycz8ubGVmdCA/IDEgOiAwKTtcclxuICB9XHJcbiAgZ2V0IGluZGV4UmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoIC0gdGhpcy5wYWRkaW5nLnJpZ2h0IC0gKHRoaXMuYm9yZGVycz8ucmlnaHQgPyAxIDogMCkgLSAxO1xyXG4gIH1cclxuICBnZXQgaW5kZXhUb3AoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhZGRpbmcudG9wICsgKHRoaXMuYm9yZGVycz8udG9wID8gMSA6IDApO1xyXG4gIH1cclxuICBnZXQgaW5kZXhCb3R0b20oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmhlaWdodCAtIHRoaXMucGFkZGluZy5ib3R0b20gLSAodGhpcy5ib3JkZXJzPy5ib3R0b20gPyAxIDogMCkgLSAxO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGludGVyaW9ySGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmhlaWdodCAtXHJcbiAgICAgIHRoaXMucGFkZGluZy50b3AgLVxyXG4gICAgICB0aGlzLnBhZGRpbmcuYm90dG9tIC1cclxuICAgICAgKHRoaXMuYm9yZGVycz8udG9wID8gMSA6IDApIC1cclxuICAgICAgKHRoaXMuYm9yZGVycz8uYm90dG9tID8gMSA6IDApXHJcbiAgICApO1xyXG4gIH1cclxuICBnZXQgaW50ZXJpb3JXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy53aWR0aCAtXHJcbiAgICAgIHRoaXMucGFkZGluZy5sZWZ0IC1cclxuICAgICAgdGhpcy5wYWRkaW5nLnJpZ2h0IC1cclxuICAgICAgKHRoaXMuYm9yZGVycz8ubGVmdCA/IDEgOiAwKSAtXHJcbiAgICAgICh0aGlzLmJvcmRlcnM/LnJpZ2h0ID8gMSA6IDApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJucyBpbnRlcmlvciBzcGFjZSBmb3IgbWFpbiBjb250ZW50IGRpcmVjdGlvblxyXG4gICAqL1xyXG4gIGdldCBjb250ZW50U3BhY2UoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnREaXJlY3Rpb24pIHJldHVybiB0aGlzLmludGVyaW9ySGVpZ2h0O1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJpb3JXaWR0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybnMgY29udGVudCBzdGFydCB3aXRoaW4gY2FudmFzIGFsb25nIG1haW4gY29udGVudCBheGlzXHJcbiAgICovXHJcbiAgZ2V0IGNvbnRlbnRTdGFydCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY29udGVudERpcmVjdGlvbikgcmV0dXJuIHRoaXMuaW5kZXhUb3A7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleExlZnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm5zIGNvbnRlbnQgZW5kIHdpdGhpbiBjYW52YXMgYWxvbmcgbWFpbiBjb250ZW50IGF4aXNcclxuICAgKi9cclxuICBnZXQgY29udGVudEVuZCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY29udGVudERpcmVjdGlvbikgcmV0dXJuIHRoaXMuaW5kZXhCb3R0b207XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleFJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgYWRkQ2hpbGQoY2hpbGQ6IFdpbmRvd0Jhc2UpIHtcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBmcmFtZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2l6ZSBjaGFuZ2VkXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAvLyBUT0RPOiBkb2xlIG91dCByZW1haW5kZXIgaW4gc2l6ZSBuZWdvdGlhdGlvblxyXG4gICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcclxuICAgIGhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcclxuICAgIGlmICh0aGlzLndpZHRoID09IHdpZHRoICYmIHRoaXMuaGVpZ2h0ID09IGhlaWdodCkgcmV0dXJuO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHJlc2l6ZWQgdG8gJHt0aGlzLndpZHRofSB4ICR7dGhpcy5oZWlnaHR9YCk7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoaGVpZ2h0KS5maWxsKFtdKTtcclxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmdyaWQpIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHdpZHRoKS5maWxsKCcgJyk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmZpbGxCb3JkZXIoKTtcclxuICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb3B1bGF0ZXMgYm9yZGVyIGFuZCB0aXRsZSBhcm91bmQgZnJhbWVcclxuICAgKi9cclxuICBmaWxsQm9yZGVyKCkge1xyXG4gICAgbGV0IHRpdGxlT2Zmc2V0O1xyXG4gICAgaWYgKHRoaXMudGl0bGUpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLnRpdGxlUG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlIFRpdGxlUG9zaXRpb24ubGVmdDpcclxuICAgICAgICAgIHRpdGxlT2Zmc2V0ID0gLXRoaXMudGl0bGVTaGlmdDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVGl0bGVQb3NpdGlvbi5jZW50ZXI6XHJcbiAgICAgICAgICB0aXRsZU9mZnNldCA9IE1hdGguZmxvb3IoLSh0aGlzLndpZHRoIC0gdGhpcy50aXRsZS5sZW5ndGgpIC8gMik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRpdGxlUG9zaXRpb24ucmlnaHQ6XHJcbiAgICAgICAgICB0aXRsZU9mZnNldCA9IC0odGhpcy53aWR0aCAtIHRoaXMudGl0bGUubGVuZ3RoIC0gdGhpcy50aXRsZVNoaWZ0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuYm9yZGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLmxlZnQgfHwgdGhpcy5ib3JkZXJzLnJpZ2h0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1hcmdpbi50b3AgKyAxOyBpIDwgdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSAxOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ib3JkZXJzLmxlZnQpIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFtpXVt0aGlzLm1hcmdpbi5sZWZ0XSA9IHRoaXMuYm9yZGVycy5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3JkZXJzLnJpZ2h0KSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbaV1bdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gMV0gPSB0aGlzLmJvcmRlcnMucmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcCB8fCB0aGlzLmJvcmRlcnMuYm90dG9tKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLm1hcmdpbi5sZWZ0ICsgMTsgaSA8IHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRpdGxlT2Zmc2V0Kys7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9yZGVycy50b3ApIHtcclxuICAgICAgICAgIGlmICh0aGlzLnRpdGxlICYmIHRpdGxlT2Zmc2V0ID49IDAgJiYgdGl0bGVPZmZzZXQgPCB0aGlzLnRpdGxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmdyaWRbdGhpcy5tYXJnaW4udG9wXVtpXSA9IHRoaXMudGl0bGVbdGl0bGVPZmZzZXRdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkW3RoaXMubWFyZ2luLnRvcF1baV0gPSB0aGlzLmJvcmRlcnMudG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3JkZXJzLmJvdHRvbSkge1xyXG4gICAgICAgICAgdGhpcy5ncmlkW3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gMV1baV0gPSB0aGlzLmJvcmRlcnMuYm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy50b3BMZWZ0KSB0aGlzLmdyaWRbdGhpcy5tYXJnaW4udG9wXVt0aGlzLm1hcmdpbi5sZWZ0XSA9IHRoaXMuYm9yZGVycy50b3BMZWZ0O1xyXG4gICAgaWYgKHRoaXMuYm9yZGVycy50b3BSaWdodClcclxuICAgICAgdGhpcy5ncmlkW3RoaXMubWFyZ2luLnRvcF1bdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gMV0gPSB0aGlzLmJvcmRlcnMudG9wUmlnaHQ7XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLmJvdHRvbUxlZnQpXHJcbiAgICAgIHRoaXMuZ3JpZFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDFdW3RoaXMubWFyZ2luLmxlZnRdID0gdGhpcy5ib3JkZXJzLmJvdHRvbUxlZnQ7XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLmJvdHRvbVJpZ2h0KVxyXG4gICAgICB0aGlzLmdyaWRbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSAxXVt0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHQgLSAxXSA9XHJcbiAgICAgICAgdGhpcy5ib3JkZXJzLmJvdHRvbVJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCk6IEdyaWQge1xyXG4gICAgaWYgKCF0aGlzLmNoYW5nZWQpIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgICB0aGlzLmZpbGxCb3JkZXIoKTtcclxuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpemVzID0gdGhpcy5uZWdvdGlhdGVDaGlsZHJlblNpemUoKTtcclxuICAgIGxldCBjb250ZW50UG9zID0gdGhpcy5jb250ZW50U3RhcnQ7XHJcbiAgICBpZiAodGhpcy5jb250ZW50RGlyZWN0aW9uKSB7XHJcbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZXNpemUodGhpcy5pbnRlcmlvcldpZHRoLCBzaXplc1tpXS5zaXplKTtcclxuICAgICAgICBjb25zdCBjaGlsZEdyaWQgPSB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZSgpO1xyXG4gICAgICAgIFssIGNvbnRlbnRQb3NdID0gdGhpcy5ibGl0KGNoaWxkR3JpZCwgW3RoaXMuaW5kZXhMZWZ0LCBjb250ZW50UG9zXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZXNpemUoc2l6ZXNbaV0uc2l6ZSwgdGhpcy5pbnRlcmlvckhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgY2hpbGRHcmlkID0gdGhpcy5jaGlsZHJlbltpXS51cGRhdGUoKTtcclxuICAgICAgICBbY29udGVudFBvc10gPSB0aGlzLmJsaXQoY2hpbGRHcmlkLCBbY29udGVudFBvcywgdGhpcy5pbmRleFRvcF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gIH1cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzcmNHcmlkIHNvdXJjZSB0byBibGl0IGludG8gdGhpcyBncmlkXHJcbiAgICogQHBhcmFtIHBvc2l0aW9uIGNvb3JkaW5hdGUgb2YgdG9wIGxlZnQgY29ybmVyIG9mIGdyaWRcclxuICAgKiBAcmV0dXJucyB4LHkgY29vcmRpbmF0ZXMgb2YgZmluaXNoZWQgYmxpdCAoY2xpcHBlZCB0byB0YXJnZXQgZ3JpZClcclxuICAgKi9cclxuICBibGl0KHNyY0dyaWQ6IEdyaWQsIFt4LCB5XTogUG9zaXRpb24pOiBQb3NpdGlvbiB7XHJcbiAgICBpZiAoc3JjR3JpZC5sZW5ndGggPT09IDAgfHwgc3JjR3JpZFswXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBNYXRoLm1heChNYXRoLm1pbih4LCB0aGlzLmluZGV4UmlnaHQpLCB0aGlzLmluZGV4TGVmdCksXHJcbiAgICAgICAgTWF0aC5tYXgoTWF0aC5taW4oeSwgdGhpcy5pbmRleEJvdHRvbSksIHRoaXMuaW5kZXhUb3ApLFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY2hpbGRZID0gMCwgaSA9IHk7IGNoaWxkWSA8IHNyY0dyaWQubGVuZ3RoICYmIGkgPD0gdGhpcy5pbmRleEJvdHRvbTsgY2hpbGRZKyssIGkrKykge1xyXG4gICAgICBpZiAoaSA8IHRoaXMuaW5kZXhUb3ApIGNvbnRpbnVlO1xyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBjaGlsZFggPSAwLCBqID0geDtcclxuICAgICAgICBjaGlsZFggPCBzcmNHcmlkWzBdLmxlbmd0aCAmJiBqIDw9IHRoaXMuaW5kZXhSaWdodDtcclxuICAgICAgICBjaGlsZFgrKywgaisrXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChqIDwgdGhpcy5pbmRleExlZnQpIGNvbnRpbnVlO1xyXG4gICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IHNyY0dyaWRbY2hpbGRZXVtjaGlsZFhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgTWF0aC5tYXgoTWF0aC5taW4oeCArIHNyY0dyaWRbMF0ubGVuZ3RoLCB0aGlzLmluZGV4UmlnaHQpLCB0aGlzLmluZGV4TGVmdCksXHJcbiAgICAgIE1hdGgubWF4KE1hdGgubWluKHkgKyBzcmNHcmlkLmxlbmd0aCwgdGhpcy5pbmRleEJvdHRvbSksIHRoaXMuaW5kZXhUb3ApLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIG5lZ290aWF0ZUNoaWxkcmVuU2l6ZSgpOiBTaXplV2l0aExvY2tbXSB7XHJcbiAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggc29tZSB0ZXN0IGNhc2VzIHRvIHZlcmlmeSB0aGlzIGFjdHVhbGx5IGJlaGF2ZXMgcmlnaHQgKHNpemVzIGNvbWUgb3V0IGNvcnJlY3Qgd2l0aCB2YXJpb3VzIHdlaWdodHMgYW5kIGxpbWl0cywgZWRnZSBjYXNlcyBsaWtlIGZyYWN0aW9uYWwgcmVzdWx0cywgb3ZlcmZsb3dzLCBhbmQgbGVmdG92ZXIgc3BhY2UpXHJcbiAgICAvLyBUT0RPOiBkb2xlIG91dCByZW1haW5kZXJcclxuICAgIGNvbnN0IHNpemVzID0gbmV3IEFycmF5KHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2l6ZXNbaV0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBiZXR0ZXIgZXNjYXBlIGNvbmRpdGlvbiB0aGFuIGp1c3QgXCJjdXQgYWZ0ZXIgdGVuIGxvb3BzXCJcclxuICAgIC8vIFRPRE86IEkgZmVlbCBsaWtlIHRoaXMgY2FuIGJlIGRvbmUgbW9yZSBncmFjZWZ1bGx5IHdpdGhvdXQgaXRlcmF0aW9uXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgbGV0IHdlaWdodFN1bSA9IDA7XHJcbiAgICAgIGxldCBjaGlsZHJlblJlbWFpbmluZyA9IDA7XHJcbiAgICAgIGxldCBsb2NrZWRTaXplID0gMDtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgaiBpbiBzaXplcykge1xyXG4gICAgICAgIGlmIChzaXplc1tqXS5sb2NrZWQpIHtcclxuICAgICAgICAgIGxvY2tlZFNpemUgKz0gc2l6ZXNbal0uc2l6ZTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZHJlblJlbWFpbmluZyArPSAxO1xyXG4gICAgICAgIHdlaWdodFN1bSArPSB0aGlzLmNoaWxkcmVuW2pdLnNpemVXZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGlsZHJlblJlbWFpbmluZyA9PSAwKSB7XHJcbiAgICAgICAgLy8gcmFuIG91dCBvZiBvcHRpb25zXHJcbiAgICAgICAgcmV0dXJuIHNpemVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZW1haW5pbmdTaXplID0gdGhpcy5jb250ZW50U3BhY2UgLSBsb2NrZWRTaXplO1xyXG4gICAgICBpZiAocmVtYWluaW5nU2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgLy8gcmFuIG91dCBvZiBzcGFjZVxyXG4gICAgICAgIHJldHVybiBzaXplcztcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHJlbmVnb3RpYXRlID0gZmFsc2U7XHJcbiAgICAgIGZvciAoY29uc3QgaiBpbiBzaXplcykge1xyXG4gICAgICAgIGlmIChzaXplc1tqXS5sb2NrZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltqXTtcclxuICAgICAgICBzaXplc1tqXS5zaXplID0gKGNoaWxkLnNpemVXZWlnaHQgLyB3ZWlnaHRTdW0pICogcmVtYWluaW5nU2l6ZTtcclxuICAgICAgICBpZiAoY2hpbGQuc2l6ZU1heCAhPT0gdW5kZWZpbmVkICYmIHNpemVzW2pdLnNpemUgPj0gY2hpbGQuc2l6ZU1heCkge1xyXG4gICAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IGNoaWxkLnNpemVNYXg7XHJcbiAgICAgICAgICBzaXplc1tqXS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcmVuZWdvdGlhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5zaXplTWluICE9PSB1bmRlZmluZWQgJiYgc2l6ZXNbal0uc2l6ZSA8PSBjaGlsZC5zaXplTWluKSB7XHJcbiAgICAgICAgICBzaXplc1tqXS5zaXplID0gY2hpbGQuc2l6ZU1pbjtcclxuICAgICAgICAgIHNpemVzW2pdLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICByZW5lZ290aWF0ZSA9IHRydWU7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghcmVuZWdvdGlhdGUpIHtcclxuICAgICAgICAvLyBnb3Qgd2hlcmUgd2Ugd2FudCB0byBiZVxyXG4gICAgICAgIHJldHVybiBzaXplcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpemVzO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gY29weSBiYXNlIGh0bWwgYW5kIGNzc1xyXG5yZXF1aXJlKCdmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XSEuL2luZGV4Lmh0bWwnKTtcclxucmVxdWlyZSgnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9zdHlsZXMuY3NzJyk7XHJcblxyXG5pbXBvcnQgeyBXaW5kb3dSb290IH0gZnJvbSAnLi9pbnRlcmZhY2Uvd2luZG93LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBCb3JkZXJzLCBCT1JERVJfRE9VQkxFLCBCT1JERVJfSU5WSVNJQkxFX1RPUCwgQk9SREVSX1NJTkdMRSB9IGZyb20gJy4vaW50ZXJmYWNlL2JvcmRlcnMnO1xyXG5pbXBvcnQgeyBUaXRsZVBvc2l0aW9uLCBXaW5kb3dCYXNlIH0gZnJvbSAnLi9pbnRlcmZhY2Uvd2luZG93JztcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZycpO1xyXG4gIGNvbnN0IGRvY01haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gIHNldERhcmtNb2RlKHRydWUpO1xyXG4gIGRvY01haW4uaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nO1xyXG5cclxuICBidWlsZFdpbmRvdyhkb2NNYWluKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRXaW5kb3coZWwgPSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgY29uc3Qgd2luZG93TWFuYWdlciA9IG5ldyBXaW5kb3dSb290KGVsKTtcclxuICB3aW5kb3dNYW5hZ2VyLnRpdGxlID0gJ1JPT1QgV0lORE9XJztcclxuICB3aW5kb3dNYW5hZ2VyLmJvcmRlcnMgPSBCT1JERVJfRE9VQkxFO1xyXG4gIHdpbmRvd01hbmFnZXIudGl0bGVQb3NpdGlvbiA9IDI7XHJcbiAgd2luZG93TWFuYWdlci50aXRsZVNoaWZ0ID0gMjM7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnRGcmFtZSA9IG5ldyBXaW5kb3dCYXNlKCdjb250ZW50X2ZyYW1lJyk7XHJcbiAgY29udGVudEZyYW1lLnRpdGxlID0gJ0NPTlRFTlQgRlJBTUUnO1xyXG4gIGNvbnRlbnRGcmFtZS5jb250ZW50RGlyZWN0aW9uID0gMDtcclxuICB3aW5kb3dNYW5hZ2VyLmFkZENoaWxkKGNvbnRlbnRGcmFtZSk7XHJcblxyXG4gIGNvbnN0IG1haW5TY3JlZW4gPSBuZXcgV2luZG93QmFzZSgnbWFpbl9zY3JlZW4nKTtcclxuICBtYWluU2NyZWVuLnRpdGxlID0gJ01BSU4gU0NSRUVOJztcclxuICBtYWluU2NyZWVuLnRpdGxlUG9zaXRpb24gPSAxO1xyXG4gIG1haW5TY3JlZW4uYm9yZGVycyA9IEJPUkRFUl9JTlZJU0lCTEVfVE9QO1xyXG4gIGNvbnRlbnRGcmFtZS5hZGRDaGlsZChtYWluU2NyZWVuKTtcclxuXHJcbiAgY29uc3Qgc3RhdHVzUGFuZWwgPSBuZXcgV2luZG93QmFzZSgnc3RhdHVzX3BhbmVsJyk7XHJcbiAgc3RhdHVzUGFuZWwudGl0bGUgPSAnU1RBVFVTIFBBTkVMJztcclxuICBzdGF0dXNQYW5lbC50aXRsZVBvc2l0aW9uID0gVGl0bGVQb3NpdGlvbi5jZW50ZXI7XHJcbiAgc3RhdHVzUGFuZWwuYm9yZGVycyA9IG5ldyBCb3JkZXJzKCfilIInLCAnJywgJyAnLCAnJywgJ+KUgicsICcnLCAn4pSCJywgJycpO1xyXG4gIHN0YXR1c1BhbmVsLnNpemVXZWlnaHQgPSAwO1xyXG4gIHN0YXR1c1BhbmVsLnNpemVNaW4gPSAyMDtcclxuICBjb250ZW50RnJhbWUuYWRkQ2hpbGQoc3RhdHVzUGFuZWwpO1xyXG5cclxuICBjb25zdCB0ZXh0RmllbGQgPSBuZXcgV2luZG93QmFzZSgndGV4dF9maWVsZCcpO1xyXG4gIHRleHRGaWVsZC50aXRsZSA9ICdURVhUIEZJRUxEJztcclxuICB0ZXh0RmllbGQuYm9yZGVycyA9IG5ldyBCb3JkZXJzKCcnLCAnJywgJ+KUgCcsICcnLCAn4pSAJywgJ+KUgCcsICcnLCAnJyk7XHJcbiAgdGV4dEZpZWxkLnNpemVNaW4gPSAzO1xyXG4gIHRleHRGaWVsZC5zaXplV2VpZ2h0ID0gMDtcclxuICB3aW5kb3dNYW5hZ2VyLmFkZENoaWxkKHRleHRGaWVsZCk7XHJcblxyXG4gIHdpbmRvd01hbmFnZXIuY2hhbmdlZCA9IHRydWU7XHJcbiAgd2luZG93TWFuYWdlci51cGRhdGUoKTtcclxufVxyXG5cclxubWFpbigpO1xyXG5cclxuZnVuY3Rpb24gc2V0RGFya01vZGUoZGFyazogYm9vbGVhbikge1xyXG4gIGNvbnN0IENMQVNTX0RBUksgPSAnZGFyayc7XHJcbiAgaWYgKGRhcmsgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RBUkspKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfREFSSyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghZGFyayAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EQVJLKSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX0RBUkspO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=