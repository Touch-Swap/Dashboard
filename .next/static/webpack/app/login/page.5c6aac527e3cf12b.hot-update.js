"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/providers/auth-provider/auth-provider.ts":
/*!******************************************************!*\
  !*** ./src/providers/auth-provider/auth-provider.ts ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authProvider: function() { return /* binding */ authProvider; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ authProvider auto */ \nconst mockUsers = [\n    {\n        name: \"Admin\",\n        email: \"johndoe@mail.com\",\n        roles: [\n            \"admin\"\n        ],\n        avatar: \"https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg\"\n    },\n    {\n        name: \"Jane Doe\",\n        email: \"janedoe@mail.com\",\n        roles: [\n            \"editor\"\n        ],\n        avatar: \"https://i.pravatar.cc/150?img=1\"\n    }\n];\nconst authProvider = {\n    login: async (param)=>{\n        let { email, username, password, remember } = param;\n        // Suppose we actually send a request to the back end here.\n        const user = mockUsers[0];\n        if (user) {\n            js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"auth\", JSON.stringify(user), {\n                expires: 30,\n                path: \"/\"\n            });\n            return {\n                success: true,\n                redirectTo: \"/\"\n            };\n        }\n        return {\n            success: false,\n            error: {\n                name: \"LoginError\",\n                message: \"Invalid username or password\"\n            }\n        };\n    },\n    logout: async ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(\"auth\", {\n            path: \"/\"\n        });\n        return {\n            success: true,\n            redirectTo: \"/login\"\n        };\n    },\n    check: async ()=>{\n        const auth = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"auth\");\n        if (auth) {\n            return {\n                authenticated: true\n            };\n        }\n        return {\n            authenticated: false,\n            logout: true,\n            redirectTo: \"/login\"\n        };\n    },\n    getPermissions: async ()=>{\n        const auth = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"auth\");\n        if (auth) {\n            const parsedUser = JSON.parse(auth);\n            return parsedUser.roles;\n        }\n        return null;\n    },\n    getIdentity: async ()=>{\n        const auth = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"auth\");\n        if (auth) {\n            const parsedUser = JSON.parse(auth);\n            return parsedUser;\n        }\n        return null;\n    },\n    onError: async (error)=>{\n        var _error_response;\n        if (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 401) {\n            return {\n                logout: true\n            };\n        }\n        return {\n            error\n        };\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wcm92aWRlcnMvYXV0aC1wcm92aWRlci9hdXRoLXByb3ZpZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O2tFQUdnQztBQUVoQyxNQUFNQyxZQUFZO0lBQ2hCO1FBQ0VDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1lBQUM7U0FBUTtRQUNoQkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87WUFBQztTQUFTO1FBQ2pCQyxRQUFRO0lBQ1Y7Q0FDRDtBQUVNLE1BQU1DLGVBQTZCO0lBQ3hDQyxPQUFPO1lBQU8sRUFBRUosS0FBSyxFQUFFSyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO1FBQ25ELDJEQUEyRDtRQUMzRCxNQUFNQyxPQUFPVixTQUFTLENBQUMsRUFBRTtRQUV6QixJQUFJVSxNQUFNO1lBQ1JYLGlEQUFPQSxDQUFDWSxHQUFHLENBQUMsUUFBUUMsS0FBS0MsU0FBUyxDQUFDSCxPQUFPO2dCQUN4Q0ksU0FBUztnQkFDVEMsTUFBTTtZQUNSO1lBQ0EsT0FBTztnQkFDTEMsU0FBUztnQkFDVEMsWUFBWTtZQUNkO1FBQ0Y7UUFFQSxPQUFPO1lBQ0xELFNBQVM7WUFDVEUsT0FBTztnQkFDTGpCLE1BQU07Z0JBQ05rQixTQUFTO1lBQ1g7UUFDRjtJQUNGO0lBQ0FDLFFBQVE7UUFDTnJCLGlEQUFPQSxDQUFDc0IsTUFBTSxDQUFDLFFBQVE7WUFBRU4sTUFBTTtRQUFJO1FBQ25DLE9BQU87WUFDTEMsU0FBUztZQUNUQyxZQUFZO1FBQ2Q7SUFDRjtJQUNBSyxPQUFPO1FBQ0wsTUFBTUMsT0FBT3hCLGlEQUFPQSxDQUFDeUIsR0FBRyxDQUFDO1FBQ3pCLElBQUlELE1BQU07WUFDUixPQUFPO2dCQUNMRSxlQUFlO1lBQ2pCO1FBQ0Y7UUFFQSxPQUFPO1lBQ0xBLGVBQWU7WUFDZkwsUUFBUTtZQUNSSCxZQUFZO1FBQ2Q7SUFDRjtJQUNBUyxnQkFBZ0I7UUFDZCxNQUFNSCxPQUFPeEIsaURBQU9BLENBQUN5QixHQUFHLENBQUM7UUFDekIsSUFBSUQsTUFBTTtZQUNSLE1BQU1JLGFBQWFmLEtBQUtnQixLQUFLLENBQUNMO1lBQzlCLE9BQU9JLFdBQVd4QixLQUFLO1FBQ3pCO1FBQ0EsT0FBTztJQUNUO0lBQ0EwQixhQUFhO1FBQ1gsTUFBTU4sT0FBT3hCLGlEQUFPQSxDQUFDeUIsR0FBRyxDQUFDO1FBQ3pCLElBQUlELE1BQU07WUFDUixNQUFNSSxhQUFhZixLQUFLZ0IsS0FBSyxDQUFDTDtZQUM5QixPQUFPSTtRQUNUO1FBQ0EsT0FBTztJQUNUO0lBQ0FHLFNBQVMsT0FBT1o7WUFDVkE7UUFBSixJQUFJQSxFQUFBQSxrQkFBQUEsTUFBTWEsUUFBUSxjQUFkYixzQ0FBQUEsZ0JBQWdCYyxNQUFNLE1BQUssS0FBSztZQUNsQyxPQUFPO2dCQUNMWixRQUFRO1lBQ1Y7UUFDRjtRQUVBLE9BQU87WUFBRUY7UUFBTTtJQUNqQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb3ZpZGVycy9hdXRoLXByb3ZpZGVyL2F1dGgtcHJvdmlkZXIudHM/ZGQwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHR5cGUgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiQHJlZmluZWRldi9jb3JlXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmNvbnN0IG1vY2tVc2VycyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQWRtaW5cIixcbiAgICBlbWFpbDogXCJqb2huZG9lQG1haWwuY29tXCIsXG4gICAgcm9sZXM6IFtcImFkbWluXCJdLFxuICAgIGF2YXRhcjogXCJodHRwczovL3d3dy5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXZlY3Rvci91c2VyLXByb2ZpbGUtaWNvbi12ZWN0b3ItYXZhdGFyLTYwMG53LTIyNDc3MjY2NzMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkphbmUgRG9lXCIsXG4gICAgZW1haWw6IFwiamFuZWRvZUBtYWlsLmNvbVwiLFxuICAgIHJvbGVzOiBbXCJlZGl0b3JcIl0sXG4gICAgYXZhdGFyOiBcImh0dHBzOi8vaS5wcmF2YXRhci5jYy8xNTA/aW1nPTFcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXI6IEF1dGhQcm92aWRlciA9IHtcbiAgbG9naW46IGFzeW5jICh7IGVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQsIHJlbWVtYmVyIH0pID0+IHtcbiAgICAvLyBTdXBwb3NlIHdlIGFjdHVhbGx5IHNlbmQgYSByZXF1ZXN0IHRvIHRoZSBiYWNrIGVuZCBoZXJlLlxuICAgIGNvbnN0IHVzZXIgPSBtb2NrVXNlcnNbMF07XG5cbiAgICBpZiAodXNlcikge1xuICAgICAgQ29va2llcy5zZXQoXCJhdXRoXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7XG4gICAgICAgIGV4cGlyZXM6IDMwLCAvLyAzMCBkYXlzXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICByZWRpcmVjdFRvOiBcIi9cIixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbmFtZTogXCJMb2dpbkVycm9yXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuICBsb2dvdXQ6IGFzeW5jICgpID0+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImF1dGhcIiwgeyBwYXRoOiBcIi9cIiB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsXG4gICAgfTtcbiAgfSxcbiAgY2hlY2s6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhdXRoID0gQ29va2llcy5nZXQoXCJhdXRoXCIpO1xuICAgIGlmIChhdXRoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICBsb2dvdXQ6IHRydWUsXG4gICAgICByZWRpcmVjdFRvOiBcIi9sb2dpblwiLFxuICAgIH07XG4gIH0sXG4gIGdldFBlcm1pc3Npb25zOiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXV0aCA9IENvb2tpZXMuZ2V0KFwiYXV0aFwiKTtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgY29uc3QgcGFyc2VkVXNlciA9IEpTT04ucGFyc2UoYXV0aCk7XG4gICAgICByZXR1cm4gcGFyc2VkVXNlci5yb2xlcztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGdldElkZW50aXR5OiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXV0aCA9IENvb2tpZXMuZ2V0KFwiYXV0aFwiKTtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgY29uc3QgcGFyc2VkVXNlciA9IEpTT04ucGFyc2UoYXV0aCk7XG4gICAgICByZXR1cm4gcGFyc2VkVXNlcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIG9uRXJyb3I6IGFzeW5jIChlcnJvcikgPT4ge1xuICAgIGlmIChlcnJvci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvZ291dDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQ29va2llcyIsIm1vY2tVc2VycyIsIm5hbWUiLCJlbWFpbCIsInJvbGVzIiwiYXZhdGFyIiwiYXV0aFByb3ZpZGVyIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVtZW1iZXIiLCJ1c2VyIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXMiLCJwYXRoIiwic3VjY2VzcyIsInJlZGlyZWN0VG8iLCJlcnJvciIsIm1lc3NhZ2UiLCJsb2dvdXQiLCJyZW1vdmUiLCJjaGVjayIsImF1dGgiLCJnZXQiLCJhdXRoZW50aWNhdGVkIiwiZ2V0UGVybWlzc2lvbnMiLCJwYXJzZWRVc2VyIiwicGFyc2UiLCJnZXRJZGVudGl0eSIsIm9uRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/providers/auth-provider/auth-provider.ts\n"));

/***/ })

});