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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _runtimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nvar stripe = __webpack_require__(/*! stripe */ \"./node_modules/stripe/lib/stripe.js\")('sk_test_51K5auWBg2luewUqu4qN8P6YQuOIm223fXeUqYa6cmWXLWxmaASyLojknw2wQyuX5lD7EGY9TrGvjbAjHtg0vK8ZM00ccDmJKd2');\n//const Stripe = async\nvar paymentIntent = _asyncToGenerator(_runtimeJs.default.mark(function _callee(amount) {\n    return _runtimeJs.default.wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return stripe.paymentIntents.create({\n                    amount: amount,\n                    currency: 'gbp',\n                    payment_method_types: [\n                        'card'\n                    ]\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nmodule.exports = {\n    paymentIntent: paymentIntent\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0cmlwZS9zZXNzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFLLENBQUNBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxtREFBUSxFQUFFLENBQTZHO0FBQzlJLEVBQXNCO0FBQ3RCLEdBQUssQ0FBQ0MsYUFBYSw2Q0FBRyxRQUFRLFNBQURDLE1BQU0sRUFBSyxDQUFDOzs7Ozt1QkFDL0JILE1BQU0sQ0FBQ0ksY0FBYyxDQUFDQyxNQUFNLENBQUMsQ0FBQztvQkFDaENGLE1BQU0sRUFBRUEsTUFBTTtvQkFDZEcsUUFBUSxFQUFFLENBQUs7b0JBQ2ZDLG9CQUFvQixFQUFFLENBQUM7d0JBQUEsQ0FBTTtvQkFBQSxDQUFDO2dCQUNsQyxDQUFDOzs7Ozs7QUFDTCxDQUFDO0FBRURDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLENBQUNQO0lBQUFBLGFBQWEsRUFBYkEsYUFBYTtBQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJpcGUvc2Vzc2lvbi5qcz8wOThlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKCdza190ZXN0XzUxSzVhdVdCZzJsdWV3VXF1NHFOOFA2WVF1T0ltMjIzZlhlVXFZYTZjbVdYTFd4bWFBU3lMb2prbncyd1F5dVg1bEQ3RUdZOVRyR3ZqYkFqSHRnMHZLOFpNMDBjY0RtSktkMicpO1xuLy9jb25zdCBTdHJpcGUgPSBhc3luY1xuY29uc3QgcGF5bWVudEludGVudCA9IGFzeW5jIChhbW91bnQpID0+IHtcbiAgICBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIGN1cnJlbmN5OiAnZ2JwJyxcbiAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnY2FyZCddLFxuICAgIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge3BheW1lbnRJbnRlbnR9Il0sIm5hbWVzIjpbInN0cmlwZSIsInJlcXVpcmUiLCJwYXltZW50SW50ZW50IiwiYW1vdW50IiwicGF5bWVudEludGVudHMiLCJjcmVhdGUiLCJjdXJyZW5jeSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/stripe/session.js\n");

/***/ })

});