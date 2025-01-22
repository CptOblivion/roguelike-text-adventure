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
var TITLE_OFFSET = 3;
var WindowBase = /** @class */ (function () {
    function WindowBase(name) {
        this.titlePosition = 0;
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
                case 0:
                    titleOffset = -TITLE_OFFSET;
                    break;
                case 1:
                    titleOffset = Math.floor(-(this.width - this.title.length) / 2);
                    break;
                case 2:
                    titleOffset = -this.width + this.title.length + TITLE_OFFSET;
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
    windowManager.title = 'WINDOW MANAGER';
    windowManager.borders = _interface_borders__WEBPACK_IMPORTED_MODULE_1__.BORDER_DOUBLE;
    var mainScreen = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('main_screen');
    mainScreen.title = 'MAIN SCREEN';
    mainScreen.titlePosition = 1;
    // mainScreen.borders = BORDER_SINGLE_DOUBLE;
    mainScreen.borders = new _interface_borders__WEBPACK_IMPORTED_MODULE_1__.Borders('', '', ' ', '', ' ', ' ', '', '');
    windowManager.addChild(mainScreen);
    var textField = new _interface_window__WEBPACK_IMPORTED_MODULE_2__.WindowBase('text_field');
    textField.title = 'TEXT FIELD';
    textField.titlePosition = 2;
    // textField.borders = BORDER_DOUBLE_SINGLE;
    textField.borders = new _interface_borders__WEBPACK_IMPORTED_MODULE_1__.Borders('', '', '─', '', '─', '─', '', '');
    textField.sizeMin = 4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxPQUFPO0lBQ1QsQ0FBQztJQUNELElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDMUQsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2ludGVyZmFjZS9ib3JkZXJzLnRzIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9pbnRlcmZhY2Uvd2luZG93LW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlLy4vc3JjL2ludGVyZmFjZS93aW5kb3cudHMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9ndWVsaWtlLXRleHQtYWR2ZW50dXJlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvZ3VlbGlrZS10ZXh0LWFkdmVudHVyZS8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0eWxlcy5jc3NcIjsiLCJleHBvcnQgY2xhc3MgQm9yZGVycyB7XHJcbiAgbGVmdDogc3RyaW5nO1xyXG4gIHJpZ2h0OiBzdHJpbmc7XHJcbiAgdG9wOiBzdHJpbmc7XHJcbiAgYm90dG9tOiBzdHJpbmc7XHJcbiAgdG9wTGVmdDogc3RyaW5nO1xyXG4gIHRvcFJpZ2h0OiBzdHJpbmc7XHJcbiAgYm90dG9tTGVmdDogc3RyaW5nO1xyXG4gIGJvdHRvbVJpZ2h0OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBsZWZ0OiBzdHJpbmcgPSAnJyxcclxuICAgIHJpZ2h0OiBzdHJpbmcgPSAnJyxcclxuICAgIHRvcDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b206IHN0cmluZyA9ICcnLFxyXG4gICAgdG9wTGVmdDogc3RyaW5nID0gJycsXHJcbiAgICB0b3BSaWdodDogc3RyaW5nID0gJycsXHJcbiAgICBib3R0b21MZWZ0OiBzdHJpbmcgPSAnJyxcclxuICAgIGJvdHRvbVJpZ2h0OiBzdHJpbmcgPSAnJ1xyXG4gICkge1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3AgPSB0b3Auc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b20gPSBib3R0b20uc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy50b3BMZWZ0ID0gdG9wTGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLnRvcFJpZ2h0ID0gdG9wUmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgdGhpcy5ib3R0b21MZWZ0ID0gYm90dG9tTGVmdC5zdWJzdHJpbmcoMCwgMSk7XHJcbiAgICB0aGlzLmJvdHRvbVJpZ2h0ID0gYm90dG9tUmlnaHQuc3Vic3RyaW5nKDAsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYSBoYW5kZnVsIG9mIGhhbmR5IHByZXNldHNcclxuZXhwb3J0IGNvbnN0IEJPUkRFUl9TSU5HTEUgPSBuZXcgQm9yZGVycygn4pSCJywgJ+KUgicsICfilIAnLCAn4pSAJywgJ+KUjCcsICfilJAnLCAn4pSUJywgJ+KUmCcpO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX0RPVUJMRSA9IG5ldyBCb3JkZXJzKCfilZEnLCAn4pWRJywgJ+KVkCcsICfilZAnLCAn4pWUJywgJ+KVlycsICfilZonLCAn4pWdJyk7XHJcbmV4cG9ydCBjb25zdCBCT1JERVJfRE9VQkxFX1NJTkdMRSA9IG5ldyBCb3JkZXJzKCfilZEnLCAn4pWRJywgJ+KUgCcsICfilIAnLCAn4pWTJywgJ+KVlicsICfilZknLCAn4pWcJyk7XHJcbmV4cG9ydCBjb25zdCBCT1JERVJfU0lOR0xFX0RPVUJMRSA9IG5ldyBCb3JkZXJzKCfilIInLCAn4pSCJywgJ+KVkCcsICfilZAnLCAn4pWSJywgJ+KVlScsICfilZgnLCAn4pWbJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZXMge1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICByaWdodDogbnVtYmVyO1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGJvdHRvbTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIgPSAwLCByaWdodDogbnVtYmVyID0gMCwgdG9wOiBudW1iZXIgPSAwLCBib3R0b206IG51bWJlciA9IDApIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB0aGlzLnRvcCA9IHRvcDtcclxuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBXaW5kb3dCYXNlLCBHcmlkIH0gZnJvbSAnLi93aW5kb3cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd1Jvb3QgZXh0ZW5kcyBXaW5kb3dCYXNlIHtcclxuICBlbDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgc3VwZXIoJy0tfn49PSByb290ID09fn4tLScpO1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uV2luZG93UmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5fb25XaW5kb3dSZXNpemUoKTtcclxuICB9XHJcblxyXG4gIF9vbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgIHRoaXMuX3VwZGF0ZUNhbnZhc1NpemUoKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVDYW52YXNTaXplKCkge1xyXG4gICAgLy8gSSBoYXRlIHRoaXNcclxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJ1gnO1xyXG4gICAgY29uc3QgYmFzZUhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgLy8gVE9ETzogb3B0aW1pemUgKGRvdWJsZSBjaGFyYWN0ZXIgY291bnQgdW50aWwgbmV3IGhlaWdodCBmb3VuZCwgdGhlbiBiaW5hcnkgc2VhcmNoIGJhY2s/KVxyXG4gICAgZm9yICg7IHRoaXMuZWwub2Zmc2V0SGVpZ2h0ID09PSBiYXNlSGVpZ2h0OyB0aGlzLmVsLmlubmVySFRNTCArPSAnWCcpIHtcclxuICAgICAgLy8gZGVidWc6IGNoYW5nZSB0aGUgZnVuY3Rpb24gdG8gYXN5bmMgYW5kIGVuYWJsZSB0aGUgZm9sbG93aW5nIGxpbmUgdG8gd2F0Y2ggdGhlIHVwZGF0ZSBnb1xyXG4gICAgICAvLyBhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCAyMCkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGVpZ2h0VHdvQ2hhcnMgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbC5pbm5lckhUTUwubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gKGhlaWdodFR3b0NoYXJzIC0gYmFzZUhlaWdodCkpO1xyXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCk6IEdyaWQge1xyXG4gICAgdGhpcy5ncmlkID0gV2luZG93QmFzZS5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuZ3JpZC5tYXAoKHJvdykgPT4gcm93Lm1hcChmaXhTcGFjZXMpLmpvaW4oJycpKS5qb2luKCdcXG4nKTtcclxuICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhTcGFjZXMoY2hhcik6IHN0cmluZyB7XHJcbiAgaWYgKGNoYXIgPT09ICcgJykgcmV0dXJuICcmbmJzcCc7XHJcbiAgcmV0dXJuIGNoYXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQm9yZGVycywgU2lkZXMgfSBmcm9tICcuL2JvcmRlcnMnO1xyXG5cclxuZXhwb3J0IGVudW0gQ2hpbGRyZW5EaXJlY3Rpb25zIHtcclxuICBob3Jpem9udGFsID0gMCxcclxuICB2ZXJ0aWNhbCA9IDEsXHJcbn1cclxuXHJcbi8vIFRPRE86IHR1cm4gaW50byBjbGFzcyB3aXRoIHdpZHRoIGFuZCBoZWlnaHQgbWV0aG9kcywgc2ltcGxlIGNvbnN0cnVjdG9yLCBjb29yZGluYXRlIGFjY2VzcyBmb3IgZ2V0dGluZyBhbmQgc2V0dGluZywgcHJvdGVjdGlvbnMgYWdhaW5zdCBvdXQgb2YgYm91bmRzIGFjY2Vzc1xyXG4vLyBUT0RPOiBtb3ZlIGJsaXQgaW50byBncmlkIGNsYXNzPyAobWF5YmUga2VlcCBpdCBpbiBXaW5kb3dCYXNlLCBzbyB3ZSBjYW4ga2VlcCB0aGUgcHJvdGVjdGVkIG1hcmdpbi9ib3JkZXIvcGFkZGluZyByZWdpb24pXHJcbi8vICAgIGFsdGVybmF0ZWx5LCBtb3ZlIHRvIGJsaXQsIGp1c3QgcmVtZW1iZXIgdG8gc2NhbGUgYW5kIG9mZnNldCBjb250ZW50cyBiZWZvcmUgYmxpdHRpbmdcclxuZXhwb3J0IHR5cGUgR3JpZCA9IHN0cmluZ1tdW107XHJcblxyXG5leHBvcnQgdHlwZSBQb3NpdGlvbiA9IFtudW1iZXIsIG51bWJlcl07XHJcbmNsYXNzIFNpemVXaXRoTG9jayB7XHJcbiAgc2l6ZTogbnVtYmVyID0gMDtcclxuICBsb2NrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGl0bGVQb3NpdGlvbiB7XHJcbiAgbGVmdCA9IDAsXHJcbiAgY2VudGVyID0gMSxcclxuICByaWdodCA9IDIsXHJcbn1cclxuXHJcbmNvbnN0IFRJVExFX09GRlNFVCA9IDM7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93QmFzZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIHRpdGxlUG9zaXRpb246IFRpdGxlUG9zaXRpb24gPSAwO1xyXG5cclxuICB3aWR0aDogbnVtYmVyID0gMDtcclxuICBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgbWFyZ2luOiBTaWRlcyA9IG5ldyBTaWRlcygpO1xyXG4gIHBhZGRpbmc6IFNpZGVzID0gbmV3IFNpZGVzKCk7XHJcbiAgYm9yZGVyczogQm9yZGVycztcclxuXHJcbiAgc2l6ZU1pbj86IG51bWJlcjtcclxuICBzaXplTWF4PzogbnVtYmVyO1xyXG4gIHNpemVXZWlnaHQ6IG51bWJlciA9IDE7XHJcblxyXG4gIGNoaWxkcmVuOiBXaW5kb3dCYXNlW10gPSBbXTtcclxuICBjaGlsZHJlbkRpcmVjdGlvbjogQ2hpbGRyZW5EaXJlY3Rpb25zID0gMDtcclxuICBncmlkOiBHcmlkID0gW107XHJcbiAgX2xhc3RXaWR0aDogbnVtYmVyO1xyXG4gIF9sYXN0SGVpZ2h0OiBudW1iZXI7XHJcbiAgY2hhbmdlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGdldCBpbmRleExlZnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhZGRpbmcubGVmdCArICh0aGlzLmJvcmRlcnMubGVmdCA/IDEgOiAwKTtcclxuICB9XHJcbiAgZ2V0IGluZGV4UmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoIC0gdGhpcy5wYWRkaW5nLnJpZ2h0IC0gKHRoaXMuYm9yZGVycy5yaWdodCA/IDEgOiAwKSAtIDE7XHJcbiAgfVxyXG4gIGdldCBpbmRleFRvcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFkZGluZy50b3AgKyAodGhpcy5ib3JkZXJzLnRvcCA/IDEgOiAwKTtcclxuICB9XHJcbiAgZ2V0IGluZGV4Qm90dG9tKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSB0aGlzLnBhZGRpbmcuYm90dG9tIC0gKHRoaXMuYm9yZGVycy5ib3R0b20gPyAxIDogMCkgLSAxO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogY2hlY2sgZm9yIG9mZi1ieS1vbmVcclxuICBnZXQgaW50ZXJpb3JIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4Qm90dG9tIC0gdGhpcy5pbmRleFRvcCArIDE7XHJcbiAgfVxyXG4gIGdldCBpbnRlcmlvcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleFJpZ2h0IC0gdGhpcy5pbmRleExlZnQgKyAxO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2hpbGQoY2hpbGQ6IFdpbmRvd0Jhc2UpIHtcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemVzIHRoZSBmcmFtZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2l6ZSBjaGFuZ2VkXHJcbiAgICovXHJcbiAgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAvLyBUT0RPOiBkb2xlIG91dCByZW1haW5kZXIgaW4gc2l6ZSBuZWdvdGlhdGlvblxyXG4gICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcclxuICAgIGhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcclxuICAgIGlmICh0aGlzLndpZHRoID09IHdpZHRoICYmIHRoaXMuaGVpZ2h0ID09IGhlaWdodCkgcmV0dXJuO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHJlc2l6ZWQgdG8gJHt0aGlzLndpZHRofSB4ICR7dGhpcy5oZWlnaHR9YCk7XHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkoaGVpZ2h0KS5maWxsKFtdKTtcclxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmdyaWQpIHtcclxuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHdpZHRoKS5maWxsKCcgJyk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLmZpbGxCb3JkZXIoKTtcclxuICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb3B1bGF0ZXMgdGhlIGJvcmRlciBhcm91bmQgdGhlIGZyYW1lXHJcbiAgICovXHJcbiAgZmlsbEJvcmRlcigpIHtcclxuICAgIGxldCB0aXRsZU9mZnNldDtcclxuICAgIGlmICh0aGlzLnRpdGxlKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy50aXRsZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGl0bGVPZmZzZXQgPSAtVElUTEVfT0ZGU0VUO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGl0bGVPZmZzZXQgPSBNYXRoLmZsb29yKC0odGhpcy53aWR0aCAtIHRoaXMudGl0bGUubGVuZ3RoKSAvIDIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGl0bGVPZmZzZXQgPSAtdGhpcy53aWR0aCArIHRoaXMudGl0bGUubGVuZ3RoICsgVElUTEVfT0ZGU0VUO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghdGhpcy5ib3JkZXJzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMubGVmdCB8fCB0aGlzLmJvcmRlcnMucmlnaHQpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWFyZ2luLnRvcCArIDE7IGkgPCB0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMubGVmdCkge1xyXG4gICAgICAgICAgdGhpcy5ncmlkW2ldW3RoaXMubWFyZ2luLmxlZnRdID0gdGhpcy5ib3JkZXJzLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMucmlnaHQpIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZFtpXVt0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHQgLSAxXSA9IHRoaXMuYm9yZGVycy5yaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvcmRlcnMudG9wIHx8IHRoaXMuYm9yZGVycy5ib3R0b20pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMubWFyZ2luLmxlZnQgKyAxOyBpIDwgdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLnJpZ2h0IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGl0bGVPZmZzZXQrKztcclxuICAgICAgICBpZiAodGhpcy5ib3JkZXJzLnRvcCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMudGl0bGUgJiYgdGl0bGVPZmZzZXQgPj0gMCAmJiB0aXRsZU9mZnNldCA8IHRoaXMudGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW2ldID0gdGhpcy50aXRsZVt0aXRsZU9mZnNldF07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdyaWRbdGhpcy5tYXJnaW4udG9wXVtpXSA9IHRoaXMuYm9yZGVycy50b3A7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tKSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRbdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSAxXVtpXSA9IHRoaXMuYm9yZGVycy5ib3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcExlZnQpIHRoaXMuZ3JpZFt0aGlzLm1hcmdpbi50b3BdW3RoaXMubWFyZ2luLmxlZnRdID0gdGhpcy5ib3JkZXJzLnRvcExlZnQ7XHJcbiAgICBpZiAodGhpcy5ib3JkZXJzLnRvcFJpZ2h0KVxyXG4gICAgICB0aGlzLmdyaWRbdGhpcy5tYXJnaW4udG9wXVt0aGlzLndpZHRoIC0gdGhpcy5tYXJnaW4ucmlnaHQgLSAxXSA9IHRoaXMuYm9yZGVycy50b3BSaWdodDtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tTGVmdClcclxuICAgICAgdGhpcy5ncmlkW3RoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gMV1bdGhpcy5tYXJnaW4ubGVmdF0gPSB0aGlzLmJvcmRlcnMuYm90dG9tTGVmdDtcclxuICAgIGlmICh0aGlzLmJvcmRlcnMuYm90dG9tUmlnaHQpXHJcbiAgICAgIHRoaXMuZ3JpZFt0aGlzLmhlaWdodCAtIHRoaXMubWFyZ2luLmJvdHRvbSAtIDFdW3RoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5yaWdodCAtIDFdID1cclxuICAgICAgICB0aGlzLmJvcmRlcnMuYm90dG9tUmlnaHQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogR3JpZCB7XHJcbiAgICBpZiAoIXRoaXMuY2hhbmdlZCkgcmV0dXJuIHRoaXMuZ3JpZDtcclxuICAgIHRoaXMuZmlsbEJvcmRlcigpO1xyXG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2l6ZXMgPSB0aGlzLm5lZ290aWF0ZUNoaWxkcmVuU2l6ZSgpO1xyXG4gICAgbGV0IHlQb3MgPSB0aGlzLmluZGV4VG9wO1xyXG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZXNpemUodGhpcy5pbnRlcmlvcldpZHRoLCBzaXplc1tpXS5zaXplKTtcclxuICAgICAgY29uc3QgY2hpbGRHcmlkID0gdGhpcy5jaGlsZHJlbltpXS51cGRhdGUoKTtcclxuICAgICAgWywgeVBvc10gPSB0aGlzLmJsaXQoY2hpbGRHcmlkLCBbdGhpcy5pbmRleExlZnQsIHlQb3NdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGdyaWQgc291cmNlIHRvIGJsaXQgaW50byB0aGlzLmdyaWRcclxuICAgKiBAcGFyYW0gcG9zaXRpb24gY29vcmRpbmF0ZSBvZiB0b3AgbGVmdCBjb3JuZXIgb2YgZ3JpZFxyXG4gICAqIEByZXR1cm5zIHgseSBjb29yZGluYXRlcyBvZiBmaW5pc2hlZCBibGl0IChjbGlwcyB0byB0aGlzLmdyaWQpXHJcbiAgICovXHJcbiAgYmxpdChncmlkOiBHcmlkLCBbeCwgeV06IFBvc2l0aW9uKTogUG9zaXRpb24ge1xyXG4gICAgY29uc3Qgb3JpZ2luWCA9IHg7IC8vIHggbmVlZHMgdG8gZ2V0IHJlc2V0IGJhY2sgZXZlcnkgbG9vcCBpdGVyYXRpb25cclxuICAgIGlmIChncmlkLmxlbmd0aCA9PT0gMCB8fCBncmlkWzBdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY2hpbGRZID0gMDsgY2hpbGRZIDwgZ3JpZC5sZW5ndGggJiYgeSA8PSB0aGlzLmluZGV4Qm90dG9tOyBjaGlsZFkrKywgeSsrKSB7XHJcbiAgICAgIGlmICh5IDwgdGhpcy5pbmRleFRvcCkgY29udGludWU7XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGNoaWxkWCA9IDAsIHggPSBvcmlnaW5YO1xyXG4gICAgICAgIGNoaWxkWCA8IGdyaWRbMF0ubGVuZ3RoICYmIHggPD0gdGhpcy5pbmRleFJpZ2h0O1xyXG4gICAgICAgIGNoaWxkWCsrLCB4KytcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHggPCB0aGlzLmluZGV4TGVmdCkgY29udGludWU7XHJcbiAgICAgICAgdGhpcy5ncmlkW3ldW3hdID0gZ3JpZFtjaGlsZFldW2NoaWxkWF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgbmVnb3RpYXRlQ2hpbGRyZW5TaXplKCk6IFNpemVXaXRoTG9ja1tdIHtcclxuICAgIC8vIFRPRE86IHVwZGF0ZSB0byBhbGxvdyBob3JpelxyXG4gICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIHNvbWUgdGVzdCBjYXNlcyB0byB2ZXJpZnkgdGhpcyBhY3R1YWxseSBiZWhhdmVzIHJpZ2h0IChzaXplcyBjb21lIG91dCBjb3JyZWN0IHdpdGggdmFyaW91cyB3ZWlnaHRzIGFuZCBsaW1pdHMsIGVkZ2UgY2FzZXMgbGlrZSBmcmFjdGlvbmFsIHJlc3VsdHMsIG92ZXJmbG93cywgYW5kIGxlZnRvdmVyIHNwYWNlKVxyXG4gICAgLy8gVE9ETzogZG9sZSBvdXQgcmVtYWluZGVyIChsb3ctcHJpb3JpdHksIGdpdmVuIHdlJ2xsIGFsd2F5cyBoYXZlIGEgdGV4dGVudHJ5IGZpZWxkIG9mIGZpeGVkIHNpemUgd2hpY2ggc2VlbXMgdG8gYnlwYXNzIHRoZSBpc3N1ZSlcclxuICAgIGNvbnN0IHNpemVzID0gbmV3IEFycmF5KHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2l6ZXNbaV0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBiZXR0ZXIgZXNjYXBlIGNvbmRpdGlvbiB0aGFuIGp1c3QgXCJjdXQgYWZ0ZXIgdGVuIGxvb3BzXCJcclxuICAgIC8vIFRPRE86IEkgZmVlbCBsaWtlIHRoaXMgY2FuIGJlIGRvbmUgbW9yZSBncmFjZWZ1bGx5IHdpdGhvdXQgaXRlcmF0aW9uXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgbGV0IHdlaWdodFN1bSA9IDA7XHJcbiAgICAgIGxldCBjaGlsZHJlblJlbWFpbmluZyA9IDA7XHJcbiAgICAgIGxldCBsb2NrZWRTaXplID0gMDtcclxuICAgICAgLy8gZ2V0IGF2YWlsYWJsZSBzcGFjZVxyXG4gICAgICBmb3IgKGNvbnN0IGogaW4gc2l6ZXMpIHtcclxuICAgICAgICBpZiAoc2l6ZXNbal0ubG9ja2VkKSB7XHJcbiAgICAgICAgICBsb2NrZWRTaXplICs9IHNpemVzW2pdLnNpemU7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hpbGRyZW5SZW1haW5pbmcgKz0gMTtcclxuICAgICAgICB3ZWlnaHRTdW0gKz0gdGhpcy5jaGlsZHJlbltqXS5zaXplV2VpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGlsZHJlblJlbWFpbmluZyA9PSAwKSB7XHJcbiAgICAgICAgLy8gcmFuIG91dCBvZiBvcHRpb25zXHJcbiAgICAgICAgcmV0dXJuIHNpemVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZW1haW5pbmdTaXplID0gdGhpcy5pbnRlcmlvckhlaWdodCAtIGxvY2tlZFNpemU7XHJcbiAgICAgIGlmIChyZW1haW5pbmdTaXplIDw9IDApIHtcclxuICAgICAgICAvLyByYW4gb3V0IG9mIHNwYWNlXHJcbiAgICAgICAgcmV0dXJuIHNpemVzO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZW5lZ290aWF0ZSA9IGZhbHNlO1xyXG4gICAgICBmb3IgKGNvbnN0IGogaW4gc2l6ZXMpIHtcclxuICAgICAgICBpZiAoc2l6ZXNbal0ubG9ja2VkKSBjb250aW51ZTtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5bal07XHJcbiAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IChjaGlsZC5zaXplV2VpZ2h0IC8gd2VpZ2h0U3VtKSAqIHJlbWFpbmluZ1NpemU7XHJcbiAgICAgICAgaWYgKGNoaWxkLnNpemVNYXggIT09IHVuZGVmaW5lZCAmJiBzaXplc1tqXS5zaXplID49IGNoaWxkLnNpemVNYXgpIHtcclxuICAgICAgICAgIHNpemVzW2pdLnNpemUgPSBjaGlsZC5zaXplTWF4O1xyXG4gICAgICAgICAgc2l6ZXNbal0ubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgIHJlbmVnb3RpYXRlID0gdHJ1ZTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQuc2l6ZU1pbiAhPT0gdW5kZWZpbmVkICYmIHNpemVzW2pdLnNpemUgPD0gY2hpbGQuc2l6ZU1pbikge1xyXG4gICAgICAgICAgc2l6ZXNbal0uc2l6ZSA9IGNoaWxkLnNpemVNaW47XHJcbiAgICAgICAgICBzaXplc1tqXS5sb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcmVuZWdvdGlhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmVuZWdvdGlhdGUpIHtcclxuICAgICAgICAvLyBnb3Qgd2hlcmUgd2Ugd2FudCB0byBiZVxyXG4gICAgICAgIHJldHVybiBzaXplcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpemVzO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gY29weSBiYXNlIGh0bWwgYW5kIGNzc1xyXG5yZXF1aXJlKCdmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XSEuL2luZGV4Lmh0bWwnKTtcclxucmVxdWlyZSgnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9zdHlsZXMuY3NzJyk7XHJcblxyXG5pbXBvcnQgeyBXaW5kb3dSb290IH0gZnJvbSAnLi9pbnRlcmZhY2Uvd2luZG93LW1hbmFnZXInO1xyXG5pbXBvcnQge1xyXG4gIEJvcmRlcnMsXHJcbiAgQk9SREVSX0RPVUJMRSxcclxuICBCT1JERVJfU0lOR0xFX0RPVUJMRSxcclxuICBCT1JERVJfRE9VQkxFX1NJTkdMRSxcclxufSBmcm9tICcuL2ludGVyZmFjZS9ib3JkZXJzJztcclxuaW1wb3J0IHsgV2luZG93QmFzZSB9IGZyb20gJy4vaW50ZXJmYWNlL3dpbmRvdyc7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcnKTtcclxuICBjb25zdCBkb2NNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICBzZXREYXJrTW9kZSh0cnVlKTtcclxuICBkb2NNYWluLmlubmVySFRNTCA9ICdsb2FkaW5nLi4uJztcclxuXHJcbiAgYnVpbGRXaW5kb3coZG9jTWFpbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkV2luZG93KGVsID0gZG9jdW1lbnQuYm9keSkge1xyXG4gIGNvbnN0IHdpbmRvd01hbmFnZXIgPSBuZXcgV2luZG93Um9vdChlbCk7XHJcbiAgd2luZG93TWFuYWdlci50aXRsZSA9ICdXSU5ET1cgTUFOQUdFUic7XHJcbiAgd2luZG93TWFuYWdlci5ib3JkZXJzID0gQk9SREVSX0RPVUJMRTtcclxuXHJcbiAgY29uc3QgbWFpblNjcmVlbiA9IG5ldyBXaW5kb3dCYXNlKCdtYWluX3NjcmVlbicpO1xyXG4gIG1haW5TY3JlZW4udGl0bGUgPSAnTUFJTiBTQ1JFRU4nO1xyXG4gIG1haW5TY3JlZW4udGl0bGVQb3NpdGlvbiA9IDE7XHJcbiAgLy8gbWFpblNjcmVlbi5ib3JkZXJzID0gQk9SREVSX1NJTkdMRV9ET1VCTEU7XHJcbiAgbWFpblNjcmVlbi5ib3JkZXJzID0gbmV3IEJvcmRlcnMoJycsICcnLCAnICcsICcnLCAnICcsICcgJywgJycsICcnKTtcclxuICB3aW5kb3dNYW5hZ2VyLmFkZENoaWxkKG1haW5TY3JlZW4pO1xyXG5cclxuICBjb25zdCB0ZXh0RmllbGQgPSBuZXcgV2luZG93QmFzZSgndGV4dF9maWVsZCcpO1xyXG4gIHRleHRGaWVsZC50aXRsZSA9ICdURVhUIEZJRUxEJztcclxuICB0ZXh0RmllbGQudGl0bGVQb3NpdGlvbiA9IDI7XHJcbiAgLy8gdGV4dEZpZWxkLmJvcmRlcnMgPSBCT1JERVJfRE9VQkxFX1NJTkdMRTtcclxuICB0ZXh0RmllbGQuYm9yZGVycyA9IG5ldyBCb3JkZXJzKCcnLCAnJywgJ+KUgCcsICcnLCAn4pSAJywgJ+KUgCcsICcnLCAnJyk7XHJcbiAgdGV4dEZpZWxkLnNpemVNaW4gPSA0O1xyXG4gIHRleHRGaWVsZC5zaXplV2VpZ2h0ID0gMDtcclxuICB3aW5kb3dNYW5hZ2VyLmFkZENoaWxkKHRleHRGaWVsZCk7XHJcbiAgd2luZG93TWFuYWdlci5jaGFuZ2VkID0gdHJ1ZTtcclxuICB3aW5kb3dNYW5hZ2VyLnVwZGF0ZSgpO1xyXG59XHJcblxyXG5tYWluKCk7XHJcblxyXG5mdW5jdGlvbiBzZXREYXJrTW9kZShkYXJrOiBib29sZWFuKSB7XHJcbiAgY29uc3QgQ0xBU1NfREFSSyA9ICdkYXJrJztcclxuICBpZiAoZGFyayAmJiAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfREFSSykpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19EQVJLKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKCFkYXJrICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RBUkspKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfREFSSyk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==