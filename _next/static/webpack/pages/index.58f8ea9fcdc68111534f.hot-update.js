self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9EYXNoQm9hcmROYXYuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkTmF2IiwidXNlU3VtYXJ5IiwiY29ubmVjdG9yIiwidXNlQ29ubmVjdG9yIiwiYWNjb3VudCIsInVzZVNlbGVjdG9yIiwiYWNjb3VudFNlbGVjdG9yIiwic3Vic3RyaW5nIiwiY2xlYXIiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QkMsMkRBQVM7QUFDVCxNQUFNQyxTQUFTLEdBQUdDLDREQUFZLEVBQTlCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyx3REFBVyxDQUFDQyxnRUFBRCxDQUEzQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUEsNEJBQ0UsOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsRUFBZjtBQUFBLGdCQUNHRixPQUFPLGdCQUNOO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGlDQUFmO0FBQUEscUJBQ0dBLE9BQU8sQ0FBQ0csU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQURILFNBQytCSCxPQUFPLENBQUNHLFNBQVIsQ0FBa0IsRUFBbEIsRUFBc0IsRUFBdEIsQ0FEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFDRSxtQkFBUyxFQUFDLDhEQURaO0FBRUUsaUJBQU8sRUFBRUwsU0FBUyxDQUFDTSxLQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETSxnQkFhTjtBQUNFLGlCQUFTLEVBQUMsK0ZBRFo7QUFFRSxlQUFPLEVBQUVOLFNBQVMsQ0FBQ08sU0FGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0EvQkQ7O0dBQU1ULFk7VUFDSkMscUQsRUFDa0JFLHdELEVBQ0ZFLG9EOzs7S0FIWkwsWTtBQWlDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OGY4ZWE5ZmNkYzY4MTExNTM0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IHVzZUNvbm5lY3RvciBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQ29ubmVjdG9yXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWNjb3VudFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3NsaWNlcy9jb21tb25TbGljZVwiO1xuaW1wb3J0IHVzZVN1bWFyeSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlU3VtYXJ5XCI7XG5jb25zdCBEYXNoYm9hcmROYXYgPSAoKSA9PiB7XG4gIHVzZVN1bWFyeSgpO1xuICBjb25zdCBjb25uZWN0b3IgPSB1c2VDb25uZWN0b3IoKTtcbiAgY29uc3QgYWNjb3VudCA9IHVzZVNlbGVjdG9yKGFjY291bnRTZWxlY3Rvcik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNFwiPlxuICAgICAgPExvZ28gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIHthY2NvdW50ID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc2Vjb25kYXJ5IG1iLTJcIj5cbiAgICAgICAgICAgICAge2FjY291bnQuc3Vic3RyaW5nKDAsIDQpfS4uLnthY2NvdW50LnN1YnN0cmluZygzOCwgNDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3Rvci5jbGVhcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeSB0by12aW9sZXQtNTAwIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17Y29ubmVjdG9yLm9uQ29ubmVjdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25uZWN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=