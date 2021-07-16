webpackHotUpdate_N_E("pages/index",{

/***/ "./components/modes/modesSelection.tsx":
/*!*********************************************!*\
  !*** ./components/modes/modesSelection.tsx ***!
  \*********************************************/
/*! exports provided: ModesSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModesSelection\", function() { return ModesSelection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ \"./config/config.ts\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/modes/modesSelection.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\nvar modes = [{\n  name: 'Online-new',\n  link: 'https://cmsweb.cern.ch/dqm/online-new/'\n}, {\n  name: 'Online-playback-new',\n  link: 'https://cmsweb.cern.ch/dqm/online-playback-new/'\n}, {\n  name: 'Offline-test-new',\n  link: 'https://cmsweb-testbed.cern.ch/dqm/offline-test-new/'\n}];\n\nvar menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 3\n  }\n}, modes.map(function (mode) {\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n    disabled: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"current_mode\"] && _config_config__WEBPACK_IMPORTED_MODULE_2__[\"current_mode\"].toUpperCase() === mode.name.toUpperCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"link\",\n    disabled: _config_config__WEBPACK_IMPORTED_MODULE_2__[\"current_mode\"] && _config_config__WEBPACK_IMPORTED_MODULE_2__[\"current_mode\"].toUpperCase() === mode.name.toUpperCase(),\n    onClick: function onClick() {\n      return location.href = mode.link;\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, mode.name));\n}));\n\nvar ModesSelection = function ModesSelection(_ref) {\n  var host = _ref.host;\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Dropdown\"], {\n    overlay: menu,\n    placement: \"bottomCenter\",\n    arrow: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"link\",\n    style: {\n      color: 'white',\n      fontVariant: 'all-small-caps',\n      display: 'flex'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"current_mode\"] ? _config_config__WEBPACK_IMPORTED_MODULE_2__[\"current_mode\"] : _config_config__WEBPACK_IMPORTED_MODULE_2__[\"functions_config\"].mode + ' (development)', host));\n};\n_c = ModesSelection;\n\nvar _c;\n\n$RefreshReg$(_c, \"ModesSelection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2Rlcy9tb2Rlc1NlbGVjdGlvbi50c3g/YjczZSJdLCJuYW1lcyI6WyJtb2RlcyIsIm5hbWUiLCJsaW5rIiwibWVudSIsIm1hcCIsIm1vZGUiLCJjdXJyZW50X21vZGUiLCJ0b1VwcGVyQ2FzZSIsImxvY2F0aW9uIiwiaHJlZiIsIk1vZGVzU2VsZWN0aW9uIiwiaG9zdCIsImNvbG9yIiwiZm9udFZhcmlhbnQiLCJkaXNwbGF5IiwiZnVuY3Rpb25zX2NvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQUM7QUFDYkMsTUFBSSxFQUFFLFlBRE87QUFFYkMsTUFBSSxFQUFFO0FBRk8sQ0FBRCxFQUlkO0FBQ0VELE1BQUksRUFBRSxxQkFEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUpjLEVBUWQ7QUFDRUQsTUFBSSxFQUFFLGtCQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBUmMsQ0FBZDs7QUFhQSxJQUFNQyxJQUFJLEdBQ1IsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0dILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxTQUNiLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsWUFBUSxFQUFFQywyREFBWSxJQUFJQSwyREFBWSxDQUFDQyxXQUFiLE9BQStCRixJQUFJLENBQUNKLElBQUwsQ0FBVU0sV0FBVixFQUQzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQywyQ0FBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsWUFBUSxFQUFFRCwyREFBWSxJQUFJQSwyREFBWSxDQUFDQyxXQUFiLE9BQStCRixJQUFJLENBQUNKLElBQUwsQ0FBVU0sV0FBVixFQUYzRDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFFBQVEsQ0FBQ0MsSUFBVCxHQUFnQkosSUFBSSxDQUFDSCxJQUEzQjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHRyxJQUFJLENBQUNKLElBSlIsQ0FGRixDQURhO0FBQUEsQ0FBZCxDQURILENBREY7O0FBaUJPLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMxQyxTQUNFLE1BQUMsNkNBQUQ7QUFBVSxXQUFPLEVBQUVSLElBQW5CO0FBQXlCLGFBQVMsRUFBQyxjQUFuQztBQUFrRCxTQUFLLE1BQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUU7QUFBRVMsV0FBSyxFQUFFLE9BQVQ7QUFBa0JDLGlCQUFXLEVBQUUsZ0JBQS9CO0FBQWlEQyxhQUFPLEVBQUU7QUFBMUQsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0dSLDJEQUFZLEdBQUdBLDJEQUFILEdBQWtCUywrREFBZ0IsQ0FBQ1YsSUFBakIsR0FBd0IsZ0JBSHpELEVBSUdNLElBSkgsQ0FERixDQURGO0FBV0QsQ0FaTTtLQUFNRCxjIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2Rlcy9tb2Rlc1NlbGVjdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBNZW51LCBEcm9wZG93biB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBjdXJyZW50X21vZGUsIGZ1bmN0aW9uc19jb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnJztcclxuXHJcbmNvbnN0IG1vZGVzID0gW3tcclxuICBuYW1lOiAnT25saW5lLW5ldycsXHJcbiAgbGluazogJ2h0dHBzOi8vY21zd2ViLmNlcm4uY2gvZHFtL29ubGluZS1uZXcvJ1xyXG59LFxyXG57XHJcbiAgbmFtZTogJ09ubGluZS1wbGF5YmFjay1uZXcnLFxyXG4gIGxpbms6ICdodHRwczovL2Ntc3dlYi5jZXJuLmNoL2RxbS9vbmxpbmUtcGxheWJhY2stbmV3LydcclxufSxcclxue1xyXG4gIG5hbWU6ICdPZmZsaW5lLXRlc3QtbmV3JyxcclxuICBsaW5rOiAnaHR0cHM6Ly9jbXN3ZWItdGVzdGJlZC5jZXJuLmNoL2RxbS9vZmZsaW5lLXRlc3QtbmV3LydcclxufV1cclxuXHJcbmNvbnN0IG1lbnUgPSAoXHJcbiAgPE1lbnU+XHJcbiAgICB7bW9kZXMubWFwKG1vZGUgPT4gKFxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRfbW9kZSAmJiBjdXJyZW50X21vZGUudG9VcHBlckNhc2UoKSA9PT0gbW9kZS5uYW1lLnRvVXBwZXJDYXNlKCl9PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50X21vZGUgJiYgY3VycmVudF9tb2RlLnRvVXBwZXJDYXNlKCkgPT09IG1vZGUubmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbG9jYXRpb24uaHJlZiA9IG1vZGUubGlua30gPlxyXG4gICAgICAgICAge21vZGUubmFtZX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICApKX1cclxuICA8L01lbnU+XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGVzU2VsZWN0aW9uID0gKHsgaG9zdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fSBwbGFjZW1lbnQ9XCJib3R0b21DZW50ZXJcIiBhcnJvdz5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFZhcmlhbnQ6ICdhbGwtc21hbGwtY2FwcycsIGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICB7Y3VycmVudF9tb2RlID8gY3VycmVudF9tb2RlIDogZnVuY3Rpb25zX2NvbmZpZy5tb2RlICsgJyAoZGV2ZWxvcG1lbnQpJ31cclxuICAgICAgICB7aG9zdH1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0Ryb3Bkb3duPlxyXG4gIClcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/modes/modesSelection.tsx\n");

/***/ })

})