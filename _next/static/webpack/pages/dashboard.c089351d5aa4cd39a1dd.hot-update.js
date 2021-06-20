self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Dashboard/DashboardInfo.js":
/*!***************************************************!*\
  !*** ./src/components/Dashboard/DashboardInfo.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_commonSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../slices/commonSlice */ "./src/slices/commonSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kaliz/dev/tantranlee/dapp-starter-v2/src/components/Dashboard/DashboardInfo.js",
    _this = undefined,
    _s = $RefreshSig$();







var icons = [react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiCoins, react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSwimmingPool, react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiMoneyStack, react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSwimmingPool, react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGifts, react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiWallet];

var InfoItem = function InfoItem(_ref) {
  var _ref$val = _ref.val,
      val = _ref$val === void 0 ? {} : _ref$val,
      _ref$Ico = _ref.Ico,
      Ico = _ref$Ico === void 0 ? icons[0] : _ref$Ico;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-span-6 lg:col-span-2 px-4 pt-20 pb-4 relative bg-red-200 rounded-xl",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute z-20 inset-0 from-violet-400 to-primary bg-gradient-to-br bg-opacity-30 transform rotate-3 rounded-xl"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute z-40 left-1/2 transform -translate-x-1/2 -top-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ico, {
        className: "h-24 w-24 text-secondary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative z-30 px-4 py-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-2xl mb-2 text-white font-medium text-center",
        children: val.t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-lg text-gray-100 flex items-center justify-center",
        children: [val.pre && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "mr-2",
          children: [val.pre, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 23
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "",
          children: val.c
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), val.sub && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "ml-2",
          children: [" ", val.sub]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 23
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_c = InfoItem;

var DashboardInfo = function DashboardInfo() {
  _s();

  var lpBnb = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_2__.lpBnbSelector);
  var pool = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_2__.poolSelector);
  var tokenPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_2__.tokenPriceSelector);
  var totalLiquid = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_2__.totalLiquidPoolSelector);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-6 gap-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InfoItem, {
        val: {
          t: "Max Transaction Amount",
          c: "1,000,000,000,000",
          pre: "$BHO"
        },
        Ico: icons[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InfoItem, {
        val: {
          t: "Total liquidity pool",
          c: totalLiquid ? Number(totalLiquid).toFixed(4) : "--",
          pre: "$"
        },
        Ico: icons[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InfoItem, {
        val: {
          t: "Current 1 bil $BHO Price",
          c: tokenPrice ? Number(tokenPrice).toFixed(8) : "--",
          pre: "$"
        },
        Ico: icons[2]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InfoItem, {
        val: {
          t: "Total BNB in liquidity pool",
          c: lpBnb ? Number(lpBnb).toFixed(4) : "--",
          sub: "BNB"
        },
        Ico: icons[3]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InfoItem, {
        val: {
          t: "Total BNB in reward pool",
          c: pool ? Number(pool).toFixed(4) : "--",
          sub: "BNB"
        },
        Ico: icons[4]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(DashboardInfo, "hHPRlcefJD/nt45MrdmXE4GD+74=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];
});

_c2 = DashboardInfo;
/* harmony default export */ __webpack_exports__["default"] = (DashboardInfo);

var _c, _c2;

$RefreshReg$(_c, "InfoItem");
$RefreshReg$(_c2, "DashboardInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZEluZm8uanMiXSwibmFtZXMiOlsiaWNvbnMiLCJHaUNvaW5zIiwiRmFTd2ltbWluZ1Bvb2wiLCJHaU1vbmV5U3RhY2siLCJGYUdpZnRzIiwiR2lXYWxsZXQiLCJJbmZvSXRlbSIsInZhbCIsIkljbyIsInQiLCJwcmUiLCJjIiwic3ViIiwiRGFzaGJvYXJkSW5mbyIsImxwQm5iIiwidXNlU2VsZWN0b3IiLCJscEJuYlNlbGVjdG9yIiwicG9vbCIsInBvb2xTZWxlY3RvciIsInRva2VuUHJpY2UiLCJ0b2tlblByaWNlU2VsZWN0b3IiLCJ0b3RhbExpcXVpZCIsInRvdGFsTGlxdWlkUG9vbFNlbGVjdG9yIiwiTnVtYmVyIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWkMsbURBRFksRUFFWkMsMERBRlksRUFHWkMsd0RBSFksRUFJWkQsMERBSlksRUFLWkUsbURBTFksRUFNWkMsb0RBTlksQ0FBZDs7QUFRQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQztBQUFBLHNCQUEvQkMsR0FBK0I7QUFBQSxNQUEvQkEsR0FBK0IseUJBQXpCLEVBQXlCO0FBQUEsc0JBQXJCQyxHQUFxQjtBQUFBLE1BQXJCQSxHQUFxQix5QkFBZlIsS0FBSyxDQUFDLENBQUQsQ0FBVTtBQUNqRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyx5RUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsMkRBQWY7QUFBQSw2QkFDRSw4REFBQyxHQUFEO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFB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QUdNLE1BQU0sQ0FBQ04sSUFBRCxDQUFOLENBQWFPLE9BQWIsQ0FBcUIsQ0FBckIsQ0FBSCxHQUE2QixJQUZqQztBQUdIWixhQUFHLEVBQUU7QUFIRixTQURQO0FBTUUsV0FBRyxFQUFFWixLQUFLLENBQUMsQ0FBRDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0RELENBdkREOztHQUFNYSxhO1VBQ1VFLG9ELEVBQ0RBLG9ELEVBQ01BLG9ELEVBQ0NBLG9EOzs7TUFKaEJGLGE7QUF5RE4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmMwODkzNTFkNWFhNGNkMzlhMWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHaUNvaW5zIH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQgeyBGYVN3aW1taW5nUG9vbCwgRmFHaWZ0cyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgSW1Db2luRG9sbGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCI7XG5pbXBvcnQgeyBHaU1vbmV5U3RhY2ssIEdpV2FsbGV0IH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgbHBCbmJTZWxlY3RvcixcbiAgcG9vbFNlbGVjdG9yLFxuICB0b2tlblByaWNlU2VsZWN0b3IsXG4gIHRvdGFsTGlxdWlkUG9vbFNlbGVjdG9yLFxufSBmcm9tIFwiLi4vLi4vc2xpY2VzL2NvbW1vblNsaWNlXCI7XG5jb25zdCBpY29ucyA9IFtcbiAgR2lDb2lucyxcbiAgRmFTd2ltbWluZ1Bvb2wsXG4gIEdpTW9uZXlTdGFjayxcbiAgRmFTd2ltbWluZ1Bvb2wsXG4gIEZhR2lmdHMsXG4gIEdpV2FsbGV0LFxuXTtcbmNvbnN0IEluZm9JdGVtID0gKHsgdmFsID0ge30sIEljbyA9IGljb25zWzBdIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTYgbGc6Y29sLXNwYW4tMiBweC00IHB0LTIwIHBiLTQgcmVsYXRpdmUgYmctcmVkLTIwMCByb3VuZGVkLXhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotMjAgaW5zZXQtMCBmcm9tLXZpb2xldC00MDAgdG8tcHJpbWFyeSBiZy1ncmFkaWVudC10by1iciBiZy1vcGFjaXR5LTMwIHRyYW5zZm9ybSByb3RhdGUtMyByb3VuZGVkLXhsXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotNDAgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRvcC0xMFwiPlxuICAgICAgICA8SWNvIGNsYXNzTmFtZT1cImgtMjQgdy0yNCB0ZXh0LXNlY29uZGFyeVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0zMCBweC00IHB5LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0yIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7dmFsLnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHt2YWwucHJlICYmIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj57dmFsLnByZX0gPC9zcGFuPn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57dmFsLmN9PC9zcGFuPlxuICAgICAgICAgIHt2YWwuc3ViICYmIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj4ge3ZhbC5zdWJ9PC9zcGFuPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBEYXNoYm9hcmRJbmZvID0gKCkgPT4ge1xuICBjb25zdCBscEJuYiA9IHVzZVNlbGVjdG9yKGxwQm5iU2VsZWN0b3IpO1xuICBjb25zdCBwb29sID0gdXNlU2VsZWN0b3IocG9vbFNlbGVjdG9yKTtcbiAgY29uc3QgdG9rZW5QcmljZSA9IHVzZVNlbGVjdG9yKHRva2VuUHJpY2VTZWxlY3Rvcik7XG4gIGNvbnN0IHRvdGFsTGlxdWlkID0gdXNlU2VsZWN0b3IodG90YWxMaXF1aWRQb29sU2VsZWN0b3IpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ2FwLTE2XCI+XG4gICAgICAgIDxJbmZvSXRlbVxuICAgICAgICAgIHZhbD17e1xuICAgICAgICAgICAgdDogXCJNYXggVHJhbnNhY3Rpb24gQW1vdW50XCIsXG4gICAgICAgICAgICBjOiBcIjEsMDAwLDAwMCwwMDAsMDAwXCIsXG4gICAgICAgICAgICBwcmU6IFwiJEJIT1wiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgSWNvPXtpY29uc1swXX1cbiAgICAgICAgLz5cbiAgICAgICAgPEluZm9JdGVtXG4gICAgICAgICAgdmFsPXt7XG4gICAgICAgICAgICB0OiBcIlRvdGFsIGxpcXVpZGl0eSBwb29sXCIsXG4gICAgICAgICAgICBjOiB0b3RhbExpcXVpZCA/IE51bWJlcih0b3RhbExpcXVpZCkudG9GaXhlZCg0KSA6IFwiLS1cIixcbiAgICAgICAgICAgIHByZTogXCIkXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBJY289e2ljb25zWzFdfVxuICAgICAgICAvPlxuICAgICAgICA8SW5mb0l0ZW1cbiAgICAgICAgICB2YWw9e3tcbiAgICAgICAgICAgIHQ6IFwiQ3VycmVudCAxIGJpbCAkQkhPIFByaWNlXCIsXG4gICAgICAgICAgICBjOiB0b2tlblByaWNlID8gTnVtYmVyKHRva2VuUHJpY2UpLnRvRml4ZWQoOCkgOiBcIi0tXCIsXG4gICAgICAgICAgICBwcmU6IFwiJFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgSWNvPXtpY29uc1syXX1cbiAgICAgICAgLz5cbiAgICAgICAgPEluZm9JdGVtXG4gICAgICAgICAgdmFsPXt7XG4gICAgICAgICAgICB0OiBcIlRvdGFsIEJOQiBpbiBsaXF1aWRpdHkgcG9vbFwiLFxuICAgICAgICAgICAgYzogbHBCbmIgPyBOdW1iZXIobHBCbmIpLnRvRml4ZWQoNCkgOiBcIi0tXCIsXG4gICAgICAgICAgICBzdWI6IFwiQk5CXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBJY289e2ljb25zWzNdfVxuICAgICAgICAvPlxuICAgICAgICA8SW5mb0l0ZW1cbiAgICAgICAgICB2YWw9e3tcbiAgICAgICAgICAgIHQ6IFwiVG90YWwgQk5CIGluIHJld2FyZCBwb29sXCIsXG4gICAgICAgICAgICBjOiBwb29sID8gTnVtYmVyKHBvb2wpLnRvRml4ZWQoNCkgOiBcIi0tXCIsXG4gICAgICAgICAgICBzdWI6IFwiQk5CXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBJY289e2ljb25zWzRdfVxuICAgICAgICAvPlxuICAgICAgICB7LyogPEluZm9JdGVtXG4gICAgICAgICAgdmFsPXt7IHQ6IFwiWW91ciAkSE9ETCBiYWxhbmNlXCIsIGM6IFwiLS1cIiwgcHJlOiBcIiRCSE9cIiB9fVxuICAgICAgICAgIEljbz17aWNvbnNbNV19XG4gICAgICAgIC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRJbmZvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==