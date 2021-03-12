webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/plot/plotsWithoutLayouts.tsx":
/*!*******************************************************!*\
  !*** ./components/plots/plot/plotsWithoutLayouts.tsx ***!
  \*******************************************************/
/*! exports provided: PlotsWithoutLayouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlotsWithoutLayouts\", function() { return PlotsWithoutLayouts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _singlePlot_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singlePlot/utils */ \"./components/plots/plot/singlePlot/utils.ts\");\n/* harmony import */ var _singlePlot_plot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singlePlot/plot */ \"./components/plots/plot/singlePlot/plot.tsx\");\n/* harmony import */ var _overlaidPlot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlaidPlot */ \"./components/plots/plot/overlaidPlot/index.tsx\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/plot/plotsWithoutLayouts.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar PlotsWithoutLayouts = function PlotsWithoutLayouts(_ref) {\n  var plots = _ref.plots,\n      selected_plots = _ref.selected_plots,\n      globalState = _ref.globalState,\n      imageRefScrollDown = _ref.imageRefScrollDown,\n      query = _ref.query;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, plots.map(function (plot) {\n    var params_for_api = Object(_singlePlot_utils__WEBPACK_IMPORTED_MODULE_1__[\"FormatParamsForAPI\"])(globalState, query, encodeURI(plot.name), plot.path);\n\n    if (plot) {\n      return __jsx(\"div\", {\n        key: plot.name,\n        className: \"list\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }\n      }, query.overlay_data ? __jsx(_overlaidPlot__WEBPACK_IMPORTED_MODULE_3__[\"OverlaidPlot\"], {\n        key: plot.name,\n        plot: plot,\n        params_for_api: params_for_api,\n        imageRefScrollDown: imageRefScrollDown,\n        selected_plots: selected_plots,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 17\n        }\n      }) : __jsx(_singlePlot_plot__WEBPACK_IMPORTED_MODULE_2__[\"Plot\"], {\n        plot: plot,\n        imageRefScrollDown: imageRefScrollDown,\n        params_for_api: params_for_api,\n        key: plot.name,\n        selected_plots: selected_plots,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }\n      }));\n    }\n\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);\n  }));\n};\n_c = PlotsWithoutLayouts;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlotsWithoutLayouts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy9wbG90L3Bsb3RzV2l0aG91dExheW91dHMudHN4Pzc1ZjYiXSwibmFtZXMiOlsiUGxvdHNXaXRob3V0TGF5b3V0cyIsInBsb3RzIiwic2VsZWN0ZWRfcGxvdHMiLCJnbG9iYWxTdGF0ZSIsImltYWdlUmVmU2Nyb2xsRG93biIsInF1ZXJ5IiwibWFwIiwicGxvdCIsInBhcmFtc19mb3JfYXBpIiwiRm9ybWF0UGFyYW1zRm9yQVBJIiwiZW5jb2RlVVJJIiwibmFtZSIsInBhdGgiLCJvdmVybGF5X2RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUVBO0FBQ0E7QUFXTyxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BTVQ7QUFBQSxNQUx4QkMsS0FLd0IsUUFMeEJBLEtBS3dCO0FBQUEsTUFKeEJDLGNBSXdCLFFBSnhCQSxjQUl3QjtBQUFBLE1BSHhCQyxXQUd3QixRQUh4QkEsV0FHd0I7QUFBQSxNQUZ4QkMsa0JBRXdCLFFBRnhCQSxrQkFFd0I7QUFBQSxNQUR4QkMsS0FDd0IsUUFEeEJBLEtBQ3dCO0FBQ3hCLFNBQ0UsbUVBQ0dKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBeUI7QUFDbEMsUUFBTUMsY0FBYyxHQUFHQyw0RUFBa0IsQ0FDdkNOLFdBRHVDLEVBRXZDRSxLQUZ1QyxFQUd2Q0ssU0FBUyxDQUFDSCxJQUFJLENBQUNJLElBQU4sQ0FIOEIsRUFJdkNKLElBQUksQ0FBQ0ssSUFKa0MsQ0FBekM7O0FBTUEsUUFBSUwsSUFBSixFQUFVO0FBQ1IsYUFDRTtBQUFLLFdBQUcsRUFBRUEsSUFBSSxDQUFDSSxJQUFmO0FBQXFCLGlCQUFTLEVBQUMsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHTixLQUFLLENBQUNRLFlBQU4sR0FDQyxNQUFDLDBEQUFEO0FBQ0UsV0FBRyxFQUFFTixJQUFJLENBQUNJLElBRFo7QUFFRSxZQUFJLEVBQUVKLElBRlI7QUFHRSxzQkFBYyxFQUFFQyxjQUhsQjtBQUlFLDBCQUFrQixFQUFFSixrQkFKdEI7QUFLRSxzQkFBYyxFQUFFRixjQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsR0FTQyxNQUFDLHFEQUFEO0FBQ0UsWUFBSSxFQUFFSyxJQURSO0FBRUUsMEJBQWtCLEVBQUVILGtCQUZ0QjtBQUdFLHNCQUFjLEVBQUVJLGNBSGxCO0FBSUUsV0FBRyxFQUFFRCxJQUFJLENBQUNJLElBSlo7QUFLRSxzQkFBYyxFQUFFVCxjQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkosQ0FERjtBQXFCRDs7QUFDRCxXQUFPLGtFQUFQO0FBQ0QsR0EvQkEsQ0FESCxDQURGO0FBb0NELENBM0NNO0tBQU1GLG1CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wbG90cy9wbG90L3Bsb3RzV2l0aG91dExheW91dHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBmdW5jdGlvbnNfY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgUXVlcnlQcm9wcyxcclxuICBQbG90RGF0YVByb3BzLFxyXG4gIFBsb3RzR3JvdXBlZEJ5TGF5b3V0c0ludGVyZmFjZSxcclxufSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2Rpc3BsYXkvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEZvcm1hdFBhcmFtc0ZvckFQSSB9IGZyb20gJy4vc2luZ2xlUGxvdC91dGlscyc7XHJcbmltcG9ydCB7IGlzUGxvdFNlbGVjdGVkIH0gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L3V0aWxzJztcclxuaW1wb3J0IHsgUGxvdCB9IGZyb20gJy4vc2luZ2xlUGxvdC9wbG90JztcclxuaW1wb3J0IHsgT3ZlcmxhaWRQbG90IH0gZnJvbSAnLi9vdmVybGFpZFBsb3QnO1xyXG5cclxuaW50ZXJmYWNlIExlZnRTaWRlUGxvdHNQcm9wcyB7XHJcbiAgcGxvdHM6IFBsb3REYXRhUHJvcHNbXTtcclxuICBzZWxlY3RlZF9wbG90czpQbG90RGF0YVByb3BzW107XHJcbiAgcGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzPzogUGxvdHNHcm91cGVkQnlMYXlvdXRzSW50ZXJmYWNlO1xyXG4gIHF1ZXJ5OiBRdWVyeVByb3BzO1xyXG4gIGltYWdlUmVmU2Nyb2xsRG93bjogYW55O1xyXG4gIGdsb2JhbFN0YXRlOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbG90c1dpdGhvdXRMYXlvdXRzID0gKHtcclxuICBwbG90cyxcclxuICBzZWxlY3RlZF9wbG90cyxcclxuICBnbG9iYWxTdGF0ZSxcclxuICBpbWFnZVJlZlNjcm9sbERvd24sXHJcbiAgcXVlcnksXHJcbn06IExlZnRTaWRlUGxvdHNQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cGxvdHMubWFwKChwbG90OiBQbG90RGF0YVByb3BzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zX2Zvcl9hcGkgPSBGb3JtYXRQYXJhbXNGb3JBUEkoXHJcbiAgICAgICAgICBnbG9iYWxTdGF0ZSxcclxuICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgZW5jb2RlVVJJKHBsb3QubmFtZSksXHJcbiAgICAgICAgICBwbG90LnBhdGhcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChwbG90KSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17cGxvdC5uYW1lfSBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAge3F1ZXJ5Lm92ZXJsYXlfZGF0YSA/IChcclxuICAgICAgICAgICAgICAgIDxPdmVybGFpZFBsb3RcclxuICAgICAgICAgICAgICAgICAga2V5PXtwbG90Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBsb3Q9e3Bsb3R9XHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtc19mb3JfYXBpPXtwYXJhbXNfZm9yX2FwaX1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VSZWZTY3JvbGxEb3duPXtpbWFnZVJlZlNjcm9sbERvd259XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX3Bsb3RzPXtzZWxlY3RlZF9wbG90c31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxQbG90XHJcbiAgICAgICAgICAgICAgICAgIHBsb3Q9e3Bsb3R9XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlUmVmU2Nyb2xsRG93bj17aW1hZ2VSZWZTY3JvbGxEb3dufVxyXG4gICAgICAgICAgICAgICAgICBwYXJhbXNfZm9yX2FwaT17cGFyYW1zX2Zvcl9hcGl9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17cGxvdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZF9wbG90cz17c2VsZWN0ZWRfcGxvdHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDw+PC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/plots/plot/plotsWithoutLayouts.tsx\n");

/***/ })

})