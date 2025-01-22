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
        this.titleShift = 3;
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
    windowManager.titleShift = 10;
    var mainScreen = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('main_screen');
    mainScreen.title = 'MAIN SCREEN';
    mainScreen.titlePosition = 1;
    // mainScreen.borders = BORDER_SINGLE_DOUBLE;
    mainScreen.borders = new _interface_borders__WEBPACK_IMPORTED_MODULE_1__.Borders('', '', ' ', '', '╯', '╰', '╮', '╭');
    windowManager.addChild(mainScreen);
    var textField = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('text_field');
    textField.title = 'TEXT FIELD';
    // textField.borders = BORDER_DOUBLE_SINGLE;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUMxRCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsT0FBTztJQUNULENBQUM7SUFDRCxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2UvYm9yZGVycy50cyIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvaW50ZXJmYWNlL3dpbmRvdy1tYW5hZ2VyLnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2Uvd2luZG93LnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yb2d1ZWxpa2UtdGV4dC1hZHZlbnR1cmUvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdHlsZXMuY3NzXCI7IiwiZXhwb3J0IGNsYXNzIEJvcmRlcnMge1xyXG4gIGxlZnQ6IHN0cmluZztcclxuICByaWdodDogc3RyaW5nO1xyXG4gIHRvcDogc3RyaW5nO1xyXG4gIGJvdHRvbTogc3RyaW5nO1xyXG4gIHRvcExlZnQ6IHN0cmluZztcclxuICB0b3BSaWdodDogc3RyaW5nO1xyXG4gIGJvdHRvbUxlZnQ6IHN0cmluZztcclxuICBib3R0b21SaWdodDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbGVmdDogc3RyaW5nID0gJycsXHJcbiAgICByaWdodDogc3RyaW5nID0gJycsXHJcbiAgICB0b3A6IHN0cmluZyA9ICcnLFxyXG4gICAgYm90dG9tOiBzdHJpbmcgPSAnJyxcclxuICAgIHRvcExlZnQ6IHN0cmluZyA9ICcnLFxyXG4gICAgdG9wUmlnaHQ6IHN0cmluZyA9ICcnLFxyXG4gICAgYm90dG9tTGVmdDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b21SaWdodDogc3RyaW5nID0gJydcclxuICApIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMudG9wID0gdG9wLnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMuYm90dG9tID0gYm90dG9tLnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMudG9wTGVmdCA9IHRvcExlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3BSaWdodCA9IHRvcFJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICAgIHRoaXMuYm90dG9tTGVmdCA9IGJvdHRvbUxlZnQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b21SaWdodCA9IGJvdHRvbVJpZ2h0LnN1YnN0cmluZygwLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGEgaGFuZGZ1bCBvZiBoYW5keSBwcmVzZXRzXHJcbmV4cG9ydCBjb25zdCBCT1JERVJfU0lOR0xFID0gbmV3IEJvcmRlcnMoJ+KUgicsICfilIInLCAn4pSAJywgJ+KUgCcsICfilIwnLCAn4pSQJywgJ+KUlCcsICfilJgnKTtcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilZAnLCAn4pWQJywgJ+KVlCcsICfilZcnLCAn4pWaJywgJ+KVnScpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX0RPVUJMRV9TSU5HTEUgPSBuZXcgQm9yZGVycygn4pWRJywgJ+KVkScsICfilIAnLCAn4pSAJywgJ+KVkycsICfilZYnLCAn4pWZJywgJ+KVnCcpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX1NJTkdMRV9ET1VCTEUgPSBuZXcgQm9yZGVycygn4pSCJywgJ+KUgicsICfilZAnLCAn4pWQJywgJ+KVkicsICfilZUnLCAn4pWYJywgJ+KVmycpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVzIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgcmlnaHQ6IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBib3R0b206IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyID0gMCwgcmlnaHQ6IG51bWJlciA9IDAsIHRvcDogbnVtYmVyID0gMCwgYm90dG9tOiBudW1iZXIgPSAwKSB7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV2luZG93QmFzZSwgR3JpZCB9IGZyb20gJy4vd2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dSb290IGV4dGVuZHMgV2luZG93QmFzZSB7XHJcbiAgZWw6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCctLX5+PT0gcm9vdCA9PX5+LS0nKTtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuX29uV2luZG93UmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBfb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICB0aGlzLl91cGRhdGVDYW52YXNTaXplKCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlQ2FudmFzU2l6ZSgpIHtcclxuICAgIC8vIEkgaGF0ZSB0aGlzXHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICdYJztcclxuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcclxuICAgIC8vIFRPRE86IG9wdGltaXplIChkb3VibGUgY2hhcmFjdGVyIGNvdW50IHVudGlsIG5ldyBoZWlnaHQgZm91bmQsIHRoZW4gYmluYXJ5IHNlYXJjaCBiYWNrPylcclxuICAgIGZvciAoOyB0aGlzLmVsLm9mZnNldEhlaWdodCA9PT0gYmFzZUhlaWdodDsgdGhpcy5lbC5pbm5lckhUTUwgKz0gJ1gnKSB7XHJcbiAgICAgIC8vIGRlYnVnOiBjaGFuZ2UgdGhlIGZ1bmN0aW9uIHRvIGFzeW5jIGFuZCBlbmFibGUgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHdhdGNoIHRoZSB1cGRhdGUgZ29cclxuICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgMjApKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhlaWdodFR3b0NoYXJzID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWwuaW5uZXJIVE1MLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAvIChoZWlnaHRUd29DaGFycyAtIGJhc2VIZWlnaHQpKTtcclxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpOiBHcmlkIHtcclxuICAgIHRoaXMuZ3JpZCA9IFdpbmRvd0Jhc2UucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmdyaWQubWFwKChyb3cpID0+IHJvdy5tYXAoZml4U3BhY2VzKS5qb2luKCcnKSkuam9pbignXFxuJyk7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZml4U3BhY2VzKGNoYXIpOiBzdHJpbmcge1xyXG4gIGlmIChjaGFyID09PSAnICcpIHJldHVybiAnJm5ic3AnO1xyXG4gIHJldHVybiBjaGFyO1xyXG59XHJcbiIsImltcG9ydCB7IEJvcmRlcnMsIFNpZGVzIH0gZnJvbSAnLi9ib3JkZXJzJztcclxuXHJcbmV4cG9ydCBlbnVtIENoaWxkcmVuRGlyZWN0aW9ucyB7XHJcbiAgaG9yaXpvbnRhbCA9IDAsXHJcbiAgdmVydGljYWwgPSAxLFxyXG59XHJcblxyXG4vLyBUT0RPOiB0dXJuIGludG8gY2xhc3Mgd2l0aCB3aWR0aCBhbmQgaGVpZ2h0IG1ldGhvZHMsIHNpbXBsZSBjb25zdHJ1Y3RvciwgY29vcmRpbmF0ZSBhY2Nlc3MgZm9yIGdldHRpbmcgYW5kIHNldHRpbmcsIHByb3RlY3Rpb25zIGFnYWluc3Qgb3V0IG9mIGJvdW5kcyBhY2Nlc3NcclxuLy8gVE9ETzogbW92ZSBibGl0IGludG8gZ3JpZCBjbGFzcz8gKG1heWJlIGtlZXAgaXQgaW4gV2luZG93QmFzZSwgc28gd2UgY2FuIGtlZXAgdGhlIHByb3RlY3RlZCBtYXJnaW4vYm9yZGVyL3BhZGRpbmcgcmVnaW9uKVxyXG4vLyAgICBhbHRlcm5hdGVseSwgbW92ZSB0byBibGl0LCBqdXN0IHJlbWVtYmVyIHRvIHNjYWxlIGFuZCBvZmZzZXQgY29udGVudHMgYmVmb3JlIGJsaXR0aW5nXHJcbmV4cG9ydCB0eXBlIEdyaWQgPSBzdHJpbmdbXVtdO1xyXG5cclxuZXhwb3J0IHR5cGUgUG9zaXRpb24gPSBbbnVtYmVyLCBudW1iZXJdO1xyXG5jbGFzcyBTaXplV2l0aExvY2sge1xyXG4gIHNpemU6IG51bWJlciA9IDA7XHJcbiAgbG9ja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRpdGxlUG9zaXRpb24ge1xyXG4gIGxlZnQgPSAwLFxyXG4gIGNlbnRlciA9IDEsXHJcbiAgcmlnaHQgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93QmFzZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHRpdGxlUG9zaXRpb246IFRpdGxlUG9zaXRpb24gPSAwO1xyXG4gIHRpdGxlU2hpZnQgPSAzO1xyXG5cclxuICB3aWR0aDogbnVtYmVyID0gMDtcclxuICBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgbWFyZ2luOiBTaWRlcyA9IG5ldyBTaWRlcygpO1xyXG4gIHBhZGRpbmc6IFNpZGVzID0gbmV3IFNpZGVzKCk7XHJcbiAgYm9yZGVyczogQm9yZGVycztcclxuXHJcbiAgc2l6ZU1pbj86IG51bWJlcjtcclxuICBzaXplTWF4PzogbnVtYmVyO1xyXG4gIHNpemVXZWlnaHQ6IG51bWJlciA9IDE7XHJcblxyXG4gIGNoaWxkcmVuOiBXaW5kb3dCYXNlW10gPSBbXTtcclxuICBjaGlsZHJlbkRpcmVjdGlvbjogQ2hpbGRyZW5EaXJlY3Rpb25zID0gMDtcclxuICBncmlkOiBHcmlkID0gW107XHJcbiAgX2xhc3RXaWR0aDogbnVtYmVyO1xyXG4gIF9sYXN0SGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhbmdlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGdldCBpbmRleExlZnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhZGRpbmcubGVmdCArICh0aGlzLmJvcmRlcnMubGVmdCA/IDEgOiAwKTtcclxuICB9XHJcbiAgZ2V0IGluZGV4UmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoIC0gdGhpcy5wYWRkaW5nLnJpZ2h0IC0gKHRoaXMuYm9yZGVycy5yaWdodCA/IDEgOiAwKSAtIDE7XHJcbiAgfVxyXG4gIGdldCBpbmRleFRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFkZGluZy50b3AgKyAodGhpcy5ib3JkZXJzLnRvcCA/IDEgOiAwKTtcclxuICB9XHJcbiAgZ2V0IGluZGV4Qm90dG9tKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSB0aGlzLnBhZGRpbmcuYm90dG9tIC0gKHRoaXMuYm9yZGVycy5ib3R0b20gPyAxIDogMCkgLSAxO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogY2hlY2sgZm9yIG9mZi1ieS1vbmVcclxuICBnZXQgaW50ZXJpb3JIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4Qm90dG9tIC0gdGhpcy5pbmRleFRvcCArIDE7XHJcbiAgfVxyXG4gIGdldCBpbnRlcmlvcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleFJpZ2h0IC0gdGhpcy5pbmRleExlZnQgKyAxO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2hpbGQoY2hpbGQ6IFdpbmRvd0Jhc2UpIHtcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBmcmFtZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2l6ZSBjaGFuZ2VkXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAvLyBUT0RPOiBkb2xlIG91dCByZW1haW5kZXIgaW4gc2l6ZSBuZWdvdGlhdGlvblxyXG4gICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcclxuICAgIGhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcclxuICAgIGlmICh0aGlzLndpZHRoID09IHdpZHRoICYmIHRoaXMuaGVpZ2h0ID09IGhlaWdodCkgcmV0dXJuO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHJlc2l6ZWQgdG8gJHt0aGlzLndpZHRofSB4ICR7dGhpcy5oZWlnaHR9YCk7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoaGVpZ2h0KS5maWxsKFtdKTtcclxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmdyaWQpIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHdpZHRoKS5maWxsKCcgJyk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmZpbGxCb3JkZXIoKTtcclxuICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb3B1bGF0ZXMgdGhlIGJvcmRlciBhcm91bmQgdGhlIGZyYW1lXHJcbiAgICovXHJcbiAgZmlsbEJvcmRlcigpIHtcclxuICAgIGxldCB0aXRsZU9mZnNldDtcclxuICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy50aXRsZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBUaXRsZVBvc2l0aW9uLmxlZnQ6XHJcbiAgICAgICAgICB0aXRsZU9mZnNldCA9IC10aGlzLnRpdGxlU2hpZnQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRpdGxlUG9zaXRpb24uY2VudGVyOlxyXG4gICAgICAgICAgdGl0bGVPZmZzZXQgPSBNYXRoLmZsb29yKC0odGhpcy53aWR0aCAtIHRoaXMudGl0bGUubGVuZ3RoKSAvIDIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBUaXRsZVBvc2l0aW9uLnJpZ2h0OlxyXG4gICAgICAgICAgdGl0bGVPZmZzZXQgPSAtKHRoaXMud2lkdGggLSB0aGlzLnRpdGxlLmxlbmd0aCAtIHRoaXMudGl0bGVTaGlmdCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmJvcmRlcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5sZWZ0IHx8IHRoaXMuYm9yZGVycy5yaWdodCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5tYXJnaW4udG9wICsgMTsgaSA8IHRoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9yZGVycy5sZWZ0KSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbaV1bdGhpcy5tYXJnaW4ubGVmdF0gPSB0aGlzLmJvcmRlcnMubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm9yZGVycy5yaWdodCkge1xyXG4gICAgICAgICAgdGhpcy5ncmlkW2ldW3RoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodCAtIDFdID0gdGhpcy5ib3JkZXJzLnJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYm9yZGVycy50b3AgfHwgdGhpcy5ib3JkZXJzLmJvdHRvbSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5tYXJnaW4ubGVmdCArIDE7IGkgPCB0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHQgLSAxOyBpKyspIHtcclxuICAgICAgICB0aXRsZU9mZnNldCsrO1xyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMudG9wKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy50aXRsZSAmJiB0aXRsZU9mZnNldCA+PSAwICYmIHRpdGxlT2Zmc2V0IDwgdGhpcy50aXRsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkW3RoaXMubWFyZ2luLnRvcF1baV0gPSB0aGlzLnRpdGxlW3RpdGxlT2Zmc2V0XTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW2ldID0gdGhpcy5ib3JkZXJzLnRvcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm9yZGVycy5ib3R0b20pIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDFdW2ldID0gdGhpcy5ib3JkZXJzLmJvdHRvbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMudG9wTGVmdCkgdGhpcy5ncmlkW3RoaXMubWFyZ2luLnRvcF1bdGhpcy5tYXJnaW4ubGVmdF0gPSB0aGlzLmJvcmRlcnMudG9wTGVmdDtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMudG9wUmlnaHQpXHJcbiAgICAgIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW3RoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodCAtIDFdID0gdGhpcy5ib3JkZXJzLnRvcFJpZ2h0O1xyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5ib3R0b21MZWZ0KVxyXG4gICAgICB0aGlzLmdyaWRbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSAxXVt0aGlzLm1hcmdpbi5sZWZ0XSA9IHRoaXMuYm9yZGVycy5ib3R0b21MZWZ0O1xyXG4gICAgaWYgKHRoaXMuYm9yZGVycy5ib3R0b21SaWdodClcclxuICAgICAgdGhpcy5ncmlkW3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gMV1bdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gMV0gPVxyXG4gICAgICAgIHRoaXMuYm9yZGVycy5ib3R0b21SaWdodDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpOiBHcmlkIHtcclxuICAgIGlmICghdGhpcy5jaGFuZ2VkKSByZXR1cm4gdGhpcy5ncmlkO1xyXG4gICAgdGhpcy5maWxsQm9yZGVyKCk7XHJcbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaXplcyA9IHRoaXMubmVnb3RpYXRlQ2hpbGRyZW5TaXplKCk7XHJcbiAgICBsZXQgeVBvcyA9IHRoaXMuaW5kZXhUb3A7XHJcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICB0aGlzLmNoaWxkcmVuW2ldLnJlc2l6ZSh0aGlzLmludGVyaW9yV2lkdGgsIHNpemVzW2ldLnNpemUpO1xyXG4gICAgICBjb25zdCBjaGlsZEdyaWQgPSB0aGlzLmNoaWxkcmVuW2ldLnVwZGF0ZSgpO1xyXG4gICAgICBbLCB5UG9zXSA9IHRoaXMuYmxpdChjaGlsZEdyaWQsIFt0aGlzLmluZGV4TGVmdCwgeVBvc10pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZ3JpZDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZ3JpZCBzb3VyY2UgdG8gYmxpdCBpbnRvIHRoaXMuZ3JpZFxyXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBjb29yZGluYXRlIG9mIHRvcCBsZWZ0IGNvcm5lciBvZiBncmlkXHJcbiAgICogQHJldHVybnMgeCx5IGNvb3JkaW5hdGVzIG9mIGZpbmlzaGVkIGJsaXQgKGNsaXBzIHRvIHRoaXMuZ3JpZClcclxuICAgKi9cclxuICBibGl0KGdyaWQ6IEdyaWQsIFt4LCB5XTogUG9zaXRpb24pOiBQb3NpdGlvbiB7XHJcbiAgICBjb25zdCBvcmlnaW5YID0geDsgLy8geCBuZWVkcyB0byBnZXQgcmVzZXQgYmFjayBldmVyeSBsb29wIGl0ZXJhdGlvblxyXG4gICAgaWYgKGdyaWQubGVuZ3RoID09PSAwIHx8IGdyaWRbMF0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBjaGlsZFkgPSAwOyBjaGlsZFkgPCBncmlkLmxlbmd0aCAmJiB5IDw9IHRoaXMuaW5kZXhCb3R0b207IGNoaWxkWSsrLCB5KyspIHtcclxuICAgICAgaWYgKHkgPCB0aGlzLmluZGV4VG9wKSBjb250aW51ZTtcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgY2hpbGRYID0gMCwgeCA9IG9yaWdpblg7XHJcbiAgICAgICAgY2hpbGRYIDwgZ3JpZFswXS5sZW5ndGggJiYgeCA8PSB0aGlzLmluZGV4UmlnaHQ7XHJcbiAgICAgICAgY2hpbGRYKyssIHgrK1xyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoeCA8IHRoaXMuaW5kZXhMZWZ0KSBjb250aW51ZTtcclxuICAgICAgICB0aGlzLmdyaWRbeV1beF0gPSBncmlkW2NoaWxkWV1bY2hpbGRYXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBuZWdvdGlhdGVDaGlsZHJlblNpemUoKTogU2l6ZVdpdGhMb2NrW10ge1xyXG4gICAgLy8gVE9ETzogdXBkYXRlIHRvIGFsbG93IGhvcml6XHJcbiAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggc29tZSB0ZXN0IGNhc2VzIHRvIHZlcmlmeSB0aGlzIGFjdHVhbGx5IGJlaGF2ZXMgcmlnaHQgKHNpemVzIGNvbWUgb3V0IGNvcnJlY3Qgd2l0aCB2YXJpb3VzIHdlaWdodHMgYW5kIGxpbWl0cywgZWRnZSBjYXNlcyBsaWtlIGZyYWN0aW9uYWwgcmVzdWx0cywgb3ZlcmZsb3dzLCBhbmQgbGVmdG92ZXIgc3BhY2UpXHJcbiAgICAvLyBUT0RPOiBkb2xlIG91dCByZW1haW5kZXIgKGxvdy1wcmlvcml0eSwgZ2l2ZW4gd2UnbGwgYWx3YXlzIGhhdmUgYSB0ZXh0ZW50cnkgZmllbGQgb2YgZml4ZWQgc2l6ZSB3aGljaCBzZWVtcyB0byBieXBhc3MgdGhlIGlzc3VlKVxyXG4gICAgY29uc3Qgc2l6ZXMgPSBuZXcgQXJyYXkodGhpcy5jaGlsZHJlbi5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzaXplc1tpXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IGJldHRlciBlc2NhcGUgY29uZGl0aW9uIHRoYW4ganVzdCBcImN1dCBhZnRlciB0ZW4gbG9vcHNcIlxyXG4gICAgLy8gVE9ETzogSSBmZWVsIGxpa2UgdGhpcyBjYW4gYmUgZG9uZSBtb3JlIGdyYWNlZnVsbHkgd2l0aG91dCBpdGVyYXRpb25cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICBsZXQgd2VpZ2h0U3VtID0gMDtcclxuICAgICAgbGV0IGNoaWxkcmVuUmVtYWluaW5nID0gMDtcclxuICAgICAgbGV0IGxvY2tlZFNpemUgPSAwO1xyXG4gICAgICAvLyBnZXQgYXZhaWxhYmxlIHNwYWNlXHJcbiAgICAgIGZvciAoY29uc3QgaiBpbiBzaXplcykge1xyXG4gICAgICAgIGlmIChzaXplc1tqXS5sb2NrZWQpIHtcclxuICAgICAgICAgIGxvY2tlZFNpemUgKz0gc2l6ZXNbal0uc2l6ZTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZHJlblJlbWFpbmluZyArPSAxO1xyXG4gICAgICAgIHdlaWdodFN1bSArPSB0aGlzLmNoaWxkcmVuW2pdLnNpemVXZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoaWxkcmVuUmVtYWluaW5nID09IDApIHtcclxuICAgICAgICAvLyByYW4gb3V0IG9mIG9wdGlvbnNcclxuICAgICAgICByZXR1cm4gc2l6ZXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1NpemUgPSB0aGlzLmludGVyaW9ySGVpZ2h0IC0gbG9ja2VkU2l6ZTtcclxuICAgICAgaWYgKHJlbWFpbmluZ1NpemUgPD0gMCkge1xyXG4gICAgICAgIC8vIHJhbiBvdXQgb2Ygc3BhY2VcclxuICAgICAgICByZXR1cm4gc2l6ZXM7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHJlbmVnb3RpYXRlID0gZmFsc2U7XHJcbiAgICAgIGZvciAoY29uc3QgaiBpbiBzaXplcykge1xyXG4gICAgICAgIGlmIChzaXplc1tqXS5sb2NrZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltqXTtcclxuICAgICAgICBzaXplc1tqXS5zaXplID0gKGNoaWxkLnNpemVXZWlnaHQgLyB3ZWlnaHRTdW0pICogcmVtYWluaW5nU2l6ZTtcclxuICAgICAgICBpZiAoY2hpbGQuc2l6ZU1heCAhPT0gdW5kZWZpbmVkICYmIHNpemVzW2pdLnNpemUgPj0gY2hpbGQuc2l6ZU1heCkge1xyXG4gICAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IGNoaWxkLnNpemVNYXg7XHJcbiAgICAgICAgICBzaXplc1tqXS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcmVuZWdvdGlhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5zaXplTWluICE9PSB1bmRlZmluZWQgJiYgc2l6ZXNbal0uc2l6ZSA8PSBjaGlsZC5zaXplTWluKSB7XHJcbiAgICAgICAgICBzaXplc1tqXS5zaXplID0gY2hpbGQuc2l6ZU1pbjtcclxuICAgICAgICAgIHNpemVzW2pdLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICByZW5lZ290aWF0ZSA9IHRydWU7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZW5lZ290aWF0ZSkge1xyXG4gICAgICAgIC8vIGdvdCB3aGVyZSB3ZSB3YW50IHRvIGJlXHJcbiAgICAgICAgcmV0dXJuIHNpemVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2l6ZXM7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBjb3B5IGJhc2UgaHRtbCBhbmQgY3NzXHJcbnJlcXVpcmUoJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vaW5kZXguaHRtbCcpO1xyXG5yZXF1aXJlKCdmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XSEuL3N0eWxlcy5jc3MnKTtcclxuXHJcbmltcG9ydCB7IFdpbmRvd1Jvb3QgfSBmcm9tICcuL2ludGVyZmFjZS93aW5kb3ctbWFuYWdlcic7XHJcbmltcG9ydCB7XHJcbiAgQm9yZGVycyxcclxuICBCT1JERVJfRE9VQkxFLFxyXG4gIEJPUkRFUl9TSU5HTEVfRE9VQkxFLFxyXG4gIEJPUkRFUl9ET1VCTEVfU0lOR0xFLFxyXG59IGZyb20gJy4vaW50ZXJmYWNlL2JvcmRlcnMnO1xyXG5pbXBvcnQgeyBXaW5kb3dCYXNlIH0gZnJvbSAnLi9pbnRlcmZhY2Uvd2luZG93JztcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZycpO1xyXG4gIGNvbnN0IGRvY01haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gIHNldERhcmtNb2RlKHRydWUpO1xyXG4gIGRvY01haW4uaW5uZXJIVE1MID0gJ2xvYWRpbmcuLi4nO1xyXG5cclxuICBidWlsZFdpbmRvdyhkb2NNYWluKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRXaW5kb3coZWwgPSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgY29uc3Qgd2luZG93TWFuYWdlciA9IG5ldyBXaW5kb3dSb290KGVsKTtcclxuICB3aW5kb3dNYW5hZ2VyLnRpdGxlID0gJ1JPT1QgV0lORE9XJztcclxuICB3aW5kb3dNYW5hZ2VyLmJvcmRlcnMgPSBCT1JERVJfRE9VQkxFO1xyXG4gIHdpbmRvd01hbmFnZXIudGl0bGVQb3NpdGlvbiA9IDI7XHJcbiAgd2luZG93TWFuYWdlci50aXRsZVNoaWZ0ID0gMTA7XHJcblxyXG4gIGNvbnN0IG1haW5TY3JlZW4gPSBuZXcgV2luZG93QmFzZSgnbWFpbl9zY3JlZW4nKTtcclxuICBtYWluU2NyZWVuLnRpdGxlID0gJ01BSU4gU0NSRUVOJztcclxuICBtYWluU2NyZWVuLnRpdGxlUG9zaXRpb24gPSAxO1xyXG4gIC8vIG1haW5TY3JlZW4uYm9yZGVycyA9IEJPUkRFUl9TSU5HTEVfRE9VQkxFO1xyXG4gIG1haW5TY3JlZW4uYm9yZGVycyA9IG5ldyBCb3JkZXJzKCcnLCAnJywgJyAnLCAnJywgJ+KVrycsICfilbAnLCAn4pWuJywgJ+KVrScpO1xyXG4gIHdpbmRvd01hbmFnZXIuYWRkQ2hpbGQobWFpblNjcmVlbik7XHJcblxyXG4gIGNvbnN0IHRleHRGaWVsZCA9IG5ldyBXaW5kb3dCYXNlKCd0ZXh0X2ZpZWxkJyk7XHJcbiAgdGV4dEZpZWxkLnRpdGxlID0gJ1RFWFQgRklFTEQnO1xyXG4gIC8vIHRleHRGaWVsZC5ib3JkZXJzID0gQk9SREVSX0RPVUJMRV9TSU5HTEU7XHJcbiAgdGV4dEZpZWxkLmJvcmRlcnMgPSBuZXcgQm9yZGVycygnJywgJycsICfilIAnLCAnJywgJ+KUgCcsICfilIAnLCAnJywgJycpO1xyXG4gIHRleHRGaWVsZC5zaXplTWluID0gMztcclxuICB0ZXh0RmllbGQuc2l6ZVdlaWdodCA9IDA7XHJcbiAgd2luZG93TWFuYWdlci5hZGRDaGlsZCh0ZXh0RmllbGQpO1xyXG4gIHdpbmRvd01hbmFnZXIuY2hhbmdlZCA9IHRydWU7XHJcbiAgd2luZG93TWFuYWdlci51cGRhdGUoKTtcclxufVxyXG5cclxubWFpbigpO1xyXG5cclxuZnVuY3Rpb24gc2V0RGFya01vZGUoZGFyazogYm9vbGVhbikge1xyXG4gIGNvbnN0IENMQVNTX0RBUksgPSAnZGFyayc7XHJcbiAgaWYgKGRhcmsgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RBUkspKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfREFSSyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghZGFyayAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EQVJLKSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX0RBUkspO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=