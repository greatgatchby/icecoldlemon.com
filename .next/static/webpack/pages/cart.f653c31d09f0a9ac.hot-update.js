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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCreateOrderData\": function() { return /* binding */ getCreateOrderData; },\n/* harmony export */   \"getCreateOrderLineItems\": function() { return /* binding */ getCreateOrderLineItems; },\n/* harmony export */   \"createTheOrder\": function() { return /* binding */ createTheOrder; },\n/* harmony export */   \"handleStripeCheckout\": function() { return /* binding */ handleStripeCheckout; },\n/* harmony export */   \"clearTheCart\": function() { return /* binding */ clearTheCart; }\n/* harmony export */ });\n/* harmony import */ var _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_stripe_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-stripe/client */ \"./node_modules/next-stripe/client.js\");\n/* harmony import */ var next_stripe_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stripe_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\n // @see https://github.com/ynnoj/next-stripe\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar getCreateOrderData = function(order, products) {\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21;\n    // Set the billing Data to shipping, if applicable.\n    // Checkout data.\n    return {\n        shipping: {\n            first_name: order === null || order === void 0 ? void 0 : (ref = order.shipping) === null || ref === void 0 ? void 0 : ref.firstName,\n            last_name: order === null || order === void 0 ? void 0 : (ref1 = order.shipping) === null || ref1 === void 0 ? void 0 : ref1.lastName,\n            address_1: order === null || order === void 0 ? void 0 : (ref2 = order.shipping) === null || ref2 === void 0 ? void 0 : ref2.address1,\n            address_2: order === null || order === void 0 ? void 0 : (ref3 = order.shipping) === null || ref3 === void 0 ? void 0 : ref3.address2,\n            city: order === null || order === void 0 ? void 0 : (ref4 = order.shipping) === null || ref4 === void 0 ? void 0 : ref4.city,\n            country: order === null || order === void 0 ? void 0 : (ref5 = order.shipping) === null || ref5 === void 0 ? void 0 : ref5.country,\n            state: order === null || order === void 0 ? void 0 : (ref6 = order.shipping) === null || ref6 === void 0 ? void 0 : ref6.state,\n            postcode: order === null || order === void 0 ? void 0 : (ref7 = order.shipping) === null || ref7 === void 0 ? void 0 : ref7.zip,\n            email: order === null || order === void 0 ? void 0 : (ref8 = order.shipping) === null || ref8 === void 0 ? void 0 : ref8.email,\n            phone: order === null || order === void 0 ? void 0 : (ref9 = order.shipping) === null || ref9 === void 0 ? void 0 : ref9.phone,\n            company: order === null || order === void 0 ? void 0 : (ref10 = order.shipping) === null || ref10 === void 0 ? void 0 : ref10.company\n        },\n        billing: {\n            first_name: order === null || order === void 0 ? void 0 : (ref11 = order.billing) === null || ref11 === void 0 ? void 0 : ref11.firstName,\n            last_name: order === null || order === void 0 ? void 0 : (ref12 = order.billing) === null || ref12 === void 0 ? void 0 : ref12.lastName,\n            address_1: order === null || order === void 0 ? void 0 : (ref13 = order.billing) === null || ref13 === void 0 ? void 0 : ref13.address1,\n            address_2: order === null || order === void 0 ? void 0 : (ref14 = order.billing) === null || ref14 === void 0 ? void 0 : ref14.address2,\n            city: order === null || order === void 0 ? void 0 : (ref15 = order.billing) === null || ref15 === void 0 ? void 0 : ref15.city,\n            country: order === null || order === void 0 ? void 0 : (ref16 = order.billing) === null || ref16 === void 0 ? void 0 : ref16.country,\n            state: order === null || order === void 0 ? void 0 : (ref17 = order.billing) === null || ref17 === void 0 ? void 0 : ref17.state,\n            postcode: order === null || order === void 0 ? void 0 : (ref18 = order.billing) === null || ref18 === void 0 ? void 0 : ref18.zip,\n            email: order === null || order === void 0 ? void 0 : (ref19 = order.billing) === null || ref19 === void 0 ? void 0 : ref19.email,\n            phone: order === null || order === void 0 ? void 0 : (ref20 = order.billing) === null || ref20 === void 0 ? void 0 : ref20.phone,\n            company: order === null || order === void 0 ? void 0 : (ref21 = order.billing) === null || ref21 === void 0 ? void 0 : ref21.company\n        },\n        payment_method: 'stripe',\n        payment_method_title: 'Stripe',\n        line_items: getCreateOrderLineItems(products)\n    };\n};\nvar getCreateOrderLineItems = function(products) {\n    if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(products) || !(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isArray)(products)) {\n        return [];\n    }\n    return products === null || products === void 0 ? void 0 : products.map(function(param) {\n        var id = param.id, quantity = param.qty;\n        id = new Buffer(id, \"base64\");\n        id = id.toString('ascii').split(':')[1];\n        return {\n            quantity: quantity,\n            product_id: id\n        };\n    });\n};\nvar createTheOrder = _asyncToGenerator(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(orderData, setOrderFailedError, previousRequestError) {\n    var response, request, result, ref, _total, _currency;\n    return _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                response = {\n                    orderId: null,\n                    total: '',\n                    currency: '',\n                    error: ''\n                };\n                if (!previousRequestError) {\n                    _ctx.next = 4;\n                    break;\n                }\n                response.error = previousRequestError;\n                return _ctx.abrupt(\"return\", response);\n            case 4:\n                setOrderFailedError('');\n                _ctx.prev = 5;\n                _ctx.next = 8;\n                return fetch('/api/order', {\n                    method: 'POST',\n                    headers: {\n                        'Content-Type': 'application/json'\n                    },\n                    body: JSON.stringify(orderData)\n                });\n            case 8:\n                request = _ctx.sent;\n                _ctx.next = 11;\n                return request.json();\n            case 11:\n                result = _ctx.sent;\n                if (result.error) {\n                    response.error = result.error;\n                    setOrderFailedError('Something went wrong. Order creation failed. Please try again');\n                }\n                ;\n                response.id = (ref = result === null || result === void 0 ? void 0 : result.orderId) !== null && ref !== void 0 ? ref : '';\n                ;\n                response.total = (_total = result.total) !== null && _total !== void 0 ? _total : '';\n                ;\n                response.currency = (_currency = result.currency) !== null && _currency !== void 0 ? _currency : '';\n                _ctx.next = 24;\n                break;\n            case 21:\n                _ctx.prev = 21;\n                _ctx.t0 = _ctx[\"catch\"](5);\n                // @TODO to be handled later.\n                console.warn('Handle create order error', _ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message);\n            case 24:\n                return _ctx.abrupt(\"return\", response);\n            case 25:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee, null, [\n        [\n            5,\n            21\n        ]\n    ]);\n}));\nvar handleStripeCheckout = _asyncToGenerator(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(input, products, setRequestError, clearCartMutation, setIsStripeOrderProcessing, setCreatedOrderData) {\n    var orderData, createCustomerOrder, cartCleared;\n    return _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                setIsStripeOrderProcessing(true);\n                orderData = getCreateOrderData(input, products);\n                _ctx.next = 4;\n                return createTheOrder(orderData, setRequestError, '');\n            case 4:\n                createCustomerOrder = _ctx.sent;\n                _ctx.next = 7;\n                return clearTheCart(clearCartMutation, createCustomerOrder === null || createCustomerOrder === void 0 ? void 0 : createCustomerOrder.error);\n            case 7:\n                cartCleared = _ctx.sent;\n                setIsStripeOrderProcessing(false);\n                console.warn(orderData);\n                if (!((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(createCustomerOrder === null || createCustomerOrder === void 0 ? void 0 : createCustomerOrder.orderId) || (cartCleared === null || cartCleared === void 0 ? void 0 : cartCleared.error))) {\n                    _ctx.next = 14;\n                    break;\n                }\n                console.log('came in');\n                setRequestError('Clear cart failed');\n                return _ctx.abrupt(\"return\", null);\n            case 14:\n                // On success show stripe form.\n                setCreatedOrderData(createCustomerOrder);\n                _ctx.next = 17;\n                return createCheckoutSessionAndRedirect(products, input, createCustomerOrder === null || createCustomerOrder === void 0 ? void 0 : createCustomerOrder.orderId);\n            case 17:\n                return _ctx.abrupt(\"return\", createCustomerOrder);\n            case 18:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar clearTheCart = _asyncToGenerator(_Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(clearCartMutation, previousRequestError) {\n    var response, ref, data;\n    return _Users_jakengatchu_Downloads_icecoldlemon_com_dev_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                response = {\n                    cartCleared: false,\n                    error: ''\n                };\n                if (!previousRequestError) {\n                    _ctx.next = 4;\n                    break;\n                }\n                response.error = previousRequestError;\n                return _ctx.abrupt(\"return\", response);\n            case 4:\n                _ctx.prev = 4;\n                ;\n                _ctx.next = 8;\n                return clearCartMutation({\n                    variables: {\n                        input: {\n                            clientMutationId: uuidv4(),\n                            all: true\n                        }\n                    }\n                });\n            case 8:\n                data = _ctx.sent.data;\n                response.cartCleared = data === null || data === void 0 ? void 0 : (ref = data.removeItemsFromCart) === null || ref === void 0 ? void 0 : ref.cartItems.length;\n                _ctx.next = 15;\n                break;\n            case 12:\n                _ctx.prev = 12;\n                _ctx.t0 = _ctx[\"catch\"](4);\n                response.error = _ctx.t0.message;\n            case 15:\n                return _ctx.abrupt(\"return\", response);\n            case 16:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee, null, [\n        [\n            4,\n            12\n        ]\n    ]);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFKQSxDQUF5QixJQUF6QkEsR0FBeUIsR0FBekJBLElBQUksQ0FBRUssbUJBQW1CLGNBQXpCTCxHQUF5QixLQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsSUFBSSxDQUFKQSxDQUF5QixHQUF6QkEsR0FBeUIsQ0FBRU0sU0FBUyxDQUFDQyxNQUFNOzs7Ozs7Z0JBR2xFbkMsUUFBUSxDQUFDTSxLQUFLLFdBQU9VLE9BQU87OzZDQUd6QmhCLFFBQVE7Ozs7Ozs7Ozs7O0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHJpcGUvc2Vzc2lvbi5qcz8wOThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNoZWNrb3V0U2Vzc2lvbiB9IGZyb20gJ25leHQtc3RyaXBlL2NsaWVudCcgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20veW5ub2ovbmV4dC1zdHJpcGVcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCB7aXNFbXB0eSwgaXNBcnJheX0gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY29uc3QgZ2V0Q3JlYXRlT3JkZXJEYXRhID0gKG9yZGVyLCBwcm9kdWN0cykgPT4ge1xuICAgIC8vIFNldCB0aGUgYmlsbGluZyBEYXRhIHRvIHNoaXBwaW5nLCBpZiBhcHBsaWNhYmxlLlxuICAgIC8vIENoZWNrb3V0IGRhdGEuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hpcHBpbmc6IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG9yZGVyPy5zaGlwcGluZz8uZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBvcmRlcj8uc2hpcHBpbmc/Lmxhc3ROYW1lLFxuICAgICAgICAgICAgYWRkcmVzc18xOiBvcmRlcj8uc2hpcHBpbmc/LmFkZHJlc3MxLFxuICAgICAgICAgICAgYWRkcmVzc18yOiBvcmRlcj8uc2hpcHBpbmc/LmFkZHJlc3MyLFxuICAgICAgICAgICAgY2l0eTogb3JkZXI/LnNoaXBwaW5nPy5jaXR5LFxuICAgICAgICAgICAgY291bnRyeTogb3JkZXI/LnNoaXBwaW5nPy5jb3VudHJ5LFxuICAgICAgICAgICAgc3RhdGU6IG9yZGVyPy5zaGlwcGluZz8uc3RhdGUsXG4gICAgICAgICAgICBwb3N0Y29kZTogb3JkZXI/LnNoaXBwaW5nPy56aXAsXG4gICAgICAgICAgICBlbWFpbDogb3JkZXI/LnNoaXBwaW5nPy5lbWFpbCxcbiAgICAgICAgICAgIHBob25lOiBvcmRlcj8uc2hpcHBpbmc/LnBob25lLFxuICAgICAgICAgICAgY29tcGFueTogb3JkZXI/LnNoaXBwaW5nPy5jb21wYW55LFxuICAgICAgICB9LFxuICAgICAgICBiaWxsaW5nOiB7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBvcmRlcj8uYmlsbGluZz8uZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBvcmRlcj8uYmlsbGluZz8ubGFzdE5hbWUsXG4gICAgICAgICAgICBhZGRyZXNzXzE6IG9yZGVyPy5iaWxsaW5nPy5hZGRyZXNzMSxcbiAgICAgICAgICAgIGFkZHJlc3NfMjogb3JkZXI/LmJpbGxpbmc/LmFkZHJlc3MyLFxuICAgICAgICAgICAgY2l0eTogb3JkZXI/LmJpbGxpbmc/LmNpdHksXG4gICAgICAgICAgICBjb3VudHJ5OiBvcmRlcj8uYmlsbGluZz8uY291bnRyeSxcbiAgICAgICAgICAgIHN0YXRlOiBvcmRlcj8uYmlsbGluZz8uc3RhdGUsXG4gICAgICAgICAgICBwb3N0Y29kZTogb3JkZXI/LmJpbGxpbmc/LnppcCxcbiAgICAgICAgICAgIGVtYWlsOiBvcmRlcj8uYmlsbGluZz8uZW1haWwsXG4gICAgICAgICAgICBwaG9uZTogb3JkZXI/LmJpbGxpbmc/LnBob25lLFxuICAgICAgICAgICAgY29tcGFueTogb3JkZXI/LmJpbGxpbmc/LmNvbXBhbnksXG4gICAgICAgIH0sXG4gICAgICAgIHBheW1lbnRfbWV0aG9kOiAnc3RyaXBlJyxcbiAgICAgICAgcGF5bWVudF9tZXRob2RfdGl0bGU6ICdTdHJpcGUnLFxuICAgICAgICBsaW5lX2l0ZW1zOiBnZXRDcmVhdGVPcmRlckxpbmVJdGVtcyggcHJvZHVjdHMgKSxcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3JlYXRlT3JkZXJMaW5lSXRlbXMgPSAocHJvZHVjdHMpID0+IHtcbiAgICBpZiAoaXNFbXB0eShwcm9kdWN0cykgfHwgIWlzQXJyYXkoIHByb2R1Y3RzICkpIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3RzPy5tYXAoXG4gICAgICAgICh7aWQsIHF0eTogcXVhbnRpdHl9KSA9PiB7XG4gICAgICAgICAgICBpZCA9IG5ldyBCdWZmZXIoaWQsIFwiYmFzZTY0XCIpXG4gICAgICAgICAgICBpZCA9IGlkLnRvU3RyaW5nKCdhc2NpaScpLnNwbGl0KCc6JylbMV1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogaWQsXG4gICAgICAgICAgICAgICAgLy8gdmFyaWF0aW9uX2lkOiAnJywgLy8gQFRPRE8gdG8gYmUgYWRkZWQuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaGVPcmRlciA9IGFzeW5jICggb3JkZXJEYXRhLCBzZXRPcmRlckZhaWxlZEVycm9yLCBwcmV2aW91c1JlcXVlc3RFcnJvciApID0+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICAgIG9yZGVySWQ6IG51bGwsXG4gICAgICAgIHRvdGFsOiAnJyxcbiAgICAgICAgY3VycmVuY3k6ICcnLFxuICAgICAgICBlcnJvcjogJydcbiAgICB9O1xuXG4gICAgLy8gRG9uJ3QgcHJvY2VlZCBpZiBwcmV2aW91cyByZXF1ZXN0IGhhcyBlcnJvci5cbiAgICBpZiAoIHByZXZpb3VzUmVxdWVzdEVycm9yICkge1xuICAgICAgICByZXNwb25zZS5lcnJvciA9IHByZXZpb3VzUmVxdWVzdEVycm9yO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgc2V0T3JkZXJGYWlsZWRFcnJvciggJycgKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goICcvYXBpL29yZGVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSggb3JkZXJEYXRhICksXG4gICAgICAgIH0gKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgaWYgKCByZXN1bHQuZXJyb3IgKSB7XG4gICAgICAgICAgICByZXNwb25zZS5lcnJvciA9IHJlc3VsdC5lcnJvclxuICAgICAgICAgICAgc2V0T3JkZXJGYWlsZWRFcnJvciggJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBPcmRlciBjcmVhdGlvbiBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4nICk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2UuaWQgPSByZXN1bHQ/Lm9yZGVySWQgPz8gJyc7XG4gICAgICAgIHJlc3BvbnNlLnRvdGFsID0gcmVzdWx0LnRvdGFsID8/ICcnO1xuICAgICAgICByZXNwb25zZS5jdXJyZW5jeSA9IHJlc3VsdC5jdXJyZW5jeSA/PyAnJztcblxuICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgLy8gQFRPRE8gdG8gYmUgaGFuZGxlZCBsYXRlci5cbiAgICAgICAgY29uc29sZS53YXJuKCAnSGFuZGxlIGNyZWF0ZSBvcmRlciBlcnJvcicsIGVycm9yPy5tZXNzYWdlICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlU3RyaXBlQ2hlY2tvdXQgPSBhc3luYyAoaW5wdXQsIHByb2R1Y3RzLCBzZXRSZXF1ZXN0RXJyb3IsIGNsZWFyQ2FydE11dGF0aW9uLCBzZXRJc1N0cmlwZU9yZGVyUHJvY2Vzc2luZywgc2V0Q3JlYXRlZE9yZGVyRGF0YSkgPT4ge1xuICAgIHNldElzU3RyaXBlT3JkZXJQcm9jZXNzaW5nKHRydWUpO1xuICAgIGNvbnN0IG9yZGVyRGF0YSA9IGdldENyZWF0ZU9yZGVyRGF0YSggaW5wdXQsIHByb2R1Y3RzICk7XG4gICAgY29uc3QgY3JlYXRlQ3VzdG9tZXJPcmRlciA9IGF3YWl0IGNyZWF0ZVRoZU9yZGVyKCBvcmRlckRhdGEsIHNldFJlcXVlc3RFcnJvciwgICcnICk7XG4gICAgY29uc3QgY2FydENsZWFyZWQgPSBhd2FpdCBjbGVhclRoZUNhcnQoIGNsZWFyQ2FydE11dGF0aW9uLCBjcmVhdGVDdXN0b21lck9yZGVyPy5lcnJvciApO1xuICAgIHNldElzU3RyaXBlT3JkZXJQcm9jZXNzaW5nKGZhbHNlKTtcblxuICAgIGNvbnNvbGUud2FybihvcmRlckRhdGEpXG4gICAgaWYgKCBpc0VtcHR5KCBjcmVhdGVDdXN0b21lck9yZGVyPy5vcmRlcklkICkgfHwgY2FydENsZWFyZWQ/LmVycm9yICkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ2NhbWUgaW4nICk7XG4gICAgICAgIHNldFJlcXVlc3RFcnJvcignQ2xlYXIgY2FydCBmYWlsZWQnKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBPbiBzdWNjZXNzIHNob3cgc3RyaXBlIGZvcm0uXG4gICAgc2V0Q3JlYXRlZE9yZGVyRGF0YShjcmVhdGVDdXN0b21lck9yZGVyKVxuICAgIGF3YWl0IGNyZWF0ZUNoZWNrb3V0U2Vzc2lvbkFuZFJlZGlyZWN0KCBwcm9kdWN0cywgaW5wdXQsIGNyZWF0ZUN1c3RvbWVyT3JkZXI/Lm9yZGVySWQgKTtcblxuICAgIHJldHVybiBjcmVhdGVDdXN0b21lck9yZGVyO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJUaGVDYXJ0ID0gYXN5bmMgKGNsZWFyQ2FydE11dGF0aW9uLCBwcmV2aW91c1JlcXVlc3RFcnJvcikgPT4ge1xuICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgICAgY2FydENsZWFyZWQ6IGZhbHNlLFxuICAgICAgICBlcnJvcjogJydcbiAgICB9O1xuXG4gICAgLy8gRG9uJ3QgcHJvY2VlZCBpZiBwcmV2aW91cyByZXF1ZXN0IGhhcyBlcnJvci5cbiAgICBpZiAoIHByZXZpb3VzUmVxdWVzdEVycm9yICkge1xuICAgICAgICByZXNwb25zZS5lcnJvciA9IHByZXZpb3VzUmVxdWVzdEVycm9yO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgY2xlYXJDYXJ0TXV0YXRpb24oIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudE11dGF0aW9uSWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgICAgICAgICBhbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gKTtcblxuICAgICAgICByZXNwb25zZS5jYXJ0Q2xlYXJlZCA9IGRhdGE/LnJlbW92ZUl0ZW1zRnJvbUNhcnQ/LmNhcnRJdGVtcy5sZW5ndGg7XG5cbiAgICB9IGNhdGNoICggZXJyICkge1xuICAgICAgICByZXNwb25zZS5lcnJvciA9IGVyci5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDaGVja291dFNlc3Npb24iLCJsb2FkU3RyaXBlIiwiaXNFbXB0eSIsImlzQXJyYXkiLCJnZXRDcmVhdGVPcmRlckRhdGEiLCJwcm9kdWN0cyIsIm9yZGVyIiwic2hpcHBpbmciLCJmaXJzdF9uYW1lIiwiZmlyc3ROYW1lIiwibGFzdF9uYW1lIiwibGFzdE5hbWUiLCJhZGRyZXNzXzEiLCJhZGRyZXNzMSIsImFkZHJlc3NfMiIsImFkZHJlc3MyIiwiY2l0eSIsImNvdW50cnkiLCJzdGF0ZSIsInBvc3Rjb2RlIiwiemlwIiwiZW1haWwiLCJwaG9uZSIsImNvbXBhbnkiLCJiaWxsaW5nIiwicGF5bWVudF9tZXRob2QiLCJwYXltZW50X21ldGhvZF90aXRsZSIsImxpbmVfaXRlbXMiLCJnZXRDcmVhdGVPcmRlckxpbmVJdGVtcyIsIm1hcCIsImlkIiwicXVhbnRpdHkiLCJxdHkiLCJCdWZmZXIiLCJ0b1N0cmluZyIsInNwbGl0IiwicHJvZHVjdF9pZCIsImNyZWF0ZVRoZU9yZGVyIiwib3JkZXJEYXRhIiwic2V0T3JkZXJGYWlsZWRFcnJvciIsInByZXZpb3VzUmVxdWVzdEVycm9yIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwicmVzdWx0Iiwib3JkZXJJZCIsInRvdGFsIiwiY3VycmVuY3kiLCJlcnJvciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsImhhbmRsZVN0cmlwZUNoZWNrb3V0IiwiaW5wdXQiLCJzZXRSZXF1ZXN0RXJyb3IiLCJjbGVhckNhcnRNdXRhdGlvbiIsInNldElzU3RyaXBlT3JkZXJQcm9jZXNzaW5nIiwic2V0Q3JlYXRlZE9yZGVyRGF0YSIsImNyZWF0ZUN1c3RvbWVyT3JkZXIiLCJjYXJ0Q2xlYXJlZCIsImNsZWFyVGhlQ2FydCIsImxvZyIsImNyZWF0ZUNoZWNrb3V0U2Vzc2lvbkFuZFJlZGlyZWN0IiwiZGF0YSIsInZhcmlhYmxlcyIsImNsaWVudE11dGF0aW9uSWQiLCJ1dWlkdjQiLCJhbGwiLCJyZW1vdmVJdGVtc0Zyb21DYXJ0IiwiY2FydEl0ZW1zIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/stripe/session.js\n");

/***/ })

});