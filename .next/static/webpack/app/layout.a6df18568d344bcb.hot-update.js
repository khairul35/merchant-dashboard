"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"3d1dcd3d7617\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzQ4MzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzZDFkY2QzZDc2MTdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/layout/Navigation/index.tsx":
/*!****************************************************!*\
  !*** ./app/components/layout/Navigation/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.component */ \"(app-pages-browser)/./app/components/layout/Navigation/index.component.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menus */ \"(app-pages-browser)/./app/components/layout/Navigation/menus.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const [currentPath, setCurrentPath] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCurrentPath(window.location.pathname);\n    }, []);\n    const props = {\n        menus: _menus__WEBPACK_IMPORTED_MODULE_3__.menus,\n        path: currentPath,\n        setCurrentPath\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/dev/merchant-dashboard/app/components/layout/Navigation/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navigation, \"V7qTbeQgIlCc6Qnz7nj57jQ/Gdc=\");\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2xheW91dC9OYXZpZ2F0aW9uL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUwQztBQUVFO0FBQ1o7QUFFaEMsTUFBTUksYUFBYTs7SUFFZixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQVM7SUFFdkRDLGdEQUFTQSxDQUFDO1FBQ05JLGVBQWVDLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUTtJQUMzQyxHQUFHLEVBQUU7SUFFTCxNQUFNQyxRQUF5QjtRQUMzQlAsS0FBS0EsMkNBQUFBO1FBQ0xRLE1BQU1OO1FBQ05DO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ04sd0RBQVNBO1FBQUUsR0FBR1UsS0FBSzs7Ozs7O0FBRTVCO0dBakJNTjtLQUFBQTtBQW1CTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvTmF2aWdhdGlvbi9pbmRleC50c3g/NDU2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9pbmRleC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25Qcm9wcyB9IGZyb20gXCIuL2luZGV4LnByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWVudXMgfSBmcm9tIFwiLi9tZW51c1wiO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2N1cnJlbnRQYXRoLCBzZXRDdXJyZW50UGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRQYXRoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgcHJvcHM6IE5hdmlnYXRpb25Qcm9wcyA9IHtcbiAgICAgICAgbWVudXMsXG4gICAgICAgIHBhdGg6IGN1cnJlbnRQYXRoLFxuICAgICAgICBzZXRDdXJyZW50UGF0aCxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1lbnVzIiwiTmF2aWdhdGlvbiIsImN1cnJlbnRQYXRoIiwic2V0Q3VycmVudFBhdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHJvcHMiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/layout/Navigation/index.tsx\n"));

/***/ })

});