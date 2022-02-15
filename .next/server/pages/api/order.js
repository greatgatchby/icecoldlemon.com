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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WooCommerceRestApi = (__webpack_require__(/*! @woocommerce/woocommerce-rest-api */ \"@woocommerce/woocommerce-rest-api\")[\"default\"]);\nconst api = new WooCommerceRestApi({\n    url: \"https://seed.x10.mx/wp\",\n    consumerKey: process.env.WC_CONSUMER_KEY,\n    consumerSecret: process.env.WC_CONSUMER_SECRET,\n    version: \"wc/v3\"\n});\n/**\n * Create order endpoint.\n *\n * @see http://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#create-an-order\n *\n * @param {Object} req Request.\n * @param {Object} res Response.\n *\n * @return {Promise<{orderId: string, success: boolean, error: string}>}\n */ async function handler(req, res) {\n    const responseData = {\n        success: false,\n        orderId: '',\n        total: '',\n        currency: '',\n        error: '',\n        data: ''\n    };\n    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(req.body)) {\n        responseData.error = 'Required data not sent';\n        return responseData;\n    }\n    const data = req.body;\n    data.status = 'pending';\n    data.set_paid = false;\n    try {\n        const { data  } = await api.post('orders', req.body);\n        responseData.success = true;\n        responseData.orderId = data.number;\n        responseData.total = data.total;\n        responseData.currency = data.currency;\n        responseData.data = data;\n        res.json(data);\n    } catch (error) {\n        responseData.error = error.message;\n        res.status(500).json(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhCO0FBRDlCLEtBQUssQ0FBQ0Msa0JBQWtCLEdBQUdDLDhHQUFvRDtBQUcvRSxLQUFLLENBQUNFLEdBQUcsR0FBRyxHQUFHLENBQUNILGtCQUFrQixDQUFDLENBQUM7SUFDaENJLEdBQUcsRUFBRUMsd0JBQXFDO0lBQzFDRyxXQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxlQUFlO0lBQ3hDQyxjQUFjLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxrQkFBa0I7SUFDOUNDLE9BQU8sRUFBRSxDQUFPO0FBQ3BCLENBQUM7QUFFRCxFQVNHOzs7Ozs7Ozs7Q0FBQSxHQUNZLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUU3QyxLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO1FBQ2xCQyxPQUFPLEVBQUUsS0FBSztRQUNkQyxPQUFPLEVBQUUsQ0FBRTtRQUNYQyxLQUFLLEVBQUUsQ0FBRTtRQUNUQyxRQUFRLEVBQUUsQ0FBRTtRQUNaQyxLQUFLLEVBQUUsQ0FBRTtRQUNUQyxJQUFJLEVBQUUsQ0FBRTtJQUNaLENBQUM7SUFFRCxFQUFFLEVBQUd2QiwrQ0FBTyxDQUFDZSxHQUFHLENBQUNTLElBQUksR0FBSSxDQUFDO1FBQ3RCUCxZQUFZLENBQUNLLEtBQUssR0FBRyxDQUF3QjtRQUM3QyxNQUFNLENBQUNMLFlBQVk7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FBQ00sSUFBSSxHQUFHUixHQUFHLENBQUNTLElBQUk7SUFDckJELElBQUksQ0FBQ0UsTUFBTSxHQUFHLENBQVM7SUFDdkJGLElBQUksQ0FBQ0csUUFBUSxHQUFHLEtBQUs7SUFFckIsR0FBRyxDQUFDLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQ0gsQ0FBQUEsSUFBSSxHQUFDLEdBQUcsS0FBSyxDQUFDbkIsR0FBRyxDQUFDdUIsSUFBSSxDQUN6QixDQUFRLFNBQ1JaLEdBQUcsQ0FBQ1MsSUFBSTtRQUdaUCxZQUFZLENBQUNDLE9BQU8sR0FBRyxJQUFJO1FBQzNCRCxZQUFZLENBQUNFLE9BQU8sR0FBR0ksSUFBSSxDQUFDSyxNQUFNO1FBQ2xDWCxZQUFZLENBQUNHLEtBQUssR0FBR0csSUFBSSxDQUFDSCxLQUFLO1FBQy9CSCxZQUFZLENBQUNJLFFBQVEsR0FBR0UsSUFBSSxDQUFDRixRQUFRO1FBQ3JDSixZQUFZLENBQUNNLElBQUksR0FBR0EsSUFBSTtRQUN4QlAsR0FBRyxDQUFDYSxJQUFJLENBQUNOLElBQUk7SUFFakIsQ0FBQyxDQUFDLEtBQUssRUFBRUQsS0FBSyxFQUFFLENBQUM7UUFDYkwsWUFBWSxDQUFDSyxLQUFLLEdBQUdBLEtBQUssQ0FBQ1EsT0FBTztRQUNsQ2QsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFSSxJQUFJLENBQUNQLEtBQUs7SUFDOUIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pY2Vjb2xkbGVtb24uY29tLTEvLi9wYWdlcy9hcGkvb3JkZXIuanM/Mzk5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBXb29Db21tZXJjZVJlc3RBcGkgPSByZXF1aXJlKFwiQHdvb2NvbW1lcmNlL3dvb2NvbW1lcmNlLXJlc3QtYXBpXCIpLmRlZmF1bHQ7XG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJ2xvZGFzaCdcblxuY29uc3QgYXBpID0gbmV3IFdvb0NvbW1lcmNlUmVzdEFwaSh7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XT1JEUFJFU1NfVVJMLFxuICAgIGNvbnN1bWVyS2V5OiBwcm9jZXNzLmVudi5XQ19DT05TVU1FUl9LRVksXG4gICAgY29uc3VtZXJTZWNyZXQ6IHByb2Nlc3MuZW52LldDX0NPTlNVTUVSX1NFQ1JFVCxcbiAgICB2ZXJzaW9uOiBcIndjL3YzXCJcbn0pO1xuXG4vKipcbiAqIENyZWF0ZSBvcmRlciBlbmRwb2ludC5cbiAqXG4gKiBAc2VlIGh0dHA6Ly93b29jb21tZXJjZS5naXRodWIuaW8vd29vY29tbWVyY2UtcmVzdC1hcGktZG9jcy8/amF2YXNjcmlwdCNjcmVhdGUtYW4tb3JkZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVxIFJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVzIFJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge1Byb21pc2U8e29yZGVySWQ6IHN0cmluZywgc3VjY2VzczogYm9vbGVhbiwgZXJyb3I6IHN0cmluZ30+fVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBvcmRlcklkOiAnJyxcbiAgICAgICAgdG90YWw6ICcnLFxuICAgICAgICBjdXJyZW5jeTogJycsXG4gICAgICAgIGVycm9yOiAnJyxcbiAgICAgICAgZGF0YTogJydcbiAgICB9XG5cbiAgICBpZiAoIGlzRW1wdHkocmVxLmJvZHkpICkge1xuICAgICAgICByZXNwb25zZURhdGEuZXJyb3IgPSAnUmVxdWlyZWQgZGF0YSBub3Qgc2VudCc7XG4gICAgICAgIHJldHVybiByZXNwb25zZURhdGFcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgZGF0YS5zdGF0dXMgPSAncGVuZGluZyc7XG4gICAgZGF0YS5zZXRfcGFpZCA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXBpLnBvc3QoXG4gICAgICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgICAgIHJlcS5ib2R5XG4gICAgICAgICk7XG5cbiAgICAgICAgcmVzcG9uc2VEYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICByZXNwb25zZURhdGEub3JkZXJJZCA9IGRhdGEubnVtYmVyO1xuICAgICAgICByZXNwb25zZURhdGEudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICByZXNwb25zZURhdGEuY3VycmVuY3kgPSBkYXRhLmN1cnJlbmN5O1xuICAgICAgICByZXNwb25zZURhdGEuZGF0YSA9IGRhdGE7XG4gICAgICAgIHJlcy5qc29uKGRhdGEpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXNwb25zZURhdGEuZXJyb3IgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcik7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImlzRW1wdHkiLCJXb29Db21tZXJjZVJlc3RBcGkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImFwaSIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19XT1JEUFJFU1NfVVJMIiwiY29uc3VtZXJLZXkiLCJXQ19DT05TVU1FUl9LRVkiLCJjb25zdW1lclNlY3JldCIsIldDX0NPTlNVTUVSX1NFQ1JFVCIsInZlcnNpb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2VEYXRhIiwic3VjY2VzcyIsIm9yZGVySWQiLCJ0b3RhbCIsImN1cnJlbmN5IiwiZXJyb3IiLCJkYXRhIiwiYm9keSIsInN0YXR1cyIsInNldF9wYWlkIiwicG9zdCIsIm51bWJlciIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/order.js\n");

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