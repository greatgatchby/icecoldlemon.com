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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCreateOrderData\": function() { return /* binding */ getCreateOrderData; },\n/* harmony export */   \"getCreateOrderLineItems\": function() { return /* binding */ getCreateOrderLineItems; },\n/* harmony export */   \"createTheOrder\": function() { return /* binding */ createTheOrder; },\n/* harmony export */   \"handleStripeCheckout\": function() { return /* binding */ handleStripeCheckout; },\n/* harmony export */   \"clearTheCart\": function() { return /* binding */ clearTheCart; }\n/* harmony export */ });\n/* harmony import */ var _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_stripe_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-stripe/client */ \"./node_modules/next-stripe/client.js\");\n/* harmony import */ var next_stripe_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stripe_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\n // @see https://github.com/ynnoj/next-stripe\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar getCreateOrderData = function(order, products) {\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21;\n    // Set the billing Data to shipping, if applicable.\n    console.warn(products);\n    // Checkout data.\n    return {\n        shipping: {\n            first_name: order === null || order === void 0 ? void 0 : (ref = order.shipping) === null || ref === void 0 ? void 0 : ref.firstName,\n            last_name: order === null || order === void 0 ? void 0 : (ref1 = order.shipping) === null || ref1 === void 0 ? void 0 : ref1.lastName,\n            address_1: order === null || order === void 0 ? void 0 : (ref2 = order.shipping) === null || ref2 === void 0 ? void 0 : ref2.address1,\n            address_2: order === null || order === void 0 ? void 0 : (ref3 = order.shipping) === null || ref3 === void 0 ? void 0 : ref3.address2,\n            city: order === null || order === void 0 ? void 0 : (ref4 = order.shipping) === null || ref4 === void 0 ? void 0 : ref4.city,\n            country: order === null || order === void 0 ? void 0 : (ref5 = order.shipping) === null || ref5 === void 0 ? void 0 : ref5.country,\n            state: order === null || order === void 0 ? void 0 : (ref6 = order.shipping) === null || ref6 === void 0 ? void 0 : ref6.state,\n            postcode: order === null || order === void 0 ? void 0 : (ref7 = order.shipping) === null || ref7 === void 0 ? void 0 : ref7.zip,\n            email: order === null || order === void 0 ? void 0 : (ref8 = order.shipping) === null || ref8 === void 0 ? void 0 : ref8.email,\n            phone: order === null || order === void 0 ? void 0 : (ref9 = order.shipping) === null || ref9 === void 0 ? void 0 : ref9.phone,\n            company: order === null || order === void 0 ? void 0 : (ref10 = order.shipping) === null || ref10 === void 0 ? void 0 : ref10.company\n        },\n        billing: {\n            first_name: order === null || order === void 0 ? void 0 : (ref11 = order.billing) === null || ref11 === void 0 ? void 0 : ref11.firstName,\n            last_name: order === null || order === void 0 ? void 0 : (ref12 = order.billing) === null || ref12 === void 0 ? void 0 : ref12.lastName,\n            address_1: order === null || order === void 0 ? void 0 : (ref13 = order.billing) === null || ref13 === void 0 ? void 0 : ref13.address1,\n            address_2: order === null || order === void 0 ? void 0 : (ref14 = order.billing) === null || ref14 === void 0 ? void 0 : ref14.address2,\n            city: order === null || order === void 0 ? void 0 : (ref15 = order.billing) === null || ref15 === void 0 ? void 0 : ref15.city,\n            country: order === null || order === void 0 ? void 0 : (ref16 = order.billing) === null || ref16 === void 0 ? void 0 : ref16.country,\n            state: order === null || order === void 0 ? void 0 : (ref17 = order.billing) === null || ref17 === void 0 ? void 0 : ref17.state,\n            postcode: order === null || order === void 0 ? void 0 : (ref18 = order.billing) === null || ref18 === void 0 ? void 0 : ref18.zip,\n            email: order === null || order === void 0 ? void 0 : (ref19 = order.billing) === null || ref19 === void 0 ? void 0 : ref19.email,\n            phone: order === null || order === void 0 ? void 0 : (ref20 = order.billing) === null || ref20 === void 0 ? void 0 : ref20.phone,\n            company: order === null || order === void 0 ? void 0 : (ref21 = order.billing) === null || ref21 === void 0 ? void 0 : ref21.company\n        },\n        payment_method: 'stripe',\n        payment_method_title: 'Stripe',\n        line_items: getCreateOrderLineItems(products)\n    };\n};\nvar getCreateOrderLineItems = function(products) {\n    console.warn(products);\n    if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(products) || !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isArray)(products)) {\n        return [];\n    }\n    return products === null || products === void 0 ? void 0 : products.map(function(param) {\n        var id = param.id, quantity = param.qty;\n        id = new Buffer(id, \"base64\");\n        id = id.toString('ascii').split(':')[1];\n        return {\n            quantity: quantity,\n            product_id: id\n        };\n    });\n};\nvar createTheOrder = _asyncToGenerator(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(orderData, setOrderFailedError, previousRequestError) {\n    var response, request, result, ref, _total, _currency;\n    return _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                response = {\n                    orderId: null,\n                    total: '',\n                    currency: '',\n                    error: ''\n                };\n                if (!previousRequestError) {\n                    _ctx.next = 4;\n                    break;\n                }\n                response.error = previousRequestError;\n                return _ctx.abrupt(\"return\", response);\n            case 4:\n                setOrderFailedError('');\n                _ctx.prev = 5;\n                _ctx.next = 8;\n                return fetch('/api/order', {\n                    method: 'POST',\n                    headers: {\n                        'Content-Type': 'application/json'\n                    },\n                    body: JSON.stringify(orderData)\n                });\n            case 8:\n                request = _ctx.sent;\n                _ctx.next = 11;\n                return request.json();\n            case 11:\n                result = _ctx.sent;\n                if (result.error) {\n                    response.error = result.error;\n                    setOrderFailedError('Something went wrong. Order creation failed. Please try again');\n                }\n                ;\n                response.orderId = (ref = result === null || result === void 0 ? void 0 : result.orderId) !== null && ref !== void 0 ? ref : '';\n                ;\n                response.total = (_total = result.total) !== null && _total !== void 0 ? _total : '';\n                ;\n                response.currency = (_currency = result.currency) !== null && _currency !== void 0 ? _currency : '';\n                _ctx.next = 24;\n                break;\n            case 21:\n                _ctx.prev = 21;\n                _ctx.t0 = _ctx[\"catch\"](5);\n                // @TODO to be handled later.\n                console.warn('Handle create order error', _ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n            case 24:\n                return _ctx.abrupt(\"return\", response);\n            case 25:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee, null, [\n        [\n            5,\n            21\n        ]\n    ]);\n}));\nvar handleStripeCheckout = _asyncToGenerator(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(input, products, setRequestError, clearCartMutation, setIsStripeOrderProcessing, setCreatedOrderData) {\n    var orderData, createCustomerOrder, cartCleared;\n    return _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                setIsStripeOrderProcessing(true);\n                orderData = getCreateOrderData(input, products);\n                _ctx.next = 4;\n                return createTheOrder(orderData, setRequestError, '');\n            case 4:\n                createCustomerOrder = _ctx.sent;\n                _ctx.next = 7;\n                return clearTheCart(clearCartMutation, createCustomerOrder === null || createCustomerOrder === void 0 ? void 0 : createCustomerOrder.error);\n            case 7:\n                cartCleared = _ctx.sent;\n                setIsStripeOrderProcessing(false);\n                if (!((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(createCustomerOrder === null || createCustomerOrder === void 0 ? void 0 : createCustomerOrder.orderId) || (cartCleared === null || cartCleared === void 0 ? void 0 : cartCleared.error))) {\n                    _ctx.next = 13;\n                    break;\n                }\n                console.log('came in');\n                setRequestError('Clear cart failed');\n                return _ctx.abrupt(\"return\", null);\n            case 13:\n                // On success show stripe form.\n                setCreatedOrderData(createCustomerOrder);\n                _ctx.next = 16;\n                return createCheckoutSessionAndRedirect(products, input, createCustomerOrder === null || createCustomerOrder === void 0 ? void 0 : createCustomerOrder.orderId);\n            case 16:\n                return _ctx.abrupt(\"return\", createCustomerOrder);\n            case 17:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar clearTheCart = _asyncToGenerator(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(clearCartMutation, previousRequestError) {\n    var response, ref, data;\n    return _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                response = {\n                    cartCleared: false,\n                    error: ''\n                };\n                if (!previousRequestError) {\n                    _ctx.next = 4;\n                    break;\n                }\n                response.error = previousRequestError;\n                return _ctx.abrupt(\"return\", response);\n            case 4:\n                _ctx.prev = 4;\n                ;\n                _ctx.next = 8;\n                return clearCartMutation({\n                    variables: {\n                        input: {\n                            clientMutationId: uuidv4(),\n                            all: true\n                        }\n                    }\n                });\n            case 8:\n                data = _ctx.sent.data;\n                response.cartCleared = data === null || data === void 0 ? void 0 : (ref = data.removeItemsFromCart) === null || ref === void 0 ? void 0 : ref.cartItems.length;\n                _ctx.next = 15;\n                break;\n            case 12:\n                _ctx.prev = 12;\n                _ctx.t0 = _ctx[\"catch\"](4);\n                response.error = _ctx.t0.message;\n            case 15:\n                return _ctx.abrupt(\"return\", response);\n            case 16:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee, null, [\n        [\n            4,\n            12\n        ]\n    ]);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLElBQXpCQSxHQUF5QixHQUF6QkEsSUFBSSxDQUFFSyxtQkFBbUIsY0FBekJMLEdBQXlCLEtBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxHQUF5QixDQUFFTSxTQUFTLENBQUNDLE1BQU07Ozs7OztnQkFHbEVqQyxRQUFRLENBQUNNLEtBQUssV0FBT1EsT0FBTzs7NkNBR3pCZCxRQUFROzs7Ozs7Ozs7OztBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3RyaXBlL3Nlc3Npb24uanM/MDk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDaGVja291dFNlc3Npb24gfSBmcm9tICduZXh0LXN0cmlwZS9jbGllbnQnIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3lubm9qL25leHQtc3RyaXBlXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5pbXBvcnQge2lzRW1wdHksIGlzQXJyYXl9IGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGNvbnN0IGdldENyZWF0ZU9yZGVyRGF0YSA9IChvcmRlciwgcHJvZHVjdHMpID0+IHtcbiAgICAvLyBTZXQgdGhlIGJpbGxpbmcgRGF0YSB0byBzaGlwcGluZywgaWYgYXBwbGljYWJsZS5cbiAgICBjb25zb2xlLndhcm4ocHJvZHVjdHMpXG4gICAgLy8gQ2hlY2tvdXQgZGF0YS5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaGlwcGluZzoge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogb3JkZXI/LnNoaXBwaW5nPy5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG9yZGVyPy5zaGlwcGluZz8ubGFzdE5hbWUsXG4gICAgICAgICAgICBhZGRyZXNzXzE6IG9yZGVyPy5zaGlwcGluZz8uYWRkcmVzczEsXG4gICAgICAgICAgICBhZGRyZXNzXzI6IG9yZGVyPy5zaGlwcGluZz8uYWRkcmVzczIsXG4gICAgICAgICAgICBjaXR5OiBvcmRlcj8uc2hpcHBpbmc/LmNpdHksXG4gICAgICAgICAgICBjb3VudHJ5OiBvcmRlcj8uc2hpcHBpbmc/LmNvdW50cnksXG4gICAgICAgICAgICBzdGF0ZTogb3JkZXI/LnNoaXBwaW5nPy5zdGF0ZSxcbiAgICAgICAgICAgIHBvc3Rjb2RlOiBvcmRlcj8uc2hpcHBpbmc/LnppcCxcbiAgICAgICAgICAgIGVtYWlsOiBvcmRlcj8uc2hpcHBpbmc/LmVtYWlsLFxuICAgICAgICAgICAgcGhvbmU6IG9yZGVyPy5zaGlwcGluZz8ucGhvbmUsXG4gICAgICAgICAgICBjb21wYW55OiBvcmRlcj8uc2hpcHBpbmc/LmNvbXBhbnksXG4gICAgICAgIH0sXG4gICAgICAgIGJpbGxpbmc6IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG9yZGVyPy5iaWxsaW5nPy5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG9yZGVyPy5iaWxsaW5nPy5sYXN0TmFtZSxcbiAgICAgICAgICAgIGFkZHJlc3NfMTogb3JkZXI/LmJpbGxpbmc/LmFkZHJlc3MxLFxuICAgICAgICAgICAgYWRkcmVzc18yOiBvcmRlcj8uYmlsbGluZz8uYWRkcmVzczIsXG4gICAgICAgICAgICBjaXR5OiBvcmRlcj8uYmlsbGluZz8uY2l0eSxcbiAgICAgICAgICAgIGNvdW50cnk6IG9yZGVyPy5iaWxsaW5nPy5jb3VudHJ5LFxuICAgICAgICAgICAgc3RhdGU6IG9yZGVyPy5iaWxsaW5nPy5zdGF0ZSxcbiAgICAgICAgICAgIHBvc3Rjb2RlOiBvcmRlcj8uYmlsbGluZz8uemlwLFxuICAgICAgICAgICAgZW1haWw6IG9yZGVyPy5iaWxsaW5nPy5lbWFpbCxcbiAgICAgICAgICAgIHBob25lOiBvcmRlcj8uYmlsbGluZz8ucGhvbmUsXG4gICAgICAgICAgICBjb21wYW55OiBvcmRlcj8uYmlsbGluZz8uY29tcGFueSxcbiAgICAgICAgfSxcbiAgICAgICAgcGF5bWVudF9tZXRob2Q6ICdzdHJpcGUnLFxuICAgICAgICBwYXltZW50X21ldGhvZF90aXRsZTogJ1N0cmlwZScsXG4gICAgICAgIGxpbmVfaXRlbXM6IGdldENyZWF0ZU9yZGVyTGluZUl0ZW1zKCBwcm9kdWN0cyApLFxuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDcmVhdGVPcmRlckxpbmVJdGVtcyA9IChwcm9kdWN0cykgPT4ge1xuICAgIGNvbnNvbGUud2Fybihwcm9kdWN0cylcbiAgICBpZiAoaXNFbXB0eShwcm9kdWN0cykgfHwgIWlzQXJyYXkoIHByb2R1Y3RzICkpIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3RzPy5tYXAoXG4gICAgICAgICh7aWQsIHF0eTogcXVhbnRpdHl9KSA9PiB7XG4gICAgICAgICAgICBpZCA9IG5ldyBCdWZmZXIoaWQsIFwiYmFzZTY0XCIpXG4gICAgICAgICAgICBpZCA9IGlkLnRvU3RyaW5nKCdhc2NpaScpLnNwbGl0KCc6JylbMV1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogaWQsXG4gICAgICAgICAgICAgICAgLy8gdmFyaWF0aW9uX2lkOiAnJywgLy8gQFRPRE8gdG8gYmUgYWRkZWQuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaGVPcmRlciA9IGFzeW5jICggb3JkZXJEYXRhLCBzZXRPcmRlckZhaWxlZEVycm9yLCBwcmV2aW91c1JlcXVlc3RFcnJvciApID0+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgIG9yZGVySWQ6IG51bGwsXG4gICAgICAgIHRvdGFsOiAnJyxcbiAgICAgICAgY3VycmVuY3k6ICcnLFxuICAgICAgICBlcnJvcjogJydcbiAgICB9O1xuXG4gICAgLy8gRG9uJ3QgcHJvY2VlZCBpZiBwcmV2aW91cyByZXF1ZXN0IGhhcyBlcnJvci5cbiAgICBpZiAoIHByZXZpb3VzUmVxdWVzdEVycm9yICkge1xuICAgICAgICByZXNwb25zZS5lcnJvciA9IHByZXZpb3VzUmVxdWVzdEVycm9yO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgc2V0T3JkZXJGYWlsZWRFcnJvciggJycgKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCggJy9hcGkvb3JkZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCBvcmRlckRhdGEgKSxcbiAgICAgICAgfSApO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgICBpZiAoIHJlc3VsdC5lcnJvciApIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yID0gcmVzdWx0LmVycm9yXG4gICAgICAgICAgICBzZXRPcmRlckZhaWxlZEVycm9yKCAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIE9yZGVyIGNyZWF0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbicgKTtcbiAgICAgICAgfVxuICAgICAgICByZXNwb25zZS5vcmRlcklkID0gcmVzdWx0Py5vcmRlcklkID8/ICcnO1xuICAgICAgICByZXNwb25zZS50b3RhbCA9IHJlc3VsdC50b3RhbCA/PyAnJztcbiAgICAgICAgcmVzcG9uc2UuY3VycmVuY3kgPSByZXN1bHQuY3VycmVuY3kgPz8gJyc7XG5cbiAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIEBUT0RPIHRvIGJlIGhhbmRsZWQgbGF0ZXIuXG4gICAgICAgIGNvbnNvbGUud2FybiggJ0hhbmRsZSBjcmVhdGUgb3JkZXIgZXJyb3InLCBlcnJvcj8ubWVzc2FnZSApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cmlwZUNoZWNrb3V0ID0gYXN5bmMgKGlucHV0LCBwcm9kdWN0cywgc2V0UmVxdWVzdEVycm9yLCBjbGVhckNhcnRNdXRhdGlvbiwgc2V0SXNTdHJpcGVPcmRlclByb2Nlc3NpbmcsIHNldENyZWF0ZWRPcmRlckRhdGEpID0+IHtcbiAgICBzZXRJc1N0cmlwZU9yZGVyUHJvY2Vzc2luZyh0cnVlKTtcbiAgICBjb25zdCBvcmRlckRhdGEgPSBnZXRDcmVhdGVPcmRlckRhdGEoIGlucHV0LCBwcm9kdWN0cyApO1xuICAgIGNvbnN0IGNyZWF0ZUN1c3RvbWVyT3JkZXIgPSBhd2FpdCBjcmVhdGVUaGVPcmRlciggb3JkZXJEYXRhLCBzZXRSZXF1ZXN0RXJyb3IsICAnJyApO1xuICAgIGNvbnN0IGNhcnRDbGVhcmVkID0gYXdhaXQgY2xlYXJUaGVDYXJ0KCBjbGVhckNhcnRNdXRhdGlvbiwgY3JlYXRlQ3VzdG9tZXJPcmRlcj8uZXJyb3IgKTtcbiAgICBzZXRJc1N0cmlwZU9yZGVyUHJvY2Vzc2luZyhmYWxzZSk7XG5cblxuICAgIGlmICggaXNFbXB0eSggY3JlYXRlQ3VzdG9tZXJPcmRlcj8ub3JkZXJJZCApIHx8IGNhcnRDbGVhcmVkPy5lcnJvciApIHtcbiAgICAgICAgY29uc29sZS5sb2coICdjYW1lIGluJyApO1xuICAgICAgICBzZXRSZXF1ZXN0RXJyb3IoJ0NsZWFyIGNhcnQgZmFpbGVkJylcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gT24gc3VjY2VzcyBzaG93IHN0cmlwZSBmb3JtLlxuICAgIHNldENyZWF0ZWRPcmRlckRhdGEoY3JlYXRlQ3VzdG9tZXJPcmRlcilcbiAgICBhd2FpdCBjcmVhdGVDaGVja291dFNlc3Npb25BbmRSZWRpcmVjdCggcHJvZHVjdHMsIGlucHV0LCBjcmVhdGVDdXN0b21lck9yZGVyPy5vcmRlcklkICk7XG5cbiAgICByZXR1cm4gY3JlYXRlQ3VzdG9tZXJPcmRlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFyVGhlQ2FydCA9IGFzeW5jIChjbGVhckNhcnRNdXRhdGlvbiwgcHJldmlvdXNSZXF1ZXN0RXJyb3IpID0+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgIGNhcnRDbGVhcmVkOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6ICcnXG4gICAgfTtcblxuICAgIC8vIERvbid0IHByb2NlZWQgaWYgcHJldmlvdXMgcmVxdWVzdCBoYXMgZXJyb3IuXG4gICAgaWYgKCBwcmV2aW91c1JlcXVlc3RFcnJvciApIHtcbiAgICAgICAgcmVzcG9uc2UuZXJyb3IgPSBwcmV2aW91c1JlcXVlc3RFcnJvcjtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGNsZWFyQ2FydE11dGF0aW9uKCB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnRNdXRhdGlvbklkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICAgICAgYWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9ICk7XG5cbiAgICAgICAgcmVzcG9uc2UuY2FydENsZWFyZWQgPSBkYXRhPy5yZW1vdmVJdGVtc0Zyb21DYXJ0Py5jYXJ0SXRlbXMubGVuZ3RoO1xuXG4gICAgfSBjYXRjaCAoIGVyciApIHtcbiAgICAgICAgcmVzcG9uc2UuZXJyb3IgPSBlcnIubWVzc2FnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2hlY2tvdXRTZXNzaW9uIiwibG9hZFN0cmlwZSIsImlzRW1wdHkiLCJpc0FycmF5IiwiZ2V0Q3JlYXRlT3JkZXJEYXRhIiwicHJvZHVjdHMiLCJvcmRlciIsImNvbnNvbGUiLCJ3YXJuIiwic2hpcHBpbmciLCJmaXJzdF9uYW1lIiwiZmlyc3ROYW1lIiwibGFzdF9uYW1lIiwibGFzdE5hbWUiLCJhZGRyZXNzXzEiLCJhZGRyZXNzMSIsImFkZHJlc3NfMiIsImFkZHJlc3MyIiwiY2l0eSIsImNvdW50cnkiLCJzdGF0ZSIsInBvc3Rjb2RlIiwiemlwIiwiZW1haWwiLCJwaG9uZSIsImNvbXBhbnkiLCJiaWxsaW5nIiwicGF5bWVudF9tZXRob2QiLCJwYXltZW50X21ldGhvZF90aXRsZSIsImxpbmVfaXRlbXMiLCJnZXRDcmVhdGVPcmRlckxpbmVJdGVtcyIsIm1hcCIsImlkIiwicXVhbnRpdHkiLCJxdHkiLCJCdWZmZXIiLCJ0b1N0cmluZyIsInNwbGl0IiwicHJvZHVjdF9pZCIsImNyZWF0ZVRoZU9yZGVyIiwib3JkZXJEYXRhIiwic2V0T3JkZXJGYWlsZWRFcnJvciIsInByZXZpb3VzUmVxdWVzdEVycm9yIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwicmVzdWx0Iiwib3JkZXJJZCIsInRvdGFsIiwiY3VycmVuY3kiLCJlcnJvciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm1lc3NhZ2UiLCJoYW5kbGVTdHJpcGVDaGVja291dCIsImlucHV0Iiwic2V0UmVxdWVzdEVycm9yIiwiY2xlYXJDYXJ0TXV0YXRpb24iLCJzZXRJc1N0cmlwZU9yZGVyUHJvY2Vzc2luZyIsInNldENyZWF0ZWRPcmRlckRhdGEiLCJjcmVhdGVDdXN0b21lck9yZGVyIiwiY2FydENsZWFyZWQiLCJjbGVhclRoZUNhcnQiLCJsb2ciLCJjcmVhdGVDaGVja291dFNlc3Npb25BbmRSZWRpcmVjdCIsImRhdGEiLCJ2YXJpYWJsZXMiLCJjbGllbnRNdXRhdGlvbklkIiwidXVpZHY0IiwiYWxsIiwicmVtb3ZlSXRlbXNGcm9tQ2FydCIsImNhcnRJdGVtcyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/stripe/session.js\n");

/***/ })

});