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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar stripe = __webpack_require__(/*! stripe */ \"./node_modules/stripe/lib/stripe.js\")('sk_test_51K5auWBg2luewUqu4qN8P6YQuOIm223fXeUqYa6cmWXLWxmaASyLojknw2wQyuX5lD7EGY9TrGvjbAjHtg0vK8ZM00ccDmJKd2');\n//const Stripe = async\nvar paymentIntent = function(amount, res) {\n    stripe.paymentIntents.create({\n        amount: amount,\n        currency: 'gbp',\n        payment_method_types: [\n            'card'\n        ]\n    }).then(function(response) {\n        res.send(response);\n    }).catch(function(err) {\n        console.log(err);\n    });\n};\npaymentIntent(1800);\nmodule.exports = {\n    paymentIntent: paymentIntent\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0cmlwZS9zZXNzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUEsR0FBSyxDQUFDQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsbURBQVEsRUFBRSxDQUE2RztBQUM5SSxFQUFzQjtBQUN0QixHQUFLLENBQUNDLGFBQWEsR0FBRyxRQUFRLENBQVBDLE1BQU0sRUFBRUMsR0FBRyxFQUFLLENBQUM7SUFDcENKLE1BQU0sQ0FBQ0ssY0FBYyxDQUFDQyxNQUFNLENBQUMsQ0FBQztRQUMxQkgsTUFBTSxFQUFFQSxNQUFNO1FBQ2RJLFFBQVEsRUFBRSxDQUFLO1FBQ2ZDLG9CQUFvQixFQUFFLENBQUM7WUFBQSxDQUFNO1FBQUEsQ0FBQztJQUNsQyxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxRQUFRLEVBQUksQ0FBQztRQUNqQk4sR0FBRyxDQUFDTyxJQUFJLENBQUVELFFBQVE7SUFDdEIsQ0FBQyxFQUFFRSxLQUFLLENBQUNDLFFBQ2IsQ0FEYUEsR0FBRyxFQUFHLENBQUM7UUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7SUFDbkIsQ0FBQztBQUNMLENBQUM7QUFDRFgsYUFBYSxDQUFDLElBQUk7QUFFbEJjLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLENBQUNmO0lBQUFBLGFBQWEsRUFBYkEsYUFBYTtBQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJpcGUvc2Vzc2lvbi5qcz8wOThlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKCdza190ZXN0XzUxSzVhdVdCZzJsdWV3VXF1NHFOOFA2WVF1T0ltMjIzZlhlVXFZYTZjbVdYTFd4bWFBU3lMb2prbncyd1F5dVg1bEQ3RUdZOVRyR3ZqYkFqSHRnMHZLOFpNMDBjY0RtSktkMicpO1xuLy9jb25zdCBTdHJpcGUgPSBhc3luY1xuY29uc3QgcGF5bWVudEludGVudCA9IChhbW91bnQsIHJlcykgPT4ge1xuICAgIHN0cmlwZS5wYXltZW50SW50ZW50cy5jcmVhdGUoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgY3VycmVuY3k6ICdnYnAnLFxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJlcy5zZW5kKCByZXNwb25zZSlcbiAgICB9KS5jYXRjaChlcnI9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KVxufVxucGF5bWVudEludGVudCgxODAwKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtwYXltZW50SW50ZW50fSJdLCJuYW1lcyI6WyJzdHJpcGUiLCJyZXF1aXJlIiwicGF5bWVudEludGVudCIsImFtb3VudCIsInJlcyIsInBheW1lbnRJbnRlbnRzIiwiY3JlYXRlIiwiY3VycmVuY3kiLCJwYXltZW50X21ldGhvZF90eXBlcyIsInRoZW4iLCJyZXNwb25zZSIsInNlbmQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/stripe/session.js\n");

/***/ })

});