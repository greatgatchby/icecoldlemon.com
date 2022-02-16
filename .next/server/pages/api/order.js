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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WooCommerceRestApi = (__webpack_require__(/*! @woocommerce/woocommerce-rest-api */ \"@woocommerce/woocommerce-rest-api\")[\"default\"]);\nconst api = new WooCommerceRestApi({\n    url: \"https://seed.x10.mx/wp\",\n    consumerKey: process.env.WC_CONSUMER_KEY,\n    consumerSecret: process.env.WC_CONSUMER_SECRET,\n    wpAPI: true,\n    version: \"wc/v3\",\n    wpAPIPrefix: 'wp-json?rest_route='\n});\n/**\n * Create order endpoint.\n *\n * @see http://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#create-an-order\n *\n */ async function handler(req, res) {\n    const responseData = {\n        success: false,\n        orderId: '',\n        total: '',\n        currency: '',\n        error: '',\n        data: ''\n    };\n    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(req.body)) {\n        responseData.error = 'Required data not sent';\n        return responseData;\n    }\n    const data = req.body;\n    data.status = 'pending';\n    data.set_paid = false;\n    try {\n        const { data  } = await api.post('orders', req.body);\n        responseData.success = true;\n        responseData.orderId = data.number;\n        responseData.total = data.total;\n        responseData.currency = data.currency;\n        responseData.data = data;\n        res.json(data);\n    } catch (error) {\n        responseData.error = error.message;\n        res.status(500).json(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhCO0FBRDlCLEtBQUssQ0FBQ0Msa0JBQWtCLEdBQUdDLDhHQUFvRDtBQUcvRSxLQUFLLENBQUNFLEdBQUcsR0FBRyxHQUFHLENBQUNILGtCQUFrQixDQUFDLENBQUM7SUFDaENJLEdBQUcsRUFBRUMsd0JBQXFDO0lBQzFDRyxXQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxlQUFlO0lBQ3hDQyxjQUFjLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxrQkFBa0I7SUFDOUNDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLE9BQU8sRUFBRSxDQUFPO0lBQ2hCQyxXQUFXLEVBQUUsQ0FBcUI7QUFDdEMsQ0FBQztBQUVELEVBS0c7Ozs7O0NBQUEsR0FDWSxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFFN0MsS0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztRQUNsQkMsT0FBTyxFQUFFLEtBQUs7UUFDZEMsT0FBTyxFQUFFLENBQUU7UUFDWEMsS0FBSyxFQUFFLENBQUU7UUFDVEMsUUFBUSxFQUFFLENBQUU7UUFDWkMsS0FBSyxFQUFFLENBQUU7UUFDVEMsSUFBSSxFQUFFLENBQUU7SUFDWixDQUFDO0lBRUQsRUFBRSxFQUFHekIsK0NBQU8sQ0FBQ2lCLEdBQUcsQ0FBQ1MsSUFBSSxHQUFJLENBQUM7UUFDdEJQLFlBQVksQ0FBQ0ssS0FBSyxHQUFHLENBQXdCO1FBQzdDLE1BQU0sQ0FBQ0wsWUFBWTtJQUN2QixDQUFDO0lBRUQsS0FBSyxDQUFDTSxJQUFJLEdBQUdSLEdBQUcsQ0FBQ1MsSUFBSTtJQUNyQkQsSUFBSSxDQUFDRSxNQUFNLEdBQUcsQ0FBUztJQUN2QkYsSUFBSSxDQUFDRyxRQUFRLEdBQUcsS0FBSztJQUVyQixHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQyxDQUFDSCxDQUFBQSxJQUFJLEdBQUMsR0FBRyxLQUFLLENBQUNyQixHQUFHLENBQUN5QixJQUFJLENBQ3pCLENBQVEsU0FDUlosR0FBRyxDQUFDUyxJQUFJO1FBR1pQLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7UUFDM0JELFlBQVksQ0FBQ0UsT0FBTyxHQUFHSSxJQUFJLENBQUNLLE1BQU07UUFDbENYLFlBQVksQ0FBQ0csS0FBSyxHQUFHRyxJQUFJLENBQUNILEtBQUs7UUFDL0JILFlBQVksQ0FBQ0ksUUFBUSxHQUFHRSxJQUFJLENBQUNGLFFBQVE7UUFDckNKLFlBQVksQ0FBQ00sSUFBSSxHQUFHQSxJQUFJO1FBQ3hCUCxHQUFHLENBQUNhLElBQUksQ0FBQ04sSUFBSTtJQUVqQixDQUFDLENBQUMsS0FBSyxFQUFFRCxLQUFLLEVBQUUsQ0FBQztRQUNiTCxZQUFZLENBQUNLLEtBQUssR0FBR0EsS0FBSyxDQUFDUSxPQUFPO1FBQ2xDZCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVJLElBQUksQ0FBQ1AsS0FBSztJQUM5QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ljZWNvbGRsZW1vbi5jb20tMS8uL3BhZ2VzL2FwaS9vcmRlci5qcz8zOTk1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdvb0NvbW1lcmNlUmVzdEFwaSA9IHJlcXVpcmUoXCJAd29vY29tbWVyY2Uvd29vY29tbWVyY2UtcmVzdC1hcGlcIikuZGVmYXVsdDtcbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBhcGkgPSBuZXcgV29vQ29tbWVyY2VSZXN0QXBpKHtcbiAgICB1cmw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1dPUkRQUkVTU19VUkwsXG4gICAgY29uc3VtZXJLZXk6IHByb2Nlc3MuZW52LldDX0NPTlNVTUVSX0tFWSxcbiAgICBjb25zdW1lclNlY3JldDogcHJvY2Vzcy5lbnYuV0NfQ09OU1VNRVJfU0VDUkVULFxuICAgIHdwQVBJOiB0cnVlLFxuICAgIHZlcnNpb246IFwid2MvdjNcIixcbiAgICB3cEFQSVByZWZpeDogJ3dwLWpzb24/cmVzdF9yb3V0ZT0nXG59KTtcblxuLyoqXG4gKiBDcmVhdGUgb3JkZXIgZW5kcG9pbnQuXG4gKlxuICogQHNlZSBodHRwOi8vd29vY29tbWVyY2UuZ2l0aHViLmlvL3dvb2NvbW1lcmNlLXJlc3QtYXBpLWRvY3MvP2phdmFzY3JpcHQjY3JlYXRlLWFuLW9yZGVyXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBvcmRlcklkOiAnJyxcbiAgICAgICAgdG90YWw6ICcnLFxuICAgICAgICBjdXJyZW5jeTogJycsXG4gICAgICAgIGVycm9yOiAnJyxcbiAgICAgICAgZGF0YTogJydcbiAgICB9XG5cbiAgICBpZiAoIGlzRW1wdHkocmVxLmJvZHkpICkge1xuICAgICAgICByZXNwb25zZURhdGEuZXJyb3IgPSAnUmVxdWlyZWQgZGF0YSBub3Qgc2VudCc7XG4gICAgICAgIHJldHVybiByZXNwb25zZURhdGFcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgZGF0YS5zdGF0dXMgPSAncGVuZGluZyc7XG4gICAgZGF0YS5zZXRfcGFpZCA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXBpLnBvc3QoXG4gICAgICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgICAgIHJlcS5ib2R5XG4gICAgICAgICk7XG5cbiAgICAgICAgcmVzcG9uc2VEYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICByZXNwb25zZURhdGEub3JkZXJJZCA9IGRhdGEubnVtYmVyO1xuICAgICAgICByZXNwb25zZURhdGEudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICByZXNwb25zZURhdGEuY3VycmVuY3kgPSBkYXRhLmN1cnJlbmN5O1xuICAgICAgICByZXNwb25zZURhdGEuZGF0YSA9IGRhdGE7XG4gICAgICAgIHJlcy5qc29uKGRhdGEpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXNwb25zZURhdGEuZXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcik7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImlzRW1wdHkiLCJXb29Db21tZXJjZVJlc3RBcGkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImFwaSIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19XT1JEUFJFU1NfVVJMIiwiY29uc3VtZXJLZXkiLCJXQ19DT05TVU1FUl9LRVkiLCJjb25zdW1lclNlY3JldCIsIldDX0NPTlNVTUVSX1NFQ1JFVCIsIndwQVBJIiwidmVyc2lvbiIsIndwQVBJUHJlZml4IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3BvbnNlRGF0YSIsInN1Y2Nlc3MiLCJvcmRlcklkIiwidG90YWwiLCJjdXJyZW5jeSIsImVycm9yIiwiZGF0YSIsImJvZHkiLCJzdGF0dXMiLCJzZXRfcGFpZCIsInBvc3QiLCJudW1iZXIiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/order.js\n");

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