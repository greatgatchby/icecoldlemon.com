"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ApolloClient.js":
/*!************************************!*\
  !*** ./components/ApolloClient.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": function() { return /* binding */ middleware; },\n/* harmony export */   \"afterware\": function() { return /* binding */ afterware; }\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-config */ \"./client-config.js\");\n/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n/**\n * Middleware operation\n * If we have a session token in localStorage, add it to the GraphQL request as a Session header.\n */ var middleware = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloLink(function(operation, forward) {\n    /**\n\t * If session data exist in local storage, set value as session header.\n\t */ var session =  true ? localStorage.getItem(\"woo-session\") : 0;\n    if (session) {\n        operation.setContext(function(param) {\n            var _headers = param.headers, headers = _headers === void 0 ? {\n            } : _headers;\n            return {\n                headers: {\n                    \"woocommerce-session\": \"Session \".concat(session)\n                }\n            };\n        });\n    }\n    return forward(operation);\n});\n/**\n * Afterware operation.\n *\n * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.\n */ var afterware = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloLink(function(operation, forward) {\n    return forward(operation).map(function(response) {\n        if (false) {}\n        /**\n\t\t * Check for session header and update session in local storage accordingly.\n\t\t */ var context = operation.getContext();\n        var headers = context.response.headers;\n        var session = headers.get(\"woocommerce-session\");\n        if (session) {\n            // Remove session data if session destroyed.\n            if (\"false\" === session) {\n                localStorage.removeItem(\"woo-session\");\n            // Update session new data if changed.\n            } else if (localStorage.getItem(\"woo-session\") !== session) {\n                localStorage.setItem(\"woo-session\", headers.get(\"woocommerce-session\"));\n            }\n        }\n        return response;\n    });\n});\n// Apollo GraphQL client.\nvar client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    link: middleware.concat(afterware.concat((0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.createHttpLink)({\n        uri: (_client_config__WEBPACK_IMPORTED_MODULE_1___default().graphqlUrl),\n        fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_0___default()),\n        fetchOptions: {\n            mode: 'no-cors'\n        }\n    }))),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fwb2xsb0NsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNhO0FBQzZDO0FBRXhGLEVBR0c7OztDQUFBLEdBQ0ksR0FBSyxDQUFDTSxVQUFVLEdBQUcsR0FBRyxDQUFDSCxzREFBVSxDQUFFLFFBQVEsQ0FBTkksU0FBUyxFQUFFQyxPQUFPLEVBQU0sQ0FBQztJQUNwRSxFQUVHOztFQUFBLEdBQ0gsR0FBSyxDQUFDQyxPQUFPLEdBQUtDLEtBQWUsR0FBTUUsWUFBWSxDQUFDQyxPQUFPLENBQUUsQ0FBYSxnQkFBSyxDQUFJO0lBRW5GLEVBQUUsRUFBR0osT0FBTyxFQUFHLENBQUM7UUFDZkYsU0FBUyxDQUFDTyxVQUFVLENBQUUsUUFBUTtpQ0FBSkMsT0FBTyxFQUFQQSxPQUFPLHlCQUFHLENBQUM7WUFBQSxDQUFDO1lBQVEsTUFDOUMsQ0FEZ0QsQ0FBQztnQkFDaERBLE9BQU8sRUFBRSxDQUFDO29CQUNULENBQXFCLHNCQUFHLENBQVEsVUFBWSxPQUFUTixPQUFPO2dCQUMzQyxDQUFDO1lBQ0YsQ0FBQzs7SUFDRixDQUFDO0lBRUQsTUFBTSxDQUFDRCxPQUFPLENBQUVELFNBQVM7QUFDMUIsQ0FBQztBQUVELEVBSUc7Ozs7Q0FBQSxHQUNJLEdBQUssQ0FBQ1MsU0FBUyxHQUFHLEdBQUcsQ0FBQ2Isc0RBQVUsQ0FBRSxRQUFRLENBQU5JLFNBQVMsRUFBRUMsT0FBTyxFQUFNLENBQUM7SUFFbkUsTUFBTSxDQUFDQSxPQUFPLENBQUVELFNBQVMsRUFBR1UsR0FBRyxDQUFFQyxRQUFRLENBQVJBLFFBQVEsRUFBSSxDQUFDO1FBRTdDLEVBQUUsRUFBRSxLQUFpQixFQUFHLEVBRXZCO1FBRUQsRUFFRzs7R0FBQSxHQUNILEdBQUssQ0FBQ0MsT0FBTyxHQUFHWixTQUFTLENBQUNhLFVBQVU7UUFDcEMsR0FBSyxDQUFlTCxPQUFPLEdBQVFJLE9BQU8sQ0FBbENELFFBQVEsQ0FBSUgsT0FBTztRQUMzQixHQUFLLENBQUNOLE9BQU8sR0FBR00sT0FBTyxDQUFDTSxHQUFHLENBQUUsQ0FBcUI7UUFFbEQsRUFBRSxFQUFHWixPQUFPLEVBQUcsQ0FBQztZQUVmLEVBQTRDO1lBQzVDLEVBQUUsRUFBRyxDQUFPLFdBQUtBLE9BQU8sRUFBRyxDQUFDO2dCQUUzQkcsWUFBWSxDQUFDVSxVQUFVLENBQUUsQ0FBYTtZQUV0QyxFQUFzQztZQUN2QyxDQUFDLE1BQU0sRUFBRSxFQUFHVixZQUFZLENBQUNDLE9BQU8sQ0FBRSxDQUFhLGtCQUFPSixPQUFPLEVBQUcsQ0FBQztnQkFFaEVHLFlBQVksQ0FBQ1csT0FBTyxDQUFFLENBQWEsY0FBRVIsT0FBTyxDQUFDTSxHQUFHLENBQUUsQ0FBcUI7WUFFeEUsQ0FBQztRQUNGLENBQUM7UUFFRCxNQUFNLENBQUNILFFBQVE7SUFFaEIsQ0FBQztBQUNGLENBQUM7QUFFRCxFQUF5QjtBQUN6QixHQUFLLENBQUNNLE1BQU0sR0FBRyxHQUFHLENBQUN0Qix3REFBWSxDQUFDLENBQUM7SUFDaEN1QixJQUFJLEVBQUVuQixVQUFVLENBQUNvQixNQUFNLENBQUVWLFNBQVMsQ0FBQ1UsTUFBTSxDQUFFckIsOERBQWMsQ0FBQyxDQUFDO1FBQzFEc0IsR0FBRyxFQUFFMUIsa0VBQXVCO1FBQzVCRCxLQUFLLEVBQUVBLG1EQUFLO1FBQ1o2QixZQUFZLEVBQUUsQ0FBQztZQUNkQyxJQUFJLEVBQUUsQ0FBUztRQUNoQixDQUFDO0lBQ0YsQ0FBQztJQUNEQyxLQUFLLEVBQUUsR0FBRyxDQUFDM0IseURBQWE7QUFDekIsQ0FBQztBQUVELCtEQUFlb0IsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXBvbGxvQ2xpZW50LmpzPzA1ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IGNsaWVudENvbmZpZyBmcm9tICcuLi9jbGllbnQtY29uZmlnJ1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlLCBjcmVhdGVIdHRwTGluayB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgb3BlcmF0aW9uXG4gKiBJZiB3ZSBoYXZlIGEgc2Vzc2lvbiB0b2tlbiBpbiBsb2NhbFN0b3JhZ2UsIGFkZCBpdCB0byB0aGUgR3JhcGhRTCByZXF1ZXN0IGFzIGEgU2Vzc2lvbiBoZWFkZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWRkbGV3YXJlID0gbmV3IEFwb2xsb0xpbmsoICggb3BlcmF0aW9uLCBmb3J3YXJkICkgPT4ge1xuXHQvKipcblx0ICogSWYgc2Vzc2lvbiBkYXRhIGV4aXN0IGluIGxvY2FsIHN0b3JhZ2UsIHNldCB2YWx1ZSBhcyBzZXNzaW9uIGhlYWRlci5cblx0ICovXG5cdGNvbnN0IHNlc3Npb24gPSAoIHByb2Nlc3MuYnJvd3NlciApID8gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBcIndvby1zZXNzaW9uXCIgKSA6IG51bGw7XG5cblx0aWYgKCBzZXNzaW9uICkge1xuXHRcdG9wZXJhdGlvbi5zZXRDb250ZXh0KCAoIHsgaGVhZGVycyA9IHt9IH0gKSA9PiAoIHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJ3b29jb21tZXJjZS1zZXNzaW9uXCI6IGBTZXNzaW9uICR7IHNlc3Npb24gfWAsXG5cdFx0XHR9LFxuXHRcdH0gKSApO1xuXHR9XG5cblx0cmV0dXJuIGZvcndhcmQoIG9wZXJhdGlvbiApO1xufSApO1xuXG4vKipcbiAqIEFmdGVyd2FyZSBvcGVyYXRpb24uXG4gKlxuICogVGhpcyBjYXRjaGVzIHRoZSBpbmNvbWluZyBzZXNzaW9uIHRva2VuIGFuZCBzdG9yZXMgaXQgaW4gbG9jYWxTdG9yYWdlLCBmb3IgZnV0dXJlIEdyYXBoUUwgcmVxdWVzdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhZnRlcndhcmUgPSBuZXcgQXBvbGxvTGluayggKCBvcGVyYXRpb24sIGZvcndhcmQgKSA9PiB7XG5cblx0cmV0dXJuIGZvcndhcmQoIG9wZXJhdGlvbiApLm1hcCggcmVzcG9uc2UgPT4ge1xuXG5cdFx0aWYgKCAhcHJvY2Vzcy5icm93c2VyICkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIGZvciBzZXNzaW9uIGhlYWRlciBhbmQgdXBkYXRlIHNlc3Npb24gaW4gbG9jYWwgc3RvcmFnZSBhY2NvcmRpbmdseS5cblx0XHQgKi9cblx0XHRjb25zdCBjb250ZXh0ID0gb3BlcmF0aW9uLmdldENvbnRleHQoKTtcblx0XHRjb25zdCB7IHJlc3BvbnNlOiB7IGhlYWRlcnMgfSB9ICA9IGNvbnRleHQ7XG5cdFx0Y29uc3Qgc2Vzc2lvbiA9IGhlYWRlcnMuZ2V0KCBcIndvb2NvbW1lcmNlLXNlc3Npb25cIiApO1xuXG5cdFx0aWYgKCBzZXNzaW9uICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgc2Vzc2lvbiBkYXRhIGlmIHNlc3Npb24gZGVzdHJveWVkLlxuXHRcdFx0aWYgKCBcImZhbHNlXCIgPT09IHNlc3Npb24gKSB7XG5cblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIFwid29vLXNlc3Npb25cIiApO1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSBzZXNzaW9uIG5ldyBkYXRhIGlmIGNoYW5nZWQuXG5cdFx0XHR9IGVsc2UgaWYgKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggXCJ3b28tc2Vzc2lvblwiICkgIT09IHNlc3Npb24gKSB7XG5cblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oIFwid29vLXNlc3Npb25cIiwgaGVhZGVycy5nZXQoIFwid29vY29tbWVyY2Utc2Vzc2lvblwiICkgKTtcblxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXNwb25zZTtcblxuXHR9ICk7XG59ICk7XG5cbi8vIEFwb2xsbyBHcmFwaFFMIGNsaWVudC5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuXHRsaW5rOiBtaWRkbGV3YXJlLmNvbmNhdCggYWZ0ZXJ3YXJlLmNvbmNhdCggY3JlYXRlSHR0cExpbmsoe1xuXHRcdHVyaTogY2xpZW50Q29uZmlnLmdyYXBocWxVcmwsXG5cdFx0ZmV0Y2g6IGZldGNoLFxuXHRcdGZldGNoT3B0aW9uczoge1xuXHRcdFx0bW9kZTogJ25vLWNvcnMnXG5cdFx0fVxuXHR9KSApICksXG5cdGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJuYW1lcyI6WyJmZXRjaCIsImNsaWVudENvbmZpZyIsIkFwb2xsb0NsaWVudCIsIkFwb2xsb0xpbmsiLCJJbk1lbW9yeUNhY2hlIiwiY3JlYXRlSHR0cExpbmsiLCJtaWRkbGV3YXJlIiwib3BlcmF0aW9uIiwiZm9yd2FyZCIsInNlc3Npb24iLCJwcm9jZXNzIiwiYnJvd3NlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsImFmdGVyd2FyZSIsIm1hcCIsInJlc3BvbnNlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJnZXQiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImNsaWVudCIsImxpbmsiLCJjb25jYXQiLCJ1cmkiLCJncmFwaHFsVXJsIiwiZmV0Y2hPcHRpb25zIiwibW9kZSIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ApolloClient.js\n");

/***/ })

});