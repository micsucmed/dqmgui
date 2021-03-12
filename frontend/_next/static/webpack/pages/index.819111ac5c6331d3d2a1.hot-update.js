webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useUpdateInLiveMode.tsx":
/*!***************************************!*\
  !*** ./hooks/useUpdateInLiveMode.tsx ***!
  \***************************************/
/*! exports provided: useUpdateLiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateLiveMode", function() { return useUpdateLiveMode; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/leftSideContext */ "./contexts/leftSideContext.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _s = $RefreshSig$();




var useUpdateLiveMode = function useUpdateLiveMode() {
  _s();

  var current_time = new Date().getTime();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](current_time),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      not_older_than = _React$useState2[0],
      set_not_older_than = _React$useState2[1];

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_2__["store"]),
      set_updated_by_not_older_than = _React$useContext.set_updated_by_not_older_than,
      update = _React$useContext.update,
      set_update = _React$useContext.set_update;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var query = router.query;

  var create_an_interval = function create_an_interval() {
    var interval = setInterval(function () {
      set_not_older_than(function () {
        // 1 sec is 1000 milisec. we dividing by 10000 and multiply by 20, because we need to
        // have rounded sec. for exmaple: if it is 13, we need to have 20, or 36, we need to have 20 and etc.
        var seconds = Math.round(new Date().getTime() / 10000) * 20;
        return seconds;
      });
    }, 20000);
    return interval;
  };

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    var interval = create_an_interval();

    if (!update) {
      clearInterval(interval);
    }
  }, [update, query.run_number, query.dataset_name, query.folder_path, query.search_dataset_name, query.search_run_number]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (update) {
      set_updated_by_not_older_than(not_older_than);
    }
  }, [not_older_than, update]);
  return {
    not_older_than: not_older_than,
    set_update: set_update,
    update: update
  };
};

_s(useUpdateLiveMode, "+QbV0XLCzp4bp5nVS1UFr3tcJ6g=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVXBkYXRlSW5MaXZlTW9kZS50c3giXSwibmFtZXMiOlsidXNlVXBkYXRlTGl2ZU1vZGUiLCJjdXJyZW50X3RpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIlJlYWN0Iiwibm90X29sZGVyX3RoYW4iLCJzZXRfbm90X29sZGVyX3RoYW4iLCJzdG9yZSIsInNldF91cGRhdGVkX2J5X25vdF9vbGRlcl90aGFuIiwidXBkYXRlIiwic2V0X3VwZGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiY3JlYXRlX2FuX2ludGVydmFsIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNlY29uZHMiLCJNYXRoIiwicm91bmQiLCJjbGVhckludGVydmFsIiwicnVuX251bWJlciIsImRhdGFzZXRfbmFtZSIsImZvbGRlcl9wYXRoIiwic2VhcmNoX2RhdGFzZXRfbmFtZSIsInNlYXJjaF9ydW5fbnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR08sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQ3JDLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBckI7O0FBRHFDLHdCQUdRQyw4Q0FBQSxDQUFlSCxZQUFmLENBSFI7QUFBQTtBQUFBLE1BRzlCSSxjQUg4QjtBQUFBLE1BR2RDLGtCQUhjOztBQUFBLDBCQVFqQ0YsZ0RBQUEsQ0FBaUJHLCtEQUFqQixDQVJpQztBQUFBLE1BS25DQyw2QkFMbUMscUJBS25DQSw2QkFMbUM7QUFBQSxNQU1uQ0MsTUFObUMscUJBTW5DQSxNQU5tQztBQUFBLE1BT25DQyxVQVBtQyxxQkFPbkNBLFVBUG1DOztBQVNyQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsS0FBaUIsR0FBR0YsTUFBTSxDQUFDRSxLQUFqQzs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNqQ1Ysd0JBQWtCLENBQUMsWUFBTTtBQUN2QjtBQUNBO0FBQ0EsWUFBTVcsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFJakIsSUFBSixHQUFXQyxPQUFYLEtBQXVCLEtBQWxDLElBQTJDLEVBQTNEO0FBQ0EsZUFBT2MsT0FBUDtBQUNELE9BTGlCLENBQWxCO0FBTUQsS0FQMkIsRUFPekIsS0FQeUIsQ0FBNUI7QUFRQSxXQUFPRixRQUFQO0FBQ0QsR0FWRDs7QUFZQVgsaURBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFNVyxRQUFRLEdBQUdELGtCQUFrQixFQUFuQzs7QUFDQSxRQUFJLENBQUNMLE1BQUwsRUFBYTtBQUNYVyxtQkFBYSxDQUFDTCxRQUFELENBQWI7QUFDRDtBQUNGLEdBTEQsRUFLRyxDQUNETixNQURDLEVBRURJLEtBQUssQ0FBQ1EsVUFGTCxFQUdEUixLQUFLLENBQUNTLFlBSEwsRUFJRFQsS0FBSyxDQUFDVSxXQUpMLEVBS0RWLEtBQUssQ0FBQ1csbUJBTEwsRUFNRFgsS0FBSyxDQUFDWSxpQkFOTCxDQUxIO0FBY0FyQixpREFBQSxDQUFnQixZQUFNO0FBQ3BCLFFBQUlLLE1BQUosRUFBWTtBQUNWRCxtQ0FBNkIsQ0FBQ0gsY0FBRCxDQUE3QjtBQUNEO0FBQ0YsR0FKRCxFQUlHLENBQUNBLGNBQUQsRUFBaUJJLE1BQWpCLENBSkg7QUFNQSxTQUFPO0FBQUVKLGtCQUFjLEVBQWRBLGNBQUY7QUFBa0JLLGNBQVUsRUFBVkEsVUFBbEI7QUFBOEJELFVBQU0sRUFBTkE7QUFBOUIsR0FBUDtBQUNELENBN0NNOztHQUFNVCxpQjtVQVNJWSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MTkxMTFhYzVjNjMzMWQzZDJhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2NvbnRleHRzL2xlZnRTaWRlQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBRdWVyeVByb3BzIH0gZnJvbSAnLi4vY29udGFpbmVycy9kaXNwbGF5L2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgdXNlVXBkYXRlTGl2ZU1vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIGNvbnN0IFtub3Rfb2xkZXJfdGhhbiwgc2V0X25vdF9vbGRlcl90aGFuXSA9IFJlYWN0LnVzZVN0YXRlKGN1cnJlbnRfdGltZSk7XG4gIGNvbnN0IHtcbiAgICBzZXRfdXBkYXRlZF9ieV9ub3Rfb2xkZXJfdGhhbixcbiAgICB1cGRhdGUsXG4gICAgc2V0X3VwZGF0ZSxcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoc3RvcmUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcXVlcnk6IFF1ZXJ5UHJvcHMgPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgY3JlYXRlX2FuX2ludGVydmFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0X25vdF9vbGRlcl90aGFuKCgpID0+IHtcbiAgICAgICAgLy8gMSBzZWMgaXMgMTAwMCBtaWxpc2VjLiB3ZSBkaXZpZGluZyBieSAxMDAwMCBhbmQgbXVsdGlwbHkgYnkgMjAsIGJlY2F1c2Ugd2UgbmVlZCB0b1xuICAgICAgICAvLyBoYXZlIHJvdW5kZWQgc2VjLiBmb3IgZXhtYXBsZTogaWYgaXQgaXMgMTMsIHdlIG5lZWQgdG8gaGF2ZSAyMCwgb3IgMzYsIHdlIG5lZWQgdG8gaGF2ZSAyMCBhbmQgZXRjLlxuICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAwKSAqIDIwO1xuICAgICAgICByZXR1cm4gc2Vjb25kcztcbiAgICAgIH0pO1xuICAgIH0sIDIwMDAwKTtcbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IGNyZWF0ZV9hbl9pbnRlcnZhbCgpO1xuICAgIGlmICghdXBkYXRlKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gIH0sIFtcbiAgICB1cGRhdGUsXG4gICAgcXVlcnkucnVuX251bWJlcixcbiAgICBxdWVyeS5kYXRhc2V0X25hbWUsXG4gICAgcXVlcnkuZm9sZGVyX3BhdGgsXG4gICAgcXVlcnkuc2VhcmNoX2RhdGFzZXRfbmFtZSxcbiAgICBxdWVyeS5zZWFyY2hfcnVuX251bWJlcixcbiAgXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBzZXRfdXBkYXRlZF9ieV9ub3Rfb2xkZXJfdGhhbihub3Rfb2xkZXJfdGhhbik7XG4gICAgfVxuICB9LCBbbm90X29sZGVyX3RoYW4sIHVwZGF0ZV0pO1xuXG4gIHJldHVybiB7IG5vdF9vbGRlcl90aGFuLCBzZXRfdXBkYXRlLCB1cGRhdGUgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9