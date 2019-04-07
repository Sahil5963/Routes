(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["app"] = factory();
    else
        root["App"] = root["App"] || {}, root["App"]["app"] = factory();
})

(window, function () {
    return /******/ (function (modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function (value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/
            if (mode & 8) return value;
            /******/
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            /******/
            var ns = Object.create(null);
            /******/
            __webpack_require__.r(ns);
            /******/
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/
            if (mode & 2 && typeof value != 'string')
                for (var key in value) __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                }.bind(null, key));
            /******/
            return ns;
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                    return module['default'];
                } :
                /******/
                function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "/";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 33);
        /******/
    })
    /************************************************************************/
    /******/
    ([
        /* 0 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "b", function () {
                return __extends;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return __assign;
            });
            /* unused harmony export __rest */
            /* unused harmony export __decorate */
            /* unused harmony export __param */
            /* unused harmony export __metadata */
            /* unused harmony export __awaiter */
            /* unused harmony export __generator */
            /* unused harmony export __exportStar */
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "d", function () {
                return __values;
            });
            /* unused harmony export __read */
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "c", function () {
                return __spread;
            });
            /* unused harmony export __await */
            /* unused harmony export __asyncGenerator */
            /* unused harmony export __asyncDelegator */
            /* unused harmony export __asyncValues */
            /* unused harmony export __makeTemplateObject */
            /* unused harmony export __importStar */
            /* unused harmony export __importDefault */
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */

            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({
                            __proto__: []
                        }
                        instanceof Array && function (d, b) {
                            d.__proto__ = b;
                        }) ||
                    function (d, b) {
                        for (var p in b)
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                    };
                return extendStatics(d, b);
            };

            function __extends(d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                }
                return __assign.apply(this, arguments);
            }

            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                        if (e.indexOf(p[i]) < 0)
                            t[p[i]] = s[p[i]];
                return t;
            }

            function __decorate(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }

            function __param(paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                }
            }

            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
            }

            function __awaiter(thisArg, _arguments, P, generator) {
                return new(P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }

                    function step(result) {
                        result.done ? resolve(result.value) : new P(function (resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }

            function __generator(thisArg, body) {
                var _ = {
                        label: 0,
                        sent: function () {
                            if (t[0] & 1) throw t[1];
                            return t[1];
                        },
                        trys: [],
                        ops: []
                    },
                    f, y, t, g;
                return g = {
                    next: verb(0),
                    "throw": verb(1),
                    "return": verb(2)
                }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
                    return this;
                }), g;

                function verb(n) {
                    return function (v) {
                        return step([n, v]);
                    };
                }

                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [6, e];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            }

            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
            }

            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator],
                    i = 0;
                if (m) return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length) o = void 0;
                        return {
                            value: o && o[i++],
                            done: !o
                        };
                    }
                };
            }

            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m) return o;
                var i = m.call(o),
                    r, ar = [],
                    e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
                } catch (error) {
                    e = {
                        error: error
                    };
                } finally {
                    try {
                        if (r && !r.done && (m = i["return"])) m.call(i);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return ar;
            }

            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }

            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }

            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []),
                    i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                    return this;
                }, i;

                function verb(n) {
                    if (g[n]) i[n] = function (v) {
                        return new Promise(function (a, b) {
                            q.push([n, v, a, b]) > 1 || resume(n, v);
                        });
                    };
                }

                function resume(n, v) {
                    try {
                        step(g[n](v));
                    } catch (e) {
                        settle(q[0][3], e);
                    }
                }

                function step(r) {
                    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                }

                function fulfill(value) {
                    resume("next", value);
                }

                function reject(value) {
                    resume("throw", value);
                }

                function settle(f, v) {
                    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
                }
            }

            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) {
                    throw e;
                }), verb("return"), i[Symbol.iterator] = function () {
                    return this;
                }, i;

                function verb(n, f) {
                    i[n] = o[n] ? function (v) {
                        return (p = !p) ? {
                            value: __await(o[n](v)),
                            done: n === "return"
                        } : f ? f(v) : v;
                    } : f;
                }
            }

            function __asyncValues(o) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator],
                    i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                    return this;
                }, i);

                function verb(n) {
                    i[n] = o[n] && function (v) {
                        return new Promise(function (resolve, reject) {
                            v = o[n](v), settle(resolve, reject, v.done, v.value);
                        });
                    };
                }

                function settle(resolve, reject, d, v) {
                    Promise.resolve(v).then(function (v) {
                        resolve({
                            value: v,
                            done: d
                        });
                    }, reject);
                }
            }

            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", {
                        value: raw
                    });
                } else {
                    cooked.raw = raw;
                }
                return cooked;
            };

            function __importStar(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                result.default = mod;
                return result;
            }

            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : {
                    default: mod
                };
            }


            /***/
        }),
        /* 1 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return MDCFoundation;
            });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var MDCFoundation = /** @class */ (function () {
                function MDCFoundation(adapter) {
                    if (adapter === void 0) {
                        adapter = {};
                    }
                    this.adapter_ = adapter;
                }
                Object.defineProperty(MDCFoundation, "cssClasses", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports every
                        // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "strings", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports all
                        // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "numbers", {
                    get: function () {
                        // Classes extending MDCFoundation should implement this method to return an object which exports all
                        // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "defaultAdapter", {
                    get: function () {
                        // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                        // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                        // validation.
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFoundation.prototype.init = function () {
                    // Subclasses should override this method to perform initialization routines (registering events, etc.)
                };
                MDCFoundation.prototype.destroy = function () {
                    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
                };
                return MDCFoundation;
            }());

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* unused harmony default export */
            var _unused_webpack_default_export = (MDCFoundation);
            //# sourceMappingURL=foundation.js.map

            /***/
        }),
        /* 2 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return MDCComponent;
            });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
            /* harmony import */
            var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */


            var MDCComponent = /** @class */ (function () {
                function MDCComponent(root, foundation) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    this.root_ = root;
                    this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__[ /* __spread */ "c"](args));
                    // Note that we initialize foundation here and not within the constructor's default param so that
                    // this.root_ is defined and can be used within the foundation class.
                    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
                    this.foundation_.init();
                    this.initialSyncWithDOM();
                }
                MDCComponent.attachTo = function (root) {
                    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
                    // returns an instantiated component with its root set to that element. Also note that in the cases of
                    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
                    // from getDefaultFoundation().
                    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__[ /* MDCFoundation */ "a"]({}));
                };
                /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
                MDCComponent.prototype.initialize = function () {
                    var _args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _args[_i] = arguments[_i];
                    }
                    // Subclasses can override this to do any additional setup work that would be considered part of a
                    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
                    // initialized. Any additional arguments besides root and foundation will be passed in here.
                };
                MDCComponent.prototype.getDefaultFoundation = function () {
                    // Subclasses must override this method to return a properly configured foundation class for the
                    // component.
                    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
                        'foundation class');
                };
                MDCComponent.prototype.initialSyncWithDOM = function () {
                    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
                    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
                    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
                    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
                };
                MDCComponent.prototype.destroy = function () {
                    // Subclasses may implement this method to release any resources / deregister any listeners they have
                    // attached. An example of this might be deregistering a resize event from the window object.
                    this.foundation_.destroy();
                };
                MDCComponent.prototype.listen = function (evtType, handler) {
                    this.root_.addEventListener(evtType, handler);
                };
                MDCComponent.prototype.unlisten = function (evtType, handler) {
                    this.root_.removeEventListener(evtType, handler);
                };
                /**
                 * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
                 */
                MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
                    if (shouldBubble === void 0) {
                        shouldBubble = false;
                    }
                    var evt;
                    if (typeof CustomEvent === 'function') {
                        evt = new CustomEvent(evtType, {
                            bubbles: shouldBubble,
                            detail: evtData,
                        });
                    } else {
                        evt = document.createEvent('CustomEvent');
                        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
                    }
                    this.root_.dispatchEvent(evt);
                };
                return MDCComponent;
            }());

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* unused harmony default export */
            var _unused_webpack_default_export = (MDCComponent);
            //# sourceMappingURL=component.js.map

            /***/
        }),
        /* 3 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "c", function () {
                return supportsCssVariables;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return applyPassive;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "b", function () {
                return getNormalizedEventCoords;
            });
            /**
             * Stores result from supportsCssVariables to avoid redundant processing to
             * detect CSS custom variable support.
             */
            var supportsCssVariables_;
            /**
             * Stores result from applyPassive to avoid redundant processing to detect
             * passive event listener support.
             */
            var supportsPassive_;

            function detectEdgePseudoVarBug(windowObj) {
                // Detect versions of Edge with buggy var() support
                // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
                var document = windowObj.document;
                var node = document.createElement('div');
                node.className = 'mdc-ripple-surface--test-edge-var-bug';
                document.body.appendChild(node);
                // The bug exists if ::before style ends up propagating to the parent element.
                // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
                // but Firefox is known to support CSS custom properties correctly.
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                var computedStyle = windowObj.getComputedStyle(node);
                var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
                node.remove();
                return hasPseudoVarBug;
            }

            function supportsCssVariables(windowObj, forceRefresh) {
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                var CSS = windowObj.CSS;
                var supportsCssVars = supportsCssVariables_;
                if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
                    return supportsCssVariables_;
                }
                var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
                if (!supportsFunctionPresent) {
                    return false;
                }
                var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
                // See: https://bugs.webkit.org/show_bug.cgi?id=154669
                // See: README section on Safari
                var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
                    CSS.supports('color', '#00000000'));
                if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
                    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
                } else {
                    supportsCssVars = false;
                }
                if (!forceRefresh) {
                    supportsCssVariables_ = supportsCssVars;
                }
                return supportsCssVars;
            }
            /**
             * Determine whether the current browser supports passive event listeners, and
             * if so, use them.
             */
            function applyPassive(globalObj, forceRefresh) {
                if (globalObj === void 0) {
                    globalObj = window;
                }
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                if (supportsPassive_ === undefined || forceRefresh) {
                    var isSupported_1 = false;
                    try {
                        globalObj.document.addEventListener('test', function () {
                            return undefined;
                        }, {
                            get passive() {
                                isSupported_1 = true;
                                return isSupported_1;
                            },
                        });
                    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
                    supportsPassive_ = isSupported_1;
                }
                return supportsPassive_ ? {
                    passive: true
                } : false;
            }

            function getNormalizedEventCoords(evt, pageOffset, clientRect) {
                if (!evt) {
                    return {
                        x: 0,
                        y: 0
                    };
                }
                var x = pageOffset.x,
                    y = pageOffset.y;
                var documentX = x + clientRect.left;
                var documentY = y + clientRect.top;
                var normalizedX;
                var normalizedY;
                // Determine touch point relative to the ripple container.
                if (evt.type === 'touchstart') {
                    var touchEvent = evt;
                    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
                    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
                } else {
                    var mouseEvent = evt;
                    normalizedX = mouseEvent.pageX - documentX;
                    normalizedY = mouseEvent.pageY - documentY;
                }
                return {
                    x: normalizedX,
                    y: normalizedY
                };
            }
            //# sourceMappingURL=util.js.map

            /***/
        }),
        /* 4 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return MDCRipple;
            });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
            /* harmony import */
            var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
            /* harmony import */
            var _material_dom_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
            /* harmony import */
            var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
            /* harmony import */
            var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */





            var MDCRipple = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__[ /* __extends */ "b"](MDCRipple, _super);

                function MDCRipple() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.disabled = false;
                    return _this;
                }
                MDCRipple.attachTo = function (root, opts) {
                    if (opts === void 0) {
                        opts = {
                            isUnbounded: undefined
                        };
                    }
                    var ripple = new MDCRipple(root);
                    // Only override unbounded behavior if option is explicitly specified
                    if (opts.isUnbounded !== undefined) {
                        ripple.unbounded = opts.isUnbounded;
                    }
                    return ripple;
                };
                MDCRipple.createAdapter = function (instance) {
                    return {
                        addClass: function (className) {
                            return instance.root_.classList.add(className);
                        },
                        browserSupportsCssVars: function () {
                            return _util__WEBPACK_IMPORTED_MODULE_4__[ /* supportsCssVariables */ "c"](window);
                        },
                        computeBoundingRect: function () {
                            return instance.root_.getBoundingClientRect();
                        },
                        containsEventTarget: function (target) {
                            return instance.root_.contains(target);
                        },
                        deregisterDocumentInteractionHandler: function (evtType, handler) {
                            return document.documentElement.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__[ /* applyPassive */ "a"]());
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return instance.root_.removeEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__[ /* applyPassive */ "a"]());
                        },
                        deregisterResizeHandler: function (handler) {
                            return window.removeEventListener('resize', handler);
                        },
                        getWindowPageOffset: function () {
                            return ({
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            });
                        },
                        isSurfaceActive: function () {
                            return _material_dom_index__WEBPACK_IMPORTED_MODULE_2__[ /* ponyfill */ "a"].matches(instance.root_, ':active');
                        },
                        isSurfaceDisabled: function () {
                            return Boolean(instance.disabled);
                        },
                        isUnbounded: function () {
                            return Boolean(instance.unbounded);
                        },
                        registerDocumentInteractionHandler: function (evtType, handler) {
                            return document.documentElement.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__[ /* applyPassive */ "a"]());
                        },
                        registerInteractionHandler: function (evtType, handler) {
                            return instance.root_.addEventListener(evtType, handler, _util__WEBPACK_IMPORTED_MODULE_4__[ /* applyPassive */ "a"]());
                        },
                        registerResizeHandler: function (handler) {
                            return window.addEventListener('resize', handler);
                        },
                        removeClass: function (className) {
                            return instance.root_.classList.remove(className);
                        },
                        updateCssVariable: function (varName, value) {
                            return instance.root_.style.setProperty(varName, value);
                        },
                    };
                };
                Object.defineProperty(MDCRipple.prototype, "unbounded", {
                    get: function () {
                        return Boolean(this.unbounded_);
                    },
                    set: function (unbounded) {
                        this.unbounded_ = Boolean(unbounded);
                        this.setUnbounded_();
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRipple.prototype.activate = function () {
                    this.foundation_.activate();
                };
                MDCRipple.prototype.deactivate = function () {
                    this.foundation_.deactivate();
                };
                MDCRipple.prototype.layout = function () {
                    this.foundation_.layout();
                };
                MDCRipple.prototype.getDefaultFoundation = function () {
                    return new _foundation__WEBPACK_IMPORTED_MODULE_3__[ /* MDCRippleFoundation */ "a"](MDCRipple.createAdapter(this));
                };
                MDCRipple.prototype.initialSyncWithDOM = function () {
                    var root = this.root_;
                    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
                };
                /**
                 * Closure Compiler throws an access control error when directly accessing a
                 * protected or private property inside a getter/setter, like unbounded above.
                 * By accessing the protected property inside a method, we solve that problem.
                 * That's why this function exists.
                 */
                MDCRipple.prototype.setUnbounded_ = function () {
                    this.foundation_.setUnbounded(Boolean(this.unbounded_));
                };
                return MDCRipple;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__[ /* MDCComponent */ "a"]));

            //# sourceMappingURL=component.js.map

            /***/
        }),
        /* 5 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "closest", function () {
                return closest;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "matches", function () {
                return matches;
            });
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            /**
             * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
             * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
             */
            function closest(element, selector) {
                if (element.closest) {
                    return element.closest(selector);
                }
                var el = element;
                while (el) {
                    if (matches(el, selector)) {
                        return el;
                    }
                    el = el.parentElement;
                }
                return null;
            }

            function matches(element, selector) {
                var nativeMatches = element.matches ||
                    element.webkitMatchesSelector ||
                    element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }
            //# sourceMappingURL=ponyfill.js.map

            /***/
        }),
        /* 6 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            // EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
            var tslib_es6 = __webpack_require__(0);

            // EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
            var foundation = __webpack_require__(1);

            // CONCATENATED MODULE: ../node_modules/@material/ripple/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                // Ripple is a special case where the "root" component is really a "mixin" of sorts,
                // given that it's an 'upgrade' to an existing component. That being said it is the root
                // CSS class that all other CSS classes derive from.
                BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
                FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
                FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
                ROOT: 'mdc-ripple-upgraded',
                UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
            };
            var strings = {
                VAR_FG_SCALE: '--mdc-ripple-fg-scale',
                VAR_FG_SIZE: '--mdc-ripple-fg-size',
                VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
                VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
                VAR_LEFT: '--mdc-ripple-left',
                VAR_TOP: '--mdc-ripple-top',
            };
            var numbers = {
                DEACTIVATION_TIMEOUT_MS: 225,
                FG_DEACTIVATION_MS: 150,
                INITIAL_ORIGIN_SCALE: 0.6,
                PADDING: 10,
                TAP_DELAY_MS: 300,
            };
            //# sourceMappingURL=constants.js.map
            // EXTERNAL MODULE: ../node_modules/@material/ripple/util.js
            var util = __webpack_require__(3);

            // CONCATENATED MODULE: ../node_modules/@material/ripple/foundation.js
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return foundation_MDCRippleFoundation;
            });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */




            // Activation events registered on the root element of each instance for activation
            var ACTIVATION_EVENT_TYPES = [
                'touchstart', 'pointerdown', 'mousedown', 'keydown',
            ];
            // Deactivation events registered on documentElement when a pointer-related down event occurs
            var POINTER_DEACTIVATION_EVENT_TYPES = [
                'touchend', 'pointerup', 'mouseup', 'contextmenu',
            ];
            // simultaneous nested activations
            var activatedTargets = [];
            var foundation_MDCRippleFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCRippleFoundation, _super);

                function MDCRippleFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.activationAnimationHasEnded_ = false;
                    _this.activationTimer_ = 0;
                    _this.fgDeactivationRemovalTimer_ = 0;
                    _this.fgScale_ = '0';
                    _this.frame_ = {
                        width: 0,
                        height: 0
                    };
                    _this.initialSize_ = 0;
                    _this.layoutFrame_ = 0;
                    _this.maxRadius_ = 0;
                    _this.unboundedCoords_ = {
                        left: 0,
                        top: 0
                    };
                    _this.activationState_ = _this.defaultActivationState_();
                    _this.activationTimerCallback_ = function () {
                        _this.activationAnimationHasEnded_ = true;
                        _this.runDeactivationUXLogicIfReady_();
                    };
                    _this.activateHandler_ = function (e) {
                        return _this.activate_(e);
                    };
                    _this.deactivateHandler_ = function () {
                        return _this.deactivate_();
                    };
                    _this.focusHandler_ = function () {
                        return _this.handleFocus();
                    };
                    _this.blurHandler_ = function () {
                        return _this.handleBlur();
                    };
                    _this.resizeHandler_ = function () {
                        return _this.layout();
                    };
                    return _this;
                }
                Object.defineProperty(MDCRippleFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "strings", {
                    get: function () {
                        return strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "numbers", {
                    get: function () {
                        return numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            browserSupportsCssVars: function () {
                                return true;
                            },
                            computeBoundingRect: function () {
                                return ({
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                });
                            },
                            containsEventTarget: function () {
                                return true;
                            },
                            deregisterDocumentInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterResizeHandler: function () {
                                return undefined;
                            },
                            getWindowPageOffset: function () {
                                return ({
                                    x: 0,
                                    y: 0
                                });
                            },
                            isSurfaceActive: function () {
                                return true;
                            },
                            isSurfaceDisabled: function () {
                                return true;
                            },
                            isUnbounded: function () {
                                return true;
                            },
                            registerDocumentInteractionHandler: function () {
                                return undefined;
                            },
                            registerInteractionHandler: function () {
                                return undefined;
                            },
                            registerResizeHandler: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            updateCssVariable: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRippleFoundation.prototype.init = function () {
                    var _this = this;
                    var supportsPressRipple = this.supportsPressRipple_();
                    this.registerRootHandlers_(supportsPressRipple);
                    if (supportsPressRipple) {
                        var _a = MDCRippleFoundation.cssClasses,
                            ROOT_1 = _a.ROOT,
                            UNBOUNDED_1 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.addClass(ROOT_1);
                            if (_this.adapter_.isUnbounded()) {
                                _this.adapter_.addClass(UNBOUNDED_1);
                                // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                                _this.layoutInternal_();
                            }
                        });
                    }
                };
                MDCRippleFoundation.prototype.destroy = function () {
                    var _this = this;
                    if (this.supportsPressRipple_()) {
                        if (this.activationTimer_) {
                            clearTimeout(this.activationTimer_);
                            this.activationTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                        }
                        if (this.fgDeactivationRemovalTimer_) {
                            clearTimeout(this.fgDeactivationRemovalTimer_);
                            this.fgDeactivationRemovalTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                        }
                        var _a = MDCRippleFoundation.cssClasses,
                            ROOT_2 = _a.ROOT,
                            UNBOUNDED_2 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.removeClass(ROOT_2);
                            _this.adapter_.removeClass(UNBOUNDED_2);
                            _this.removeCssVars_();
                        });
                    }
                    this.deregisterRootHandlers_();
                    this.deregisterDeactivationHandlers_();
                };
                /**
                 * @param evt Optional event containing position information.
                 */
                MDCRippleFoundation.prototype.activate = function (evt) {
                    this.activate_(evt);
                };
                MDCRippleFoundation.prototype.deactivate = function () {
                    this.deactivate_();
                };
                MDCRippleFoundation.prototype.layout = function () {
                    var _this = this;
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                    }
                    this.layoutFrame_ = requestAnimationFrame(function () {
                        _this.layoutInternal_();
                        _this.layoutFrame_ = 0;
                    });
                };
                MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
                    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                    if (unbounded) {
                        this.adapter_.addClass(UNBOUNDED);
                    } else {
                        this.adapter_.removeClass(UNBOUNDED);
                    }
                };
                MDCRippleFoundation.prototype.handleFocus = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.handleBlur = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                /**
                 * We compute this property so that we are not querying information about the client
                 * until the point in time where the foundation requests it. This prevents scenarios where
                 * client-side feature-detection may happen too early, such as when components are rendered on the server
                 * and then initialized at mount time on the client.
                 */
                MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
                    return this.adapter_.browserSupportsCssVars();
                };
                MDCRippleFoundation.prototype.defaultActivationState_ = function () {
                    return {
                        activationEvent: undefined,
                        hasDeactivationUXRun: false,
                        isActivated: false,
                        isProgrammatic: false,
                        wasActivatedByPointer: false,
                        wasElementMadeActive: false,
                    };
                };
                /**
                 * supportsPressRipple Passed from init to save a redundant function call
                 */
                MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
                    var _this = this;
                    if (supportsPressRipple) {
                        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
                        });
                        if (this.adapter_.isUnbounded()) {
                            this.adapter_.registerResizeHandler(this.resizeHandler_);
                        }
                    }
                    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
                };
                MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
                    var _this = this;
                    if (evt.type === 'keydown') {
                        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
                    } else {
                        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                        });
                    }
                };
                MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
                    var _this = this;
                    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
                    });
                    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
                    if (this.adapter_.isUnbounded()) {
                        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                    }
                };
                MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
                    var _this = this;
                    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
                    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                    });
                };
                MDCRippleFoundation.prototype.removeCssVars_ = function () {
                    var _this = this;
                    var rippleStrings = MDCRippleFoundation.strings;
                    var keys = Object.keys(rippleStrings);
                    keys.forEach(function (key) {
                        if (key.indexOf('VAR_') === 0) {
                            _this.adapter_.updateCssVariable(rippleStrings[key], null);
                        }
                    });
                };
                MDCRippleFoundation.prototype.activate_ = function (evt) {
                    var _this = this;
                    if (this.adapter_.isSurfaceDisabled()) {
                        return;
                    }
                    var activationState = this.activationState_;
                    if (activationState.isActivated) {
                        return;
                    }
                    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
                    var previousActivationEvent = this.previousActivationEvent_;
                    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
                    if (isSameInteraction) {
                        return;
                    }
                    activationState.isActivated = true;
                    activationState.isProgrammatic = evt === undefined;
                    activationState.activationEvent = evt;
                    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
                    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
                        return _this.adapter_.containsEventTarget(target);
                    });
                    if (hasActivatedChild) {
                        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                        this.resetActivationState_();
                        return;
                    }
                    if (evt !== undefined) {
                        activatedTargets.push(evt.target);
                        this.registerDeactivationHandlers_(evt);
                    }
                    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
                    if (activationState.wasElementMadeActive) {
                        this.animateActivation_();
                    }
                    requestAnimationFrame(function () {
                        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                        activatedTargets = [];
                        if (!activationState.wasElementMadeActive &&
                            evt !== undefined &&
                            (evt.key === ' ' || evt.keyCode === 32)) {
                            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                            // active states inconsistently when they're called within event handling code:
                            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                            // variable is set within a rAF callback for a submit button interaction (#2241).
                            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                            if (activationState.wasElementMadeActive) {
                                _this.animateActivation_();
                            }
                        }
                        if (!activationState.wasElementMadeActive) {
                            // Reset activation state immediately if element was not made active.
                            _this.activationState_ = _this.defaultActivationState_();
                        }
                    });
                };
                MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
                    return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
                };
                MDCRippleFoundation.prototype.animateActivation_ = function () {
                    var _this = this;
                    var _a = MDCRippleFoundation.strings,
                        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
                        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
                    var _b = MDCRippleFoundation.cssClasses,
                        FG_DEACTIVATION = _b.FG_DEACTIVATION,
                        FG_ACTIVATION = _b.FG_ACTIVATION;
                    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
                    this.layoutInternal_();
                    var translateStart = '';
                    var translateEnd = '';
                    if (!this.adapter_.isUnbounded()) {
                        var _c = this.getFgTranslationCoordinates_(),
                            startPoint = _c.startPoint,
                            endPoint = _c.endPoint;
                        translateStart = startPoint.x + "px, " + startPoint.y + "px";
                        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
                    }
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
                    // Cancel any ongoing activation/deactivation animations
                    clearTimeout(this.activationTimer_);
                    clearTimeout(this.fgDeactivationRemovalTimer_);
                    this.rmBoundedActivationClasses_();
                    this.adapter_.removeClass(FG_DEACTIVATION);
                    // Force layout in order to re-trigger the animation.
                    this.adapter_.computeBoundingRect();
                    this.adapter_.addClass(FG_ACTIVATION);
                    this.activationTimer_ = setTimeout(function () {
                        return _this.activationTimerCallback_();
                    }, DEACTIVATION_TIMEOUT_MS);
                };
                MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
                    var _a = this.activationState_,
                        activationEvent = _a.activationEvent,
                        wasActivatedByPointer = _a.wasActivatedByPointer;
                    var startPoint;
                    if (wasActivatedByPointer) {
                        startPoint = Object(util["b" /* getNormalizedEventCoords */ ])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
                    } else {
                        startPoint = {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2,
                        };
                    }
                    // Center the element around the start point.
                    startPoint = {
                        x: startPoint.x - (this.initialSize_ / 2),
                        y: startPoint.y - (this.initialSize_ / 2),
                    };
                    var endPoint = {
                        x: (this.frame_.width / 2) - (this.initialSize_ / 2),
                        y: (this.frame_.height / 2) - (this.initialSize_ / 2),
                    };
                    return {
                        startPoint: startPoint,
                        endPoint: endPoint
                    };
                };
                MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
                    var _this = this;
                    // This method is called both when a pointing device is released, and when the activation animation ends.
                    // The deactivation animation should only run after both of those occur.
                    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
                    var _a = this.activationState_,
                        hasDeactivationUXRun = _a.hasDeactivationUXRun,
                        isActivated = _a.isActivated;
                    var activationHasEnded = hasDeactivationUXRun || !isActivated;
                    if (activationHasEnded && this.activationAnimationHasEnded_) {
                        this.rmBoundedActivationClasses_();
                        this.adapter_.addClass(FG_DEACTIVATION);
                        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                            _this.adapter_.removeClass(FG_DEACTIVATION);
                        }, numbers.FG_DEACTIVATION_MS);
                    }
                };
                MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
                    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
                    this.adapter_.removeClass(FG_ACTIVATION);
                    this.activationAnimationHasEnded_ = false;
                    this.adapter_.computeBoundingRect();
                };
                MDCRippleFoundation.prototype.resetActivationState_ = function () {
                    var _this = this;
                    this.previousActivationEvent_ = this.activationState_.activationEvent;
                    this.activationState_ = this.defaultActivationState_();
                    // Touch devices may fire additional events for the same interaction within a short time.
                    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
                    setTimeout(function () {
                        return _this.previousActivationEvent_ = undefined;
                    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
                };
                MDCRippleFoundation.prototype.deactivate_ = function () {
                    var _this = this;
                    var activationState = this.activationState_;
                    // This can happen in scenarios such as when you have a keyup event that blurs the element.
                    if (!activationState.isActivated) {
                        return;
                    }
                    var state = tslib_es6["a" /* __assign */ ]({}, activationState);
                    if (activationState.isProgrammatic) {
                        requestAnimationFrame(function () {
                            return _this.animateDeactivation_(state);
                        });
                        this.resetActivationState_();
                    } else {
                        this.deregisterDeactivationHandlers_();
                        requestAnimationFrame(function () {
                            _this.activationState_.hasDeactivationUXRun = true;
                            _this.animateDeactivation_(state);
                            _this.resetActivationState_();
                        });
                    }
                };
                MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
                    var wasActivatedByPointer = _a.wasActivatedByPointer,
                        wasElementMadeActive = _a.wasElementMadeActive;
                    if (wasActivatedByPointer || wasElementMadeActive) {
                        this.runDeactivationUXLogicIfReady_();
                    }
                };
                MDCRippleFoundation.prototype.layoutInternal_ = function () {
                    var _this = this;
                    this.frame_ = this.adapter_.computeBoundingRect();
                    var maxDim = Math.max(this.frame_.height, this.frame_.width);
                    // Surface diameter is treated differently for unbounded vs. bounded ripples.
                    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
                    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
                    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
                    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
                    // `overflow: hidden`.
                    var getBoundedRadius = function () {
                        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
                        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
                    };
                    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
                    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
                    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
                    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
                    this.updateLayoutCssVars_();
                };
                MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
                    var _a = MDCRippleFoundation.strings,
                        VAR_FG_SIZE = _a.VAR_FG_SIZE,
                        VAR_LEFT = _a.VAR_LEFT,
                        VAR_TOP = _a.VAR_TOP,
                        VAR_FG_SCALE = _a.VAR_FG_SCALE;
                    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
                    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
                    if (this.adapter_.isUnbounded()) {
                        this.unboundedCoords_ = {
                            left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                            top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
                        };
                        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
                    }
                };
                return MDCRippleFoundation;
            }(foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var ripple_foundation = (foundation_MDCRippleFoundation);
            //# sourceMappingURL=foundation.js.map

            /***/
        }),
        /* 7 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            // EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
            var tslib_es6 = __webpack_require__(0);

            // EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
            var foundation = __webpack_require__(1);

            // CONCATENATED MODULE: ../node_modules/@material/floating-label/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
                LABEL_SHAKE: 'mdc-floating-label--shake',
                ROOT: 'mdc-floating-label',
            };
            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/floating-label/foundation.js
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return foundation_MDCFloatingLabelFoundation;
            });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCFloatingLabelFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCFloatingLabelFoundation, _super);

                function MDCFloatingLabelFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
                    _this.shakeAnimationEndHandler_ = function () {
                        return _this.handleShakeAnimationEnd_();
                    };
                    return _this;
                }
                Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            getWidth: function () {
                                return 0;
                            },
                            registerInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterInteractionHandler: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFloatingLabelFoundation.prototype.init = function () {
                    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
                };
                MDCFloatingLabelFoundation.prototype.destroy = function () {
                    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
                };
                /**
                 * Returns the width of the label element.
                 */
                MDCFloatingLabelFoundation.prototype.getWidth = function () {
                    return this.adapter_.getWidth();
                };
                /**
                 * Styles the label to produce a shake animation to indicate an error.
                 * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
                 */
                MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
                    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                    if (shouldShake) {
                        this.adapter_.addClass(LABEL_SHAKE);
                    } else {
                        this.adapter_.removeClass(LABEL_SHAKE);
                    }
                };
                /**
                 * Styles the label to float or dock.
                 * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
                 */
                MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
                    var _a = MDCFloatingLabelFoundation.cssClasses,
                        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
                        LABEL_SHAKE = _a.LABEL_SHAKE;
                    if (shouldFloat) {
                        this.adapter_.addClass(LABEL_FLOAT_ABOVE);
                    } else {
                        this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
                        this.adapter_.removeClass(LABEL_SHAKE);
                    }
                };
                MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
                    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
                    this.adapter_.removeClass(LABEL_SHAKE);
                };
                return MDCFloatingLabelFoundation;
            }(foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var floating_label_foundation = (foundation_MDCFloatingLabelFoundation);
            //# sourceMappingURL=foundation.js.map

            /***/
        }),
        /* 8 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var _ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
            /* harmony reexport (module object) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return _ponyfill__WEBPACK_IMPORTED_MODULE_0__;
            });
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */


            //# sourceMappingURL=index.js.map

            /***/
        }),
        /* 9 */
        ,
        /* 10 */
        ,
        /* 11 */
        ,
        /* 12 */
        ,
        /* 13 */
        /***/
        (function (module, exports, __webpack_require__) {

            var tabbable = __webpack_require__(34);
            var xtend = __webpack_require__(35);

            var activeFocusTraps = (function () {
                var trapQueue = [];
                return {
                    activateTrap: function (trap) {
                        if (trapQueue.length > 0) {
                            var activeTrap = trapQueue[trapQueue.length - 1];
                            if (activeTrap !== trap) {
                                activeTrap.pause();
                            }
                        }

                        var trapIndex = trapQueue.indexOf(trap);
                        if (trapIndex === -1) {
                            trapQueue.push(trap);
                        } else {
                            // move this existing trap to the front of the queue
                            trapQueue.splice(trapIndex, 1);
                            trapQueue.push(trap);
                        }
                    },

                    deactivateTrap: function (trap) {
                        var trapIndex = trapQueue.indexOf(trap);
                        if (trapIndex !== -1) {
                            trapQueue.splice(trapIndex, 1);
                        }

                        if (trapQueue.length > 0) {
                            trapQueue[trapQueue.length - 1].unpause();
                        }
                    }
                };
            })();

            function focusTrap(element, userOptions) {
                var doc = document;
                var container =
                    typeof element === 'string' ? doc.querySelector(element) : element;

                var config = xtend({
                        returnFocusOnDeactivate: true,
                        escapeDeactivates: true
                    },
                    userOptions
                );

                var state = {
                    firstTabbableNode: null,
                    lastTabbableNode: null,
                    nodeFocusedBeforeActivation: null,
                    mostRecentlyFocusedNode: null,
                    active: false,
                    paused: false
                };

                var trap = {
                    activate: activate,
                    deactivate: deactivate,
                    pause: pause,
                    unpause: unpause
                };

                return trap;

                function activate(activateOptions) {
                    if (state.active) return;

                    updateTabbableNodes();

                    state.active = true;
                    state.paused = false;
                    state.nodeFocusedBeforeActivation = doc.activeElement;

                    var onActivate =
                        activateOptions && activateOptions.onActivate ?
                        activateOptions.onActivate :
                        config.onActivate;
                    if (onActivate) {
                        onActivate();
                    }

                    addListeners();
                    return trap;
                }

                function deactivate(deactivateOptions) {
                    if (!state.active) return;

                    removeListeners();
                    state.active = false;
                    state.paused = false;

                    activeFocusTraps.deactivateTrap(trap);

                    var onDeactivate =
                        deactivateOptions && deactivateOptions.onDeactivate !== undefined ?
                        deactivateOptions.onDeactivate :
                        config.onDeactivate;
                    if (onDeactivate) {
                        onDeactivate();
                    }

                    var returnFocus =
                        deactivateOptions && deactivateOptions.returnFocus !== undefined ?
                        deactivateOptions.returnFocus :
                        config.returnFocusOnDeactivate;
                    if (returnFocus) {
                        delay(function () {
                            tryFocus(state.nodeFocusedBeforeActivation);
                        });
                    }

                    return trap;
                }

                function pause() {
                    if (state.paused || !state.active) return;
                    state.paused = true;
                    removeListeners();
                }

                function unpause() {
                    if (!state.paused || !state.active) return;
                    state.paused = false;
                    addListeners();
                }

                function addListeners() {
                    if (!state.active) return;

                    // There can be only one listening focus trap at a time
                    activeFocusTraps.activateTrap(trap);

                    updateTabbableNodes();

                    // Delay ensures that the focused element doesn't capture the event
                    // that caused the focus trap activation.
                    delay(function () {
                        tryFocus(getInitialFocusNode());
                    });
                    doc.addEventListener('focusin', checkFocusIn, true);
                    doc.addEventListener('mousedown', checkPointerDown, true);
                    doc.addEventListener('touchstart', checkPointerDown, true);
                    doc.addEventListener('click', checkClick, true);
                    doc.addEventListener('keydown', checkKey, true);

                    return trap;
                }

                function removeListeners() {
                    if (!state.active) return;

                    doc.removeEventListener('focusin', checkFocusIn, true);
                    doc.removeEventListener('mousedown', checkPointerDown, true);
                    doc.removeEventListener('touchstart', checkPointerDown, true);
                    doc.removeEventListener('click', checkClick, true);
                    doc.removeEventListener('keydown', checkKey, true);

                    return trap;
                }

                function getNodeForOption(optionName) {
                    var optionValue = config[optionName];
                    var node = optionValue;
                    if (!optionValue) {
                        return null;
                    }
                    if (typeof optionValue === 'string') {
                        node = doc.querySelector(optionValue);
                        if (!node) {
                            throw new Error('`' + optionName + '` refers to no known node');
                        }
                    }
                    if (typeof optionValue === 'function') {
                        node = optionValue();
                        if (!node) {
                            throw new Error('`' + optionName + '` did not return a node');
                        }
                    }
                    return node;
                }

                function getInitialFocusNode() {
                    var node;
                    if (getNodeForOption('initialFocus') !== null) {
                        node = getNodeForOption('initialFocus');
                    } else if (container.contains(doc.activeElement)) {
                        node = doc.activeElement;
                    } else {
                        node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
                    }

                    if (!node) {
                        throw new Error(
                            "You can't have a focus-trap without at least one focusable element"
                        );
                    }

                    return node;
                }

                // This needs to be done on mousedown and touchstart instead of click
                // so that it precedes the focus event.
                function checkPointerDown(e) {
                    if (container.contains(e.target)) return;
                    if (config.clickOutsideDeactivates) {
                        deactivate({
                            returnFocus: !tabbable.isFocusable(e.target)
                        });
                    } else {
                        e.preventDefault();
                    }
                }

                // In case focus escapes the trap for some strange reason, pull it back in.
                function checkFocusIn(e) {
                    // In Firefox when you Tab out of an iframe the Document is briefly focused.
                    if (container.contains(e.target) || e.target instanceof Document) {
                        return;
                    }
                    e.stopImmediatePropagation();
                    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
                }

                function checkKey(e) {
                    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
                        e.preventDefault();
                        deactivate();
                        return;
                    }
                    if (isTabEvent(e)) {
                        checkTab(e);
                        return;
                    }
                }

                // Hijack Tab events on the first and last focusable nodes of the trap,
                // in order to prevent focus from escaping. If it escapes for even a
                // moment it can end up scrolling the page and causing confusion so we
                // kind of need to capture the action at the keydown phase.
                function checkTab(e) {
                    updateTabbableNodes();
                    if (e.shiftKey && e.target === state.firstTabbableNode) {
                        e.preventDefault();
                        tryFocus(state.lastTabbableNode);
                        return;
                    }
                    if (!e.shiftKey && e.target === state.lastTabbableNode) {
                        e.preventDefault();
                        tryFocus(state.firstTabbableNode);
                        return;
                    }
                }

                function checkClick(e) {
                    if (config.clickOutsideDeactivates) return;
                    if (container.contains(e.target)) return;
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }

                function updateTabbableNodes() {
                    var tabbableNodes = tabbable(container);
                    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
                    state.lastTabbableNode =
                        tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
                }

                function tryFocus(node) {
                    if (node === doc.activeElement) return;
                    if (!node || !node.focus) {
                        tryFocus(getInitialFocusNode());
                        return;
                    }

                    node.focus();
                    state.mostRecentlyFocusedNode = node;
                    if (isSelectableInput(node)) {
                        node.select();
                    }
                }
            }

            function isSelectableInput(node) {
                return (
                    node.tagName &&
                    node.tagName.toLowerCase() === 'input' &&
                    typeof node.select === 'function'
                );
            }

            function isEscapeEvent(e) {
                return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
            }

            function isTabEvent(e) {
                return e.key === 'Tab' || e.keyCode === 9;
            }

            function delay(fn) {
                return setTimeout(fn, 0);
            }

            module.exports = focusTrap;


            /***/
        }),
        /* 14 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            // EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
            var tslib_es6 = __webpack_require__(0);

            // EXTERNAL MODULE: ../node_modules/@material/base/component.js
            var component = __webpack_require__(2);

            // EXTERNAL MODULE: ../node_modules/@material/dom/ponyfill.js
            var ponyfill = __webpack_require__(5);

            // EXTERNAL MODULE: ../node_modules/@material/floating-label/component.js
            var floating_label_component = __webpack_require__(32);

            // EXTERNAL MODULE: ../node_modules/@material/line-ripple/component.js + 2 modules
            var line_ripple_component = __webpack_require__(42);

            // EXTERNAL MODULE: ../node_modules/@material/notched-outline/component.js + 2 modules
            var notched_outline_component = __webpack_require__(41);

            // EXTERNAL MODULE: ../node_modules/@material/ripple/component.js
            var ripple_component = __webpack_require__(4);

            // EXTERNAL MODULE: ../node_modules/@material/ripple/foundation.js + 1 modules
            var ripple_foundation = __webpack_require__(6);

            // EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
            var base_foundation = __webpack_require__(1);

            // CONCATENATED MODULE: ../node_modules/@material/textfield/character-counter/constants.js
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                ROOT: 'mdc-text-field-character-counter',
            };
            var strings = {
                ROOT_SELECTOR: "." + cssClasses.ROOT,
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/character-counter/foundation.js
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTextFieldCharacterCounterFoundation, _super);

                function MDCTextFieldCharacterCounterFoundation(adapter) {
                    return _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
                    get: function () {
                        return strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        return {
                            setContent: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
                    currentLength = Math.min(currentLength, maxLength);
                    this.adapter_.setContent(currentLength + " / " + maxLength);
                };
                return MDCTextFieldCharacterCounterFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var character_counter_foundation = (foundation_MDCTextFieldCharacterCounterFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/character-counter/component.js
            /**
             * @license
             * Copyright 2019 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var component_MDCTextFieldCharacterCounter = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTextFieldCharacterCounter, _super);

                function MDCTextFieldCharacterCounter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTextFieldCharacterCounter.attachTo = function (root) {
                    return new MDCTextFieldCharacterCounter(root);
                };
                Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
                    get: function () {
                        return this.foundation_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = {
                        setContent: function (content) {
                            _this.root_.textContent = content;
                        },
                    };
                    return new foundation_MDCTextFieldCharacterCounterFoundation(adapter);
                };
                return MDCTextFieldCharacterCounter;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var constants_strings = {
                ARIA_CONTROLS: 'aria-controls',
                ICON_SELECTOR: '.mdc-text-field__icon',
                INPUT_SELECTOR: '.mdc-text-field__input',
                LABEL_SELECTOR: '.mdc-floating-label',
                LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
                OUTLINE_SELECTOR: '.mdc-notched-outline',
            };
            var constants_cssClasses = {
                DENSE: 'mdc-text-field--dense',
                DISABLED: 'mdc-text-field--disabled',
                FOCUSED: 'mdc-text-field--focused',
                HELPER_LINE: 'mdc-text-field-helper-line',
                INVALID: 'mdc-text-field--invalid',
                OUTLINED: 'mdc-text-field--outlined',
                ROOT: 'mdc-text-field',
                TEXTAREA: 'mdc-text-field--textarea',
                WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
            };
            var numbers = {
                DENSE_LABEL_SCALE: 0.923,
                LABEL_SCALE: 0.75,
            };
            /**
             * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
             * under the "Validation-related attributes" section.
             */
            var VALIDATION_ATTR_WHITELIST = [
                'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
            ];
            /**
             * Label should always float for these types as they show some UI even if value is empty.
             */
            var ALWAYS_FLOAT_TYPES = [
                'color', 'date', 'datetime-local', 'month', 'range', 'time', 'week',
            ];

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/foundation.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
            var INTERACTION_EVENTS = ['click', 'keydown'];
            var foundation_MDCTextFieldFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTextFieldFoundation, _super);
                /**
                 * @param adapter
                 * @param foundationMap Map from subcomponent names to their subfoundations.
                 */
                function MDCTextFieldFoundation(adapter, foundationMap) {
                    if (foundationMap === void 0) {
                        foundationMap = {};
                    }
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;
                    _this.isFocused_ = false;
                    _this.receivedUserInput_ = false;
                    _this.isValid_ = true;
                    _this.useNativeValidation_ = true;
                    _this.helperText_ = foundationMap.helperText;
                    _this.characterCounter_ = foundationMap.characterCounter;
                    _this.leadingIcon_ = foundationMap.leadingIcon;
                    _this.trailingIcon_ = foundationMap.trailingIcon;
                    _this.inputFocusHandler_ = function () {
                        return _this.activateFocus();
                    };
                    _this.inputBlurHandler_ = function () {
                        return _this.deactivateFocus();
                    };
                    _this.inputInputHandler_ = function () {
                        return _this.handleInput();
                    };
                    _this.setPointerXOffset_ = function (evt) {
                        return _this.setTransformOrigin(evt);
                    };
                    _this.textFieldInteractionHandler_ = function () {
                        return _this.handleTextFieldInteraction();
                    };
                    _this.validationAttributeChangeHandler_ = function (attributesList) {
                        return _this.handleValidationAttributeChange(attributesList);
                    };
                    return _this;
                }
                Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
                    get: function () {
                        return constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "strings", {
                    get: function () {
                        return constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "numbers", {
                    get: function () {
                        return numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
                    get: function () {
                        var type = this.getNativeInput_().type;
                        return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
                    get: function () {
                        return this.shouldAlwaysFloat_ || this.isFocused_ || Boolean(this.getValue()) || this.isBadInput_();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
                    get: function () {
                        return !this.isFocused_ && !this.isValid() && Boolean(this.getValue());
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            hasClass: function () {
                                return true;
                            },
                            registerTextFieldInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterTextFieldInteractionHandler: function () {
                                return undefined;
                            },
                            registerInputInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterInputInteractionHandler: function () {
                                return undefined;
                            },
                            registerValidationAttributeChangeHandler: function () {
                                return new MutationObserver(function () {
                                    return undefined;
                                });
                            },
                            deregisterValidationAttributeChangeHandler: function () {
                                return undefined;
                            },
                            getNativeInput: function () {
                                return null;
                            },
                            isFocused: function () {
                                return false;
                            },
                            activateLineRipple: function () {
                                return undefined;
                            },
                            deactivateLineRipple: function () {
                                return undefined;
                            },
                            setLineRippleTransformOrigin: function () {
                                return undefined;
                            },
                            shakeLabel: function () {
                                return undefined;
                            },
                            floatLabel: function () {
                                return undefined;
                            },
                            hasLabel: function () {
                                return false;
                            },
                            getLabelWidth: function () {
                                return 0;
                            },
                            hasOutline: function () {
                                return false;
                            },
                            notchOutline: function () {
                                return undefined;
                            },
                            closeOutline: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldFoundation.prototype.init = function () {
                    var _this = this;
                    if (this.adapter_.isFocused()) {
                        this.inputFocusHandler_();
                    } else if (this.adapter_.hasLabel() && this.shouldFloat) {
                        this.notchOutline(true);
                        this.adapter_.floatLabel(true);
                    }
                    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
                    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
                    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
                    POINTERDOWN_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
                    });
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
                    });
                    this.validationObserver_ =
                        this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
                    this.setCharacterCounter_(this.getValue().length);
                };
                MDCTextFieldFoundation.prototype.destroy = function () {
                    var _this = this;
                    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
                    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
                    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
                    POINTERDOWN_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
                    });
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
                    });
                    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
                };
                /**
                 * Handles user interactions with the Text Field.
                 */
                MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
                    var nativeInput = this.adapter_.getNativeInput();
                    if (nativeInput && nativeInput.disabled) {
                        return;
                    }
                    this.receivedUserInput_ = true;
                };
                /**
                 * Handles validation attribute changes
                 */
                MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
                    var _this = this;
                    attributesList.some(function (attributeName) {
                        if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                            _this.styleValidity_(true);
                            return true;
                        }
                        return false;
                    });
                    if (attributesList.indexOf('maxlength') > -1) {
                        this.setCharacterCounter_(this.getValue().length);
                    }
                };
                /**
                 * Opens/closes the notched outline.
                 */
                MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
                    if (!this.adapter_.hasOutline()) {
                        return;
                    }
                    if (openNotch) {
                        var isDense = this.adapter_.hasClass(constants_cssClasses.DENSE);
                        var labelScale = isDense ? numbers.DENSE_LABEL_SCALE : numbers.LABEL_SCALE;
                        var labelWidth = this.adapter_.getLabelWidth() * labelScale;
                        this.adapter_.notchOutline(labelWidth);
                    } else {
                        this.adapter_.closeOutline();
                    }
                };
                /**
                 * Activates the text field focus state.
                 */
                MDCTextFieldFoundation.prototype.activateFocus = function () {
                    this.isFocused_ = true;
                    this.styleFocused_(this.isFocused_);
                    this.adapter_.activateLineRipple();
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                    if (this.helperText_) {
                        this.helperText_.showToScreenReader();
                    }
                };
                /**
                 * Sets the line ripple's transform origin, so that the line ripple activate
                 * animation will animate out from the user's click location.
                 */
                MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
                    var touches = evt.touches;
                    var targetEvent = touches ? touches[0] : evt;
                    var targetClientRect = targetEvent.target.getBoundingClientRect();
                    var normalizedX = targetEvent.clientX - targetClientRect.left;
                    this.adapter_.setLineRippleTransformOrigin(normalizedX);
                };
                /**
                 * Handles input change of text input and text area.
                 */
                MDCTextFieldFoundation.prototype.handleInput = function () {
                    this.autoCompleteFocus();
                    this.setCharacterCounter_(this.getValue().length);
                };
                /**
                 * Activates the Text Field's focus state in cases when the input value
                 * changes without user input (e.g. programmatically).
                 */
                MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
                    if (!this.receivedUserInput_) {
                        this.activateFocus();
                    }
                };
                /**
                 * Deactivates the Text Field's focus state.
                 */
                MDCTextFieldFoundation.prototype.deactivateFocus = function () {
                    this.isFocused_ = false;
                    this.adapter_.deactivateLineRipple();
                    var isValid = this.isValid();
                    this.styleValidity_(isValid);
                    this.styleFocused_(this.isFocused_);
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                    if (!this.shouldFloat) {
                        this.receivedUserInput_ = false;
                    }
                };
                MDCTextFieldFoundation.prototype.getValue = function () {
                    return this.getNativeInput_().value;
                };
                /**
                 * @param value The value to set on the input Element.
                 */
                MDCTextFieldFoundation.prototype.setValue = function (value) {
                    // Prevent Safari from moving the caret to the end of the input when the value has not changed.
                    if (this.getValue() !== value) {
                        this.getNativeInput_().value = value;
                    }
                    var isValid = this.isValid();
                    this.styleValidity_(isValid);
                    if (this.adapter_.hasLabel()) {
                        this.notchOutline(this.shouldFloat);
                        this.adapter_.floatLabel(this.shouldFloat);
                        this.adapter_.shakeLabel(this.shouldShake);
                    }
                };
                /**
                 * @return The custom validity state, if set; otherwise, the result of a native validity check.
                 */
                MDCTextFieldFoundation.prototype.isValid = function () {
                    return this.useNativeValidation_ ?
                        this.isNativeInputValid_() : this.isValid_;
                };
                /**
                 * @param isValid Sets the custom validity state of the Text Field.
                 */
                MDCTextFieldFoundation.prototype.setValid = function (isValid) {
                    this.isValid_ = isValid;
                    this.styleValidity_(isValid);
                    var shouldShake = !isValid && !this.isFocused_;
                    if (this.adapter_.hasLabel()) {
                        this.adapter_.shakeLabel(shouldShake);
                    }
                };
                /**
                 * Enables or disables the use of native validation. Use this for custom validation.
                 * @param useNativeValidation Set this to false to ignore native input validation.
                 */
                MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
                    this.useNativeValidation_ = useNativeValidation;
                };
                MDCTextFieldFoundation.prototype.isDisabled = function () {
                    return this.getNativeInput_().disabled;
                };
                /**
                 * @param disabled Sets the text-field disabled or enabled.
                 */
                MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
                    this.getNativeInput_().disabled = disabled;
                    this.styleDisabled_(disabled);
                };
                /**
                 * @param content Sets the content of the helper text.
                 */
                MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
                    if (this.helperText_) {
                        this.helperText_.setContent(content);
                    }
                };
                /**
                 * Sets the aria label of the leading icon.
                 */
                MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setAriaLabel(label);
                    }
                };
                /**
                 * Sets the text content of the leading icon.
                 */
                MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setContent(content);
                    }
                };
                /**
                 * Sets the aria label of the trailing icon.
                 */
                MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setAriaLabel(label);
                    }
                };
                /**
                 * Sets the text content of the trailing icon.
                 */
                MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setContent(content);
                    }
                };
                /**
                 * Sets character counter values that shows characters used and the total character limit.
                 */
                MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
                    if (!this.characterCounter_) {
                        return;
                    }
                    var maxLength = this.getNativeInput_().maxLength;
                    if (maxLength === -1) {
                        throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
                    }
                    this.characterCounter_.setCounterValue(currentLength, maxLength);
                };
                /**
                 * @return True if the Text Field input fails in converting the user-supplied value.
                 */
                MDCTextFieldFoundation.prototype.isBadInput_ = function () {
                    // The badInput property is not supported in IE 11 💩.
                    return this.getNativeInput_().validity.badInput || false;
                };
                /**
                 * @return The result of native validity checking (ValidityState.valid).
                 */
                MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
                    return this.getNativeInput_().validity.valid;
                };
                /**
                 * Styles the component based on the validity state.
                 */
                MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
                    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
                    if (isValid) {
                        this.adapter_.removeClass(INVALID);
                    } else {
                        this.adapter_.addClass(INVALID);
                    }
                    if (this.helperText_) {
                        this.helperText_.setValidity(isValid);
                    }
                };
                /**
                 * Styles the component based on the focused state.
                 */
                MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
                    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
                    if (isFocused) {
                        this.adapter_.addClass(FOCUSED);
                    } else {
                        this.adapter_.removeClass(FOCUSED);
                    }
                };
                /**
                 * Styles the component based on the disabled state.
                 */
                MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
                    var _a = MDCTextFieldFoundation.cssClasses,
                        DISABLED = _a.DISABLED,
                        INVALID = _a.INVALID;
                    if (isDisabled) {
                        this.adapter_.addClass(DISABLED);
                        this.adapter_.removeClass(INVALID);
                    } else {
                        this.adapter_.removeClass(DISABLED);
                    }
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setDisabled(isDisabled);
                    }
                    if (this.trailingIcon_) {
                        this.trailingIcon_.setDisabled(isDisabled);
                    }
                };
                /**
                 * @return The native text input element from the host environment, or an object with the same shape for unit tests.
                 */
                MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
                    // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
                    // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
                    // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
                    var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
                    return nativeInput || {
                        disabled: false,
                        maxLength: -1,
                        type: 'input',
                        validity: {
                            badInput: false,
                            valid: true,
                        },
                        value: '',
                    };
                };
                return MDCTextFieldFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var textfield_foundation = (foundation_MDCTextFieldFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var helper_text_constants_cssClasses = {
                HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
                HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
                ROOT: 'mdc-text-field-helper-text',
            };
            var helper_text_constants_strings = {
                ARIA_HIDDEN: 'aria-hidden',
                ROLE: 'role',
                ROOT_SELECTOR: "." + helper_text_constants_cssClasses.ROOT,
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/foundation.js
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTextFieldHelperTextFoundation, _super);

                function MDCTextFieldHelperTextFoundation(adapter) {
                    return _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
                    get: function () {
                        return helper_text_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
                    get: function () {
                        return helper_text_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            hasClass: function () {
                                return false;
                            },
                            setAttr: function () {
                                return undefined;
                            },
                            removeAttr: function () {
                                return undefined;
                            },
                            setContent: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the content of the helper text field.
                 */
                MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
                    this.adapter_.setContent(content);
                };
                /**
                 * @param isPersistent Sets the persistency of the helper text.
                 */
                MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
                    if (isPersistent) {
                        this.adapter_.addClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
                    } else {
                        this.adapter_.removeClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
                    }
                };
                /**
                 * @param isValidation True to make the helper text act as an error validation message.
                 */
                MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
                    if (isValidation) {
                        this.adapter_.addClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
                    } else {
                        this.adapter_.removeClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
                    }
                };
                /**
                 * Makes the helper text visible to the screen reader.
                 */
                MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
                    this.adapter_.removeAttr(helper_text_constants_strings.ARIA_HIDDEN);
                };
                /**
                 * Sets the validity of the helper text based on the input validity.
                 */
                MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
                    var helperTextIsPersistent = this.adapter_.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
                    var helperTextIsValidationMsg = this.adapter_.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
                    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
                    if (validationMsgNeedsDisplay) {
                        this.adapter_.setAttr(helper_text_constants_strings.ROLE, 'alert');
                    } else {
                        this.adapter_.removeAttr(helper_text_constants_strings.ROLE);
                    }
                    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
                        this.hide_();
                    }
                };
                /**
                 * Hides the help text from screen readers.
                 */
                MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
                    this.adapter_.setAttr(helper_text_constants_strings.ARIA_HIDDEN, 'true');
                };
                return MDCTextFieldHelperTextFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var helper_text_foundation = (foundation_MDCTextFieldHelperTextFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/component.js
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var component_MDCTextFieldHelperText = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTextFieldHelperText, _super);

                function MDCTextFieldHelperText() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTextFieldHelperText.attachTo = function (root) {
                    return new MDCTextFieldHelperText(root);
                };
                Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
                    get: function () {
                        return this.foundation_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        setAttr: function (attr, value) {
                            return _this.root_.setAttribute(attr, value);
                        },
                        removeAttr: function (attr) {
                            return _this.root_.removeAttribute(attr);
                        },
                        setContent: function (content) {
                            _this.root_.textContent = content;
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCTextFieldHelperTextFoundation(adapter);
                };
                return MDCTextFieldHelperText;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/icon/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var icon_constants_strings = {
                ICON_EVENT: 'MDCTextField:icon',
                ICON_ROLE: 'button',
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/icon/foundation.js
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_INTERACTION_EVENTS = ['click', 'keydown'];
            var foundation_MDCTextFieldIconFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTextFieldIconFoundation, _super);

                function MDCTextFieldIconFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;
                    _this.savedTabIndex_ = null;
                    _this.interactionHandler_ = function (evt) {
                        return _this.handleInteraction(evt);
                    };
                    return _this;
                }
                Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
                    get: function () {
                        return icon_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            getAttr: function () {
                                return null;
                            },
                            setAttr: function () {
                                return undefined;
                            },
                            removeAttr: function () {
                                return undefined;
                            },
                            setContent: function () {
                                return undefined;
                            },
                            registerInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterInteractionHandler: function () {
                                return undefined;
                            },
                            notifyIconAction: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldIconFoundation.prototype.init = function () {
                    var _this = this;
                    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
                    foundation_INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
                    });
                };
                MDCTextFieldIconFoundation.prototype.destroy = function () {
                    var _this = this;
                    foundation_INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
                    });
                };
                MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
                    if (!this.savedTabIndex_) {
                        return;
                    }
                    if (disabled) {
                        this.adapter_.setAttr('tabindex', '-1');
                        this.adapter_.removeAttr('role');
                    } else {
                        this.adapter_.setAttr('tabindex', this.savedTabIndex_);
                        this.adapter_.setAttr('role', icon_constants_strings.ICON_ROLE);
                    }
                };
                MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
                    this.adapter_.setAttr('aria-label', label);
                };
                MDCTextFieldIconFoundation.prototype.setContent = function (content) {
                    this.adapter_.setContent(content);
                };
                MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
                    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
                    if (evt.type === 'click' || isEnterKey) {
                        this.adapter_.notifyIconAction();
                    }
                };
                return MDCTextFieldIconFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var icon_foundation = (foundation_MDCTextFieldIconFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/icon/component.js
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var component_MDCTextFieldIcon = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTextFieldIcon, _super);

                function MDCTextFieldIcon() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTextFieldIcon.attachTo = function (root) {
                    return new MDCTextFieldIcon(root);
                };
                Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
                    get: function () {
                        return this.foundation_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        getAttr: function (attr) {
                            return _this.root_.getAttribute(attr);
                        },
                        setAttr: function (attr, value) {
                            return _this.root_.setAttribute(attr, value);
                        },
                        removeAttr: function (attr) {
                            return _this.root_.removeAttribute(attr);
                        },
                        setContent: function (content) {
                            _this.root_.textContent = content;
                        },
                        registerInteractionHandler: function (evtType, handler) {
                            return _this.listen(evtType, handler);
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return _this.unlisten(evtType, handler);
                        },
                        notifyIconAction: function () {
                            return _this.emit(foundation_MDCTextFieldIconFoundation.strings.ICON_EVENT, {} /* evtData */ , true /* shouldBubble */ );
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCTextFieldIconFoundation(adapter);
                };
                return MDCTextFieldIcon;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/textfield/component.js
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return component_MDCTextField;
            });
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */













            var component_MDCTextField = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTextField, _super);

                function MDCTextField() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTextField.attachTo = function (root) {
                    return new MDCTextField(root);
                };
                MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
                    if (rippleFactory === void 0) {
                        rippleFactory = function (el, foundation) {
                            return new ripple_component["a" /* MDCRipple */ ](el, foundation);
                        };
                    }
                    if (lineRippleFactory === void 0) {
                        lineRippleFactory = function (el) {
                            return new line_ripple_component["a" /* MDCLineRipple */ ](el);
                        };
                    }
                    if (helperTextFactory === void 0) {
                        helperTextFactory = function (el) {
                            return new component_MDCTextFieldHelperText(el);
                        };
                    }
                    if (characterCounterFactory === void 0) {
                        characterCounterFactory = function (el) {
                            return new component_MDCTextFieldCharacterCounter(el);
                        };
                    }
                    if (iconFactory === void 0) {
                        iconFactory = function (el) {
                            return new component_MDCTextFieldIcon(el);
                        };
                    }
                    if (labelFactory === void 0) {
                        labelFactory = function (el) {
                            return new floating_label_component["a" /* MDCFloatingLabel */ ](el);
                        };
                    }
                    if (outlineFactory === void 0) {
                        outlineFactory = function (el) {
                            return new notched_outline_component["a" /* MDCNotchedOutline */ ](el);
                        };
                    }
                    this.input_ = this.root_.querySelector(constants_strings.INPUT_SELECTOR);
                    var labelElement = this.root_.querySelector(constants_strings.LABEL_SELECTOR);
                    this.label_ = labelElement ? labelFactory(labelElement) : null;
                    var lineRippleElement = this.root_.querySelector(constants_strings.LINE_RIPPLE_SELECTOR);
                    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
                    var outlineElement = this.root_.querySelector(constants_strings.OUTLINE_SELECTOR);
                    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
                    // Helper text
                    var helperTextStrings = foundation_MDCTextFieldHelperTextFoundation.strings;
                    var nextElementSibling = this.root_.nextElementSibling;
                    var hasHelperLine = (nextElementSibling && nextElementSibling.classList.contains(constants_cssClasses.HELPER_LINE));
                    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
                    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null;
                    // Character counter
                    var characterCounterStrings = foundation_MDCTextFieldCharacterCounterFoundation.strings;
                    var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR);
                    // If character counter is not found in root element search in sibling element.
                    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
                        characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
                    }
                    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
                    this.leadingIcon_ = null;
                    this.trailingIcon_ = null;
                    var iconElements = this.root_.querySelectorAll(constants_strings.ICON_SELECTOR);
                    if (iconElements.length > 0) {
                        if (iconElements.length > 1) { // Has both icons.
                            this.leadingIcon_ = iconFactory(iconElements[0]);
                            this.trailingIcon_ = iconFactory(iconElements[1]);
                        } else {
                            if (this.root_.classList.contains(constants_cssClasses.WITH_LEADING_ICON)) {
                                this.leadingIcon_ = iconFactory(iconElements[0]);
                            } else {
                                this.trailingIcon_ = iconFactory(iconElements[0]);
                            }
                        }
                    }
                    this.ripple = this.createRipple_(rippleFactory);
                };
                MDCTextField.prototype.destroy = function () {
                    if (this.ripple) {
                        this.ripple.destroy();
                    }
                    if (this.lineRipple_) {
                        this.lineRipple_.destroy();
                    }
                    if (this.helperText_) {
                        this.helperText_.destroy();
                    }
                    if (this.characterCounter_) {
                        this.characterCounter_.destroy();
                    }
                    if (this.leadingIcon_) {
                        this.leadingIcon_.destroy();
                    }
                    if (this.trailingIcon_) {
                        this.trailingIcon_.destroy();
                    }
                    if (this.label_) {
                        this.label_.destroy();
                    }
                    if (this.outline_) {
                        this.outline_.destroy();
                    }
                    _super.prototype.destroy.call(this);
                };
                /**
                 * Initializes the Text Field's internal state based on the environment's
                 * state.
                 */
                MDCTextField.prototype.initialSyncWithDOM = function () {
                    this.disabled = this.input_.disabled;
                };
                Object.defineProperty(MDCTextField.prototype, "value", {
                    get: function () {
                        return this.foundation_.getValue();
                    },
                    /**
                     * @param value The value to set on the input.
                     */
                    set: function (value) {
                        this.foundation_.setValue(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "disabled", {
                    get: function () {
                        return this.foundation_.isDisabled();
                    },
                    /**
                     * @param disabled Sets the Text Field disabled or enabled.
                     */
                    set: function (disabled) {
                        this.foundation_.setDisabled(disabled);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "valid", {
                    get: function () {
                        return this.foundation_.isValid();
                    },
                    /**
                     * @param valid Sets the Text Field valid or invalid.
                     */
                    set: function (valid) {
                        this.foundation_.setValid(valid);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "required", {
                    get: function () {
                        return this.input_.required;
                    },
                    /**
                     * @param required Sets the Text Field to required.
                     */
                    set: function (required) {
                        this.input_.required = required;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "pattern", {
                    get: function () {
                        return this.input_.pattern;
                    },
                    /**
                     * @param pattern Sets the input element's validation pattern.
                     */
                    set: function (pattern) {
                        this.input_.pattern = pattern;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "minLength", {
                    get: function () {
                        return this.input_.minLength;
                    },
                    /**
                     * @param minLength Sets the input element's minLength.
                     */
                    set: function (minLength) {
                        this.input_.minLength = minLength;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "maxLength", {
                    get: function () {
                        return this.input_.maxLength;
                    },
                    /**
                     * @param maxLength Sets the input element's maxLength.
                     */
                    set: function (maxLength) {
                        // Chrome throws exception if maxLength is set to a value less than zero
                        if (maxLength < 0) {
                            this.input_.removeAttribute('maxLength');
                        } else {
                            this.input_.maxLength = maxLength;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "min", {
                    get: function () {
                        return this.input_.min;
                    },
                    /**
                     * @param min Sets the input element's min.
                     */
                    set: function (min) {
                        this.input_.min = min;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "max", {
                    get: function () {
                        return this.input_.max;
                    },
                    /**
                     * @param max Sets the input element's max.
                     */
                    set: function (max) {
                        this.input_.max = max;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "step", {
                    get: function () {
                        return this.input_.step;
                    },
                    /**
                     * @param step Sets the input element's step.
                     */
                    set: function (step) {
                        this.input_.step = step;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
                    /**
                     * Sets the helper text element content.
                     */
                    set: function (content) {
                        this.foundation_.setHelperTextContent(content);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
                    /**
                     * Sets the aria label of the leading icon.
                     */
                    set: function (label) {
                        this.foundation_.setLeadingIconAriaLabel(label);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
                    /**
                     * Sets the text content of the leading icon.
                     */
                    set: function (content) {
                        this.foundation_.setLeadingIconContent(content);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
                    /**
                     * Sets the aria label of the trailing icon.
                     */
                    set: function (label) {
                        this.foundation_.setTrailingIconAriaLabel(label);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
                    /**
                     * Sets the text content of the trailing icon.
                     */
                    set: function (content) {
                        this.foundation_.setTrailingIconContent(content);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
                    /**
                     * Enables or disables the use of native validation. Use this for custom validation.
                     * @param useNativeValidation Set this to false to ignore native input validation.
                     */
                    set: function (useNativeValidation) {
                        this.foundation_.setUseNativeValidation(useNativeValidation);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Focuses the input element.
                 */
                MDCTextField.prototype.focus = function () {
                    this.input_.focus();
                };
                /**
                 * Recomputes the outline SVG path for the outline element.
                 */
                MDCTextField.prototype.layout = function () {
                    var openNotch = this.foundation_.shouldFloat;
                    this.foundation_.notchOutline(openNotch);
                };
                MDCTextField.prototype.getDefaultFoundation = function () {
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = tslib_es6["a" /* __assign */ ]({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_());
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCTextFieldFoundation(adapter, this.getFoundationMap_());
                };
                MDCTextField.prototype.getRootAdapterMethods_ = function () {
                    var _this = this;
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    return {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        registerTextFieldInteractionHandler: function (evtType, handler) {
                            return _this.listen(evtType, handler);
                        },
                        deregisterTextFieldInteractionHandler: function (evtType, handler) {
                            return _this.unlisten(evtType, handler);
                        },
                        registerValidationAttributeChangeHandler: function (handler) {
                            var getAttributesList = function (mutationsList) {
                                return mutationsList
                                    .map(function (mutation) {
                                        return mutation.attributeName;
                                    })
                                    .filter(function (attributeName) {
                                        return attributeName;
                                    });
                            };
                            var observer = new MutationObserver(function (mutationsList) {
                                return handler(getAttributesList(mutationsList));
                            });
                            var config = {
                                attributes: true
                            };
                            observer.observe(_this.input_, config);
                            return observer;
                        },
                        deregisterValidationAttributeChangeHandler: function (observer) {
                            return observer.disconnect();
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                };
                MDCTextField.prototype.getInputAdapterMethods_ = function () {
                    var _this = this;
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    return {
                        getNativeInput: function () {
                            return _this.input_;
                        },
                        isFocused: function () {
                            return document.activeElement === _this.input_;
                        },
                        registerInputInteractionHandler: function (evtType, handler) {
                            return _this.input_.addEventListener(evtType, handler);
                        },
                        deregisterInputInteractionHandler: function (evtType, handler) {
                            return _this.input_.removeEventListener(evtType, handler);
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                };
                MDCTextField.prototype.getLabelAdapterMethods_ = function () {
                    var _this = this;
                    return {
                        floatLabel: function (shouldFloat) {
                            return _this.label_ && _this.label_.float(shouldFloat);
                        },
                        getLabelWidth: function () {
                            return _this.label_ ? _this.label_.getWidth() : 0;
                        },
                        hasLabel: function () {
                            return Boolean(_this.label_);
                        },
                        shakeLabel: function (shouldShake) {
                            return _this.label_ && _this.label_.shake(shouldShake);
                        },
                    };
                };
                MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
                    var _this = this;
                    return {
                        activateLineRipple: function () {
                            if (_this.lineRipple_) {
                                _this.lineRipple_.activate();
                            }
                        },
                        deactivateLineRipple: function () {
                            if (_this.lineRipple_) {
                                _this.lineRipple_.deactivate();
                            }
                        },
                        setLineRippleTransformOrigin: function (normalizedX) {
                            if (_this.lineRipple_) {
                                _this.lineRipple_.setRippleCenter(normalizedX);
                            }
                        },
                    };
                };
                MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
                    var _this = this;
                    return {
                        closeOutline: function () {
                            return _this.outline_ && _this.outline_.closeNotch();
                        },
                        hasOutline: function () {
                            return Boolean(_this.outline_);
                        },
                        notchOutline: function (labelWidth) {
                            return _this.outline_ && _this.outline_.notch(labelWidth);
                        },
                    };
                };
                /**
                 * @return A map of all subcomponents to subfoundations.
                 */
                MDCTextField.prototype.getFoundationMap_ = function () {
                    return {
                        characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
                        helperText: this.helperText_ ? this.helperText_.foundation : undefined,
                        leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
                        trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined,
                    };
                };
                MDCTextField.prototype.createRipple_ = function (rippleFactory) {
                    var _this = this;
                    var isTextArea = this.root_.classList.contains(constants_cssClasses.TEXTAREA);
                    var isOutlined = this.root_.classList.contains(constants_cssClasses.OUTLINED);
                    if (isTextArea || isOutlined) {
                        return null;
                    }
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = tslib_es6["a" /* __assign */ ]({}, ripple_component["a" /* MDCRipple */ ].createAdapter(this), {
                        isSurfaceActive: function () {
                            return ponyfill["matches"](_this.input_, ':active');
                        },
                        registerInteractionHandler: function (evtType, handler) {
                            return _this.input_.addEventListener(evtType, handler);
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return _this.input_.removeEventListener(evtType, handler);
                        }
                    });
                    // tslint:enable:object-literal-sort-keys
                    return rippleFactory(this.root_, new ripple_foundation["a" /* MDCRippleFoundation */ ](adapter));
                };
                return MDCTextField;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map

            /***/
        }),
        /* 15 */
        ,
        /* 16 */
        ,
        /* 17 */
        ,
        /* 18 */
        ,
        /* 19 */
        ,
        /* 20 */
        ,
        /* 21 */
        ,
        /* 22 */
        ,
        /* 23 */
        ,
        /* 24 */
        ,
        /* 25 */
        ,
        /* 26 */
        ,
        /* 27 */
        ,
        /* 28 */
        ,
        /* 29 */
        ,
        /* 30 */
        ,
        /* 31 */
        ,
        /* 32 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return MDCFloatingLabel;
            });
            /* harmony import */
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
            /* harmony import */
            var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
            /* harmony import */
            var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var MDCFloatingLabel = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__[ /* __extends */ "b"](MDCFloatingLabel, _super);

                function MDCFloatingLabel() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCFloatingLabel.attachTo = function (root) {
                    return new MDCFloatingLabel(root);
                };
                /**
                 * Styles the label to produce the label shake for errors.
                 * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
                 */
                MDCFloatingLabel.prototype.shake = function (shouldShake) {
                    this.foundation_.shake(shouldShake);
                };
                /**
                 * Styles the label to float/dock.
                 * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
                 */
                MDCFloatingLabel.prototype.float = function (shouldFloat) {
                    this.foundation_.float(shouldFloat);
                };
                MDCFloatingLabel.prototype.getWidth = function () {
                    return this.foundation_.getWidth();
                };
                MDCFloatingLabel.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        getWidth: function () {
                            return _this.root_.scrollWidth;
                        },
                        registerInteractionHandler: function (evtType, handler) {
                            return _this.listen(evtType, handler);
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return _this.unlisten(evtType, handler);
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new _foundation__WEBPACK_IMPORTED_MODULE_2__[ /* MDCFloatingLabelFoundation */ "a"](adapter);
                };
                return MDCFloatingLabel;
            }(_material_base_component__WEBPACK_IMPORTED_MODULE_1__[ /* MDCComponent */ "a"]));

            //# sourceMappingURL=component.js.map

            /***/
        }),
        /* 33 */
        /***/
        (function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__(40);


            /***/
        }),
        /* 34 */
        /***/
        (function (module, exports) {

            var candidateSelectors = [
                'input',
                'select',
                'textarea',
                'a[href]',
                'button',
                '[tabindex]',
                'audio[controls]',
                'video[controls]',
                '[contenteditable]:not([contenteditable="false"])',
            ];
            var candidateSelector = candidateSelectors.join(',');

            var matches = typeof Element === 'undefined' ?
                function () {} :
                Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

            function tabbable(el, options) {
                options = options || {};

                var elementDocument = el.ownerDocument || el;
                var regularTabbables = [];
                var orderedTabbables = [];

                var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
                var candidates = el.querySelectorAll(candidateSelector);

                if (options.includeContainer) {
                    if (matches.call(el, candidateSelector)) {
                        candidates = Array.prototype.slice.apply(candidates);
                        candidates.unshift(el);
                    }
                }

                var i, candidate, candidateTabindex;
                for (i = 0; i < candidates.length; i++) {
                    candidate = candidates[i];

                    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

                    candidateTabindex = getTabindex(candidate);
                    if (candidateTabindex === 0) {
                        regularTabbables.push(candidate);
                    } else {
                        orderedTabbables.push({
                            documentOrder: i,
                            tabIndex: candidateTabindex,
                            node: candidate,
                        });
                    }
                }

                var tabbableNodes = orderedTabbables
                    .sort(sortOrderedTabbables)
                    .map(function (a) {
                        return a.node
                    })
                    .concat(regularTabbables);

                return tabbableNodes;
            }

            tabbable.isTabbable = isTabbable;
            tabbable.isFocusable = isFocusable;

            function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
                if (
                    !isNodeMatchingSelectorFocusable(node, untouchabilityChecker) ||
                    isNonTabbableRadio(node) ||
                    getTabindex(node) < 0
                ) {
                    return false;
                }
                return true;
            }

            function isTabbable(node, untouchabilityChecker) {
                if (!node) throw new Error('No node provided');
                if (matches.call(node, candidateSelector) === false) return false;
                return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
            }

            function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
                untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
                if (
                    node.disabled ||
                    isHiddenInput(node) ||
                    untouchabilityChecker.isUntouchable(node)
                ) {
                    return false;
                }
                return true;
            }

            var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');

            function isFocusable(node, untouchabilityChecker) {
                if (!node) throw new Error('No node provided');
                if (matches.call(node, focusableCandidateSelector) === false) return false;
                return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
            }

            function getTabindex(node) {
                var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
                if (!isNaN(tabindexAttr)) return tabindexAttr;
                // Browsers do not return `tabIndex` correctly for contentEditable nodes;
                // so if they don't have a tabindex attribute specifically set, assume it's 0.
                if (isContentEditable(node)) return 0;
                return node.tabIndex;
            }

            function sortOrderedTabbables(a, b) {
                return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
            }

            // Array.prototype.find not available in IE.
            function find(list, predicate) {
                for (var i = 0, length = list.length; i < length; i++) {
                    if (predicate(list[i])) return list[i];
                }
            }

            function isContentEditable(node) {
                return node.contentEditable === 'true';
            }

            function isInput(node) {
                return node.tagName === 'INPUT';
            }

            function isHiddenInput(node) {
                return isInput(node) && node.type === 'hidden';
            }

            function isRadio(node) {
                return isInput(node) && node.type === 'radio';
            }

            function isNonTabbableRadio(node) {
                return isRadio(node) && !isTabbableRadio(node);
            }

            function getCheckedRadio(nodes) {
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].checked) {
                        return nodes[i];
                    }
                }
            }

            function isTabbableRadio(node) {
                if (!node.name) return true;
                // This won't account for the edge case where you have radio groups with the same
                // in separate forms on the same page.
                var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
                var checked = getCheckedRadio(radioSet);
                return !checked || checked === node;
            }

            // An element is "untouchable" if *it or one of its ancestors* has
            // `visibility: hidden` or `display: none`.
            function UntouchabilityChecker(elementDocument) {
                this.doc = elementDocument;
                // Node cache must be refreshed on every check, in case
                // the content of the element has changed. The cache contains tuples
                // mapping nodes to their boolean result.
                this.cache = [];
            }

            // getComputedStyle accurately reflects `visibility: hidden` of ancestors
            // but not `display: none`, so we need to recursively check parents.
            UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
                if (node.nodeType !== Node.ELEMENT_NODE) return false;

                // Search for a cached result.
                var cached = find(this.cache, function (item) {
                    return item === node;
                });
                if (cached) return cached[1];

                nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

                var result = false;

                if (nodeComputedStyle.display === 'none') {
                    result = true;
                } else if (node.parentNode) {
                    result = this.hasDisplayNone(node.parentNode);
                }

                this.cache.push([node, result]);

                return result;
            }

            UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
                if (node === this.doc.documentElement) return false;
                var computedStyle = this.doc.defaultView.getComputedStyle(node);
                if (this.hasDisplayNone(node, computedStyle)) return true;
                return computedStyle.visibility === 'hidden';
            }

            module.exports = tabbable;


            /***/
        }),
        /* 35 */
        /***/
        (function (module, exports) {

            module.exports = extend

            var hasOwnProperty = Object.prototype.hasOwnProperty;

            function extend() {
                var target = {}

                for (var i = 0; i < arguments.length; i++) {
                    var source = arguments[i]

                    for (var key in source) {
                        if (hasOwnProperty.call(source, key)) {
                            target[key] = source[key]
                        }
                    }
                }

                return target
            }


            /***/
        }),
        /* 36 */
        ,
        /* 37 */
        ,
        /* 38 */
        ,
        /* 39 */
        ,
        /* 40 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var ponyfill_namespaceObject = {};
            __webpack_require__.r(ponyfill_namespaceObject);
            __webpack_require__.d(ponyfill_namespaceObject, "closest", function () {
                return closest;
            });
            __webpack_require__.d(ponyfill_namespaceObject, "matches", function () {
                return matches;
            });
            var dom_ponyfill_namespaceObject = {};
            __webpack_require__.r(dom_ponyfill_namespaceObject);
            __webpack_require__.d(dom_ponyfill_namespaceObject, "closest", function () {
                return ponyfill_closest;
            });
            __webpack_require__.d(dom_ponyfill_namespaceObject, "matches", function () {
                return ponyfill_matches;
            });

            // EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
            var tslib_es6 = __webpack_require__(0);

            // EXTERNAL MODULE: ../node_modules/@material/base/component.js
            var component = __webpack_require__(2);

            // EXTERNAL MODULE: ../node_modules/@material/ripple/component.js
            var ripple_component = __webpack_require__(4);

            // CONCATENATED MODULE: ../node_modules/@material/top-app-bar/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                FIXED_CLASS: 'mdc-top-app-bar--fixed',
                FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
                SHORT_CLASS: 'mdc-top-app-bar--short',
                SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
                SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
            };
            var numbers = {
                DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
                MAX_TOP_APP_BAR_HEIGHT: 128,
            };
            var strings = {
                ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
                NAVIGATION_EVENT: 'MDCTopAppBar:nav',
                NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
                ROOT_SELECTOR: '.mdc-top-app-bar',
                TITLE_SELECTOR: '.mdc-top-app-bar__title',
            };

            //# sourceMappingURL=constants.js.map
            // EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
            var base_foundation = __webpack_require__(1);

            // CONCATENATED MODULE: ../node_modules/@material/top-app-bar/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTopAppBarBaseFoundation, _super);
                /* istanbul ignore next: optional argument is not a branch statement */
                function MDCTopAppBarBaseFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
                    _this.navClickHandler_ = function () {
                        return _this.adapter_.notifyNavigationIconClicked();
                    };
                    return _this;
                }
                Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
                    get: function () {
                        return strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
                    get: function () {
                        return numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            hasClass: function () {
                                return false;
                            },
                            setStyle: function () {
                                return undefined;
                            },
                            getTopAppBarHeight: function () {
                                return 0;
                            },
                            registerNavigationIconInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterNavigationIconInteractionHandler: function () {
                                return undefined;
                            },
                            notifyNavigationIconClicked: function () {
                                return undefined;
                            },
                            registerScrollHandler: function () {
                                return undefined;
                            },
                            deregisterScrollHandler: function () {
                                return undefined;
                            },
                            registerResizeHandler: function () {
                                return undefined;
                            },
                            deregisterResizeHandler: function () {
                                return undefined;
                            },
                            getViewportScrollY: function () {
                                return 0;
                            },
                            getTotalActionItems: function () {
                                return 0;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCTopAppBarBaseFoundation.prototype.init = function () {
                    this.initScrollHandler();
                    this.initResizeHandler_();
                    this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
                };
                MDCTopAppBarBaseFoundation.prototype.destroy = function () {
                    this.destroyScrollHandler();
                    this.destroyResizeHandler_();
                    this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
                };
                MDCTopAppBarBaseFoundation.prototype.initScrollHandler = function () {
                    if (this.scrollHandler_) {
                        this.adapter_.registerScrollHandler(this.scrollHandler_);
                    }
                };
                MDCTopAppBarBaseFoundation.prototype.destroyScrollHandler = function () {
                    if (this.scrollHandler_) {
                        this.adapter_.deregisterScrollHandler(this.scrollHandler_);
                    }
                };
                MDCTopAppBarBaseFoundation.prototype.initResizeHandler_ = function () {
                    if (this.resizeHandler_) {
                        this.adapter_.registerResizeHandler(this.resizeHandler_);
                    }
                };
                MDCTopAppBarBaseFoundation.prototype.destroyResizeHandler_ = function () {
                    if (this.resizeHandler_) {
                        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                    }
                };
                return MDCTopAppBarBaseFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var top_app_bar_foundation = (foundation_MDCTopAppBarBaseFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/top-app-bar/standard/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var INITIAL_VALUE = 0;
            var foundation_MDCTopAppBarFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTopAppBarFoundation, _super);
                /* istanbul ignore next: optional argument is not a branch statement */
                function MDCTopAppBarFoundation(adapter) {
                    var _this = _super.call(this, adapter) || this;
                    /**
                     * Indicates if the top app bar was docked in the previous scroll handler iteration.
                     */
                    _this.wasDocked_ = true;
                    /**
                     * Indicates if the top app bar is docked in the fully shown position.
                     */
                    _this.isDockedShowing_ = true;
                    /**
                     * Variable for current scroll position of the top app bar
                     */
                    _this.currentAppBarOffsetTop_ = 0;
                    /**
                     * Used to prevent the top app bar from being scrolled out of view during resize events
                     */
                    _this.isCurrentlyBeingResized_ = false;
                    /**
                     * The timeout that's used to throttle the resize events
                     */
                    _this.resizeThrottleId_ = INITIAL_VALUE;
                    /**
                     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
                     */
                    _this.resizeDebounceId_ = INITIAL_VALUE;
                    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
                    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
                    _this.scrollHandler_ = function () {
                        return _this.topAppBarScrollHandler_();
                    };
                    _this.resizeHandler_ = function () {
                        return _this.topAppBarResizeHandler_();
                    };
                    return _this;
                }
                MDCTopAppBarFoundation.prototype.destroy = function () {
                    _super.prototype.destroy.call(this);
                    this.adapter_.setStyle('top', '');
                };
                /**
                 * Function to determine if the DOM needs to update.
                 */
                MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
                    var offscreenBoundaryTop = -this.topAppBarHeight_;
                    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
                    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
                    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
                    // If it's partially showing, it can't be docked.
                    if (partiallyShowing) {
                        this.wasDocked_ = false;
                    } else {
                        // Not previously docked and not partially showing, it's now docked.
                        if (!this.wasDocked_) {
                            this.wasDocked_ = true;
                            return true;
                        } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                            this.isDockedShowing_ = hasAnyPixelsOnscreen;
                            return true;
                        }
                    }
                    return partiallyShowing;
                };
                /**
                 * Function to move the top app bar if needed.
                 */
                MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
                    if (this.checkForUpdate_()) {
                        // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
                        // so the top app bar doesn't show if the window resizes and the new height > the old height.
                        var offset = this.currentAppBarOffsetTop_;
                        if (Math.abs(offset) >= this.topAppBarHeight_) {
                            offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
                        }
                        this.adapter_.setStyle('top', offset + 'px');
                    }
                };
                /**
                 * Scroll handler for the default scroll behavior of the top app bar.
                 */
                MDCTopAppBarFoundation.prototype.topAppBarScrollHandler_ = function () {
                    var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
                    var diff = currentScrollPosition - this.lastScrollPosition_;
                    this.lastScrollPosition_ = currentScrollPosition;
                    // If the window is being resized the lastScrollPosition_ needs to be updated but the
                    // current scroll of the top app bar should stay in the same position.
                    if (!this.isCurrentlyBeingResized_) {
                        this.currentAppBarOffsetTop_ -= diff;
                        if (this.currentAppBarOffsetTop_ > 0) {
                            this.currentAppBarOffsetTop_ = 0;
                        } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                            this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
                        }
                        this.moveTopAppBar_();
                    }
                };
                /**
                 * Top app bar resize handler that throttle/debounce functions that execute updates.
                 */
                MDCTopAppBarFoundation.prototype.topAppBarResizeHandler_ = function () {
                    var _this = this;
                    // Throttle resize events 10 p/s
                    if (!this.resizeThrottleId_) {
                        this.resizeThrottleId_ = setTimeout(function () {
                            _this.resizeThrottleId_ = INITIAL_VALUE;
                            _this.throttledResizeHandler_();
                        }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
                    }
                    this.isCurrentlyBeingResized_ = true;
                    if (this.resizeDebounceId_) {
                        clearTimeout(this.resizeDebounceId_);
                    }
                    this.resizeDebounceId_ = setTimeout(function () {
                        _this.topAppBarScrollHandler_();
                        _this.isCurrentlyBeingResized_ = false;
                        _this.resizeDebounceId_ = INITIAL_VALUE;
                    }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
                };
                /**
                 * Throttled function that updates the top app bar scrolled values if the
                 * top app bar height changes.
                 */
                MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
                    var currentHeight = this.adapter_.getTopAppBarHeight();
                    if (this.topAppBarHeight_ !== currentHeight) {
                        this.wasDocked_ = false;
                        // Since the top app bar has a different height depending on the screen width, this
                        // will ensure that the top app bar remains in the correct location if
                        // completely hidden and a resize makes the top app bar a different height.
                        this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
                        this.topAppBarHeight_ = currentHeight;
                    }
                    this.topAppBarScrollHandler_();
                };
                return MDCTopAppBarFoundation;
            }(foundation_MDCTopAppBarBaseFoundation));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var standard_foundation = (foundation_MDCTopAppBarFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/top-app-bar/fixed/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCFixedTopAppBarFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCFixedTopAppBarFoundation, _super);
                /* istanbul ignore next: optional argument is not a branch statement */
                function MDCFixedTopAppBarFoundation(adapter) {
                    var _this = _super.call(this, adapter) || this;
                    /**
                     * State variable for the previous scroll iteration top app bar state
                     */
                    _this.wasScrolled_ = false;
                    _this.scrollHandler_ = function () {
                        return _this.fixedScrollHandler_();
                    };
                    return _this;
                }
                /**
                 * Scroll handler for applying/removing the modifier class on the fixed top app bar.
                 */
                MDCFixedTopAppBarFoundation.prototype.fixedScrollHandler_ = function () {
                    var currentScroll = this.adapter_.getViewportScrollY();
                    if (currentScroll <= 0) {
                        if (this.wasScrolled_) {
                            this.adapter_.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
                            this.wasScrolled_ = false;
                        }
                    } else {
                        if (!this.wasScrolled_) {
                            this.adapter_.addClass(cssClasses.FIXED_SCROLLED_CLASS);
                            this.wasScrolled_ = true;
                        }
                    }
                };
                return MDCFixedTopAppBarFoundation;
            }(foundation_MDCTopAppBarFoundation));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var fixed_foundation = (foundation_MDCFixedTopAppBarFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/top-app-bar/short/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCShortTopAppBarFoundation, _super);
                /* istanbul ignore next: optional argument is not a branch statement */
                function MDCShortTopAppBarFoundation(adapter) {
                    var _this = _super.call(this, adapter) || this;
                    _this.isCollapsed_ = false;
                    return _this;
                }
                Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
                    // Public visibility for backward compatibility.
                    get: function () {
                        return this.isCollapsed_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCShortTopAppBarFoundation.prototype.init = function () {
                    var _this = this;
                    _super.prototype.init.call(this);
                    if (this.adapter_.getTotalActionItems() > 0) {
                        this.adapter_.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
                    }
                    if (!this.adapter_.hasClass(cssClasses.SHORT_COLLAPSED_CLASS)) {
                        this.scrollHandler_ = function () {
                            return _this.shortAppBarScrollHandler_();
                        };
                        this.adapter_.registerScrollHandler(this.scrollHandler_);
                        this.shortAppBarScrollHandler_();
                    }
                };
                MDCShortTopAppBarFoundation.prototype.destroy = function () {
                    _super.prototype.destroy.call(this);
                };
                /**
                 * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
                 */
                MDCShortTopAppBarFoundation.prototype.shortAppBarScrollHandler_ = function () {
                    var currentScroll = this.adapter_.getViewportScrollY();
                    if (currentScroll <= 0) {
                        if (this.isCollapsed_) {
                            this.adapter_.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
                            this.isCollapsed_ = false;
                        }
                    } else {
                        if (!this.isCollapsed_) {
                            this.adapter_.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
                            this.isCollapsed_ = true;
                        }
                    }
                };
                return MDCShortTopAppBarFoundation;
            }(foundation_MDCTopAppBarBaseFoundation));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var short_foundation = (foundation_MDCShortTopAppBarFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/top-app-bar/component.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */







            var component_MDCTopAppBar = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCTopAppBar, _super);

                function MDCTopAppBar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCTopAppBar.attachTo = function (root) {
                    return new MDCTopAppBar(root);
                };
                MDCTopAppBar.prototype.initialize = function (rippleFactory) {
                    if (rippleFactory === void 0) {
                        rippleFactory = function (el) {
                            return ripple_component["a" /* MDCRipple */ ].attachTo(el);
                        };
                    }
                    this.navIcon_ = this.root_.querySelector(strings.NAVIGATION_ICON_SELECTOR);
                    // Get all icons in the toolbar and instantiate the ripples
                    var icons = [].slice.call(this.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR));
                    if (this.navIcon_) {
                        icons.push(this.navIcon_);
                    }
                    this.iconRipples_ = icons.map(function (icon) {
                        var ripple = rippleFactory(icon);
                        ripple.unbounded = true;
                        return ripple;
                    });
                    this.scrollTarget_ = window;
                };
                MDCTopAppBar.prototype.destroy = function () {
                    this.iconRipples_.forEach(function (iconRipple) {
                        return iconRipple.destroy();
                    });
                    _super.prototype.destroy.call(this);
                };
                MDCTopAppBar.prototype.setScrollTarget = function (target) {
                    // Remove scroll handler from the previous scroll target
                    this.foundation_.destroyScrollHandler();
                    this.scrollTarget_ = target;
                    // Initialize scroll handler on the new scroll target
                    this.foundation_.initScrollHandler();
                };
                MDCTopAppBar.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        setStyle: function (property, value) {
                            return _this.root_.style.setProperty(property, value);
                        },
                        getTopAppBarHeight: function () {
                            return _this.root_.clientHeight;
                        },
                        registerNavigationIconInteractionHandler: function (evtType, handler) {
                            if (_this.navIcon_) {
                                _this.navIcon_.addEventListener(evtType, handler);
                            }
                        },
                        deregisterNavigationIconInteractionHandler: function (evtType, handler) {
                            if (_this.navIcon_) {
                                _this.navIcon_.removeEventListener(evtType, handler);
                            }
                        },
                        notifyNavigationIconClicked: function () {
                            return _this.emit(strings.NAVIGATION_EVENT, {});
                        },
                        registerScrollHandler: function (handler) {
                            return _this.scrollTarget_.addEventListener('scroll', handler);
                        },
                        deregisterScrollHandler: function (handler) {
                            return _this.scrollTarget_.removeEventListener('scroll', handler);
                        },
                        registerResizeHandler: function (handler) {
                            return window.addEventListener('resize', handler);
                        },
                        deregisterResizeHandler: function (handler) {
                            return window.removeEventListener('resize', handler);
                        },
                        getViewportScrollY: function () {
                            var win = _this.scrollTarget_;
                            var el = _this.scrollTarget_;
                            return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
                        },
                        getTotalActionItems: function () {
                            return _this.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length;
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    var foundation;
                    if (this.root_.classList.contains(cssClasses.SHORT_CLASS)) {
                        foundation = new foundation_MDCShortTopAppBarFoundation(adapter);
                    } else if (this.root_.classList.contains(cssClasses.FIXED_CLASS)) {
                        foundation = new foundation_MDCFixedTopAppBarFoundation(adapter);
                    } else {
                        foundation = new foundation_MDCTopAppBarFoundation(adapter);
                    }
                    return foundation;
                };
                return MDCTopAppBar;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // EXTERNAL MODULE: ../node_modules/@material/textfield/component.js + 11 modules
            var textfield_component = __webpack_require__(14);

            // EXTERNAL MODULE: ../node_modules/@material/floating-label/component.js
            var floating_label_component = __webpack_require__(32);

            // EXTERNAL MODULE: ../node_modules/@material/line-ripple/component.js + 2 modules
            var line_ripple_component = __webpack_require__(42);

            // CONCATENATED MODULE: ../node_modules/@material/menu-surface/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var constants_cssClasses = {
                ANCHOR: 'mdc-menu-surface--anchor',
                ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
                ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
                FIXED: 'mdc-menu-surface--fixed',
                OPEN: 'mdc-menu-surface--open',
                ROOT: 'mdc-menu-surface',
            };
            // tslint:disable:object-literal-sort-keys
            var constants_strings = {
                CLOSED_EVENT: 'MDCMenuSurface:closed',
                OPENED_EVENT: 'MDCMenuSurface:opened',
                FOCUSABLE_ELEMENTS: [
                    'button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)',
                    'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
                ].join(', '),
            };
            // tslint:enable:object-literal-sort-keys
            var constants_numbers = {
                /** Total duration of menu-surface open animation. */
                TRANSITION_OPEN_DURATION: 120,
                /** Total duration of menu-surface close animation. */
                TRANSITION_CLOSE_DURATION: 75,
                /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
                MARGIN_TO_EDGE: 32,
                /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
                ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
            };
            /**
             * Enum for bits in the {@see Corner) bitmap.
             */
            var CornerBit;
            (function (CornerBit) {
                CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
                CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
                CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
                CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
            })(CornerBit || (CornerBit = {}));
            /**
             * Enum for representing an element corner for positioning the menu-surface.
             *
             * The START constants map to LEFT if element directionality is left
             * to right and RIGHT if the directionality is right to left.
             * Likewise END maps to RIGHT or LEFT depending on the directionality.
             */
            var Corner;
            (function (Corner) {
                Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
                Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
                Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
                Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
                Corner[Corner["TOP_START"] = 8] = "TOP_START";
                Corner[Corner["TOP_END"] = 12] = "TOP_END";
                Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
                Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
            })(Corner || (Corner = {}));

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/menu/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var menu_constants_cssClasses = {
                MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
                MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
                ROOT: 'mdc-menu',
            };
            var menu_constants_strings = {
                ARIA_SELECTED_ATTR: 'aria-selected',
                CHECKBOX_SELECTOR: 'input[type="checkbox"]',
                LIST_SELECTOR: '.mdc-list',
                SELECTED_EVENT: 'MDCMenu:selected',
            };

            //# sourceMappingURL=constants.js.map
            // EXTERNAL MODULE: ../node_modules/@material/dom/index.js
            var dom = __webpack_require__(8);

            // CONCATENATED MODULE: ../node_modules/@material/list/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var list_constants_cssClasses = {
                LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
                LIST_ITEM_CLASS: 'mdc-list-item',
                LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
                ROOT: 'mdc-list',
            };
            var list_constants_strings = {
                ACTION_EVENT: 'MDCList:action',
                ARIA_CHECKED: 'aria-checked',
                ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
                ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
                ARIA_ORIENTATION: 'aria-orientation',
                ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
                ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
                ARIA_SELECTED: 'aria-selected',
                CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
                CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
                CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " a\n  ",
                ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)',
                FOCUSABLE_CHILD_ELEMENTS: "\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " a,\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + list_constants_cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
                RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/list/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

            function isNumberArray(selectedIndex) {
                return selectedIndex instanceof Array;
            }
            var foundation_MDCListFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCListFoundation, _super);

                function MDCListFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCListFoundation.defaultAdapter, adapter)) || this;
                    _this.wrapFocus_ = false;
                    _this.isVertical_ = true;
                    _this.isSingleSelectionList_ = false;
                    _this.selectedIndex_ = -1;
                    _this.focusedItemIndex_ = -1;
                    _this.useActivatedClass_ = false;
                    _this.isCheckboxList_ = false;
                    _this.isRadioList_ = false;
                    return _this;
                }
                Object.defineProperty(MDCListFoundation, "strings", {
                    get: function () {
                        return list_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCListFoundation, "cssClasses", {
                    get: function () {
                        return list_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCListFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClassForElementIndex: function () {
                                return undefined;
                            },
                            focusItemAtIndex: function () {
                                return undefined;
                            },
                            getFocusedElementIndex: function () {
                                return 0;
                            },
                            getListItemCount: function () {
                                return 0;
                            },
                            hasCheckboxAtIndex: function () {
                                return false;
                            },
                            hasRadioAtIndex: function () {
                                return false;
                            },
                            isCheckboxCheckedAtIndex: function () {
                                return false;
                            },
                            isFocusInsideList: function () {
                                return false;
                            },
                            notifyAction: function () {
                                return undefined;
                            },
                            removeClassForElementIndex: function () {
                                return undefined;
                            },
                            setAttributeForElementIndex: function () {
                                return undefined;
                            },
                            setCheckedCheckboxOrRadioAtIndex: function () {
                                return undefined;
                            },
                            setTabIndexForListItemChildren: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCListFoundation.prototype.layout = function () {
                    if (this.adapter_.getListItemCount() === 0) {
                        return;
                    }
                    if (this.adapter_.hasCheckboxAtIndex(0)) {
                        this.isCheckboxList_ = true;
                    } else if (this.adapter_.hasRadioAtIndex(0)) {
                        this.isRadioList_ = true;
                    }
                };
                /**
                 * Sets the private wrapFocus_ variable.
                 */
                MDCListFoundation.prototype.setWrapFocus = function (value) {
                    this.wrapFocus_ = value;
                };
                /**
                 * Sets the isVertical_ private variable.
                 */
                MDCListFoundation.prototype.setVerticalOrientation = function (value) {
                    this.isVertical_ = value;
                };
                /**
                 * Sets the isSingleSelectionList_ private variable.
                 */
                MDCListFoundation.prototype.setSingleSelection = function (value) {
                    this.isSingleSelectionList_ = value;
                };
                /**
                 * Sets the useActivatedClass_ private variable.
                 */
                MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
                    this.useActivatedClass_ = useActivated;
                };
                MDCListFoundation.prototype.getSelectedIndex = function () {
                    return this.selectedIndex_;
                };
                MDCListFoundation.prototype.setSelectedIndex = function (index) {
                    if (!this.isIndexValid_(index)) {
                        return;
                    }
                    if (this.isCheckboxList_) {
                        this.setCheckboxAtIndex_(index);
                    } else if (this.isRadioList_) {
                        this.setRadioAtIndex_(index);
                    } else {
                        this.setSingleSelectionAtIndex_(index);
                    }
                };
                /**
                 * Focus in handler for the list items.
                 */
                MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
                    if (listItemIndex >= 0) {
                        this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
                    }
                };
                /**
                 * Focus out handler for the list items.
                 */
                MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
                    var _this = this;
                    if (listItemIndex >= 0) {
                        this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
                    }
                    /**
                     * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
                     * is moved to next element.
                     */
                    setTimeout(function () {
                        if (!_this.adapter_.isFocusInsideList()) {
                            _this.setTabindexToFirstSelectedItem_();
                        }
                    }, 0);
                };
                /**
                 * Key handler for the list.
                 */
                MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
                    var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
                    var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
                    var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
                    var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
                    var isHome = evt.key === 'Home' || evt.keyCode === 36;
                    var isEnd = evt.key === 'End' || evt.keyCode === 35;
                    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
                    var isSpace = evt.key === 'Space' || evt.keyCode === 32;
                    var currentIndex = this.adapter_.getFocusedElementIndex();
                    var nextIndex = -1;
                    if (currentIndex === -1) {
                        currentIndex = listItemIndex;
                        if (currentIndex < 0) {
                            // If this event doesn't have a mdc-list-item ancestor from the
                            // current list (not from a sublist), return early.
                            return;
                        }
                    }
                    if ((this.isVertical_ && arrowDown) || (!this.isVertical_ && arrowRight)) {
                        this.preventDefaultEvent_(evt);
                        nextIndex = this.focusNextElement(currentIndex);
                    } else if ((this.isVertical_ && arrowUp) || (!this.isVertical_ && arrowLeft)) {
                        this.preventDefaultEvent_(evt);
                        nextIndex = this.focusPrevElement(currentIndex);
                    } else if (isHome) {
                        this.preventDefaultEvent_(evt);
                        nextIndex = this.focusFirstElement();
                    } else if (isEnd) {
                        this.preventDefaultEvent_(evt);
                        nextIndex = this.focusLastElement();
                    } else if (isEnter || isSpace) {
                        if (isRootListItem) {
                            // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
                            var target = evt.target;
                            if (target && target.tagName === 'A' && isEnter) {
                                return;
                            }
                            this.preventDefaultEvent_(evt);
                            if (this.isSelectableList_()) {
                                this.setSelectedIndexOnAction_(currentIndex);
                            }
                            this.adapter_.notifyAction(currentIndex);
                        }
                    }
                    this.focusedItemIndex_ = currentIndex;
                    if (nextIndex >= 0) {
                        this.setTabindexAtIndex_(nextIndex);
                        this.focusedItemIndex_ = nextIndex;
                    }
                };
                /**
                 * Click handler for the list.
                 */
                MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
                    if (index === -1) {
                        return;
                    }
                    if (this.isSelectableList_()) {
                        this.setSelectedIndexOnAction_(index, toggleCheckbox);
                    }
                    this.adapter_.notifyAction(index);
                    this.setTabindexAtIndex_(index);
                    this.focusedItemIndex_ = index;
                };
                /**
                 * Focuses the next element on the list.
                 */
                MDCListFoundation.prototype.focusNextElement = function (index) {
                    var count = this.adapter_.getListItemCount();
                    var nextIndex = index + 1;
                    if (nextIndex >= count) {
                        if (this.wrapFocus_) {
                            nextIndex = 0;
                        } else {
                            // Return early because last item is already focused.
                            return index;
                        }
                    }
                    this.adapter_.focusItemAtIndex(nextIndex);
                    return nextIndex;
                };
                /**
                 * Focuses the previous element on the list.
                 */
                MDCListFoundation.prototype.focusPrevElement = function (index) {
                    var prevIndex = index - 1;
                    if (prevIndex < 0) {
                        if (this.wrapFocus_) {
                            prevIndex = this.adapter_.getListItemCount() - 1;
                        } else {
                            // Return early because first item is already focused.
                            return index;
                        }
                    }
                    this.adapter_.focusItemAtIndex(prevIndex);
                    return prevIndex;
                };
                MDCListFoundation.prototype.focusFirstElement = function () {
                    this.adapter_.focusItemAtIndex(0);
                    return 0;
                };
                MDCListFoundation.prototype.focusLastElement = function () {
                    var lastIndex = this.adapter_.getListItemCount() - 1;
                    this.adapter_.focusItemAtIndex(lastIndex);
                    return lastIndex;
                };
                /**
                 * Ensures that preventDefault is only called if the containing element doesn't
                 * consume the event, and it will cause an unintended scroll.
                 */
                MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
                    var target = evt.target;
                    var tagName = ("" + target.tagName).toLowerCase();
                    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
                        evt.preventDefault();
                    }
                };
                MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
                    var selectedClassName = list_constants_cssClasses.LIST_ITEM_SELECTED_CLASS;
                    if (this.useActivatedClass_) {
                        selectedClassName = list_constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS;
                    }
                    if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
                        this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
                        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, list_constants_strings.ARIA_SELECTED, 'false');
                    }
                    this.adapter_.addClassForElementIndex(index, selectedClassName);
                    this.adapter_.setAttributeForElementIndex(index, list_constants_strings.ARIA_SELECTED, 'true');
                    this.selectedIndex_ = index;
                };
                /**
                 * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
                 */
                MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
                    this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);
                    if (this.selectedIndex_ >= 0) {
                        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, list_constants_strings.ARIA_CHECKED, 'false');
                    }
                    this.adapter_.setAttributeForElementIndex(index, list_constants_strings.ARIA_CHECKED, 'true');
                    this.selectedIndex_ = index;
                };
                MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
                    for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
                        var isChecked = false;
                        if (index.indexOf(i) >= 0) {
                            isChecked = true;
                        }
                        this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
                        this.adapter_.setAttributeForElementIndex(i, list_constants_strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
                    }
                    this.selectedIndex_ = index;
                };
                MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
                    if (this.focusedItemIndex_ === -1 && index !== 0) {
                        // If no list item was selected set first list item's tabindex to -1.
                        // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
                        this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
                    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
                        this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
                    }
                    this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
                };
                /**
                 * @return Return true if it is single selectin list, checkbox list or radio list.
                 */
                MDCListFoundation.prototype.isSelectableList_ = function () {
                    return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
                };
                MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
                    var targetIndex = 0;
                    if (this.isSelectableList_()) {
                        if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== -1) {
                            targetIndex = this.selectedIndex_;
                        } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
                            targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
                                return Math.min(currentIndex, minIndex);
                            });
                        }
                    }
                    this.setTabindexAtIndex_(targetIndex);
                };
                MDCListFoundation.prototype.isIndexValid_ = function (index) {
                    var _this = this;
                    if (index instanceof Array) {
                        if (!this.isCheckboxList_) {
                            throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
                        }
                        if (index.length === 0) {
                            return true;
                        } else {
                            return index.some(function (i) {
                                return _this.isIndexInRange_(i);
                            });
                        }
                    } else if (typeof index === 'number') {
                        if (this.isCheckboxList_) {
                            throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
                        }
                        return this.isIndexInRange_(index);
                    } else {
                        return false;
                    }
                };
                MDCListFoundation.prototype.isIndexInRange_ = function (index) {
                    var listSize = this.adapter_.getListItemCount();
                    return index >= 0 && index < listSize;
                };
                MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
                    if (toggleCheckbox === void 0) {
                        toggleCheckbox = true;
                    }
                    if (this.isCheckboxList_) {
                        this.toggleCheckboxAtIndex_(index, toggleCheckbox);
                    } else {
                        this.setSelectedIndex(index);
                    }
                };
                MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
                    var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);
                    if (toggleCheckbox) {
                        isChecked = !isChecked;
                        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
                    }
                    this.adapter_.setAttributeForElementIndex(index, list_constants_strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
                    // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.
                    var selectedIndexes = this.selectedIndex_ === -1 ? [] : this.selectedIndex_.slice();
                    if (isChecked) {
                        selectedIndexes.push(index);
                    } else {
                        selectedIndexes = selectedIndexes.filter(function (i) {
                            return i !== index;
                        });
                    }
                    this.selectedIndex_ = selectedIndexes;
                };
                return MDCListFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var list_foundation = (foundation_MDCListFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/list/component.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */





            var component_MDCList = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCList, _super);

                function MDCList() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(MDCList.prototype, "vertical", {
                    set: function (value) {
                        this.foundation_.setVerticalOrientation(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCList.prototype, "listElements", {
                    get: function () {
                        return [].slice.call(this.root_.querySelectorAll(list_constants_strings.ENABLED_ITEMS_SELECTOR));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCList.prototype, "wrapFocus", {
                    set: function (value) {
                        this.foundation_.setWrapFocus(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCList.prototype, "singleSelection", {
                    set: function (isSingleSelectionList) {
                        this.foundation_.setSingleSelection(isSingleSelectionList);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCList.prototype, "selectedIndex", {
                    get: function () {
                        return this.foundation_.getSelectedIndex();
                    },
                    set: function (index) {
                        this.foundation_.setSelectedIndex(index);
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCList.attachTo = function (root) {
                    return new MDCList(root);
                };
                MDCList.prototype.initialSyncWithDOM = function () {
                    this.handleClick_ = this.handleClickEvent_.bind(this);
                    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
                    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
                    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
                    this.listen('keydown', this.handleKeydown_);
                    this.listen('click', this.handleClick_);
                    this.listen('focusin', this.focusInEventListener_);
                    this.listen('focusout', this.focusOutEventListener_);
                    this.layout();
                    this.initializeListType();
                };
                MDCList.prototype.destroy = function () {
                    this.unlisten('keydown', this.handleKeydown_);
                    this.unlisten('click', this.handleClick_);
                    this.unlisten('focusin', this.focusInEventListener_);
                    this.unlisten('focusout', this.focusOutEventListener_);
                };
                MDCList.prototype.layout = function () {
                    var direction = this.root_.getAttribute(list_constants_strings.ARIA_ORIENTATION);
                    this.vertical = direction !== list_constants_strings.ARIA_ORIENTATION_HORIZONTAL;
                    // List items need to have at least tabindex=-1 to be focusable.
                    [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])'))
                        .forEach(function (el) {
                            el.setAttribute('tabindex', '-1');
                        });
                    // Child button/a elements are not tabbable until the list item is focused.
                    [].slice.call(this.root_.querySelectorAll(list_constants_strings.FOCUSABLE_CHILD_ELEMENTS))
                        .forEach(function (el) {
                            return el.setAttribute('tabindex', '-1');
                        });
                    this.foundation_.layout();
                };
                /**
                 * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
                 */
                MDCList.prototype.initializeListType = function () {
                    var _this = this;
                    var checkboxListItems = this.root_.querySelectorAll(list_constants_strings.ARIA_ROLE_CHECKBOX_SELECTOR);
                    var singleSelectedListItem = this.root_.querySelector("\n      ." + list_constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + list_constants_cssClasses.LIST_ITEM_SELECTED_CLASS + "\n    ");
                    var radioSelectedListItem = this.root_.querySelector(list_constants_strings.ARIA_CHECKED_RADIO_SELECTOR);
                    if (checkboxListItems.length) {
                        var preselectedItems = this.root_.querySelectorAll(list_constants_strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
                        this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
                            return _this.listElements.indexOf(listItem);
                        });
                    } else if (singleSelectedListItem) {
                        if (singleSelectedListItem.classList.contains(list_constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
                            this.foundation_.setUseActivatedClass(true);
                        }
                        this.singleSelection = true;
                        this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
                    } else if (radioSelectedListItem) {
                        this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
                    }
                };
                MDCList.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = {
                        addClassForElementIndex: function (index, className) {
                            var element = _this.listElements[index];
                            if (element) {
                                element.classList.add(className);
                            }
                        },
                        focusItemAtIndex: function (index) {
                            var element = _this.listElements[index];
                            if (element) {
                                element.focus();
                            }
                        },
                        getFocusedElementIndex: function () {
                            return _this.listElements.indexOf(document.activeElement);
                        },
                        getListItemCount: function () {
                            return _this.listElements.length;
                        },
                        hasCheckboxAtIndex: function (index) {
                            var listItem = _this.listElements[index];
                            return !!listItem.querySelector(list_constants_strings.CHECKBOX_SELECTOR);
                        },
                        hasRadioAtIndex: function (index) {
                            var listItem = _this.listElements[index];
                            return !!listItem.querySelector(list_constants_strings.RADIO_SELECTOR);
                        },
                        isCheckboxCheckedAtIndex: function (index) {
                            var listItem = _this.listElements[index];
                            var toggleEl = listItem.querySelector(list_constants_strings.CHECKBOX_SELECTOR);
                            return toggleEl.checked;
                        },
                        isFocusInsideList: function () {
                            return _this.root_.contains(document.activeElement);
                        },
                        notifyAction: function (index) {
                            _this.emit(list_constants_strings.ACTION_EVENT, {
                                index: index
                            }, /** shouldBubble */ true);
                        },
                        removeClassForElementIndex: function (index, className) {
                            var element = _this.listElements[index];
                            if (element) {
                                element.classList.remove(className);
                            }
                        },
                        setAttributeForElementIndex: function (index, attr, value) {
                            var element = _this.listElements[index];
                            if (element) {
                                element.setAttribute(attr, value);
                            }
                        },
                        setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
                            var listItem = _this.listElements[index];
                            var toggleEl = listItem.querySelector(list_constants_strings.CHECKBOX_RADIO_SELECTOR);
                            toggleEl.checked = isChecked;
                            var event = document.createEvent('Event');
                            event.initEvent('change', true, true);
                            toggleEl.dispatchEvent(event);
                        },
                        setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                            var element = _this.listElements[listItemIndex];
                            var listItemChildren = [].slice.call(element.querySelectorAll(list_constants_strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                            listItemChildren.forEach(function (el) {
                                return el.setAttribute('tabindex', tabIndexValue);
                            });
                        },
                    };
                    return new foundation_MDCListFoundation(adapter);
                };
                /**
                 * Used to figure out which list item this event is targetting. Or returns -1 if
                 * there is no list item
                 */
                MDCList.prototype.getListItemIndex_ = function (evt) {
                    var eventTarget = evt.target;
                    var nearestParent = dom["a" /* ponyfill */ ].closest(eventTarget, "." + list_constants_cssClasses.LIST_ITEM_CLASS + ", ." + list_constants_cssClasses.ROOT);
                    // Get the index of the element if it is a list item.
                    if (nearestParent && dom["a" /* ponyfill */ ].matches(nearestParent, "." + list_constants_cssClasses.LIST_ITEM_CLASS)) {
                        return this.listElements.indexOf(nearestParent);
                    }
                    return -1;
                };
                /**
                 * Used to figure out which element was clicked before sending the event to the foundation.
                 */
                MDCList.prototype.handleFocusInEvent_ = function (evt) {
                    var index = this.getListItemIndex_(evt);
                    this.foundation_.handleFocusIn(evt, index);
                };
                /**
                 * Used to figure out which element was clicked before sending the event to the foundation.
                 */
                MDCList.prototype.handleFocusOutEvent_ = function (evt) {
                    var index = this.getListItemIndex_(evt);
                    this.foundation_.handleFocusOut(evt, index);
                };
                /**
                 * Used to figure out which element was focused when keydown event occurred before sending the event to the
                 * foundation.
                 */
                MDCList.prototype.handleKeydownEvent_ = function (evt) {
                    var index = this.getListItemIndex_(evt);
                    var target = evt.target;
                    if (index >= 0) {
                        this.foundation_.handleKeydown(evt, target.classList.contains(list_constants_cssClasses.LIST_ITEM_CLASS), index);
                    }
                };
                /**
                 * Used to figure out which element was clicked before sending the event to the foundation.
                 */
                MDCList.prototype.handleClickEvent_ = function (evt) {
                    var index = this.getListItemIndex_(evt);
                    var target = evt.target;
                    // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
                    var toggleCheckbox = !dom["a" /* ponyfill */ ].matches(target, list_constants_strings.CHECKBOX_RADIO_SELECTOR);
                    this.foundation_.handleClick(index, toggleCheckbox);
                };
                return MDCList;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/menu-surface/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCMenuSurfaceFoundation, _super);

                function MDCMenuSurfaceFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;
                    _this.isOpen_ = false;
                    _this.isQuickOpen_ = false;
                    _this.isHoistedElement_ = false;
                    _this.isFixedPosition_ = false;
                    _this.openAnimationEndTimerId_ = 0;
                    _this.closeAnimationEndTimerId_ = 0;
                    _this.animationRequestId_ = 0;
                    _this.anchorCorner_ = Corner.TOP_START;
                    _this.anchorMargin_ = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    _this.position_ = {
                        x: 0,
                        y: 0
                    };
                    return _this;
                }
                Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
                    get: function () {
                        return constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
                    get: function () {
                        return constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
                    get: function () {
                        return constants_numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
                    get: function () {
                        return Corner;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
                    /**
                     * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            hasClass: function () {
                                return false;
                            },
                            hasAnchor: function () {
                                return false;
                            },
                            isElementInContainer: function () {
                                return false;
                            },
                            isFocused: function () {
                                return false;
                            },
                            isFirstElementFocused: function () {
                                return false;
                            },
                            isLastElementFocused: function () {
                                return false;
                            },
                            isRtl: function () {
                                return false;
                            },
                            getInnerDimensions: function () {
                                return ({
                                    height: 0,
                                    width: 0
                                });
                            },
                            getAnchorDimensions: function () {
                                return null;
                            },
                            getWindowDimensions: function () {
                                return ({
                                    height: 0,
                                    width: 0
                                });
                            },
                            getBodyDimensions: function () {
                                return ({
                                    height: 0,
                                    width: 0
                                });
                            },
                            getWindowScroll: function () {
                                return ({
                                    x: 0,
                                    y: 0
                                });
                            },
                            setPosition: function () {
                                return undefined;
                            },
                            setMaxHeight: function () {
                                return undefined;
                            },
                            setTransformOrigin: function () {
                                return undefined;
                            },
                            saveFocus: function () {
                                return undefined;
                            },
                            restoreFocus: function () {
                                return undefined;
                            },
                            focusFirstElement: function () {
                                return undefined;
                            },
                            focusLastElement: function () {
                                return undefined;
                            },
                            notifyClose: function () {
                                return undefined;
                            },
                            notifyOpen: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCMenuSurfaceFoundation.prototype.init = function () {
                    var _a = MDCMenuSurfaceFoundation.cssClasses,
                        ROOT = _a.ROOT,
                        OPEN = _a.OPEN;
                    if (!this.adapter_.hasClass(ROOT)) {
                        throw new Error(ROOT + " class required in root element.");
                    }
                    if (this.adapter_.hasClass(OPEN)) {
                        this.isOpen_ = true;
                    }
                };
                MDCMenuSurfaceFoundation.prototype.destroy = function () {
                    clearTimeout(this.openAnimationEndTimerId_);
                    clearTimeout(this.closeAnimationEndTimerId_);
                    // Cancel any currently running animations.
                    cancelAnimationFrame(this.animationRequestId_);
                };
                /**
                 * @param corner Default anchor corner alignment of top-left menu surface corner.
                 */
                MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
                    this.anchorCorner_ = corner;
                };
                /**
                 * @param margin Set of margin values from anchor.
                 */
                MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
                    this.anchorMargin_.top = margin.top || 0;
                    this.anchorMargin_.right = margin.right || 0;
                    this.anchorMargin_.bottom = margin.bottom || 0;
                    this.anchorMargin_.left = margin.left || 0;
                };
                /** Used to indicate if the menu-surface is hoisted to the body. */
                MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
                    this.isHoistedElement_ = isHoisted;
                };
                /** Used to set the menu-surface calculations based on a fixed position menu. */
                MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
                    this.isFixedPosition_ = isFixedPosition;
                };
                /** Sets the menu-surface position on the page. */
                MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
                    this.position_.x = this.isFinite_(x) ? x : 0;
                    this.position_.y = this.isFinite_(y) ? y : 0;
                };
                MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
                    this.isQuickOpen_ = quickOpen;
                };
                MDCMenuSurfaceFoundation.prototype.isOpen = function () {
                    return this.isOpen_;
                };
                /**
                 * Open the menu surface.
                 */
                MDCMenuSurfaceFoundation.prototype.open = function () {
                    var _this = this;
                    this.adapter_.saveFocus();
                    if (!this.isQuickOpen_) {
                        this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    }
                    this.animationRequestId_ = requestAnimationFrame(function () {
                        _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                        _this.dimensions_ = _this.adapter_.getInnerDimensions();
                        _this.autoPosition_();
                        if (_this.isQuickOpen_) {
                            _this.adapter_.notifyOpen();
                        } else {
                            _this.openAnimationEndTimerId_ = setTimeout(function () {
                                _this.openAnimationEndTimerId_ = 0;
                                _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                                _this.adapter_.notifyOpen();
                            }, constants_numbers.TRANSITION_OPEN_DURATION);
                        }
                    });
                    this.isOpen_ = true;
                };
                /**
                 * Closes the menu surface.
                 */
                MDCMenuSurfaceFoundation.prototype.close = function () {
                    var _this = this;
                    if (!this.isQuickOpen_) {
                        this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                    }
                    requestAnimationFrame(function () {
                        _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                        if (_this.isQuickOpen_) {
                            _this.adapter_.notifyClose();
                        } else {
                            _this.closeAnimationEndTimerId_ = setTimeout(function () {
                                _this.closeAnimationEndTimerId_ = 0;
                                _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                                _this.adapter_.notifyClose();
                            }, constants_numbers.TRANSITION_CLOSE_DURATION);
                        }
                    });
                    this.isOpen_ = false;
                    this.maybeRestoreFocus_();
                };
                /** Handle clicks and close if not within menu-surface element. */
                MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
                    var el = evt.target;
                    if (this.adapter_.isElementInContainer(el)) {
                        return;
                    }
                    this.close();
                };
                /** Handle keys that close the surface. */
                MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
                    var keyCode = evt.keyCode,
                        key = evt.key,
                        shiftKey = evt.shiftKey;
                    var isEscape = key === 'Escape' || keyCode === 27;
                    var isTab = key === 'Tab' || keyCode === 9;
                    if (isEscape) {
                        this.close();
                    } else if (isTab) {
                        if (this.adapter_.isLastElementFocused() && !shiftKey) {
                            this.adapter_.focusFirstElement();
                            evt.preventDefault();
                        } else if (this.adapter_.isFirstElementFocused() && shiftKey) {
                            this.adapter_.focusLastElement();
                            evt.preventDefault();
                        }
                    }
                };
                MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
                    var _a;
                    // Compute measurements for autoposition methods reuse.
                    this.measurements_ = this.getAutoLayoutMeasurements_();
                    var corner = this.getOriginCorner_();
                    var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
                    var verticalAlignment = this.hasBit_(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
                    var horizontalAlignment = this.hasBit_(corner, CornerBit.RIGHT) ? 'right' : 'left';
                    var horizontalOffset = this.getHorizontalOriginOffset_(corner);
                    var verticalOffset = this.getVerticalOriginOffset_(corner);
                    var _b = this.measurements_,
                        anchorSize = _b.anchorSize,
                        surfaceSize = _b.surfaceSize;
                    var position = (_a = {},
                        _a[horizontalAlignment] = horizontalOffset,
                        _a[verticalAlignment] = verticalOffset,
                        _a);
                    // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.
                    if (anchorSize.width / surfaceSize.width > constants_numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
                        horizontalAlignment = 'center';
                    }
                    // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
                    if (this.isHoistedElement_ || this.isFixedPosition_) {
                        this.adjustPositionForHoistedElement_(position);
                    }
                    this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
                    this.adapter_.setPosition(position);
                    this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
                };
                /**
                 * @return Measurements used to position menu surface popup.
                 */
                MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
                    var anchorRect = this.adapter_.getAnchorDimensions();
                    var bodySize = this.adapter_.getBodyDimensions();
                    var viewportSize = this.adapter_.getWindowDimensions();
                    var windowScroll = this.adapter_.getWindowScroll();
                    if (!anchorRect) {
                        // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                        anchorRect = {
                            top: this.position_.y,
                            right: this.position_.x,
                            bottom: this.position_.y,
                            left: this.position_.x,
                            width: 0,
                            height: 0,
                        };
                        // tslint:enable:object-literal-sort-keys
                    }
                    return {
                        anchorSize: anchorRect,
                        bodySize: bodySize,
                        surfaceSize: this.dimensions_,
                        viewportDistance: {
                            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                            top: anchorRect.top,
                            right: viewportSize.width - anchorRect.right,
                            bottom: viewportSize.height - anchorRect.bottom,
                            left: anchorRect.left,
                        },
                        viewportSize: viewportSize,
                        windowScroll: windowScroll,
                    };
                };
                /**
                 * Computes the corner of the anchor from which to animate and position the menu surface.
                 */
                MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
                    // Defaults: open from the top left.
                    var corner = Corner.TOP_LEFT;
                    var _a = this.measurements_,
                        viewportDistance = _a.viewportDistance,
                        anchorSize = _a.anchorSize,
                        surfaceSize = _a.surfaceSize;
                    var isBottomAligned = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
                    var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom :
                        viewportDistance.top + this.anchorMargin_.top;
                    var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom :
                        viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
                    var topOverflow = surfaceSize.height - availableTop;
                    var bottomOverflow = surfaceSize.height - availableBottom;
                    if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
                        corner = this.setBit_(corner, CornerBit.BOTTOM);
                    }
                    var isRtl = this.adapter_.isRtl();
                    var isFlipRtl = this.hasBit_(this.anchorCorner_, CornerBit.FLIP_RTL);
                    var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
                    var isAlignedRight = (avoidHorizontalOverlap && !isRtl) ||
                        (!avoidHorizontalOverlap && isFlipRtl && isRtl);
                    var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right :
                        viewportDistance.left + this.anchorMargin_.left;
                    var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right :
                        viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
                    var leftOverflow = surfaceSize.width - availableLeft;
                    var rightOverflow = surfaceSize.width - availableRight;
                    if ((leftOverflow < 0 && isAlignedRight && isRtl) ||
                        (avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0) ||
                        (rightOverflow > 0 && leftOverflow < rightOverflow)) {
                        corner = this.setBit_(corner, CornerBit.RIGHT);
                    }
                    return corner;
                };
                /**
                 * @param corner Origin corner of the menu surface.
                 * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
                 */
                MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
                    var viewportDistance = this.measurements_.viewportDistance;
                    var maxHeight = 0;
                    var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
                    var isBottomAnchored = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
                    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
                    // When maximum height is not specified, it is handled from CSS.
                    if (isBottomAligned) {
                        maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;
                        if (!isBottomAnchored) {
                            maxHeight += this.measurements_.anchorSize.height;
                        }
                    } else {
                        maxHeight =
                            viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;
                        if (isBottomAnchored) {
                            maxHeight -= this.measurements_.anchorSize.height;
                        }
                    }
                    return maxHeight;
                };
                /**
                 * @param corner Origin corner of the menu surface.
                 * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
                 */
                MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
                    var anchorSize = this.measurements_.anchorSize;
                    // isRightAligned corresponds to using the 'right' property on the surface.
                    var isRightAligned = this.hasBit_(corner, CornerBit.RIGHT);
                    var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
                    if (isRightAligned) {
                        var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right;
                        // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
                        // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
                        // the right property is correct.
                        if (this.isHoistedElement_ || this.isFixedPosition_) {
                            return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
                        }
                        return rightOffset;
                    }
                    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
                };
                /**
                 * @param corner Origin corner of the menu surface.
                 * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
                 */
                MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
                    var anchorSize = this.measurements_.anchorSize;
                    var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
                    var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
                    var y = 0;
                    if (isBottomAligned) {
                        y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
                    } else {
                        y = avoidVerticalOverlap ? (anchorSize.height + this.anchorMargin_.bottom) : this.anchorMargin_.top;
                    }
                    return y;
                };
                /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */
                MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
                    var e_1, _a;
                    var _b = this.measurements_,
                        windowScroll = _b.windowScroll,
                        viewportDistance = _b.viewportDistance;
                    var props = Object.keys(position);
                    try {
                        for (var props_1 = tslib_es6["d" /* __values */ ](props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                            var prop = props_1_1.value;
                            var value = position[prop] || 0;
                            // Hoisted surfaces need to have the anchor elements location on the page added to the
                            // position properties for proper alignment on the body.
                            value += viewportDistance[prop];
                            // Surfaces that are absolutely positioned need to have additional calculations for scroll
                            // and bottom positioning.
                            if (!this.isFixedPosition_) {
                                if (prop === 'top') {
                                    value += windowScroll.y;
                                } else if (prop === 'bottom') {
                                    value -= windowScroll.y;
                                } else if (prop === 'left') {
                                    value += windowScroll.x;
                                } else { // prop === 'right'
                                    value -= windowScroll.x;
                                }
                            }
                            position[prop] = value;
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally {
                        try {
                            if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
                        } finally {
                            if (e_1) throw e_1.error;
                        }
                    }
                };
                /**
                 * The last focused element when the menu surface was opened should regain focus, if the user is
                 * focused on or within the menu surface when it is closed.
                 */
                MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
                    var isRootFocused = this.adapter_.isFocused();
                    var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);
                    if (isRootFocused || childHasFocus) {
                        this.adapter_.restoreFocus();
                    }
                };
                MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
                    return Boolean(corner & bit); // tslint:disable-line:no-bitwise
                };
                MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
                    return corner | bit; // tslint:disable-line:no-bitwise
                };
                /**
                 * isFinite that doesn't force conversion to number type.
                 * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
                 */
                MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
                    return typeof num === 'number' && isFinite(num);
                };
                return MDCMenuSurfaceFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var menu_surface_foundation = (foundation_MDCMenuSurfaceFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/menu-surface/util.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cachedCssTransformPropertyName_;
            /**
             * Returns the name of the correct transform property to use on the current browser.
             */
            function getTransformPropertyName(globalObj, forceRefresh) {
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
                    var el = globalObj.document.createElement('div');
                    cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
                }
                return cachedCssTransformPropertyName_;
            }

            //# sourceMappingURL=util.js.map
            // CONCATENATED MODULE: ../node_modules/@material/menu-surface/component.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */





            var component_MDCMenuSurface = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCMenuSurface, _super);

                function MDCMenuSurface() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCMenuSurface.attachTo = function (root) {
                    return new MDCMenuSurface(root);
                };
                MDCMenuSurface.prototype.initialSyncWithDOM = function () {
                    var _this = this;
                    var parentEl = this.root_.parentElement;
                    this.anchorElement = parentEl && parentEl.classList.contains(constants_cssClasses.ANCHOR) ? parentEl : null;
                    if (this.root_.classList.contains(constants_cssClasses.FIXED)) {
                        this.setFixedPosition(true);
                    }
                    this.handleKeydown_ = function (evt) {
                        return _this.foundation_.handleKeydown(evt);
                    };
                    this.handleBodyClick_ = function (evt) {
                        return _this.foundation_.handleBodyClick(evt);
                    };
                    this.registerBodyClickListener_ = function () {
                        return document.body.addEventListener('click', _this.handleBodyClick_);
                    };
                    this.deregisterBodyClickListener_ = function () {
                        return document.body.removeEventListener('click', _this.handleBodyClick_);
                    };
                    this.listen('keydown', this.handleKeydown_);
                    this.listen(constants_strings.OPENED_EVENT, this.registerBodyClickListener_);
                    this.listen(constants_strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
                };
                MDCMenuSurface.prototype.destroy = function () {
                    this.unlisten('keydown', this.handleKeydown_);
                    this.unlisten(constants_strings.OPENED_EVENT, this.registerBodyClickListener_);
                    this.unlisten(constants_strings.CLOSED_EVENT, this.deregisterBodyClickListener_);
                    _super.prototype.destroy.call(this);
                };
                Object.defineProperty(MDCMenuSurface.prototype, "open", {
                    get: function () {
                        return this.foundation_.isOpen();
                    },
                    set: function (value) {
                        if (value) {
                            var focusableElements = this.root_.querySelectorAll(constants_strings.FOCUSABLE_ELEMENTS);
                            this.firstFocusableElement_ = focusableElements[0];
                            this.lastFocusableElement_ = focusableElements[focusableElements.length - 1];
                            this.foundation_.open();
                        } else {
                            this.foundation_.close();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenuSurface.prototype, "quickOpen", {
                    set: function (quickOpen) {
                        this.foundation_.setQuickOpen(quickOpen);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Removes the menu-surface from it's current location and appends it to the
                 * body to overcome any overflow:hidden issues.
                 */
                MDCMenuSurface.prototype.hoistMenuToBody = function () {
                    document.body.appendChild(this.root_);
                    this.setIsHoisted(true);
                };
                /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */
                MDCMenuSurface.prototype.setIsHoisted = function (isHoisted) {
                    this.foundation_.setIsHoisted(isHoisted);
                };
                /** Sets the element that the menu-surface is anchored to. */
                MDCMenuSurface.prototype.setMenuSurfaceAnchorElement = function (element) {
                    this.anchorElement = element;
                };
                /** Sets the menu-surface to position: fixed. */
                MDCMenuSurface.prototype.setFixedPosition = function (isFixed) {
                    if (isFixed) {
                        this.root_.classList.add(constants_cssClasses.FIXED);
                    } else {
                        this.root_.classList.remove(constants_cssClasses.FIXED);
                    }
                    this.foundation_.setFixedPosition(isFixed);
                };
                /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */
                MDCMenuSurface.prototype.setAbsolutePosition = function (x, y) {
                    this.foundation_.setAbsolutePosition(x, y);
                    this.setIsHoisted(true);
                };
                /**
                 * @param corner Default anchor corner alignment of top-left surface corner.
                 */
                MDCMenuSurface.prototype.setAnchorCorner = function (corner) {
                    this.foundation_.setAnchorCorner(corner);
                };
                MDCMenuSurface.prototype.setAnchorMargin = function (margin) {
                    this.foundation_.setAnchorMargin(margin);
                };
                MDCMenuSurface.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        hasAnchor: function () {
                            return !!_this.anchorElement;
                        },
                        notifyClose: function () {
                            return _this.emit(foundation_MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
                        },
                        notifyOpen: function () {
                            return _this.emit(foundation_MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
                        },
                        isElementInContainer: function (el) {
                            return _this.root_.contains(el);
                        },
                        isRtl: function () {
                            return getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
                        },
                        setTransformOrigin: function (origin) {
                            var propertyName = getTransformPropertyName(window) + "-origin";
                            _this.root_.style.setProperty(propertyName, origin);
                        },
                        isFocused: function () {
                            return document.activeElement === _this.root_;
                        },
                        saveFocus: function () {
                            _this.previousFocus_ = document.activeElement;
                        },
                        restoreFocus: function () {
                            if (_this.root_.contains(document.activeElement)) {
                                if (_this.previousFocus_ && _this.previousFocus_.focus) {
                                    _this.previousFocus_.focus();
                                }
                            }
                        },
                        isFirstElementFocused: function () {
                            return _this.firstFocusableElement_ ? _this.firstFocusableElement_ === document.activeElement : false;
                        },
                        isLastElementFocused: function () {
                            return _this.lastFocusableElement_ ? _this.lastFocusableElement_ === document.activeElement : false;
                        },
                        focusFirstElement: function () {
                            return _this.firstFocusableElement_ && _this.firstFocusableElement_.focus && _this.firstFocusableElement_.focus();
                        },
                        focusLastElement: function () {
                            return _this.lastFocusableElement_ && _this.lastFocusableElement_.focus && _this.lastFocusableElement_.focus();
                        },
                        getInnerDimensions: function () {
                            return {
                                width: _this.root_.offsetWidth,
                                height: _this.root_.offsetHeight
                            };
                        },
                        getAnchorDimensions: function () {
                            return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
                        },
                        getWindowDimensions: function () {
                            return {
                                width: window.innerWidth,
                                height: window.innerHeight
                            };
                        },
                        getBodyDimensions: function () {
                            return {
                                width: document.body.clientWidth,
                                height: document.body.clientHeight
                            };
                        },
                        getWindowScroll: function () {
                            return {
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            };
                        },
                        setPosition: function (position) {
                            _this.root_.style.left = 'left' in position ? position.left + "px" : '';
                            _this.root_.style.right = 'right' in position ? position.right + "px" : '';
                            _this.root_.style.top = 'top' in position ? position.top + "px" : '';
                            _this.root_.style.bottom = 'bottom' in position ? position.bottom + "px" : '';
                        },
                        setMaxHeight: function (height) {
                            _this.root_.style.maxHeight = height;
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCMenuSurfaceFoundation(adapter);
                };
                return MDCMenuSurface;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/menu/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */





            var foundation_MDCMenuFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCMenuFoundation, _super);

                function MDCMenuFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;
                    _this.closeAnimationEndTimerId_ = 0;
                    return _this;
                }
                Object.defineProperty(MDCMenuFoundation, "cssClasses", {
                    get: function () {
                        return menu_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenuFoundation, "strings", {
                    get: function () {
                        return menu_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
                    /**
                     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClassToElementAtIndex: function () {
                                return undefined;
                            },
                            removeClassFromElementAtIndex: function () {
                                return undefined;
                            },
                            addAttributeToElementAtIndex: function () {
                                return undefined;
                            },
                            removeAttributeFromElementAtIndex: function () {
                                return undefined;
                            },
                            elementContainsClass: function () {
                                return false;
                            },
                            closeSurface: function () {
                                return undefined;
                            },
                            getElementIndex: function () {
                                return -1;
                            },
                            getParentElement: function () {
                                return null;
                            },
                            getSelectedElementIndex: function () {
                                return -1;
                            },
                            notifySelected: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCMenuFoundation.prototype.destroy = function () {
                    if (this.closeAnimationEndTimerId_) {
                        clearTimeout(this.closeAnimationEndTimerId_);
                    }
                    this.adapter_.closeSurface();
                };
                MDCMenuFoundation.prototype.handleKeydown = function (evt) {
                    var key = evt.key,
                        keyCode = evt.keyCode;
                    var isTab = key === 'Tab' || keyCode === 9;
                    if (isTab) {
                        this.adapter_.closeSurface();
                    }
                };
                MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
                    var _this = this;
                    var index = this.adapter_.getElementIndex(listItem);
                    if (index < 0) {
                        return;
                    }
                    this.adapter_.notifySelected({
                        index: index
                    });
                    this.adapter_.closeSurface();
                    // Wait for the menu to close before adding/removing classes that affect styles.
                    this.closeAnimationEndTimerId_ = setTimeout(function () {
                        var selectionGroup = _this.getSelectionGroup_(listItem);
                        if (selectionGroup) {
                            _this.handleSelectionGroup_(selectionGroup, index);
                        }
                    }, foundation_MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
                };
                /**
                 * Handles toggling the selected classes in a selection group when a selection is made.
                 */
                MDCMenuFoundation.prototype.handleSelectionGroup_ = function (selectionGroup, index) {
                    // De-select the previous selection in this group.
                    var selectedIndex = this.adapter_.getSelectedElementIndex(selectionGroup);
                    if (selectedIndex >= 0) {
                        this.adapter_.removeAttributeFromElementAtIndex(selectedIndex, menu_constants_strings.ARIA_SELECTED_ATTR);
                        this.adapter_.removeClassFromElementAtIndex(selectedIndex, menu_constants_cssClasses.MENU_SELECTED_LIST_ITEM);
                    }
                    // Select the new list item in this group.
                    this.adapter_.addClassToElementAtIndex(index, menu_constants_cssClasses.MENU_SELECTED_LIST_ITEM);
                    this.adapter_.addAttributeToElementAtIndex(index, menu_constants_strings.ARIA_SELECTED_ATTR, 'true');
                };
                /**
                 * Returns the parent selection group of an element if one exists.
                 */
                MDCMenuFoundation.prototype.getSelectionGroup_ = function (listItem) {
                    var parent = this.adapter_.getParentElement(listItem);
                    if (!parent) {
                        return null;
                    }
                    var isGroup = this.adapter_.elementContainsClass(parent, menu_constants_cssClasses.MENU_SELECTION_GROUP);
                    // Iterate through ancestors until we find the group or get to the list.
                    while (!isGroup && parent && !this.adapter_.elementContainsClass(parent, foundation_MDCListFoundation.cssClasses.ROOT)) {
                        parent = this.adapter_.getParentElement(parent);
                        isGroup = parent ? this.adapter_.elementContainsClass(parent, menu_constants_cssClasses.MENU_SELECTION_GROUP) : false;
                    }
                    if (isGroup) {
                        return parent;
                    } else {
                        return null;
                    }
                };
                return MDCMenuFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var menu_foundation = (foundation_MDCMenuFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/menu/component.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */







            var component_MDCMenu = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCMenu, _super);

                function MDCMenu() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCMenu.attachTo = function (root) {
                    return new MDCMenu(root);
                };
                MDCMenu.prototype.initialize = function (menuSurfaceFactory, listFactory) {
                    if (menuSurfaceFactory === void 0) {
                        menuSurfaceFactory = function (el) {
                            return new component_MDCMenuSurface(el);
                        };
                    }
                    if (listFactory === void 0) {
                        listFactory = function (el) {
                            return new component_MDCList(el);
                        };
                    }
                    this.menuSurfaceFactory_ = menuSurfaceFactory;
                    this.listFactory_ = listFactory;
                };
                MDCMenu.prototype.initialSyncWithDOM = function () {
                    var _this = this;
                    this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
                    var list = this.root_.querySelector(menu_constants_strings.LIST_SELECTOR);
                    if (list) {
                        this.list_ = this.listFactory_(list);
                        this.list_.wrapFocus = true;
                    } else {
                        this.list_ = null;
                    }
                    this.handleKeydown_ = function (evt) {
                        return _this.foundation_.handleKeydown(evt);
                    };
                    this.handleItemAction_ = function (evt) {
                        return _this.foundation_.handleItemAction(_this.items[evt.detail.index]);
                    };
                    this.afterOpenedCallback_ = function () {
                        return _this.handleAfterOpened_();
                    };
                    this.menuSurface_.listen(foundation_MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.afterOpenedCallback_);
                    this.listen('keydown', this.handleKeydown_);
                    this.listen(foundation_MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
                };
                MDCMenu.prototype.destroy = function () {
                    if (this.list_) {
                        this.list_.destroy();
                    }
                    this.menuSurface_.destroy();
                    this.menuSurface_.unlisten(foundation_MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.afterOpenedCallback_);
                    this.unlisten('keydown', this.handleKeydown_);
                    this.unlisten(foundation_MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
                    _super.prototype.destroy.call(this);
                };
                Object.defineProperty(MDCMenu.prototype, "open", {
                    get: function () {
                        return this.menuSurface_.open;
                    },
                    set: function (value) {
                        this.menuSurface_.open = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
                    get: function () {
                        return this.list_ ? this.list_.wrapFocus : false;
                    },
                    set: function (value) {
                        if (this.list_) {
                            this.list_.wrapFocus = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenu.prototype, "items", {
                    /**
                     * Return the items within the menu. Note that this only contains the set of elements within
                     * the items container that are proper list items, and not supplemental / presentational DOM
                     * elements.
                     */
                    get: function () {
                        return this.list_ ? this.list_.listElements : [];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCMenu.prototype, "quickOpen", {
                    set: function (quickOpen) {
                        this.menuSurface_.quickOpen = quickOpen;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param corner Default anchor corner alignment of top-left menu corner.
                 */
                MDCMenu.prototype.setAnchorCorner = function (corner) {
                    this.menuSurface_.setAnchorCorner(corner);
                };
                MDCMenu.prototype.setAnchorMargin = function (margin) {
                    this.menuSurface_.setAnchorMargin(margin);
                };
                /**
                 * @return The item within the menu at the index specified.
                 */
                MDCMenu.prototype.getOptionByIndex = function (index) {
                    var items = this.items;
                    if (index < items.length) {
                        return this.items[index];
                    } else {
                        return null;
                    }
                };
                MDCMenu.prototype.setFixedPosition = function (isFixed) {
                    this.menuSurface_.setFixedPosition(isFixed);
                };
                MDCMenu.prototype.hoistMenuToBody = function () {
                    this.menuSurface_.hoistMenuToBody();
                };
                MDCMenu.prototype.setIsHoisted = function (isHoisted) {
                    this.menuSurface_.setIsHoisted(isHoisted);
                };
                MDCMenu.prototype.setAbsolutePosition = function (x, y) {
                    this.menuSurface_.setAbsolutePosition(x, y);
                };
                /**
                 * Sets the element that the menu-surface is anchored to.
                 */
                MDCMenu.prototype.setAnchorElement = function (element) {
                    this.menuSurface_.anchorElement = element;
                };
                MDCMenu.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClassToElementAtIndex: function (index, className) {
                            var list = _this.items;
                            list[index].classList.add(className);
                        },
                        removeClassFromElementAtIndex: function (index, className) {
                            var list = _this.items;
                            list[index].classList.remove(className);
                        },
                        addAttributeToElementAtIndex: function (index, attr, value) {
                            var list = _this.items;
                            list[index].setAttribute(attr, value);
                        },
                        removeAttributeFromElementAtIndex: function (index, attr) {
                            var list = _this.items;
                            list[index].removeAttribute(attr);
                        },
                        elementContainsClass: function (element, className) {
                            return element.classList.contains(className);
                        },
                        closeSurface: function () {
                            return _this.open = false;
                        },
                        getElementIndex: function (element) {
                            return _this.items.indexOf(element);
                        },
                        getParentElement: function (element) {
                            return element.parentElement;
                        },
                        getSelectedElementIndex: function (selectionGroup) {
                            var selectedListItem = selectionGroup.querySelector("." + menu_constants_cssClasses.MENU_SELECTED_LIST_ITEM);
                            return selectedListItem ? _this.items.indexOf(selectedListItem) : -1;
                        },
                        notifySelected: function (evtData) {
                            return _this.emit(menu_constants_strings.SELECTED_EVENT, {
                                index: evtData.index,
                                item: _this.items[evtData.index],
                            });
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCMenuFoundation(adapter);
                };
                MDCMenu.prototype.handleAfterOpened_ = function () {
                    var list = this.items;
                    if (list.length > 0) {
                        list[0].focus();
                    }
                };
                return MDCMenu;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // EXTERNAL MODULE: ../node_modules/@material/notched-outline/component.js + 2 modules
            var notched_outline_component = __webpack_require__(41);

            // EXTERNAL MODULE: ../node_modules/@material/ripple/foundation.js + 1 modules
            var ripple_foundation = __webpack_require__(6);

            // CONCATENATED MODULE: ../node_modules/@material/select/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var select_constants_cssClasses = {
                DISABLED: 'mdc-select--disabled',
                FOCUSED: 'mdc-select--focused',
                INVALID: 'mdc-select--invalid',
                OUTLINED: 'mdc-select--outlined',
                REQUIRED: 'mdc-select--required',
                ROOT: 'mdc-select',
                SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
                WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
            };
            var select_constants_strings = {
                ARIA_CONTROLS: 'aria-controls',
                ARIA_SELECTED_ATTR: 'aria-selected',
                CHANGE_EVENT: 'MDCSelect:change',
                ENHANCED_VALUE_ATTR: 'data-value',
                HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
                LABEL_SELECTOR: '.mdc-floating-label',
                LEADING_ICON_SELECTOR: '.mdc-select__icon',
                LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
                MENU_SELECTOR: '.mdc-select__menu',
                NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
                OUTLINE_SELECTOR: '.mdc-notched-outline',
                SELECTED_ITEM_SELECTOR: "." + select_constants_cssClasses.SELECTED_ITEM_CLASS,
                SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
            };
            var select_constants_numbers = {
                LABEL_SCALE: 0.75,
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/select/foundation.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCSelectFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCSelectFoundation, _super);
                /* istanbul ignore next: optional argument is not a branch statement */
                /**
                 * @param adapter
                 * @param foundationMap Map from subcomponent names to their subfoundations.
                 */
                function MDCSelectFoundation(adapter, foundationMap) {
                    if (foundationMap === void 0) {
                        foundationMap = {};
                    }
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCSelectFoundation.defaultAdapter, adapter)) || this;
                    _this.leadingIcon_ = foundationMap.leadingIcon;
                    _this.helperText_ = foundationMap.helperText;
                    return _this;
                }
                Object.defineProperty(MDCSelectFoundation, "cssClasses", {
                    get: function () {
                        return select_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelectFoundation, "numbers", {
                    get: function () {
                        return select_constants_numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelectFoundation, "strings", {
                    get: function () {
                        return select_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCSelectAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            hasClass: function () {
                                return false;
                            },
                            activateBottomLine: function () {
                                return undefined;
                            },
                            deactivateBottomLine: function () {
                                return undefined;
                            },
                            setValue: function () {
                                return undefined;
                            },
                            getValue: function () {
                                return '';
                            },
                            floatLabel: function () {
                                return undefined;
                            },
                            getLabelWidth: function () {
                                return 0;
                            },
                            hasOutline: function () {
                                return false;
                            },
                            notchOutline: function () {
                                return undefined;
                            },
                            closeOutline: function () {
                                return undefined;
                            },
                            openMenu: function () {
                                return undefined;
                            },
                            closeMenu: function () {
                                return undefined;
                            },
                            isMenuOpen: function () {
                                return false;
                            },
                            setSelectedIndex: function () {
                                return undefined;
                            },
                            setDisabled: function () {
                                return undefined;
                            },
                            setRippleCenter: function () {
                                return undefined;
                            },
                            notifyChange: function () {
                                return undefined;
                            },
                            checkValidity: function () {
                                return false;
                            },
                            setValid: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSelectFoundation.prototype.setSelectedIndex = function (index) {
                    this.adapter_.setSelectedIndex(index);
                    this.adapter_.closeMenu();
                    var didChange = true;
                    this.handleChange(didChange);
                };
                MDCSelectFoundation.prototype.setValue = function (value) {
                    this.adapter_.setValue(value);
                    var didChange = true;
                    this.handleChange(didChange);
                };
                MDCSelectFoundation.prototype.getValue = function () {
                    return this.adapter_.getValue();
                };
                MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
                    if (isDisabled) {
                        this.adapter_.addClass(select_constants_cssClasses.DISABLED);
                    } else {
                        this.adapter_.removeClass(select_constants_cssClasses.DISABLED);
                    }
                    this.adapter_.setDisabled(isDisabled);
                    this.adapter_.closeMenu();
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setDisabled(isDisabled);
                    }
                };
                /**
                 * @param content Sets the content of the helper text.
                 */
                MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
                    if (this.helperText_) {
                        this.helperText_.setContent(content);
                    }
                };
                MDCSelectFoundation.prototype.layout = function () {
                    var openNotch = this.getValue().length > 0;
                    this.notchOutline(openNotch);
                };
                /**
                 * Handles value changes, via change event or programmatic updates.
                 */
                MDCSelectFoundation.prototype.handleChange = function (didChange) {
                    if (didChange === void 0) {
                        didChange = true;
                    }
                    var value = this.getValue();
                    var optionHasValue = value.length > 0;
                    var isRequired = this.adapter_.hasClass(select_constants_cssClasses.REQUIRED);
                    this.notchOutline(optionHasValue);
                    if (!this.adapter_.hasClass(select_constants_cssClasses.FOCUSED)) {
                        this.adapter_.floatLabel(optionHasValue);
                    }
                    if (didChange) {
                        this.adapter_.notifyChange(value);
                        if (isRequired) {
                            this.setValid(this.isValid());
                            if (this.helperText_) {
                                this.helperText_.setValidity(this.isValid());
                            }
                        }
                    }
                };
                /**
                 * Handles focus events from select element.
                 */
                MDCSelectFoundation.prototype.handleFocus = function () {
                    this.adapter_.addClass(select_constants_cssClasses.FOCUSED);
                    this.adapter_.floatLabel(true);
                    this.notchOutline(true);
                    this.adapter_.activateBottomLine();
                    if (this.helperText_) {
                        this.helperText_.showToScreenReader();
                    }
                };
                /**
                 * Handles blur events from select element.
                 */
                MDCSelectFoundation.prototype.handleBlur = function () {
                    if (this.adapter_.isMenuOpen()) {
                        return;
                    }
                    this.adapter_.removeClass(select_constants_cssClasses.FOCUSED);
                    this.handleChange(false);
                    this.adapter_.deactivateBottomLine();
                    var isRequired = this.adapter_.hasClass(select_constants_cssClasses.REQUIRED);
                    if (isRequired) {
                        this.setValid(this.isValid());
                        if (this.helperText_) {
                            this.helperText_.setValidity(this.isValid());
                        }
                    }
                };
                MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
                    if (this.adapter_.isMenuOpen()) {
                        return;
                    }
                    this.adapter_.setRippleCenter(normalizedX);
                    this.adapter_.openMenu();
                };
                MDCSelectFoundation.prototype.handleKeydown = function (event) {
                    if (this.adapter_.isMenuOpen()) {
                        return;
                    }
                    var isEnter = event.key === 'Enter' || event.keyCode === 13;
                    var isSpace = event.key === 'Space' || event.keyCode === 32;
                    var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
                    var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;
                    if (this.adapter_.hasClass(select_constants_cssClasses.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
                        this.adapter_.openMenu();
                        event.preventDefault();
                    }
                };
                /**
                 * Opens/closes the notched outline.
                 */
                MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
                    if (!this.adapter_.hasOutline()) {
                        return;
                    }
                    var isFocused = this.adapter_.hasClass(select_constants_cssClasses.FOCUSED);
                    if (openNotch) {
                        var labelScale = select_constants_numbers.LABEL_SCALE;
                        var labelWidth = this.adapter_.getLabelWidth() * labelScale;
                        this.adapter_.notchOutline(labelWidth);
                    } else if (!isFocused) {
                        this.adapter_.closeOutline();
                    }
                };
                /**
                 * Sets the aria label of the leading icon.
                 */
                MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setAriaLabel(label);
                    }
                };
                /**
                 * Sets the text content of the leading icon.
                 */
                MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
                    if (this.leadingIcon_) {
                        this.leadingIcon_.setContent(content);
                    }
                };
                MDCSelectFoundation.prototype.setValid = function (isValid) {
                    this.adapter_.setValid(isValid);
                };
                MDCSelectFoundation.prototype.isValid = function () {
                    return this.adapter_.checkValidity();
                };
                return MDCSelectFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var select_foundation = (foundation_MDCSelectFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/select/helper-text/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var helper_text_constants_strings = {
                ARIA_HIDDEN: 'aria-hidden',
                ROLE: 'role',
            };
            var helper_text_constants_cssClasses = {
                HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
                HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg',
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/select/helper-text/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCSelectHelperTextFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCSelectHelperTextFoundation, _super);

                function MDCSelectHelperTextFoundation(adapter) {
                    return _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCSelectHelperTextFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
                    get: function () {
                        return helper_text_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
                    get: function () {
                        return helper_text_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            hasClass: function () {
                                return false;
                            },
                            setAttr: function () {
                                return undefined;
                            },
                            removeAttr: function () {
                                return undefined;
                            },
                            setContent: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the content of the helper text field.
                 */
                MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
                    this.adapter_.setContent(content);
                };
                /**
                 *  Sets the persistency of the helper text.
                 */
                MDCSelectHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
                    if (isPersistent) {
                        this.adapter_.addClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
                    } else {
                        this.adapter_.removeClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
                    }
                };
                /**
                 * @param isValidation True to make the helper text act as an error validation message.
                 */
                MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
                    if (isValidation) {
                        this.adapter_.addClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
                    } else {
                        this.adapter_.removeClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
                    }
                };
                /**
                 * Makes the helper text visible to screen readers.
                 */
                MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
                    this.adapter_.removeAttr(helper_text_constants_strings.ARIA_HIDDEN);
                };
                /**
                 * Sets the validity of the helper text based on the select validity.
                 */
                MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
                    var helperTextIsPersistent = this.adapter_.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_PERSISTENT);
                    var helperTextIsValidationMsg = this.adapter_.hasClass(helper_text_constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
                    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;
                    if (validationMsgNeedsDisplay) {
                        this.adapter_.setAttr(helper_text_constants_strings.ROLE, 'alert');
                    } else {
                        this.adapter_.removeAttr(helper_text_constants_strings.ROLE);
                    }
                    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
                        this.hide_();
                    }
                };
                /**
                 * Hides the help text from screen readers.
                 */
                MDCSelectHelperTextFoundation.prototype.hide_ = function () {
                    this.adapter_.setAttr(helper_text_constants_strings.ARIA_HIDDEN, 'true');
                };
                return MDCSelectHelperTextFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var helper_text_foundation = (foundation_MDCSelectHelperTextFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/select/helper-text/component.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var component_MDCSelectHelperText = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCSelectHelperText, _super);

                function MDCSelectHelperText() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCSelectHelperText.attachTo = function (root) {
                    return new MDCSelectHelperText(root);
                };
                Object.defineProperty(MDCSelectHelperText.prototype, "foundation", {
                    get: function () {
                        return this.foundation_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSelectHelperText.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        setAttr: function (attr, value) {
                            return _this.root_.setAttribute(attr, value);
                        },
                        removeAttr: function (attr) {
                            return _this.root_.removeAttribute(attr);
                        },
                        setContent: function (content) {
                            _this.root_.textContent = content;
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCSelectHelperTextFoundation(adapter);
                };
                return MDCSelectHelperText;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/select/icon/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var icon_constants_strings = {
                ICON_EVENT: 'MDCSelect:icon',
                ICON_ROLE: 'button',
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/select/icon/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var INTERACTION_EVENTS = ['click', 'keydown'];
            var foundation_MDCSelectIconFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCSelectIconFoundation, _super);

                function MDCSelectIconFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCSelectIconFoundation.defaultAdapter, adapter)) || this;
                    _this.savedTabIndex_ = null;
                    _this.interactionHandler_ = function (evt) {
                        return _this.handleInteraction(evt);
                    };
                    return _this;
                }
                Object.defineProperty(MDCSelectIconFoundation, "strings", {
                    get: function () {
                        return icon_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            getAttr: function () {
                                return null;
                            },
                            setAttr: function () {
                                return undefined;
                            },
                            removeAttr: function () {
                                return undefined;
                            },
                            setContent: function () {
                                return undefined;
                            },
                            registerInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterInteractionHandler: function () {
                                return undefined;
                            },
                            notifyIconAction: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSelectIconFoundation.prototype.init = function () {
                    var _this = this;
                    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
                    });
                };
                MDCSelectIconFoundation.prototype.destroy = function () {
                    var _this = this;
                    INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
                    });
                };
                MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
                    if (!this.savedTabIndex_) {
                        return;
                    }
                    if (disabled) {
                        this.adapter_.setAttr('tabindex', '-1');
                        this.adapter_.removeAttr('role');
                    } else {
                        this.adapter_.setAttr('tabindex', this.savedTabIndex_);
                        this.adapter_.setAttr('role', icon_constants_strings.ICON_ROLE);
                    }
                };
                MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
                    this.adapter_.setAttr('aria-label', label);
                };
                MDCSelectIconFoundation.prototype.setContent = function (content) {
                    this.adapter_.setContent(content);
                };
                MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
                    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
                    if (evt.type === 'click' || isEnterKey) {
                        this.adapter_.notifyIconAction();
                    }
                };
                return MDCSelectIconFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var icon_foundation = (foundation_MDCSelectIconFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/select/icon/component.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var component_MDCSelectIcon = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCSelectIcon, _super);

                function MDCSelectIcon() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCSelectIcon.attachTo = function (root) {
                    return new MDCSelectIcon(root);
                };
                Object.defineProperty(MDCSelectIcon.prototype, "foundation", {
                    get: function () {
                        return this.foundation_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSelectIcon.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        getAttr: function (attr) {
                            return _this.root_.getAttribute(attr);
                        },
                        setAttr: function (attr, value) {
                            return _this.root_.setAttribute(attr, value);
                        },
                        removeAttr: function (attr) {
                            return _this.root_.removeAttribute(attr);
                        },
                        setContent: function (content) {
                            _this.root_.textContent = content;
                        },
                        registerInteractionHandler: function (evtType, handler) {
                            return _this.listen(evtType, handler);
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return _this.unlisten(evtType, handler);
                        },
                        notifyIconAction: function () {
                            return _this.emit(foundation_MDCSelectIconFoundation.strings.ICON_EVENT, {} /* evtData */ , true /* shouldBubble */ );
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCSelectIconFoundation(adapter);
                };
                return MDCSelectIcon;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/select/component.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */













            var POINTER_EVENTS = ['mousedown', 'touchstart'];
            var VALIDATION_ATTR_WHITELIST = ['required', 'aria-required'];
            var component_MDCSelect = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCSelect, _super);

                function MDCSelect() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCSelect.attachTo = function (root) {
                    return new MDCSelect(root);
                };
                MDCSelect.prototype.initialize = function (labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
                    if (labelFactory === void 0) {
                        labelFactory = function (el) {
                            return new floating_label_component["a" /* MDCFloatingLabel */ ](el);
                        };
                    }
                    if (lineRippleFactory === void 0) {
                        lineRippleFactory = function (el) {
                            return new line_ripple_component["a" /* MDCLineRipple */ ](el);
                        };
                    }
                    if (outlineFactory === void 0) {
                        outlineFactory = function (el) {
                            return new notched_outline_component["a" /* MDCNotchedOutline */ ](el);
                        };
                    }
                    if (menuFactory === void 0) {
                        menuFactory = function (el) {
                            return new component_MDCMenu(el);
                        };
                    }
                    if (iconFactory === void 0) {
                        iconFactory = function (el) {
                            return new component_MDCSelectIcon(el);
                        };
                    }
                    if (helperTextFactory === void 0) {
                        helperTextFactory = function (el) {
                            return new component_MDCSelectHelperText(el);
                        };
                    }
                    this.isMenuOpen_ = false;
                    this.nativeControl_ = this.root_.querySelector(select_constants_strings.NATIVE_CONTROL_SELECTOR);
                    this.selectedText_ = this.root_.querySelector(select_constants_strings.SELECTED_TEXT_SELECTOR);
                    var targetElement = this.nativeControl_ || this.selectedText_;
                    if (!targetElement) {
                        throw new Error('MDCSelect: Missing required element: Exactly one of the following selectors must be present: ' +
                            ("'" + select_constants_strings.NATIVE_CONTROL_SELECTOR + "' or '" + select_constants_strings.SELECTED_TEXT_SELECTOR + "'"));
                    }
                    this.targetElement_ = targetElement;
                    if (this.targetElement_.hasAttribute(select_constants_strings.ARIA_CONTROLS)) {
                        var helperTextElement = document.getElementById(this.targetElement_.getAttribute(select_constants_strings.ARIA_CONTROLS));
                        if (helperTextElement) {
                            this.helperText_ = helperTextFactory(helperTextElement);
                        }
                    }
                    if (this.selectedText_) {
                        this.enhancedSelectSetup_(menuFactory);
                    }
                    var labelElement = this.root_.querySelector(select_constants_strings.LABEL_SELECTOR);
                    this.label_ = labelElement ? labelFactory(labelElement) : null;
                    var lineRippleElement = this.root_.querySelector(select_constants_strings.LINE_RIPPLE_SELECTOR);
                    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
                    var outlineElement = this.root_.querySelector(select_constants_strings.OUTLINE_SELECTOR);
                    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
                    var leadingIcon = this.root_.querySelector(select_constants_strings.LEADING_ICON_SELECTOR);
                    if (leadingIcon) {
                        this.root_.classList.add(select_constants_cssClasses.WITH_LEADING_ICON);
                        this.leadingIcon_ = iconFactory(leadingIcon);
                        if (this.menuElement_) {
                            this.menuElement_.classList.add(select_constants_cssClasses.WITH_LEADING_ICON);
                        }
                    }
                    if (!this.root_.classList.contains(select_constants_cssClasses.OUTLINED)) {
                        this.ripple = this.createRipple_();
                    }
                    // The required state needs to be sync'd before the mutation observer is added.
                    this.initialSyncRequiredState_();
                    this.addMutationObserverForRequired_();
                };
                /**
                 * Initializes the select's event listeners and internal state based
                 * on the environment's state.
                 */
                MDCSelect.prototype.initialSyncWithDOM = function () {
                    var _this = this;
                    this.handleChange_ = function () {
                        return _this.foundation_.handleChange( /* didChange */ true);
                    };
                    this.handleFocus_ = function () {
                        return _this.foundation_.handleFocus();
                    };
                    this.handleBlur_ = function () {
                        return _this.foundation_.handleBlur();
                    };
                    this.handleClick_ = function (evt) {
                        if (_this.selectedText_) {
                            _this.selectedText_.focus();
                        }
                        _this.foundation_.handleClick(_this.getNormalizedXCoordinate_(evt));
                    };
                    this.handleKeydown_ = function (evt) {
                        return _this.foundation_.handleKeydown(evt);
                    };
                    this.handleMenuSelected_ = function (evtData) {
                        return _this.selectedIndex = evtData.detail.index;
                    };
                    this.handleMenuOpened_ = function () {
                        // Menu should open to the last selected element.
                        if (_this.selectedIndex >= 0) {
                            var selectedItemEl = _this.menu_.items[_this.selectedIndex];
                            selectedItemEl.focus();
                        }
                    };
                    this.handleMenuClosed_ = function () {
                        // isMenuOpen_ is used to track the state of the menu opening or closing since the menu.open function
                        // will return false if the menu is still closing and this method listens to the closed event which
                        // occurs after the menu is already closed.
                        _this.isMenuOpen_ = false;
                        _this.selectedText_.removeAttribute('aria-expanded');
                        if (document.activeElement !== _this.selectedText_) {
                            _this.foundation_.handleBlur();
                        }
                    };
                    this.targetElement_.addEventListener('change', this.handleChange_);
                    this.targetElement_.addEventListener('focus', this.handleFocus_);
                    this.targetElement_.addEventListener('blur', this.handleBlur_);
                    POINTER_EVENTS.forEach(function (evtType) {
                        _this.targetElement_.addEventListener(evtType, _this.handleClick_);
                    });
                    if (this.menuElement_) {
                        this.selectedText_.addEventListener('keydown', this.handleKeydown_);
                        this.menu_.listen(constants_strings.CLOSED_EVENT, this.handleMenuClosed_);
                        this.menu_.listen(constants_strings.OPENED_EVENT, this.handleMenuOpened_);
                        this.menu_.listen(menu_constants_strings.SELECTED_EVENT, this.handleMenuSelected_);
                        if (this.hiddenInput_ && this.hiddenInput_.value) {
                            // If the hidden input already has a value, use it to restore the select's value.
                            // This can happen e.g. if the user goes back or (in some browsers) refreshes the page.
                            var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
                            enhancedAdapterMethods.setValue(this.hiddenInput_.value);
                        } else if (this.menuElement_.querySelector(select_constants_strings.SELECTED_ITEM_SELECTOR)) {
                            // If an element is selected, the select should set the initial selected text.
                            var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
                            enhancedAdapterMethods.setValue(enhancedAdapterMethods.getValue());
                        }
                    }
                    // Initially sync floating label
                    this.foundation_.handleChange( /* didChange */ false);
                    if (this.root_.classList.contains(select_constants_cssClasses.DISABLED) ||
                        (this.nativeControl_ && this.nativeControl_.disabled)) {
                        this.disabled = true;
                    }
                };
                MDCSelect.prototype.destroy = function () {
                    var _this = this;
                    this.targetElement_.removeEventListener('change', this.handleChange_);
                    this.targetElement_.removeEventListener('focus', this.handleFocus_);
                    this.targetElement_.removeEventListener('blur', this.handleBlur_);
                    this.targetElement_.removeEventListener('keydown', this.handleKeydown_);
                    POINTER_EVENTS.forEach(function (evtType) {
                        _this.targetElement_.removeEventListener(evtType, _this.handleClick_);
                    });
                    if (this.menu_) {
                        this.menu_.unlisten(constants_strings.CLOSED_EVENT, this.handleMenuClosed_);
                        this.menu_.unlisten(constants_strings.OPENED_EVENT, this.handleMenuOpened_);
                        this.menu_.unlisten(menu_constants_strings.SELECTED_EVENT, this.handleMenuSelected_);
                        this.menu_.destroy();
                    }
                    if (this.ripple) {
                        this.ripple.destroy();
                    }
                    if (this.outline_) {
                        this.outline_.destroy();
                    }
                    if (this.leadingIcon_) {
                        this.leadingIcon_.destroy();
                    }
                    if (this.helperText_) {
                        this.helperText_.destroy();
                    }
                    if (this.validationObserver_) {
                        this.validationObserver_.disconnect();
                    }
                    _super.prototype.destroy.call(this);
                };
                Object.defineProperty(MDCSelect.prototype, "value", {
                    get: function () {
                        return this.foundation_.getValue();
                    },
                    set: function (value) {
                        this.foundation_.setValue(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
                    get: function () {
                        var selectedIndex = -1;
                        if (this.menuElement_ && this.menu_) {
                            var selectedEl = this.menuElement_.querySelector(select_constants_strings.SELECTED_ITEM_SELECTOR);
                            selectedIndex = this.menu_.items.indexOf(selectedEl);
                        } else if (this.nativeControl_) {
                            selectedIndex = this.nativeControl_.selectedIndex;
                        }
                        return selectedIndex;
                    },
                    set: function (selectedIndex) {
                        this.foundation_.setSelectedIndex(selectedIndex);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelect.prototype, "disabled", {
                    get: function () {
                        return this.root_.classList.contains(select_constants_cssClasses.DISABLED) ||
                            (this.nativeControl_ ? this.nativeControl_.disabled : false);
                    },
                    set: function (disabled) {
                        this.foundation_.setDisabled(disabled);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
                    set: function (label) {
                        this.foundation_.setLeadingIconAriaLabel(label);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
                    /**
                     * Sets the text content of the leading icon.
                     */
                    set: function (content) {
                        this.foundation_.setLeadingIconContent(content);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
                    /**
                     * Sets the text content of the helper text.
                     */
                    set: function (content) {
                        this.foundation_.setHelperTextContent(content);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelect.prototype, "valid", {
                    /**
                     * Checks if the select is in a valid state.
                     */
                    get: function () {
                        return this.foundation_.isValid();
                    },
                    /**
                     * Sets the current invalid state of the select.
                     */
                    set: function (isValid) {
                        this.foundation_.setValid(isValid);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSelect.prototype, "required", {
                    /**
                     * Returns whether the select is required.
                     */
                    get: function () {
                        if (this.nativeControl_) {
                            return this.nativeControl_.required;
                        } else {
                            return this.selectedText_.getAttribute('aria-required') === 'true';
                        }
                    },
                    /**
                     * Sets the control to the required state.
                     */
                    set: function (isRequired) {
                        if (this.nativeControl_) {
                            this.nativeControl_.required = isRequired;
                        } else {
                            if (isRequired) {
                                this.selectedText_.setAttribute('aria-required', isRequired.toString());
                            } else {
                                this.selectedText_.removeAttribute('aria-required');
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Recomputes the outline SVG path for the outline element.
                 */
                MDCSelect.prototype.layout = function () {
                    this.foundation_.layout();
                };
                MDCSelect.prototype.getDefaultFoundation = function () {
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = tslib_es6["a" /* __assign */ ]({}, (this.nativeControl_ ? this.getNativeSelectAdapterMethods_() : this.getEnhancedSelectAdapterMethods_()), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_());
                    return new foundation_MDCSelectFoundation(adapter, this.getFoundationMap_());
                };
                /**
                 * Handles setup for the enhanced menu.
                 */
                MDCSelect.prototype.enhancedSelectSetup_ = function (menuFactory) {
                    var isDisabled = this.root_.classList.contains(select_constants_cssClasses.DISABLED);
                    this.selectedText_.setAttribute('tabindex', isDisabled ? '-1' : '0');
                    this.hiddenInput_ = this.root_.querySelector(select_constants_strings.HIDDEN_INPUT_SELECTOR);
                    this.menuElement_ = this.root_.querySelector(select_constants_strings.MENU_SELECTOR);
                    this.menu_ = menuFactory(this.menuElement_);
                    this.menu_.hoistMenuToBody();
                    this.menu_.setAnchorElement(this.root_);
                    this.menu_.setAnchorCorner(Corner.BOTTOM_START);
                    this.menu_.wrapFocus = false;
                };
                MDCSelect.prototype.createRipple_ = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = tslib_es6["a" /* __assign */ ]({}, ripple_component["a" /* MDCRipple */ ].createAdapter(this), {
                        registerInteractionHandler: function (evtType, handler) {
                            return _this.targetElement_.addEventListener(evtType, handler);
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return _this.targetElement_.removeEventListener(evtType, handler);
                        }
                    });
                    // tslint:enable:object-literal-sort-keys
                    return new ripple_component["a" /* MDCRipple */ ](this.root_, new ripple_foundation["a" /* MDCRippleFoundation */ ](adapter));
                };
                MDCSelect.prototype.getNativeSelectAdapterMethods_ = function () {
                    var _this = this;
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    return {
                        getValue: function () {
                            return _this.nativeControl_.value;
                        },
                        setValue: function (value) {
                            _this.nativeControl_.value = value;
                        },
                        openMenu: function () {
                            return undefined;
                        },
                        closeMenu: function () {
                            return undefined;
                        },
                        isMenuOpen: function () {
                            return false;
                        },
                        setSelectedIndex: function (index) {
                            _this.nativeControl_.selectedIndex = index;
                        },
                        setDisabled: function (isDisabled) {
                            _this.nativeControl_.disabled = isDisabled;
                        },
                        setValid: function (isValid) {
                            if (isValid) {
                                _this.root_.classList.remove(select_constants_cssClasses.INVALID);
                            } else {
                                _this.root_.classList.add(select_constants_cssClasses.INVALID);
                            }
                        },
                        checkValidity: function () {
                            return _this.nativeControl_.checkValidity();
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                };
                MDCSelect.prototype.getEnhancedSelectAdapterMethods_ = function () {
                    var _this = this;
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    return {
                        getValue: function () {
                            var listItem = _this.menuElement_.querySelector(select_constants_strings.SELECTED_ITEM_SELECTOR);
                            if (listItem && listItem.hasAttribute(select_constants_strings.ENHANCED_VALUE_ATTR)) {
                                return listItem.getAttribute(select_constants_strings.ENHANCED_VALUE_ATTR) || '';
                            }
                            return '';
                        },
                        setValue: function (value) {
                            var element = _this.menuElement_.querySelector("[" + select_constants_strings.ENHANCED_VALUE_ATTR + "=\"" + value + "\"]");
                            _this.setEnhancedSelectedIndex_(element ? _this.menu_.items.indexOf(element) : -1);
                        },
                        openMenu: function () {
                            if (_this.menu_ && !_this.menu_.open) {
                                _this.menu_.open = true;
                                _this.isMenuOpen_ = true;
                                _this.selectedText_.setAttribute('aria-expanded', 'true');
                            }
                        },
                        closeMenu: function () {
                            if (_this.menu_ && _this.menu_.open) {
                                _this.menu_.open = false;
                            }
                        },
                        isMenuOpen: function () {
                            return Boolean(_this.menu_) && _this.isMenuOpen_;
                        },
                        setSelectedIndex: function (index) {
                            return _this.setEnhancedSelectedIndex_(index);
                        },
                        setDisabled: function (isDisabled) {
                            _this.selectedText_.setAttribute('tabindex', isDisabled ? '-1' : '0');
                            _this.selectedText_.setAttribute('aria-disabled', isDisabled.toString());
                            if (_this.hiddenInput_) {
                                _this.hiddenInput_.disabled = isDisabled;
                            }
                        },
                        checkValidity: function () {
                            var classList = _this.root_.classList;
                            if (classList.contains(select_constants_cssClasses.REQUIRED) && !classList.contains(select_constants_cssClasses.DISABLED)) {
                                // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
                                // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
                                return _this.selectedIndex !== -1 && (_this.selectedIndex !== 0 || Boolean(_this.value));
                            } else {
                                return true;
                            }
                        },
                        setValid: function (isValid) {
                            _this.selectedText_.setAttribute('aria-invalid', (!isValid).toString());
                            if (isValid) {
                                _this.root_.classList.remove(select_constants_cssClasses.INVALID);
                            } else {
                                _this.root_.classList.add(select_constants_cssClasses.INVALID);
                            }
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                };
                MDCSelect.prototype.getCommonAdapterMethods_ = function () {
                    var _this = this;
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    return {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        setRippleCenter: function (normalizedX) {
                            return _this.lineRipple_ && _this.lineRipple_.setRippleCenter(normalizedX);
                        },
                        activateBottomLine: function () {
                            return _this.lineRipple_ && _this.lineRipple_.activate();
                        },
                        deactivateBottomLine: function () {
                            return _this.lineRipple_ && _this.lineRipple_.deactivate();
                        },
                        notifyChange: function (value) {
                            var index = _this.selectedIndex;
                            _this.emit(select_constants_strings.CHANGE_EVENT, {
                                value: value,
                                index: index
                            }, true /* shouldBubble  */ );
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                };
                MDCSelect.prototype.getOutlineAdapterMethods_ = function () {
                    var _this = this;
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    return {
                        hasOutline: function () {
                            return Boolean(_this.outline_);
                        },
                        notchOutline: function (labelWidth) {
                            return _this.outline_ && _this.outline_.notch(labelWidth);
                        },
                        closeOutline: function () {
                            return _this.outline_ && _this.outline_.closeNotch();
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                };
                MDCSelect.prototype.getLabelAdapterMethods_ = function () {
                    var _this = this;
                    return {
                        floatLabel: function (shouldFloat) {
                            return _this.label_ && _this.label_.float(shouldFloat);
                        },
                        getLabelWidth: function () {
                            return _this.label_ ? _this.label_.getWidth() : 0;
                        },
                    };
                };
                /**
                 * Calculates where the line ripple should start based on the x coordinate within the component.
                 */
                MDCSelect.prototype.getNormalizedXCoordinate_ = function (evt) {
                    var targetClientRect = evt.target.getBoundingClientRect();
                    var xCoordinate = this.isTouchEvent_(evt) ? evt.touches[0].clientX : evt.clientX;
                    return xCoordinate - targetClientRect.left;
                };
                MDCSelect.prototype.isTouchEvent_ = function (evt) {
                    return Boolean(evt.touches);
                };
                /**
                 * Returns a map of all subcomponents to subfoundations.
                 */
                MDCSelect.prototype.getFoundationMap_ = function () {
                    return {
                        helperText: this.helperText_ ? this.helperText_.foundation : undefined,
                        leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
                    };
                };
                MDCSelect.prototype.setEnhancedSelectedIndex_ = function (index) {
                    var selectedItem = this.menu_.items[index];
                    this.selectedText_.textContent = selectedItem ? selectedItem.textContent.trim() : '';
                    var previouslySelected = this.menuElement_.querySelector(select_constants_strings.SELECTED_ITEM_SELECTOR);
                    if (previouslySelected) {
                        previouslySelected.classList.remove(select_constants_cssClasses.SELECTED_ITEM_CLASS);
                        previouslySelected.removeAttribute(select_constants_strings.ARIA_SELECTED_ATTR);
                    }
                    if (selectedItem) {
                        selectedItem.classList.add(select_constants_cssClasses.SELECTED_ITEM_CLASS);
                        selectedItem.setAttribute(select_constants_strings.ARIA_SELECTED_ATTR, 'true');
                    }
                    // Synchronize hidden input's value with data-value attribute of selected item.
                    // This code path is also followed when setting value directly, so this covers all cases.
                    if (this.hiddenInput_) {
                        this.hiddenInput_.value = selectedItem ? selectedItem.getAttribute(select_constants_strings.ENHANCED_VALUE_ATTR) || '' : '';
                    }
                    this.layout();
                };
                MDCSelect.prototype.initialSyncRequiredState_ = function () {
                    var isRequired = this.targetElement_.required ||
                        this.targetElement_.getAttribute('aria-required') === 'true' ||
                        this.root_.classList.contains(select_constants_cssClasses.REQUIRED);
                    if (isRequired) {
                        if (this.nativeControl_) {
                            this.nativeControl_.required = true;
                        } else {
                            this.selectedText_.setAttribute('aria-required', 'true');
                        }
                        this.root_.classList.add(select_constants_cssClasses.REQUIRED);
                    }
                };
                MDCSelect.prototype.addMutationObserverForRequired_ = function () {
                    var _this = this;
                    var observerHandler = function (attributesList) {
                        attributesList.some(function (attributeName) {
                            if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) === -1) {
                                return false;
                            }
                            if (_this.selectedText_) {
                                if (_this.selectedText_.getAttribute('aria-required') === 'true') {
                                    _this.root_.classList.add(select_constants_cssClasses.REQUIRED);
                                } else {
                                    _this.root_.classList.remove(select_constants_cssClasses.REQUIRED);
                                }
                            } else {
                                if (_this.nativeControl_.required) {
                                    _this.root_.classList.add(select_constants_cssClasses.REQUIRED);
                                } else {
                                    _this.root_.classList.remove(select_constants_cssClasses.REQUIRED);
                                }
                            }
                            return true;
                        });
                    };
                    var getAttributesList = function (mutationsList) {
                        return mutationsList
                            .map(function (mutation) {
                                return mutation.attributeName;
                            })
                            .filter(function (attributeName) {
                                return attributeName;
                            });
                    };
                    var observer = new MutationObserver(function (mutationsList) {
                        return observerHandler(getAttributesList(mutationsList));
                    });
                    observer.observe(this.targetElement_, {
                        attributes: true
                    });
                    this.validationObserver_ = observer;
                };
                return MDCSelect;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/radio/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var radio_constants_strings = {
                NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
            };
            var radio_constants_cssClasses = {
                DISABLED: 'mdc-radio--disabled',
                ROOT: 'mdc-radio',
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/radio/foundation.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCRadioFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCRadioFoundation, _super);

                function MDCRadioFoundation(adapter) {
                    return _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCRadioFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCRadioFoundation, "cssClasses", {
                    get: function () {
                        return radio_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRadioFoundation, "strings", {
                    get: function () {
                        return radio_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRadioFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            setNativeControlDisabled: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRadioFoundation.prototype.setDisabled = function (disabled) {
                    var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
                    this.adapter_.setNativeControlDisabled(disabled);
                    if (disabled) {
                        this.adapter_.addClass(DISABLED);
                    } else {
                        this.adapter_.removeClass(DISABLED);
                    }
                };
                return MDCRadioFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var radio_foundation = (foundation_MDCRadioFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/radio/component.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */




            var component_MDCRadio = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCRadio, _super);

                function MDCRadio() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.ripple_ = _this.createRipple_();
                    return _this;
                }
                MDCRadio.attachTo = function (root) {
                    return new MDCRadio(root);
                };
                Object.defineProperty(MDCRadio.prototype, "checked", {
                    get: function () {
                        return this.nativeControl_.checked;
                    },
                    set: function (checked) {
                        this.nativeControl_.checked = checked;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRadio.prototype, "disabled", {
                    get: function () {
                        return this.nativeControl_.disabled;
                    },
                    set: function (disabled) {
                        this.foundation_.setDisabled(disabled);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRadio.prototype, "value", {
                    get: function () {
                        return this.nativeControl_.value;
                    },
                    set: function (value) {
                        this.nativeControl_.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRadio.prototype, "ripple", {
                    get: function () {
                        return this.ripple_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRadio.prototype.destroy = function () {
                    this.ripple_.destroy();
                    _super.prototype.destroy.call(this);
                };
                MDCRadio.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        setNativeControlDisabled: function (disabled) {
                            return _this.nativeControl_.disabled = disabled;
                        },
                    };
                    return new foundation_MDCRadioFoundation(adapter);
                };
                MDCRadio.prototype.createRipple_ = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = tslib_es6["a" /* __assign */ ]({}, ripple_component["a" /* MDCRipple */ ].createAdapter(this), {
                        registerInteractionHandler: function (evtType, handler) {
                            return _this.nativeControl_.addEventListener(evtType, handler);
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return _this.nativeControl_.removeEventListener(evtType, handler);
                        },
                        // Radio buttons technically go "active" whenever there is *any* keyboard interaction.
                        // This is not the UI we desire.
                        isSurfaceActive: function () {
                            return false;
                        },
                        isUnbounded: function () {
                            return true;
                        }
                    });
                    // tslint:enable:object-literal-sort-keys
                    return new ripple_component["a" /* MDCRipple */ ](this.root_, new ripple_foundation["a" /* MDCRippleFoundation */ ](adapter));
                };
                Object.defineProperty(MDCRadio.prototype, "nativeControl_", {
                    get: function () {
                        var NATIVE_CONTROL_SELECTOR = foundation_MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR;
                        var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
                        if (!el) {
                            throw new Error("Radio component requires a " + NATIVE_CONTROL_SELECTOR + " element");
                        }
                        return el;
                    },
                    enumerable: true,
                    configurable: true
                });
                return MDCRadio;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/node_modules/@material/dom/ponyfill.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            /**
             * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
             * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
             */
            function closest(element, selector) {
                if (element.closest) {
                    return element.closest(selector);
                }
                var el = element;
                while (el) {
                    if (matches(el, selector)) {
                        return el;
                    }
                    el = el.parentElement;
                }
                return null;
            }

            function matches(element, selector) {
                var nativeMatches = element.matches ||
                    element.webkitMatchesSelector ||
                    element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }
            //# sourceMappingURL=ponyfill.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/node_modules/@material/dom/index.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */


            //# sourceMappingURL=index.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/node_modules/@material/ripple/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var ripple_constants_cssClasses = {
                // Ripple is a special case where the "root" component is really a "mixin" of sorts,
                // given that it's an 'upgrade' to an existing component. That being said it is the root
                // CSS class that all other CSS classes derive from.
                BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
                FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
                FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
                ROOT: 'mdc-ripple-upgraded',
                UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
            };
            var ripple_constants_strings = {
                VAR_FG_SCALE: '--mdc-ripple-fg-scale',
                VAR_FG_SIZE: '--mdc-ripple-fg-size',
                VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
                VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
                VAR_LEFT: '--mdc-ripple-left',
                VAR_TOP: '--mdc-ripple-top',
            };
            var ripple_constants_numbers = {
                DEACTIVATION_TIMEOUT_MS: 225,
                FG_DEACTIVATION_MS: 150,
                INITIAL_ORIGIN_SCALE: 0.6,
                PADDING: 10,
                TAP_DELAY_MS: 300,
            };
            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/node_modules/@material/ripple/util.js
            /**
             * Stores result from supportsCssVariables to avoid redundant processing to
             * detect CSS custom variable support.
             */
            var supportsCssVariables_;
            /**
             * Stores result from applyPassive to avoid redundant processing to detect
             * passive event listener support.
             */
            var supportsPassive_;

            function detectEdgePseudoVarBug(windowObj) {
                // Detect versions of Edge with buggy var() support
                // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
                var document = windowObj.document;
                var node = document.createElement('div');
                node.className = 'mdc-ripple-surface--test-edge-var-bug';
                document.body.appendChild(node);
                // The bug exists if ::before style ends up propagating to the parent element.
                // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
                // but Firefox is known to support CSS custom properties correctly.
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                var computedStyle = windowObj.getComputedStyle(node);
                var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
                node.remove();
                return hasPseudoVarBug;
            }

            function supportsCssVariables(windowObj, forceRefresh) {
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                var CSS = windowObj.CSS;
                var supportsCssVars = supportsCssVariables_;
                if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
                    return supportsCssVariables_;
                }
                var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
                if (!supportsFunctionPresent) {
                    return false;
                }
                var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
                // See: https://bugs.webkit.org/show_bug.cgi?id=154669
                // See: README section on Safari
                var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
                    CSS.supports('color', '#00000000'));
                if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
                    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
                } else {
                    supportsCssVars = false;
                }
                if (!forceRefresh) {
                    supportsCssVariables_ = supportsCssVars;
                }
                return supportsCssVars;
            }
            /**
             * Determine whether the current browser supports passive event listeners, and
             * if so, use them.
             */
            function applyPassive(globalObj, forceRefresh) {
                if (globalObj === void 0) {
                    globalObj = window;
                }
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                if (supportsPassive_ === undefined || forceRefresh) {
                    var isSupported_1 = false;
                    try {
                        globalObj.document.addEventListener('test', function () {
                            return undefined;
                        }, {
                            get passive() {
                                isSupported_1 = true;
                                return isSupported_1;
                            },
                        });
                    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
                    supportsPassive_ = isSupported_1;
                }
                return supportsPassive_ ? {
                    passive: true
                } : false;
            }

            function getNormalizedEventCoords(evt, pageOffset, clientRect) {
                if (!evt) {
                    return {
                        x: 0,
                        y: 0
                    };
                }
                var x = pageOffset.x,
                    y = pageOffset.y;
                var documentX = x + clientRect.left;
                var documentY = y + clientRect.top;
                var normalizedX;
                var normalizedY;
                // Determine touch point relative to the ripple container.
                if (evt.type === 'touchstart') {
                    var touchEvent = evt;
                    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
                    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
                } else {
                    var mouseEvent = evt;
                    normalizedX = mouseEvent.pageX - documentX;
                    normalizedY = mouseEvent.pageY - documentY;
                }
                return {
                    x: normalizedX,
                    y: normalizedY
                };
            }
            //# sourceMappingURL=util.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/node_modules/@material/ripple/foundation.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */




            // Activation events registered on the root element of each instance for activation
            var ACTIVATION_EVENT_TYPES = [
                'touchstart', 'pointerdown', 'mousedown', 'keydown',
            ];
            // Deactivation events registered on documentElement when a pointer-related down event occurs
            var POINTER_DEACTIVATION_EVENT_TYPES = [
                'touchend', 'pointerup', 'mouseup', 'contextmenu',
            ];
            // simultaneous nested activations
            var activatedTargets = [];
            var foundation_MDCRippleFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCRippleFoundation, _super);

                function MDCRippleFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.activationAnimationHasEnded_ = false;
                    _this.activationTimer_ = 0;
                    _this.fgDeactivationRemovalTimer_ = 0;
                    _this.fgScale_ = '0';
                    _this.frame_ = {
                        width: 0,
                        height: 0
                    };
                    _this.initialSize_ = 0;
                    _this.layoutFrame_ = 0;
                    _this.maxRadius_ = 0;
                    _this.unboundedCoords_ = {
                        left: 0,
                        top: 0
                    };
                    _this.activationState_ = _this.defaultActivationState_();
                    _this.activationTimerCallback_ = function () {
                        _this.activationAnimationHasEnded_ = true;
                        _this.runDeactivationUXLogicIfReady_();
                    };
                    _this.activateHandler_ = function (e) {
                        return _this.activate_(e);
                    };
                    _this.deactivateHandler_ = function () {
                        return _this.deactivate_();
                    };
                    _this.focusHandler_ = function () {
                        return _this.handleFocus();
                    };
                    _this.blurHandler_ = function () {
                        return _this.handleBlur();
                    };
                    _this.resizeHandler_ = function () {
                        return _this.layout();
                    };
                    return _this;
                }
                Object.defineProperty(MDCRippleFoundation, "cssClasses", {
                    get: function () {
                        return ripple_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "strings", {
                    get: function () {
                        return ripple_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "numbers", {
                    get: function () {
                        return ripple_constants_numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            browserSupportsCssVars: function () {
                                return true;
                            },
                            computeBoundingRect: function () {
                                return ({
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                });
                            },
                            containsEventTarget: function () {
                                return true;
                            },
                            deregisterDocumentInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterInteractionHandler: function () {
                                return undefined;
                            },
                            deregisterResizeHandler: function () {
                                return undefined;
                            },
                            getWindowPageOffset: function () {
                                return ({
                                    x: 0,
                                    y: 0
                                });
                            },
                            isSurfaceActive: function () {
                                return true;
                            },
                            isSurfaceDisabled: function () {
                                return true;
                            },
                            isUnbounded: function () {
                                return true;
                            },
                            registerDocumentInteractionHandler: function () {
                                return undefined;
                            },
                            registerInteractionHandler: function () {
                                return undefined;
                            },
                            registerResizeHandler: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            updateCssVariable: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRippleFoundation.prototype.init = function () {
                    var _this = this;
                    var supportsPressRipple = this.supportsPressRipple_();
                    this.registerRootHandlers_(supportsPressRipple);
                    if (supportsPressRipple) {
                        var _a = MDCRippleFoundation.cssClasses,
                            ROOT_1 = _a.ROOT,
                            UNBOUNDED_1 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.addClass(ROOT_1);
                            if (_this.adapter_.isUnbounded()) {
                                _this.adapter_.addClass(UNBOUNDED_1);
                                // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                                _this.layoutInternal_();
                            }
                        });
                    }
                };
                MDCRippleFoundation.prototype.destroy = function () {
                    var _this = this;
                    if (this.supportsPressRipple_()) {
                        if (this.activationTimer_) {
                            clearTimeout(this.activationTimer_);
                            this.activationTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                        }
                        if (this.fgDeactivationRemovalTimer_) {
                            clearTimeout(this.fgDeactivationRemovalTimer_);
                            this.fgDeactivationRemovalTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                        }
                        var _a = MDCRippleFoundation.cssClasses,
                            ROOT_2 = _a.ROOT,
                            UNBOUNDED_2 = _a.UNBOUNDED;
                        requestAnimationFrame(function () {
                            _this.adapter_.removeClass(ROOT_2);
                            _this.adapter_.removeClass(UNBOUNDED_2);
                            _this.removeCssVars_();
                        });
                    }
                    this.deregisterRootHandlers_();
                    this.deregisterDeactivationHandlers_();
                };
                /**
                 * @param evt Optional event containing position information.
                 */
                MDCRippleFoundation.prototype.activate = function (evt) {
                    this.activate_(evt);
                };
                MDCRippleFoundation.prototype.deactivate = function () {
                    this.deactivate_();
                };
                MDCRippleFoundation.prototype.layout = function () {
                    var _this = this;
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                    }
                    this.layoutFrame_ = requestAnimationFrame(function () {
                        _this.layoutInternal_();
                        _this.layoutFrame_ = 0;
                    });
                };
                MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
                    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                    if (unbounded) {
                        this.adapter_.addClass(UNBOUNDED);
                    } else {
                        this.adapter_.removeClass(UNBOUNDED);
                    }
                };
                MDCRippleFoundation.prototype.handleFocus = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.handleBlur = function () {
                    var _this = this;
                    requestAnimationFrame(function () {
                        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                /**
                 * We compute this property so that we are not querying information about the client
                 * until the point in time where the foundation requests it. This prevents scenarios where
                 * client-side feature-detection may happen too early, such as when components are rendered on the server
                 * and then initialized at mount time on the client.
                 */
                MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
                    return this.adapter_.browserSupportsCssVars();
                };
                MDCRippleFoundation.prototype.defaultActivationState_ = function () {
                    return {
                        activationEvent: undefined,
                        hasDeactivationUXRun: false,
                        isActivated: false,
                        isProgrammatic: false,
                        wasActivatedByPointer: false,
                        wasElementMadeActive: false,
                    };
                };
                /**
                 * supportsPressRipple Passed from init to save a redundant function call
                 */
                MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
                    var _this = this;
                    if (supportsPressRipple) {
                        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
                        });
                        if (this.adapter_.isUnbounded()) {
                            this.adapter_.registerResizeHandler(this.resizeHandler_);
                        }
                    }
                    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
                };
                MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
                    var _this = this;
                    if (evt.type === 'keydown') {
                        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
                    } else {
                        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                        });
                    }
                };
                MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
                    var _this = this;
                    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
                    });
                    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
                    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
                    if (this.adapter_.isUnbounded()) {
                        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                    }
                };
                MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
                    var _this = this;
                    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
                    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                        _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                    });
                };
                MDCRippleFoundation.prototype.removeCssVars_ = function () {
                    var _this = this;
                    var rippleStrings = MDCRippleFoundation.strings;
                    var keys = Object.keys(rippleStrings);
                    keys.forEach(function (key) {
                        if (key.indexOf('VAR_') === 0) {
                            _this.adapter_.updateCssVariable(rippleStrings[key], null);
                        }
                    });
                };
                MDCRippleFoundation.prototype.activate_ = function (evt) {
                    var _this = this;
                    if (this.adapter_.isSurfaceDisabled()) {
                        return;
                    }
                    var activationState = this.activationState_;
                    if (activationState.isActivated) {
                        return;
                    }
                    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
                    var previousActivationEvent = this.previousActivationEvent_;
                    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
                    if (isSameInteraction) {
                        return;
                    }
                    activationState.isActivated = true;
                    activationState.isProgrammatic = evt === undefined;
                    activationState.activationEvent = evt;
                    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
                    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
                        return _this.adapter_.containsEventTarget(target);
                    });
                    if (hasActivatedChild) {
                        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                        this.resetActivationState_();
                        return;
                    }
                    if (evt !== undefined) {
                        activatedTargets.push(evt.target);
                        this.registerDeactivationHandlers_(evt);
                    }
                    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
                    if (activationState.wasElementMadeActive) {
                        this.animateActivation_();
                    }
                    requestAnimationFrame(function () {
                        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                        activatedTargets = [];
                        if (!activationState.wasElementMadeActive &&
                            evt !== undefined &&
                            (evt.key === ' ' || evt.keyCode === 32)) {
                            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                            // active states inconsistently when they're called within event handling code:
                            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                            // variable is set within a rAF callback for a submit button interaction (#2241).
                            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                            if (activationState.wasElementMadeActive) {
                                _this.animateActivation_();
                            }
                        }
                        if (!activationState.wasElementMadeActive) {
                            // Reset activation state immediately if element was not made active.
                            _this.activationState_ = _this.defaultActivationState_();
                        }
                    });
                };
                MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
                    return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
                };
                MDCRippleFoundation.prototype.animateActivation_ = function () {
                    var _this = this;
                    var _a = MDCRippleFoundation.strings,
                        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
                        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
                    var _b = MDCRippleFoundation.cssClasses,
                        FG_DEACTIVATION = _b.FG_DEACTIVATION,
                        FG_ACTIVATION = _b.FG_ACTIVATION;
                    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
                    this.layoutInternal_();
                    var translateStart = '';
                    var translateEnd = '';
                    if (!this.adapter_.isUnbounded()) {
                        var _c = this.getFgTranslationCoordinates_(),
                            startPoint = _c.startPoint,
                            endPoint = _c.endPoint;
                        translateStart = startPoint.x + "px, " + startPoint.y + "px";
                        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
                    }
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
                    // Cancel any ongoing activation/deactivation animations
                    clearTimeout(this.activationTimer_);
                    clearTimeout(this.fgDeactivationRemovalTimer_);
                    this.rmBoundedActivationClasses_();
                    this.adapter_.removeClass(FG_DEACTIVATION);
                    // Force layout in order to re-trigger the animation.
                    this.adapter_.computeBoundingRect();
                    this.adapter_.addClass(FG_ACTIVATION);
                    this.activationTimer_ = setTimeout(function () {
                        return _this.activationTimerCallback_();
                    }, DEACTIVATION_TIMEOUT_MS);
                };
                MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
                    var _a = this.activationState_,
                        activationEvent = _a.activationEvent,
                        wasActivatedByPointer = _a.wasActivatedByPointer;
                    var startPoint;
                    if (wasActivatedByPointer) {
                        startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
                    } else {
                        startPoint = {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2,
                        };
                    }
                    // Center the element around the start point.
                    startPoint = {
                        x: startPoint.x - (this.initialSize_ / 2),
                        y: startPoint.y - (this.initialSize_ / 2),
                    };
                    var endPoint = {
                        x: (this.frame_.width / 2) - (this.initialSize_ / 2),
                        y: (this.frame_.height / 2) - (this.initialSize_ / 2),
                    };
                    return {
                        startPoint: startPoint,
                        endPoint: endPoint
                    };
                };
                MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
                    var _this = this;
                    // This method is called both when a pointing device is released, and when the activation animation ends.
                    // The deactivation animation should only run after both of those occur.
                    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
                    var _a = this.activationState_,
                        hasDeactivationUXRun = _a.hasDeactivationUXRun,
                        isActivated = _a.isActivated;
                    var activationHasEnded = hasDeactivationUXRun || !isActivated;
                    if (activationHasEnded && this.activationAnimationHasEnded_) {
                        this.rmBoundedActivationClasses_();
                        this.adapter_.addClass(FG_DEACTIVATION);
                        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                            _this.adapter_.removeClass(FG_DEACTIVATION);
                        }, ripple_constants_numbers.FG_DEACTIVATION_MS);
                    }
                };
                MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
                    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
                    this.adapter_.removeClass(FG_ACTIVATION);
                    this.activationAnimationHasEnded_ = false;
                    this.adapter_.computeBoundingRect();
                };
                MDCRippleFoundation.prototype.resetActivationState_ = function () {
                    var _this = this;
                    this.previousActivationEvent_ = this.activationState_.activationEvent;
                    this.activationState_ = this.defaultActivationState_();
                    // Touch devices may fire additional events for the same interaction within a short time.
                    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
                    setTimeout(function () {
                        return _this.previousActivationEvent_ = undefined;
                    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
                };
                MDCRippleFoundation.prototype.deactivate_ = function () {
                    var _this = this;
                    var activationState = this.activationState_;
                    // This can happen in scenarios such as when you have a keyup event that blurs the element.
                    if (!activationState.isActivated) {
                        return;
                    }
                    var state = tslib_es6["a" /* __assign */ ]({}, activationState);
                    if (activationState.isProgrammatic) {
                        requestAnimationFrame(function () {
                            return _this.animateDeactivation_(state);
                        });
                        this.resetActivationState_();
                    } else {
                        this.deregisterDeactivationHandlers_();
                        requestAnimationFrame(function () {
                            _this.activationState_.hasDeactivationUXRun = true;
                            _this.animateDeactivation_(state);
                            _this.resetActivationState_();
                        });
                    }
                };
                MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
                    var wasActivatedByPointer = _a.wasActivatedByPointer,
                        wasElementMadeActive = _a.wasElementMadeActive;
                    if (wasActivatedByPointer || wasElementMadeActive) {
                        this.runDeactivationUXLogicIfReady_();
                    }
                };
                MDCRippleFoundation.prototype.layoutInternal_ = function () {
                    var _this = this;
                    this.frame_ = this.adapter_.computeBoundingRect();
                    var maxDim = Math.max(this.frame_.height, this.frame_.width);
                    // Surface diameter is treated differently for unbounded vs. bounded ripples.
                    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
                    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
                    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
                    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
                    // `overflow: hidden`.
                    var getBoundedRadius = function () {
                        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
                        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
                    };
                    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
                    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
                    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
                    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
                    this.updateLayoutCssVars_();
                };
                MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
                    var _a = MDCRippleFoundation.strings,
                        VAR_FG_SIZE = _a.VAR_FG_SIZE,
                        VAR_LEFT = _a.VAR_LEFT,
                        VAR_TOP = _a.VAR_TOP,
                        VAR_FG_SCALE = _a.VAR_FG_SCALE;
                    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
                    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
                    if (this.adapter_.isUnbounded()) {
                        this.unboundedCoords_ = {
                            left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                            top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
                        };
                        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
                    }
                };
                return MDCRippleFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var _material_ripple_foundation = (foundation_MDCRippleFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/node_modules/@material/ripple/component.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */





            var component_MDCRipple = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCRipple, _super);

                function MDCRipple() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.disabled = false;
                    return _this;
                }
                MDCRipple.attachTo = function (root, opts) {
                    if (opts === void 0) {
                        opts = {
                            isUnbounded: undefined
                        };
                    }
                    var ripple = new MDCRipple(root);
                    // Only override unbounded behavior if option is explicitly specified
                    if (opts.isUnbounded !== undefined) {
                        ripple.unbounded = opts.isUnbounded;
                    }
                    return ripple;
                };
                MDCRipple.createAdapter = function (instance) {
                    return {
                        addClass: function (className) {
                            return instance.root_.classList.add(className);
                        },
                        browserSupportsCssVars: function () {
                            return supportsCssVariables(window);
                        },
                        computeBoundingRect: function () {
                            return instance.root_.getBoundingClientRect();
                        },
                        containsEventTarget: function (target) {
                            return instance.root_.contains(target);
                        },
                        deregisterDocumentInteractionHandler: function (evtType, handler) {
                            return document.documentElement.removeEventListener(evtType, handler, applyPassive());
                        },
                        deregisterInteractionHandler: function (evtType, handler) {
                            return instance.root_.removeEventListener(evtType, handler, applyPassive());
                        },
                        deregisterResizeHandler: function (handler) {
                            return window.removeEventListener('resize', handler);
                        },
                        getWindowPageOffset: function () {
                            return ({
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            });
                        },
                        isSurfaceActive: function () {
                            return ponyfill_namespaceObject.matches(instance.root_, ':active');
                        },
                        isSurfaceDisabled: function () {
                            return Boolean(instance.disabled);
                        },
                        isUnbounded: function () {
                            return Boolean(instance.unbounded);
                        },
                        registerDocumentInteractionHandler: function (evtType, handler) {
                            return document.documentElement.addEventListener(evtType, handler, applyPassive());
                        },
                        registerInteractionHandler: function (evtType, handler) {
                            return instance.root_.addEventListener(evtType, handler, applyPassive());
                        },
                        registerResizeHandler: function (handler) {
                            return window.addEventListener('resize', handler);
                        },
                        removeClass: function (className) {
                            return instance.root_.classList.remove(className);
                        },
                        updateCssVariable: function (varName, value) {
                            return instance.root_.style.setProperty(varName, value);
                        },
                    };
                };
                Object.defineProperty(MDCRipple.prototype, "unbounded", {
                    get: function () {
                        return Boolean(this.unbounded_);
                    },
                    set: function (unbounded) {
                        this.unbounded_ = Boolean(unbounded);
                        this.setUnbounded_();
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRipple.prototype.activate = function () {
                    this.foundation_.activate();
                };
                MDCRipple.prototype.deactivate = function () {
                    this.foundation_.deactivate();
                };
                MDCRipple.prototype.layout = function () {
                    this.foundation_.layout();
                };
                MDCRipple.prototype.getDefaultFoundation = function () {
                    return new foundation_MDCRippleFoundation(MDCRipple.createAdapter(this));
                };
                MDCRipple.prototype.initialSyncWithDOM = function () {
                    var root = this.root_;
                    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
                };
                /**
                 * Closure Compiler throws an access control error when directly accessing a
                 * protected or private property inside a getter/setter, like unbounded above.
                 * By accessing the protected property inside a method, we solve that problem.
                 * That's why this function exists.
                 */
                MDCRipple.prototype.setUnbounded_ = function () {
                    this.foundation_.setUnbounded(Boolean(this.unbounded_));
                };
                return MDCRipple;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var dialog_constants_cssClasses = {
                CLOSING: 'mdc-dialog--closing',
                OPEN: 'mdc-dialog--open',
                OPENING: 'mdc-dialog--opening',
                SCROLLABLE: 'mdc-dialog--scrollable',
                SCROLL_LOCK: 'mdc-dialog-scroll-lock',
                STACKED: 'mdc-dialog--stacked',
            };
            var dialog_constants_strings = {
                ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
                BUTTON_SELECTOR: '.mdc-dialog__button',
                CLOSED_EVENT: 'MDCDialog:closed',
                CLOSE_ACTION: 'close',
                CLOSING_EVENT: 'MDCDialog:closing',
                CONTAINER_SELECTOR: '.mdc-dialog__container',
                CONTENT_SELECTOR: '.mdc-dialog__content',
                DEFAULT_BUTTON_SELECTOR: '.mdc-dialog__button--default',
                DESTROY_ACTION: 'destroy',
                OPENED_EVENT: 'MDCDialog:opened',
                OPENING_EVENT: 'MDCDialog:opening',
                SCRIM_SELECTOR: '.mdc-dialog__scrim',
                SUPPRESS_DEFAULT_PRESS_SELECTOR: [
                    'textarea',
                    '.mdc-menu .mdc-list-item',
                ].join(', '),
                SURFACE_SELECTOR: '.mdc-dialog__surface',
            };
            var dialog_constants_numbers = {
                DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
                DIALOG_ANIMATION_OPEN_TIME_MS: 150,
            };
            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/foundation.js
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCDialogFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCDialogFoundation, _super);

                function MDCDialogFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;
                    _this.isOpen_ = false;
                    _this.animationFrame_ = 0;
                    _this.animationTimer_ = 0;
                    _this.layoutFrame_ = 0;
                    _this.escapeKeyAction_ = dialog_constants_strings.CLOSE_ACTION;
                    _this.scrimClickAction_ = dialog_constants_strings.CLOSE_ACTION;
                    _this.autoStackButtons_ = true;
                    _this.areButtonsStacked_ = false;
                    return _this;
                }
                Object.defineProperty(MDCDialogFoundation, "cssClasses", {
                    get: function () {
                        return dialog_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDialogFoundation, "strings", {
                    get: function () {
                        return dialog_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDialogFoundation, "numbers", {
                    get: function () {
                        return dialog_constants_numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addBodyClass: function () {
                                return undefined;
                            },
                            addClass: function () {
                                return undefined;
                            },
                            areButtonsStacked: function () {
                                return false;
                            },
                            clickDefaultButton: function () {
                                return undefined;
                            },
                            eventTargetMatches: function () {
                                return false;
                            },
                            getActionFromEvent: function () {
                                return '';
                            },
                            hasClass: function () {
                                return false;
                            },
                            isContentScrollable: function () {
                                return false;
                            },
                            notifyClosed: function () {
                                return undefined;
                            },
                            notifyClosing: function () {
                                return undefined;
                            },
                            notifyOpened: function () {
                                return undefined;
                            },
                            notifyOpening: function () {
                                return undefined;
                            },
                            releaseFocus: function () {
                                return undefined;
                            },
                            removeBodyClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            reverseButtons: function () {
                                return undefined;
                            },
                            trapFocus: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCDialogFoundation.prototype.init = function () {
                    if (this.adapter_.hasClass(dialog_constants_cssClasses.STACKED)) {
                        this.setAutoStackButtons(false);
                    }
                };
                MDCDialogFoundation.prototype.destroy = function () {
                    if (this.isOpen_) {
                        this.close(dialog_constants_strings.DESTROY_ACTION);
                    }
                    if (this.animationTimer_) {
                        clearTimeout(this.animationTimer_);
                        this.handleAnimationTimerEnd_();
                    }
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                        this.layoutFrame_ = 0;
                    }
                };
                MDCDialogFoundation.prototype.open = function () {
                    var _this = this;
                    this.isOpen_ = true;
                    this.adapter_.notifyOpening();
                    this.adapter_.addClass(dialog_constants_cssClasses.OPENING);
                    // Wait a frame once display is no longer "none", to establish basis for animation
                    this.runNextAnimationFrame_(function () {
                        _this.adapter_.addClass(dialog_constants_cssClasses.OPEN);
                        _this.adapter_.addBodyClass(dialog_constants_cssClasses.SCROLL_LOCK);
                        _this.layout();
                        _this.animationTimer_ = setTimeout(function () {
                            _this.handleAnimationTimerEnd_();
                            _this.adapter_.trapFocus();
                            _this.adapter_.notifyOpened();
                        }, dialog_constants_numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
                    });
                };
                MDCDialogFoundation.prototype.close = function (action) {
                    var _this = this;
                    if (action === void 0) {
                        action = '';
                    }
                    if (!this.isOpen_) {
                        // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
                        return;
                    }
                    this.isOpen_ = false;
                    this.adapter_.notifyClosing(action);
                    this.adapter_.addClass(dialog_constants_cssClasses.CLOSING);
                    this.adapter_.removeClass(dialog_constants_cssClasses.OPEN);
                    this.adapter_.removeBodyClass(dialog_constants_cssClasses.SCROLL_LOCK);
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = 0;
                    clearTimeout(this.animationTimer_);
                    this.animationTimer_ = setTimeout(function () {
                        _this.adapter_.releaseFocus();
                        _this.handleAnimationTimerEnd_();
                        _this.adapter_.notifyClosed(action);
                    }, dialog_constants_numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
                };
                MDCDialogFoundation.prototype.isOpen = function () {
                    return this.isOpen_;
                };
                MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
                    return this.escapeKeyAction_;
                };
                MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
                    this.escapeKeyAction_ = action;
                };
                MDCDialogFoundation.prototype.getScrimClickAction = function () {
                    return this.scrimClickAction_;
                };
                MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
                    this.scrimClickAction_ = action;
                };
                MDCDialogFoundation.prototype.getAutoStackButtons = function () {
                    return this.autoStackButtons_;
                };
                MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
                    this.autoStackButtons_ = autoStack;
                };
                MDCDialogFoundation.prototype.layout = function () {
                    var _this = this;
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                    }
                    this.layoutFrame_ = requestAnimationFrame(function () {
                        _this.layoutInternal_();
                        _this.layoutFrame_ = 0;
                    });
                };
                MDCDialogFoundation.prototype.handleInteraction = function (evt) {
                    var isClick = evt.type === 'click';
                    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
                    var isSpace = evt.key === 'Space' || evt.keyCode === 32;
                    var isScrim = this.adapter_.eventTargetMatches(evt.target, dialog_constants_strings.SCRIM_SELECTOR);
                    var isDefault = !this.adapter_.eventTargetMatches(evt.target, dialog_constants_strings.SUPPRESS_DEFAULT_PRESS_SELECTOR);
                    // Check for scrim click first since it doesn't require querying ancestors
                    if (isClick && isScrim && this.scrimClickAction_ !== '') {
                        this.close(this.scrimClickAction_);
                    } else if (isClick || isSpace || isEnter) {
                        var action = this.adapter_.getActionFromEvent(evt);
                        if (action) {
                            this.close(action);
                        } else if (isEnter && isDefault) {
                            this.adapter_.clickDefaultButton();
                        }
                    }
                };
                MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
                    var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
                    if (isEscape && this.escapeKeyAction_ !== '') {
                        this.close(this.escapeKeyAction_);
                    }
                };
                MDCDialogFoundation.prototype.layoutInternal_ = function () {
                    if (this.autoStackButtons_) {
                        this.detectStackedButtons_();
                    }
                    this.detectScrollableContent_();
                };
                MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
                    this.animationTimer_ = 0;
                    this.adapter_.removeClass(dialog_constants_cssClasses.OPENING);
                    this.adapter_.removeClass(dialog_constants_cssClasses.CLOSING);
                };
                /**
                 * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
                 */
                MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
                    var _this = this;
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = requestAnimationFrame(function () {
                        _this.animationFrame_ = 0;
                        clearTimeout(_this.animationTimer_);
                        _this.animationTimer_ = setTimeout(callback, 0);
                    });
                };
                MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
                    // Remove the class first to let us measure the buttons' natural positions.
                    this.adapter_.removeClass(dialog_constants_cssClasses.STACKED);
                    var areButtonsStacked = this.adapter_.areButtonsStacked();
                    if (areButtonsStacked) {
                        this.adapter_.addClass(dialog_constants_cssClasses.STACKED);
                    }
                    if (areButtonsStacked !== this.areButtonsStacked_) {
                        this.adapter_.reverseButtons();
                        this.areButtonsStacked_ = areButtonsStacked;
                    }
                };
                MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
                    // Remove the class first to let us measure the natural height of the content.
                    this.adapter_.removeClass(dialog_constants_cssClasses.SCROLLABLE);
                    if (this.adapter_.isContentScrollable()) {
                        this.adapter_.addClass(dialog_constants_cssClasses.SCROLLABLE);
                    }
                };
                return MDCDialogFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var dialog_foundation = (foundation_MDCDialogFoundation);
            //# sourceMappingURL=foundation.js.map
            // EXTERNAL MODULE: ../node_modules/focus-trap/index.js
            var focus_trap = __webpack_require__(13);
            var focus_trap_default = /*#__PURE__*/ __webpack_require__.n(focus_trap);

            // CONCATENATED MODULE: ../node_modules/@material/dialog/util.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */

            function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
                if (focusTrapFactory === void 0) {
                    focusTrapFactory = focus_trap_default.a;
                }
                return focusTrapFactory(surfaceEl, {
                    clickOutsideDeactivates: true,
                    escapeDeactivates: false,
                    initialFocus: initialFocusEl,
                });
            }

            function isScrollable(el) {
                return el ? el.scrollHeight > el.offsetHeight : false;
            }

            function areTopsMisaligned(els) {
                var tops = new Set();
                [].forEach.call(els, function (el) {
                    return tops.add(el.offsetTop);
                });
                return tops.size > 1;
            }
            //# sourceMappingURL=util.js.map
            // CONCATENATED MODULE: ../node_modules/@material/dialog/component.js
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */






            var component_strings = foundation_MDCDialogFoundation.strings;
            var component_MDCDialog = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCDialog, _super);

                function MDCDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(MDCDialog.prototype, "isOpen", {
                    get: function () {
                        return this.foundation_.isOpen();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDialog.prototype, "escapeKeyAction", {
                    get: function () {
                        return this.foundation_.getEscapeKeyAction();
                    },
                    set: function (action) {
                        this.foundation_.setEscapeKeyAction(action);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDialog.prototype, "scrimClickAction", {
                    get: function () {
                        return this.foundation_.getScrimClickAction();
                    },
                    set: function (action) {
                        this.foundation_.setScrimClickAction(action);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDialog.prototype, "autoStackButtons", {
                    get: function () {
                        return this.foundation_.getAutoStackButtons();
                    },
                    set: function (autoStack) {
                        this.foundation_.setAutoStackButtons(autoStack);
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCDialog.attachTo = function (root) {
                    return new MDCDialog(root);
                };
                MDCDialog.prototype.initialize = function (focusTrapFactory, initialFocusEl) {
                    var e_1, _a;
                    var container = this.root_.querySelector(component_strings.CONTAINER_SELECTOR);
                    if (!container) {
                        throw new Error("Dialog component requires a " + component_strings.CONTAINER_SELECTOR + " container element");
                    }
                    this.container_ = container;
                    this.content_ = this.root_.querySelector(component_strings.CONTENT_SELECTOR);
                    this.buttons_ = [].slice.call(this.root_.querySelectorAll(component_strings.BUTTON_SELECTOR));
                    this.defaultButton_ = this.root_.querySelector(component_strings.DEFAULT_BUTTON_SELECTOR);
                    this.focusTrapFactory_ = focusTrapFactory;
                    this.initialFocusEl_ = initialFocusEl;
                    this.buttonRipples_ = [];
                    try {
                        for (var _b = tslib_es6["d" /* __values */ ](this.buttons_), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var buttonEl = _c.value;
                            this.buttonRipples_.push(new component_MDCRipple(buttonEl));
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        } finally {
                            if (e_1) throw e_1.error;
                        }
                    }
                };
                MDCDialog.prototype.initialSyncWithDOM = function () {
                    var _this = this;
                    this.focusTrap_ = createFocusTrapInstance(this.container_, this.focusTrapFactory_, this.initialFocusEl_);
                    this.handleInteraction_ = this.foundation_.handleInteraction.bind(this.foundation_);
                    this.handleDocumentKeydown_ = this.foundation_.handleDocumentKeydown.bind(this.foundation_);
                    this.handleLayout_ = this.layout.bind(this);
                    var LAYOUT_EVENTS = ['resize', 'orientationchange'];
                    this.handleOpening_ = function () {
                        LAYOUT_EVENTS.forEach(function (evtType) {
                            return window.addEventListener(evtType, _this.handleLayout_);
                        });
                        document.addEventListener('keydown', _this.handleDocumentKeydown_);
                    };
                    this.handleClosing_ = function () {
                        LAYOUT_EVENTS.forEach(function (evtType) {
                            return window.removeEventListener(evtType, _this.handleLayout_);
                        });
                        document.removeEventListener('keydown', _this.handleDocumentKeydown_);
                    };
                    this.listen('click', this.handleInteraction_);
                    this.listen('keydown', this.handleInteraction_);
                    this.listen(component_strings.OPENING_EVENT, this.handleOpening_);
                    this.listen(component_strings.CLOSING_EVENT, this.handleClosing_);
                };
                MDCDialog.prototype.destroy = function () {
                    this.unlisten('click', this.handleInteraction_);
                    this.unlisten('keydown', this.handleInteraction_);
                    this.unlisten(component_strings.OPENING_EVENT, this.handleOpening_);
                    this.unlisten(component_strings.CLOSING_EVENT, this.handleClosing_);
                    this.handleClosing_();
                    this.buttonRipples_.forEach(function (ripple) {
                        return ripple.destroy();
                    });
                    _super.prototype.destroy.call(this);
                };
                MDCDialog.prototype.layout = function () {
                    this.foundation_.layout();
                };
                MDCDialog.prototype.open = function () {
                    this.foundation_.open();
                };
                MDCDialog.prototype.close = function (action) {
                    if (action === void 0) {
                        action = '';
                    }
                    this.foundation_.close(action);
                };
                MDCDialog.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = {
                        addBodyClass: function (className) {
                            return document.body.classList.add(className);
                        },
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        areButtonsStacked: function () {
                            return areTopsMisaligned(_this.buttons_);
                        },
                        clickDefaultButton: function () {
                            return _this.defaultButton_ && _this.defaultButton_.click();
                        },
                        eventTargetMatches: function (target, selector) {
                            return target ? matches(target, selector) : false;
                        },
                        getActionFromEvent: function (evt) {
                            if (!evt.target) {
                                return '';
                            }
                            var element = closest(evt.target, "[" + component_strings.ACTION_ATTRIBUTE + "]");
                            return element && element.getAttribute(component_strings.ACTION_ATTRIBUTE);
                        },
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        isContentScrollable: function () {
                            return isScrollable(_this.content_);
                        },
                        notifyClosed: function (action) {
                            return _this.emit(component_strings.CLOSED_EVENT, action ? {
                                action: action
                            } : {});
                        },
                        notifyClosing: function (action) {
                            return _this.emit(component_strings.CLOSING_EVENT, action ? {
                                action: action
                            } : {});
                        },
                        notifyOpened: function () {
                            return _this.emit(component_strings.OPENED_EVENT, {});
                        },
                        notifyOpening: function () {
                            return _this.emit(component_strings.OPENING_EVENT, {});
                        },
                        releaseFocus: function () {
                            return _this.focusTrap_.deactivate();
                        },
                        removeBodyClass: function (className) {
                            return document.body.classList.remove(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        reverseButtons: function () {
                            _this.buttons_.reverse();
                            _this.buttons_.forEach(function (button) {
                                button.parentElement.appendChild(button);
                            });
                        },
                        trapFocus: function () {
                            return _this.focusTrap_.activate();
                        },
                    };
                    return new foundation_MDCDialogFoundation(adapter);
                };
                return MDCDialog;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/chips/chip/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var chip_constants_strings = {
                CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
                ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
                INTERACTION_EVENT: 'MDCChip:interaction',
                LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
                REMOVAL_EVENT: 'MDCChip:removal',
                SELECTION_EVENT: 'MDCChip:selection',
                TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
                TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing',
            };
            var chip_constants_cssClasses = {
                CHECKMARK: 'mdc-chip__checkmark',
                CHIP_EXIT: 'mdc-chip--exit',
                HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
                LEADING_ICON: 'mdc-chip__icon--leading',
                SELECTED: 'mdc-chip--selected',
                TRAILING_ICON: 'mdc-chip__icon--trailing',
            };
            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/chips/chip/foundation.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var emptyClientRect = {
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
            };
            var foundation_MDCChipFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCChipFoundation, _super);

                function MDCChipFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCChipFoundation.defaultAdapter, adapter)) || this;
                    /**
                     * Whether a trailing icon click should immediately trigger exit/removal of the chip.
                     */
                    _this.shouldRemoveOnTrailingIconClick_ = true;
                    return _this;
                }
                Object.defineProperty(MDCChipFoundation, "strings", {
                    get: function () {
                        return chip_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCChipFoundation, "cssClasses", {
                    get: function () {
                        return chip_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            addClassToLeadingIcon: function () {
                                return undefined;
                            },
                            eventTargetHasClass: function () {
                                return false;
                            },
                            getCheckmarkBoundingClientRect: function () {
                                return emptyClientRect;
                            },
                            getComputedStyleValue: function () {
                                return '';
                            },
                            getRootBoundingClientRect: function () {
                                return emptyClientRect;
                            },
                            hasClass: function () {
                                return false;
                            },
                            hasLeadingIcon: function () {
                                return false;
                            },
                            notifyInteraction: function () {
                                return undefined;
                            },
                            notifyRemoval: function () {
                                return undefined;
                            },
                            notifySelection: function () {
                                return undefined;
                            },
                            notifyTrailingIconInteraction: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            removeClassFromLeadingIcon: function () {
                                return undefined;
                            },
                            setStyleProperty: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCChipFoundation.prototype.isSelected = function () {
                    return this.adapter_.hasClass(chip_constants_cssClasses.SELECTED);
                };
                MDCChipFoundation.prototype.setSelected = function (selected) {
                    if (selected) {
                        this.adapter_.addClass(chip_constants_cssClasses.SELECTED);
                    } else {
                        this.adapter_.removeClass(chip_constants_cssClasses.SELECTED);
                    }
                    this.adapter_.notifySelection(selected);
                };
                MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
                    return this.shouldRemoveOnTrailingIconClick_;
                };
                MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
                    this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
                };
                MDCChipFoundation.prototype.getDimensions = function () {
                    var _this = this;
                    var getRootRect = function () {
                        return _this.adapter_.getRootBoundingClientRect();
                    };
                    var getCheckmarkRect = function () {
                        return _this.adapter_.getCheckmarkBoundingClientRect();
                    };
                    // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
                    // size of the checkmark.
                    if (!this.adapter_.hasLeadingIcon()) {
                        var checkmarkRect = getCheckmarkRect();
                        if (checkmarkRect) {
                            var rootRect = getRootRect();
                            var height = rootRect.height;
                            // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
                            // However, the checkbox is initially hidden by setting the width to 0.
                            // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
                            // when adding it to the root client rect's width.
                            var checkmarkWidth = checkmarkRect.height;
                            var width = rootRect.width + checkmarkWidth;
                            return tslib_es6["a" /* __assign */ ]({}, rootRect, {
                                width: width,
                                height: height
                            });
                        }
                    }
                    return getRootRect();
                };
                /**
                 * Begins the exit animation which leads to removal of the chip.
                 */
                MDCChipFoundation.prototype.beginExit = function () {
                    this.adapter_.addClass(chip_constants_cssClasses.CHIP_EXIT);
                };
                /**
                 * Handles an interaction event on the root element.
                 */
                MDCChipFoundation.prototype.handleInteraction = function (evt) {
                    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
                    if (evt.type === 'click' || isEnter) {
                        this.adapter_.notifyInteraction();
                    }
                };
                /**
                 * Handles a transition end event on the root element.
                 */
                MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
                    var _this = this;
                    // Handle transition end event on the chip when it is about to be removed.
                    if (this.adapter_.eventTargetHasClass(evt.target, chip_constants_cssClasses.CHIP_EXIT)) {
                        if (evt.propertyName === 'width') {
                            this.adapter_.notifyRemoval();
                        } else if (evt.propertyName === 'opacity') {
                            // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
                            var chipWidth_1 = this.adapter_.getComputedStyleValue('width');
                            // On the next frame (once we get the computed width), explicitly set the chip's width
                            // to its current pixel width, so we aren't transitioning out of 'auto'.
                            requestAnimationFrame(function () {
                                _this.adapter_.setStyleProperty('width', chipWidth_1);
                                // To mitigate jitter, start transitioning padding and margin before width.
                                _this.adapter_.setStyleProperty('padding', '0');
                                _this.adapter_.setStyleProperty('margin', '0');
                                // On the next frame (once width is explicitly set), transition width to 0.
                                requestAnimationFrame(function () {
                                    _this.adapter_.setStyleProperty('width', '0');
                                });
                            });
                        }
                        return;
                    }
                    // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
                    if (evt.propertyName !== 'opacity') {
                        return;
                    }
                    if (this.adapter_.eventTargetHasClass(evt.target, chip_constants_cssClasses.LEADING_ICON) &&
                        this.adapter_.hasClass(chip_constants_cssClasses.SELECTED)) {
                        this.adapter_.addClassToLeadingIcon(chip_constants_cssClasses.HIDDEN_LEADING_ICON);
                    } else if (this.adapter_.eventTargetHasClass(evt.target, chip_constants_cssClasses.CHECKMARK) &&
                        !this.adapter_.hasClass(chip_constants_cssClasses.SELECTED)) {
                        this.adapter_.removeClassFromLeadingIcon(chip_constants_cssClasses.HIDDEN_LEADING_ICON);
                    }
                };
                /**
                 * Handles an interaction event on the trailing icon element. This is used to
                 * prevent the ripple from activating on interaction with the trailing icon.
                 */
                MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
                    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
                    evt.stopPropagation();
                    if (evt.type === 'click' || isEnter) {
                        this.adapter_.notifyTrailingIconInteraction();
                        if (this.shouldRemoveOnTrailingIconClick_) {
                            this.beginExit();
                        }
                    }
                };
                return MDCChipFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var chip_foundation = (foundation_MDCChipFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/chips/chip/component.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */





            var component_INTERACTION_EVENTS = ['click', 'keydown'];
            var component_MDCChip = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCChip, _super);

                function MDCChip() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(MDCChip.prototype, "selected", {
                    /**
                     * @return Whether the chip is selected.
                     */
                    get: function () {
                        return this.foundation_.isSelected();
                    },
                    /**
                     * Sets selected state on the chip.
                     */
                    set: function (selected) {
                        this.foundation_.setSelected(selected);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
                    /**
                     * @return Whether a trailing icon click should trigger exit/removal of the chip.
                     */
                    get: function () {
                        return this.foundation_.getShouldRemoveOnTrailingIconClick();
                    },
                    /**
                     * Sets whether a trailing icon click should trigger exit/removal of the chip.
                     */
                    set: function (shouldRemove) {
                        this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCChip.prototype, "ripple", {
                    get: function () {
                        return this.ripple_;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCChip.prototype, "id", {
                    get: function () {
                        return this.root_.id;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCChip.attachTo = function (root) {
                    return new MDCChip(root);
                };
                MDCChip.prototype.initialize = function (rippleFactory) {
                    var _this = this;
                    if (rippleFactory === void 0) {
                        rippleFactory = function (el, foundation) {
                            return new ripple_component["a" /* MDCRipple */ ](el, foundation);
                        };
                    }
                    this.leadingIcon_ = this.root_.querySelector(chip_constants_strings.LEADING_ICON_SELECTOR);
                    this.trailingIcon_ = this.root_.querySelector(chip_constants_strings.TRAILING_ICON_SELECTOR);
                    this.checkmark_ = this.root_.querySelector(chip_constants_strings.CHECKMARK_SELECTOR);
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var rippleAdapter = tslib_es6["a" /* __assign */ ]({}, ripple_component["a" /* MDCRipple */ ].createAdapter(this), {
                        computeBoundingRect: function () {
                            return _this.foundation_.getDimensions();
                        }
                    });
                    this.ripple_ = rippleFactory(this.root_, new ripple_foundation["a" /* MDCRippleFoundation */ ](rippleAdapter));
                };
                MDCChip.prototype.initialSyncWithDOM = function () {
                    var _this = this;
                    this.handleInteraction_ = function (evt) {
                        return _this.foundation_.handleInteraction(evt);
                    };
                    this.handleTransitionEnd_ = function (evt) {
                        return _this.foundation_.handleTransitionEnd(evt);
                    };
                    this.handleTrailingIconInteraction_ = function (evt) {
                        return _this.foundation_.handleTrailingIconInteraction(evt);
                    };
                    component_INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.listen(evtType, _this.handleInteraction_);
                    });
                    this.listen('transitionend', this.handleTransitionEnd_);
                    if (this.trailingIcon_) {
                        component_INTERACTION_EVENTS.forEach(function (evtType) {
                            _this.trailingIcon_.addEventListener(evtType, _this.handleTrailingIconInteraction_);
                        });
                    }
                };
                MDCChip.prototype.destroy = function () {
                    var _this = this;
                    this.ripple_.destroy();
                    component_INTERACTION_EVENTS.forEach(function (evtType) {
                        _this.unlisten(evtType, _this.handleInteraction_);
                    });
                    this.unlisten('transitionend', this.handleTransitionEnd_);
                    if (this.trailingIcon_) {
                        component_INTERACTION_EVENTS.forEach(function (evtType) {
                            _this.trailingIcon_.removeEventListener(evtType, _this.handleTrailingIconInteraction_);
                        });
                    }
                    _super.prototype.destroy.call(this);
                };
                /**
                 * Begins the exit animation which leads to removal of the chip.
                 */
                MDCChip.prototype.beginExit = function () {
                    this.foundation_.beginExit();
                };
                MDCChip.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        addClassToLeadingIcon: function (className) {
                            if (_this.leadingIcon_) {
                                _this.leadingIcon_.classList.add(className);
                            }
                        },
                        eventTargetHasClass: function (target, className) {
                            return target ? target.classList.contains(className) : false;
                        },
                        getCheckmarkBoundingClientRect: function () {
                            return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null;
                        },
                        getComputedStyleValue: function (propertyName) {
                            return window.getComputedStyle(_this.root_).getPropertyValue(propertyName);
                        },
                        getRootBoundingClientRect: function () {
                            return _this.root_.getBoundingClientRect();
                        },
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        hasLeadingIcon: function () {
                            return !!_this.leadingIcon_;
                        },
                        notifyInteraction: function () {
                            return _this.emit(chip_constants_strings.INTERACTION_EVENT, {
                                chipId: _this.id
                            }, true /* shouldBubble */ );
                        },
                        notifyRemoval: function () {
                            return _this.emit(chip_constants_strings.REMOVAL_EVENT, {
                                chipId: _this.id,
                                root: _this.root_
                            }, true /* shouldBubble */ );
                        },
                        notifySelection: function (selected) {
                            return _this.emit(chip_constants_strings.SELECTION_EVENT, {
                                chipId: _this.id,
                                selected: selected
                            }, true /* shouldBubble */ );
                        },
                        notifyTrailingIconInteraction: function () {
                            return _this.emit(chip_constants_strings.TRAILING_ICON_INTERACTION_EVENT, {
                                chipId: _this.id
                            }, true /* shouldBubble */ );
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        removeClassFromLeadingIcon: function (className) {
                            if (_this.leadingIcon_) {
                                _this.leadingIcon_.classList.remove(className);
                            }
                        },
                        setStyleProperty: function (propertyName, value) {
                            return _this.root_.style.setProperty(propertyName, value);
                        },
                    };
                    return new foundation_MDCChipFoundation(adapter);
                };
                return MDCChip;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/chips/chip-set/constants.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var chip_set_constants_strings = {
                CHIP_SELECTOR: '.mdc-chip',
            };
            var chip_set_constants_cssClasses = {
                CHOICE: 'mdc-chip-set--choice',
                FILTER: 'mdc-chip-set--filter',
            };
            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/chips/chip-set/foundation.js
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCChipSetFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCChipSetFoundation, _super);

                function MDCChipSetFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCChipSetFoundation.defaultAdapter, adapter)) || this;
                    /**
                     * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
                     */
                    _this.selectedChipIds_ = [];
                    return _this;
                }
                Object.defineProperty(MDCChipSetFoundation, "strings", {
                    get: function () {
                        return chip_set_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
                    get: function () {
                        return chip_set_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            hasClass: function () {
                                return false;
                            },
                            removeChip: function () {
                                return undefined;
                            },
                            setSelected: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns an array of the IDs of all selected chips.
                 */
                MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
                    return this.selectedChipIds_.slice();
                };
                /**
                 * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
                 */
                MDCChipSetFoundation.prototype.select = function (chipId) {
                    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
                        return;
                    }
                    if (this.adapter_.hasClass(chip_set_constants_cssClasses.CHOICE) && this.selectedChipIds_.length > 0) {
                        var previouslySelectedChip = this.selectedChipIds_[0];
                        this.selectedChipIds_.length = 0;
                        this.adapter_.setSelected(previouslySelectedChip, false);
                    }
                    this.selectedChipIds_.push(chipId);
                    this.adapter_.setSelected(chipId, true);
                };
                /**
                 * Handles a chip interaction event
                 */
                MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
                    if (this.adapter_.hasClass(chip_set_constants_cssClasses.CHOICE) || this.adapter_.hasClass(chip_set_constants_cssClasses.FILTER)) {
                        this.toggleSelect_(chipId);
                    }
                };
                /**
                 * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
                 */
                MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected) {
                    var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;
                    if (selected && !chipIsSelected) {
                        this.select(chipId);
                    } else if (!selected && chipIsSelected) {
                        this.deselect_(chipId);
                    }
                };
                /**
                 * Handles the event when a chip is removed.
                 */
                MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
                    this.deselect_(chipId);
                    this.adapter_.removeChip(chipId);
                };
                /**
                 * Deselects the chip with the given id.
                 */
                MDCChipSetFoundation.prototype.deselect_ = function (chipId) {
                    var index = this.selectedChipIds_.indexOf(chipId);
                    if (index >= 0) {
                        this.selectedChipIds_.splice(index, 1);
                        this.adapter_.setSelected(chipId, false);
                    }
                };
                /**
                 * Toggles selection of the chip with the given id.
                 */
                MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
                    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
                        this.deselect_(chipId);
                    } else {
                        this.select(chipId);
                    }
                };
                return MDCChipSetFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var chip_set_foundation = (foundation_MDCChipSetFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/chips/chip-set/component.js
            /**
             * @license
             * Copyright 2016 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */




            var component_a = foundation_MDCChipFoundation.strings,
                INTERACTION_EVENT = component_a.INTERACTION_EVENT,
                SELECTION_EVENT = component_a.SELECTION_EVENT,
                REMOVAL_EVENT = component_a.REMOVAL_EVENT;
            var CHIP_SELECTOR = foundation_MDCChipSetFoundation.strings.CHIP_SELECTOR;
            var idCounter = 0;
            var component_MDCChipSet = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCChipSet, _super);

                function MDCChipSet() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCChipSet.attachTo = function (root) {
                    return new MDCChipSet(root);
                };
                Object.defineProperty(MDCChipSet.prototype, "chips", {
                    get: function () {
                        return this.chips_.slice();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
                    /**
                     * @return An array of the IDs of all selected chips.
                     */
                    get: function () {
                        return this.foundation_.getSelectedChipIds();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param chipFactory A function which creates a new MDCChip.
                 */
                MDCChipSet.prototype.initialize = function (chipFactory) {
                    if (chipFactory === void 0) {
                        chipFactory = function (el) {
                            return new component_MDCChip(el);
                        };
                    }
                    this.chipFactory_ = chipFactory;
                    this.chips_ = this.instantiateChips_(this.chipFactory_);
                };
                MDCChipSet.prototype.initialSyncWithDOM = function () {
                    var _this = this;
                    this.chips_.forEach(function (chip) {
                        if (chip.id && chip.selected) {
                            _this.foundation_.select(chip.id);
                        }
                    });
                    this.handleChipInteraction_ = function (evt) {
                        return _this.foundation_.handleChipInteraction(evt.detail.chipId);
                    };
                    this.handleChipSelection_ = function (evt) {
                        return _this.foundation_.handleChipSelection(evt.detail.chipId, evt.detail.selected);
                    };
                    this.handleChipRemoval_ = function (evt) {
                        return _this.foundation_.handleChipRemoval(evt.detail.chipId);
                    };
                    this.listen(INTERACTION_EVENT, this.handleChipInteraction_);
                    this.listen(SELECTION_EVENT, this.handleChipSelection_);
                    this.listen(REMOVAL_EVENT, this.handleChipRemoval_);
                };
                MDCChipSet.prototype.destroy = function () {
                    this.chips_.forEach(function (chip) {
                        chip.destroy();
                    });
                    this.unlisten(INTERACTION_EVENT, this.handleChipInteraction_);
                    this.unlisten(SELECTION_EVENT, this.handleChipSelection_);
                    this.unlisten(REMOVAL_EVENT, this.handleChipRemoval_);
                    _super.prototype.destroy.call(this);
                };
                /**
                 * Adds a new chip object to the chip set from the given chip element.
                 */
                MDCChipSet.prototype.addChip = function (chipEl) {
                    chipEl.id = chipEl.id || "mdc-chip-" + ++idCounter;
                    this.chips_.push(this.chipFactory_(chipEl));
                };
                MDCChipSet.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = {
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        removeChip: function (chipId) {
                            var index = _this.findChipIndex_(chipId);
                            if (index >= 0) {
                                _this.chips_[index].destroy();
                                _this.chips_.splice(index, 1);
                            }
                        },
                        setSelected: function (chipId, selected) {
                            var index = _this.findChipIndex_(chipId);
                            if (index >= 0) {
                                _this.chips_[index].selected = selected;
                            }
                        },
                    };
                    return new foundation_MDCChipSetFoundation(adapter);
                };
                /**
                 * Instantiates chip components on all of the chip set's child chip elements.
                 */
                MDCChipSet.prototype.instantiateChips_ = function (chipFactory) {
                    var chipElements = [].slice.call(this.root_.querySelectorAll(CHIP_SELECTOR));
                    return chipElements.map(function (el) {
                        el.id = el.id || "mdc-chip-" + ++idCounter;
                        return chipFactory(el);
                    });
                };
                /**
                 * Returns the index of the chip with the given id, or -1 if the chip does not exist.
                 */
                MDCChipSet.prototype.findChipIndex_ = function (chipId) {
                    for (var i = 0; i < this.chips_.length; i++) {
                        if (this.chips_[i].id === chipId) {
                            return i;
                        }
                    }
                    return -1;
                };
                return MDCChipSet;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ../node_modules/@material/snackbar/node_modules/@material/dom/ponyfill.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            /**
             * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
             * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
             */
            function ponyfill_closest(element, selector) {
                if (element.closest) {
                    return element.closest(selector);
                }
                var el = element;
                while (el) {
                    if (ponyfill_matches(el, selector)) {
                        return el;
                    }
                    el = el.parentElement;
                }
                return null;
            }

            function ponyfill_matches(element, selector) {
                var nativeMatches = element.matches ||
                    element.webkitMatchesSelector ||
                    element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }
            //# sourceMappingURL=ponyfill.js.map
            // CONCATENATED MODULE: ../node_modules/@material/snackbar/node_modules/@material/dom/index.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */


            //# sourceMappingURL=index.js.map
            // CONCATENATED MODULE: ../node_modules/@material/snackbar/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var snackbar_constants_cssClasses = {
                CLOSING: 'mdc-snackbar--closing',
                OPEN: 'mdc-snackbar--open',
                OPENING: 'mdc-snackbar--opening',
            };
            var snackbar_constants_strings = {
                ACTION_SELECTOR: '.mdc-snackbar__action',
                ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
                CLOSED_EVENT: 'MDCSnackbar:closed',
                CLOSING_EVENT: 'MDCSnackbar:closing',
                DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
                LABEL_SELECTOR: '.mdc-snackbar__label',
                OPENED_EVENT: 'MDCSnackbar:opened',
                OPENING_EVENT: 'MDCSnackbar:opening',
                REASON_ACTION: 'action',
                REASON_DISMISS: 'dismiss',
                SURFACE_SELECTOR: '.mdc-snackbar__surface',
            };
            var snackbar_constants_numbers = {
                DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
                MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
                MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
                // These variables need to be kept in sync with the values in _variables.scss.
                SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
                SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
                /**
                 * Number of milliseconds to wait between temporarily clearing the label text
                 * in the DOM and subsequently restoring it. This is necessary to force IE 11
                 * to pick up the `aria-live` content change and announce it to the user.
                 */
                ARIA_LIVE_DELAY_MS: 1000,
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/snackbar/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var OPENING = snackbar_constants_cssClasses.OPENING,
                OPEN = snackbar_constants_cssClasses.OPEN,
                CLOSING = snackbar_constants_cssClasses.CLOSING;
            var REASON_ACTION = snackbar_constants_strings.REASON_ACTION,
                REASON_DISMISS = snackbar_constants_strings.REASON_DISMISS;
            var foundation_MDCSnackbarFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCSnackbarFoundation, _super);

                function MDCSnackbarFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCSnackbarFoundation.defaultAdapter, adapter)) || this;
                    _this.isOpen_ = false;
                    _this.animationFrame_ = 0;
                    _this.animationTimer_ = 0;
                    _this.autoDismissTimer_ = 0;
                    _this.autoDismissTimeoutMs_ = snackbar_constants_numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
                    _this.closeOnEscape_ = true;
                    return _this;
                }
                Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
                    get: function () {
                        return snackbar_constants_cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbarFoundation, "strings", {
                    get: function () {
                        return snackbar_constants_strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbarFoundation, "numbers", {
                    get: function () {
                        return snackbar_constants_numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
                    get: function () {
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            announce: function () {
                                return undefined;
                            },
                            notifyClosed: function () {
                                return undefined;
                            },
                            notifyClosing: function () {
                                return undefined;
                            },
                            notifyOpened: function () {
                                return undefined;
                            },
                            notifyOpening: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSnackbarFoundation.prototype.destroy = function () {
                    this.clearAutoDismissTimer_();
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = 0;
                    clearTimeout(this.animationTimer_);
                    this.animationTimer_ = 0;
                    this.adapter_.removeClass(OPENING);
                    this.adapter_.removeClass(OPEN);
                    this.adapter_.removeClass(CLOSING);
                };
                MDCSnackbarFoundation.prototype.open = function () {
                    var _this = this;
                    this.clearAutoDismissTimer_();
                    this.isOpen_ = true;
                    this.adapter_.notifyOpening();
                    this.adapter_.removeClass(CLOSING);
                    this.adapter_.addClass(OPENING);
                    this.adapter_.announce();
                    // Wait a frame once display is no longer "none", to establish basis for animation
                    this.runNextAnimationFrame_(function () {
                        _this.adapter_.addClass(OPEN);
                        _this.animationTimer_ = setTimeout(function () {
                            _this.handleAnimationTimerEnd_();
                            _this.adapter_.notifyOpened();
                            _this.autoDismissTimer_ = setTimeout(function () {
                                _this.close(REASON_DISMISS);
                            }, _this.getTimeoutMs());
                        }, snackbar_constants_numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
                    });
                };
                /**
                 * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
                 *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
                 *     client-specific values may also be used if desired.
                 */
                MDCSnackbarFoundation.prototype.close = function (reason) {
                    var _this = this;
                    if (reason === void 0) {
                        reason = '';
                    }
                    if (!this.isOpen_) {
                        // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
                        return;
                    }
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = 0;
                    this.clearAutoDismissTimer_();
                    this.isOpen_ = false;
                    this.adapter_.notifyClosing(reason);
                    this.adapter_.addClass(snackbar_constants_cssClasses.CLOSING);
                    this.adapter_.removeClass(snackbar_constants_cssClasses.OPEN);
                    this.adapter_.removeClass(snackbar_constants_cssClasses.OPENING);
                    clearTimeout(this.animationTimer_);
                    this.animationTimer_ = setTimeout(function () {
                        _this.handleAnimationTimerEnd_();
                        _this.adapter_.notifyClosed(reason);
                    }, snackbar_constants_numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
                };
                MDCSnackbarFoundation.prototype.isOpen = function () {
                    return this.isOpen_;
                };
                MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
                    return this.autoDismissTimeoutMs_;
                };
                MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
                    // Use shorter variable names to make the code more readable
                    var minValue = snackbar_constants_numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
                    var maxValue = snackbar_constants_numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;
                    if (timeoutMs <= maxValue && timeoutMs >= minValue) {
                        this.autoDismissTimeoutMs_ = timeoutMs;
                    } else {
                        throw new Error("timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + ", but got '" + timeoutMs + "'");
                    }
                };
                MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
                    return this.closeOnEscape_;
                };
                MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
                    this.closeOnEscape_ = closeOnEscape;
                };
                MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
                    var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;
                    if (isEscapeKey && this.getCloseOnEscape()) {
                        this.close(REASON_DISMISS);
                    }
                };
                MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
                    this.close(REASON_ACTION);
                };
                MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
                    this.close(REASON_DISMISS);
                };
                MDCSnackbarFoundation.prototype.clearAutoDismissTimer_ = function () {
                    clearTimeout(this.autoDismissTimer_);
                    this.autoDismissTimer_ = 0;
                };
                MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_ = function () {
                    this.animationTimer_ = 0;
                    this.adapter_.removeClass(snackbar_constants_cssClasses.OPENING);
                    this.adapter_.removeClass(snackbar_constants_cssClasses.CLOSING);
                };
                /**
                 * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
                 */
                MDCSnackbarFoundation.prototype.runNextAnimationFrame_ = function (callback) {
                    var _this = this;
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = requestAnimationFrame(function () {
                        _this.animationFrame_ = 0;
                        clearTimeout(_this.animationTimer_);
                        _this.animationTimer_ = setTimeout(callback, 0);
                    });
                };
                return MDCSnackbarFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var snackbar_foundation = (foundation_MDCSnackbarFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/snackbar/util.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */

            var ARIA_LIVE_DELAY_MS = snackbar_constants_numbers.ARIA_LIVE_DELAY_MS;
            var ARIA_LIVE_LABEL_TEXT_ATTR = snackbar_constants_strings.ARIA_LIVE_LABEL_TEXT_ATTR;

            function announce(ariaEl, labelEl) {
                if (labelEl === void 0) {
                    labelEl = ariaEl;
                }
                var priority = ariaEl.getAttribute('aria-live');
                // Trim text to ignore `&nbsp;` (see below).
                // textContent is only null if the node is a document, DOCTYPE, or notation.
                var labelText = labelEl.textContent.trim();
                if (!labelText || !priority) {
                    return;
                }
                // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.
                ariaEl.setAttribute('aria-live', 'off');
                // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
                // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
                // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
                // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
                // so screen readers won't announce the second message unless we first clear `textContent`.
                //
                // We have to clear the label text two different ways to make it work in all browsers and screen readers:
                //
                //   1. `textContent = ''` is required for IE11 + JAWS
                //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
                //
                // All other browser/screen reader combinations support both methods.
                //
                // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
                // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
                //
                // This technique has been tested in:
                //
                //   * JAWS 2019:
                //       - Chrome 70
                //       - Firefox 60 (ESR)
                //       - IE 11
                //   * NVDA 2018:
                //       - Chrome 70
                //       - Firefox 60 (ESR)
                //       - IE 11
                //   * ChromeVox 53
                labelEl.textContent = '';
                labelEl.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>';
                // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
                // CSS generated content is normally announced by screen readers
                // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
                // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.
                labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR, labelText);
                setTimeout(function () {
                    // Allow screen readers to announce changes to the DOM again.
                    ariaEl.setAttribute('aria-live', priority);
                    // Remove the message from the ::before pseudo-element.
                    labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR);
                    // Restore the original label text, which will be announced by screen readers.
                    labelEl.textContent = labelText;
                }, ARIA_LIVE_DELAY_MS);
            }

            //# sourceMappingURL=util.js.map
            // CONCATENATED MODULE: ../node_modules/@material/snackbar/component.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */






            var SURFACE_SELECTOR = snackbar_constants_strings.SURFACE_SELECTOR,
                LABEL_SELECTOR = snackbar_constants_strings.LABEL_SELECTOR,
                ACTION_SELECTOR = snackbar_constants_strings.ACTION_SELECTOR,
                DISMISS_SELECTOR = snackbar_constants_strings.DISMISS_SELECTOR,
                OPENING_EVENT = snackbar_constants_strings.OPENING_EVENT,
                OPENED_EVENT = snackbar_constants_strings.OPENED_EVENT,
                CLOSING_EVENT = snackbar_constants_strings.CLOSING_EVENT,
                CLOSED_EVENT = snackbar_constants_strings.CLOSED_EVENT;
            var component_MDCSnackbar = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCSnackbar, _super);

                function MDCSnackbar() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCSnackbar.attachTo = function (root) {
                    return new MDCSnackbar(root);
                };
                MDCSnackbar.prototype.initialize = function (announcerFactory) {
                    if (announcerFactory === void 0) {
                        announcerFactory = function () {
                            return announce;
                        };
                    }
                    this.announce_ = announcerFactory();
                };
                MDCSnackbar.prototype.initialSyncWithDOM = function () {
                    var _this = this;
                    this.surfaceEl_ = this.root_.querySelector(SURFACE_SELECTOR);
                    this.labelEl_ = this.root_.querySelector(LABEL_SELECTOR);
                    this.actionEl_ = this.root_.querySelector(ACTION_SELECTOR);
                    this.handleKeyDown_ = function (evt) {
                        return _this.foundation_.handleKeyDown(evt);
                    };
                    this.handleSurfaceClick_ = function (evt) {
                        var target = evt.target;
                        if (_this.isActionButton_(target)) {
                            _this.foundation_.handleActionButtonClick(evt);
                        } else if (_this.isActionIcon_(target)) {
                            _this.foundation_.handleActionIconClick(evt);
                        }
                    };
                    this.registerKeyDownHandler_(this.handleKeyDown_);
                    this.registerSurfaceClickHandler_(this.handleSurfaceClick_);
                };
                MDCSnackbar.prototype.destroy = function () {
                    _super.prototype.destroy.call(this);
                    this.deregisterKeyDownHandler_(this.handleKeyDown_);
                    this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_);
                };
                MDCSnackbar.prototype.open = function () {
                    this.foundation_.open();
                };
                /**
                 * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
                 *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
                 *     client-specific values may also be used if desired.
                 */
                MDCSnackbar.prototype.close = function (reason) {
                    if (reason === void 0) {
                        reason = '';
                    }
                    this.foundation_.close(reason);
                };
                MDCSnackbar.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        announce: function () {
                            return _this.announce_(_this.labelEl_);
                        },
                        notifyClosed: function (reason) {
                            return _this.emit(CLOSED_EVENT, reason ? {
                                reason: reason
                            } : {});
                        },
                        notifyClosing: function (reason) {
                            return _this.emit(CLOSING_EVENT, reason ? {
                                reason: reason
                            } : {});
                        },
                        notifyOpened: function () {
                            return _this.emit(OPENED_EVENT, {});
                        },
                        notifyOpening: function () {
                            return _this.emit(OPENING_EVENT, {});
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                    };
                    return new foundation_MDCSnackbarFoundation(adapter);
                };
                Object.defineProperty(MDCSnackbar.prototype, "timeoutMs", {
                    get: function () {
                        return this.foundation_.getTimeoutMs();
                    },
                    set: function (timeoutMs) {
                        this.foundation_.setTimeoutMs(timeoutMs);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbar.prototype, "closeOnEscape", {
                    get: function () {
                        return this.foundation_.getCloseOnEscape();
                    },
                    set: function (closeOnEscape) {
                        this.foundation_.setCloseOnEscape(closeOnEscape);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbar.prototype, "isOpen", {
                    get: function () {
                        return this.foundation_.isOpen();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbar.prototype, "labelText", {
                    get: function () {
                        // This property only returns null if the node is a document, DOCTYPE, or notation.
                        // On Element nodes, it always returns a string.
                        return this.labelEl_.textContent;
                    },
                    set: function (labelText) {
                        this.labelEl_.textContent = labelText;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCSnackbar.prototype, "actionButtonText", {
                    get: function () {
                        return this.actionEl_.textContent;
                    },
                    set: function (actionButtonText) {
                        this.actionEl_.textContent = actionButtonText;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCSnackbar.prototype.registerKeyDownHandler_ = function (handler) {
                    this.listen('keydown', handler);
                };
                MDCSnackbar.prototype.deregisterKeyDownHandler_ = function (handler) {
                    this.unlisten('keydown', handler);
                };
                MDCSnackbar.prototype.registerSurfaceClickHandler_ = function (handler) {
                    this.surfaceEl_.addEventListener('click', handler);
                };
                MDCSnackbar.prototype.deregisterSurfaceClickHandler_ = function (handler) {
                    this.surfaceEl_.removeEventListener('click', handler);
                };
                MDCSnackbar.prototype.isActionButton_ = function (target) {
                    return Boolean(dom_ponyfill_namespaceObject.closest(target, ACTION_SELECTOR));
                };
                MDCSnackbar.prototype.isActionIcon_ = function (target) {
                    return Boolean(dom_ponyfill_namespaceObject.closest(target, DISMISS_SELECTOR));
                };
                return MDCSnackbar;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map
            // CONCATENATED MODULE: ./js/app.js
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "initializeSnackbar", function () {
                return initializeSnackbar;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "get", function () {
                return get;
            });











            const iconButtonRipple = [].map.call(document.querySelectorAll(".mdc-icon-button"), function (el) {
                return new ripple_component["a" /* MDCRipple */ ](el);
            });
            iconButtonRipple.forEach(function (iconButtonRipple) {
                iconButtonRipple.unbounded = true;
            });
            const dialogs = [].map.call(document.querySelectorAll(".mdc-dialog"), function (el) {
                return new component_MDCDialog(el);
            });
            const app_radio = [].map.call(document.querySelectorAll(".mdc-radio"), function (el) {
                return new component_MDCRadio(el);
            });
            const notchedOutlines = [].map.call(document.querySelectorAll(".mdc-notched-outline"), function (el) {
                return new notched_outline_component["a" /* MDCNotchedOutline */ ](el);
            });
            const selectFields = [].map.call(document.querySelectorAll(".mdc-select"), function (el) {
                return new component_MDCSelect(el);
            });
            const lists = [].map.call(document.querySelectorAll(".mdc-list"), function (el) {
                return new component_MDCList(el);
            });
            const textFields = [].map.call(document.querySelectorAll(".mdc-text-field"), function (el) {
                return new textfield_component["a" /* MDCTextField */ ](el);
            });
            const buttonRipples = [].map.call(document.querySelectorAll(".mdc-button"), function (el) {
                return new ripple_component["a" /* MDCRipple */ ](el);
            });
            const topAppBarElement = document.querySelector(".mdc-top-app-bar");

            if (topAppBarElement) {
                const topAppBar = new component_MDCTopAppBar(topAppBarElement);
            } // Forms Pages
            // const chips = [].map.call(document.querySelectorAll('.mdc-chip-set'), function (el) {
            //   new MDCChipSet(el);
            // });
            // const chipSetEl = document.getElementById('form-page-chip-add-seat-type');
            // console.log(chipSetEl);


            const formPageAddSeatValue = document.getElementById("form-page-add-seat-value");
            const formPageAddSeatBtn = document.getElementById("form-page-add-seat-btn"); // formPageAddSeatValue.addEventListener('keydown', function(event) {
            //   if (event.key === 'Enter' || event.keyCode === 13) {
            //     const chipEl = document.createElement('div');
            //     // ... perform operations to properly populate/decorate chip element ...
            //     chipSetEl.appendChild(chipEl);
            //     chipSet.addChip(chipEl);
            //   }
            // });

            const chipSetEl = document.querySelector(".mdc-chip-set");

            if (chipSetEl) {
                const chipSet = new component_MDCChipSet(chipSetEl);

                if (formPageAddSeatValue && formPageAddSeatBtn) {
                    formPageAddSeatBtn.addEventListener("click", function (event) {
                        event.preventDefault();
                        const chipEl = document.createElement("div");
                        chipEl.classList.add("mdc-chip", "add-seat-type-chip");
                        chipEl.innerHTML = `<div class="mdc-chip__text">${formPageAddSeatValue.value}</div>
    <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabindex="0" role="button">cancel</i>`;
                        chipSetEl.appendChild(chipEl);
                        chipSet.addChip(chipEl);
                        formPageAddSeatValue.value = "";
                    });
                }

                chipSet.listen("MDCChip:removal", function (event) {
                    chipSetEl.removeChild(event.detail.root);
                });
            } // Add Seat Type Chip Dialog


            const initialiseDialog = function (dialogEl) {
                if (dialogEl) {
                    return new component_MDCDialog(dialogEl);
                }
            };

            const addSeatTypeDialogEl = document.querySelector(".mdc-dialog");
            const addSeatTypeDialog = initialiseDialog(addSeatTypeDialogEl);
            const addSeatTypeBtn = document.getElementById("add-seat-type-btn");

            if (addSeatTypeBtn) {
                addSeatTypeBtn.addEventListener("click", function (e) {
                    e.preventDefault();
                    addSeatTypeDialog.open();
                });
            }

            function initializeSnackbar(el) {
                if (el) {
                    return new component_MDCSnackbar(el);
                }
            }

            function get() {
                console.log("hey");
            }
            const deleteTableRecordDialogs = [...document.querySelectorAll("#delete-table-row")].map(function (el) {
                return new component_MDCDialog(el);
            });
            const deleteTableRecordButtons = document.querySelectorAll("#delete-table-record"); // delete-table-record

            if (deleteTableRecordButtons.length) {
                for (let i = 0; i < deleteTableRecordDialogs.length; i++) {
                    deleteTableRecordButtons[i].addEventListener("click", function (e) {
                        e.preventDefault();
                        deleteTableRecordDialogs[i].open();
                    });
                }
            }

            /***/
        }),
        /* 41 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            // EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
            var tslib_es6 = __webpack_require__(0);

            // EXTERNAL MODULE: ../node_modules/@material/base/component.js
            var component = __webpack_require__(2);

            // EXTERNAL MODULE: ../node_modules/@material/floating-label/foundation.js + 1 modules
            var foundation = __webpack_require__(7);

            // CONCATENATED MODULE: ../node_modules/@material/notched-outline/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var strings = {
                NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
            };
            var numbers = {
                // This should stay in sync with $mdc-notched-outline-padding * 2.
                NOTCH_ELEMENT_PADDING: 8,
            };
            var cssClasses = {
                NO_LABEL: 'mdc-notched-outline--no-label',
                OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
                OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
            };

            //# sourceMappingURL=constants.js.map
            // EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
            var base_foundation = __webpack_require__(1);

            // CONCATENATED MODULE: ../node_modules/@material/notched-outline/foundation.js
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCNotchedOutlineFoundation, _super);

                function MDCNotchedOutlineFoundation(adapter) {
                    return _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
                }
                Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
                    get: function () {
                        return strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
                    get: function () {
                        return numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            setNotchWidthProperty: function () {
                                return undefined;
                            },
                            removeNotchWidthProperty: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
                 */
                MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
                    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                    if (notchWidth > 0) {
                        notchWidth += numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
                    }
                    this.adapter_.setNotchWidthProperty(notchWidth);
                    this.adapter_.addClass(OUTLINE_NOTCHED);
                };
                /**
                 * Removes notched outline selector to close the notch in the outline.
                 */
                MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
                    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
                    this.adapter_.removeClass(OUTLINE_NOTCHED);
                    this.adapter_.removeNotchWidthProperty();
                };
                return MDCNotchedOutlineFoundation;
            }(base_foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var notched_outline_foundation = (foundation_MDCNotchedOutlineFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/notched-outline/component.js
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return component_MDCNotchedOutline;
            });
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */





            var component_MDCNotchedOutline = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCNotchedOutline, _super);

                function MDCNotchedOutline() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCNotchedOutline.attachTo = function (root) {
                    return new MDCNotchedOutline(root);
                };
                MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
                    this.notchElement_ = this.root_.querySelector(strings.NOTCH_ELEMENT_SELECTOR);
                    var label = this.root_.querySelector('.' + foundation["a" /* MDCFloatingLabelFoundation */ ].cssClasses.ROOT);
                    if (label) {
                        label.style.transitionDuration = '0s';
                        this.root_.classList.add(cssClasses.OUTLINE_UPGRADED);
                        requestAnimationFrame(function () {
                            label.style.transitionDuration = '';
                        });
                    } else {
                        this.root_.classList.add(cssClasses.NO_LABEL);
                    }
                };
                /**
                 * Updates classes and styles to open the notch to the specified width.
                 * @param notchWidth The notch width in the outline.
                 */
                MDCNotchedOutline.prototype.notch = function (notchWidth) {
                    this.foundation_.notch(notchWidth);
                };
                /**
                 * Updates classes and styles to close the notch.
                 */
                MDCNotchedOutline.prototype.closeNotch = function () {
                    this.foundation_.closeNotch();
                };
                MDCNotchedOutline.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        setNotchWidthProperty: function (width) {
                            return _this.notchElement_.style.setProperty('width', width + 'px');
                        },
                        removeNotchWidthProperty: function () {
                            return _this.notchElement_.style.removeProperty('width');
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCNotchedOutlineFoundation(adapter);
                };
                return MDCNotchedOutline;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map

            /***/
        }),
        /* 42 */
        /***/
        (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            // EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
            var tslib_es6 = __webpack_require__(0);

            // EXTERNAL MODULE: ../node_modules/@material/base/component.js
            var component = __webpack_require__(2);

            // EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
            var foundation = __webpack_require__(1);

            // CONCATENATED MODULE: ../node_modules/@material/line-ripple/constants.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */
            var cssClasses = {
                LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
                LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
            };

            //# sourceMappingURL=constants.js.map
            // CONCATENATED MODULE: ../node_modules/@material/line-ripple/foundation.js
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var foundation_MDCLineRippleFoundation = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCLineRippleFoundation, _super);

                function MDCLineRippleFoundation(adapter) {
                    var _this = _super.call(this, tslib_es6["a" /* __assign */ ]({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.transitionEndHandler_ = function (evt) {
                        return _this.handleTransitionEnd(evt);
                    };
                    return _this;
                }
                Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
                    get: function () {
                        return cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
                    /**
                     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
                     */
                    get: function () {
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        return {
                            addClass: function () {
                                return undefined;
                            },
                            removeClass: function () {
                                return undefined;
                            },
                            hasClass: function () {
                                return false;
                            },
                            setStyle: function () {
                                return undefined;
                            },
                            registerEventHandler: function () {
                                return undefined;
                            },
                            deregisterEventHandler: function () {
                                return undefined;
                            },
                        };
                        // tslint:enable:object-literal-sort-keys
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCLineRippleFoundation.prototype.init = function () {
                    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
                };
                MDCLineRippleFoundation.prototype.destroy = function () {
                    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
                };
                MDCLineRippleFoundation.prototype.activate = function () {
                    this.adapter_.removeClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
                    this.adapter_.addClass(cssClasses.LINE_RIPPLE_ACTIVE);
                };
                MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
                    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
                };
                MDCLineRippleFoundation.prototype.deactivate = function () {
                    this.adapter_.addClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
                };
                MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
                    // Wait for the line ripple to be either transparent or opaque
                    // before emitting the animation end event
                    var isDeactivating = this.adapter_.hasClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
                    if (evt.propertyName === 'opacity') {
                        if (isDeactivating) {
                            this.adapter_.removeClass(cssClasses.LINE_RIPPLE_ACTIVE);
                            this.adapter_.removeClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
                        }
                    }
                };
                return MDCLineRippleFoundation;
            }(foundation["a" /* MDCFoundation */ ]));

            // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
            /* harmony default export */
            var line_ripple_foundation = (foundation_MDCLineRippleFoundation);
            //# sourceMappingURL=foundation.js.map
            // CONCATENATED MODULE: ../node_modules/@material/line-ripple/component.js
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return component_MDCLineRipple;
            });
            /**
             * @license
             * Copyright 2018 Google Inc.
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in
             * all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
             * THE SOFTWARE.
             */



            var component_MDCLineRipple = /** @class */ (function (_super) {
                tslib_es6["b" /* __extends */ ](MDCLineRipple, _super);

                function MDCLineRipple() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCLineRipple.attachTo = function (root) {
                    return new MDCLineRipple(root);
                };
                /**
                 * Activates the line ripple
                 */
                MDCLineRipple.prototype.activate = function () {
                    this.foundation_.activate();
                };
                /**
                 * Deactivates the line ripple
                 */
                MDCLineRipple.prototype.deactivate = function () {
                    this.foundation_.deactivate();
                };
                /**
                 * Sets the transform origin given a user's click location.
                 * The `rippleCenter` is the x-coordinate of the middle of the ripple.
                 */
                MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
                    this.foundation_.setRippleCenter(xCoordinate);
                };
                MDCLineRipple.prototype.getDefaultFoundation = function () {
                    var _this = this;
                    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                    var adapter = {
                        addClass: function (className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function (className) {
                            return _this.root_.classList.remove(className);
                        },
                        hasClass: function (className) {
                            return _this.root_.classList.contains(className);
                        },
                        setStyle: function (propertyName, value) {
                            return _this.root_.style.setProperty(propertyName, value);
                        },
                        registerEventHandler: function (evtType, handler) {
                            return _this.listen(evtType, handler);
                        },
                        deregisterEventHandler: function (evtType, handler) {
                            return _this.unlisten(evtType, handler);
                        },
                    };
                    // tslint:enable:object-literal-sort-keys
                    return new foundation_MDCLineRippleFoundation(adapter);
                };
                return MDCLineRipple;
            }(component["a" /* MDCComponent */ ]));

            //# sourceMappingURL=component.js.map

            /***/
        })
        /******/
    ]);
});