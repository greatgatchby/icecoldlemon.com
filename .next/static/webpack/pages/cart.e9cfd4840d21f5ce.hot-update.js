"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./components/stripe/session.js":
/*!**************************************!*\
  !*** ./components/stripe/session.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar stripe = __webpack_require__(/*! stripe */ \"./node_modules/stripe/lib/stripe.js\")('sk_test_51K5auWBg2luewUqu4qN8P6YQuOIm223fXeUqYa6cmWXLWxmaASyLojknw2wQyuX5lD7EGY9TrGvjbAjHtg0vK8ZM00ccDmJKd2');\nvar paymentIntent = _asyncToGenerator(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(amount) {\n    return _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return stripe.paymentIntents.create({\n                    amount: amount,\n                    currency: 'gbp',\n                    payment_method_types: [\n                        'card'\n                    ]\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n_asyncToGenerator(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    return _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.t0 = console;\n                _ctx.next = 3;\n                return paymentIntent(40);\n            case 3:\n                _ctx.t1 = _ctx.sent;\n                _ctx.t0.warn.call(_ctx.t0, _ctx.t1);\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0cmlwZS9zZXNzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFLLENBQUNBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxtREFBUSxFQUFFLENBQTZHO0FBQzlJLEdBQUssQ0FBQ0MsYUFBYSxpTEFBRyxRQUFRLFNBQURDLE1BQU0sRUFBSyxDQUFDOzs7Ozt1QkFDL0JILE1BQU0sQ0FBQ0ksY0FBYyxDQUFDQyxNQUFNLENBQUMsQ0FBQztvQkFDaENGLE1BQU0sRUFBRUEsTUFBTTtvQkFDZEcsUUFBUSxFQUFFLENBQUs7b0JBQ2ZDLG9CQUFvQixFQUFFLENBQUM7d0JBQUEsQ0FBTTtvQkFBQSxDQUFDO2dCQUNsQyxDQUFDOzs7Ozs7QUFDTCxDQUFDOzhLQUNBLFFBQVEsV0FBSSxDQUFDOzs7OzBCQUNWQyxPQUFPOzt1QkFBWU4sYUFBYSxDQUFDLEVBQUU7Ozt3QkFBM0JPLElBQUk7Ozs7OztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3RyaXBlL3Nlc3Npb24uanM/MDk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKSgnc2tfdGVzdF81MUs1YXVXQmcybHVld1VxdTRxTjhQNllRdU9JbTIyM2ZYZVVxWWE2Y21XWExXeG1hQVN5TG9qa253MndReXVYNWxEN0VHWTlUckd2amJBakh0ZzB2SzhaTTAwY2NEbUpLZDInKTtcbmNvbnN0IHBheW1lbnRJbnRlbnQgPSBhc3luYyAoYW1vdW50KSA9PiB7XG4gICAgYXdhaXQgc3RyaXBlLnBheW1lbnRJbnRlbnRzLmNyZWF0ZSh7XG4gICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICBjdXJyZW5jeTogJ2dicCcsXG4gICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICB9KVxufVxuKGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oYXdhaXQgcGF5bWVudEludGVudCg0MCkpXG59KSJdLCJuYW1lcyI6WyJzdHJpcGUiLCJyZXF1aXJlIiwicGF5bWVudEludGVudCIsImFtb3VudCIsInBheW1lbnRJbnRlbnRzIiwiY3JlYXRlIiwiY3VycmVuY3kiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImNvbnNvbGUiLCJ3YXJuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/stripe/session.js\n");

/***/ })

});