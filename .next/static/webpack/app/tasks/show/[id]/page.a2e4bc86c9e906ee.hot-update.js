"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tasks/show/[id]/page",{

/***/ "(app-pages-browser)/./src/app/tasks/show/[id]/page.tsx":
/*!******************************************!*\
  !*** ./src/app/tasks/show/[id]/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryShow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _refinedev_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @refinedev/core */ \"(app-pages-browser)/./node_modules/@refinedev/core/dist/index.mjs\");\n/* harmony import */ var _refinedev_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @refinedev/mui */ \"(app-pages-browser)/./node_modules/@refinedev/mui/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CategoryShow() {\n    _s();\n    const { queryResult } = (0,_refinedev_core__WEBPACK_IMPORTED_MODULE_1__.useShow)({});\n    const { data, isLoading } = queryResult;\n    const record = data === null || data === void 0 ? void 0 : data.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_2__.Show, {\n        isLoading: isLoading,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            gap: 1,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    variant: \"body1\",\n                    fontWeight: \"bold\",\n                    children: \"ID\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_2__.TextFieldComponent, {\n                    value: record === null || record === void 0 ? void 0 : record.id\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    variant: \"body1\",\n                    fontWeight: \"bold\",\n                    children: \"Title\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_2__.TextFieldComponent, {\n                    value: record === null || record === void 0 ? void 0 : record.title\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    variant: \"body1\",\n                    fontWeight: \"bold\",\n                    children: \"Link\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_2__.TextFieldComponent, {\n                    value: record === null || record === void 0 ? void 0 : record.link\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    variant: \"body1\",\n                    fontWeight: \"bold\",\n                    children: \"Reward\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_2__.TextFieldComponent, {\n                    value: record === null || record === void 0 ? void 0 : record.reward\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Documents/Dashboard/src/app/tasks/show/[id]/page.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryShow, \"/5u19Hfe1VSkUOWA3CUaWbpxoas=\", false, function() {\n    return [\n        _refinedev_core__WEBPACK_IMPORTED_MODULE_1__.useShow\n    ];\n});\n_c = CategoryShow;\nvar _c;\n$RefreshReg$(_c, \"CategoryShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGFza3Mvc2hvdy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ1I7QUFDNkI7QUFFeEQsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdMLHdEQUFPQSxDQUFDLENBQUM7SUFDakMsTUFBTSxFQUFFTSxJQUFJLEVBQUVDLFNBQVMsRUFBRSxHQUFHRjtJQUU1QixNQUFNRyxTQUFTRixpQkFBQUEsMkJBQUFBLEtBQU1BLElBQUk7SUFFekIscUJBQ0UsOERBQUNMLGdEQUFJQTtRQUFDTSxXQUFXQTtrQkFDZiw0RUFBQ1QsNEZBQUtBO1lBQUNXLEtBQUs7OzhCQUNWLDhEQUFDViw0RkFBVUE7b0JBQUNXLFNBQVE7b0JBQVFDLFlBQVc7OEJBQ3BDOzs7Ozs7OEJBRUgsOERBQUNSLDhEQUFTQTtvQkFBQ1MsS0FBSyxFQUFFSixtQkFBQUEsNkJBQUFBLE9BQVFLLEVBQUU7Ozs7Ozs4QkFFNUIsOERBQUNkLDRGQUFVQTtvQkFBQ1csU0FBUTtvQkFBUUMsWUFBVzs4QkFDcEM7Ozs7Ozs4QkFFSCw4REFBQ1IsOERBQVNBO29CQUFDUyxLQUFLLEVBQUVKLG1CQUFBQSw2QkFBQUEsT0FBUU0sS0FBSzs7Ozs7OzhCQUUvQiw4REFBQ2YsNEZBQVVBO29CQUFDVyxTQUFRO29CQUFRQyxZQUFXOzhCQUNwQzs7Ozs7OzhCQUVILDhEQUFDUiw4REFBU0E7b0JBQUNTLEtBQUssRUFBRUosbUJBQUFBLDZCQUFBQSxPQUFRTyxJQUFJOzs7Ozs7OEJBQzlCLDhEQUFDaEIsNEZBQVVBO29CQUFDVyxTQUFRO29CQUFRQyxZQUFXOzhCQUNwQzs7Ozs7OzhCQUVILDhEQUFDUiw4REFBU0E7b0JBQUNTLEtBQUssRUFBRUosbUJBQUFBLDZCQUFBQSxPQUFRUSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QztHQS9Cd0JaOztRQUNFSixvREFBT0E7OztLQURUSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Rhc2tzL3Nob3cvW2lkXS9wYWdlLnRzeD9iYTE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTaG93IH0gZnJvbSBcIkByZWZpbmVkZXYvY29yZVwiO1xuaW1wb3J0IHsgU2hvdywgVGV4dEZpZWxkQ29tcG9uZW50IGFzIFRleHRGaWVsZCB9IGZyb20gXCJAcmVmaW5lZGV2L211aVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeVNob3coKSB7XG4gIGNvbnN0IHsgcXVlcnlSZXN1bHQgfSA9IHVzZVNob3coe30pO1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gcXVlcnlSZXN1bHQ7XG5cbiAgY29uc3QgcmVjb3JkID0gZGF0YT8uZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxTaG93IGlzTG9hZGluZz17aXNMb2FkaW5nfT5cbiAgICAgIDxTdGFjayBnYXA9ezF9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgIHtcIklEXCJ9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17cmVjb3JkPy5pZH0gLz5cblxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgIHtcIlRpdGxlXCJ9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17cmVjb3JkPy50aXRsZX0gLz5cblxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgIHtcIkxpbmtcIn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VGV4dEZpZWxkIHZhbHVlPXtyZWNvcmQ/Lmxpbmt9IC8+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAge1wiUmV3YXJkXCJ9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17cmVjb3JkPy5yZXdhcmR9IC8+XG5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9TaG93PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlN0YWNrIiwiVHlwb2dyYXBoeSIsInVzZVNob3ciLCJTaG93IiwiVGV4dEZpZWxkQ29tcG9uZW50IiwiVGV4dEZpZWxkIiwiQ2F0ZWdvcnlTaG93IiwicXVlcnlSZXN1bHQiLCJkYXRhIiwiaXNMb2FkaW5nIiwicmVjb3JkIiwiZ2FwIiwidmFyaWFudCIsImZvbnRXZWlnaHQiLCJ2YWx1ZSIsImlkIiwidGl0bGUiLCJsaW5rIiwicmV3YXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tasks/show/[id]/page.tsx\n"));

/***/ })

});