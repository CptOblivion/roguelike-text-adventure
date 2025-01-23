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

/***/ "./src/interface/ascii-canvas.ts":
/*!***************************************!*\
  !*** ./src/interface/ascii-canvas.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASCIICanvas: () => (/* binding */ ASCIICanvas)
/* harmony export */ });
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
var ASCIICanvas = /** @class */ (function () {
    function ASCIICanvas() {
        this._grid = new Array();
        this.width = 0;
        this.height = 0;
    }
    ASCIICanvas.prototype.resize = function (width, height) {
        this._grid = new Array(height).fill(undefined);
        for (var i in this._grid) {
            this._grid[i] = new Array(width).fill(' ');
        }
        this.width = width;
        this.height = height;
    };
    ASCIICanvas.prototype.checkBounds = function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        if (this._grid === undefined)
            return false;
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        return true;
    };
    ASCIICanvas.prototype.getAt = function (x, y) {
        if (!this.checkBounds([x, y]))
            return undefined;
        return this._grid[y][x];
    };
    ASCIICanvas.prototype.setAt = function (value, x, y) {
        if (!this.checkBounds([x, y]))
            return;
        this._grid[y][x] = value;
    };
    ASCIICanvas.prototype.clamp = function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        return [Math.max(Math.min(x, this.width), 0), Math.max(Math.min(y, this.height), 0)];
    };
    /**
     * @param srcGrid source to blit into this canvas
     * @param position top left corner offset
     */
    ASCIICanvas.prototype.blit = function (srcGrid, _a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        if (srcGrid.width === 0 || srcGrid.height === 0) {
            return;
        }
        for (var srcY = 0, i = y; srcY < srcGrid.height && i < this.height; srcY++, i++) {
            if (i < 0)
                continue;
            for (var srcX = 0, j = x; srcX < srcGrid.width && j <= this.width; srcX++, j++) {
                if (j < 0)
                    continue;
                this.setAt(srcGrid.getAt(srcX, srcY), i, j);
            }
        }
    };
    ASCIICanvas.prototype.render = function () {
        return this._grid.map(function (row) { return row.map(fixSpaces).join(''); }).join('\n');
    };
    return ASCIICanvas;
}());

function fixSpaces(char) {
    if (char === ' ')
        return '&nbsp';
    return char;
}


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
        _window__WEBPACK_IMPORTED_MODULE_0__.WindowBase.prototype.update.call(this);
        this.el.innerHTML = this.canvas.render();
        return this.canvas;
    };
    return WindowRoot;
}(_window__WEBPACK_IMPORTED_MODULE_0__.WindowBase));



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
/* harmony import */ var _ascii_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascii-canvas */ "./src/interface/ascii-canvas.ts");


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
        this.padding = new _borders__WEBPACK_IMPORTED_MODULE_0__.Sides();
        this.sizeWeight = 1;
        this.children = [];
        this.contentDirection = ChildrenDirections.vertical;
        this.canvas = new _ascii_canvas__WEBPACK_IMPORTED_MODULE_1__.ASCIICanvas();
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
     * @returns true if the size changed
     */
    WindowBase.prototype.resize = function (width, height) {
        width = Math.floor(width);
        height = Math.floor(height);
        if (this.width == width && this.height == height)
            return;
        this.width = width;
        this.height = height;
        this.canvas.resize(this.width, this.height);
        this.changed = true;
    };
    /**
     * Populates border and title around frame
     */
    WindowBase.prototype.fillBorder = function () {
        if (!this.borders) {
            return;
        }
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
        if (this.borders.left) {
            for (var i = 1; i < this.height - 1; i++) {
                this.canvas.setAt(this.borders.left, 0, i);
            }
        }
        if (this.borders.right) {
            for (var i = 1; i < this.height - 1; i++) {
                this.canvas.setAt(this.borders.right, this.width - 1, i);
            }
        }
        if (this.borders.top) {
            for (var i = 1; i < this.width - 1; i++) {
                titleOffset++;
                if (this.title && titleOffset >= 0 && titleOffset < this.title.length) {
                    this.canvas.setAt(this.title[titleOffset], i, 0);
                }
                else {
                    this.canvas.setAt(this.borders.top, i, 0);
                }
            }
        }
        if (this.borders.bottom) {
            for (var i = 1; i < this.width - 1; i++) {
                this.canvas.setAt(this.borders.bottom, i, this.height - 1);
            }
        }
        if (this.borders.topLeft)
            this.canvas.setAt(this.borders.topLeft, 0, 0);
        if (this.borders.topRight)
            this.canvas.setAt(this.borders.topRight, this.width - 1, 0);
        if (this.borders.bottomLeft)
            this.canvas.setAt(this.borders.bottomLeft, 0, this.height - 1);
        if (this.borders.bottomRight)
            this.canvas.setAt(this.borders.bottomRight, this.width - 1, this.height - 1);
    };
    WindowBase.prototype.update = function () {
        if (!this.changed)
            return this.canvas;
        this.fillBorder();
        if (this.children.length === 0) {
            return this.canvas;
        }
        var sizes = this.negotiateChildrenSize();
        var contentPos = this.contentStart;
        if (this.contentDirection) {
            // vertical
            for (var i in this.children) {
                this.children[i].resize(this.interiorWidth, sizes[i].size);
                var childGrid = this.children[i].update();
                this.canvas.blit(childGrid, [this.indexLeft, contentPos]);
                contentPos += childGrid.height;
            }
        }
        else {
            // horizontal
            for (var i in this.children) {
                this.children[i].resize(sizes[i].size, this.interiorHeight);
                var childGrid = this.children[i].update();
                this.canvas.blit(childGrid, [contentPos, this.indexTop]);
                contentPos += childGrid.width;
            }
        }
        return this.canvas;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDMUQsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLE9BQU87SUFDVCxDQUFDO0lBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUMxRCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvaW50ZXJmYWNlL2FzY2lpLWNhbnZhcy50cyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvaW50ZXJmYWNlL2JvcmRlcnMudHMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2ludGVyZmFjZS93aW5kb3ctbWFuYWdlci50cyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvaW50ZXJmYWNlL3dpbmRvdy50cyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3R5bGVzLmNzc1wiOyIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vY29tbW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBU0NJSUNhbnZhcyB7XHJcbiAgX2dyaWQ6IHN0cmluZ1tdW10gPSBuZXcgQXJyYXkoKTtcclxuICB3aWR0aDogbnVtYmVyID0gMDtcclxuICBoZWlnaHQ6IG51bWJlciA9IDA7XHJcblxyXG4gIHJlc2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZ3JpZCA9IG5ldyBBcnJheShoZWlnaHQpLmZpbGwodW5kZWZpbmVkKTtcclxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLl9ncmlkKSB7XHJcbiAgICAgIHRoaXMuX2dyaWRbaV0gPSBuZXcgQXJyYXkod2lkdGgpLmZpbGwoJyAnKTtcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tCb3VuZHMoW3gsIHldOiBQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuX2dyaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPj0gdGhpcy53aWR0aCB8fCB5ID49IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrQm91bmRzKFt4LCB5XSkpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gdGhpcy5fZ3JpZFt5XVt4XTtcclxuICB9XHJcblxyXG4gIHNldEF0KHZhbHVlOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tCb3VuZHMoW3gsIHldKSkgcmV0dXJuO1xyXG4gICAgdGhpcy5fZ3JpZFt5XVt4XSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY2xhbXAoW3gsIHldOiBQb3NpdGlvbik6IFBvc2l0aW9uIHtcclxuICAgIHJldHVybiBbTWF0aC5tYXgoTWF0aC5taW4oeCwgdGhpcy53aWR0aCksIDApLCBNYXRoLm1heChNYXRoLm1pbih5LCB0aGlzLmhlaWdodCksIDApXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBzcmNHcmlkIHNvdXJjZSB0byBibGl0IGludG8gdGhpcyBjYW52YXNcclxuICAgKiBAcGFyYW0gcG9zaXRpb24gdG9wIGxlZnQgY29ybmVyIG9mZnNldFxyXG4gICAqL1xyXG4gIGJsaXQoc3JjR3JpZDogQVNDSUlDYW52YXMsIFt4LCB5XTogUG9zaXRpb24pIHtcclxuICAgIGlmIChzcmNHcmlkLndpZHRoID09PSAwIHx8IHNyY0dyaWQuaGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBzcmNZID0gMCwgaSA9IHk7IHNyY1kgPCBzcmNHcmlkLmhlaWdodCAmJiBpIDwgdGhpcy5oZWlnaHQ7IHNyY1krKywgaSsrKSB7XHJcbiAgICAgIGlmIChpIDwgMCkgY29udGludWU7XHJcbiAgICAgIGZvciAobGV0IHNyY1ggPSAwLCBqID0geDsgc3JjWCA8IHNyY0dyaWQud2lkdGggJiYgaiA8PSB0aGlzLndpZHRoOyBzcmNYKyssIGorKykge1xyXG4gICAgICAgIGlmIChqIDwgMCkgY29udGludWU7XHJcbiAgICAgICAgdGhpcy5zZXRBdChzcmNHcmlkLmdldEF0KHNyY1gsIHNyY1kpLCBpLCBqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ3JpZC5tYXAoKHJvdykgPT4gcm93Lm1hcChmaXhTcGFjZXMpLmpvaW4oJycpKS5qb2luKCdcXG4nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeFNwYWNlcyhjaGFyKTogc3RyaW5nIHtcclxuICBpZiAoY2hhciA9PT0gJyAnKSByZXR1cm4gJyZuYnNwJztcclxuICByZXR1cm4gY2hhcjtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQm9yZGVycyB7XHJcbiAgbGVmdDogc3RyaW5nO1xyXG4gIHJpZ2h0OiBzdHJpbmc7XHJcbiAgdG9wOiBzdHJpbmc7XHJcbiAgYm90dG9tOiBzdHJpbmc7XHJcbiAgdG9wTGVmdDogc3RyaW5nO1xyXG4gIHRvcFJpZ2h0OiBzdHJpbmc7XHJcbiAgYm90dG9tTGVmdDogc3RyaW5nO1xyXG4gIGJvdHRvbVJpZ2h0OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsZWZ0OiBzdHJpbmcgPSAnJyxcclxuICAgIHJpZ2h0OiBzdHJpbmcgPSAnJyxcclxuICAgIHRvcDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b206IHN0cmluZyA9ICcnLFxyXG4gICAgdG9wTGVmdDogc3RyaW5nID0gJycsXHJcbiAgICB0b3BSaWdodDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b21MZWZ0OiBzdHJpbmcgPSAnJyxcclxuICAgIGJvdHRvbVJpZ2h0OiBzdHJpbmcgPSAnJ1xyXG4gICkge1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3AgPSB0b3Auc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b20gPSBib3R0b20uc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3BMZWZ0ID0gdG9wTGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLnRvcFJpZ2h0ID0gdG9wUmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b21MZWZ0ID0gYm90dG9tTGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLmJvdHRvbVJpZ2h0ID0gYm90dG9tUmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYSBoYW5kZnVsIG9mIGhhbmR5IHByZXNldHNcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9JTlZJU0lCTEVfVE9QID0gbmV3IEJvcmRlcnMoJycsICcnLCAnICcsICcnLCAnJywgJycsICcnLCAnJyk7XHJcbmV4cG9ydCBjb25zdCBCT1JERVJfU0lOR0xFID0gbmV3IEJvcmRlcnMoJ+KUgicsICfilIInLCAn4pSAJywgJ+KUgCcsICfilIwnLCAn4pSQJywgJ+KUlCcsICfilJgnKTtcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilZAnLCAn4pWQJywgJ+KVlCcsICfilZcnLCAn4pWaJywgJ+KVnScpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX0RPVUJMRV9TSU5HTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilIAnLCAn4pSAJywgJ+KVkycsICfilZYnLCAn4pWZJywgJ+KVnCcpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX1NJTkdMRV9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pSCJywgJ+KUgicsICfilZAnLCAn4pWQJywgJ+KVkicsICfilZUnLCAn4pWYJywgJ+KVmycpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVzIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBib3R0b206IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyID0gMCwgcmlnaHQ6IG51bWJlciA9IDAsIHRvcDogbnVtYmVyID0gMCwgYm90dG9tOiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV2luZG93QmFzZSB9IGZyb20gJy4vd2luZG93JztcclxuaW1wb3J0IHsgQVNDSUlDYW52YXMgfSBmcm9tICcuL2FzY2lpLWNhbnZhcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93Um9vdCBleHRlbmRzIFdpbmRvd0Jhc2Uge1xyXG4gIGVsOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBzdXBlcignLS1+fj09IHJvb3QgPT1+fi0tJyk7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLl9vbldpbmRvd1Jlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgX29uV2luZG93UmVzaXplKCkge1xyXG4gICAgdGhpcy5fdXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUNhbnZhc1NpemUoKSB7XHJcbiAgICAvLyBJIGhhdGUgdGhpc1xyXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnWCc7XHJcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAvLyBUT0RPOiBvcHRpbWl6ZSAoZG91YmxlIGNoYXJhY3RlciBjb3VudCB1bnRpbCBuZXcgaGVpZ2h0IGZvdW5kLCB0aGVuIGJpbmFyeSBzZWFyY2ggYmFjaz8pXHJcbiAgICBmb3IgKDsgdGhpcy5lbC5vZmZzZXRIZWlnaHQgPT09IGJhc2VIZWlnaHQ7IHRoaXMuZWwuaW5uZXJIVE1MICs9ICdYJykge1xyXG4gICAgICAvLyBkZWJ1ZzogY2hhbmdlIHRoZSBmdW5jdGlvbiB0byBhc3luYyBhbmQgZW5hYmxlIHRoZSBmb2xsb3dpbmcgbGluZSB0byB3YXRjaCB0aGUgdXBkYXRlIGdvXHJcbiAgICAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDIwKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoZWlnaHRUd29DaGFycyA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmVsLmlubmVySFRNTC5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJIZWlnaHQgLyAoaGVpZ2h0VHdvQ2hhcnMgLSBiYXNlSGVpZ2h0KSk7XHJcbiAgICB0aGlzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogQVNDSUlDYW52YXMge1xyXG4gICAgV2luZG93QmFzZS5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuY2FudmFzLnJlbmRlcigpO1xyXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCb3JkZXJzLCBTaWRlcyB9IGZyb20gJy4vYm9yZGVycyc7XHJcbmltcG9ydCB7IEFTQ0lJQ2FudmFzIH0gZnJvbSAnLi9hc2NpaS1jYW52YXMnO1xyXG5cclxuLy8gYWJ1c2luZyB0cnV0aGluZXNzIGluIEpTIHRvIG1hcCBob3Jpem9udGFsIHRvIGZhbHNlXHJcbmV4cG9ydCBlbnVtIENoaWxkcmVuRGlyZWN0aW9ucyB7XHJcbiAgaG9yaXpvbnRhbCA9IDAsXHJcbiAgdmVydGljYWwgPSAxLFxyXG59XHJcblxyXG5jbGFzcyBTaXplV2l0aExvY2sge1xyXG4gIHNpemU6IG51bWJlciA9IDA7XHJcbiAgbG9ja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRpdGxlUG9zaXRpb24ge1xyXG4gIGxlZnQgPSAwLFxyXG4gIGNlbnRlciA9IDEsXHJcbiAgcmlnaHQgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93QmFzZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHRpdGxlUG9zaXRpb246IFRpdGxlUG9zaXRpb24gPSBUaXRsZVBvc2l0aW9uLmxlZnQ7XHJcbiAgdGl0bGVTaGlmdCA9IDM7XHJcblxyXG4gIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIGhlaWdodDogbnVtYmVyID0gMDtcclxuICBwYWRkaW5nOiBTaWRlcyA9IG5ldyBTaWRlcygpO1xyXG4gIGJvcmRlcnM6IEJvcmRlcnM7XHJcblxyXG4gIHNpemVNaW4/OiBudW1iZXI7XHJcbiAgc2l6ZU1heD86IG51bWJlcjtcclxuICBzaXplV2VpZ2h0OiBudW1iZXIgPSAxO1xyXG5cclxuICBjaGlsZHJlbjogV2luZG93QmFzZVtdID0gW107XHJcbiAgY29udGVudERpcmVjdGlvbjogQ2hpbGRyZW5EaXJlY3Rpb25zID0gQ2hpbGRyZW5EaXJlY3Rpb25zLnZlcnRpY2FsO1xyXG5cclxuICBjYW52YXM6IEFTQ0lJQ2FudmFzID0gbmV3IEFTQ0lJQ2FudmFzKCk7XHJcbiAgX2xhc3RXaWR0aDogbnVtYmVyO1xyXG4gIF9sYXN0SGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhbmdlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGdldCBpbmRleExlZnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhZGRpbmcubGVmdCArICh0aGlzLmJvcmRlcnM/LmxlZnQgPyAxIDogMCk7XHJcbiAgfVxyXG4gIGdldCBpbmRleFJpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aCAtIHRoaXMucGFkZGluZy5yaWdodCAtICh0aGlzLmJvcmRlcnM/LnJpZ2h0ID8gMSA6IDApIC0gMTtcclxuICB9XHJcbiAgZ2V0IGluZGV4VG9wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nLnRvcCArICh0aGlzLmJvcmRlcnM/LnRvcCA/IDEgOiAwKTtcclxuICB9XHJcbiAgZ2V0IGluZGV4Qm90dG9tKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSB0aGlzLnBhZGRpbmcuYm90dG9tIC0gKHRoaXMuYm9yZGVycz8uYm90dG9tID8gMSA6IDApIC0gMTtcclxuICB9XHJcblxyXG4gIGdldCBpbnRlcmlvckhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5oZWlnaHQgLVxyXG4gICAgICB0aGlzLnBhZGRpbmcudG9wIC1cclxuICAgICAgdGhpcy5wYWRkaW5nLmJvdHRvbSAtXHJcbiAgICAgICh0aGlzLmJvcmRlcnM/LnRvcCA/IDEgOiAwKSAtXHJcbiAgICAgICh0aGlzLmJvcmRlcnM/LmJvdHRvbSA/IDEgOiAwKVxyXG4gICAgKTtcclxuICB9XHJcbiAgZ2V0IGludGVyaW9yV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMud2lkdGggLVxyXG4gICAgICB0aGlzLnBhZGRpbmcubGVmdCAtXHJcbiAgICAgIHRoaXMucGFkZGluZy5yaWdodCAtXHJcbiAgICAgICh0aGlzLmJvcmRlcnM/LmxlZnQgPyAxIDogMCkgLVxyXG4gICAgICAodGhpcy5ib3JkZXJzPy5yaWdodCA/IDEgOiAwKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybnMgaW50ZXJpb3Igc3BhY2UgZm9yIG1haW4gY29udGVudCBkaXJlY3Rpb25cclxuICAgKi9cclxuICBnZXQgY29udGVudFNwYWNlKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50RGlyZWN0aW9uKSByZXR1cm4gdGhpcy5pbnRlcmlvckhlaWdodDtcclxuICAgIHJldHVybiB0aGlzLmludGVyaW9yV2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm5zIGNvbnRlbnQgc3RhcnQgd2l0aGluIGNhbnZhcyBhbG9uZyBtYWluIGNvbnRlbnQgYXhpc1xyXG4gICAqL1xyXG4gIGdldCBjb250ZW50U3RhcnQoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnREaXJlY3Rpb24pIHJldHVybiB0aGlzLmluZGV4VG9wO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXhMZWZ0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJucyBjb250ZW50IGVuZCB3aXRoaW4gY2FudmFzIGFsb25nIG1haW4gY29udGVudCBheGlzXHJcbiAgICovXHJcbiAgZ2V0IGNvbnRlbnRFbmQoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmNvbnRlbnREaXJlY3Rpb24pIHJldHVybiB0aGlzLmluZGV4Qm90dG9tO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXhSaWdodDtcclxuICB9XHJcblxyXG4gIGFkZENoaWxkKGNoaWxkOiBXaW5kb3dCYXNlKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzaXplcyB0aGUgZnJhbWVcclxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBzaXplIGNoYW5nZWRcclxuICAgKi9cclxuICByZXNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCk7XHJcbiAgICBoZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCk7XHJcbiAgICBpZiAodGhpcy53aWR0aCA9PSB3aWR0aCAmJiB0aGlzLmhlaWdodCA9PSBoZWlnaHQpIHJldHVybjtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb3B1bGF0ZXMgYm9yZGVyIGFuZCB0aXRsZSBhcm91bmQgZnJhbWVcclxuICAgKi9cclxuICBmaWxsQm9yZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLmJvcmRlcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHRpdGxlT2Zmc2V0O1xyXG4gICAgaWYgKHRoaXMudGl0bGUpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLnRpdGxlUG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlIFRpdGxlUG9zaXRpb24ubGVmdDpcclxuICAgICAgICAgIHRpdGxlT2Zmc2V0ID0gLXRoaXMudGl0bGVTaGlmdDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVGl0bGVQb3NpdGlvbi5jZW50ZXI6XHJcbiAgICAgICAgICB0aXRsZU9mZnNldCA9IE1hdGguZmxvb3IoLSh0aGlzLndpZHRoIC0gdGhpcy50aXRsZS5sZW5ndGgpIC8gMik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRpdGxlUG9zaXRpb24ucmlnaHQ6XHJcbiAgICAgICAgICB0aXRsZU9mZnNldCA9IC0odGhpcy53aWR0aCAtIHRoaXMudGl0bGUubGVuZ3RoIC0gdGhpcy50aXRsZVNoaWZ0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLmxlZnQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmhlaWdodCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0KHRoaXMuYm9yZGVycy5sZWZ0LCAwLCBpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5yaWdodCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuaGVpZ2h0IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXQodGhpcy5ib3JkZXJzLnJpZ2h0LCB0aGlzLndpZHRoIC0gMSwgaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMudG9wKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy53aWR0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRpdGxlT2Zmc2V0Kys7XHJcbiAgICAgICAgaWYgKHRoaXMudGl0bGUgJiYgdGl0bGVPZmZzZXQgPj0gMCAmJiB0aXRsZU9mZnNldCA8IHRoaXMudGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdCh0aGlzLnRpdGxlW3RpdGxlT2Zmc2V0XSwgaSwgMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2FudmFzLnNldEF0KHRoaXMuYm9yZGVycy50b3AsIGksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5ib3R0b20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLndpZHRoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXQodGhpcy5ib3JkZXJzLmJvdHRvbSwgaSwgdGhpcy5oZWlnaHQgLSAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy50b3BMZWZ0KSB0aGlzLmNhbnZhcy5zZXRBdCh0aGlzLmJvcmRlcnMudG9wTGVmdCwgMCwgMCk7XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcFJpZ2h0KSB0aGlzLmNhbnZhcy5zZXRBdCh0aGlzLmJvcmRlcnMudG9wUmlnaHQsIHRoaXMud2lkdGggLSAxLCAwKTtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tTGVmdCkgdGhpcy5jYW52YXMuc2V0QXQodGhpcy5ib3JkZXJzLmJvdHRvbUxlZnQsIDAsIHRoaXMuaGVpZ2h0IC0gMSk7XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLmJvdHRvbVJpZ2h0KVxyXG4gICAgICB0aGlzLmNhbnZhcy5zZXRBdCh0aGlzLmJvcmRlcnMuYm90dG9tUmlnaHQsIHRoaXMud2lkdGggLSAxLCB0aGlzLmhlaWdodCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCk6IEFTQ0lJQ2FudmFzIHtcclxuICAgIGlmICghdGhpcy5jaGFuZ2VkKSByZXR1cm4gdGhpcy5jYW52YXM7XHJcbiAgICB0aGlzLmZpbGxCb3JkZXIoKTtcclxuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLm5lZ290aWF0ZUNoaWxkcmVuU2l6ZSgpO1xyXG4gICAgbGV0IGNvbnRlbnRQb3MgPSB0aGlzLmNvbnRlbnRTdGFydDtcclxuICAgIGlmICh0aGlzLmNvbnRlbnREaXJlY3Rpb24pIHtcclxuICAgICAgLy8gdmVydGljYWxcclxuICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnJlc2l6ZSh0aGlzLmludGVyaW9yV2lkdGgsIHNpemVzW2ldLnNpemUpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkR3JpZCA9IHRoaXMuY2hpbGRyZW5baV0udXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmxpdChjaGlsZEdyaWQsIFt0aGlzLmluZGV4TGVmdCwgY29udGVudFBvc10pO1xyXG4gICAgICAgIGNvbnRlbnRQb3MgKz0gY2hpbGRHcmlkLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaG9yaXpvbnRhbFxyXG4gICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5baV0ucmVzaXplKHNpemVzW2ldLnNpemUsIHRoaXMuaW50ZXJpb3JIZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkR3JpZCA9IHRoaXMuY2hpbGRyZW5baV0udXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmxpdChjaGlsZEdyaWQsIFtjb250ZW50UG9zLCB0aGlzLmluZGV4VG9wXSk7XHJcbiAgICAgICAgY29udGVudFBvcyArPSBjaGlsZEdyaWQud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICB9XHJcblxyXG4gIG5lZ290aWF0ZUNoaWxkcmVuU2l6ZSgpOiBTaXplV2l0aExvY2tbXSB7XHJcbiAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggc29tZSB0ZXN0IGNhc2VzIHRvIHZlcmlmeSB0aGlzIGFjdHVhbGx5IGJlaGF2ZXMgcmlnaHQgKHNpemVzIGNvbWUgb3V0IGNvcnJlY3Qgd2l0aCB2YXJpb3VzIHdlaWdodHMgYW5kIGxpbWl0cywgZWRnZSBjYXNlcyBsaWtlIGZyYWN0aW9uYWwgcmVzdWx0cywgb3ZlcmZsb3dzLCBhbmQgbGVmdG92ZXIgc3BhY2UpXHJcbiAgICAvLyBUT0RPOiBkb2xlIG91dCByZW1haW5kZXJcclxuICAgIGNvbnN0IHNpemVzID0gbmV3IEFycmF5KHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2l6ZXNbaV0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBiZXR0ZXIgZXNjYXBlIGNvbmRpdGlvbiB0aGFuIGp1c3QgXCJjdXQgYWZ0ZXIgdGVuIGxvb3BzXCJcclxuICAgIC8vIFRPRE86IEkgZmVlbCBsaWtlIHRoaXMgY2FuIGJlIGRvbmUgbW9yZSBncmFjZWZ1bGx5IHdpdGhvdXQgaXRlcmF0aW9uXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgbGV0IHdlaWdodFN1bSA9IDA7XHJcbiAgICAgIGxldCBjaGlsZHJlblJlbWFpbmluZyA9IDA7XHJcbiAgICAgIGxldCBsb2NrZWRTaXplID0gMDtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgaiBpbiBzaXplcykge1xyXG4gICAgICAgIGlmIChzaXplc1tqXS5sb2NrZWQpIHtcclxuICAgICAgICAgIGxvY2tlZFNpemUgKz0gc2l6ZXNbal0uc2l6ZTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZHJlblJlbWFpbmluZyArPSAxO1xyXG4gICAgICAgIHdlaWdodFN1bSArPSB0aGlzLmNoaWxkcmVuW2pdLnNpemVXZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGlsZHJlblJlbWFpbmluZyA9PSAwKSB7XHJcbiAgICAgICAgLy8gcmFuIG91dCBvZiBvcHRpb25zXHJcbiAgICAgICAgcmV0dXJuIHNpemVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZW1haW5pbmdTaXplID0gdGhpcy5jb250ZW50U3BhY2UgLSBsb2NrZWRTaXplO1xyXG4gICAgICBpZiAocmVtYWluaW5nU2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgLy8gcmFuIG91dCBvZiBzcGFjZVxyXG4gICAgICAgIHJldHVybiBzaXplcztcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHJlbmVnb3RpYXRlID0gZmFsc2U7XHJcbiAgICAgIGZvciAoY29uc3QgaiBpbiBzaXplcykge1xyXG4gICAgICAgIGlmIChzaXplc1tqXS5sb2NrZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltqXTtcclxuICAgICAgICBzaXplc1tqXS5zaXplID0gKGNoaWxkLnNpemVXZWlnaHQgLyB3ZWlnaHRTdW0pICogcmVtYWluaW5nU2l6ZTtcclxuICAgICAgICBpZiAoY2hpbGQuc2l6ZU1heCAhPT0gdW5kZWZpbmVkICYmIHNpemVzW2pdLnNpemUgPj0gY2hpbGQuc2l6ZU1heCkge1xyXG4gICAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IGNoaWxkLnNpemVNYXg7XHJcbiAgICAgICAgICBzaXplc1tqXS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcmVuZWdvdGlhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5zaXplTWluICE9PSB1bmRlZmluZWQgJiYgc2l6ZXNbal0uc2l6ZSA8PSBjaGlsZC5zaXplTWluKSB7XHJcbiAgICAgICAgICBzaXplc1tqXS5zaXplID0gY2hpbGQuc2l6ZU1pbjtcclxuICAgICAgICAgIHNpemVzW2pdLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICByZW5lZ290aWF0ZSA9IHRydWU7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghcmVuZWdvdGlhdGUpIHtcclxuICAgICAgICAvLyBnb3Qgd2hlcmUgd2Ugd2FudCB0byBiZVxyXG4gICAgICAgIHJldHVybiBzaXplcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpemVzO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gY29weSBiYXNlIGh0bWwgYW5kIGNzc1xyXG5yZXF1aXJlKCdmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XSEuL2luZGV4Lmh0bWwnKTtcclxucmVxdWlyZSgnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9zdHlsZXMuY3NzJyk7XHJcblxyXG5pbXBvcnQgeyBXaW5kb3dSb290IH0gZnJvbSAnLi9pbnRlcmZhY2Uvd2luZG93LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBCb3JkZXJzLCBCT1JERVJfRE9VQkxFLCBCT1JERVJfSU5WSVNJQkxFX1RPUCwgQk9SREVSX1NJTkdMRSB9IGZyb20gJy4vaW50ZXJmYWNlL2JvcmRlcnMnO1xyXG5pbXBvcnQgeyBUaXRsZVBvc2l0aW9uLCBXaW5kb3dCYXNlIH0gZnJvbSAnLi9pbnRlcmZhY2Uvd2luZG93JztcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZycpO1xyXG4gIGNvbnN0IGRvY01haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gIHNldERhcmtNb2RlKHRydWUpO1xyXG4gIGRvY01haW4uaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nO1xyXG5cclxuICBidWlsZFdpbmRvdyhkb2NNYWluKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRXaW5kb3coZWwgPSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgY29uc3Qgd2luZG93TWFuYWdlciA9IG5ldyBXaW5kb3dSb290KGVsKTtcclxuICB3aW5kb3dNYW5hZ2VyLnRpdGxlID0gJ1JPT1QgV0lORE9XJztcclxuICB3aW5kb3dNYW5hZ2VyLmJvcmRlcnMgPSBCT1JERVJfRE9VQkxFO1xyXG4gIHdpbmRvd01hbmFnZXIudGl0bGVQb3NpdGlvbiA9IDI7XHJcbiAgd2luZG93TWFuYWdlci50aXRsZVNoaWZ0ID0gMjM7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnRGcmFtZSA9IG5ldyBXaW5kb3dCYXNlKCdjb250ZW50X2ZyYW1lJyk7XHJcbiAgY29udGVudEZyYW1lLnRpdGxlID0gJ0NPTlRFTlQgRlJBTUUnO1xyXG4gIGNvbnRlbnRGcmFtZS5jb250ZW50RGlyZWN0aW9uID0gMDtcclxuICB3aW5kb3dNYW5hZ2VyLmFkZENoaWxkKGNvbnRlbnRGcmFtZSk7XHJcblxyXG4gIGNvbnN0IG1haW5TY3JlZW4gPSBuZXcgV2luZG93QmFzZSgnbWFpbl9zY3JlZW4nKTtcclxuICBtYWluU2NyZWVuLnRpdGxlID0gJ01BSU4gU0NSRUVOJztcclxuICBtYWluU2NyZWVuLnRpdGxlUG9zaXRpb24gPSAxO1xyXG4gIG1haW5TY3JlZW4uYm9yZGVycyA9IEJPUkRFUl9JTlZJU0lCTEVfVE9QO1xyXG4gIGNvbnRlbnRGcmFtZS5hZGRDaGlsZChtYWluU2NyZWVuKTtcclxuXHJcbiAgY29uc3Qgc3RhdHVzUGFuZWwgPSBuZXcgV2luZG93QmFzZSgnc3RhdHVzX3BhbmVsJyk7XHJcbiAgc3RhdHVzUGFuZWwudGl0bGUgPSAnU1RBVFVTIFBBTkVMJztcclxuICBzdGF0dXNQYW5lbC50aXRsZVBvc2l0aW9uID0gVGl0bGVQb3NpdGlvbi5jZW50ZXI7XHJcbiAgc3RhdHVzUGFuZWwuYm9yZGVycyA9IG5ldyBCb3JkZXJzKCfilIInLCAnJywgJyAnLCAnJywgJ+KUgicsICcnLCAn4pSCJywgJycpO1xyXG4gIHN0YXR1c1BhbmVsLnNpemVXZWlnaHQgPSAwO1xyXG4gIHN0YXR1c1BhbmVsLnNpemVNaW4gPSAyMDtcclxuICBjb250ZW50RnJhbWUuYWRkQ2hpbGQoc3RhdHVzUGFuZWwpO1xyXG5cclxuICBjb25zdCB0ZXh0RmllbGQgPSBuZXcgV2luZG93QmFzZSgndGV4dF9maWVsZCcpO1xyXG4gIHRleHRGaWVsZC50aXRsZSA9ICdURVhUIEZJRUxEJztcclxuICB0ZXh0RmllbGQuYm9yZGVycyA9IG5ldyBCb3JkZXJzKCcnLCAnJywgJ+KUgCcsICcnLCAn4pSAJywgJ+KUgCcsICcnLCAnJyk7XHJcbiAgdGV4dEZpZWxkLnNpemVNaW4gPSAzO1xyXG4gIHRleHRGaWVsZC5zaXplV2VpZ2h0ID0gMDtcclxuICB3aW5kb3dNYW5hZ2VyLmFkZENoaWxkKHRleHRGaWVsZCk7XHJcblxyXG4gIHdpbmRvd01hbmFnZXIuY2hhbmdlZCA9IHRydWU7XHJcbiAgd2luZG93TWFuYWdlci51cGRhdGUoKTtcclxufVxyXG5cclxubWFpbigpO1xyXG5cclxuZnVuY3Rpb24gc2V0RGFya01vZGUoZGFyazogYm9vbGVhbikge1xyXG4gIGNvbnN0IENMQVNTX0RBUksgPSAnZGFyayc7XHJcbiAgaWYgKGRhcmsgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RBUkspKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfREFSSyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghZGFyayAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EQVJLKSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX0RBUkspO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=