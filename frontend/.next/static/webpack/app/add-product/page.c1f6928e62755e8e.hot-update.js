"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/add-product/page",{

/***/ "(app-pages-browser)/./types/index.ts":
/*!************************!*\
  !*** ./types/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultFormData: function() { return /* binding */ defaultFormData; }\n/* harmony export */ });\nconst defaultFormData = {\n    sku: \"\",\n    name: \"\",\n    price: \"\",\n    product_type: \"\",\n    size: \"\",\n    weight: \"\",\n    height: \"\",\n    width: \"\",\n    length: \"\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3R5cGVzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFXTyxNQUFNQSxrQkFBb0M7SUFDL0NDLEtBQUs7SUFDTEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLGNBQWM7SUFDZEMsTUFBTTtJQUNOQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsT0FBTztJQUNQQyxRQUFRO0FBQ1YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi90eXBlcy9pbmRleC50cz9kZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEZvcm1Qcm9wcyB7XHJcbiAgc2t1OiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaWNlOiBzdHJpbmc7XHJcbiAgcHJvZHVjdF90eXBlOiBzdHJpbmc7XHJcbiAgc2l6ZT86IHN0cmluZztcclxuICB3ZWlnaHQ/OiBzdHJpbmc7XHJcbiAgaGVpZ2h0Pzogc3RyaW5nO1xyXG4gIHdpZHRoPzogc3RyaW5nO1xyXG4gIGxlbmd0aD86IHN0cmluZztcclxufVxyXG5leHBvcnQgY29uc3QgZGVmYXVsdEZvcm1EYXRhOiBQcm9kdWN0Rm9ybVByb3BzID0ge1xyXG4gIHNrdTogJycsXHJcbiAgbmFtZTogJycsXHJcbiAgcHJpY2U6ICcnLFxyXG4gIHByb2R1Y3RfdHlwZTogJycsXHJcbiAgc2l6ZTogJycsXHJcbiAgd2VpZ2h0OiAnJyxcclxuICBoZWlnaHQ6ICcnLFxyXG4gIHdpZHRoOiAnJyxcclxuICBsZW5ndGg6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0UHJvcHMge1xyXG4gIHNrdTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogbnVtYmVyO1xyXG4gIGRldGFpbHM6IHtcclxuICAgIHNpemU/OiBudW1iZXI7XHJcbiAgICB3ZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICB3aWR0aD86IG51bWJlcjtcclxuICAgIGxlbmd0aD86IG51bWJlcjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIG9uQ2hhbmdlOiAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGVycm9yczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkZWZhdWx0Rm9ybURhdGEiLCJza3UiLCJuYW1lIiwicHJpY2UiLCJwcm9kdWN0X3R5cGUiLCJzaXplIiwid2VpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./types/index.ts\n"));

/***/ })

});