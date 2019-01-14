/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './src/index.js'),
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './node_modules/classnames/index.js':
      /*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        /* global define */

        (function() {
          'use strict';

          var hasOwn = {}.hasOwnProperty;

          function classNames() {
            var classes = [];

            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];
              if (!arg) continue;

              var argType = typeof arg;

              if (argType === 'string' || argType === 'number') {
                classes.push(arg);
              } else if (Array.isArray(arg) && arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              } else if (argType === 'object') {
                for (var key in arg) {
                  if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                  }
                }
              }
            }

            return classes.join(' ');
          }

          if (true && module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
          } else if (true) {
            // register as 'classnames', consistent with npm package name
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
              return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })();

        /***/
      },

    /***/ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js?!./src/components/Card/Divider.scss':
      /*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-3-3!./src/components/Card/Divider.scss ***!
  \***********************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js',
        )(undefined);
        // imports

        // module
        exports.push([
          module.i,
          ".Divider__divider___3mHeB {\n  display: inline-block;\n  width: 2px;\n  margin-top: 0;\n  margin-bottom: 0; }\n  .Divider__divider___3mHeB:after {\n    content: '';\n    width: 2px;\n    background: currentColor;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    opacity: 0.6; }\n",
          '',
        ]);

        // exports
        exports.locals = {
          divider: 'Divider__divider___3mHeB',
        };

        /***/
      },

    /***/ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js?!./src/controls/SelectField/SelectField.scss':
      /*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-3-3!./src/controls/SelectField/SelectField.scss ***!
  \********************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js',
        )(undefined);
        // imports

        // module
        exports.push([
          module.i,
          ':root {\n  /** {\n    box-sizing: border-box;\n  }*/\n  /*body {\n    font-family: $font-family-base;\n    font-size: $font-size-base;\n    font-weight: $font-weight-base;\n    line-height: $line-height;\n  }*/ }\n\n.SelectField__selectField___w5GxQ .olt-Label {\n  color: initial;\n  line-height: 1;\n  height: 0.8rem; }\n\n.SelectField__footer___w5GxQ {\n  text-align: left;\n  font-size: 0.8rem;\n  height: 1.35rem;\n  margin-top: 0.25rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.SelectField__message___w5GxQ {\n  text-align: left;\n  font-size: 0.8rem; }\n',
          '',
        ]);

        // exports
        exports.locals = {
          selectField: 'SelectField__selectField___w5GxQ',
          footer: 'SelectField__footer___w5GxQ',
          message: 'SelectField__message___w5GxQ',
        };

        /***/
      },

    /***/ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js?!./src/controls/TextField/TextField.scss':
      /*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-3-3!./src/controls/TextField/TextField.scss ***!
  \****************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/lib/css-base.js */ './node_modules/css-loader/lib/css-base.js',
        )(undefined);
        // imports

        // module
        exports.push([
          module.i,
          '.TextField__autogrow___3mlp9 {\n  overflow: hidden; }\n',
          '',
        ]);

        // exports
        exports.locals = {
          autogrow: 'TextField__autogrow___3mlp9',
        };

        /***/
      },

    /***/ './node_modules/css-loader/lib/css-base.js':
      /*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function(useSourceMap) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function(item) {
              var content = cssWithMappingToString(item, useSourceMap);
              if (item[2]) {
                return '@media ' + item[2] + '{' + content + '}';
              } else {
                return content;
              }
            }).join('');
          };

          // import a list of modules into the list
          list.i = function(modules, mediaQuery) {
            if (typeof modules === 'string') modules = [[null, modules, '']];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
              var id = this[i][0];
              if (typeof id === 'number') alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
              var item = modules[i];
              // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              //  when a module is imported multiple times with different media queries.
              //  I hope this will never occur (Hey this way we have smaller bundles)
              if (
                typeof item[0] !== 'number' ||
                !alreadyImportedModules[item[0]]
              ) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                }
                list.push(item);
              }
            }
          };
          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || '';
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function(source) {
              return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
            });

            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join('\n');
          }

          return [content].join('\n');
        }

        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(sourceMap))),
          );
          var data =
            'sourceMappingURL=data:application/json;charset=utf-8;base64,' +
            base64;

          return '/*# ' + data + ' */';
        }

        /***/
      },

    /***/ './node_modules/history/es/DOMUtils.js':
      /*!*********************************************!*\
  !*** ./node_modules/history/es/DOMUtils.js ***!
  \*********************************************/
      /*! exports provided: canUseDOM, addEventListener, removeEventListener, getConfirmation, supportsHistory, supportsPopStateOnHashChange, supportsGoWithoutReloadUsingHash, isExtraneousPopstateEvent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'canUseDOM',
          function() {
            return canUseDOM;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'addEventListener',
          function() {
            return addEventListener;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'removeEventListener',
          function() {
            return removeEventListener;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'getConfirmation',
          function() {
            return getConfirmation;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'supportsHistory',
          function() {
            return supportsHistory;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'supportsPopStateOnHashChange',
          function() {
            return supportsPopStateOnHashChange;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'supportsGoWithoutReloadUsingHash',
          function() {
            return supportsGoWithoutReloadUsingHash;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'isExtraneousPopstateEvent',
          function() {
            return isExtraneousPopstateEvent;
          },
        );
        var canUseDOM = !!(
          typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement
        );

        var addEventListener = function addEventListener(
          node,
          event,
          listener,
        ) {
          return node.addEventListener
            ? node.addEventListener(event, listener, false)
            : node.attachEvent('on' + event, listener);
        };

        var removeEventListener = function removeEventListener(
          node,
          event,
          listener,
        ) {
          return node.removeEventListener
            ? node.removeEventListener(event, listener, false)
            : node.detachEvent('on' + event, listener);
        };

        var getConfirmation = function getConfirmation(message, callback) {
          return callback(window.confirm(message));
        }; // eslint-disable-line no-alert

        /**
         * Returns true if the HTML5 history API is supported. Taken from Modernizr.
         *
         * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
         * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
         * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
         */
        var supportsHistory = function supportsHistory() {
          var ua = window.navigator.userAgent;

          if (
            (ua.indexOf('Android 2.') !== -1 ||
              ua.indexOf('Android 4.0') !== -1) &&
            ua.indexOf('Mobile Safari') !== -1 &&
            ua.indexOf('Chrome') === -1 &&
            ua.indexOf('Windows Phone') === -1
          )
            return false;

          return window.history && 'pushState' in window.history;
        };

        /**
         * Returns true if browser fires popstate on hash change.
         * IE10 and IE11 do not.
         */
        var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
          return window.navigator.userAgent.indexOf('Trident') === -1;
        };

        /**
         * Returns false if using go(n) with hash history causes a full page reload.
         */
        var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
          return window.navigator.userAgent.indexOf('Firefox') === -1;
        };

        /**
         * Returns true if a given popstate event is an extraneous WebKit event.
         * Accounts for the fact that Chrome on iOS fires real popstate events
         * containing undefined state when pressing the back button.
         */
        var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(
          event,
        ) {
          return (
            event.state === undefined &&
            navigator.userAgent.indexOf('CriOS') === -1
          );
        };

        /***/
      },

    /***/ './node_modules/history/es/LocationUtils.js':
      /*!**************************************************!*\
  !*** ./node_modules/history/es/LocationUtils.js ***!
  \**************************************************/
      /*! exports provided: createLocation, locationsAreEqual */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'createLocation',
          function() {
            return createLocation;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'locationsAreEqual',
          function() {
            return locationsAreEqual;
          },
        );
        /* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! resolve-pathname */ './node_modules/resolve-pathname/index.js',
        );
        /* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! value-equal */ './node_modules/value-equal/index.js',
        );
        /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./PathUtils */ './node_modules/history/es/PathUtils.js',
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var createLocation = function createLocation(
          path,
          state,
          key,
          currentLocation,
        ) {
          var location = void 0;
          if (typeof path === 'string') {
            // Two-arg form: push(path, state)
            location = Object(
              _PathUtils__WEBPACK_IMPORTED_MODULE_2__['parsePath'],
            )(path);
            location.state = state;
          } else {
            // One-arg form: push(location)
            location = _extends({}, path);

            if (location.pathname === undefined) location.pathname = '';

            if (location.search) {
              if (location.search.charAt(0) !== '?')
                location.search = '?' + location.search;
            } else {
              location.search = '';
            }

            if (location.hash) {
              if (location.hash.charAt(0) !== '#')
                location.hash = '#' + location.hash;
            } else {
              location.hash = '';
            }

            if (state !== undefined && location.state === undefined)
              location.state = state;
          }

          try {
            location.pathname = decodeURI(location.pathname);
          } catch (e) {
            if (e instanceof URIError) {
              throw new URIError(
                'Pathname "' +
                  location.pathname +
                  '" could not be decoded. ' +
                  'This is likely caused by an invalid percent-encoding.',
              );
            } else {
              throw e;
            }
          }

          if (key) location.key = key;

          if (currentLocation) {
            // Resolve incomplete/relative pathname relative to current location.
            if (!location.pathname) {
              location.pathname = currentLocation.pathname;
            } else if (location.pathname.charAt(0) !== '/') {
              location.pathname = Object(
                resolve_pathname__WEBPACK_IMPORTED_MODULE_0__['default'],
              )(location.pathname, currentLocation.pathname);
            }
          } else {
            // When there is no prior location and pathname is empty, set it to /
            if (!location.pathname) {
              location.pathname = '/';
            }
          }

          return location;
        };

        var locationsAreEqual = function locationsAreEqual(a, b) {
          return (
            a.pathname === b.pathname &&
            a.search === b.search &&
            a.hash === b.hash &&
            a.key === b.key &&
            Object(value_equal__WEBPACK_IMPORTED_MODULE_1__['default'])(
              a.state,
              b.state,
            )
          );
        };

        /***/
      },

    /***/ './node_modules/history/es/PathUtils.js':
      /*!**********************************************!*\
  !*** ./node_modules/history/es/PathUtils.js ***!
  \**********************************************/
      /*! exports provided: addLeadingSlash, stripLeadingSlash, hasBasename, stripBasename, stripTrailingSlash, parsePath, createPath */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'addLeadingSlash',
          function() {
            return addLeadingSlash;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'stripLeadingSlash',
          function() {
            return stripLeadingSlash;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'hasBasename',
          function() {
            return hasBasename;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'stripBasename',
          function() {
            return stripBasename;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'stripTrailingSlash',
          function() {
            return stripTrailingSlash;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'parsePath',
          function() {
            return parsePath;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'createPath',
          function() {
            return createPath;
          },
        );
        var addLeadingSlash = function addLeadingSlash(path) {
          return path.charAt(0) === '/' ? path : '/' + path;
        };

        var stripLeadingSlash = function stripLeadingSlash(path) {
          return path.charAt(0) === '/' ? path.substr(1) : path;
        };

        var hasBasename = function hasBasename(path, prefix) {
          return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
        };

        var stripBasename = function stripBasename(path, prefix) {
          return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
        };

        var stripTrailingSlash = function stripTrailingSlash(path) {
          return path.charAt(path.length - 1) === '/'
            ? path.slice(0, -1)
            : path;
        };

        var parsePath = function parsePath(path) {
          var pathname = path || '/';
          var search = '';
          var hash = '';

          var hashIndex = pathname.indexOf('#');
          if (hashIndex !== -1) {
            hash = pathname.substr(hashIndex);
            pathname = pathname.substr(0, hashIndex);
          }

          var searchIndex = pathname.indexOf('?');
          if (searchIndex !== -1) {
            search = pathname.substr(searchIndex);
            pathname = pathname.substr(0, searchIndex);
          }

          return {
            pathname: pathname,
            search: search === '?' ? '' : search,
            hash: hash === '#' ? '' : hash,
          };
        };

        var createPath = function createPath(location) {
          var pathname = location.pathname,
            search = location.search,
            hash = location.hash;

          var path = pathname || '/';

          if (search && search !== '?')
            path += search.charAt(0) === '?' ? search : '?' + search;

          if (hash && hash !== '#')
            path += hash.charAt(0) === '#' ? hash : '#' + hash;

          return path;
        };

        /***/
      },

    /***/ './node_modules/history/es/createBrowserHistory.js':
      /*!*********************************************************!*\
  !*** ./node_modules/history/es/createBrowserHistory.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./LocationUtils */ './node_modules/history/es/LocationUtils.js',
        );
        /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./PathUtils */ './node_modules/history/es/PathUtils.js',
        );
        /* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./createTransitionManager */ './node_modules/history/es/createTransitionManager.js',
        );
        /* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./DOMUtils */ './node_modules/history/es/DOMUtils.js',
        );
        var _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var PopStateEvent = 'popstate';
        var HashChangeEvent = 'hashchange';

        var getHistoryState = function getHistoryState() {
          try {
            return window.history.state || {};
          } catch (e) {
            // IE 11 sometimes throws when accessing window.history.state
            // See https://github.com/ReactTraining/history/pull/289
            return {};
          }
        };

        /**
         * Creates a history object that uses the HTML5 history API including
         * pushState, replaceState, and the popstate event.
         */
        var createBrowserHistory = function createBrowserHistory() {
          var props =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};

          invariant__WEBPACK_IMPORTED_MODULE_1___default()(
            _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['canUseDOM'],
            'Browser history needs a DOM',
          );

          var globalHistory = window.history;
          var canUseHistory = Object(
            _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['supportsHistory'],
          )();
          var needsHashChangeListener = !Object(
            _DOMUtils__WEBPACK_IMPORTED_MODULE_5__[
              'supportsPopStateOnHashChange'
            ],
          )();

          var _props$forceRefresh = props.forceRefresh,
            forceRefresh =
              _props$forceRefresh === undefined ? false : _props$forceRefresh,
            _props$getUserConfirm = props.getUserConfirmation,
            getUserConfirmation =
              _props$getUserConfirm === undefined
                ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['getConfirmation']
                : _props$getUserConfirm,
            _props$keyLength = props.keyLength,
            keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

          var basename = props.basename
            ? Object(
                _PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripTrailingSlash'],
              )(
                Object(
                  _PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'],
                )(props.basename),
              )
            : '';

          var getDOMLocation = function getDOMLocation(historyState) {
            var _ref = historyState || {},
              key = _ref.key,
              state = _ref.state;

            var _window$location = window.location,
              pathname = _window$location.pathname,
              search = _window$location.search,
              hash = _window$location.hash;

            var path = pathname + search + hash;

            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !basename ||
                Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['hasBasename'])(
                  path,
                  basename,
                ),
              'You are attempting to use a basename on a page whose URL path does not begin ' +
                'with the basename. Expected path "' +
                path +
                '" to begin with "' +
                basename +
                '".',
            );

            if (basename)
              path = Object(
                _PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripBasename'],
              )(path, basename);

            return Object(
              _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
            )(path, state, key);
          };

          var createKey = function createKey() {
            return Math.random()
              .toString(36)
              .substr(2, keyLength);
          };

          var transitionManager = Object(
            _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__['default'],
          )();

          var setState = function setState(nextState) {
            _extends(history, nextState);

            history.length = globalHistory.length;

            transitionManager.notifyListeners(history.location, history.action);
          };

          var handlePopState = function handlePopState(event) {
            // Ignore extraneous popstate events in WebKit.
            if (
              Object(
                _DOMUtils__WEBPACK_IMPORTED_MODULE_5__[
                  'isExtraneousPopstateEvent'
                ],
              )(event)
            )
              return;

            handlePop(getDOMLocation(event.state));
          };

          var handleHashChange = function handleHashChange() {
            handlePop(getDOMLocation(getHistoryState()));
          };

          var forceNextPop = false;

          var handlePop = function handlePop(location) {
            if (forceNextPop) {
              forceNextPop = false;
              setState();
            } else {
              var action = 'POP';

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (ok) {
                    setState({ action: action, location: location });
                  } else {
                    revertPop(location);
                  }
                },
              );
            }
          };

          var revertPop = function revertPop(fromLocation) {
            var toLocation = history.location;

            // TODO: We could probably make this more reliable by
            // keeping a list of keys we've seen in sessionStorage.
            // Instead, we just default to 0 for keys we don't know.

            var toIndex = allKeys.indexOf(toLocation.key);

            if (toIndex === -1) toIndex = 0;

            var fromIndex = allKeys.indexOf(fromLocation.key);

            if (fromIndex === -1) fromIndex = 0;

            var delta = toIndex - fromIndex;

            if (delta) {
              forceNextPop = true;
              go(delta);
            }
          };

          var initialLocation = getDOMLocation(getHistoryState());
          var allKeys = [initialLocation.key];

          // Public interface

          var createHref = function createHref(location) {
            return (
              basename +
              Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                location,
              )
            );
          };

          var push = function push(path, state) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(
                (typeof path === 'undefined' ? 'undefined' : _typeof(path)) ===
                  'object' &&
                path.state !== undefined &&
                state !== undefined
              ),
              'You should avoid providing a 2nd state argument to push when the 1st ' +
                'argument is a location-like object that already has state; it is ignored',
            );

            var action = 'PUSH';
            var location = Object(
              _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
            )(path, state, createKey(), history.location);

            transitionManager.confirmTransitionTo(
              location,
              action,
              getUserConfirmation,
              function(ok) {
                if (!ok) return;

                var href = createHref(location);
                var key = location.key,
                  state = location.state;

                if (canUseHistory) {
                  globalHistory.pushState(
                    { key: key, state: state },
                    null,
                    href,
                  );

                  if (forceRefresh) {
                    window.location.href = href;
                  } else {
                    var prevIndex = allKeys.indexOf(history.location.key);
                    var nextKeys = allKeys.slice(
                      0,
                      prevIndex === -1 ? 0 : prevIndex + 1,
                    );

                    nextKeys.push(location.key);
                    allKeys = nextKeys;

                    setState({ action: action, location: location });
                  }
                } else {
                  warning__WEBPACK_IMPORTED_MODULE_0___default()(
                    state === undefined,
                    'Browser history cannot push state in browsers that do not support HTML5 history',
                  );

                  window.location.href = href;
                }
              },
            );
          };

          var replace = function replace(path, state) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(
                (typeof path === 'undefined' ? 'undefined' : _typeof(path)) ===
                  'object' &&
                path.state !== undefined &&
                state !== undefined
              ),
              'You should avoid providing a 2nd state argument to replace when the 1st ' +
                'argument is a location-like object that already has state; it is ignored',
            );

            var action = 'REPLACE';
            var location = Object(
              _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
            )(path, state, createKey(), history.location);

            transitionManager.confirmTransitionTo(
              location,
              action,
              getUserConfirmation,
              function(ok) {
                if (!ok) return;

                var href = createHref(location);
                var key = location.key,
                  state = location.state;

                if (canUseHistory) {
                  globalHistory.replaceState(
                    { key: key, state: state },
                    null,
                    href,
                  );

                  if (forceRefresh) {
                    window.location.replace(href);
                  } else {
                    var prevIndex = allKeys.indexOf(history.location.key);

                    if (prevIndex !== -1) allKeys[prevIndex] = location.key;

                    setState({ action: action, location: location });
                  }
                } else {
                  warning__WEBPACK_IMPORTED_MODULE_0___default()(
                    state === undefined,
                    'Browser history cannot replace state in browsers that do not support HTML5 history',
                  );

                  window.location.replace(href);
                }
              },
            );
          };

          var go = function go(n) {
            globalHistory.go(n);
          };

          var goBack = function goBack() {
            return go(-1);
          };

          var goForward = function goForward() {
            return go(1);
          };

          var listenerCount = 0;

          var checkDOMListeners = function checkDOMListeners(delta) {
            listenerCount += delta;

            if (listenerCount === 1) {
              Object(
                _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['addEventListener'],
              )(window, PopStateEvent, handlePopState);

              if (needsHashChangeListener)
                Object(
                  _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['addEventListener'],
                )(window, HashChangeEvent, handleHashChange);
            } else if (listenerCount === 0) {
              Object(
                _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['removeEventListener'],
              )(window, PopStateEvent, handlePopState);

              if (needsHashChangeListener)
                Object(
                  _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['removeEventListener'],
                )(window, HashChangeEvent, handleHashChange);
            }
          };

          var isBlocked = false;

          var block = function block() {
            var prompt =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : false;

            var unblock = transitionManager.setPrompt(prompt);

            if (!isBlocked) {
              checkDOMListeners(1);
              isBlocked = true;
            }

            return function() {
              if (isBlocked) {
                isBlocked = false;
                checkDOMListeners(-1);
              }

              return unblock();
            };
          };

          var listen = function listen(listener) {
            var unlisten = transitionManager.appendListener(listener);
            checkDOMListeners(1);

            return function() {
              checkDOMListeners(-1);
              unlisten();
            };
          };

          var history = {
            length: globalHistory.length,
            action: 'POP',
            location: initialLocation,
            createHref: createHref,
            push: push,
            replace: replace,
            go: go,
            goBack: goBack,
            goForward: goForward,
            block: block,
            listen: listen,
          };

          return history;
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = createBrowserHistory;

        /***/
      },

    /***/ './node_modules/history/es/createHashHistory.js':
      /*!******************************************************!*\
  !*** ./node_modules/history/es/createHashHistory.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./LocationUtils */ './node_modules/history/es/LocationUtils.js',
        );
        /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./PathUtils */ './node_modules/history/es/PathUtils.js',
        );
        /* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./createTransitionManager */ './node_modules/history/es/createTransitionManager.js',
        );
        /* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./DOMUtils */ './node_modules/history/es/DOMUtils.js',
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var HashChangeEvent = 'hashchange';

        var HashPathCoders = {
          hashbang: {
            encodePath: function encodePath(path) {
              return path.charAt(0) === '!'
                ? path
                : '!/' +
                    Object(
                      _PathUtils__WEBPACK_IMPORTED_MODULE_3__[
                        'stripLeadingSlash'
                      ],
                    )(path);
            },
            decodePath: function decodePath(path) {
              return path.charAt(0) === '!' ? path.substr(1) : path;
            },
          },
          noslash: {
            encodePath:
              _PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripLeadingSlash'],
            decodePath:
              _PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'],
          },
          slash: {
            encodePath:
              _PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'],
            decodePath:
              _PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'],
          },
        };

        var getHashPath = function getHashPath() {
          // We can't use window.location.hash here because it's not
          // consistent across browsers - Firefox will pre-decode it!
          var href = window.location.href;
          var hashIndex = href.indexOf('#');
          return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
        };

        var pushHashPath = function pushHashPath(path) {
          return (window.location.hash = path);
        };

        var replaceHashPath = function replaceHashPath(path) {
          var hashIndex = window.location.href.indexOf('#');

          window.location.replace(
            window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) +
              '#' +
              path,
          );
        };

        var createHashHistory = function createHashHistory() {
          var props =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};

          invariant__WEBPACK_IMPORTED_MODULE_1___default()(
            _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['canUseDOM'],
            'Hash history needs a DOM',
          );

          var globalHistory = window.history;
          var canGoWithoutReload = Object(
            _DOMUtils__WEBPACK_IMPORTED_MODULE_5__[
              'supportsGoWithoutReloadUsingHash'
            ],
          )();

          var _props$getUserConfirm = props.getUserConfirmation,
            getUserConfirmation =
              _props$getUserConfirm === undefined
                ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['getConfirmation']
                : _props$getUserConfirm,
            _props$hashType = props.hashType,
            hashType =
              _props$hashType === undefined ? 'slash' : _props$hashType;

          var basename = props.basename
            ? Object(
                _PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripTrailingSlash'],
              )(
                Object(
                  _PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'],
                )(props.basename),
              )
            : '';

          var _HashPathCoders$hashT = HashPathCoders[hashType],
            encodePath = _HashPathCoders$hashT.encodePath,
            decodePath = _HashPathCoders$hashT.decodePath;

          var getDOMLocation = function getDOMLocation() {
            var path = decodePath(getHashPath());

            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !basename ||
                Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['hasBasename'])(
                  path,
                  basename,
                ),
              'You are attempting to use a basename on a page whose URL path does not begin ' +
                'with the basename. Expected path "' +
                path +
                '" to begin with "' +
                basename +
                '".',
            );

            if (basename)
              path = Object(
                _PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripBasename'],
              )(path, basename);

            return Object(
              _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
            )(path);
          };

          var transitionManager = Object(
            _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__['default'],
          )();

          var setState = function setState(nextState) {
            _extends(history, nextState);

            history.length = globalHistory.length;

            transitionManager.notifyListeners(history.location, history.action);
          };

          var forceNextPop = false;
          var ignorePath = null;

          var handleHashChange = function handleHashChange() {
            var path = getHashPath();
            var encodedPath = encodePath(path);

            if (path !== encodedPath) {
              // Ensure we always have a properly-encoded hash.
              replaceHashPath(encodedPath);
            } else {
              var location = getDOMLocation();
              var prevLocation = history.location;

              if (
                !forceNextPop &&
                Object(
                  _LocationUtils__WEBPACK_IMPORTED_MODULE_2__[
                    'locationsAreEqual'
                  ],
                )(prevLocation, location)
              )
                return; // A hashchange doesn't always == location change.

              if (
                ignorePath ===
                Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                  location,
                )
              )
                return; // Ignore this change; we already setState in push/replace.

              ignorePath = null;

              handlePop(location);
            }
          };

          var handlePop = function handlePop(location) {
            if (forceNextPop) {
              forceNextPop = false;
              setState();
            } else {
              var action = 'POP';

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (ok) {
                    setState({ action: action, location: location });
                  } else {
                    revertPop(location);
                  }
                },
              );
            }
          };

          var revertPop = function revertPop(fromLocation) {
            var toLocation = history.location;

            // TODO: We could probably make this more reliable by
            // keeping a list of paths we've seen in sessionStorage.
            // Instead, we just default to 0 for paths we don't know.

            var toIndex = allPaths.lastIndexOf(
              Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                toLocation,
              ),
            );

            if (toIndex === -1) toIndex = 0;

            var fromIndex = allPaths.lastIndexOf(
              Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                fromLocation,
              ),
            );

            if (fromIndex === -1) fromIndex = 0;

            var delta = toIndex - fromIndex;

            if (delta) {
              forceNextPop = true;
              go(delta);
            }
          };

          // Ensure the hash is encoded properly before doing anything else.
          var path = getHashPath();
          var encodedPath = encodePath(path);

          if (path !== encodedPath) replaceHashPath(encodedPath);

          var initialLocation = getDOMLocation();
          var allPaths = [
            Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
              initialLocation,
            ),
          ];

          // Public interface

          var createHref = function createHref(location) {
            return (
              '#' +
              encodePath(
                basename +
                  Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                    location,
                  ),
              )
            );
          };

          var push = function push(path, state) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              state === undefined,
              'Hash history cannot push state; it is ignored',
            );

            var action = 'PUSH';
            var location = Object(
              _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
            )(path, undefined, undefined, history.location);

            transitionManager.confirmTransitionTo(
              location,
              action,
              getUserConfirmation,
              function(ok) {
                if (!ok) return;

                var path = Object(
                  _PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'],
                )(location);
                var encodedPath = encodePath(basename + path);
                var hashChanged = getHashPath() !== encodedPath;

                if (hashChanged) {
                  // We cannot tell if a hashchange was caused by a PUSH, so we'd
                  // rather setState here and ignore the hashchange. The caveat here
                  // is that other hash histories in the page will consider it a POP.
                  ignorePath = path;
                  pushHashPath(encodedPath);

                  var prevIndex = allPaths.lastIndexOf(
                    Object(
                      _PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'],
                    )(history.location),
                  );
                  var nextPaths = allPaths.slice(
                    0,
                    prevIndex === -1 ? 0 : prevIndex + 1,
                  );

                  nextPaths.push(path);
                  allPaths = nextPaths;

                  setState({ action: action, location: location });
                } else {
                  warning__WEBPACK_IMPORTED_MODULE_0___default()(
                    false,
                    'Hash history cannot PUSH the same path; a new entry will not be added to the history stack',
                  );

                  setState();
                }
              },
            );
          };

          var replace = function replace(path, state) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              state === undefined,
              'Hash history cannot replace state; it is ignored',
            );

            var action = 'REPLACE';
            var location = Object(
              _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
            )(path, undefined, undefined, history.location);

            transitionManager.confirmTransitionTo(
              location,
              action,
              getUserConfirmation,
              function(ok) {
                if (!ok) return;

                var path = Object(
                  _PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'],
                )(location);
                var encodedPath = encodePath(basename + path);
                var hashChanged = getHashPath() !== encodedPath;

                if (hashChanged) {
                  // We cannot tell if a hashchange was caused by a REPLACE, so we'd
                  // rather setState here and ignore the hashchange. The caveat here
                  // is that other hash histories in the page will consider it a POP.
                  ignorePath = path;
                  replaceHashPath(encodedPath);
                }

                var prevIndex = allPaths.indexOf(
                  Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                    history.location,
                  ),
                );

                if (prevIndex !== -1) allPaths[prevIndex] = path;

                setState({ action: action, location: location });
              },
            );
          };

          var go = function go(n) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              canGoWithoutReload,
              'Hash history go(n) causes a full page reload in this browser',
            );

            globalHistory.go(n);
          };

          var goBack = function goBack() {
            return go(-1);
          };

          var goForward = function goForward() {
            return go(1);
          };

          var listenerCount = 0;

          var checkDOMListeners = function checkDOMListeners(delta) {
            listenerCount += delta;

            if (listenerCount === 1) {
              Object(
                _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['addEventListener'],
              )(window, HashChangeEvent, handleHashChange);
            } else if (listenerCount === 0) {
              Object(
                _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['removeEventListener'],
              )(window, HashChangeEvent, handleHashChange);
            }
          };

          var isBlocked = false;

          var block = function block() {
            var prompt =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : false;

            var unblock = transitionManager.setPrompt(prompt);

            if (!isBlocked) {
              checkDOMListeners(1);
              isBlocked = true;
            }

            return function() {
              if (isBlocked) {
                isBlocked = false;
                checkDOMListeners(-1);
              }

              return unblock();
            };
          };

          var listen = function listen(listener) {
            var unlisten = transitionManager.appendListener(listener);
            checkDOMListeners(1);

            return function() {
              checkDOMListeners(-1);
              unlisten();
            };
          };

          var history = {
            length: globalHistory.length,
            action: 'POP',
            location: initialLocation,
            createHref: createHref,
            push: push,
            replace: replace,
            go: go,
            goBack: goBack,
            goForward: goForward,
            block: block,
            listen: listen,
          };

          return history;
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = createHashHistory;

        /***/
      },

    /***/ './node_modules/history/es/createMemoryHistory.js':
      /*!********************************************************!*\
  !*** ./node_modules/history/es/createMemoryHistory.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./PathUtils */ './node_modules/history/es/PathUtils.js',
        );
        /* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./LocationUtils */ './node_modules/history/es/LocationUtils.js',
        );
        /* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./createTransitionManager */ './node_modules/history/es/createTransitionManager.js',
        );
        var _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var clamp = function clamp(n, lowerBound, upperBound) {
          return Math.min(Math.max(n, lowerBound), upperBound);
        };

        /**
         * Creates a history object that stores locations in memory.
         */
        var createMemoryHistory = function createMemoryHistory() {
          var props =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          var getUserConfirmation = props.getUserConfirmation,
            _props$initialEntries = props.initialEntries,
            initialEntries =
              _props$initialEntries === undefined
                ? ['/']
                : _props$initialEntries,
            _props$initialIndex = props.initialIndex,
            initialIndex =
              _props$initialIndex === undefined ? 0 : _props$initialIndex,
            _props$keyLength = props.keyLength,
            keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

          var transitionManager = Object(
            _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__['default'],
          )();

          var setState = function setState(nextState) {
            _extends(history, nextState);

            history.length = history.entries.length;

            transitionManager.notifyListeners(history.location, history.action);
          };

          var createKey = function createKey() {
            return Math.random()
              .toString(36)
              .substr(2, keyLength);
          };

          var index = clamp(initialIndex, 0, initialEntries.length - 1);
          var entries = initialEntries.map(function(entry) {
            return typeof entry === 'string'
              ? Object(
                  _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
                )(entry, undefined, createKey())
              : Object(
                  _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
                )(entry, undefined, entry.key || createKey());
          });

          // Public interface

          var createHref =
            _PathUtils__WEBPACK_IMPORTED_MODULE_1__['createPath'];

          var push = function push(path, state) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(
                (typeof path === 'undefined' ? 'undefined' : _typeof(path)) ===
                  'object' &&
                path.state !== undefined &&
                state !== undefined
              ),
              'You should avoid providing a 2nd state argument to push when the 1st ' +
                'argument is a location-like object that already has state; it is ignored',
            );

            var action = 'PUSH';
            var location = Object(
              _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
            )(path, state, createKey(), history.location);

            transitionManager.confirmTransitionTo(
              location,
              action,
              getUserConfirmation,
              function(ok) {
                if (!ok) return;

                var prevIndex = history.index;
                var nextIndex = prevIndex + 1;

                var nextEntries = history.entries.slice(0);
                if (nextEntries.length > nextIndex) {
                  nextEntries.splice(
                    nextIndex,
                    nextEntries.length - nextIndex,
                    location,
                  );
                } else {
                  nextEntries.push(location);
                }

                setState({
                  action: action,
                  location: location,
                  index: nextIndex,
                  entries: nextEntries,
                });
              },
            );
          };

          var replace = function replace(path, state) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(
                (typeof path === 'undefined' ? 'undefined' : _typeof(path)) ===
                  'object' &&
                path.state !== undefined &&
                state !== undefined
              ),
              'You should avoid providing a 2nd state argument to replace when the 1st ' +
                'argument is a location-like object that already has state; it is ignored',
            );

            var action = 'REPLACE';
            var location = Object(
              _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'],
            )(path, state, createKey(), history.location);

            transitionManager.confirmTransitionTo(
              location,
              action,
              getUserConfirmation,
              function(ok) {
                if (!ok) return;

                history.entries[history.index] = location;

                setState({ action: action, location: location });
              },
            );
          };

          var go = function go(n) {
            var nextIndex = clamp(
              history.index + n,
              0,
              history.entries.length - 1,
            );

            var action = 'POP';
            var location = history.entries[nextIndex];

            transitionManager.confirmTransitionTo(
              location,
              action,
              getUserConfirmation,
              function(ok) {
                if (ok) {
                  setState({
                    action: action,
                    location: location,
                    index: nextIndex,
                  });
                } else {
                  // Mimic the behavior of DOM histories by
                  // causing a render after a cancelled POP.
                  setState();
                }
              },
            );
          };

          var goBack = function goBack() {
            return go(-1);
          };

          var goForward = function goForward() {
            return go(1);
          };

          var canGo = function canGo(n) {
            var nextIndex = history.index + n;
            return nextIndex >= 0 && nextIndex < history.entries.length;
          };

          var block = function block() {
            var prompt =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : false;
            return transitionManager.setPrompt(prompt);
          };

          var listen = function listen(listener) {
            return transitionManager.appendListener(listener);
          };

          var history = {
            length: entries.length,
            action: 'POP',
            location: entries[index],
            index: index,
            entries: entries,
            createHref: createHref,
            push: push,
            replace: replace,
            go: go,
            goBack: goBack,
            goForward: goForward,
            canGo: canGo,
            block: block,
            listen: listen,
          };

          return history;
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = createMemoryHistory;

        /***/
      },

    /***/ './node_modules/history/es/createTransitionManager.js':
      /*!************************************************************!*\
  !*** ./node_modules/history/es/createTransitionManager.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );

        var createTransitionManager = function createTransitionManager() {
          var prompt = null;

          var setPrompt = function setPrompt(nextPrompt) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              prompt == null,
              'A history supports only one prompt at a time',
            );

            prompt = nextPrompt;

            return function() {
              if (prompt === nextPrompt) prompt = null;
            };
          };

          var confirmTransitionTo = function confirmTransitionTo(
            location,
            action,
            getUserConfirmation,
            callback,
          ) {
            // TODO: If another transition starts while we're still confirming
            // the previous one, we may end up in a weird state. Figure out the
            // best way to handle this.
            if (prompt != null) {
              var result =
                typeof prompt === 'function'
                  ? prompt(location, action)
                  : prompt;

              if (typeof result === 'string') {
                if (typeof getUserConfirmation === 'function') {
                  getUserConfirmation(result, callback);
                } else {
                  warning__WEBPACK_IMPORTED_MODULE_0___default()(
                    false,
                    'A history needs a getUserConfirmation function in order to use a prompt message',
                  );

                  callback(true);
                }
              } else {
                // Return false from a transition hook to cancel the transition.
                callback(result !== false);
              }
            } else {
              callback(true);
            }
          };

          var listeners = [];

          var appendListener = function appendListener(fn) {
            var isActive = true;

            var listener = function listener() {
              if (isActive) fn.apply(undefined, arguments);
            };

            listeners.push(listener);

            return function() {
              isActive = false;
              listeners = listeners.filter(function(item) {
                return item !== listener;
              });
            };
          };

          var notifyListeners = function notifyListeners() {
            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            listeners.forEach(function(listener) {
              return listener.apply(undefined, args);
            });
          };

          return {
            setPrompt: setPrompt,
            confirmTransitionTo: confirmTransitionTo,
            appendListener: appendListener,
            notifyListeners: notifyListeners,
          };
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = createTransitionManager;

        /***/
      },

    /***/ './node_modules/history/es/index.js':
      /*!******************************************!*\
  !*** ./node_modules/history/es/index.js ***!
  \******************************************/
      /*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./createBrowserHistory */ './node_modules/history/es/createBrowserHistory.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'createBrowserHistory',
          function() {
            return _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ];
          },
        );

        /* harmony import */ var _createHashHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./createHashHistory */ './node_modules/history/es/createHashHistory.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'createHashHistory',
          function() {
            return _createHashHistory__WEBPACK_IMPORTED_MODULE_1__['default'];
          },
        );

        /* harmony import */ var _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./createMemoryHistory */ './node_modules/history/es/createMemoryHistory.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'createMemoryHistory',
          function() {
            return _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__['default'];
          },
        );

        /* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./LocationUtils */ './node_modules/history/es/LocationUtils.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'createLocation',
          function() {
            return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__[
              'createLocation'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'locationsAreEqual',
          function() {
            return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__[
              'locationsAreEqual'
            ];
          },
        );

        /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./PathUtils */ './node_modules/history/es/PathUtils.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'parsePath',
          function() {
            return _PathUtils__WEBPACK_IMPORTED_MODULE_4__['parsePath'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'createPath',
          function() {
            return _PathUtils__WEBPACK_IMPORTED_MODULE_4__['createPath'];
          },
        );

        /***/
      },

    /***/ './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        /**
         * Copyright 2015, Yahoo! Inc.
         * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
         */
        var REACT_STATICS = {
          childContextTypes: true,
          contextTypes: true,
          defaultProps: true,
          displayName: true,
          getDefaultProps: true,
          getDerivedStateFromProps: true,
          mixins: true,
          propTypes: true,
          type: true,
        };

        var KNOWN_STATICS = {
          name: true,
          length: true,
          prototype: true,
          caller: true,
          callee: true,
          arguments: true,
          arity: true,
        };

        var defineProperty = Object.defineProperty;
        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var getPrototypeOf = Object.getPrototypeOf;
        var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

        function hoistNonReactStatics(
          targetComponent,
          sourceComponent,
          blacklist,
        ) {
          if (typeof sourceComponent !== 'string') {
            // don't hoist over string (html) components

            if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              if (
                inheritedComponent &&
                inheritedComponent !== objectPrototype
              ) {
                hoistNonReactStatics(
                  targetComponent,
                  inheritedComponent,
                  blacklist,
                );
              }
            }

            var keys = getOwnPropertyNames(sourceComponent);

            if (getOwnPropertySymbols) {
              keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }

            for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (
                !REACT_STATICS[key] &&
                !KNOWN_STATICS[key] &&
                (!blacklist || !blacklist[key])
              ) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                  // Avoid failures from read-only properties
                  defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
              }
            }

            return targetComponent;
          }

          return targetComponent;
        }

        module.exports = hoistNonReactStatics;

        /***/
      },

    /***/ './node_modules/humps/humps.js':
      /*!*************************************!*\
  !*** ./node_modules/humps/humps.js ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; // =========
        // = humps =
        // =========
        // Underscore-to-camelCase converter (and vice versa)
        // for strings and object keys

        // humps is copyright © 2012+ Dom Christie
        // Released under the MIT license.

        (function(global) {
          var _processKeys = function(convert, obj, options) {
            if (
              !_isObject(obj) ||
              _isDate(obj) ||
              _isRegExp(obj) ||
              _isBoolean(obj) ||
              _isFunction(obj)
            ) {
              return obj;
            }

            var output,
              i = 0,
              l = 0;

            if (_isArray(obj)) {
              output = [];
              for (l = obj.length; i < l; i++) {
                output.push(_processKeys(convert, obj[i], options));
              }
            } else {
              output = {};
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  output[convert(key, options)] = _processKeys(
                    convert,
                    obj[key],
                    options,
                  );
                }
              }
            }
            return output;
          };

          // String conversion methods

          var separateWords = function(string, options) {
            options = options || {};
            var separator = options.separator || '_';
            var split = options.split || /(?=[A-Z])/;

            return string.split(split).join(separator);
          };

          var camelize = function(string) {
            if (_isNumerical(string)) {
              return string;
            }
            string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
              return chr ? chr.toUpperCase() : '';
            });
            // Ensure 1st char is always lowercase
            return string.substr(0, 1).toLowerCase() + string.substr(1);
          };

          var pascalize = function(string) {
            var camelized = camelize(string);
            // Ensure 1st char is always uppercase
            return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
          };

          var decamelize = function(string, options) {
            return separateWords(string, options).toLowerCase();
          };

          // Utilities
          // Taken from Underscore.js

          var toString = Object.prototype.toString;

          var _isFunction = function(obj) {
            return typeof obj === 'function';
          };
          var _isObject = function(obj) {
            return obj === Object(obj);
          };
          var _isArray = function(obj) {
            return toString.call(obj) == '[object Array]';
          };
          var _isDate = function(obj) {
            return toString.call(obj) == '[object Date]';
          };
          var _isRegExp = function(obj) {
            return toString.call(obj) == '[object RegExp]';
          };
          var _isBoolean = function(obj) {
            return toString.call(obj) == '[object Boolean]';
          };

          // Performant way to determine if obj coerces to a number
          var _isNumerical = function(obj) {
            obj = obj - 0;
            return obj === obj;
          };

          // Sets up function which handles processing keys
          // allowing the convert function to be modified by a callback
          var _processor = function(convert, options) {
            var callback =
              options && 'process' in options ? options.process : options;

            if (typeof callback !== 'function') {
              return convert;
            }

            return function(string, options) {
              return callback(string, convert, options);
            };
          };

          var humps = {
            camelize: camelize,
            decamelize: decamelize,
            pascalize: pascalize,
            depascalize: decamelize,
            camelizeKeys: function(object, options) {
              return _processKeys(_processor(camelize, options), object);
            },
            decamelizeKeys: function(object, options) {
              return _processKeys(
                _processor(decamelize, options),
                object,
                options,
              );
            },
            pascalizeKeys: function(object, options) {
              return _processKeys(_processor(pascalize, options), object);
            },
            depascalizeKeys: function() {
              return this.decamelizeKeys.apply(this, arguments);
            },
          };

          if (true) {
            !((__WEBPACK_AMD_DEFINE_FACTORY__ = humps),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.call(
                    exports,
                    __webpack_require__,
                    exports,
                    module,
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(this);

        /***/
      },

    /***/ './node_modules/invariant/invariant.js':
      /*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        var NODE_ENV = 'development';

        var invariant = function(condition, format, a, b, c, d, e, f) {
          if (NODE_ENV !== 'production') {
            if (format === undefined) {
              throw new Error('invariant requires an error message argument');
            }
          }

          if (!condition) {
            var error;
            if (format === undefined) {
              error = new Error(
                'Minified exception occurred; use the non-minified dev environment ' +
                  'for the full error message and additional helpful warnings.',
              );
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                }),
              );
              error.name = 'Invariant Violation';
            }

            error.framesToPop = 1; // we don't care about invariant's own frame
            throw error;
          }
        };

        module.exports = invariant;

        /***/
      },

    /***/ './node_modules/object-assign/index.js':
      /*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

        /* eslint-disable no-unused-vars */
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;

        function toObject(val) {
          if (val === null || val === undefined) {
            throw new TypeError(
              'Object.assign cannot be called with null or undefined',
            );
          }

          return Object(val);
        }

        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            }

            // Detect buggy property enumeration order in older V8 versions.

            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
            var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
            test1[5] = 'de';
            if (Object.getOwnPropertyNames(test1)[0] === '5') {
              return false;
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test2 = {};
            for (var i = 0; i < 10; i++) {
              test2['_' + String.fromCharCode(i)] = i;
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
              return test2[n];
            });
            if (order2.join('') !== '0123456789') {
              return false;
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
              test3[letter] = letter;
            });
            if (
              Object.keys(Object.assign({}, test3)).join('') !==
              'abcdefghijklmnopqrst'
            ) {
              return false;
            }

            return true;
          } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false;
          }
        }

        module.exports = shouldUseNative()
          ? Object.assign
          : function(target, source) {
              var from;
              var to = toObject(target);
              var symbols;

              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);

                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                  }
                }

                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from);
                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]];
                    }
                  }
                }
              }

              return to;
            };

        /***/
      },

    /***/ './node_modules/prop-types/checkPropTypes.js':
      /*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var printWarning = function() {};

        if (true) {
          var ReactPropTypesSecret = __webpack_require__(
            /*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js',
          );
          var loggedTypeFailures = {};

          printWarning = function(text) {
            var message = 'Warning: ' + text;
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };
        }

        /**
         * Assert that the values match with the type specs.
         * Error messages are memorized and will only be shown once.
         *
         * @param {object} typeSpecs Map of name to a ReactPropType
         * @param {object} values Runtime values that need to be type-checked
         * @param {string} location e.g. "prop", "context", "child context"
         * @param {string} componentName Name of the component for error messages.
         * @param {?Function} getStack Returns the component stack.
         * @private
         */
        function checkPropTypes(
          typeSpecs,
          values,
          location,
          componentName,
          getStack,
        ) {
          if (true) {
            for (var typeSpecName in typeSpecs) {
              if (typeSpecs.hasOwnProperty(typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error(
                      (componentName || 'React class') +
                        ': ' +
                        location +
                        ' type `' +
                        typeSpecName +
                        '` is invalid; ' +
                        'it must be a function, usually from the `prop-types` package, but received `' +
                        typeof typeSpecs[typeSpecName] +
                        '`.',
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    ReactPropTypesSecret,
                  );
                } catch (ex) {
                  error = ex;
                }
                if (error && !(error instanceof Error)) {
                  printWarning(
                    (componentName || 'React class') +
                      ': type specification of ' +
                      location +
                      ' `' +
                      typeSpecName +
                      '` is invalid; the type checker ' +
                      'function must return `null` or an `Error` but returned a ' +
                      typeof error +
                      '. ' +
                      'You may have forgotten to pass an argument to the type checker ' +
                      'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                      'shape all require an argument).',
                  );
                }
                if (
                  error instanceof Error &&
                  !(error.message in loggedTypeFailures)
                ) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error.message] = true;

                  var stack = getStack ? getStack() : '';

                  printWarning(
                    'Failed ' +
                      location +
                      ' type: ' +
                      error.message +
                      (stack != null ? stack : ''),
                  );
                }
              }
            }
          }
        }

        module.exports = checkPropTypes;

        /***/
      },

    /***/ './node_modules/prop-types/factoryWithTypeCheckers.js':
      /*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var assign = __webpack_require__(
          /*! object-assign */ './node_modules/object-assign/index.js',
        );

        var ReactPropTypesSecret = __webpack_require__(
          /*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js',
        );
        var checkPropTypes = __webpack_require__(
          /*! ./checkPropTypes */ './node_modules/prop-types/checkPropTypes.js',
        );

        var printWarning = function() {};

        if (true) {
          printWarning = function(text) {
            var message = 'Warning: ' + text;
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };
        }

        function emptyFunctionThatReturnsNull() {
          return null;
        }

        module.exports = function(isValidElement, throwOnDirectAccess) {
          /* global Symbol */
          var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

          /**
           * Returns the iterator method function contained on the iterable object.
           *
           * Be sure to invoke the function with the iterable as context:
           *
           *     var iteratorFn = getIteratorFn(myIterable);
           *     if (iteratorFn) {
           *       var iterator = iteratorFn.call(myIterable);
           *       ...
           *     }
           *
           * @param {?object} maybeIterable
           * @return {?function}
           */
          function getIteratorFn(maybeIterable) {
            var iteratorFn =
              maybeIterable &&
              ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                maybeIterable[FAUX_ITERATOR_SYMBOL]);
            if (typeof iteratorFn === 'function') {
              return iteratorFn;
            }
          }

          /**
           * Collection of methods that allow declaration and validation of props that are
           * supplied to React components. Example usage:
           *
           *   var Props = require('ReactPropTypes');
           *   var MyArticle = React.createClass({
           *     propTypes: {
           *       // An optional string prop named "description".
           *       description: Props.string,
           *
           *       // A required enum prop named "category".
           *       category: Props.oneOf(['News','Photos']).isRequired,
           *
           *       // A prop named "dialog" that requires an instance of Dialog.
           *       dialog: Props.instanceOf(Dialog).isRequired
           *     },
           *     render: function() { ... }
           *   });
           *
           * A more formal specification of how these methods are used:
           *
           *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
           *   decl := ReactPropTypes.{type}(.isRequired)?
           *
           * Each and every declaration produces a function with the same signature. This
           * allows the creation of custom validation functions. For example:
           *
           *  var MyLink = React.createClass({
           *    propTypes: {
           *      // An optional string or URI prop named "href".
           *      href: function(props, propName, componentName) {
           *        var propValue = props[propName];
           *        if (propValue != null && typeof propValue !== 'string' &&
           *            !(propValue instanceof URI)) {
           *          return new Error(
           *            'Expected a string or an URI for ' + propName + ' in ' +
           *            componentName
           *          );
           *        }
           *      }
           *    },
           *    render: function() {...}
           *  });
           *
           * @internal
           */

          var ANONYMOUS = '<<anonymous>>';

          // Important!
          // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
          var ReactPropTypes = {
            array: createPrimitiveTypeChecker('array'),
            bool: createPrimitiveTypeChecker('boolean'),
            func: createPrimitiveTypeChecker('function'),
            number: createPrimitiveTypeChecker('number'),
            object: createPrimitiveTypeChecker('object'),
            string: createPrimitiveTypeChecker('string'),
            symbol: createPrimitiveTypeChecker('symbol'),

            any: createAnyTypeChecker(),
            arrayOf: createArrayOfTypeChecker,
            element: createElementTypeChecker(),
            instanceOf: createInstanceTypeChecker,
            node: createNodeChecker(),
            objectOf: createObjectOfTypeChecker,
            oneOf: createEnumTypeChecker,
            oneOfType: createUnionTypeChecker,
            shape: createShapeTypeChecker,
            exact: createStrictShapeTypeChecker,
          };

          /**
           * inlined Object.is polyfill to avoid requiring consumers ship their own
           * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
           */
          /*eslint-disable no-self-compare*/
          function is(x, y) {
            // SameValue algorithm
            if (x === y) {
              // Steps 1-5, 7-10
              // Steps 6.b-6.e: +0 != -0
              return x !== 0 || 1 / x === 1 / y;
            } else {
              // Step 6.a: NaN == NaN
              return x !== x && y !== y;
            }
          }
          /*eslint-enable no-self-compare*/

          /**
           * We use an Error-like object for backward compatibility as people may call
           * PropTypes directly and inspect their output. However, we don't use real
           * Errors anymore. We don't inspect their stack anyway, and creating them
           * is prohibitively expensive if they are created too often, such as what
           * happens in oneOfType() for any type before the one that matched.
           */
          function PropTypeError(message) {
            this.message = message;
            this.stack = '';
          }
          // Make `instanceof Error` still work for returned errors.
          PropTypeError.prototype = Error.prototype;

          function createChainableTypeChecker(validate) {
            if (true) {
              var manualPropTypeCallCache = {};
              var manualPropTypeWarningCount = 0;
            }
            function checkType(
              isRequired,
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret,
            ) {
              componentName = componentName || ANONYMOUS;
              propFullName = propFullName || propName;

              if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                  // New behavior only for users of `prop-types` package
                  var err = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                      'Use `PropTypes.checkPropTypes()` to call them. ' +
                      'Read more at http://fb.me/use-check-prop-types',
                  );
                  err.name = 'Invariant Violation';
                  throw err;
                } else if (true && typeof console !== 'undefined') {
                  // Old behavior for people using React.PropTypes
                  var cacheKey = componentName + ':' + propName;
                  if (
                    !manualPropTypeCallCache[cacheKey] &&
                    // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3
                  ) {
                    printWarning(
                      'You are manually calling a React.PropTypes validation ' +
                        'function for the `' +
                        propFullName +
                        '` prop on `' +
                        componentName +
                        '`. This is deprecated ' +
                        'and will throw in the standalone `prop-types` package. ' +
                        'You may be seeing this warning due to a third-party PropTypes ' +
                        'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                        'for details.',
                    );
                    manualPropTypeCallCache[cacheKey] = true;
                    manualPropTypeWarningCount++;
                  }
                }
              }
              if (props[propName] == null) {
                if (isRequired) {
                  if (props[propName] === null) {
                    return new PropTypeError(
                      'The ' +
                        location +
                        ' `' +
                        propFullName +
                        '` is marked as required ' +
                        ('in `' +
                          componentName +
                          '`, but its value is `null`.'),
                    );
                  }
                  return new PropTypeError(
                    'The ' +
                      location +
                      ' `' +
                      propFullName +
                      '` is marked as required in ' +
                      ('`' +
                        componentName +
                        '`, but its value is `undefined`.'),
                  );
                }
                return null;
              } else {
                return validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName,
                );
              }
            }

            var chainedCheckType = checkType.bind(null, false);
            chainedCheckType.isRequired = checkType.bind(null, true);

            return chainedCheckType;
          }

          function createPrimitiveTypeChecker(expectedType) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);

                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      preciseType +
                      '` supplied to `' +
                      componentName +
                      '`, expected ') +
                    ('`' + expectedType + '`.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createAnyTypeChecker() {
            return createChainableTypeChecker(emptyFunctionThatReturnsNull);
          }

          function createArrayOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError(
                  'Property `' +
                    propFullName +
                    '` of component `' +
                    componentName +
                    '` has invalid PropType notation inside arrayOf.',
                );
              }
              var propValue = props[propName];
              if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected an array.'),
                );
              }
              for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(
                  propValue,
                  i,
                  componentName,
                  location,
                  propFullName + '[' + i + ']',
                  ReactPropTypesSecret,
                );
                if (error instanceof Error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createElementTypeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected a single ReactElement.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createInstanceTypeChecker(expectedClass) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      actualClassName +
                      '` supplied to `' +
                      componentName +
                      '`, expected ') +
                    ('instance of `' + expectedClassName + '`.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createEnumTypeChecker(expectedValues) {
            if (!Array.isArray(expectedValues)) {
              true
                ? printWarning(
                    'Invalid argument supplied to oneOf, expected an instance of array.',
                  )
                : undefined;
              return emptyFunctionThatReturnsNull;
            }

            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                  return null;
                }
              }

              var valuesString = JSON.stringify(expectedValues);
              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` of value `' +
                  propValue +
                  '` ' +
                  ('supplied to `' +
                    componentName +
                    '`, expected one of ' +
                    valuesString +
                    '.'),
              );
            }
            return createChainableTypeChecker(validate);
          }

          function createObjectOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError(
                  'Property `' +
                    propFullName +
                    '` of component `' +
                    componentName +
                    '` has invalid PropType notation inside objectOf.',
                );
              }
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected an object.'),
                );
              }
              for (var key in propValue) {
                if (propValue.hasOwnProperty(key)) {
                  var error = typeChecker(
                    propValue,
                    key,
                    componentName,
                    location,
                    propFullName + '.' + key,
                    ReactPropTypesSecret,
                  );
                  if (error instanceof Error) {
                    return error;
                  }
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createUnionTypeChecker(arrayOfTypeCheckers) {
            if (!Array.isArray(arrayOfTypeCheckers)) {
              true
                ? printWarning(
                    'Invalid argument supplied to oneOfType, expected an instance of array.',
                  )
                : undefined;
              return emptyFunctionThatReturnsNull;
            }

            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];
              if (typeof checker !== 'function') {
                printWarning(
                  'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
                    'received ' +
                    getPostfixForTypeWarning(checker) +
                    ' at index ' +
                    i +
                    '.',
                );
                return emptyFunctionThatReturnsNull;
              }
            }

            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (
                  checker(
                    props,
                    propName,
                    componentName,
                    location,
                    propFullName,
                    ReactPropTypesSecret,
                  ) == null
                ) {
                  return null;
                }
              }

              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` supplied to ' +
                  ('`' + componentName + '`.'),
              );
            }
            return createChainableTypeChecker(validate);
          }

          function createNodeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              if (!isNode(props[propName])) {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` supplied to ' +
                    ('`' + componentName + '`, expected a ReactNode.'),
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type `' +
                    propType +
                    '` ' +
                    ('supplied to `' + componentName + '`, expected `object`.'),
                );
              }
              for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (!checker) {
                  continue;
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + '.' + key,
                  ReactPropTypesSecret,
                );
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }

          function createStrictShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type `' +
                    propType +
                    '` ' +
                    ('supplied to `' + componentName + '`, expected `object`.'),
                );
              }
              // We need to check all keys in case some are required but missing from
              // props.
              var allKeys = assign({}, props[propName], shapeTypes);
              for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (!checker) {
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` key `' +
                      key +
                      '` supplied to `' +
                      componentName +
                      '`.' +
                      '\nBad object: ' +
                      JSON.stringify(props[propName], null, '  ') +
                      '\nValid keys: ' +
                      JSON.stringify(Object.keys(shapeTypes), null, '  '),
                  );
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + '.' + key,
                  ReactPropTypesSecret,
                );
                if (error) {
                  return error;
                }
              }
              return null;
            }

            return createChainableTypeChecker(validate);
          }

          function isNode(propValue) {
            switch (typeof propValue) {
              case 'number':
              case 'string':
              case 'undefined':
                return true;
              case 'boolean':
                return !propValue;
              case 'object':
                if (Array.isArray(propValue)) {
                  return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                  return true;
                }

                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                  var iterator = iteratorFn.call(propValue);
                  var step;
                  if (iteratorFn !== propValue.entries) {
                    while (!(step = iterator.next()).done) {
                      if (!isNode(step.value)) {
                        return false;
                      }
                    }
                  } else {
                    // Iterator will provide entry [k,v] tuples rather than values.
                    while (!(step = iterator.next()).done) {
                      var entry = step.value;
                      if (entry) {
                        if (!isNode(entry[1])) {
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  return false;
                }

                return true;
              default:
                return false;
            }
          }

          function isSymbol(propType, propValue) {
            // Native Symbol.
            if (propType === 'symbol') {
              return true;
            }

            // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
            if (propValue['@@toStringTag'] === 'Symbol') {
              return true;
            }

            // Fallback for non-spec compliant Symbols which are polyfilled.
            if (typeof Symbol === 'function' && propValue instanceof Symbol) {
              return true;
            }

            return false;
          }

          // Equivalent of `typeof` but with special handling for array and regexp.
          function getPropType(propValue) {
            var propType = typeof propValue;
            if (Array.isArray(propValue)) {
              return 'array';
            }
            if (propValue instanceof RegExp) {
              // Old webkits (at least until Android 4.0) return 'function' rather than
              // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
              // passes PropTypes.object.
              return 'object';
            }
            if (isSymbol(propType, propValue)) {
              return 'symbol';
            }
            return propType;
          }

          // This handles more types than `getPropType`. Only used for error messages.
          // See `createPrimitiveTypeChecker`.
          function getPreciseType(propValue) {
            if (typeof propValue === 'undefined' || propValue === null) {
              return '' + propValue;
            }
            var propType = getPropType(propValue);
            if (propType === 'object') {
              if (propValue instanceof Date) {
                return 'date';
              } else if (propValue instanceof RegExp) {
                return 'regexp';
              }
            }
            return propType;
          }

          // Returns a string that is postfixed to a warning about an invalid type.
          // For example, "undefined" or "of type array"
          function getPostfixForTypeWarning(value) {
            var type = getPreciseType(value);
            switch (type) {
              case 'array':
              case 'object':
                return 'an ' + type;
              case 'boolean':
              case 'date':
              case 'regexp':
                return 'a ' + type;
              default:
                return type;
            }
          }

          // Returns class name of the object, if any.
          function getClassName(propValue) {
            if (!propValue.constructor || !propValue.constructor.name) {
              return ANONYMOUS;
            }
            return propValue.constructor.name;
          }

          ReactPropTypes.checkPropTypes = checkPropTypes;
          ReactPropTypes.PropTypes = ReactPropTypes;

          return ReactPropTypes;
        };

        /***/
      },

    /***/ './node_modules/prop-types/index.js':
      /*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          var REACT_ELEMENT_TYPE =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            0xeac7;

          var isValidElement = function(object) {
            return (
              typeof object === 'object' &&
              object !== null &&
              object.$$typeof === REACT_ELEMENT_TYPE
            );
          };

          // By explicitly using `prop-types` you are opting into new development behavior.
          // http://fb.me/prop-types-in-prod
          var throwOnDirectAccess = true;
          module.exports = __webpack_require__(
            /*! ./factoryWithTypeCheckers */ './node_modules/prop-types/factoryWithTypeCheckers.js',
          )(isValidElement, throwOnDirectAccess);
        } else {
        }

        /***/
      },

    /***/ './node_modules/prop-types/lib/ReactPropTypesSecret.js':
      /*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret =
          'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

        module.exports = ReactPropTypesSecret;

        /***/
      },

    /***/ './node_modules/react-router-dom/es/BrowserRouter.js':
      /*!***********************************************************!*\
  !*** ./node_modules/react-router-dom/es/BrowserRouter.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/react-router-dom/node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! history */ './node_modules/history/es/index.js',
        );
        /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./Router */ './node_modules/react-router-dom/es/Router.js',
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        /**
         * The public API for a <Router> that uses HTML5 history.
         */

        var BrowserRouter = (function(_React$Component) {
          _inherits(BrowserRouter, _React$Component);

          function BrowserRouter() {
            var _temp, _this, _ret;

            _classCallCheck(this, BrowserRouter);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.history = Object(
                history__WEBPACK_IMPORTED_MODULE_3__['createBrowserHistory'],
              )(_this.props)),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          BrowserRouter.prototype.componentWillMount = function componentWillMount() {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !this.props.history,
              '<BrowserRouter> ignores the history prop. To use a custom history, ' +
                'use `import { Router }` instead of `import { BrowserRouter as Router }`.',
            );
          };

          BrowserRouter.prototype.render = function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Router__WEBPACK_IMPORTED_MODULE_4__['default'],
              { history: this.history, children: this.props.children },
            );
          };

          return BrowserRouter;
        })(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

        BrowserRouter.propTypes = {
          basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
          getUserConfirmation:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
          keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
          children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = BrowserRouter;

        /***/
      },

    /***/ './node_modules/react-router-dom/es/HashRouter.js':
      /*!********************************************************!*\
  !*** ./node_modules/react-router-dom/es/HashRouter.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/react-router-dom/node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! history */ './node_modules/history/es/index.js',
        );
        /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./Router */ './node_modules/react-router-dom/es/Router.js',
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        /**
         * The public API for a <Router> that uses window.location.hash.
         */

        var HashRouter = (function(_React$Component) {
          _inherits(HashRouter, _React$Component);

          function HashRouter() {
            var _temp, _this, _ret;

            _classCallCheck(this, HashRouter);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.history = Object(
                history__WEBPACK_IMPORTED_MODULE_3__['createHashHistory'],
              )(_this.props)),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          HashRouter.prototype.componentWillMount = function componentWillMount() {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !this.props.history,
              '<HashRouter> ignores the history prop. To use a custom history, ' +
                'use `import { Router }` instead of `import { HashRouter as Router }`.',
            );
          };

          HashRouter.prototype.render = function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Router__WEBPACK_IMPORTED_MODULE_4__['default'],
              { history: this.history, children: this.props.children },
            );
          };

          return HashRouter;
        })(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

        HashRouter.propTypes = {
          basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
          getUserConfirmation:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
          hashType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([
            'hashbang',
            'noslash',
            'slash',
          ]),
          children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = HashRouter;

        /***/
      },

    /***/ './node_modules/react-router-dom/es/Link.js':
      /*!**************************************************!*\
  !*** ./node_modules/react-router-dom/es/Link.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! history */ './node_modules/history/es/index.js',
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var isModifiedEvent = function isModifiedEvent(event) {
          return !!(
            event.metaKey ||
            event.altKey ||
            event.ctrlKey ||
            event.shiftKey
          );
        };

        /**
         * The public API for rendering a history-aware <a>.
         */

        var Link = (function(_React$Component) {
          _inherits(Link, _React$Component);

          function Link() {
            var _temp, _this, _ret;

            _classCallCheck(this, Link);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.handleClick = function(event) {
                if (_this.props.onClick) _this.props.onClick(event);

                if (
                  !event.defaultPrevented && // onClick prevented default
                  event.button === 0 && // ignore everything but left clicks
                  !_this.props.target && // let browser handle "target=_blank" etc.
                  !isModifiedEvent(event) // ignore clicks with modifier keys
                ) {
                  event.preventDefault();

                  var history = _this.context.router.history;
                  var _this$props = _this.props,
                    replace = _this$props.replace,
                    to = _this$props.to;

                  if (replace) {
                    history.replace(to);
                  } else {
                    history.push(to);
                  }
                }
              }),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          Link.prototype.render = function render() {
            var _props = this.props,
              replace = _props.replace,
              to = _props.to,
              innerRef = _props.innerRef,
              props = _objectWithoutProperties(_props, [
                'replace',
                'to',
                'innerRef',
              ]); // eslint-disable-line no-unused-vars

            invariant__WEBPACK_IMPORTED_MODULE_2___default()(
              this.context.router,
              'You should not use <Link> outside a <Router>',
            );

            invariant__WEBPACK_IMPORTED_MODULE_2___default()(
              to !== undefined,
              'You must specify the "to" property',
            );

            var history = this.context.router.history;

            var location =
              typeof to === 'string'
                ? Object(
                    history__WEBPACK_IMPORTED_MODULE_3__['createLocation'],
                  )(to, null, null, history.location)
                : to;

            var href = history.createHref(location);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              _extends({}, props, {
                onClick: this.handleClick,
                href: href,
                ref: innerRef,
              }),
            );
          };

          return Link;
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

        Link.propTypes = {
          onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
          target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
          to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
          ]).isRequired,
          innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            ],
          ),
        };
        Link.defaultProps = {
          replace: false,
        };
        Link.contextTypes = {
          router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
            history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              push:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
              replace:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
              createHref:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
            }).isRequired,
          }).isRequired,
        };

        /* harmony default export */ __webpack_exports__['default'] = Link;

        /***/
      },

    /***/ './node_modules/react-router-dom/es/MemoryRouter.js':
      /*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/MemoryRouter.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/MemoryRouter */ './node_modules/react-router/es/MemoryRouter.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_MemoryRouter__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/NavLink.js':
      /*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/es/NavLink.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Route */ './node_modules/react-router-dom/es/Route.js',
        );
        /* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./Link */ './node_modules/react-router-dom/es/Link.js',
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        /**
         * A <Link> wrapper that knows if it's "active" or not.
         */
        var NavLink = function NavLink(_ref) {
          var to = _ref.to,
            exact = _ref.exact,
            strict = _ref.strict,
            location = _ref.location,
            activeClassName = _ref.activeClassName,
            className = _ref.className,
            activeStyle = _ref.activeStyle,
            style = _ref.style,
            getIsActive = _ref.isActive,
            ariaCurrent = _ref['aria-current'],
            rest = _objectWithoutProperties(_ref, [
              'to',
              'exact',
              'strict',
              'location',
              'activeClassName',
              'className',
              'activeStyle',
              'style',
              'isActive',
              'aria-current',
            ]);

          var path =
            (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object'
              ? to.pathname
              : to;

          // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
          var escapedPath =
            path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _Route__WEBPACK_IMPORTED_MODULE_2__['default'],
            {
              path: escapedPath,
              exact: exact,
              strict: strict,
              location: location,
              children: function children(_ref2) {
                var location = _ref2.location,
                  match = _ref2.match;

                var isActive = !!(getIsActive
                  ? getIsActive(match, location)
                  : match);

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Link__WEBPACK_IMPORTED_MODULE_3__['default'],
                  _extends(
                    {
                      to: to,
                      className: isActive
                        ? [className, activeClassName]
                            .filter(function(i) {
                              return i;
                            })
                            .join(' ')
                        : className,
                      style: isActive
                        ? _extends({}, style, activeStyle)
                        : style,
                      'aria-current': (isActive && ariaCurrent) || null,
                    },
                    rest,
                  ),
                );
              },
            },
          );
        };

        NavLink.propTypes = {
          to: _Link__WEBPACK_IMPORTED_MODULE_3__['default'].propTypes.to,
          exact: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
          strict: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
          location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
          activeClassName:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
          style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
          isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
          'aria-current': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(
            ['page', 'step', 'location', 'date', 'time', 'true'],
          ),
        };

        NavLink.defaultProps = {
          activeClassName: 'active',
          'aria-current': 'page',
        };

        /* harmony default export */ __webpack_exports__['default'] = NavLink;

        /***/
      },

    /***/ './node_modules/react-router-dom/es/Prompt.js':
      /*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Prompt.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_Prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/Prompt */ './node_modules/react-router/es/Prompt.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_Prompt__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/Redirect.js':
      /*!******************************************************!*\
  !*** ./node_modules/react-router-dom/es/Redirect.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_Redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/Redirect */ './node_modules/react-router/es/Redirect.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_Redirect__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/Route.js':
      /*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/Route.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/Route */ './node_modules/react-router/es/Route.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_Route__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/Router.js':
      /*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Router.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/Router */ './node_modules/react-router/es/Router.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_Router__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/StaticRouter.js':
      /*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/StaticRouter.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_StaticRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/StaticRouter */ './node_modules/react-router/es/StaticRouter.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_StaticRouter__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/Switch.js':
      /*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Switch.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/Switch */ './node_modules/react-router/es/Switch.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_Switch__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/generatePath.js':
      /*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/generatePath.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_generatePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/generatePath */ './node_modules/react-router/es/generatePath.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_generatePath__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/index.js':
      /*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
      /*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _BrowserRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./BrowserRouter */ './node_modules/react-router-dom/es/BrowserRouter.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'BrowserRouter',
          function() {
            return _BrowserRouter__WEBPACK_IMPORTED_MODULE_0__['default'];
          },
        );

        /* harmony import */ var _HashRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./HashRouter */ './node_modules/react-router-dom/es/HashRouter.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'HashRouter',
          function() {
            return _HashRouter__WEBPACK_IMPORTED_MODULE_1__['default'];
          },
        );

        /* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Link */ './node_modules/react-router-dom/es/Link.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Link',
          function() {
            return _Link__WEBPACK_IMPORTED_MODULE_2__['default'];
          },
        );

        /* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./MemoryRouter */ './node_modules/react-router-dom/es/MemoryRouter.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MemoryRouter',
          function() {
            return _MemoryRouter__WEBPACK_IMPORTED_MODULE_3__['default'];
          },
        );

        /* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./NavLink */ './node_modules/react-router-dom/es/NavLink.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'NavLink',
          function() {
            return _NavLink__WEBPACK_IMPORTED_MODULE_4__['default'];
          },
        );

        /* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Prompt */ './node_modules/react-router-dom/es/Prompt.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Prompt',
          function() {
            return _Prompt__WEBPACK_IMPORTED_MODULE_5__['default'];
          },
        );

        /* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./Redirect */ './node_modules/react-router-dom/es/Redirect.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Redirect',
          function() {
            return _Redirect__WEBPACK_IMPORTED_MODULE_6__['default'];
          },
        );

        /* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./Route */ './node_modules/react-router-dom/es/Route.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Route',
          function() {
            return _Route__WEBPACK_IMPORTED_MODULE_7__['default'];
          },
        );

        /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./Router */ './node_modules/react-router-dom/es/Router.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Router',
          function() {
            return _Router__WEBPACK_IMPORTED_MODULE_8__['default'];
          },
        );

        /* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./StaticRouter */ './node_modules/react-router-dom/es/StaticRouter.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'StaticRouter',
          function() {
            return _StaticRouter__WEBPACK_IMPORTED_MODULE_9__['default'];
          },
        );

        /* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./Switch */ './node_modules/react-router-dom/es/Switch.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Switch',
          function() {
            return _Switch__WEBPACK_IMPORTED_MODULE_10__['default'];
          },
        );

        /* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./generatePath */ './node_modules/react-router-dom/es/generatePath.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'generatePath',
          function() {
            return _generatePath__WEBPACK_IMPORTED_MODULE_11__['default'];
          },
        );

        /* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./matchPath */ './node_modules/react-router-dom/es/matchPath.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'matchPath',
          function() {
            return _matchPath__WEBPACK_IMPORTED_MODULE_12__['default'];
          },
        );

        /* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./withRouter */ './node_modules/react-router-dom/es/withRouter.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'withRouter',
          function() {
            return _withRouter__WEBPACK_IMPORTED_MODULE_13__['default'];
          },
        );

        /***/
      },

    /***/ './node_modules/react-router-dom/es/matchPath.js':
      /*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/es/matchPath.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_matchPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/matchPath */ './node_modules/react-router/es/matchPath.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_matchPath__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/es/withRouter.js':
      /*!********************************************************!*\
  !*** ./node_modules/react-router-dom/es/withRouter.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_router_es_withRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react-router/es/withRouter */ './node_modules/react-router/es/withRouter.js',
        );
        // Written in this round about way for babel-transform-imports

        /* harmony default export */ __webpack_exports__['default'] =
          react_router_es_withRouter__WEBPACK_IMPORTED_MODULE_0__['default'];

        /***/
      },

    /***/ './node_modules/react-router-dom/node_modules/warning/warning.js':
      /*!***********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/warning/warning.js ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var __DEV__ = 'development' !== 'production';

        var warning = function() {};

        if (__DEV__) {
          var printWarning = function printWarning(format, args) {
            var len = arguments.length;
            args = new Array(len > 2 ? len - 2 : 0);
            for (var key = 2; key < len; key++) {
              args[key - 2] = arguments[key];
            }
            var argIndex = 0;
            var message =
              'Warning: ' +
              format.replace(/%s/g, function() {
                return args[argIndex++];
              });
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };

          warning = function(condition, format, args) {
            var len = arguments.length;
            args = new Array(len > 2 ? len - 2 : 0);
            for (var key = 2; key < len; key++) {
              args[key - 2] = arguments[key];
            }
            if (format === undefined) {
              throw new Error(
                '`warning(condition, format, ...args)` requires a warning ' +
                  'message argument',
              );
            }
            if (!condition) {
              printWarning.apply(null, [format].concat(args));
            }
          };
        }

        module.exports = warning;

        /***/
      },

    /***/ './node_modules/react-router/es/MemoryRouter.js':
      /*!******************************************************!*\
  !*** ./node_modules/react-router/es/MemoryRouter.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/react-router/node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! history */ './node_modules/history/es/index.js',
        );
        /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./Router */ './node_modules/react-router/es/Router.js',
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        /**
         * The public API for a <Router> that stores location in memory.
         */

        var MemoryRouter = (function(_React$Component) {
          _inherits(MemoryRouter, _React$Component);

          function MemoryRouter() {
            var _temp, _this, _ret;

            _classCallCheck(this, MemoryRouter);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.history = Object(
                history__WEBPACK_IMPORTED_MODULE_3__['createMemoryHistory'],
              )(_this.props)),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          MemoryRouter.prototype.componentWillMount = function componentWillMount() {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !this.props.history,
              '<MemoryRouter> ignores the history prop. To use a custom history, ' +
                'use `import { Router }` instead of `import { MemoryRouter as Router }`.',
            );
          };

          MemoryRouter.prototype.render = function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _Router__WEBPACK_IMPORTED_MODULE_4__['default'],
              { history: this.history, children: this.props.children },
            );
          };

          return MemoryRouter;
        })(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

        MemoryRouter.propTypes = {
          initialEntries:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
          initialIndex:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
          getUserConfirmation:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
          keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
          children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = MemoryRouter;

        /***/
      },

    /***/ './node_modules/react-router/es/Prompt.js':
      /*!************************************************!*\
  !*** ./node_modules/react-router/es/Prompt.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_2__,
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        /**
         * The public API for prompting the user before navigating away
         * from a screen with a component.
         */

        var Prompt = (function(_React$Component) {
          _inherits(Prompt, _React$Component);

          function Prompt() {
            _classCallCheck(this, Prompt);

            return _possibleConstructorReturn(
              this,
              _React$Component.apply(this, arguments),
            );
          }

          Prompt.prototype.enable = function enable(message) {
            if (this.unblock) this.unblock();

            this.unblock = this.context.router.history.block(message);
          };

          Prompt.prototype.disable = function disable() {
            if (this.unblock) {
              this.unblock();
              this.unblock = null;
            }
          };

          Prompt.prototype.componentWillMount = function componentWillMount() {
            invariant__WEBPACK_IMPORTED_MODULE_2___default()(
              this.context.router,
              'You should not use <Prompt> outside a <Router>',
            );

            if (this.props.when) this.enable(this.props.message);
          };

          Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(
            nextProps,
          ) {
            if (nextProps.when) {
              if (!this.props.when || this.props.message !== nextProps.message)
                this.enable(nextProps.message);
            } else {
              this.disable();
            }
          };

          Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
            this.disable();
          };

          Prompt.prototype.render = function render() {
            return null;
          };

          return Prompt;
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

        Prompt.propTypes = {
          when: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
          message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          ]).isRequired,
        };
        Prompt.defaultProps = {
          when: true,
        };
        Prompt.contextTypes = {
          router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
            history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              block:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
            }).isRequired,
          }).isRequired,
        };

        /* harmony default export */ __webpack_exports__['default'] = Prompt;

        /***/
      },

    /***/ './node_modules/react-router/es/Redirect.js':
      /*!**************************************************!*\
  !*** ./node_modules/react-router/es/Redirect.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! warning */ './node_modules/react-router/node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! history */ './node_modules/history/es/index.js',
        );
        /* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./generatePath */ './node_modules/react-router/es/generatePath.js',
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        /**
         * The public API for updating the location programmatically
         * with a component.
         */

        var Redirect = (function(_React$Component) {
          _inherits(Redirect, _React$Component);

          function Redirect() {
            _classCallCheck(this, Redirect);

            return _possibleConstructorReturn(
              this,
              _React$Component.apply(this, arguments),
            );
          }

          Redirect.prototype.isStatic = function isStatic() {
            return this.context.router && this.context.router.staticContext;
          };

          Redirect.prototype.componentWillMount = function componentWillMount() {
            invariant__WEBPACK_IMPORTED_MODULE_3___default()(
              this.context.router,
              'You should not use <Redirect> outside a <Router>',
            );

            if (this.isStatic()) this.perform();
          };

          Redirect.prototype.componentDidMount = function componentDidMount() {
            if (!this.isStatic()) this.perform();
          };

          Redirect.prototype.componentDidUpdate = function componentDidUpdate(
            prevProps,
          ) {
            var prevTo = Object(
              history__WEBPACK_IMPORTED_MODULE_4__['createLocation'],
            )(prevProps.to);
            var nextTo = Object(
              history__WEBPACK_IMPORTED_MODULE_4__['createLocation'],
            )(this.props.to);

            if (
              Object(history__WEBPACK_IMPORTED_MODULE_4__['locationsAreEqual'])(
                prevTo,
                nextTo,
              )
            ) {
              warning__WEBPACK_IMPORTED_MODULE_2___default()(
                false,
                "You tried to redirect to the same route you're currently on: " +
                  ('"' + nextTo.pathname + nextTo.search + '"'),
              );
              return;
            }

            this.perform();
          };

          Redirect.prototype.computeTo = function computeTo(_ref) {
            var computedMatch = _ref.computedMatch,
              to = _ref.to;

            if (computedMatch) {
              if (typeof to === 'string') {
                return Object(
                  _generatePath__WEBPACK_IMPORTED_MODULE_5__['default'],
                )(to, computedMatch.params);
              } else {
                return _extends({}, to, {
                  pathname: Object(
                    _generatePath__WEBPACK_IMPORTED_MODULE_5__['default'],
                  )(to.pathname, computedMatch.params),
                });
              }
            }

            return to;
          };

          Redirect.prototype.perform = function perform() {
            var history = this.context.router.history;
            var push = this.props.push;

            var to = this.computeTo(this.props);

            if (push) {
              history.push(to);
            } else {
              history.replace(to);
            }
          };

          Redirect.prototype.render = function render() {
            return null;
          };

          return Redirect;
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

        Redirect.propTypes = {
          computedMatch:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, // private, from <Switch>
          push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
          from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
          ]).isRequired,
        };
        Redirect.defaultProps = {
          push: false,
        };
        Redirect.contextTypes = {
          router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
            history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              push:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
              replace:
                prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
                  .isRequired,
            }).isRequired,
            staticContext:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
          }).isRequired,
        };

        /* harmony default export */ __webpack_exports__['default'] = Redirect;

        /***/
      },

    /***/ './node_modules/react-router/es/Route.js':
      /*!***********************************************!*\
  !*** ./node_modules/react-router/es/Route.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/react-router/node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./matchPath */ './node_modules/react-router/es/matchPath.js',
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var isEmptyChildren = function isEmptyChildren(children) {
          return (
            react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(
              children,
            ) === 0
          );
        };

        /**
         * The public API for matching a single path and rendering.
         */

        var Route = (function(_React$Component) {
          _inherits(Route, _React$Component);

          function Route() {
            var _temp, _this, _ret;

            _classCallCheck(this, Route);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.state = {
                match: _this.computeMatch(_this.props, _this.context.router),
              }),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          Route.prototype.getChildContext = function getChildContext() {
            return {
              router: _extends({}, this.context.router, {
                route: {
                  location:
                    this.props.location || this.context.router.route.location,
                  match: this.state.match,
                },
              }),
            };
          };

          Route.prototype.computeMatch = function computeMatch(_ref, router) {
            var computedMatch = _ref.computedMatch,
              location = _ref.location,
              path = _ref.path,
              strict = _ref.strict,
              exact = _ref.exact,
              sensitive = _ref.sensitive;

            if (computedMatch) return computedMatch; // <Switch> already computed the match for us

            invariant__WEBPACK_IMPORTED_MODULE_1___default()(
              router,
              'You should not use <Route> or withRouter() outside a <Router>',
            );

            var route = router.route;

            var pathname = (location || route.location).pathname;

            return Object(_matchPath__WEBPACK_IMPORTED_MODULE_4__['default'])(
              pathname,
              {
                path: path,
                strict: strict,
                exact: exact,
                sensitive: sensitive,
              },
              route.match,
            );
          };

          Route.prototype.componentWillMount = function componentWillMount() {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(this.props.component && this.props.render),
              'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored',
            );

            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(
                this.props.component &&
                this.props.children &&
                !isEmptyChildren(this.props.children)
              ),
              'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored',
            );

            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(
                this.props.render &&
                this.props.children &&
                !isEmptyChildren(this.props.children)
              ),
              'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored',
            );
          };

          Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(
            nextProps,
            nextContext,
          ) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(nextProps.location && !this.props.location),
              '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.',
            );

            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !(!nextProps.location && this.props.location),
              '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.',
            );

            this.setState({
              match: this.computeMatch(nextProps, nextContext.router),
            });
          };

          Route.prototype.render = function render() {
            var match = this.state.match;
            var _props = this.props,
              children = _props.children,
              component = _props.component,
              render = _props.render;
            var _context$router = this.context.router,
              history = _context$router.history,
              route = _context$router.route,
              staticContext = _context$router.staticContext;

            var location = this.props.location || route.location;
            var props = {
              match: match,
              location: location,
              history: history,
              staticContext: staticContext,
            };

            if (component)
              return match
                ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    component,
                    props,
                  )
                : null;

            if (render) return match ? render(props) : null;

            if (typeof children === 'function') return children(props);

            if (children && !isEmptyChildren(children))
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(
                children,
              );

            return null;
          };

          return Route;
        })(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

        Route.propTypes = {
          computedMatch:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, // private, from <Switch>
          path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          exact: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          strict: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          sensitive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
          render: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
          children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
            ],
          ),
          location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        };
        Route.contextTypes = {
          router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
            history:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
                .isRequired,
            route:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
                .isRequired,
            staticContext:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          }),
        };
        Route.childContextTypes = {
          router:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        };

        /* harmony default export */ __webpack_exports__['default'] = Route;

        /***/
      },

    /***/ './node_modules/react-router/es/Router.js':
      /*!************************************************!*\
  !*** ./node_modules/react-router/es/Router.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/react-router/node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        /**
         * The public API for putting history on context.
         */

        var Router = (function(_React$Component) {
          _inherits(Router, _React$Component);

          function Router() {
            var _temp, _this, _ret;

            _classCallCheck(this, Router);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.state = {
                match: _this.computeMatch(
                  _this.props.history.location.pathname,
                ),
              }),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          Router.prototype.getChildContext = function getChildContext() {
            return {
              router: _extends({}, this.context.router, {
                history: this.props.history,
                route: {
                  location: this.props.history.location,
                  match: this.state.match,
                },
              }),
            };
          };

          Router.prototype.computeMatch = function computeMatch(pathname) {
            return {
              path: '/',
              url: '/',
              params: {},
              isExact: pathname === '/',
            };
          };

          Router.prototype.componentWillMount = function componentWillMount() {
            var _this2 = this;

            var _props = this.props,
              children = _props.children,
              history = _props.history;

            invariant__WEBPACK_IMPORTED_MODULE_1___default()(
              children == null ||
                react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(
                  children,
                ) === 1,
              'A <Router> may have only one child element',
            );

            // Do this here so we can setState when a <Redirect> changes the
            // location in componentWillMount. This happens e.g. when doing
            // server rendering using a <StaticRouter>.
            this.unlisten = history.listen(function() {
              _this2.setState({
                match: _this2.computeMatch(history.location.pathname),
              });
            });
          };

          Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(
            nextProps,
          ) {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              this.props.history === nextProps.history,
              'You cannot change <Router history>',
            );
          };

          Router.prototype.componentWillUnmount = function componentWillUnmount() {
            this.unlisten();
          };

          Router.prototype.render = function render() {
            var children = this.props.children;

            return children
              ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(
                  children,
                )
              : null;
          };

          return Router;
        })(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

        Router.propTypes = {
          history:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
          children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
        };
        Router.contextTypes = {
          router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        };
        Router.childContextTypes = {
          router:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        };

        /* harmony default export */ __webpack_exports__['default'] = Router;

        /***/
      },

    /***/ './node_modules/react-router/es/StaticRouter.js':
      /*!******************************************************!*\
  !*** ./node_modules/react-router/es/StaticRouter.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! warning */ './node_modules/react-router/node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! history */ './node_modules/history/es/index.js',
        );
        /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Router */ './node_modules/react-router/es/Router.js',
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var addLeadingSlash = function addLeadingSlash(path) {
          return path.charAt(0) === '/' ? path : '/' + path;
        };

        var addBasename = function addBasename(basename, location) {
          if (!basename) return location;

          return _extends({}, location, {
            pathname: addLeadingSlash(basename) + location.pathname,
          });
        };

        var stripBasename = function stripBasename(basename, location) {
          if (!basename) return location;

          var base = addLeadingSlash(basename);

          if (location.pathname.indexOf(base) !== 0) return location;

          return _extends({}, location, {
            pathname: location.pathname.substr(base.length),
          });
        };

        var createURL = function createURL(location) {
          return typeof location === 'string'
            ? location
            : Object(history__WEBPACK_IMPORTED_MODULE_4__['createPath'])(
                location,
              );
        };

        var staticHandler = function staticHandler(methodName) {
          return function() {
            invariant__WEBPACK_IMPORTED_MODULE_1___default()(
              false,
              'You cannot %s with <StaticRouter>',
              methodName,
            );
          };
        };

        var noop = function noop() {};

        /**
         * The public top-level API for a "static" <Router>, so-called because it
         * can't actually change the current location. Instead, it just records
         * location changes in a context object. Useful mainly in testing and
         * server-rendering scenarios.
         */

        var StaticRouter = (function(_React$Component) {
          _inherits(StaticRouter, _React$Component);

          function StaticRouter() {
            var _temp, _this, _ret;

            _classCallCheck(this, StaticRouter);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ),
              )),
              _this)),
              (_this.createHref = function(path) {
                return addLeadingSlash(_this.props.basename + createURL(path));
              }),
              (_this.handlePush = function(location) {
                var _this$props = _this.props,
                  basename = _this$props.basename,
                  context = _this$props.context;

                context.action = 'PUSH';
                context.location = addBasename(
                  basename,
                  Object(
                    history__WEBPACK_IMPORTED_MODULE_4__['createLocation'],
                  )(location),
                );
                context.url = createURL(context.location);
              }),
              (_this.handleReplace = function(location) {
                var _this$props2 = _this.props,
                  basename = _this$props2.basename,
                  context = _this$props2.context;

                context.action = 'REPLACE';
                context.location = addBasename(
                  basename,
                  Object(
                    history__WEBPACK_IMPORTED_MODULE_4__['createLocation'],
                  )(location),
                );
                context.url = createURL(context.location);
              }),
              (_this.handleListen = function() {
                return noop;
              }),
              (_this.handleBlock = function() {
                return noop;
              }),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          StaticRouter.prototype.getChildContext = function getChildContext() {
            return {
              router: {
                staticContext: this.props.context,
              },
            };
          };

          StaticRouter.prototype.componentWillMount = function componentWillMount() {
            warning__WEBPACK_IMPORTED_MODULE_0___default()(
              !this.props.history,
              '<StaticRouter> ignores the history prop. To use a custom history, ' +
                'use `import { Router }` instead of `import { StaticRouter as Router }`.',
            );
          };

          StaticRouter.prototype.render = function render() {
            var _props = this.props,
              basename = _props.basename,
              context = _props.context,
              location = _props.location,
              props = _objectWithoutProperties(_props, [
                'basename',
                'context',
                'location',
              ]);

            var history = {
              createHref: this.createHref,
              action: 'POP',
              location: stripBasename(
                basename,
                Object(history__WEBPACK_IMPORTED_MODULE_4__['createLocation'])(
                  location,
                ),
              ),
              push: this.handlePush,
              replace: this.handleReplace,
              go: staticHandler('go'),
              goBack: staticHandler('goBack'),
              goForward: staticHandler('goForward'),
              listen: this.handleListen,
              block: this.handleBlock,
            };

            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              _Router__WEBPACK_IMPORTED_MODULE_5__['default'],
              _extends({}, props, { history: history }),
            );
          };

          return StaticRouter;
        })(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

        StaticRouter.propTypes = {
          basename: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          context:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
          location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
            ],
          ),
        };
        StaticRouter.defaultProps = {
          basename: '',
          location: '/',
        };
        StaticRouter.childContextTypes = {
          router:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = StaticRouter;

        /***/
      },

    /***/ './node_modules/react-router/es/Switch.js':
      /*!************************************************!*\
  !*** ./node_modules/react-router/es/Switch.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! warning */ './node_modules/react-router/node_modules/warning/warning.js',
        );
        /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          warning__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! invariant */ './node_modules/invariant/invariant.js',
        );
        /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          invariant__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./matchPath */ './node_modules/react-router/es/matchPath.js',
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass,
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        /**
         * The public API for rendering the first <Route> that matches.
         */

        var Switch = (function(_React$Component) {
          _inherits(Switch, _React$Component);

          function Switch() {
            _classCallCheck(this, Switch);

            return _possibleConstructorReturn(
              this,
              _React$Component.apply(this, arguments),
            );
          }

          Switch.prototype.componentWillMount = function componentWillMount() {
            invariant__WEBPACK_IMPORTED_MODULE_3___default()(
              this.context.router,
              'You should not use <Switch> outside a <Router>',
            );
          };

          Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(
            nextProps,
          ) {
            warning__WEBPACK_IMPORTED_MODULE_2___default()(
              !(nextProps.location && !this.props.location),
              '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.',
            );

            warning__WEBPACK_IMPORTED_MODULE_2___default()(
              !(!nextProps.location && this.props.location),
              '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.',
            );
          };

          Switch.prototype.render = function render() {
            var route = this.context.router.route;
            var children = this.props.children;

            var location = this.props.location || route.location;

            var match = void 0,
              child = void 0;
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
              children,
              function(element) {
                if (
                  match == null &&
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(
                    element,
                  )
                ) {
                  var _element$props = element.props,
                    pathProp = _element$props.path,
                    exact = _element$props.exact,
                    strict = _element$props.strict,
                    sensitive = _element$props.sensitive,
                    from = _element$props.from;

                  var path = pathProp || from;

                  child = element;
                  match = Object(
                    _matchPath__WEBPACK_IMPORTED_MODULE_4__['default'],
                  )(
                    location.pathname,
                    {
                      path: path,
                      exact: exact,
                      strict: strict,
                      sensitive: sensitive,
                    },
                    route.match,
                  );
                }
              },
            );

            return match
              ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(
                  child,
                  { location: location, computedMatch: match },
                )
              : null;
          };

          return Switch;
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

        Switch.contextTypes = {
          router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
            route:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
                .isRequired,
          }).isRequired,
        };
        Switch.propTypes = {
          children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
          location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        };

        /* harmony default export */ __webpack_exports__['default'] = Switch;

        /***/
      },

    /***/ './node_modules/react-router/es/generatePath.js':
      /*!******************************************************!*\
  !*** ./node_modules/react-router/es/generatePath.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! path-to-regexp */ './node_modules/react-router/node_modules/path-to-regexp/index.js',
        );
        /* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          path_to_regexp__WEBPACK_IMPORTED_MODULE_0__,
        );

        var patternCache = {};
        var cacheLimit = 10000;
        var cacheCount = 0;

        var compileGenerator = function compileGenerator(pattern) {
          var cacheKey = pattern;
          var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

          if (cache[pattern]) return cache[pattern];

          var compiledGenerator = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default.a.compile(
            pattern,
          );

          if (cacheCount < cacheLimit) {
            cache[pattern] = compiledGenerator;
            cacheCount++;
          }

          return compiledGenerator;
        };

        /**
         * Public API for generating a URL pathname from a pattern and parameters.
         */
        var generatePath = function generatePath() {
          var pattern =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : '/';
          var params =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};

          if (pattern === '/') {
            return pattern;
          }
          var generator = compileGenerator(pattern);
          return generator(params, { pretty: true });
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = generatePath;

        /***/
      },

    /***/ './node_modules/react-router/es/matchPath.js':
      /*!***************************************************!*\
  !*** ./node_modules/react-router/es/matchPath.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! path-to-regexp */ './node_modules/react-router/node_modules/path-to-regexp/index.js',
        );
        /* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          path_to_regexp__WEBPACK_IMPORTED_MODULE_0__,
        );

        var patternCache = {};
        var cacheLimit = 10000;
        var cacheCount = 0;

        var compilePath = function compilePath(pattern, options) {
          var cacheKey = '' + options.end + options.strict + options.sensitive;
          var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

          if (cache[pattern]) return cache[pattern];

          var keys = [];
          var re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(
            pattern,
            keys,
            options,
          );
          var compiledPattern = { re: re, keys: keys };

          if (cacheCount < cacheLimit) {
            cache[pattern] = compiledPattern;
            cacheCount++;
          }

          return compiledPattern;
        };

        /**
         * Public API for matching a URL pathname to a path pattern.
         */
        var matchPath = function matchPath(pathname) {
          var options =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var parent = arguments[2];

          if (typeof options === 'string') options = { path: options };

          var _options = options,
            path = _options.path,
            _options$exact = _options.exact,
            exact = _options$exact === undefined ? false : _options$exact,
            _options$strict = _options.strict,
            strict = _options$strict === undefined ? false : _options$strict,
            _options$sensitive = _options.sensitive,
            sensitive =
              _options$sensitive === undefined ? false : _options$sensitive;

          if (path == null) return parent;

          var _compilePath = compilePath(path, {
              end: exact,
              strict: strict,
              sensitive: sensitive,
            }),
            re = _compilePath.re,
            keys = _compilePath.keys;

          var match = re.exec(pathname);

          if (!match) return null;

          var url = match[0],
            values = match.slice(1);

          var isExact = pathname === url;

          if (exact && !isExact) return null;

          return {
            path: path, // the path pattern used to match
            url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
            isExact: isExact, // whether or not we matched exactly
            params: keys.reduce(function(memo, key, index) {
              memo[key.name] = values[index];
              return memo;
            }, {}),
          };
        };

        /* harmony default export */ __webpack_exports__['default'] = matchPath;

        /***/
      },

    /***/ './node_modules/react-router/es/withRouter.js':
      /*!****************************************************!*\
  !*** ./node_modules/react-router/es/withRouter.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! hoist-non-react-statics */ './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js',
        );
        /* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./Route */ './node_modules/react-router/es/Route.js',
        );
        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        /**
         * A public higher-order component to access the imperative API
         */
        var withRouter = function withRouter(Component) {
          var C = function C(props) {
            var wrappedComponentRef = props.wrappedComponentRef,
              remainingProps = _objectWithoutProperties(props, [
                'wrappedComponentRef',
              ]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Route__WEBPACK_IMPORTED_MODULE_3__['default'],
              {
                children: function children(routeComponentProps) {
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    Component,
                    _extends({}, remainingProps, routeComponentProps, {
                      ref: wrappedComponentRef,
                    }),
                  );
                },
              },
            );
          };

          C.displayName =
            'withRouter(' + (Component.displayName || Component.name) + ')';
          C.WrappedComponent = Component;
          C.propTypes = {
            wrappedComponentRef:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
          };

          return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(
            C,
            Component,
          );
        };

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = withRouter;

        /***/
      },

    /***/ './node_modules/react-router/node_modules/isarray/index.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/react-router/node_modules/isarray/index.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          Array.isArray ||
          function(arr) {
            return Object.prototype.toString.call(arr) == '[object Array]';
          };

        /***/
      },

    /***/ './node_modules/react-router/node_modules/path-to-regexp/index.js':
      /*!************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var isarray = __webpack_require__(
          /*! isarray */ './node_modules/react-router/node_modules/isarray/index.js',
        );

        /**
         * Expose `pathToRegexp`.
         */
        module.exports = pathToRegexp;
        module.exports.parse = parse;
        module.exports.compile = compile;
        module.exports.tokensToFunction = tokensToFunction;
        module.exports.tokensToRegExp = tokensToRegExp;

        /**
         * The main path matching regexp utility.
         *
         * @type {RegExp}
         */
        var PATH_REGEXP = new RegExp(
          [
            // Match escaped characters that would otherwise appear in future matches.
            // This allows the user to escape special characters that won't transform.
            '(\\\\.)',
            // Match Express-style parameters and un-named parameters with a prefix
            // and optional suffixes. Matches appear as:
            //
            // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
            // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
            // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
          ].join('|'),
          'g',
        );

        /**
         * Parse a string for the raw tokens.
         *
         * @param  {string}  str
         * @param  {Object=} options
         * @return {!Array}
         */
        function parse(str, options) {
          var tokens = [];
          var key = 0;
          var index = 0;
          var path = '';
          var defaultDelimiter = (options && options.delimiter) || '/';
          var res;

          while ((res = PATH_REGEXP.exec(str)) != null) {
            var m = res[0];
            var escaped = res[1];
            var offset = res.index;
            path += str.slice(index, offset);
            index = offset + m.length;

            // Ignore already escaped sequences.
            if (escaped) {
              path += escaped[1];
              continue;
            }

            var next = str[index];
            var prefix = res[2];
            var name = res[3];
            var capture = res[4];
            var group = res[5];
            var modifier = res[6];
            var asterisk = res[7];

            // Push the current path onto the tokens.
            if (path) {
              tokens.push(path);
              path = '';
            }

            var partial = prefix != null && next != null && next !== prefix;
            var repeat = modifier === '+' || modifier === '*';
            var optional = modifier === '?' || modifier === '*';
            var delimiter = res[2] || defaultDelimiter;
            var pattern = capture || group;

            tokens.push({
              name: name || key++,
              prefix: prefix || '',
              delimiter: delimiter,
              optional: optional,
              repeat: repeat,
              partial: partial,
              asterisk: !!asterisk,
              pattern: pattern
                ? escapeGroup(pattern)
                : asterisk
                ? '.*'
                : '[^' + escapeString(delimiter) + ']+?',
            });
          }

          // Match any characters still remaining.
          if (index < str.length) {
            path += str.substr(index);
          }

          // If the path exists, push it onto the end.
          if (path) {
            tokens.push(path);
          }

          return tokens;
        }

        /**
         * Compile a string to a template function for the path.
         *
         * @param  {string}             str
         * @param  {Object=}            options
         * @return {!function(Object=, Object=)}
         */
        function compile(str, options) {
          return tokensToFunction(parse(str, options));
        }

        /**
         * Prettier encoding of URI path segments.
         *
         * @param  {string}
         * @return {string}
         */
        function encodeURIComponentPretty(str) {
          return encodeURI(str).replace(/[\/?#]/g, function(c) {
            return (
              '%' +
              c
                .charCodeAt(0)
                .toString(16)
                .toUpperCase()
            );
          });
        }

        /**
         * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
         *
         * @param  {string}
         * @return {string}
         */
        function encodeAsterisk(str) {
          return encodeURI(str).replace(/[?#]/g, function(c) {
            return (
              '%' +
              c
                .charCodeAt(0)
                .toString(16)
                .toUpperCase()
            );
          });
        }

        /**
         * Expose a method for transforming tokens into the path function.
         */
        function tokensToFunction(tokens) {
          // Compile all the tokens into regexps.
          var matches = new Array(tokens.length);

          // Compile all the patterns before compilation.
          for (var i = 0; i < tokens.length; i++) {
            if (typeof tokens[i] === 'object') {
              matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
            }
          }

          return function(obj, opts) {
            var path = '';
            var data = obj || {};
            var options = opts || {};
            var encode = options.pretty
              ? encodeURIComponentPretty
              : encodeURIComponent;

            for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i];

              if (typeof token === 'string') {
                path += token;

                continue;
              }

              var value = data[token.name];
              var segment;

              if (value == null) {
                if (token.optional) {
                  // Prepend partial segment prefixes.
                  if (token.partial) {
                    path += token.prefix;
                  }

                  continue;
                } else {
                  throw new TypeError(
                    'Expected "' + token.name + '" to be defined',
                  );
                }
              }

              if (isarray(value)) {
                if (!token.repeat) {
                  throw new TypeError(
                    'Expected "' +
                      token.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(value) +
                      '`',
                  );
                }

                if (value.length === 0) {
                  if (token.optional) {
                    continue;
                  } else {
                    throw new TypeError(
                      'Expected "' + token.name + '" to not be empty',
                    );
                  }
                }

                for (var j = 0; j < value.length; j++) {
                  segment = encode(value[j]);

                  if (!matches[i].test(segment)) {
                    throw new TypeError(
                      'Expected all "' +
                        token.name +
                        '" to match "' +
                        token.pattern +
                        '", but received `' +
                        JSON.stringify(segment) +
                        '`',
                    );
                  }

                  path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }

                continue;
              }

              segment = token.asterisk ? encodeAsterisk(value) : encode(value);

              if (!matches[i].test(segment)) {
                throw new TypeError(
                  'Expected "' +
                    token.name +
                    '" to match "' +
                    token.pattern +
                    '", but received "' +
                    segment +
                    '"',
                );
              }

              path += token.prefix + segment;
            }

            return path;
          };
        }

        /**
         * Escape a regular expression string.
         *
         * @param  {string} str
         * @return {string}
         */
        function escapeString(str) {
          return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
        }

        /**
         * Escape the capturing group by escaping special characters and meaning.
         *
         * @param  {string} group
         * @return {string}
         */
        function escapeGroup(group) {
          return group.replace(/([=!:$\/()])/g, '\\$1');
        }

        /**
         * Attach the keys as a property of the regexp.
         *
         * @param  {!RegExp} re
         * @param  {Array}   keys
         * @return {!RegExp}
         */
        function attachKeys(re, keys) {
          re.keys = keys;
          return re;
        }

        /**
         * Get the flags for a regexp from the options.
         *
         * @param  {Object} options
         * @return {string}
         */
        function flags(options) {
          return options.sensitive ? '' : 'i';
        }

        /**
         * Pull out keys from a regexp.
         *
         * @param  {!RegExp} path
         * @param  {!Array}  keys
         * @return {!RegExp}
         */
        function regexpToRegexp(path, keys) {
          // Use a negative lookahead to match only capturing groups.
          var groups = path.source.match(/\((?!\?)/g);

          if (groups) {
            for (var i = 0; i < groups.length; i++) {
              keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                partial: false,
                asterisk: false,
                pattern: null,
              });
            }
          }

          return attachKeys(path, keys);
        }

        /**
         * Transform an array into a regexp.
         *
         * @param  {!Array}  path
         * @param  {Array}   keys
         * @param  {!Object} options
         * @return {!RegExp}
         */
        function arrayToRegexp(path, keys, options) {
          var parts = [];

          for (var i = 0; i < path.length; i++) {
            parts.push(pathToRegexp(path[i], keys, options).source);
          }

          var regexp = new RegExp(
            '(?:' + parts.join('|') + ')',
            flags(options),
          );

          return attachKeys(regexp, keys);
        }

        /**
         * Create a path regexp from string input.
         *
         * @param  {string}  path
         * @param  {!Array}  keys
         * @param  {!Object} options
         * @return {!RegExp}
         */
        function stringToRegexp(path, keys, options) {
          return tokensToRegExp(parse(path, options), keys, options);
        }

        /**
         * Expose a function for taking tokens and returning a RegExp.
         *
         * @param  {!Array}          tokens
         * @param  {(Array|Object)=} keys
         * @param  {Object=}         options
         * @return {!RegExp}
         */
        function tokensToRegExp(tokens, keys, options) {
          if (!isarray(keys)) {
            options = /** @type {!Object} */ (keys || options);
            keys = [];
          }

          options = options || {};

          var strict = options.strict;
          var end = options.end !== false;
          var route = '';

          // Iterate over the tokens and create our regexp string.
          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];

            if (typeof token === 'string') {
              route += escapeString(token);
            } else {
              var prefix = escapeString(token.prefix);
              var capture = '(?:' + token.pattern + ')';

              keys.push(token);

              if (token.repeat) {
                capture += '(?:' + prefix + capture + ')*';
              }

              if (token.optional) {
                if (!token.partial) {
                  capture = '(?:' + prefix + '(' + capture + '))?';
                } else {
                  capture = prefix + '(' + capture + ')?';
                }
              } else {
                capture = prefix + '(' + capture + ')';
              }

              route += capture;
            }
          }

          var delimiter = escapeString(options.delimiter || '/');
          var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

          // In non-strict mode we allow a slash at the end of match. If the path to
          // match already ends with a slash, we remove it for consistency. The slash
          // is valid at the end of a path match, not in the middle. This is important
          // in non-ending mode, where "/test/" shouldn't match "/test//route".
          if (!strict) {
            route =
              (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) +
              '(?:' +
              delimiter +
              '(?=$))?';
          }

          if (end) {
            route += '$';
          } else {
            // In non-ending mode, we need the capturing groups to match as much as
            // possible by using a positive lookahead to the end or next path segment.
            route +=
              strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
          }

          return attachKeys(new RegExp('^' + route, flags(options)), keys);
        }

        /**
         * Normalize the given path string, returning a regular expression.
         *
         * An empty array can be passed in for the keys, which will hold the
         * placeholder key descriptions. For example, using `/user/:id`, `keys` will
         * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
         *
         * @param  {(string|RegExp|Array)} path
         * @param  {(Array|Object)=}       keys
         * @param  {Object=}               options
         * @return {!RegExp}
         */
        function pathToRegexp(path, keys, options) {
          if (!isarray(keys)) {
            options = /** @type {!Object} */ (keys || options);
            keys = [];
          }

          options = options || {};

          if (path instanceof RegExp) {
            return regexpToRegexp(path, /** @type {!Array} */ (keys));
          }

          if (isarray(path)) {
            return arrayToRegexp(
              /** @type {!Array} */ (path),
              /** @type {!Array} */ (keys),
              options,
            );
          }

          return stringToRegexp(
            /** @type {string} */ (path),
            /** @type {!Array} */ (keys),
            options,
          );
        }

        /***/
      },

    /***/ './node_modules/react-router/node_modules/warning/warning.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/react-router/node_modules/warning/warning.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var __DEV__ = 'development' !== 'production';

        var warning = function() {};

        if (__DEV__) {
          var printWarning = function printWarning(format, args) {
            var len = arguments.length;
            args = new Array(len > 2 ? len - 2 : 0);
            for (var key = 2; key < len; key++) {
              args[key - 2] = arguments[key];
            }
            var argIndex = 0;
            var message =
              'Warning: ' +
              format.replace(/%s/g, function() {
                return args[argIndex++];
              });
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };

          warning = function(condition, format, args) {
            var len = arguments.length;
            args = new Array(len > 2 ? len - 2 : 0);
            for (var key = 2; key < len; key++) {
              args[key - 2] = arguments[key];
            }
            if (format === undefined) {
              throw new Error(
                '`warning(condition, format, ...args)` requires a warning ' +
                  'message argument',
              );
            }
            if (!condition) {
              printWarning.apply(null, [format].concat(args));
            }
          };
        }

        module.exports = warning;

        /***/
      },

    /***/ './node_modules/resolve-pathname/index.js':
      /*!************************************************!*\
  !*** ./node_modules/resolve-pathname/index.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        function isAbsolute(pathname) {
          return pathname.charAt(0) === '/';
        }

        // About 1.5x faster than the two-arg version of Array#splice()
        function spliceOne(list, index) {
          for (
            var i = index, k = i + 1, n = list.length;
            k < n;
            i += 1, k += 1
          ) {
            list[i] = list[k];
          }

          list.pop();
        }

        // This implementation is based heavily on node's url.parse
        function resolvePathname(to) {
          var from =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : '';

          var toParts = (to && to.split('/')) || [];
          var fromParts = (from && from.split('/')) || [];

          var isToAbs = to && isAbsolute(to);
          var isFromAbs = from && isAbsolute(from);
          var mustEndAbs = isToAbs || isFromAbs;

          if (to && isAbsolute(to)) {
            // to is absolute
            fromParts = toParts;
          } else if (toParts.length) {
            // to is relative, drop the filename
            fromParts.pop();
            fromParts = fromParts.concat(toParts);
          }

          if (!fromParts.length) return '/';

          var hasTrailingSlash = void 0;
          if (fromParts.length) {
            var last = fromParts[fromParts.length - 1];
            hasTrailingSlash = last === '.' || last === '..' || last === '';
          } else {
            hasTrailingSlash = false;
          }

          var up = 0;
          for (var i = fromParts.length; i >= 0; i--) {
            var part = fromParts[i];

            if (part === '.') {
              spliceOne(fromParts, i);
            } else if (part === '..') {
              spliceOne(fromParts, i);
              up++;
            } else if (up) {
              spliceOne(fromParts, i);
              up--;
            }
          }

          if (!mustEndAbs)
            for (; up--; up) {
              fromParts.unshift('..');
            }
          if (
            mustEndAbs &&
            fromParts[0] !== '' &&
            (!fromParts[0] || !isAbsolute(fromParts[0]))
          )
            fromParts.unshift('');

          var result = fromParts.join('/');

          if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

          return result;
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = resolvePathname;

        /***/
      },

    /***/ './node_modules/style-loader/lib/addStyles.js':
      /*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

        var stylesInDom = {};

        var memoize = function(fn) {
          var memo;

          return function() {
            if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
            return memo;
          };
        };

        var isOldIE = memoize(function() {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          return window && document && document.all && !window.atob;
        });

        var getTarget = function(target, parent) {
          if (parent) {
            return parent.querySelector(target);
          }
          return document.querySelector(target);
        };

        var getElement = (function(fn) {
          var memo = {};

          return function(target, parent) {
            // If passing function in options, then use it for resolve "head" element.
            // Useful for Shadow Root style i.e
            // {
            //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
            // }
            if (typeof target === 'function') {
              return target();
            }
            if (typeof memo[target] === 'undefined') {
              var styleTarget = getTarget.call(this, target, parent);
              // Special case to return head of iframe instead of iframe itself
              if (
                window.HTMLIFrameElement &&
                styleTarget instanceof window.HTMLIFrameElement
              ) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  styleTarget = null;
                }
              }
              memo[target] = styleTarget;
            }
            return memo[target];
          };
        })();

        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];

        var fixUrls = __webpack_require__(
          /*! ./urls */ './node_modules/style-loader/lib/urls.js',
        );

        module.exports = function(list, options) {
          if (typeof DEBUG !== 'undefined' && DEBUG) {
            if (typeof document !== 'object')
              throw new Error(
                'The style-loader cannot be used in a non-browser environment',
              );
          }

          options = options || {};

          options.attrs =
            typeof options.attrs === 'object' ? options.attrs : {};

          // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page
          if (!options.singleton && typeof options.singleton !== 'boolean')
            options.singleton = isOldIE();

          // By default, add <style> tags to the <head> element
          if (!options.insertInto) options.insertInto = 'head';

          // By default, add <style> tags to the bottom of the target
          if (!options.insertAt) options.insertAt = 'bottom';

          var styles = listToStyles(list, options);

          addStylesToDom(styles, options);

          return function update(newList) {
            var mayRemove = [];

            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              domStyle.refs--;
              mayRemove.push(domStyle);
            }

            if (newList) {
              var newStyles = listToStyles(newList, options);
              addStylesToDom(newStyles, options);
            }

            for (var i = 0; i < mayRemove.length; i++) {
              var domStyle = mayRemove[i];

              if (domStyle.refs === 0) {
                for (var j = 0; j < domStyle.parts.length; j++)
                  domStyle.parts[j]();

                delete stylesInDom[domStyle.id];
              }
            }
          };
        };

        function addStylesToDom(styles, options) {
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];

            if (domStyle) {
              domStyle.refs++;

              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
              }

              for (; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j], options));
              }
            } else {
              var parts = [];

              for (var j = 0; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], options));
              }

              stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
            }
          }
        }

        function listToStyles(list, options) {
          var styles = [];
          var newStyles = {};

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = { css: css, media: media, sourceMap: sourceMap };

            if (!newStyles[id])
              styles.push((newStyles[id] = { id: id, parts: [part] }));
            else newStyles[id].parts.push(part);
          }

          return styles;
        }

        function insertStyleElement(options, style) {
          var target = getElement(options.insertInto);

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
            );
          }

          var lastStyleElementInsertedAtTop =
            stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

          if (options.insertAt === 'top') {
            if (!lastStyleElementInsertedAtTop) {
              target.insertBefore(style, target.firstChild);
            } else if (lastStyleElementInsertedAtTop.nextSibling) {
              target.insertBefore(
                style,
                lastStyleElementInsertedAtTop.nextSibling,
              );
            } else {
              target.appendChild(style);
            }
            stylesInsertedAtTop.push(style);
          } else if (options.insertAt === 'bottom') {
            target.appendChild(style);
          } else if (
            typeof options.insertAt === 'object' &&
            options.insertAt.before
          ) {
            var nextSibling = getElement(options.insertAt.before, target);
            target.insertBefore(style, nextSibling);
          } else {
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
            );
          }
        }

        function removeStyleElement(style) {
          if (style.parentNode === null) return false;
          style.parentNode.removeChild(style);

          var idx = stylesInsertedAtTop.indexOf(style);
          if (idx >= 0) {
            stylesInsertedAtTop.splice(idx, 1);
          }
        }

        function createStyleElement(options) {
          var style = document.createElement('style');

          if (options.attrs.type === undefined) {
            options.attrs.type = 'text/css';
          }

          if (options.attrs.nonce === undefined) {
            var nonce = getNonce();
            if (nonce) {
              options.attrs.nonce = nonce;
            }
          }

          addAttrs(style, options.attrs);
          insertStyleElement(options, style);

          return style;
        }

        function createLinkElement(options) {
          var link = document.createElement('link');

          if (options.attrs.type === undefined) {
            options.attrs.type = 'text/css';
          }
          options.attrs.rel = 'stylesheet';

          addAttrs(link, options.attrs);
          insertStyleElement(options, link);

          return link;
        }

        function addAttrs(el, attrs) {
          Object.keys(attrs).forEach(function(key) {
            el.setAttribute(key, attrs[key]);
          });
        }

        function getNonce() {
          if (false) {
          }

          return __webpack_require__.nc;
        }

        function addStyle(obj, options) {
          var style, update, remove, result;

          // If a transform function was defined, run it on the css
          if (options.transform && obj.css) {
            result =
              typeof options.transform === 'function'
                ? options.transform(obj.css)
                : options.transform.default(obj.css);

            if (result) {
              // If transform returns a value, use that instead of the original css.
              // This allows running runtime transformations on the css.
              obj.css = result;
            } else {
              // If the transform function returns a falsy value, don't add this css.
              // This allows conditional loading of css
              return function() {
                // noop
              };
            }
          }

          if (options.singleton) {
            var styleIndex = singletonCounter++;

            style = singleton || (singleton = createStyleElement(options));

            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else if (
            obj.sourceMap &&
            typeof URL === 'function' &&
            typeof URL.createObjectURL === 'function' &&
            typeof URL.revokeObjectURL === 'function' &&
            typeof Blob === 'function' &&
            typeof btoa === 'function'
          ) {
            style = createLinkElement(options);
            update = updateLink.bind(null, style, options);
            remove = function() {
              removeStyleElement(style);

              if (style.href) URL.revokeObjectURL(style.href);
            };
          } else {
            style = createStyleElement(options);
            update = applyToTag.bind(null, style);
            remove = function() {
              removeStyleElement(style);
            };
          }

          update(obj);

          return function updateStyle(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap
              ) {
                return;
              }

              update((obj = newObj));
            } else {
              remove();
            }
          };
        }

        var replaceText = (function() {
          var textStore = [];

          return function(index, replacement) {
            textStore[index] = replacement;

            return textStore.filter(Boolean).join('\n');
          };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? '' : obj.css;

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) style.removeChild(childNodes[index]);

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, obj) {
          var css = obj.css;
          var media = obj.media;

          if (media) {
            style.setAttribute('media', media);
          }

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        function updateLink(link, options, obj) {
          var css = obj.css;
          var sourceMap = obj.sourceMap;

          /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
          var autoFixUrls =
            options.convertToAbsoluteUrls === undefined && sourceMap;

          if (options.convertToAbsoluteUrls || autoFixUrls) {
            css = fixUrls(css);
          }

          if (sourceMap) {
            // http://stackoverflow.com/a/26603875
            css +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
              ' */';
          }

          var blob = new Blob([css], { type: 'text/css' });

          var oldSrc = link.href;

          link.href = URL.createObjectURL(blob);

          if (oldSrc) URL.revokeObjectURL(oldSrc);
        }

        /***/
      },

    /***/ './node_modules/style-loader/lib/urls.js':
      /*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /**
         * When source maps are enabled, `style-loader` uses a link element with a data-uri to
         * embed the css on the page. This breaks all relative urls because now they are relative to a
         * bundle instead of the current page.
         *
         * One solution is to only use full urls, but that may be impossible.
         *
         * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
         *
         * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
         *
         */

        module.exports = function(css) {
          // get current location
          var location = typeof window !== 'undefined' && window.location;

          if (!location) {
            throw new Error('fixUrls requires window.location');
          }

          // blank or null?
          if (!css || typeof css !== 'string') {
            return css;
          }

          var baseUrl = location.protocol + '//' + location.host;
          var currentDir =
            baseUrl + location.pathname.replace(/\/[^\/]*$/, '/');

          // convert each url(...)
          /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
          var fixedCss = css.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function(fullMatch, origUrl) {
              // strip quotes (if they exist)
              var unquotedOrigUrl = origUrl
                .trim()
                .replace(/^"(.*)"$/, function(o, $1) {
                  return $1;
                })
                .replace(/^'(.*)'$/, function(o, $1) {
                  return $1;
                });

              // already a full url? no change
              if (
                /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                  unquotedOrigUrl,
                )
              ) {
                return fullMatch;
              }

              // convert the url to a full url
              var newUrl;

              if (unquotedOrigUrl.indexOf('//') === 0) {
                //TODO: should we add protocol?
                newUrl = unquotedOrigUrl;
              } else if (unquotedOrigUrl.indexOf('/') === 0) {
                // path should be relative to the base url
                newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
              } else {
                // path should be relative to current directory
                newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
              }

              // send back the fixed url(...)
              return 'url(' + JSON.stringify(newUrl) + ')';
            },
          );

          // send back the fixed css
          return fixedCss;
        };

        /***/
      },

    /***/ './node_modules/uniqid/index.js':
      /*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        /* 
(The MIT License)
Copyright (c) 2014 Halász Ádám <mail@adamhalasz.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

        //  Unique Hexatridecimal ID Generator
        // ================================================

        //  Dependencies
        // ================================================
        var pid = process && process.pid ? process.pid.toString(36) : '';
        var address = '';
        if (false) {
          var i, mac, networkInterfaces;
        }

        //  Exports
        // ================================================
        module.exports = module.exports.default = function(prefix) {
          return (prefix || '') + address + pid + now().toString(36);
        };
        module.exports.process = function(prefix) {
          return (prefix || '') + pid + now().toString(36);
        };
        module.exports.time = function(prefix) {
          return (prefix || '') + now().toString(36);
        };

        //  Helpers
        // ================================================
        function now() {
          var time = Date.now();
          var last = now.last || time;
          return (now.last = time > last ? time : last + 1);
        }

        /***/
      },

    /***/ './node_modules/value-equal/index.js':
      /*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        var _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        function valueEqual(a, b) {
          if (a === b) return true;

          if (a == null || b == null) return false;

          if (Array.isArray(a)) {
            return (
              Array.isArray(b) &&
              a.length === b.length &&
              a.every(function(item, index) {
                return valueEqual(item, b[index]);
              })
            );
          }

          var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
          var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

          if (aType !== bType) return false;

          if (aType === 'object') {
            var aValue = a.valueOf();
            var bValue = b.valueOf();

            if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

            var aKeys = Object.keys(a);
            var bKeys = Object.keys(b);

            if (aKeys.length !== bKeys.length) return false;

            return aKeys.every(function(key) {
              return valueEqual(a[key], b[key]);
            });
          }

          return false;
        }

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = valueEqual;

        /***/
      },

    /***/ './node_modules/warning/warning.js':
      /*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright 2014-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */

        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var __DEV__ = 'development' !== 'production';

        var warning = function() {};

        if (__DEV__) {
          warning = function(condition, format, args) {
            var len = arguments.length;
            args = new Array(len > 2 ? len - 2 : 0);
            for (var key = 2; key < len; key++) {
              args[key - 2] = arguments[key];
            }
            if (format === undefined) {
              throw new Error(
                '`warning(condition, format, ...args)` requires a warning ' +
                  'message argument',
              );
            }

            if (format.length < 10 || /^[s\W]*$/.test(format)) {
              throw new Error(
                'The warning format should be able to uniquely identify this ' +
                  'warning. Please, use a more descriptive format than: ' +
                  format,
              );
            }

            if (!condition) {
              var argIndex = 0;
              var message =
                'Warning: ' +
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                });
              if (typeof console !== 'undefined') {
                console.error(message);
              }
              try {
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
              } catch (x) {}
            }
          };
        }

        module.exports = warning;

        /***/
      },

    /***/ './src/components/Avatar/Avatar.js':
      /*!*****************************************!*\
  !*** ./src/components/Avatar/Avatar.js ***!
  \*****************************************/
      /*! exports provided: Avatar */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Avatar',
          function() {
            return Avatar;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Avatar extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { type, size, name, className } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['type', 'size', 'name', 'className']);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Avatar`;
            const shortName = name.substr(0, 1);
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'i',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()({}, props, {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                  base,
                  size ===
                    _constants__WEBPACK_IMPORTED_MODULE_4__[
                      'AVATAR_SIZE_LARGE'
                    ] && `${base}--large`,
                  type === 'tenant' ? `${base}--tenant` : `${base}--user`,
                  className,
                ),
              }),
              shortName,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Avatar, 'propTypes', {
          name: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          size: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOf'])([
            _constants__WEBPACK_IMPORTED_MODULE_4__['AVATAR_SIZE_MEDIUM'],
            _constants__WEBPACK_IMPORTED_MODULE_4__['AVATAR_SIZE_LARGE'],
          ]),
          type: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOf'])([
            _constants__WEBPACK_IMPORTED_MODULE_4__['AVATAR_TYPE_USER'],
            _constants__WEBPACK_IMPORTED_MODULE_4__['AVATAR_TYPE_TENANT'],
          ]).isRequired,
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Avatar, 'defaultProps', {
          className: null,
          size: _constants__WEBPACK_IMPORTED_MODULE_4__['AVATAR_SIZE_MEDIUM'],
        });

        /***/
      },

    /***/ './src/components/Avatar/index.js':
      /*!****************************************!*\
  !*** ./src/components/Avatar/index.js ***!
  \****************************************/
      /*! exports provided: Avatar */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Avatar */ './src/components/Avatar/Avatar.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Avatar',
          function() {
            return _Avatar__WEBPACK_IMPORTED_MODULE_0__['Avatar'];
          },
        );

        /***/
      },

    /***/ './src/components/Button/Button.js':
      /*!*****************************************!*\
  !*** ./src/components/Button/Button.js ***!
  \*****************************************/
      /*! exports provided: Button */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Button',
          function() {
            return Button;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        const Button = (_ref) => {
          let {
              className,
              color,
              outline,
              children,
              selectable,
              disabled,
              tag,
              icon,
            } = _ref,
            props = !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(_ref, [
              'className',
              'color',
              'outline',
              'children',
              'selectable',
              'disabled',
              'tag',
              'icon',
            ]);

          const base = `${
            _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
          }Button`;
          const Element = tag || 'button';
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            Element,
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()({}, props, {
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                base,
                color && `${base}--${color}`,
                outline && `${base}--outline`,
                icon && `${base}--icon`,
                selectable && `${base}--selectable`,
                disabled ? 'is-disabled' : '',
                className,
              ),
              'data-icon': icon || undefined,
            }),
            children,
          );
        };

        Button.propTypes = {
          tag: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          selectable: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          outline: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          icon: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          color: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        };
        Button.defaultProps = {
          tag: 'button',
          className: null,
          selectable: false,
          disabled: false,
          icon: '',
          outline: false,
          children: null,
          color: '',
        };

        /***/
      },

    /***/ './src/components/Button/index.js':
      /*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
      /*! exports provided: Button */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Button */ './src/components/Button/Button.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Button',
          function() {
            return _Button__WEBPACK_IMPORTED_MODULE_0__['Button'];
          },
        );

        /***/
      },

    /***/ './src/components/Card/Card.js':
      /*!*************************************!*\
  !*** ./src/components/Card/Card.js ***!
  \*************************************/
      /*! exports provided: Card */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Card',
          function() {
            return Card;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../propTypes */ './src/propTypes.js',
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );
        /* harmony import */ var _content_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../content/Image */ './src/content/Image/index.js',
        );
        /* harmony import */ var _content_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../content/Link */ './src/content/Link/index.js',
        );

        class Card extends react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'] {
          render() {
            const _this$props = this.props,
              {
                children,
                image,
                title,
                description,
                action,
                color,
                selectable,
                className,
                disabled,
                to,
              } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'children',
                'image',
                'title',
                'description',
                'action',
                'color',
                'selectable',
                'className',
                'disabled',
                'to',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
            }Card`;
            const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              base,
              color && `${base}--${color}`,
              selectable && `${base}--selectable`,
              className,
              disabled && 'is-disabled',
            );
            const Element =
              selectable && !to
                ? 'button'
                : (to && _content_Link__WEBPACK_IMPORTED_MODULE_7__['Link']) ||
                  'div';
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Element,
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  to: to || undefined,
                  normal: to ? true : undefined,
                  className: classes,
                },
                props,
              ),
              image &&
                (typeof image === 'string'
                  ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      _content_Image__WEBPACK_IMPORTED_MODULE_6__['Image'],
                      {
                        className: `Image ${
                          _constants__WEBPACK_IMPORTED_MODULE_5__[
                            'OLT_NAMESPACE'
                          ]
                        }Card-image`,
                        src: image,
                        fluid: true,
                      },
                    )
                  : image),
              (title || description || action) &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  {
                    className: `${
                      _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                    }Card-header`,
                  },
                  title &&
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'div',
                      {
                        className: `${
                          _constants__WEBPACK_IMPORTED_MODULE_5__[
                            'OLT_NAMESPACE'
                          ]
                        }Card-title`,
                      },
                      title,
                    ),
                  description &&
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'div',
                      {
                        className: `${
                          _constants__WEBPACK_IMPORTED_MODULE_5__[
                            'OLT_NAMESPACE'
                          ]
                        }Card-description`,
                      },
                      description,
                    ),
                  action &&
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'div',
                      {
                        className: `${
                          _constants__WEBPACK_IMPORTED_MODULE_5__[
                            'OLT_NAMESPACE'
                          ]
                        }Card-action`,
                      },
                      action,
                    ),
                ),
              children &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  {
                    className: `${
                      _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                    }Card-content`,
                  },
                  children,
                ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Card, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          title: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          description: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          image: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOfType'])([
            prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
            prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          ]),
          action: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          color: _propTypes__WEBPACK_IMPORTED_MODULE_4__['colorProp'],
          selectable: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          to: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Card, 'defaultProps', {
          children: null,
          className: null,
          title: null,
          description: null,
          image: null,
          action: null,
          color: null,
          selectable: false,
          disabled: false,
          to: '',
        });

        /***/
      },

    /***/ './src/components/Card/Divider.js':
      /*!****************************************!*\
  !*** ./src/components/Card/Divider.js ***!
  \****************************************/
      /*! exports provided: Divider */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Divider',
          function() {
            return Divider;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _Divider_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./Divider.scss */ './src/components/Card/Divider.scss',
        );
        /* harmony import */ var _Divider_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _Divider_scss__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        // TODO: Move out of here

        const Divider = (_ref) => {
          let { className } = _ref,
            props = !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(_ref, ['className']);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()({}, props, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                }u-marginLeft3`,
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                }u-marginRight3`,
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                }u-textGray400`,
                _Divider_scss__WEBPACK_IMPORTED_MODULE_4___default.a.divider,
                className,
              ),
            }),
          );
        };
        Divider.propTypes = {
          className: prop_types__WEBPACK_IMPORTED_MODULE_3__['string'],
        };
        Divider.defaultProps = {
          className: null,
        };

        /***/
      },

    /***/ './src/components/Card/Divider.scss':
      /*!******************************************!*\
  !*** ./src/components/Card/Divider.scss ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-3-3!./Divider.scss */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js?!./src/components/Card/Divider.scss',
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js',
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
      },

    /***/ './src/components/Card/index.js':
      /*!**************************************!*\
  !*** ./src/components/Card/index.js ***!
  \**************************************/
      /*! exports provided: Card, Divider */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Card */ './src/components/Card/Card.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Card',
          function() {
            return _Card__WEBPACK_IMPORTED_MODULE_0__['Card'];
          },
        );

        /* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Divider */ './src/components/Card/Divider.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Divider',
          function() {
            return _Divider__WEBPACK_IMPORTED_MODULE_1__['Divider'];
          },
        );

        /***/
      },

    /***/ './src/components/Dropdown/Dropdown.js':
      /*!*********************************************!*\
  !*** ./src/components/Dropdown/Dropdown.js ***!
  \*********************************************/
      /*! exports provided: Dropdown */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Dropdown',
          function() {
            return Dropdown;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Dropdown extends react__WEBPACK_IMPORTED_MODULE_1__['Component'] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'state', {
              open: false,
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(
              this,
              'dropdownRef',
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(),
            );

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'handleOffClick', (event) => {
              const { current: dropdown } = this.dropdownRef;
              const isContained =
                'contains' in dropdown
                  ? dropdown.contains(event.target)
                  : event.target;

              if (!isContained) {
                this.setState({
                  open: false,
                });
              }
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'handleClick', (event) => {
              const { open } = this.state;
              this.setState({
                open: !open,
              });
            });
          }

          componentDidMount() {
            window.addEventListener('click', this.handleOffClick);
          }

          componentWillUnmount() {
            window.removeEventListener('click', this.handleOffClick);
          }

          render() {
            const _this$props = this.props,
              {
                children,
                className,
                label,
                color,
                outline,
                disabled,
              } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'children',
                'className',
                'label',
                'color',
                'outline',
                'disabled',
              ]);

            const { open } = this.state;
            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Dropdown`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  ref: this.dropdownRef,
                },
                props,
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    base,
                    color && `${base}--${color}`,
                    outline && `${base}--outline`,
                    className,
                    open && `is-open`,
                    disabled && `is-disabled`,
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'button',
                {
                  type: 'button',
                  className: `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Dropdown-label`,
                  onClick: this.handleClick,
                },
                label,
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                {
                  className: `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Dropdown-content`,
                },
                children,
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Dropdown, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          label: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'].isRequired,
          color: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          outline: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Dropdown, 'defaultProps', {
          children: null,
          className: null,
          color: '',
          outline: false,
          disabled: false,
        });

        /***/
      },

    /***/ './src/components/Dropdown/index.js':
      /*!******************************************!*\
  !*** ./src/components/Dropdown/index.js ***!
  \******************************************/
      /*! exports provided: Dropdown */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Dropdown */ './src/components/Dropdown/Dropdown.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Dropdown',
          function() {
            return _Dropdown__WEBPACK_IMPORTED_MODULE_0__['Dropdown'];
          },
        );

        /***/
      },

    /***/ './src/components/Icon/Icon.js':
      /*!*************************************!*\
  !*** ./src/components/Icon/Icon.js ***!
  \*************************************/
      /*! exports provided: Icon */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Icon',
          function() {
            return Icon;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! humps */ './node_modules/humps/humps.js',
        );
        /* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          humps__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        const Icon = (_ref) => {
          let { name, size, color, children, className } = _ref,
            props = !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(_ref, ['name', 'size', 'color', 'children', 'className']);

          const base = `${
            _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
          }Icon`;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'i',
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()({}, props, {
              'data-icon': name,
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                base,
                color && `${base}--${color}`,
                size &&
                  `${
                    _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                  }u-fontSize${Object(
                    humps__WEBPACK_IMPORTED_MODULE_4__['pascalize'],
                  )(size)}`,
                className,
              ),
            }),
          );
        };

        Icon.propTypes = {
          name: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          color: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          size: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
        };
        Icon.defaultProps = {
          className: null,
          color: '',
          size: '',
          children: null,
        };

        /***/
      },

    /***/ './src/components/Icon/index.js':
      /*!**************************************!*\
  !*** ./src/components/Icon/index.js ***!
  \**************************************/
      /*! exports provided: Icon */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Icon */ './src/components/Icon/Icon.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Icon',
          function() {
            return _Icon__WEBPACK_IMPORTED_MODULE_0__['Icon'];
          },
        );

        /***/
      },

    /***/ './src/components/Menu/Menu.js':
      /*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
      /*! exports provided: Menu */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Menu',
          function() {
            return Menu;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );
        /* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./MenuItem */ './src/components/Menu/MenuItem.js',
        );

        class Menu extends react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'] {
          render() {
            const _this$props = this.props,
              {
                children,
                className,
                color,
                outline,
                submenu,
                navbar,
                disabled,
                items,
              } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'children',
                'className',
                'color',
                'outline',
                'submenu',
                'navbar',
                'disabled',
                'items',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Menu`;
            const navbarBase = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Navbar`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()({}, props, {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                  base,
                  color && `${base}--${color}`,
                  outline && `${base}--outline`,
                  submenu && `${base}--sub`,
                  disabled && 'is-disabled',
                  navbar && `${navbarBase}-menu`,
                ),
              }),
              items.length > 0
                ? items.map((_ref) => {
                    let { label } = _ref,
                      itemProps = !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                        );
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                      })()(_ref, ['label']);

                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      _MenuItem__WEBPACK_IMPORTED_MODULE_5__['MenuItem'],
                      !(function webpackMissingModule() {
                        var e = new Error(
                          "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                        );
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                      })()(
                        {
                          key: `${label}`,
                        },
                        itemProps,
                      ),
                      label,
                    );
                  })
                : children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Menu, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          color: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          outline: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          submenu: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          navbar: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          items: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['arrayOf'])(
            Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['shape'])({
              label: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
              to: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
              target: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
            }),
          ),
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Menu, 'defaultProps', {
          children: null,
          className: null,
          color: '',
          outline: false,
          submenu: false,
          navbar: false,
          disabled: false,
          items: [],
        });

        /***/
      },

    /***/ './src/components/Menu/MenuItem.js':
      /*!*****************************************!*\
  !*** ./src/components/Menu/MenuItem.js ***!
  \*****************************************/
      /*! exports provided: MenuItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItem',
          function() {
            return MenuItem;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );
        /* harmony import */ var _content_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../content/Link */ './src/content/Link/index.js',
        );

        class MenuItem extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { className, children, to, active } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['className', 'children', 'to', 'active']);

            const Element = to
              ? _content_Link__WEBPACK_IMPORTED_MODULE_5__['Link']
              : 'span';
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                  `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Menu-item`,
                  className,
                ),
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                Element,
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                  );
                  e.code = 'MODULE_NOT_FOUND';
                  throw e;
                })()(
                  {},
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
                    );
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                  })()(
                    {},
                    props,
                    to
                      ? {
                          to,
                        }
                      : {},
                  ),
                  {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                      `${
                        _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                      }Menu-link`,
                      active && 'is-active',
                    ),
                  },
                ),
                children,
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(MenuItem, 'propTypes', {
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          active: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          to: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(MenuItem, 'defaultProps', {
          className: null,
          children: null,
          active: false,
          to: null,
        });

        /***/
      },

    /***/ './src/components/Menu/index.js':
      /*!**************************************!*\
  !*** ./src/components/Menu/index.js ***!
  \**************************************/
      /*! exports provided: Menu, MenuItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Menu */ './src/components/Menu/Menu.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Menu',
          function() {
            return _Menu__WEBPACK_IMPORTED_MODULE_0__['Menu'];
          },
        );

        /* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./MenuItem */ './src/components/Menu/MenuItem.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItem',
          function() {
            return _MenuItem__WEBPACK_IMPORTED_MODULE_1__['MenuItem'];
          },
        );

        /***/
      },

    /***/ './src/components/Modal/Modal.js':
      /*!***************************************!*\
  !*** ./src/components/Modal/Modal.js ***!
  \***************************************/
      /*! exports provided: Modal */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Modal',
          function() {
            return Modal;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );
        /* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../Button */ './src/components/Button/index.js',
        );
        /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./types */ './src/components/Modal/types.js',
        );

        class Modal extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              {
                children,
                title,
                type,
                open,
                closable,
                fullscreen,
                footer,
                onClose,
                className,
              } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'children',
                'title',
                'type',
                'open',
                'closable',
                'fullscreen',
                'footer',
                'onClose',
                'className',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Modal`;
            document.documentElement.style.overflow = open ? 'hidden' : '';
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'section',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    base,
                    fullscreen && `${base}--fullscreen`,
                    type !== 'none' && `${base}--${type}`,
                    open && 'is-open',
                    className,
                  ),
                },
                closable
                  ? {
                      onClick: (e) => e.target === e.currentTarget && onClose(),
                    }
                  : undefined,
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                  );
                  e.code = 'MODULE_NOT_FOUND';
                  throw e;
                })()(
                  {
                    className: `${base}-dialog`,
                  },
                  props,
                ),
                closable &&
                  !fullscreen &&
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    _Button__WEBPACK_IMPORTED_MODULE_5__['Button'],
                    {
                      icon: 'close',
                      className: `${base}-close`,
                      onClick: onClose,
                    },
                  ),
                title &&
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'div',
                    {
                      className: `${base}-header`,
                    },
                    title,
                  ),
                children &&
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'div',
                    {
                      className: `${base}-content`,
                    },
                    children,
                  ),
                footer &&
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'div',
                    {
                      className: `${base}-footer`,
                    },
                    footer,
                  ),
              ),
              fullscreen &&
                closable &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Button__WEBPACK_IMPORTED_MODULE_5__['Button'],
                  {
                    icon: 'close',
                    className: `${base}-close`,
                    onClick: onClose,
                  },
                ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Modal, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          title: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          type: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOf'])([
            _types__WEBPACK_IMPORTED_MODULE_6__['MODAL_TYPE_ERROR'],
            _types__WEBPACK_IMPORTED_MODULE_6__['MODAL_TYPE_SUCCESS'],
            _types__WEBPACK_IMPORTED_MODULE_6__['MODAL_TYPE_INFO'],
            _types__WEBPACK_IMPORTED_MODULE_6__['MODAL_TYPE_NONE'],
          ]),
          open: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'].isRequired,
          footer: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          fullscreen: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          onClose: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
          closable: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Modal, 'defaultProps', {
          title: null,
          children: null,
          type: _types__WEBPACK_IMPORTED_MODULE_6__['MODAL_TYPE_NONE'],
          fullscreen: false,
          footer: null,
          onClose: null,
          closable: false,
          className: null,
        });

        /***/
      },

    /***/ './src/components/Modal/ModalContent.js':
      /*!**********************************************!*\
  !*** ./src/components/Modal/ModalContent.js ***!
  \**********************************************/
      /*! exports provided: ModalContent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ModalContent',
          function() {
            return ModalContent;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );
        /* harmony import */ var _content_Headline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../content/Headline */ './src/content/Headline/index.js',
        );
        /* harmony import */ var _layout_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../layout/Container */ './src/layout/Container/index.js',
        );

        class ModalContent extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { children, className, headline, error } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['children', 'className', 'headline', 'error']);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    `${
                      _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                    }Modal-inner`,
                    className,
                  ),
                },
                props,
              ),
              headline &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _layout_Container__WEBPACK_IMPORTED_MODULE_6__['Container'],
                  {
                    noPadding: true,
                  },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    _content_Headline__WEBPACK_IMPORTED_MODULE_5__['Headline'],
                    {
                      size: 6,
                    },
                    headline,
                  ),
                ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _layout_Container__WEBPACK_IMPORTED_MODULE_6__['Container'],
                {
                  noPadding: true,
                },
                children,
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(ModalContent, 'propTypes', {
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          headline: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          error: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(ModalContent, 'defaultProps', {
          className: null,
          children: null,
          headline: null,
          error: false,
        });

        /***/
      },

    /***/ './src/components/Modal/ModalFooter.js':
      /*!*********************************************!*\
  !*** ./src/components/Modal/ModalFooter.js ***!
  \*********************************************/
      /*! exports provided: ModalFooter */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ModalFooter',
          function() {
            return ModalFooter;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class ModalFooter extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { children, className } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['children', 'className']);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    `${
                      _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                    }Modal-footer`,
                    className,
                  ),
                },
                props,
              ),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(ModalFooter, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(ModalFooter, 'defaultProps', {
          children: null,
          className: null,
        });

        /***/
      },

    /***/ './src/components/Modal/index.js':
      /*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
      /*! exports provided: Modal, ModalContent, ModalFooter, MODAL_TYPE_ERROR, MODAL_TYPE_SUCCESS, MODAL_TYPE_INFO, MODAL_TYPE_NONE */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Modal */ './src/components/Modal/Modal.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Modal',
          function() {
            return _Modal__WEBPACK_IMPORTED_MODULE_0__['Modal'];
          },
        );

        /* harmony import */ var _ModalContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ModalContent */ './src/components/Modal/ModalContent.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ModalContent',
          function() {
            return _ModalContent__WEBPACK_IMPORTED_MODULE_1__['ModalContent'];
          },
        );

        /* harmony import */ var _ModalFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ModalFooter */ './src/components/Modal/ModalFooter.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ModalFooter',
          function() {
            return _ModalFooter__WEBPACK_IMPORTED_MODULE_2__['ModalFooter'];
          },
        );

        /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./types */ './src/components/Modal/types.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_ERROR',
          function() {
            return _types__WEBPACK_IMPORTED_MODULE_3__['MODAL_TYPE_ERROR'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_SUCCESS',
          function() {
            return _types__WEBPACK_IMPORTED_MODULE_3__['MODAL_TYPE_SUCCESS'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_INFO',
          function() {
            return _types__WEBPACK_IMPORTED_MODULE_3__['MODAL_TYPE_INFO'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_NONE',
          function() {
            return _types__WEBPACK_IMPORTED_MODULE_3__['MODAL_TYPE_NONE'];
          },
        );

        /***/
      },

    /***/ './src/components/Modal/types.js':
      /*!***************************************!*\
  !*** ./src/components/Modal/types.js ***!
  \***************************************/
      /*! exports provided: MODAL_TYPE_ERROR, MODAL_TYPE_SUCCESS, MODAL_TYPE_INFO, MODAL_TYPE_NONE */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_ERROR',
          function() {
            return MODAL_TYPE_ERROR;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_SUCCESS',
          function() {
            return MODAL_TYPE_SUCCESS;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_INFO',
          function() {
            return MODAL_TYPE_INFO;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_NONE',
          function() {
            return MODAL_TYPE_NONE;
          },
        );
        const MODAL_TYPE_ERROR = 'error';
        const MODAL_TYPE_SUCCESS = 'success';
        const MODAL_TYPE_INFO = 'info';
        const MODAL_TYPE_NONE = 'none';

        /***/
      },

    /***/ './src/components/Navbar/Navbar.js':
      /*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.js ***!
  \*****************************************/
      /*! exports provided: Navbar */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Navbar',
          function() {
            return Navbar;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Navbar extends react__WEBPACK_IMPORTED_MODULE_1__['Component'] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'state', {
              open: false,
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(
              this,
              'navbarRef',
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(),
            );

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'handleOffClick', (event) => {
              const { current: navbar } = this.navbarRef;
              const isContained = navbar.contains
                ? navbar.contains(event.target)
                : event.target;
              const isLink = event.target.closest('*[class*="link"]');

              if (!isContained || isLink) {
                this.setState({
                  open: false,
                });
              }
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'handleClick', (event) => {
              const { open } = this.state;
              this.setState({
                open: !open,
              });
            });
          }

          componentDidMount() {
            window.addEventListener('click', this.handleOffClick);
          }

          componentWillUnmount() {
            window.removeEventListener('click', this.handleOffClick);
          }

          render() {
            const _this$props = this.props,
              {
                children,
                className,
                title,
                home,
                color,
                outline,
              } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'children',
                'className',
                'title',
                'home',
                'color',
                'outline',
              ]);

            const { open } = this.state;
            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Navbar`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'nav',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  ref: this.navbarRef,
                },
                props,
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    base,
                    `${base}--${color}`,
                    outline && `${base}--outline`,
                    open && 'is-open',
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'button',
                {
                  type: 'button',
                  className: `${base}-toggle`,
                  onClick: this.handleClick,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'a',
                {
                  className: `${base}-title`,
                  href: home,
                },
                title,
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                {
                  className: `${base}-content`,
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'a',
                  {
                    className: `${base}-title`,
                    href: home,
                  },
                  title,
                ),
                children,
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Navbar, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          title: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          home: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          color: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          outline: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Navbar, 'defaultProps', {
          children: null,
          className: null,
          title: null,
          home: '/',
          color: 'dark',
          outline: false,
        });

        /***/
      },

    /***/ './src/components/Navbar/index.js':
      /*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
      /*! exports provided: Navbar */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Navbar */ './src/components/Navbar/Navbar.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Navbar',
          function() {
            return _Navbar__WEBPACK_IMPORTED_MODULE_0__['Navbar'];
          },
        );

        /***/
      },

    /***/ './src/components/Snackbar/Snackbar.js':
      /*!*********************************************!*\
  !*** ./src/components/Snackbar/Snackbar.js ***!
  \*********************************************/
      /*! exports provided: Snackbar */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Snackbar',
          function() {
            return Snackbar;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );
        /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./types */ './src/components/Snackbar/types.js',
        );

        class Snackbar extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { children, className, open, hidden, type } = _this$props,
              rest = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'children',
                'className',
                'open',
                'hidden',
                'type',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Snackbar`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    base,
                    type && `${base}--${type}`,
                    open && 'is-open',
                    className,
                  ),
                },
                rest,
              ),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Snackbar, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          open: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          type: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOf'])([
            _types__WEBPACK_IMPORTED_MODULE_5__['SNACKBAR_TYPE_ERROR'],
            _types__WEBPACK_IMPORTED_MODULE_5__['SNACKBAR_TYPE_SUCCESS'],
          ]),
          hidden: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Snackbar, 'defaultProps', {
          open: true,
          className: null,
          type: _types__WEBPACK_IMPORTED_MODULE_5__['SNACKBAR_TYPE_ERROR'],
          children: null,
          hidden: false,
        });

        /***/
      },

    /***/ './src/components/Snackbar/index.js':
      /*!******************************************!*\
  !*** ./src/components/Snackbar/index.js ***!
  \******************************************/
      /*! exports provided: Snackbar */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Snackbar */ './src/components/Snackbar/Snackbar.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Snackbar',
          function() {
            return _Snackbar__WEBPACK_IMPORTED_MODULE_0__['Snackbar'];
          },
        );

        /***/
      },

    /***/ './src/components/Snackbar/types.js':
      /*!******************************************!*\
  !*** ./src/components/Snackbar/types.js ***!
  \******************************************/
      /*! exports provided: SNACKBAR_TYPE_ERROR, SNACKBAR_TYPE_SUCCESS */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SNACKBAR_TYPE_ERROR',
          function() {
            return SNACKBAR_TYPE_ERROR;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SNACKBAR_TYPE_SUCCESS',
          function() {
            return SNACKBAR_TYPE_SUCCESS;
          },
        );
        const SNACKBAR_TYPE_ERROR = 'error';
        const SNACKBAR_TYPE_SUCCESS = 'success';

        /***/
      },

    /***/ './src/components/Stepper/ControlledStepper.js':
      /*!*****************************************************!*\
  !*** ./src/components/Stepper/ControlledStepper.js ***!
  \*****************************************************/
      /*! exports provided: ControlledStepper */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ControlledStepper',
          function() {
            return ControlledStepper;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        // TODO: Let's move this to applicaton level

        class ControlledStepper extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'setStep', (stepId) => {
              const { onChange } = this.props;
              onChange(stepId);
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'nextStep', () => {
              const { currentStepIdx } = this.props;
              this.setStep(currentStepIdx + 1);
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'prevStep', () => {
              const { currentStepIdx } = this.props;
              this.setStep(currentStepIdx - 1);
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'renderNavigationStep', ({ id, label, disabled }) => {
              const { currentStepIdx } = this.props;
              const clickProps = disabled
                ? {}
                : {
                    onClick: () => this.setStep(id),
                  };
              const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Stepper-header`,
                id === currentStepIdx && 'is-active',
              );
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                  );
                  e.code = 'MODULE_NOT_FOUND';
                  throw e;
                })()(
                  {
                    className: classes,
                    role: 'presentation',
                    disabled: disabled,
                  },
                  clickProps,
                  {
                    style: {
                      marginTop: 20,
                      marginBottom: 10,
                    },
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'span',
                  null,
                  label,
                ),
              );
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'renderContent', ({ id, content }) => {
              const { currentStepIdx } = this.props;
              const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Stepper-content`,
                id === currentStepIdx && 'is-active',
              );
              const contentBody =
                typeof content === 'function'
                  ? content({
                      setStep: this.setStep,
                      nextStep: this.nextStep,
                      previousStep: this.previousStep,
                      currentStepIdx,
                    })
                  : content;
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                {
                  className: classes,
                },
                contentBody,
              );
            });
          }

          render() {
            const { className, steps } = this.props;
            const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              `${
                _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
              }Stepper`,
              className,
            );
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'section',
              {
                className: classes,
              },
              steps.map((x, i) =>
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_1__['Fragment'],
                  {
                    key: `${x.id}`,
                  },
                  this.renderNavigationStep(x),
                  this.renderContent(x),
                ),
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(ControlledStepper, 'propTypes', {
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          steps: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['arrayOf'])(
            Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['shape'])({
              id: prop_types__WEBPACK_IMPORTED_MODULE_2__['number'].isRequired,
              label:
                prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
              content: Object(
                prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOfType'],
              )([
                prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
                prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
              ]).isRequired,
              disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
            }),
          ).isRequired,
          currentStepIdx: prop_types__WEBPACK_IMPORTED_MODULE_2__['number'],
          // eslint-disable-line
          onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'].isRequired,
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(ControlledStepper, 'defaultProps', {
          className: null,
          currentStepIdx: undefined,
        });

        /***/
      },

    /***/ './src/components/Stepper/Stepper.js':
      /*!*******************************************!*\
  !*** ./src/components/Stepper/Stepper.js ***!
  \*******************************************/
      /*! exports provided: Stepper */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Stepper',
          function() {
            return Stepper;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _ControlledStepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./ControlledStepper */ './src/components/Stepper/ControlledStepper.js',
        );

        class Stepper extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'state', {
              currentStepIdx: 1,
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'change', (idx) => {
              this.setState({
                currentStepIdx: idx,
              });
            });
          }

          static getDerivedStateFromProps({ currentStepIdx }, state) {
            if (currentStepIdx) {
              return {
                currentStepIdx,
              };
            }

            return state;
          }

          render() {
            const { currentStepIdx } = this.state;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _ControlledStepper__WEBPACK_IMPORTED_MODULE_3__[
                'ControlledStepper'
              ],
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  currentStepIdx: currentStepIdx,
                  onChange: this.change,
                },
                this.props,
              ),
            );
          }
        }
        Stepper.propTypes = {
          currentStepIdx: prop_types__WEBPACK_IMPORTED_MODULE_2__['number'],
        };
        Stepper.defaultProps = {
          currentStepIdx: null,
        };

        /***/
      },

    /***/ './src/components/Stepper/index.js':
      /*!*****************************************!*\
  !*** ./src/components/Stepper/index.js ***!
  \*****************************************/
      /*! exports provided: Stepper, ControlledStepper */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Stepper */ './src/components/Stepper/Stepper.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Stepper',
          function() {
            return _Stepper__WEBPACK_IMPORTED_MODULE_0__['Stepper'];
          },
        );

        /* harmony import */ var _ControlledStepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ControlledStepper */ './src/components/Stepper/ControlledStepper.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ControlledStepper',
          function() {
            return _ControlledStepper__WEBPACK_IMPORTED_MODULE_1__[
              'ControlledStepper'
            ];
          },
        );

        /***/
      },

    /***/ './src/components/Tabs/Tab.js':
      /*!************************************!*\
  !*** ./src/components/Tabs/Tab.js ***!
  \************************************/
      /*! exports provided: Tab */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Tab',
          function() {
            return Tab;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );

        class Tab extends react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'handleChange', () => {
              const { onSelect, value } = this.props;
              if (onSelect) onSelect(value);
            });
          }

          render() {
            const { active, label, children } = this.props;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'button',
                {
                  type: 'button',
                  onClick: this.handleChange,
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    'olt-Tabs-header',
                    active && 'is-active',
                  ),
                },
                label,
              ),
              children &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                      'olt-Tabs-content',
                      active && 'is-active',
                    ),
                  },
                  children,
                ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Tab, 'propTypes', {
          value: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          label: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          active: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Tab, 'defaultProps', {
          label: '',
          active: false,
          children: null,
          onSelect: null,
        });

        /***/
      },

    /***/ './src/components/Tabs/Tabs.js':
      /*!*************************************!*\
  !*** ./src/components/Tabs/Tabs.js ***!
  \*************************************/
      /*! exports provided: Tabs */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Tabs',
          function() {
            return Tabs;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Tabs extends react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'] {
          render() {
            const _this$props = this.props,
              {
                value,
                onSelect,
                className,
                children,
                navigation,
              } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'value',
                'onSelect',
                'className',
                'children',
                'navigation',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Tabs`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()({}, props, {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                  base,
                  navigation && `${base}--navigation`,
                  className,
                ),
              }),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(
                children,
                (element) =>
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(
                    element,
                    {
                      onSelect,
                      active: value === element.props.value,
                    },
                  ),
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Tabs, 'propTypes', {
          navigation: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          value: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'].isRequired,
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'].isRequired,
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Tabs, 'defaultProps', {
          className: null,
          navigation: false,
        });

        /***/
      },

    /***/ './src/components/Tabs/index.js':
      /*!**************************************!*\
  !*** ./src/components/Tabs/index.js ***!
  \**************************************/
      /*! exports provided: Tabs, Tab */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Tabs */ './src/components/Tabs/Tabs.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Tabs',
          function() {
            return _Tabs__WEBPACK_IMPORTED_MODULE_0__['Tabs'];
          },
        );

        /* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Tab */ './src/components/Tabs/Tab.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Tab',
          function() {
            return _Tab__WEBPACK_IMPORTED_MODULE_1__['Tab'];
          },
        );

        /***/
      },

    /***/ './src/components/Tag/Tag.js':
      /*!***********************************!*\
  !*** ./src/components/Tag/Tag.js ***!
  \***********************************/
      /*! exports provided: Tag */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Tag',
          function() {
            return Tag;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        // import { colorProp, childrenProp } from '../../propTypes';
        // replaced with string & node, otherwise we need to maintain the prop types
        // definition, which doesn't add a lot of benefits

        class Tag extends react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'handleClick', (e) => {
              const { selectable, onClick } = this.props;

              if (selectable) {
                onClick(e);
              }
            });
          }

          render() {
            const _this$props = this.props,
              {
                className,
                children,
                color,
                outline,
                selectable,
                onClick,
              } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'className',
                'children',
                'color',
                'outline',
                'selectable',
                'onClick',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Tag`;
            const Element = selectable ? 'button' : 'span';
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Element,
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()({}, props, {
                onClick: this.handleClick,
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                  base,
                  onClick && `${base}--selectable`,
                  outline && `${base}--outline`,
                  color && `${base}--${color}`,
                  className,
                ),
              }),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Tag, 'propTypes', {
          className: prop_types__WEBPACK_IMPORTED_MODULE_3__['string'],
          color: prop_types__WEBPACK_IMPORTED_MODULE_3__['string'],
          children: prop_types__WEBPACK_IMPORTED_MODULE_3__['node'],
          outline: prop_types__WEBPACK_IMPORTED_MODULE_3__['bool'],
          selectable: prop_types__WEBPACK_IMPORTED_MODULE_3__['bool'],
          icon: prop_types__WEBPACK_IMPORTED_MODULE_3__['node'],
          onClick: prop_types__WEBPACK_IMPORTED_MODULE_3__['func'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Tag, 'defaultProps', {
          className: null,
          children: null,
          outline: false,
          selectable: false,
          icon: null,
          onClick: null,
          color: null,
        });

        /***/
      },

    /***/ './src/components/Tag/index.js':
      /*!*************************************!*\
  !*** ./src/components/Tag/index.js ***!
  \*************************************/
      /*! exports provided: Tag */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Tag */ './src/components/Tag/Tag.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Tag',
          function() {
            return _Tag__WEBPACK_IMPORTED_MODULE_0__['Tag'];
          },
        );

        /***/
      },

    /***/ './src/components/Tooltip/Tooltip.js':
      /*!*******************************************!*\
  !*** ./src/components/Tooltip/Tooltip.js ***!
  \*******************************************/
      /*! exports provided: Tooltip */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Tooltip',
          function() {
            return Tooltip;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );

        class Tooltip extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          renderMessage() {
            const { message, wide } = this.props;
            return wide
              ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'p',
                  null,
                  message,
                )
              : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'span',
                  null,
                  message,
                );
          }

          render() {
            const _this$props = this.props,
              { children, wide, bottom } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['children', 'wide', 'bottom']);

            const classes = bottom
              ? 'olt-Tooltip olt-Tooltip--bottom'
              : 'olt-Tooltip';
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  className: classes,
                },
                props,
              ),
              children,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                {
                  className: 'olt-Tooltip-content',
                },
                this.renderMessage(),
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Tooltip, 'propTypes', {
          message: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          children:
            prop_types__WEBPACK_IMPORTED_MODULE_2__['element'].isRequired,
          wide: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          bottom: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Tooltip, 'defaultProps', {
          wide: false,
          bottom: false,
        });

        /***/
      },

    /***/ './src/components/Tooltip/index.js':
      /*!*****************************************!*\
  !*** ./src/components/Tooltip/index.js ***!
  \*****************************************/
      /*! exports provided: Tooltip */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Tooltip */ './src/components/Tooltip/Tooltip.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Tooltip',
          function() {
            return _Tooltip__WEBPACK_IMPORTED_MODULE_0__['Tooltip'];
          },
        );

        /***/
      },

    /***/ './src/constants.js':
      /*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
      /*! exports provided: COLOR_PRIMARY, COLOR_SECONDARY, COLOR_ALERT, COLOR_NOTIFY, COLOR_SUCCESS, COLOR_WHITE, COLOR_GRAY_100, COLOR_GRAY_200, COLOR_GRAY_300, COLOR_GRAY_400, COLOR_GRAY_500, COLOR_GRAY_600, COLOR_GRAY_700, COLOR_GRAY_800, COLOR_GRAY_900, COLOR_BLACK, AVATAR_TYPE_USER, AVATAR_TYPE_TENANT, AVATAR_SIZE_MEDIUM, AVATAR_SIZE_LARGE, FONT_SIZE_XXSMALL, FONT_SIZE_XSMALL, FONT_SIZE_SMALL, FONT_SIZE_MEDIUM, FONT_SIZE_LARGE, FONT_SIZE_XLARGE, FONT_SIZE_XXLARGE, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6, ELEMENT_P, ELEMENT_SPAN, PATTERN_TAG, KEY_CODE_SPACE, KEY_CODE_ENTER, KEY_CODE_BACKSPACE, SNACKBAR_TIMEOUT_NORMAL, SNACKBAR_TIMEOUT_SHORT, OLT_NAMESPACE */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_PRIMARY',
          function() {
            return COLOR_PRIMARY;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_SECONDARY',
          function() {
            return COLOR_SECONDARY;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_ALERT',
          function() {
            return COLOR_ALERT;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_NOTIFY',
          function() {
            return COLOR_NOTIFY;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_SUCCESS',
          function() {
            return COLOR_SUCCESS;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_WHITE',
          function() {
            return COLOR_WHITE;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_100',
          function() {
            return COLOR_GRAY_100;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_200',
          function() {
            return COLOR_GRAY_200;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_300',
          function() {
            return COLOR_GRAY_300;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_400',
          function() {
            return COLOR_GRAY_400;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_500',
          function() {
            return COLOR_GRAY_500;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_600',
          function() {
            return COLOR_GRAY_600;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_700',
          function() {
            return COLOR_GRAY_700;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_800',
          function() {
            return COLOR_GRAY_800;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_900',
          function() {
            return COLOR_GRAY_900;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_BLACK',
          function() {
            return COLOR_BLACK;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AVATAR_TYPE_USER',
          function() {
            return AVATAR_TYPE_USER;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AVATAR_TYPE_TENANT',
          function() {
            return AVATAR_TYPE_TENANT;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AVATAR_SIZE_MEDIUM',
          function() {
            return AVATAR_SIZE_MEDIUM;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AVATAR_SIZE_LARGE',
          function() {
            return AVATAR_SIZE_LARGE;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_XXSMALL',
          function() {
            return FONT_SIZE_XXSMALL;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_XSMALL',
          function() {
            return FONT_SIZE_XSMALL;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_SMALL',
          function() {
            return FONT_SIZE_SMALL;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_MEDIUM',
          function() {
            return FONT_SIZE_MEDIUM;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_LARGE',
          function() {
            return FONT_SIZE_LARGE;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_XLARGE',
          function() {
            return FONT_SIZE_XLARGE;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_XXLARGE',
          function() {
            return FONT_SIZE_XXLARGE;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H1',
          function() {
            return ELEMENT_H1;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H2',
          function() {
            return ELEMENT_H2;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H3',
          function() {
            return ELEMENT_H3;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H4',
          function() {
            return ELEMENT_H4;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H5',
          function() {
            return ELEMENT_H5;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H6',
          function() {
            return ELEMENT_H6;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_P',
          function() {
            return ELEMENT_P;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_SPAN',
          function() {
            return ELEMENT_SPAN;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PATTERN_TAG',
          function() {
            return PATTERN_TAG;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'KEY_CODE_SPACE',
          function() {
            return KEY_CODE_SPACE;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'KEY_CODE_ENTER',
          function() {
            return KEY_CODE_ENTER;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'KEY_CODE_BACKSPACE',
          function() {
            return KEY_CODE_BACKSPACE;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SNACKBAR_TIMEOUT_NORMAL',
          function() {
            return SNACKBAR_TIMEOUT_NORMAL;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SNACKBAR_TIMEOUT_SHORT',
          function() {
            return SNACKBAR_TIMEOUT_SHORT;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OLT_NAMESPACE',
          function() {
            return OLT_NAMESPACE;
          },
        );
        const COLOR_PRIMARY = 'primary';
        const COLOR_SECONDARY = 'secondary';
        const COLOR_ALERT = 'alert';
        const COLOR_NOTIFY = 'notify';
        const COLOR_SUCCESS = 'success';
        const COLOR_WHITE = 'white';
        const COLOR_GRAY_100 = 'gray-100';
        const COLOR_GRAY_200 = 'gray-200';
        const COLOR_GRAY_300 = 'gray-300';
        const COLOR_GRAY_400 = 'gray-400';
        const COLOR_GRAY_500 = 'gray-500';
        const COLOR_GRAY_600 = 'gray-600';
        const COLOR_GRAY_700 = 'gray-700';
        const COLOR_GRAY_800 = 'gray-800';
        const COLOR_GRAY_900 = 'gray-900';
        const COLOR_BLACK = 'black';
        const AVATAR_TYPE_USER = 'user';
        const AVATAR_TYPE_TENANT = 'tenant';
        const AVATAR_SIZE_MEDIUM = 'm';
        const AVATAR_SIZE_LARGE = 'l';
        const FONT_SIZE_XXSMALL = 'xxSmall';
        const FONT_SIZE_XSMALL = 'xSmall';
        const FONT_SIZE_SMALL = 'small';
        const FONT_SIZE_MEDIUM = 'medium';
        const FONT_SIZE_LARGE = 'large';
        const FONT_SIZE_XLARGE = 'xLarge';
        const FONT_SIZE_XXLARGE = 'xxLarge';
        const ELEMENT_H1 = 'h1';
        const ELEMENT_H2 = 'h2';
        const ELEMENT_H3 = 'h3';
        const ELEMENT_H4 = 'h4';
        const ELEMENT_H5 = 'h5';
        const ELEMENT_H6 = 'h6';
        const ELEMENT_P = 'p';
        const ELEMENT_SPAN = 'span';
        const PATTERN_TAG = '^[a-zA-Z0-9_]*$';
        const KEY_CODE_SPACE = 32;
        const KEY_CODE_ENTER = 13;
        const KEY_CODE_BACKSPACE = 8;
        const SNACKBAR_TIMEOUT_NORMAL = 6000;
        const SNACKBAR_TIMEOUT_SHORT = 3000;
        const OLT_NAMESPACE = 'olt-';

        /***/
      },

    /***/ './src/content/Headline/Headline.js':
      /*!******************************************!*\
  !*** ./src/content/Headline/Headline.js ***!
  \******************************************/
      /*! exports provided: Headline */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Headline',
          function() {
            return Headline;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! humps */ './node_modules/humps/humps.js',
        );
        /* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          humps__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Headline extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { regular, tag, children, size, className, color } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'regular',
                'tag',
                'children',
                'size',
                'className',
                'color',
              ]);

            const Element = tag || `h${size}`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Element,
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()({}, props, {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(
                  `${
                    _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                  }Headline`,
                  `${
                    _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                  }Headline--${size}`,
                  regular &&
                    `${
                      _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                    }Headline--regular`,
                  color &&
                    `${
                      _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                    }u-text${Object(
                      humps__WEBPACK_IMPORTED_MODULE_3__['pascalize'],
                    )(color)}`,
                  className,
                ),
              }),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Headline, 'propTypes', {
          tag: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          size: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOf'])([
            1,
            2,
            3,
            4,
            5,
            6,
          ]),
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'].isRequired,
          color: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          regular: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Headline, 'defaultProps', {
          tag: null,
          size: 5,
          color: null,
          className: null,
          regular: false,
        });

        /***/
      },

    /***/ './src/content/Headline/index.js':
      /*!***************************************!*\
  !*** ./src/content/Headline/index.js ***!
  \***************************************/
      /*! exports provided: Headline */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Headline */ './src/content/Headline/Headline.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Headline',
          function() {
            return _Headline__WEBPACK_IMPORTED_MODULE_0__['Headline'];
          },
        );

        /***/
      },

    /***/ './src/content/Image/Image.js':
      /*!************************************!*\
  !*** ./src/content/Image/Image.js ***!
  \************************************/
      /*! exports provided: Image */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Image',
          function() {
            return Image;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Image extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const { src, alt, className, fluid } = this.props;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'img',
              {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                  `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Image`,
                  fluid &&
                    `${
                      _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                    }Image--fluid`,
                  className,
                ),
                src: src,
                alt: alt,
              },
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Image, 'propTypes', {
          src: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          alt: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          fluid: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Image, 'defaultProps', {
          alt: null,
          className: null,
          fluid: false,
        });

        /***/
      },

    /***/ './src/content/Image/index.js':
      /*!************************************!*\
  !*** ./src/content/Image/index.js ***!
  \************************************/
      /*! exports provided: Image */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Image */ './src/content/Image/Image.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Image',
          function() {
            return _Image__WEBPACK_IMPORTED_MODULE_0__['Image'];
          },
        );

        /***/
      },

    /***/ './src/content/Link/Link.js':
      /*!**********************************!*\
  !*** ./src/content/Link/Link.js ***!
  \**********************************/
      /*! exports provided: Link */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Link',
          function() {
            return Link;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react-router-dom */ './node_modules/react-router-dom/es/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        /**
         * Combines router navigation with standard link, seasoned with some spicy color schemes
         */

        class Link extends react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'] {
          render() {
            const _this$props = this.props,
              { to, children, className, normal } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['to', 'children', 'className', 'normal']); // React routers matchPath will return a match object if the link matches an
            // internal link otherwise it returns null. Uses the "Route" logic to match.

            const match = Object(
              react_router_dom__WEBPACK_IMPORTED_MODULE_3__['matchPath'],
            )(to, {
              path: '/',
              exact: false,
            });
            const Element = match
              ? react_router_dom__WEBPACK_IMPORTED_MODULE_3__['NavLink']
              : 'a';
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Element,
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {},
                match
                  ? {
                      to,
                    }
                  : {
                      href: to,
                    },
                props,
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(
                    !normal &&
                      `${
                        _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                      }Link`,
                    className,
                  ),
                },
              ),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Link, 'propTypes', {
          to: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          normal: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          children: Node,
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Link, 'defaultProps', {
          normal: false,
          className: null,
          children: null,
        });

        /***/
      },

    /***/ './src/content/Link/index.js':
      /*!***********************************!*\
  !*** ./src/content/Link/index.js ***!
  \***********************************/
      /*! exports provided: Link */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Link */ './src/content/Link/Link.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Link',
          function() {
            return _Link__WEBPACK_IMPORTED_MODULE_0__['Link'];
          },
        );

        /***/
      },

    /***/ './src/content/List/List.js':
      /*!**********************************!*\
  !*** ./src/content/List/List.js ***!
  \**********************************/
      /*! exports provided: List */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'List',
          function() {
            return List;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class List extends react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'] {
          render() {
            const _this$props = this.props,
              { children, className, ordered, definition } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'children',
                'className',
                'ordered',
                'definition',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }List`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'ul',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()({}, props, {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                  base,
                  ordered && `${base}--ordered`,
                  definition && `${base}--definition`,
                  className,
                ),
              }),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(List, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          ordered: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          definition: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(List, 'defaultProps', {
          children: null,
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          ordered: false,
          definition: false,
        });

        /***/
      },

    /***/ './src/content/List/ListItem.js':
      /*!**************************************!*\
  !*** ./src/content/List/ListItem.js ***!
  \**************************************/
      /*! exports provided: ListItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ListItem',
          function() {
            return ListItem;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class ListItem extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { children, className, term } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['children', 'className', 'term']);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }List`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
              null,
              term &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'li',
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                    );
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                  })()({}, props, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                      `${base}-term`,
                      className,
                    ),
                  }),
                  term,
                ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'li',
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                  );
                  e.code = 'MODULE_NOT_FOUND';
                  throw e;
                })()({}, props, {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    `${base}-item`,
                    className,
                  ),
                }),
                children,
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(ListItem, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          term: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(ListItem, 'defaultProps', {
          children: null,
          className: null,
          term: null,
        });

        /***/
      },

    /***/ './src/content/List/index.js':
      /*!***********************************!*\
  !*** ./src/content/List/index.js ***!
  \***********************************/
      /*! exports provided: List, ListItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./List */ './src/content/List/List.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'List',
          function() {
            return _List__WEBPACK_IMPORTED_MODULE_0__['List'];
          },
        );

        /* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./ListItem */ './src/content/List/ListItem.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ListItem',
          function() {
            return _ListItem__WEBPACK_IMPORTED_MODULE_1__['ListItem'];
          },
        );

        /***/
      },

    /***/ './src/content/Paragraph/Paragraph.js':
      /*!********************************************!*\
  !*** ./src/content/Paragraph/Paragraph.js ***!
  \********************************************/
      /*! exports provided: Paragraph */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Paragraph',
          function() {
            return Paragraph;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        const Paragraph = (_ref) => {
          let { className } = _ref,
            props = !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(_ref, ['className']);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()({}, props, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Paragraph`,
                className,
              ),
            }),
          );
        };
        Paragraph.propTypes = {
          className: prop_types__WEBPACK_IMPORTED_MODULE_3__['string'],
        };
        Paragraph.defaultProps = {
          className: null,
        };

        /***/
      },

    /***/ './src/content/Paragraph/index.js':
      /*!****************************************!*\
  !*** ./src/content/Paragraph/index.js ***!
  \****************************************/
      /*! exports provided: Paragraph */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Paragraph */ './src/content/Paragraph/Paragraph.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Paragraph',
          function() {
            return _Paragraph__WEBPACK_IMPORTED_MODULE_0__['Paragraph'];
          },
        );

        /***/
      },

    /***/ './src/content/Table/Table.js':
      /*!************************************!*\
  !*** ./src/content/Table/Table.js ***!
  \************************************/
      /*! exports provided: Table */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Table',
          function() {
            return Table;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Table extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'handleRowClick', (event) => {
              const { selectable, onSelect, rows } = this.props;
              const rowElement = event.target.closest('tr');
              const index = [...rowElement.parentNode.children].indexOf(
                rowElement,
              );
              const row = rows[index];
              selectable && onSelect && onSelect(row);
            });

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'renderRow', (row, rowIndex) => {
              const { children } = this.props;
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'tr',
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    `${
                      _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                    }Table-row`,
                    `${
                      _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                    }Table-row--selectable`,
                  ),
                  key: rowIndex,
                  onClick: this.handleRowClick,
                },
                children.map((cell, cellIndex) => {
                  if (!cell) return cell;
                  const { field } = cell.props;
                  const key = `${field}-${rowIndex}-${cellIndex}`; // eslint-disable-line

                  return Object(
                    react__WEBPACK_IMPORTED_MODULE_1__['cloneElement'],
                  )(cell, {
                    key,
                    field,
                    row,
                    rowIndex,
                    cellIndex,
                  });
                }),
              );
            });
          }

          render() {
            const _this$props = this.props,
              { header, rows, className, selectable, justify } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'header',
                'rows',
                'className',
                'selectable',
                'justify',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Table`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }u-overflowXAuto`,
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'table',
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                  );
                  e.code = 'MODULE_NOT_FOUND';
                  throw e;
                })()(
                  {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                      base,
                      selectable && `${base}--selectable`,
                      justify && `${base}--justify`,
                    ),
                  },
                  props,
                ),
                header,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'tbody',
                  {
                    className: `${base}-body`,
                  },
                  rows.map(this.renderRow),
                ),
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Table, 'propTypes', {
          header: prop_types__WEBPACK_IMPORTED_MODULE_2__['element'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          selectable: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          rows: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['arrayOf'])(
            prop_types__WEBPACK_IMPORTED_MODULE_2__['object'],
          ).isRequired,
          // eslint-disable-line
          children: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['arrayOf'])(
            prop_types__WEBPACK_IMPORTED_MODULE_2__['element'],
          ).isRequired,
          onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
          justify: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Table, 'defaultProps', {
          selectable: false,
          header: null,
          className: '',
          onSelect: null,
          justify: false,
        });

        /***/
      },

    /***/ './src/content/Table/TableCell.js':
      /*!****************************************!*\
  !*** ./src/content/Table/TableCell.js ***!
  \****************************************/
      /*! exports provided: TableCell */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TableCell',
          function() {
            return TableCell;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        /**
         * Define the cell rendering item
         *
         * @props rowIndex dynamic prop, passed from parent
         * @props cellIndex dynamic prop, passed from parent
         * @info the full row will be pass to renderer if defined renderer function
         */

        class TableCell extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          get value() {
            const { row, field, renderer } = this.props;

            try {
              if (typeof renderer === 'function') {
                return renderer(row, field, this);
              }
            } catch (e) {
              console.warn(`Cell renderer error [${field}]`, e); // eslint-disable-line no-console

              return null;
            }

            if (Object.prototype.hasOwnProperty.call(row, field)) {
              return row[field];
            }

            return null;
          }

          render() {
            const _this$props = this.props,
              { row, field, renderer, className } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['row', 'field', 'renderer', 'className']);

            const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              `${
                _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
              }Table-data`,
              className,
            );
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'td',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  className: classes,
                },
                props,
              ),
              ' ',
              this.value,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(TableCell, 'propTypes', {
          /**
           * define the key if object
           */
          field: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          // eslint-disable-line react/no-unused-prop-types

          /**
           * mixed type, could be everything
           */
          row: prop_types__WEBPACK_IMPORTED_MODULE_2__['any'],
          // eslint-disable-line react/forbid-prop-types

          /**
           * optional rendering function
           * @info not use field to resolve the line, always use the row data
           */
          renderer: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(TableCell, 'defaultProps', {
          row: null,
          renderer: null,
          className: null,
        });

        /***/
      },

    /***/ './src/content/Table/TableHead.js':
      /*!****************************************!*\
  !*** ./src/content/Table/TableHead.js ***!
  \****************************************/
      /*! exports provided: TableHead */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TableHead',
          function() {
            return TableHead;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class TableHead extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const { labels, className } = this.props;
            const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              `${
                _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
              }Table-row`,
              className,
            );
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'thead',
              {
                className: `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Table-head`,
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'tr',
                {
                  className: classes,
                },
                labels.map((label) =>
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'th',
                    {
                      key: `${label}`,
                      className: `${
                        _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                      }Table-header`,
                      style: {
                        width: 'auto',
                      },
                    },
                    label,
                  ),
                ),
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(TableHead, 'propTypes', {
          /**
           * list of labels for the header
           */
          labels: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['arrayOf'])(
            prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          ).isRequired,
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(TableHead, 'defaultProps', {
          className: '',
        });

        /***/
      },

    /***/ './src/content/Table/index.js':
      /*!************************************!*\
  !*** ./src/content/Table/index.js ***!
  \************************************/
      /*! exports provided: Table, TableCell, TableHead */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Table */ './src/content/Table/Table.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Table',
          function() {
            return _Table__WEBPACK_IMPORTED_MODULE_0__['Table'];
          },
        );

        /* harmony import */ var _TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./TableCell */ './src/content/Table/TableCell.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'TableCell',
          function() {
            return _TableCell__WEBPACK_IMPORTED_MODULE_1__['TableCell'];
          },
        );

        /* harmony import */ var _TableHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./TableHead */ './src/content/Table/TableHead.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'TableHead',
          function() {
            return _TableHead__WEBPACK_IMPORTED_MODULE_2__['TableHead'];
          },
        );

        /***/
      },

    /***/ './src/controls/Checkbox/Checkbox.js':
      /*!*******************************************!*\
  !*** ./src/controls/Checkbox/Checkbox.js ***!
  \*******************************************/
      /*! exports provided: Checkbox */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Checkbox',
          function() {
            return Checkbox;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Checkbox extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'onChange', () => {
              const { checked, onChange } = this.props;
              if (onChange) onChange(!checked);
            });
          }

          render() {
            const { children, checked } = this.props;
            const label =
              children &&
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'label',
                {
                  htmlFor: 'checkbox1',
                  className: `label ${
                    _constants__WEBPACK_IMPORTED_MODULE_3__['OLT_NAMESPACE']
                  }Checkbox-label ${
                    _constants__WEBPACK_IMPORTED_MODULE_3__['OLT_NAMESPACE']
                  }u-fontSizeSmall ${
                    _constants__WEBPACK_IMPORTED_MODULE_3__['OLT_NAMESPACE']
                  }u-marginBottom1`,
                },
                children,
              );
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: `${
                  _constants__WEBPACK_IMPORTED_MODULE_3__['OLT_NAMESPACE']
                }Checkbox`,
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  id: 'checkbox1',
                  type: 'checkbox',
                  className: `${
                    _constants__WEBPACK_IMPORTED_MODULE_3__['OLT_NAMESPACE']
                  }Checkbox-input`,
                  checked: checked,
                  onChange: this.onChange,
                },
              ),
              label,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Checkbox, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
          checked: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Checkbox, 'defaultProps', {
          children: null,
          checked: false,
          onChange: null,
        });

        /***/
      },

    /***/ './src/controls/Checkbox/index.js':
      /*!****************************************!*\
  !*** ./src/controls/Checkbox/index.js ***!
  \****************************************/
      /*! exports provided: Checkbox */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Checkbox */ './src/controls/Checkbox/Checkbox.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Checkbox',
          function() {
            return _Checkbox__WEBPACK_IMPORTED_MODULE_0__['Checkbox'];
          },
        );

        /***/
      },

    /***/ './src/controls/Label/Label.js':
      /*!*************************************!*\
  !*** ./src/controls/Label/Label.js ***!
  \*************************************/
      /*! exports provided: Label */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Label',
          function() {
            return Label;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Label extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { className, children } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['className', 'children']);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'label',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  style: {
                    display: 'block',
                  },
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    `${
                      _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                    }Label`,
                    className,
                  ),
                },
                props,
              ),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Label, 'propTypes', {
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Label, 'defaultProps', {
          className: null,
          children: null,
        });

        /***/
      },

    /***/ './src/controls/Label/index.js':
      /*!*************************************!*\
  !*** ./src/controls/Label/index.js ***!
  \*************************************/
      /*! exports provided: Label */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Label */ './src/controls/Label/Label.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Label',
          function() {
            return _Label__WEBPACK_IMPORTED_MODULE_0__['Label'];
          },
        );

        /***/
      },

    /***/ './src/controls/Radio/Radio.js':
      /*!*************************************!*\
  !*** ./src/controls/Radio/Radio.js ***!
  \*************************************/
      /*! exports provided: RadioButton */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'RadioButton',
          function() {
            return RadioButton;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        // TODO: Styleguide implementation

        class RadioButton extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'onChange', () => {
              const { onChange, value } = this.props;
              if (onChange) onChange(value);
            });
          }

          render() {
            const {
              children,
              selected,
              value,
              className,
              disabled,
            } = this.props;
            const label =
              children &&
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'span',
                {
                  className: `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Label`,
                },
                children,
              );
            const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              `${
                _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
              }Radio`,
              className,
            );
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'label',
              {
                className: classes,
              },
              label,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'input',
                {
                  type: 'radio',
                  name: 'radio',
                  value: value,
                  onChange: this.onChange,
                  checked: selected,
                  disabled: disabled,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'span',
                {
                  className: `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Radio-checkmark`,
                },
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(RadioButton, 'propTypes', {
          value: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
          selected: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(RadioButton, 'defaultProps', {
          children: null,
          selected: null,
          onChange: null,
          disabled: null,
          className: null,
        });

        /***/
      },

    /***/ './src/controls/Radio/index.js':
      /*!*************************************!*\
  !*** ./src/controls/Radio/index.js ***!
  \*************************************/
      /*! exports provided: RadioButton */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Radio */ './src/controls/Radio/Radio.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'RadioButton',
          function() {
            return _Radio__WEBPACK_IMPORTED_MODULE_0__['RadioButton'];
          },
        );

        /***/
      },

    /***/ './src/controls/Select/Select.js':
      /*!***************************************!*\
  !*** ./src/controls/Select/Select.js ***!
  \***************************************/
      /*! exports provided: Select */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Select',
          function() {
            return Select;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Select extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          static renderOptions(options, value) {
            return options.map((option) => {
              const key = `${option.value}-${option.label}`;
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'option',
                {
                  value: option.value,
                  key: key,
                },
                option.label,
              );
            });
          }

          render() {
            const _this$props = this.props,
              { className, disabled, options, value, fullwidth } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'className',
                'disabled',
                'options',
                'value',
                'fullwidth',
              ]);

            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
            }Select`;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'select',
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                  );
                  e.code = 'MODULE_NOT_FOUND';
                  throw e;
                })()(
                  {
                    value: value,
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                      base,
                      fullwidth && `${base}--fullwidth`,
                      disabled && `is-disabled`,
                      !value && 'is-placeholder',
                      className,
                    ),
                    disabled: disabled,
                  },
                  props,
                ),
                Select.renderOptions(options, value),
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Select, 'propTypes', {
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          value: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          fullwidth: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          options: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['arrayOf'])(
            Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['shape'])({
              label: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
              value: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
            }),
          ).isRequired,
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Select, 'defaultProps', {
          className: null,
          fullwidth: false,
          disabled: false,
          value: null,
        });

        /***/
      },

    /***/ './src/controls/Select/index.js':
      /*!**************************************!*\
  !*** ./src/controls/Select/index.js ***!
  \**************************************/
      /*! exports provided: Select */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Select */ './src/controls/Select/Select.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Select',
          function() {
            return _Select__WEBPACK_IMPORTED_MODULE_0__['Select'];
          },
        );

        /***/
      },

    /***/ './src/controls/SelectField/SelectField.js':
      /*!*************************************************!*\
  !*** ./src/controls/SelectField/SelectField.js ***!
  \*************************************************/
      /*! exports provided: SelectField */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SelectField',
          function() {
            return SelectField;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );
        /* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../Label */ './src/controls/Label/index.js',
        );
        /* harmony import */ var _Select_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../Select/Select */ './src/controls/Select/Select.js',
        );
        /* harmony import */ var _SelectField_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./SelectField.scss */ './src/controls/SelectField/SelectField.scss',
        );
        /* harmony import */ var _SelectField_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _SelectField_scss__WEBPACK_IMPORTED_MODULE_7__,
        );

        class SelectField extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              {
                className,
                disabled,
                options,
                label,
                fullwidth,
                errorMessage,
                readOnly,
                required,
              } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'className',
                'disabled',
                'options',
                'label',
                'fullwidth',
                'errorMessage',
                'readOnly',
                'required',
              ]);

            const selectClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              className,
              errorMessage && 'is-error',
            );
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }SelectField ${
                  _SelectField_scss__WEBPACK_IMPORTED_MODULE_7__['selectField']
                }`,
              },
              label &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _Label__WEBPACK_IMPORTED_MODULE_5__['Label'],
                  null,
                  label,
                  required && !readOnly ? '*' : null,
                ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _Select_Select__WEBPACK_IMPORTED_MODULE_6__['Select'],
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                  );
                  e.code = 'MODULE_NOT_FOUND';
                  throw e;
                })()(
                  {
                    fullwidth: fullwidth,
                    disabled: disabled,
                    className: selectClasses,
                    options: options,
                  },
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
                    );
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                  })()({}, props, {
                    required,
                    readOnly,
                  }),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'span',
                {
                  className:
                    _SelectField_scss__WEBPACK_IMPORTED_MODULE_7__['footer'],
                },
                errorMessage &&
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'span',
                    {
                      className: `${
                        _SelectField_scss__WEBPACK_IMPORTED_MODULE_7__[
                          'message'
                        ]
                      } ${
                        _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                      }u-textError`,
                    },
                    errorMessage,
                  ),
              ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(SelectField, 'propTypes', {
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          label: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'].isRequired,
          fullwidth: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          readOnly: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          required: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          options: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['arrayOf'])(
            Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['shape'])({
              label: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
              value: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
            }),
          ).isRequired,
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(SelectField, 'defaultProps', {
          className: null,
          errorMessage: null,
          readOnly: null,
          required: null,
          fullwidth: false,
          disabled: false,
        });

        /***/
      },

    /***/ './src/controls/SelectField/SelectField.scss':
      /*!***************************************************!*\
  !*** ./src/controls/SelectField/SelectField.scss ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-3-3!./SelectField.scss */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js?!./src/controls/SelectField/SelectField.scss',
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js',
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
      },

    /***/ './src/controls/SelectField/index.js':
      /*!*******************************************!*\
  !*** ./src/controls/SelectField/index.js ***!
  \*******************************************/
      /*! exports provided: SelectField */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _SelectField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./SelectField */ './src/controls/SelectField/SelectField.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'SelectField',
          function() {
            return _SelectField__WEBPACK_IMPORTED_MODULE_0__['SelectField'];
          },
        );

        /***/
      },

    /***/ './src/controls/TextField/TextField.js':
      /*!*********************************************!*\
  !*** ./src/controls/TextField/TextField.js ***!
  \*********************************************/
      /*! exports provided: TextField */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TextField',
          function() {
            return TextField;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! uniqid */ './node_modules/uniqid/index.js',
        );
        /* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          uniqid__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );
        /* harmony import */ var _TextField_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./TextField.scss */ './src/controls/TextField/TextField.scss',
        );
        /* harmony import */ var _TextField_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _TextField_scss__WEBPACK_IMPORTED_MODULE_6__,
        );

        class TextField extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          constructor(...args) {
            super(...args);

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(
              this,
              'elementId',
              uniqid__WEBPACK_IMPORTED_MODULE_4___default()(),
            );

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(
              this,
              'inputRef',
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(),
            );

            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(this, 'applyAutogrow', () => {
              const tf = this.inputRef.current;
              const { style } = tf; // reset height and measure scrollHeight

              style.cssText = 'height:auto;';
              style.cssText = `height:${tf.scrollHeight}px`;
            });
          }

          componentDidMount() {
            const inputNode = this.inputRef.current; // This initialises the input for the styleguide
            // new OltTextField(inputNode); // eslint-disable-line no-new

            const { autogrow } = this.props;

            if (autogrow) {
              inputNode.addEventListener('input', this.applyAutogrow);
              inputNode.addEventListener('change', this.applyAutogrow);
              this.applyAutogrow();
            }
          }

          componentWillUnmount() {
            const { autogrow } = this.props;
            const inputNode = this.inputRef.current;

            if (autogrow) {
              inputNode.removeEventListener('input', this.applyAutogrow);
              inputNode.removeEventListener('change', this.applyAutogrow);
            }
          }

          render() {
            const _this$props = this.props,
              {
                className,
                defaultValue,
                disabled,
                errorMessage,
                fullwidth,
                icon,
                infoText,
                label,
                floating,
                onChange,
                onBlur,
                readOnly,
                textarea,
                value,
                style,
                autogrow,
                placeholder,
                required,
                noFooter,
              } = _this$props,
              rest = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, [
                'className',
                'defaultValue',
                'disabled',
                'errorMessage',
                'fullwidth',
                'icon',
                'infoText',
                'label',
                'floating',
                'onChange',
                'onBlur',
                'readOnly',
                'textarea',
                'value',
                'style',
                'autogrow',
                'placeholder',
                'required',
                'noFooter',
              ]);

            const { elementId } = this;
            const Element = textarea || autogrow ? 'textarea' : 'input';
            const hasFloatingLabel = floating && label;
            const base = `${
              _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
            }TextField`;
            const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              base,
              fullwidth && 'is-fullwidth',
              hasFloatingLabel && `${base}--float`,
              icon && 'has-icon',
              !label && 'has-noLabel',
              className,
              errorMessage && 'has-error-message',
            );
            const elementClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              `${
                _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
              }Input ${base}-input`,
              errorMessage && 'is-error',
              hasFloatingLabel && value && 'has-value',
              autogrow &&
                _TextField_scss__WEBPACK_IMPORTED_MODULE_6__['autogrow'],
            );
            const autogrowProps = autogrow
              ? {
                  rows: '1',
                }
              : {};
            const showLabel =
              label && (floating || (!errorMessage && !infoText));
            const newPlaceholder =
              placeholder || (!floating && !showLabel && label) || '';
            const labelElement =
              label &&
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'label',
                {
                  className: `${
                    _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                  }Label ${base}-label`,
                  htmlFor: elementId,
                },
                label,
                required && !readOnly ? '*' : null,
              );
            const noFooterStyle = noFooter
              ? {
                  marginBottom: 0,
                }
              : {};

            const wrapperStyle = !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()({}, style, noFooterStyle);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: wrapperClasses,
                style: wrapperStyle,
              },
              !floating && labelElement,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                Element,
                !(function webpackMissingModule() {
                  var e = new Error(
                    "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                  );
                  e.code = 'MODULE_NOT_FOUND';
                  throw e;
                })()(
                  {
                    className: elementClasses,
                    defaultValue: defaultValue,
                    disabled: disabled,
                    id: elementId,
                    onChange: onChange,
                    onBlur: onBlur,
                    readOnly: readOnly,
                    ref: this.inputRef,
                    value: value,
                    placeholder: newPlaceholder,
                  },
                  autogrowProps,
                  !(function webpackMissingModule() {
                    var e = new Error(
                      "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectSpread'",
                    );
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                  })()({}, rest, {
                    required,
                  }),
                ),
              ),
              floating && labelElement,
              !noFooter &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'span',
                  {
                    className: `${base}-footer`,
                  },
                  errorMessage &&
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'span',
                      {
                        className: `${base}-message ${
                          _constants__WEBPACK_IMPORTED_MODULE_5__[
                            'OLT_NAMESPACE'
                          ]
                        }u-textError`,
                      },
                      readOnly
                        ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            'span',
                            null,
                            '\xA0',
                          )
                        : errorMessage,
                    ),
                  infoText &&
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'span',
                      {
                        className: `${base}-info`,
                      },
                      readOnly
                        ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            'span',
                            null,
                            '\xA0',
                          )
                        : infoText,
                    ),
                ),
              icon &&
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'span',
                  {
                    className: `${base}-icon`,
                    style: {
                      pointerEvents: 'none',
                    },
                  },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'i',
                    {
                      className: `${
                        _constants__WEBPACK_IMPORTED_MODULE_5__['OLT_NAMESPACE']
                      }Icon`,
                      'data-icon': icon,
                    },
                  ),
                ),
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(TextField, 'propTypes', {
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          fullwidth: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          icon: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          floating: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          infoText: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          label: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
          onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__['func'],
          readOnly: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          textarea: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          required: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          value: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          autogrow: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          noFooter: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          style: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['shape'])({}),
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(TextField, 'defaultProps', {
          className: null,
          defaultValue: undefined,
          disabled: false,
          errorMessage: null,
          required: null,
          floating: true,
          fullwidth: false,
          icon: null,
          infoText: null,
          label: null,
          onBlur: undefined,
          onChange: undefined,
          readOnly: false,
          textarea: false,
          value: undefined,
          autogrow: false,
          noFooter: false,
          placeholder: null,
          style: null,
        });

        /***/
      },

    /***/ './src/controls/TextField/TextField.scss':
      /*!***********************************************!*\
  !*** ./src/controls/TextField/TextField.scss ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-3-3!./TextField.scss */ './node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js?!./src/controls/TextField/TextField.scss',
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */ './node_modules/style-loader/lib/addStyles.js',
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {
        }

        /***/
      },

    /***/ './src/controls/TextField/index.js':
      /*!*****************************************!*\
  !*** ./src/controls/TextField/index.js ***!
  \*****************************************/
      /*! exports provided: TextField */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./TextField */ './src/controls/TextField/TextField.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'TextField',
          function() {
            return _TextField__WEBPACK_IMPORTED_MODULE_0__['TextField'];
          },
        );

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! exports provided: Button, Icon, Modal, ModalContent, ModalFooter, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_ALERT, COLOR_NOTIFY, COLOR_SUCCESS, COLOR_WHITE, COLOR_GRAY_100, COLOR_GRAY_200, COLOR_GRAY_300, COLOR_GRAY_400, COLOR_GRAY_500, COLOR_GRAY_600, COLOR_GRAY_700, COLOR_GRAY_800, COLOR_GRAY_900, COLOR_BLACK, AVATAR_TYPE_USER, AVATAR_TYPE_TENANT, AVATAR_SIZE_MEDIUM, AVATAR_SIZE_LARGE, FONT_SIZE_XXSMALL, FONT_SIZE_XSMALL, FONT_SIZE_SMALL, FONT_SIZE_MEDIUM, FONT_SIZE_LARGE, FONT_SIZE_XLARGE, FONT_SIZE_XXLARGE, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6, ELEMENT_P, ELEMENT_SPAN, PATTERN_TAG, KEY_CODE_SPACE, KEY_CODE_ENTER, KEY_CODE_BACKSPACE, SNACKBAR_TIMEOUT_NORMAL, SNACKBAR_TIMEOUT_SHORT, OLT_NAMESPACE, childrenProp, colorProp, headlineTypeProp, copyTextTypeProp, copyTextSizeProp, Avatar, Card, Divider, Dropdown, Menu, MenuItem, MODAL_TYPE_ERROR, MODAL_TYPE_SUCCESS, MODAL_TYPE_INFO, MODAL_TYPE_NONE, Navbar, Snackbar, Stepper, ControlledStepper, Tabs, Tab, Tag, Tooltip, Table, TableCell, TableHead, Headline, List, ListItem, Paragraph, Image, Link, Checkbox, Label, RadioButton, Select, SelectField, TextField, Container, Frame, Grid, GridItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./components/Avatar */ './src/components/Avatar/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Avatar',
          function() {
            return _components_Avatar__WEBPACK_IMPORTED_MODULE_0__['Avatar'];
          },
        );

        /* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./components/Button */ './src/components/Button/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Button',
          function() {
            return _components_Button__WEBPACK_IMPORTED_MODULE_1__['Button'];
          },
        );

        /* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./components/Card */ './src/components/Card/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Card',
          function() {
            return _components_Card__WEBPACK_IMPORTED_MODULE_2__['Card'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Divider',
          function() {
            return _components_Card__WEBPACK_IMPORTED_MODULE_2__['Divider'];
          },
        );

        /* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./components/Dropdown */ './src/components/Dropdown/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Dropdown',
          function() {
            return _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__[
              'Dropdown'
            ];
          },
        );

        /* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./components/Icon */ './src/components/Icon/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Icon',
          function() {
            return _components_Icon__WEBPACK_IMPORTED_MODULE_4__['Icon'];
          },
        );

        /* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./components/Menu */ './src/components/Menu/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Menu',
          function() {
            return _components_Menu__WEBPACK_IMPORTED_MODULE_5__['Menu'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItem',
          function() {
            return _components_Menu__WEBPACK_IMPORTED_MODULE_5__['MenuItem'];
          },
        );

        /* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./components/Modal */ './src/components/Modal/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Modal',
          function() {
            return _components_Modal__WEBPACK_IMPORTED_MODULE_6__['Modal'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ModalContent',
          function() {
            return _components_Modal__WEBPACK_IMPORTED_MODULE_6__[
              'ModalContent'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ModalFooter',
          function() {
            return _components_Modal__WEBPACK_IMPORTED_MODULE_6__[
              'ModalFooter'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_ERROR',
          function() {
            return _components_Modal__WEBPACK_IMPORTED_MODULE_6__[
              'MODAL_TYPE_ERROR'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_SUCCESS',
          function() {
            return _components_Modal__WEBPACK_IMPORTED_MODULE_6__[
              'MODAL_TYPE_SUCCESS'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_INFO',
          function() {
            return _components_Modal__WEBPACK_IMPORTED_MODULE_6__[
              'MODAL_TYPE_INFO'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MODAL_TYPE_NONE',
          function() {
            return _components_Modal__WEBPACK_IMPORTED_MODULE_6__[
              'MODAL_TYPE_NONE'
            ];
          },
        );

        /* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./components/Navbar */ './src/components/Navbar/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Navbar',
          function() {
            return _components_Navbar__WEBPACK_IMPORTED_MODULE_7__['Navbar'];
          },
        );

        /* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./components/Snackbar */ './src/components/Snackbar/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Snackbar',
          function() {
            return _components_Snackbar__WEBPACK_IMPORTED_MODULE_8__[
              'Snackbar'
            ];
          },
        );

        /* harmony import */ var _components_Stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./components/Stepper */ './src/components/Stepper/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Stepper',
          function() {
            return _components_Stepper__WEBPACK_IMPORTED_MODULE_9__['Stepper'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ControlledStepper',
          function() {
            return _components_Stepper__WEBPACK_IMPORTED_MODULE_9__[
              'ControlledStepper'
            ];
          },
        );

        /* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./components/Tabs */ './src/components/Tabs/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Tabs',
          function() {
            return _components_Tabs__WEBPACK_IMPORTED_MODULE_10__['Tabs'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Tab',
          function() {
            return _components_Tabs__WEBPACK_IMPORTED_MODULE_10__['Tab'];
          },
        );

        /* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./components/Tag */ './src/components/Tag/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Tag',
          function() {
            return _components_Tag__WEBPACK_IMPORTED_MODULE_11__['Tag'];
          },
        );

        /* harmony import */ var _components_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./components/Tooltip */ './src/components/Tooltip/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Tooltip',
          function() {
            return _components_Tooltip__WEBPACK_IMPORTED_MODULE_12__['Tooltip'];
          },
        );

        /* harmony import */ var _content_Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./content/Table */ './src/content/Table/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Table',
          function() {
            return _content_Table__WEBPACK_IMPORTED_MODULE_13__['Table'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'TableCell',
          function() {
            return _content_Table__WEBPACK_IMPORTED_MODULE_13__['TableCell'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'TableHead',
          function() {
            return _content_Table__WEBPACK_IMPORTED_MODULE_13__['TableHead'];
          },
        );

        /* harmony import */ var _content_Headline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./content/Headline */ './src/content/Headline/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Headline',
          function() {
            return _content_Headline__WEBPACK_IMPORTED_MODULE_14__['Headline'];
          },
        );

        /* harmony import */ var _content_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./content/List */ './src/content/List/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'List',
          function() {
            return _content_List__WEBPACK_IMPORTED_MODULE_15__['List'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ListItem',
          function() {
            return _content_List__WEBPACK_IMPORTED_MODULE_15__['ListItem'];
          },
        );

        /* harmony import */ var _content_Paragraph__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./content/Paragraph */ './src/content/Paragraph/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Paragraph',
          function() {
            return _content_Paragraph__WEBPACK_IMPORTED_MODULE_16__[
              'Paragraph'
            ];
          },
        );

        /* harmony import */ var _content_Image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./content/Image */ './src/content/Image/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Image',
          function() {
            return _content_Image__WEBPACK_IMPORTED_MODULE_17__['Image'];
          },
        );

        /* harmony import */ var _content_Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./content/Link */ './src/content/Link/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Link',
          function() {
            return _content_Link__WEBPACK_IMPORTED_MODULE_18__['Link'];
          },
        );

        /* harmony import */ var _controls_Checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./controls/Checkbox */ './src/controls/Checkbox/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Checkbox',
          function() {
            return _controls_Checkbox__WEBPACK_IMPORTED_MODULE_19__['Checkbox'];
          },
        );

        /* harmony import */ var _controls_Label__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./controls/Label */ './src/controls/Label/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Label',
          function() {
            return _controls_Label__WEBPACK_IMPORTED_MODULE_20__['Label'];
          },
        );

        /* harmony import */ var _controls_Radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./controls/Radio */ './src/controls/Radio/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'RadioButton',
          function() {
            return _controls_Radio__WEBPACK_IMPORTED_MODULE_21__['RadioButton'];
          },
        );

        /* harmony import */ var _controls_Select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./controls/Select */ './src/controls/Select/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Select',
          function() {
            return _controls_Select__WEBPACK_IMPORTED_MODULE_22__['Select'];
          },
        );

        /* harmony import */ var _controls_SelectField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./controls/SelectField */ './src/controls/SelectField/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'SelectField',
          function() {
            return _controls_SelectField__WEBPACK_IMPORTED_MODULE_23__[
              'SelectField'
            ];
          },
        );

        /* harmony import */ var _controls_TextField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./controls/TextField */ './src/controls/TextField/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'TextField',
          function() {
            return _controls_TextField__WEBPACK_IMPORTED_MODULE_24__[
              'TextField'
            ];
          },
        );

        /* harmony import */ var _layout_Container__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./layout/Container */ './src/layout/Container/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Container',
          function() {
            return _layout_Container__WEBPACK_IMPORTED_MODULE_25__['Container'];
          },
        );

        /* harmony import */ var _layout_Frame__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./layout/Frame */ './src/layout/Frame/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Frame',
          function() {
            return _layout_Frame__WEBPACK_IMPORTED_MODULE_26__['Frame'];
          },
        );

        /* harmony import */ var _layout_Grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./layout/Grid */ './src/layout/Grid/index.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Grid',
          function() {
            return _layout_Grid__WEBPACK_IMPORTED_MODULE_27__['Grid'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'GridItem',
          function() {
            return _layout_Grid__WEBPACK_IMPORTED_MODULE_27__['GridItem'];
          },
        );

        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./constants */ './src/constants.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_PRIMARY',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_PRIMARY'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_SECONDARY',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_SECONDARY'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_ALERT',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_ALERT'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_NOTIFY',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_NOTIFY'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_SUCCESS',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_SUCCESS'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_WHITE',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_WHITE'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_100',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_100'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_200',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_200'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_300',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_300'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_400',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_400'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_500',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_500'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_600',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_600'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_700',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_700'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_800',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_800'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GRAY_900',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_GRAY_900'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_BLACK',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['COLOR_BLACK'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'AVATAR_TYPE_USER',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['AVATAR_TYPE_USER'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'AVATAR_TYPE_TENANT',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__[
              'AVATAR_TYPE_TENANT'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'AVATAR_SIZE_MEDIUM',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__[
              'AVATAR_SIZE_MEDIUM'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'AVATAR_SIZE_LARGE',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__[
              'AVATAR_SIZE_LARGE'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_XXSMALL',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__[
              'FONT_SIZE_XXSMALL'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_XSMALL',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['FONT_SIZE_XSMALL'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_SMALL',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['FONT_SIZE_SMALL'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_MEDIUM',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['FONT_SIZE_MEDIUM'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_LARGE',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['FONT_SIZE_LARGE'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_XLARGE',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['FONT_SIZE_XLARGE'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FONT_SIZE_XXLARGE',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__[
              'FONT_SIZE_XXLARGE'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H1',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['ELEMENT_H1'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H2',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['ELEMENT_H2'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H3',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['ELEMENT_H3'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H4',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['ELEMENT_H4'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H5',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['ELEMENT_H5'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_H6',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['ELEMENT_H6'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_P',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['ELEMENT_P'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ELEMENT_SPAN',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['ELEMENT_SPAN'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PATTERN_TAG',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['PATTERN_TAG'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'KEY_CODE_SPACE',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['KEY_CODE_SPACE'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'KEY_CODE_ENTER',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['KEY_CODE_ENTER'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'KEY_CODE_BACKSPACE',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__[
              'KEY_CODE_BACKSPACE'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'SNACKBAR_TIMEOUT_NORMAL',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__[
              'SNACKBAR_TIMEOUT_NORMAL'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'SNACKBAR_TIMEOUT_SHORT',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__[
              'SNACKBAR_TIMEOUT_SHORT'
            ];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'OLT_NAMESPACE',
          function() {
            return _constants__WEBPACK_IMPORTED_MODULE_28__['OLT_NAMESPACE'];
          },
        );

        /* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./propTypes */ './src/propTypes.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'childrenProp',
          function() {
            return _propTypes__WEBPACK_IMPORTED_MODULE_29__['childrenProp'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'colorProp',
          function() {
            return _propTypes__WEBPACK_IMPORTED_MODULE_29__['colorProp'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'headlineTypeProp',
          function() {
            return _propTypes__WEBPACK_IMPORTED_MODULE_29__['headlineTypeProp'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'copyTextTypeProp',
          function() {
            return _propTypes__WEBPACK_IMPORTED_MODULE_29__['copyTextTypeProp'];
          },
        );

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'copyTextSizeProp',
          function() {
            return _propTypes__WEBPACK_IMPORTED_MODULE_29__['copyTextSizeProp'];
          },
        );

        // content

        /***/
      },

    /***/ './src/layout/Container/Container.js':
      /*!*******************************************!*\
  !*** ./src/layout/Container/Container.js ***!
  \*******************************************/
      /*! exports provided: Container */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Container',
          function() {
            return Container;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        const Container = (_ref) => {
          let { className, noPadding } = _ref,
            props = !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(_ref, ['className', 'noPadding']);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()({}, props, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Container`,
                noPadding &&
                  `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Container--noPadding`,
                className,
              ),
            }),
          );
        };
        Container.propTypes = {
          className: prop_types__WEBPACK_IMPORTED_MODULE_3__['string'],
          noPadding: prop_types__WEBPACK_IMPORTED_MODULE_3__['bool'],
        };
        Container.defaultProps = {
          className: null,
          noPadding: false,
        };

        /***/
      },

    /***/ './src/layout/Container/index.js':
      /*!***************************************!*\
  !*** ./src/layout/Container/index.js ***!
  \***************************************/
      /*! exports provided: Container */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Container */ './src/layout/Container/Container.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Container',
          function() {
            return _Container__WEBPACK_IMPORTED_MODULE_0__['Container'];
          },
        );

        /***/
      },

    /***/ './src/layout/Frame/Frame.js':
      /*!***********************************!*\
  !*** ./src/layout/Frame/Frame.js ***!
  \***********************************/
      /*! exports provided: Frame, default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Frame',
          function() {
            return Frame;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        const Frame = (_ref) => {
          let { className } = _ref,
            props = !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()(_ref, ['className']);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            !(function webpackMissingModule() {
              var e = new Error(
                "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
              );
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            })()({}, props, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Frame`,
                className,
              ),
            }),
          );
        };
        Frame.propTypes = {
          className: prop_types__WEBPACK_IMPORTED_MODULE_3__['string'],
        };
        Frame.defaultProps = {
          className: null,
        };
        /* harmony default export */ __webpack_exports__['default'] = Frame; // eslint-disable-line import/no-default-export

        /***/
      },

    /***/ './src/layout/Frame/index.js':
      /*!***********************************!*\
  !*** ./src/layout/Frame/index.js ***!
  \***********************************/
      /*! exports provided: Frame */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Frame */ './src/layout/Frame/Frame.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Frame',
          function() {
            return _Frame__WEBPACK_IMPORTED_MODULE_0__['Frame'];
          },
        );

        /***/
      },

    /***/ './src/layout/Grid/Grid.js':
      /*!*********************************!*\
  !*** ./src/layout/Grid/Grid.js ***!
  \*********************************/
      /*! exports provided: Grid */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Grid',
          function() {
            return Grid;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        class Grid extends react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'] {
          render() {
            const _this$props = this.props,
              { noPadding, children, className } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['noPadding', 'children', 'className']);

            const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
              `${_constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']}Grid`,
              noPadding &&
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Grid--noPadding`, // NOTE: What about --gutterless?
              // ...or maybe better: Provide list of gutters like spacings and modifiers like `--gutter{0-4}`.
              className,
            );
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  className: classes,
                },
                props,
              ),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Grid, 'propTypes', {
          noPadding: prop_types__WEBPACK_IMPORTED_MODULE_2__['bool'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(Grid, 'defaultProps', {
          noPadding: false,
          className: null,
          children: null,
        });

        /***/
      },

    /***/ './src/layout/Grid/GridItem.js':
      /*!*************************************!*\
  !*** ./src/layout/Grid/GridItem.js ***!
  \*************************************/
      /*! exports provided: GridItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'GridItem',
          function() {
            return GridItem;
          },
        );
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/core-js/object/entries'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })();
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react',
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        );
        /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_3__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../constants */ './src/constants.js',
        );

        const isFirstBreakpoint = (breakpoint) => breakpoint === 'xs';

        class GridItem extends react__WEBPACK_IMPORTED_MODULE_1__[
          'PureComponent'
        ] {
          render() {
            const _this$props = this.props,
              { className, children, size, offset } = _this$props,
              props = !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/objectWithoutProperties'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(_this$props, ['className', 'children', 'size', 'offset']);

            const classes = [
              `${
                _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
              }Grid-item`,
            ]; // NOTE: This is using new props-API:
            // TODO: Make it a single line!

            if (typeof size === 'object') {
              for (const [
                breakpoint,
                value,
              ] of !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/core-js/object/entries'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(size)) {
                const infix = isFirstBreakpoint(breakpoint)
                  ? ''
                  : `${breakpoint}-`;
                classes.push(
                  `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Grid-item--${infix}${value}`,
                );
              }
            } else if (size) {
              classes.push(
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Grid-item--${size}`,
              );
            }

            if (typeof offset === 'object') {
              for (const [
                breakpoint,
                value,
              ] of !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/core-js/object/entries'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(offset)) {
                const infix = isFirstBreakpoint(breakpoint)
                  ? ''
                  : `${breakpoint}-`;
                classes.push(
                  `${
                    _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                  }Grid-item--${infix}offset${value}`,
                );
              }
            } else if (offset) {
              classes.push(
                `${
                  _constants__WEBPACK_IMPORTED_MODULE_4__['OLT_NAMESPACE']
                }Grid-item--offset${offset}`,
              );
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              !(function webpackMissingModule() {
                var e = new Error(
                  "Cannot find module '@babel/runtime-corejs2/helpers/esm/extends'",
                );
                e.code = 'MODULE_NOT_FOUND';
                throw e;
              })()(
                {
                  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                    ...classes,
                    className,
                  ),
                },
                props,
              ),
              children,
            );
          }
        }

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(GridItem, 'propTypes', {
          children: prop_types__WEBPACK_IMPORTED_MODULE_2__['node'],
          className: prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
          size: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOfType'])([
            prop_types__WEBPACK_IMPORTED_MODULE_2__['number'],
            prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
            Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['shape'])({}),
          ]),
          offset: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['oneOfType'])([
            prop_types__WEBPACK_IMPORTED_MODULE_2__['number'],
            prop_types__WEBPACK_IMPORTED_MODULE_2__['string'],
            Object(prop_types__WEBPACK_IMPORTED_MODULE_2__['shape'])({}),
          ]),
        });

        !(function webpackMissingModule() {
          var e = new Error(
            "Cannot find module '@babel/runtime-corejs2/helpers/esm/defineProperty'",
          );
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()(GridItem, 'defaultProps', {
          children: null,
          className: null,
          size: 'auto',
          offset: '',
        });

        /***/
      },

    /***/ './src/layout/Grid/index.js':
      /*!**********************************!*\
  !*** ./src/layout/Grid/index.js ***!
  \**********************************/
      /*! exports provided: Grid, GridItem */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Grid */ './src/layout/Grid/Grid.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Grid',
          function() {
            return _Grid__WEBPACK_IMPORTED_MODULE_0__['Grid'];
          },
        );

        /* harmony import */ var _GridItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./GridItem */ './src/layout/Grid/GridItem.js',
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'GridItem',
          function() {
            return _GridItem__WEBPACK_IMPORTED_MODULE_1__['GridItem'];
          },
        );

        /***/
      },

    /***/ './src/propTypes.js':
      /*!**************************!*\
  !*** ./src/propTypes.js ***!
  \**************************/
      /*! exports provided: childrenProp, colorProp, headlineTypeProp, copyTextTypeProp, copyTextSizeProp */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'childrenProp',
          function() {
            return childrenProp;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'colorProp',
          function() {
            return colorProp;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'headlineTypeProp',
          function() {
            return headlineTypeProp;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'copyTextTypeProp',
          function() {
            return copyTextTypeProp;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'copyTextSizeProp',
          function() {
            return copyTextSizeProp;
          },
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! prop-types */ './node_modules/prop-types/index.js',
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./constants */ './src/constants.js',
        );

        // FIXME remove legacy stuff here

        const childrenProp = Object(
          prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOfType'],
        )([
          Object(prop_types__WEBPACK_IMPORTED_MODULE_0__['arrayOf'])(
            prop_types__WEBPACK_IMPORTED_MODULE_0__['node'],
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_0__['node'],
        ]);
        const colorProp = Object(
          prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOf'],
        )([
          _constants__WEBPACK_IMPORTED_MODULE_1__['COLOR_PRIMARY'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['COLOR_SECONDARY'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['COLOR_ALERT'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['COLOR_NOTIFY'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['COLOR_SUCCESS'],
        ]);
        const headlineTypeProp = Object(
          prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOf'],
        )([
          _constants__WEBPACK_IMPORTED_MODULE_1__['ELEMENT_H1'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['ELEMENT_H2'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['ELEMENT_H3'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['ELEMENT_H4'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['ELEMENT_H5'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['ELEMENT_H6'],
        ]);
        const copyTextTypeProp = Object(
          prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOf'],
        )([
          _constants__WEBPACK_IMPORTED_MODULE_1__['ELEMENT_P'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['ELEMENT_SPAN'],
        ]);
        const copyTextSizeProp = Object(
          prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOf'],
        )([
          _constants__WEBPACK_IMPORTED_MODULE_1__['FONT_SIZE_XXSMALL'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['FONT_SIZE_XSMALL'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['FONT_SIZE_SMALL'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['FONT_SIZE_MEDIUM'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['FONT_SIZE_LARGE'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['FONT_SIZE_XLARGE'],
          _constants__WEBPACK_IMPORTED_MODULE_1__['FONT_SIZE_XXLARGE'],
        ]);

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react');

        /***/
      },

    /******/
  },
);
//# sourceMappingURL=main.js.map
