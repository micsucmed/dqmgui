webpackHotUpdate_N_E("pages/index",{

/***/ "./components/customisation/table.tsx":
/*!********************************************!*\
  !*** ./components/customisation/table.tsx ***!
  \********************************************/
/*! exports provided: CostumizeTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CostumizeTable\", function() { return CostumizeTable; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var clean_deep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clean-deep */ \"./node_modules/clean-deep/src/index.js\");\n/* harmony import */ var clean_deep__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clean_deep__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ \"./components/constants.ts\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styledComponents */ \"./components/styledComponents.ts\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./type */ \"./components/customisation/type.tsx\");\n/* harmony import */ var _viewDetailsMenu_styledComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../viewDetailsMenu/styledComponents */ \"./components/viewDetailsMenu/styledComponents.tsx\");\n/* harmony import */ var antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/form/FormItem */ \"./node_modules/antd/lib/form/FormItem.js\");\n/* harmony import */ var antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../info */ \"./components/info.tsx\");\n/* harmony import */ var _drawOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drawOptions */ \"./components/customisation/drawOptions.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/customisation/table.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Option = antd__WEBPACK_IMPORTED_MODULE_4__[\"Select\"].Option;\nvar layout = {\n  labelCol: {\n    span: 8\n  },\n  wrapperCol: {\n    span: 16\n  }\n};\nvar CostumizeTable = function CostumizeTable(_ref) {\n  var form = _ref.form,\n      setCustomisationParams = _ref.setCustomisationParams,\n      customizationParams = _ref.customizationParams;\n\n  var referenceCopy = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_constants__WEBPACK_IMPORTED_MODULE_7__[\"withReference\"]);\n\n  var types = ['x', 'y', 'z'];\n  console.log(customizationParams);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    layout: 'inline'\n  }, layout, {\n    form: form,\n    name: \"search_form\",\n    className: \"fieldLabel\",\n    initialValues: _objectSpread({\n      remember: true\n    }, customizationParams),\n    onFinish: function onFinish(params) {\n      var cleanedParams = clean_deep__WEBPACK_IMPORTED_MODULE_6___default()(params);\n      setCustomisationParams(cleanedParams);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }), __jsx(_viewDetailsMenu_styledComponents__WEBPACK_IMPORTED_MODULE_10__[\"FullWidthRow\"], {\n    gutter: [8, 8],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    span: 24,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    label: \"Reference\",\n    name: \"withref\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, __jsx(_viewDetailsMenu_styledComponents__WEBPACK_IMPORTED_MODULE_10__[\"StyledSelect\"], {\n    defaultValue: referenceCopy[0].value,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, referenceCopy.map(function (option) {\n    return __jsx(Option, {\n      value: option.value,\n      key: option.value.toString(),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }, option.label);\n  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    span: 24,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(antd_lib_form_FormItem__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    label: \"Draw options\",\n    name: \"drawopts\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_8__[\"StyledInput\"], {\n    suffix: __jsx(_info__WEBPACK_IMPORTED_MODULE_12__[\"Info\"], {\n      content: _drawOptions__WEBPACK_IMPORTED_MODULE_13__[\"mostPopularCommands\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }\n    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__[\"InfoCircleOutlined\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 19\n      }\n    })),\n    fullWidth: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, types.map(function (type) {\n    return __jsx(_type__WEBPACK_IMPORTED_MODULE_9__[\"Type\"], {\n      type: type,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 13\n      }\n    });\n  }))));\n};\n_c = CostumizeTable;\n\nvar _c;\n\n$RefreshReg$(_c, \"CostumizeTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXN0b21pc2F0aW9uL3RhYmxlLnRzeD9mNzY5Il0sIm5hbWVzIjpbIk9wdGlvbiIsIlNlbGVjdCIsImxheW91dCIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJDb3N0dW1pemVUYWJsZSIsImZvcm0iLCJzZXRDdXN0b21pc2F0aW9uUGFyYW1zIiwiY3VzdG9taXphdGlvblBhcmFtcyIsInJlZmVyZW5jZUNvcHkiLCJ3aXRoUmVmZXJlbmNlIiwidHlwZXMiLCJjb25zb2xlIiwibG9nIiwicmVtZW1iZXIiLCJwYXJhbXMiLCJjbGVhbmVkUGFyYW1zIiwiY2xlYW5EZWVwIiwidmFsdWUiLCJtYXAiLCJvcHRpb24iLCJ0b1N0cmluZyIsImxhYmVsIiwibW9zdFBvcHVsYXJDb21tYW5kcyIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtJQU9RQSxNLEdBQVdDLDJDLENBQVhELE07QUFRUixJQUFNRSxNQUFNLEdBQUc7QUFDYkMsVUFBUSxFQUFFO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBREc7QUFFYkMsWUFBVSxFQUFFO0FBQUVELFFBQUksRUFBRTtBQUFSO0FBRkMsQ0FBZjtBQUtPLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FJSDtBQUFBLE1BSHpCQyxJQUd5QixRQUh6QkEsSUFHeUI7QUFBQSxNQUZ6QkMsc0JBRXlCLFFBRnpCQSxzQkFFeUI7QUFBQSxNQUR6QkMsbUJBQ3lCLFFBRHpCQSxtQkFDeUI7O0FBQ3pCLE1BQU1DLGFBQTRCLEdBQUcsZ0tBQUlDLHdEQUFQLENBQWxDOztBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFkO0FBQ0ZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxtQkFBWjtBQUNFLFNBQ0UsTUFBQyx5Q0FBRDtBQUNFLFVBQU0sRUFBRTtBQURWLEtBRU1QLE1BRk47QUFHRSxRQUFJLEVBQUVLLElBSFI7QUFJRSxRQUFJLEVBQUMsYUFKUDtBQUtFLGFBQVMsRUFBQyxZQUxaO0FBTUUsaUJBQWE7QUFBSVEsY0FBUSxFQUFFO0FBQWQsT0FBdUJOLG1CQUF2QixDQU5mO0FBT0UsWUFBUSxFQUFFLGtCQUFDTyxNQUFELEVBQVk7QUFDcEIsVUFBTUMsYUFBYSxHQUFHQyxpREFBUyxDQUFDRixNQUFELENBQS9CO0FBQ0FSLDRCQUFzQixDQUNwQlMsYUFEb0IsQ0FBdEI7QUFHRCxLQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFjRSxNQUFDLCtFQUFEO0FBQWMsVUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFVLFNBQUssRUFBQyxXQUFoQjtBQUE0QixRQUFJLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0VBQUQ7QUFBYyxnQkFBWSxFQUFFUCxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCUyxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dULGFBQWEsQ0FBQ1UsR0FBZCxDQUFrQixVQUFDQyxNQUFEO0FBQUEsV0FDakIsTUFBQyxNQUFEO0FBQVEsV0FBSyxFQUFFQSxNQUFNLENBQUNGLEtBQXRCO0FBQTZCLFNBQUcsRUFBRUUsTUFBTSxDQUFDRixLQUFQLENBQWFHLFFBQWIsRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxNQUFNLENBQUNFLEtBRFYsQ0FEaUI7QUFBQSxHQUFsQixDQURILENBREYsQ0FERixDQURGLEVBWUUsTUFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQVUsU0FBSyxFQUFDLGNBQWhCO0FBQStCLFFBQUksRUFBQyxVQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLFVBQU0sRUFDSixNQUFDLDJDQUFEO0FBQU0sYUFBTyxFQUFFQyxpRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FGSjtBQU1FLGFBQVMsRUFBRSxJQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBWkYsRUF3QkUsbUVBQ0daLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUNLLElBQUQ7QUFBQSxXQUNULE1BQUMsMENBQUQ7QUFBTSxVQUFJLEVBQUVBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURTO0FBQUEsR0FBVixDQURILENBeEJGLENBZEYsQ0FERjtBQStDRCxDQXZETTtLQUFNbkIsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvY3VzdG9taXNhdGlvbi90YWJsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb2wsIFNlbGVjdCwgRm9ybSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBJbmZvQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBjbGVhbkRlZXAgZnJvbSAnY2xlYW4tZGVlcCc7XHJcblxyXG5pbXBvcnQgeyB3aXRoUmVmZXJlbmNlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3R5bGVkSW5wdXQgfSBmcm9tICcuLi9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IHsgVHlwZSB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgRnVsbFdpZHRoUm93LFxyXG4gIFN0eWxlZFNlbGVjdCxcclxufSBmcm9tICcuLi92aWV3RGV0YWlsc01lbnUvc3R5bGVkQ29tcG9uZW50cyc7XHJcbmltcG9ydCBGb3JtSXRlbSBmcm9tICdhbnRkL2xpYi9mb3JtL0Zvcm1JdGVtJztcclxuaW1wb3J0IHsgSW5mbyB9IGZyb20gJy4uL2luZm8nO1xyXG5pbXBvcnQgeyBtb3N0UG9wdWxhckNvbW1hbmRzIH0gZnJvbSAnLi9kcmF3T3B0aW9ucyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnYW50ZC9saWIvZm9ybS9pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIE9wdGlvblByb3BzLFxyXG4gIEN1c3RvbWl6ZVByb3BzLFxyXG59IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvZGlzcGxheS9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG5pbnRlcmZhY2UgQ29zdHVtaXplVGFibGVQcm9wcyB7XHJcbiAgZm9ybTogYW55O1xyXG4gIHNldEN1c3RvbWlzYXRpb25QYXJhbXMoY3VzdFByb3BzOiBQYXJ0aWFsPFN0b3JlPiAmIEN1c3RvbWl6ZVByb3BzKTogdm9pZDtcclxuICBjdXN0b21pemF0aW9uUGFyYW1zPzogQ3VzdG9taXplUHJvcHM7XHJcbn1cclxuXHJcbmNvbnN0IGxheW91dCA9IHtcclxuICBsYWJlbENvbDogeyBzcGFuOiA4IH0sXHJcbiAgd3JhcHBlckNvbDogeyBzcGFuOiAxNiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvc3R1bWl6ZVRhYmxlID0gKHtcclxuICBmb3JtLFxyXG4gIHNldEN1c3RvbWlzYXRpb25QYXJhbXMsXHJcbiAgY3VzdG9taXphdGlvblBhcmFtc1xyXG59OiBDb3N0dW1pemVUYWJsZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVmZXJlbmNlQ29weTogT3B0aW9uUHJvcHNbXSA9IFsuLi53aXRoUmVmZXJlbmNlXTtcclxuICBjb25zdCB0eXBlcyA9IFsneCcsICd5JywgJ3onXTtcclxuY29uc29sZS5sb2coY3VzdG9taXphdGlvblBhcmFtcylcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbGF5b3V0PXsnaW5saW5lJ31cclxuICAgICAgey4uLmxheW91dH1cclxuICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgbmFtZT1cInNlYXJjaF9mb3JtXCJcclxuICAgICAgY2xhc3NOYW1lPVwiZmllbGRMYWJlbFwiXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUsIC4uLmN1c3RvbWl6YXRpb25QYXJhbXMgfX1cclxuICAgICAgb25GaW5pc2g9eyhwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zdCBjbGVhbmVkUGFyYW1zID0gY2xlYW5EZWVwKHBhcmFtcyk7XHJcbiAgICAgICAgc2V0Q3VzdG9taXNhdGlvblBhcmFtcyhcclxuICAgICAgICAgIGNsZWFuZWRQYXJhbXMgYXMgUGFydGlhbDxTdG9yZT4gJiBDdXN0b21pemVQcm9wc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxGdWxsV2lkdGhSb3cgZ3V0dGVyPXtbOCwgOF19PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgPEZvcm1JdGVtIGxhYmVsPVwiUmVmZXJlbmNlXCIgbmFtZT1cIndpdGhyZWZcIj5cclxuICAgICAgICAgICAgPFN0eWxlZFNlbGVjdCBkZWZhdWx0VmFsdWU9e3JlZmVyZW5jZUNvcHlbMF0udmFsdWV9PlxyXG4gICAgICAgICAgICAgIHtyZWZlcmVuY2VDb3B5Lm1hcCgob3B0aW9uOiBPcHRpb25Qcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17b3B0aW9uLnZhbHVlfSBrZXk9e29wdGlvbi52YWx1ZS50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1N0eWxlZFNlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICA8Rm9ybUl0ZW0gbGFiZWw9XCJEcmF3IG9wdGlvbnNcIiBuYW1lPVwiZHJhd29wdHNcIj5cclxuICAgICAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICAgICAgc3VmZml4PXtcclxuICAgICAgICAgICAgICAgIDxJbmZvIGNvbnRlbnQ9e21vc3RQb3B1bGFyQ29tbWFuZHN9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5mb0NpcmNsZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L0luZm8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHt0eXBlcy5tYXAoKHR5cGUpID0+IChcclxuICAgICAgICAgICAgPFR5cGUgdHlwZT17dHlwZX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0Z1bGxXaWR0aFJvdz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/customisation/table.tsx\n");

/***/ })

})