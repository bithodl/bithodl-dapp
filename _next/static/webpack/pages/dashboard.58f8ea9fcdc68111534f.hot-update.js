self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Menu/DashBoardNav.js":
/*!*********************************************!*\
  !*** ./src/components/Menu/DashBoardNav.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ "./src/components/Menu/Logo.js");
/* harmony import */ var _hooks_useConnector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useConnector */ "./src/hooks/useConnector.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_commonSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../slices/commonSlice */ "./src/slices/commonSlice.js");
/* harmony import */ var _hooks_useSumary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSumary */ "./src/hooks/useSumary.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kaliz/dev/tantranlee/dapp-starter-v2/src/components/Menu/DashBoardNav.js",
    _this = undefined,
    _s = $RefreshSig$();







var DashboardNav = function DashboardNav() {
  _s();

  (0,_hooks_useSumary__WEBPACK_IMPORTED_MODULE_5__.default)();
  var connector = (0,_hooks_useConnector__WEBPACK_IMPORTED_MODULE_2__.default)();
  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_4__.accountSelector);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex items-center justify-between py-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-medium text-secondary mb-2",
          children: [account.substring(0, 4), "...", account.substring(38, 42)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "px-4 py-1 border border-gray-400 rounded-full cursor-pointer",
          onClick: connector.clear,
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "px-4 py-2 rounded-full bg-gradient-to-br from-primary to-violet-500 text-white cursor-pointer",
        onClick: connector.onConnect,
        children: "Connect"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_s(DashboardNav, "BvnTwlszKSejL5ggBRmRoz6bmDU=", false, function () {
  return [_hooks_useSumary__WEBPACK_IMPORTED_MODULE_5__.default, _hooks_useConnector__WEBPACK_IMPORTED_MODULE_2__.default, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = DashboardNav;
/* harmony default export */ __webpack_exports__["default"] = (DashboardNav);

var _c;

$RefreshReg$(_c, "DashboardNav");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9EYXNoQm9hcmROYXYuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkTmF2IiwidXNlU3VtYXJ5IiwiY29ubmVjdG9yIiwidXNlQ29ubmVjdG9yIiwiYWNjb3VudCIsInVzZVNlbGVjdG9yIiwiYWNjb3VudFNlbGVjdG9yIiwic3Vic3RyaW5nIiwiY2xlYXIiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QkMsMkRBQVM7QUFDVCxNQUFNQyxTQUFTLEdBQUdDLDREQUFZLEVBQTlCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyx3REFBVyxDQUFDQyxnRUFBRCxDQUEzQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUEsNEJBQ0UsOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsRUFBZjtBQUFBLGdCQUNHRixPQUFPLGdCQUNOO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGlDQUFmO0FBQUEscUJBQ0dBLE9BQU8sQ0FBQ0csU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQURILFNBQytCSCxPQUFPLENBQUNHLFNBQVIsQ0FBa0IsRUFBbEIsRUFBc0IsRUFBdEIsQ0FEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFDRSxtQkFBUyxFQUFDLDhEQURaO0FBRUUsaUJBQU8sRUFBRUwsU0FBUyxDQUFDTSxLQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETSxnQkFhTjtBQUNFLGlCQUFTLEVBQUMsK0ZBRFo7QUFFRSxlQUFPLEVBQUVOLFNBQVMsQ0FBQ08sU0FGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0EvQkQ7O0dBQU1ULFk7VUFDSkMscUQsRUFDa0JFLHdELEVBQ0ZFLG9EOzs7S0FIWkwsWTtBQWlDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNThmOGVhOWZjZGM2ODExMTUzNGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCB1c2VDb25uZWN0b3IgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvbm5lY3RvclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGFjY291bnRTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zbGljZXMvY29tbW9uU2xpY2VcIjtcbmltcG9ydCB1c2VTdW1hcnkgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVN1bWFyeVwiO1xuY29uc3QgRGFzaGJvYXJkTmF2ID0gKCkgPT4ge1xuICB1c2VTdW1hcnkoKTtcbiAgY29uc3QgY29ubmVjdG9yID0gdXNlQ29ubmVjdG9yKCk7XG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihhY2NvdW50U2VsZWN0b3IpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTRcIj5cbiAgICAgIDxMb2dvIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7YWNjb3VudCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNlY29uZGFyeSBtYi0yXCI+XG4gICAgICAgICAgICAgIHthY2NvdW50LnN1YnN0cmluZygwLCA0KX0uLi57YWNjb3VudC5zdWJzdHJpbmcoMzgsIDQyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTEgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0b3IuY2xlYXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkgdG8tdmlvbGV0LTUwMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3Rvci5vbkNvbm5lY3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29ubmVjdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmROYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9