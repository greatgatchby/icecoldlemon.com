"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "@woocommerce/woocommerce-rest-api":
/*!****************************************************!*\
  !*** external "@woocommerce/woocommerce-rest-api" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@woocommerce/woocommerce-rest-api");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "./pages/api/order.js":
/*!****************************!*\
  !*** ./pages/api/order.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WooCommerceRestApi = (__webpack_require__(/*! @woocommerce/woocommerce-rest-api */ \"@woocommerce/woocommerce-rest-api\")[\"default\"]);\nconst api = new WooCommerceRestApi({\n    url: 'https://seed.x10.mx/wp',\n    consumerKey: process.env.WC_CONSUMER_KEY,\n    consumerSecret: process.env.WC_CONSUMER_SECRET,\n    wpAPI: true,\n    version: \"wc/v3\"\n});\nasync function handler(req, res) {\n    const responseData = {\n        success: false,\n        orderId: '',\n        total: '',\n        currency: '',\n        error: ''\n    };\n    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(req.body)) {\n        responseData.error = 'Required data not sent';\n        return responseData;\n    }\n    const data = req.body;\n    data.status = 'pending';\n    data.set_paid = false;\n    try {\n        const { data  } = await api.post('orders', req.body);\n        responseData.success = true;\n        responseData.orderId = data.number;\n        responseData.total = data.total;\n        responseData.currency = data.currency;\n        res.json(responseData);\n    } catch (error) {\n        responseData.error = error.message;\n        res.status(500).json(responseData);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhCO0FBRDlCLEtBQUssQ0FBQ0Msa0JBQWtCLEdBQUdDLDhHQUFvRDtBQUcvRSxLQUFLLENBQUNFLEdBQUcsR0FBRyxHQUFHLENBQUNILGtCQUFrQixDQUFDLENBQUM7SUFDaENJLEdBQUcsRUFBRSxDQUF3QjtJQUM3QkMsV0FBVyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtJQUN4Q0MsY0FBYyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csa0JBQWtCO0lBQzlDQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxPQUFPLEVBQUUsQ0FBTztBQUNwQixDQUFDO0FBRWMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBRTdDLEtBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQUM7UUFDbEJDLE9BQU8sRUFBRSxLQUFLO1FBQ2RDLE9BQU8sRUFBRSxDQUFFO1FBQ1hDLEtBQUssRUFBRSxDQUFFO1FBQ1RDLFFBQVEsRUFBRSxDQUFFO1FBQ1pDLEtBQUssRUFBRSxDQUFFO0lBQ2IsQ0FBQztJQUVELEVBQUUsRUFBR3RCLCtDQUFPLENBQUNlLEdBQUcsQ0FBQ1EsSUFBSSxHQUFJLENBQUM7UUFDdEJOLFlBQVksQ0FBQ0ssS0FBSyxHQUFHLENBQXdCO1FBQzdDLE1BQU0sQ0FBQ0wsWUFBWTtJQUN2QixDQUFDO0lBRUQsS0FBSyxDQUFDTyxJQUFJLEdBQUdULEdBQUcsQ0FBQ1EsSUFBSTtJQUNyQkMsSUFBSSxDQUFDQyxNQUFNLEdBQUcsQ0FBUztJQUN2QkQsSUFBSSxDQUFDRSxRQUFRLEdBQUcsS0FBSztJQUVyQixHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQyxDQUFDRixDQUFBQSxJQUFJLEdBQUMsR0FBRyxLQUFLLENBQUNwQixHQUFHLENBQUN1QixJQUFJLENBQ3pCLENBQVEsU0FDUlosR0FBRyxDQUFDUSxJQUFJO1FBR1pOLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7UUFDM0JELFlBQVksQ0FBQ0UsT0FBTyxHQUFHSyxJQUFJLENBQUNJLE1BQU07UUFDbENYLFlBQVksQ0FBQ0csS0FBSyxHQUFHSSxJQUFJLENBQUNKLEtBQUs7UUFDL0JILFlBQVksQ0FBQ0ksUUFBUSxHQUFHRyxJQUFJLENBQUNILFFBQVE7UUFFckNMLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDWixZQUFZO0lBRXpCLENBQUMsQ0FBQyxLQUFLLEVBQUVLLEtBQUssRUFBRSxDQUFDO1FBQ2JMLFlBQVksQ0FBQ0ssS0FBSyxHQUFHQSxLQUFLLENBQUNRLE9BQU87UUFDbENkLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUksSUFBSSxDQUFDWixZQUFZO0lBQ3JDLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWNlY29sZGxlbW9uLmNvbS0xLy4vcGFnZXMvYXBpL29yZGVyLmpzPzM5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV29vQ29tbWVyY2VSZXN0QXBpID0gcmVxdWlyZShcIkB3b29jb21tZXJjZS93b29jb21tZXJjZS1yZXN0LWFwaVwiKS5kZWZhdWx0O1xuaW1wb3J0IHtpc0VtcHR5fSBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IGFwaSA9IG5ldyBXb29Db21tZXJjZVJlc3RBcGkoe1xuICAgIHVybDogJ2h0dHBzOi8vc2VlZC54MTAubXgvd3AnLFxuICAgIGNvbnN1bWVyS2V5OiBwcm9jZXNzLmVudi5XQ19DT05TVU1FUl9LRVksXG4gICAgY29uc3VtZXJTZWNyZXQ6IHByb2Nlc3MuZW52LldDX0NPTlNVTUVSX1NFQ1JFVCxcbiAgICB3cEFQSTogdHJ1ZSxcbiAgICB2ZXJzaW9uOiBcIndjL3YzXCJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBvcmRlcklkOiAnJyxcbiAgICAgICAgdG90YWw6ICcnLFxuICAgICAgICBjdXJyZW5jeTogJycsXG4gICAgICAgIGVycm9yOiAnJ1xuICAgIH1cblxuICAgIGlmICggaXNFbXB0eShyZXEuYm9keSkgKSB7XG4gICAgICAgIHJlc3BvbnNlRGF0YS5lcnJvciA9ICdSZXF1aXJlZCBkYXRhIG5vdCBzZW50JztcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YVxuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICBkYXRhLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICBkYXRhLnNldF9wYWlkID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBhcGkucG9zdChcbiAgICAgICAgICAgICdvcmRlcnMnLFxuICAgICAgICAgICAgcmVxLmJvZHlcbiAgICAgICAgKTtcblxuICAgICAgICByZXNwb25zZURhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIHJlc3BvbnNlRGF0YS5vcmRlcklkID0gZGF0YS5udW1iZXI7XG4gICAgICAgIHJlc3BvbnNlRGF0YS50b3RhbCA9IGRhdGEudG90YWw7XG4gICAgICAgIHJlc3BvbnNlRGF0YS5jdXJyZW5jeSA9IGRhdGEuY3VycmVuY3k7XG5cbiAgICAgICAgcmVzLmpzb24ocmVzcG9uc2VEYXRhKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzcG9uc2VEYXRhLmVycm9yID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24ocmVzcG9uc2VEYXRhKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImlzRW1wdHkiLCJXb29Db21tZXJjZVJlc3RBcGkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImFwaSIsInVybCIsImNvbnN1bWVyS2V5IiwicHJvY2VzcyIsImVudiIsIldDX0NPTlNVTUVSX0tFWSIsImNvbnN1bWVyU2VjcmV0IiwiV0NfQ09OU1VNRVJfU0VDUkVUIiwid3BBUEkiLCJ2ZXJzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlRGF0YSIsInN1Y2Nlc3MiLCJvcmRlcklkIiwidG90YWwiLCJjdXJyZW5jeSIsImVycm9yIiwiYm9keSIsImRhdGEiLCJzdGF0dXMiLCJzZXRfcGFpZCIsInBvc3QiLCJudW1iZXIiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/order.js"));
module.exports = __webpack_exports__;

})();