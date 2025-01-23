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
    ASCIICanvas.prototype.setAt = function (value, position) {
        if (!this.checkBounds(position))
            return;
        this._grid[position[1]][position[0]] = value;
    };
    ASCIICanvas.prototype.clamp = function (_a) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        return [Math.max(Math.min(x, this.width), 0), Math.max(Math.min(y, this.height), 0)];
    };
    /**
     * @param srcGrid source to blit into this canvas
     * @param position top left corner offset
     */
    ASCIICanvas.prototype.blit = function (srcGrid, position) {
        if (srcGrid.width === 0 || srcGrid.height === 0) {
            return;
        }
        for (var srcX = 0, x = position[0]; srcX < srcGrid.width && x <= this.width; srcX++, x++) {
            if (x < 0)
                continue;
            for (var srcY = 0, y = position[1]; srcY < srcGrid.height && y < this.height; srcY++, y++) {
                if (y < 0)
                    continue;
                this.setAt(srcGrid.getAt(srcX, srcY), [x, y]);
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
                this.canvas.setAt(this.borders.left, [0, i]);
            }
        }
        if (this.borders.right) {
            for (var i = 1; i < this.height - 1; i++) {
                this.canvas.setAt(this.borders.right, [this.width - 1, i]);
            }
        }
        if (this.borders.top) {
            for (var i = 1; i < this.width - 1; i++) {
                titleOffset++;
                if (this.title && titleOffset >= 0 && titleOffset < this.title.length) {
                    this.canvas.setAt(this.title[titleOffset], [i, 0]);
                }
                else {
                    this.canvas.setAt(this.borders.top, [i, 0]);
                }
            }
        }
        if (this.borders.bottom) {
            for (var i = 1; i < this.width - 1; i++) {
                this.canvas.setAt(this.borders.bottom, [i, this.height - 1]);
            }
        }
        if (this.borders.topLeft)
            this.canvas.setAt(this.borders.topLeft, [0, 0]);
        if (this.borders.topRight)
            this.canvas.setAt(this.borders.topRight, [this.width - 1, 0]);
        if (this.borders.bottomLeft)
            this.canvas.setAt(this.borders.bottomLeft, [0, this.height - 1]);
        if (this.borders.bottomRight)
            this.canvas.setAt(this.borders.bottomRight, [this.width - 1, this.height - 1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxXQUFXLENBQUMsSUFBYTtJQUNoQyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFDMUIsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUMxRCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsT0FBTztJQUNULENBQUM7SUFDRCxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2UvYXNjaWktY2FudmFzLnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2UvYm9yZGVycy50cyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvaW50ZXJmYWNlL3dpbmRvdy1tYW5hZ2VyLnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2Uvd2luZG93LnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdHlsZXMuY3NzXCI7IiwiaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFTQ0lJQ2FudmFzIHtcclxuICBfZ3JpZDogc3RyaW5nW11bXSA9IG5ldyBBcnJheSgpO1xyXG4gIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIGhlaWdodDogbnVtYmVyID0gMDtcclxuXHJcbiAgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9ncmlkID0gbmV3IEFycmF5KGhlaWdodCkuZmlsbCh1bmRlZmluZWQpO1xyXG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuX2dyaWQpIHtcclxuICAgICAgdGhpcy5fZ3JpZFtpXSA9IG5ldyBBcnJheSh3aWR0aCkuZmlsbCgnICcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBjaGVja0JvdW5kcyhbeCwgeV06IFBvc2l0aW9uKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5fZ3JpZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+PSB0aGlzLndpZHRoIHx8IHkgPj0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRBdCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tCb3VuZHMoW3gsIHldKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB0aGlzLl9ncmlkW3ldW3hdO1xyXG4gIH1cclxuXHJcbiAgc2V0QXQodmFsdWU6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hlY2tCb3VuZHMocG9zaXRpb24pKSByZXR1cm47XHJcbiAgICB0aGlzLl9ncmlkW3Bvc2l0aW9uWzFdXVtwb3NpdGlvblswXV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNsYW1wKFt4LCB5XTogUG9zaXRpb24pOiBQb3NpdGlvbiB7XHJcbiAgICByZXR1cm4gW01hdGgubWF4KE1hdGgubWluKHgsIHRoaXMud2lkdGgpLCAwKSwgTWF0aC5tYXgoTWF0aC5taW4oeSwgdGhpcy5oZWlnaHQpLCAwKV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gc3JjR3JpZCBzb3VyY2UgdG8gYmxpdCBpbnRvIHRoaXMgY2FudmFzXHJcbiAgICogQHBhcmFtIHBvc2l0aW9uIHRvcCBsZWZ0IGNvcm5lciBvZmZzZXRcclxuICAgKi9cclxuICBibGl0KHNyY0dyaWQ6IEFTQ0lJQ2FudmFzLCBwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgIGlmIChzcmNHcmlkLndpZHRoID09PSAwIHx8IHNyY0dyaWQuaGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBzcmNYID0gMCwgeCA9IHBvc2l0aW9uWzBdOyBzcmNYIDwgc3JjR3JpZC53aWR0aCAmJiB4IDw9IHRoaXMud2lkdGg7IHNyY1grKywgeCsrKSB7XHJcbiAgICAgIGlmICh4IDwgMCkgY29udGludWU7XHJcbiAgICAgIGZvciAobGV0IHNyY1kgPSAwLCB5ID0gcG9zaXRpb25bMV07IHNyY1kgPCBzcmNHcmlkLmhlaWdodCAmJiB5IDwgdGhpcy5oZWlnaHQ7IHNyY1krKywgeSsrKSB7XHJcbiAgICAgICAgaWYgKHkgPCAwKSBjb250aW51ZTtcclxuICAgICAgICB0aGlzLnNldEF0KHNyY0dyaWQuZ2V0QXQoc3JjWCwgc3JjWSksIFt4LCB5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dyaWQubWFwKChyb3cpID0+IHJvdy5tYXAoZml4U3BhY2VzKS5qb2luKCcnKSkuam9pbignXFxuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhTcGFjZXMoY2hhcik6IHN0cmluZyB7XHJcbiAgaWYgKGNoYXIgPT09ICcgJykgcmV0dXJuICcmbmJzcCc7XHJcbiAgcmV0dXJuIGNoYXI7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEJvcmRlcnMge1xyXG4gIGxlZnQ6IHN0cmluZztcclxuICByaWdodDogc3RyaW5nO1xyXG4gIHRvcDogc3RyaW5nO1xyXG4gIGJvdHRvbTogc3RyaW5nO1xyXG4gIHRvcExlZnQ6IHN0cmluZztcclxuICB0b3BSaWdodDogc3RyaW5nO1xyXG4gIGJvdHRvbUxlZnQ6IHN0cmluZztcclxuICBib3R0b21SaWdodDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGVmdDogc3RyaW5nID0gJycsXHJcbiAgICByaWdodDogc3RyaW5nID0gJycsXHJcbiAgICB0b3A6IHN0cmluZyA9ICcnLFxyXG4gICAgYm90dG9tOiBzdHJpbmcgPSAnJyxcclxuICAgIHRvcExlZnQ6IHN0cmluZyA9ICcnLFxyXG4gICAgdG9wUmlnaHQ6IHN0cmluZyA9ICcnLFxyXG4gICAgYm90dG9tTGVmdDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b21SaWdodDogc3RyaW5nID0gJydcclxuICApIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMudG9wID0gdG9wLnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMuYm90dG9tID0gYm90dG9tLnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMudG9wTGVmdCA9IHRvcExlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3BSaWdodCA9IHRvcFJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMuYm90dG9tTGVmdCA9IGJvdHRvbUxlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b21SaWdodCA9IGJvdHRvbVJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGEgaGFuZGZ1bCBvZiBoYW5keSBwcmVzZXRzXHJcbmV4cG9ydCBjb25zdCBCT1JERVJfSU5WSVNJQkxFX1RPUCA9IG5ldyBCb3JkZXJzKCcnLCAnJywgJyAnLCAnJywgJycsICcnLCAnJywgJycpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX1NJTkdMRSA9IG5ldyBCb3JkZXJzKCfilIInLCAn4pSCJywgJ+KUgCcsICfilIAnLCAn4pSMJywgJ+KUkCcsICfilJQnLCAn4pSYJyk7XHJcbmV4cG9ydCBjb25zdCBCT1JERVJfRE9VQkxFID0gbmV3IEJvcmRlcnMoJ+KVkScsICfilZEnLCAn4pWQJywgJ+KVkCcsICfilZQnLCAn4pWXJywgJ+KVmicsICfilZ0nKTtcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9ET1VCTEVfU0lOR0xFID0gbmV3IEJvcmRlcnMoJ+KVkScsICfilZEnLCAn4pSAJywgJ+KUgCcsICfilZMnLCAn4pWWJywgJ+KVmScsICfilZwnKTtcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9TSU5HTEVfRE9VQkxFID0gbmV3IEJvcmRlcnMoJ+KUgicsICfilIInLCAn4pWQJywgJ+KVkCcsICfilZInLCAn4pWVJywgJ+KVmCcsICfilZsnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlcyB7XHJcbiAgbGVmdDogbnVtYmVyO1xyXG4gIHJpZ2h0OiBudW1iZXI7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgYm90dG9tOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciA9IDAsIHJpZ2h0OiBudW1iZXIgPSAwLCB0b3A6IG51bWJlciA9IDAsIGJvdHRvbTogbnVtYmVyID0gMCkge1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgIHRoaXMudG9wID0gdG9wO1xyXG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFdpbmRvd0Jhc2UgfSBmcm9tICcuL3dpbmRvdyc7XHJcbmltcG9ydCB7IEFTQ0lJQ2FudmFzIH0gZnJvbSAnLi9hc2NpaS1jYW52YXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd1Jvb3QgZXh0ZW5kcyBXaW5kb3dCYXNlIHtcclxuICBlbDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgc3VwZXIoJy0tfn49PSByb290ID09fn4tLScpO1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uV2luZG93UmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5fb25XaW5kb3dSZXNpemUoKTtcclxuICB9XHJcblxyXG4gIF9vbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgIHRoaXMuX3VwZGF0ZUNhbnZhc1NpemUoKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVDYW52YXNTaXplKCkge1xyXG4gICAgLy8gSSBoYXRlIHRoaXNcclxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJ1gnO1xyXG4gICAgY29uc3QgYmFzZUhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgLy8gVE9ETzogb3B0aW1pemUgKGRvdWJsZSBjaGFyYWN0ZXIgY291bnQgdW50aWwgbmV3IGhlaWdodCBmb3VuZCwgdGhlbiBiaW5hcnkgc2VhcmNoIGJhY2s/KVxyXG4gICAgZm9yICg7IHRoaXMuZWwub2Zmc2V0SGVpZ2h0ID09PSBiYXNlSGVpZ2h0OyB0aGlzLmVsLmlubmVySFRNTCArPSAnWCcpIHtcclxuICAgICAgLy8gZGVidWc6IGNoYW5nZSB0aGUgZnVuY3Rpb24gdG8gYXN5bmMgYW5kIGVuYWJsZSB0aGUgZm9sbG93aW5nIGxpbmUgdG8gd2F0Y2ggdGhlIHVwZGF0ZSBnb1xyXG4gICAgICAvLyBhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCAyMCkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGVpZ2h0VHdvQ2hhcnMgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbC5pbm5lckhUTUwubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gKGhlaWdodFR3b0NoYXJzIC0gYmFzZUhlaWdodCkpO1xyXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCk6IEFTQ0lJQ2FudmFzIHtcclxuICAgIFdpbmRvd0Jhc2UucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmNhbnZhcy5yZW5kZXIoKTtcclxuICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQm9yZGVycywgU2lkZXMgfSBmcm9tICcuL2JvcmRlcnMnO1xyXG5pbXBvcnQgeyBBU0NJSUNhbnZhcyB9IGZyb20gJy4vYXNjaWktY2FudmFzJztcclxuXHJcbi8vIGFidXNpbmcgdHJ1dGhpbmVzcyBpbiBKUyB0byBtYXAgaG9yaXpvbnRhbCB0byBmYWxzZVxyXG5leHBvcnQgZW51bSBDaGlsZHJlbkRpcmVjdGlvbnMge1xyXG4gIGhvcml6b250YWwgPSAwLFxyXG4gIHZlcnRpY2FsID0gMSxcclxufVxyXG5cclxuY2xhc3MgU2l6ZVdpdGhMb2NrIHtcclxuICBzaXplOiBudW1iZXIgPSAwO1xyXG4gIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaXRsZVBvc2l0aW9uIHtcclxuICBsZWZ0ID0gMCxcclxuICBjZW50ZXIgPSAxLFxyXG4gIHJpZ2h0ID0gMixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd0Jhc2Uge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICB0aXRsZVBvc2l0aW9uOiBUaXRsZVBvc2l0aW9uID0gVGl0bGVQb3NpdGlvbi5sZWZ0O1xyXG4gIHRpdGxlU2hpZnQgPSAzO1xyXG5cclxuICB3aWR0aDogbnVtYmVyID0gMDtcclxuICBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgcGFkZGluZzogU2lkZXMgPSBuZXcgU2lkZXMoKTtcclxuICBib3JkZXJzOiBCb3JkZXJzO1xyXG5cclxuICBzaXplTWluPzogbnVtYmVyO1xyXG4gIHNpemVNYXg/OiBudW1iZXI7XHJcbiAgc2l6ZVdlaWdodDogbnVtYmVyID0gMTtcclxuXHJcbiAgY2hpbGRyZW46IFdpbmRvd0Jhc2VbXSA9IFtdO1xyXG4gIGNvbnRlbnREaXJlY3Rpb246IENoaWxkcmVuRGlyZWN0aW9ucyA9IENoaWxkcmVuRGlyZWN0aW9ucy52ZXJ0aWNhbDtcclxuXHJcbiAgY2FudmFzOiBBU0NJSUNhbnZhcyA9IG5ldyBBU0NJSUNhbnZhcygpO1xyXG4gIF9sYXN0V2lkdGg6IG51bWJlcjtcclxuICBfbGFzdEhlaWdodDogbnVtYmVyO1xyXG4gIGNoYW5nZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5kZXhMZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nLmxlZnQgKyAodGhpcy5ib3JkZXJzPy5sZWZ0ID8gMSA6IDApO1xyXG4gIH1cclxuICBnZXQgaW5kZXhSaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggLSB0aGlzLnBhZGRpbmcucmlnaHQgLSAodGhpcy5ib3JkZXJzPy5yaWdodCA/IDEgOiAwKSAtIDE7XHJcbiAgfVxyXG4gIGdldCBpbmRleFRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFkZGluZy50b3AgKyAodGhpcy5ib3JkZXJzPy50b3AgPyAxIDogMCk7XHJcbiAgfVxyXG4gIGdldCBpbmRleEJvdHRvbSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC0gdGhpcy5wYWRkaW5nLmJvdHRvbSAtICh0aGlzLmJvcmRlcnM/LmJvdHRvbSA/IDEgOiAwKSAtIDE7XHJcbiAgfVxyXG5cclxuICBnZXQgaW50ZXJpb3JIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaGVpZ2h0IC1cclxuICAgICAgdGhpcy5wYWRkaW5nLnRvcCAtXHJcbiAgICAgIHRoaXMucGFkZGluZy5ib3R0b20gLVxyXG4gICAgICAodGhpcy5ib3JkZXJzPy50b3AgPyAxIDogMCkgLVxyXG4gICAgICAodGhpcy5ib3JkZXJzPy5ib3R0b20gPyAxIDogMClcclxuICAgICk7XHJcbiAgfVxyXG4gIGdldCBpbnRlcmlvcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLndpZHRoIC1cclxuICAgICAgdGhpcy5wYWRkaW5nLmxlZnQgLVxyXG4gICAgICB0aGlzLnBhZGRpbmcucmlnaHQgLVxyXG4gICAgICAodGhpcy5ib3JkZXJzPy5sZWZ0ID8gMSA6IDApIC1cclxuICAgICAgKHRoaXMuYm9yZGVycz8ucmlnaHQgPyAxIDogMClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm5zIGludGVyaW9yIHNwYWNlIGZvciBtYWluIGNvbnRlbnQgZGlyZWN0aW9uXHJcbiAgICovXHJcbiAgZ2V0IGNvbnRlbnRTcGFjZSgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY29udGVudERpcmVjdGlvbikgcmV0dXJuIHRoaXMuaW50ZXJpb3JIZWlnaHQ7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRlcmlvcldpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJucyBjb250ZW50IHN0YXJ0IHdpdGhpbiBjYW52YXMgYWxvbmcgbWFpbiBjb250ZW50IGF4aXNcclxuICAgKi9cclxuICBnZXQgY29udGVudFN0YXJ0KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50RGlyZWN0aW9uKSByZXR1cm4gdGhpcy5pbmRleFRvcDtcclxuICAgIHJldHVybiB0aGlzLmluZGV4TGVmdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybnMgY29udGVudCBlbmQgd2l0aGluIGNhbnZhcyBhbG9uZyBtYWluIGNvbnRlbnQgYXhpc1xyXG4gICAqL1xyXG4gIGdldCBjb250ZW50RW5kKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50RGlyZWN0aW9uKSByZXR1cm4gdGhpcy5pbmRleEJvdHRvbTtcclxuICAgIHJldHVybiB0aGlzLmluZGV4UmlnaHQ7XHJcbiAgfVxyXG5cclxuICBhZGRDaGlsZChjaGlsZDogV2luZG93QmFzZSkge1xyXG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2l6ZXMgdGhlIGZyYW1lXHJcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2l6ZSBjaGFuZ2VkXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICB3aWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpO1xyXG4gICAgaGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpO1xyXG4gICAgaWYgKHRoaXMud2lkdGggPT0gd2lkdGggJiYgdGhpcy5oZWlnaHQgPT0gaGVpZ2h0KSByZXR1cm47XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUG9wdWxhdGVzIGJvcmRlciBhbmQgdGl0bGUgYXJvdW5kIGZyYW1lXHJcbiAgICovXHJcbiAgZmlsbEJvcmRlcigpIHtcclxuICAgIGlmICghdGhpcy5ib3JkZXJzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCB0aXRsZU9mZnNldDtcclxuICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy50aXRsZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBUaXRsZVBvc2l0aW9uLmxlZnQ6XHJcbiAgICAgICAgICB0aXRsZU9mZnNldCA9IC10aGlzLnRpdGxlU2hpZnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRpdGxlUG9zaXRpb24uY2VudGVyOlxyXG4gICAgICAgICAgdGl0bGVPZmZzZXQgPSBNYXRoLmZsb29yKC0odGhpcy53aWR0aCAtIHRoaXMudGl0bGUubGVuZ3RoKSAvIDIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUaXRsZVBvc2l0aW9uLnJpZ2h0OlxyXG4gICAgICAgICAgdGl0bGVPZmZzZXQgPSAtKHRoaXMud2lkdGggLSB0aGlzLnRpdGxlLmxlbmd0aCAtIHRoaXMudGl0bGVTaGlmdCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5sZWZ0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5oZWlnaHQgLSAxOyBpKyspIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdCh0aGlzLmJvcmRlcnMubGVmdCwgWzAsIGldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5yaWdodCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuaGVpZ2h0IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXQodGhpcy5ib3JkZXJzLnJpZ2h0LCBbdGhpcy53aWR0aCAtIDEsIGldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy50b3ApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLndpZHRoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGl0bGVPZmZzZXQrKztcclxuICAgICAgICBpZiAodGhpcy50aXRsZSAmJiB0aXRsZU9mZnNldCA+PSAwICYmIHRpdGxlT2Zmc2V0IDwgdGhpcy50aXRsZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRoaXMuY2FudmFzLnNldEF0KHRoaXMudGl0bGVbdGl0bGVPZmZzZXRdLCBbaSwgMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdCh0aGlzLmJvcmRlcnMudG9wLCBbaSwgMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5ib3R0b20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLndpZHRoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXQodGhpcy5ib3JkZXJzLmJvdHRvbSwgW2ksIHRoaXMuaGVpZ2h0IC0gMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcExlZnQpIHRoaXMuY2FudmFzLnNldEF0KHRoaXMuYm9yZGVycy50b3BMZWZ0LCBbMCwgMF0pO1xyXG4gICAgaWYgKHRoaXMuYm9yZGVycy50b3BSaWdodCkgdGhpcy5jYW52YXMuc2V0QXQodGhpcy5ib3JkZXJzLnRvcFJpZ2h0LCBbdGhpcy53aWR0aCAtIDEsIDBdKTtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tTGVmdCkgdGhpcy5jYW52YXMuc2V0QXQodGhpcy5ib3JkZXJzLmJvdHRvbUxlZnQsIFswLCB0aGlzLmhlaWdodCAtIDFdKTtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tUmlnaHQpXHJcbiAgICAgIHRoaXMuY2FudmFzLnNldEF0KHRoaXMuYm9yZGVycy5ib3R0b21SaWdodCwgW3RoaXMud2lkdGggLSAxLCB0aGlzLmhlaWdodCAtIDFdKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpOiBBU0NJSUNhbnZhcyB7XHJcbiAgICBpZiAoIXRoaXMuY2hhbmdlZCkgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gICAgdGhpcy5maWxsQm9yZGVyKCk7XHJcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpemVzID0gdGhpcy5uZWdvdGlhdGVDaGlsZHJlblNpemUoKTtcclxuICAgIGxldCBjb250ZW50UG9zID0gdGhpcy5jb250ZW50U3RhcnQ7XHJcbiAgICBpZiAodGhpcy5jb250ZW50RGlyZWN0aW9uKSB7XHJcbiAgICAgIC8vIHZlcnRpY2FsXHJcbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZXNpemUodGhpcy5pbnRlcmlvcldpZHRoLCBzaXplc1tpXS5zaXplKTtcclxuICAgICAgICBjb25zdCBjaGlsZEdyaWQgPSB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmJsaXQoY2hpbGRHcmlkLCBbdGhpcy5pbmRleExlZnQsIGNvbnRlbnRQb3NdKTtcclxuICAgICAgICBjb250ZW50UG9zICs9IGNoaWxkR3JpZC5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGhvcml6b250YWxcclxuICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnJlc2l6ZShzaXplc1tpXS5zaXplLCB0aGlzLmludGVyaW9ySGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBjaGlsZEdyaWQgPSB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmJsaXQoY2hpbGRHcmlkLCBbY29udGVudFBvcywgdGhpcy5pbmRleFRvcF0pO1xyXG4gICAgICAgIGNvbnRlbnRQb3MgKz0gY2hpbGRHcmlkLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XHJcbiAgfVxyXG5cclxuICBuZWdvdGlhdGVDaGlsZHJlblNpemUoKTogU2l6ZVdpdGhMb2NrW10ge1xyXG4gICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIHNvbWUgdGVzdCBjYXNlcyB0byB2ZXJpZnkgdGhpcyBhY3R1YWxseSBiZWhhdmVzIHJpZ2h0IChzaXplcyBjb21lIG91dCBjb3JyZWN0IHdpdGggdmFyaW91cyB3ZWlnaHRzIGFuZCBsaW1pdHMsIGVkZ2UgY2FzZXMgbGlrZSBmcmFjdGlvbmFsIHJlc3VsdHMsIG92ZXJmbG93cywgYW5kIGxlZnRvdmVyIHNwYWNlKVxyXG4gICAgLy8gVE9ETzogZG9sZSBvdXQgcmVtYWluZGVyXHJcbiAgICBjb25zdCBzaXplcyA9IG5ldyBBcnJheSh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNpemVzW2ldID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogYmV0dGVyIGVzY2FwZSBjb25kaXRpb24gdGhhbiBqdXN0IFwiY3V0IGFmdGVyIHRlbiBsb29wc1wiXHJcbiAgICAvLyBUT0RPOiBJIGZlZWwgbGlrZSB0aGlzIGNhbiBiZSBkb25lIG1vcmUgZ3JhY2VmdWxseSB3aXRob3V0IGl0ZXJhdGlvblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGxldCB3ZWlnaHRTdW0gPSAwO1xyXG4gICAgICBsZXQgY2hpbGRyZW5SZW1haW5pbmcgPSAwO1xyXG4gICAgICBsZXQgbG9ja2VkU2l6ZSA9IDA7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGogaW4gc2l6ZXMpIHtcclxuICAgICAgICBpZiAoc2l6ZXNbal0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBsb2NrZWRTaXplICs9IHNpemVzW2pdLnNpemU7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGRyZW5SZW1haW5pbmcgKz0gMTtcclxuICAgICAgICB3ZWlnaHRTdW0gKz0gdGhpcy5jaGlsZHJlbltqXS5zaXplV2VpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2hpbGRyZW5SZW1haW5pbmcgPT0gMCkge1xyXG4gICAgICAgIC8vIHJhbiBvdXQgb2Ygb3B0aW9uc1xyXG4gICAgICAgIHJldHVybiBzaXplcztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVtYWluaW5nU2l6ZSA9IHRoaXMuY29udGVudFNwYWNlIC0gbG9ja2VkU2l6ZTtcclxuICAgICAgaWYgKHJlbWFpbmluZ1NpemUgPD0gMCkge1xyXG4gICAgICAgIC8vIHJhbiBvdXQgb2Ygc3BhY2VcclxuICAgICAgICByZXR1cm4gc2l6ZXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCByZW5lZ290aWF0ZSA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGNvbnN0IGogaW4gc2l6ZXMpIHtcclxuICAgICAgICBpZiAoc2l6ZXNbal0ubG9ja2VkKSBjb250aW51ZTtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bal07XHJcbiAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IChjaGlsZC5zaXplV2VpZ2h0IC8gd2VpZ2h0U3VtKSAqIHJlbWFpbmluZ1NpemU7XHJcbiAgICAgICAgaWYgKGNoaWxkLnNpemVNYXggIT09IHVuZGVmaW5lZCAmJiBzaXplc1tqXS5zaXplID49IGNoaWxkLnNpemVNYXgpIHtcclxuICAgICAgICAgIHNpemVzW2pdLnNpemUgPSBjaGlsZC5zaXplTWF4O1xyXG4gICAgICAgICAgc2l6ZXNbal0ubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgIHJlbmVnb3RpYXRlID0gdHJ1ZTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQuc2l6ZU1pbiAhPT0gdW5kZWZpbmVkICYmIHNpemVzW2pdLnNpemUgPD0gY2hpbGQuc2l6ZU1pbikge1xyXG4gICAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IGNoaWxkLnNpemVNaW47XHJcbiAgICAgICAgICBzaXplc1tqXS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcmVuZWdvdGlhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXJlbmVnb3RpYXRlKSB7XHJcbiAgICAgICAgLy8gZ290IHdoZXJlIHdlIHdhbnQgdG8gYmVcclxuICAgICAgICByZXR1cm4gc2l6ZXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzaXplcztcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIGNvcHkgYmFzZSBodG1sIGFuZCBjc3NcclxucmVxdWlyZSgnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9pbmRleC5odG1sJyk7XHJcbnJlcXVpcmUoJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vc3R5bGVzLmNzcycpO1xyXG5cclxuaW1wb3J0IHsgV2luZG93Um9vdCB9IGZyb20gJy4vaW50ZXJmYWNlL3dpbmRvdy1tYW5hZ2VyJztcclxuaW1wb3J0IHsgQm9yZGVycywgQk9SREVSX0RPVUJMRSwgQk9SREVSX0lOVklTSUJMRV9UT1AsIEJPUkRFUl9TSU5HTEUgfSBmcm9tICcuL2ludGVyZmFjZS9ib3JkZXJzJztcclxuaW1wb3J0IHsgVGl0bGVQb3NpdGlvbiwgV2luZG93QmFzZSB9IGZyb20gJy4vaW50ZXJmYWNlL3dpbmRvdyc7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcnKTtcclxuICBjb25zdCBkb2NNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICBzZXREYXJrTW9kZSh0cnVlKTtcclxuICBkb2NNYWluLmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJztcclxuXHJcbiAgYnVpbGRXaW5kb3coZG9jTWFpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkV2luZG93KGVsID0gZG9jdW1lbnQuYm9keSkge1xyXG4gIGNvbnN0IHdpbmRvd01hbmFnZXIgPSBuZXcgV2luZG93Um9vdChlbCk7XHJcbiAgd2luZG93TWFuYWdlci50aXRsZSA9ICdST09UIFdJTkRPVyc7XHJcbiAgd2luZG93TWFuYWdlci5ib3JkZXJzID0gQk9SREVSX0RPVUJMRTtcclxuICB3aW5kb3dNYW5hZ2VyLnRpdGxlUG9zaXRpb24gPSAyO1xyXG4gIHdpbmRvd01hbmFnZXIudGl0bGVTaGlmdCA9IDIzO1xyXG5cclxuICBjb25zdCBjb250ZW50RnJhbWUgPSBuZXcgV2luZG93QmFzZSgnY29udGVudF9mcmFtZScpO1xyXG4gIGNvbnRlbnRGcmFtZS50aXRsZSA9ICdDT05URU5UIEZSQU1FJztcclxuICBjb250ZW50RnJhbWUuY29udGVudERpcmVjdGlvbiA9IDA7XHJcbiAgd2luZG93TWFuYWdlci5hZGRDaGlsZChjb250ZW50RnJhbWUpO1xyXG5cclxuICBjb25zdCBtYWluU2NyZWVuID0gbmV3IFdpbmRvd0Jhc2UoJ21haW5fc2NyZWVuJyk7XHJcbiAgbWFpblNjcmVlbi50aXRsZSA9ICdNQUlOIFNDUkVFTic7XHJcbiAgbWFpblNjcmVlbi50aXRsZVBvc2l0aW9uID0gMTtcclxuICBtYWluU2NyZWVuLmJvcmRlcnMgPSBCT1JERVJfSU5WSVNJQkxFX1RPUDtcclxuICBjb250ZW50RnJhbWUuYWRkQ2hpbGQobWFpblNjcmVlbik7XHJcblxyXG4gIGNvbnN0IHN0YXR1c1BhbmVsID0gbmV3IFdpbmRvd0Jhc2UoJ3N0YXR1c19wYW5lbCcpO1xyXG4gIHN0YXR1c1BhbmVsLnRpdGxlID0gJ1NUQVRVUyBQQU5FTCc7XHJcbiAgc3RhdHVzUGFuZWwudGl0bGVQb3NpdGlvbiA9IFRpdGxlUG9zaXRpb24uY2VudGVyO1xyXG4gIHN0YXR1c1BhbmVsLmJvcmRlcnMgPSBuZXcgQm9yZGVycygn4pSCJywgJycsICcgJywgJycsICfilIInLCAnJywgJ+KUgicsICcnKTtcclxuICBzdGF0dXNQYW5lbC5zaXplV2VpZ2h0ID0gMDtcclxuICBzdGF0dXNQYW5lbC5zaXplTWluID0gMjA7XHJcbiAgY29udGVudEZyYW1lLmFkZENoaWxkKHN0YXR1c1BhbmVsKTtcclxuXHJcbiAgY29uc3QgdGV4dEZpZWxkID0gbmV3IFdpbmRvd0Jhc2UoJ3RleHRfZmllbGQnKTtcclxuICB0ZXh0RmllbGQudGl0bGUgPSAnVEVYVCBGSUVMRCc7XHJcbiAgdGV4dEZpZWxkLmJvcmRlcnMgPSBuZXcgQm9yZGVycygnJywgJycsICfilIAnLCAnJywgJ+KUgCcsICfilIAnLCAnJywgJycpO1xyXG4gIHRleHRGaWVsZC5zaXplTWluID0gMztcclxuICB0ZXh0RmllbGQuc2l6ZVdlaWdodCA9IDA7XHJcbiAgd2luZG93TWFuYWdlci5hZGRDaGlsZCh0ZXh0RmllbGQpO1xyXG5cclxuICB3aW5kb3dNYW5hZ2VyLmNoYW5nZWQgPSB0cnVlO1xyXG4gIHdpbmRvd01hbmFnZXIudXBkYXRlKCk7XHJcbn1cclxuXHJcbm1haW4oKTtcclxuXHJcbmZ1bmN0aW9uIHNldERhcmtNb2RlKGRhcms6IGJvb2xlYW4pIHtcclxuICBjb25zdCBDTEFTU19EQVJLID0gJ2RhcmsnO1xyXG4gIGlmIChkYXJrICYmICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EQVJLKSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX0RBUkspO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoIWRhcmsgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfREFSSykpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19EQVJLKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9