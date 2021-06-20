self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/Sumary.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Sumary.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_commonSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/commonSlice */ "./src/slices/commonSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var animated_number_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animated-number-react */ "./node_modules/animated-number-react/build/index.js");
/* harmony import */ var animated_number_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animated_number_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_numberFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/numberFormat */ "./src/libs/numberFormat.js");
/* harmony import */ var _hooks_useSumary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSumary */ "./src/hooks/useSumary.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kaliz/dev/tantranlee/dapp-starter-v2/src/components/Header/Sumary.js",
    _this = undefined,
    _s = $RefreshSig$();







var SumaryItem = function SumaryItem(_ref) {
  var text = _ref.text,
      value = _ref.value,
      prefix = _ref.prefix,
      subfix = _ref.subfix;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mb-4 last:mb-0 lg:mb-0",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-gray-200 text-sm mb-1",
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-lg flex items-center",
      children: [prefix && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mr-1",
        children: prefix
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 20
      }, _this), value && value != 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((animated_number_react__WEBPACK_IMPORTED_MODULE_3___default()), {
        formatValue: _libs_numberFormat__WEBPACK_IMPORTED_MODULE_4__.numberFormat,
        value: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this) : "--", subfix && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ml-1",
        children: subfix
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = SumaryItem;

var Sumary = function Sumary() {
  _s();

  (0,_hooks_useSumary__WEBPACK_IMPORTED_MODULE_5__.default)();
  var pool = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_1__.poolSelector);
  var charityPool = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_1__.charityPoolSelector);
  var price = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_1__.tokenPriceSelector);
  var totalLiquidPool = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_1__.totalLiquidPoolSelector);
  var marketCap = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_1__.marketCapSelector);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between bg-gradient-to-br from-primary to-violet-500 px-8 py-6 rounded-lg text-white flex-wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "Max Transaction Amount",
        value: 2860000000000000,
        prefix: "$BHO"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "1 Bil BHO Price",
        value: price,
        prefix: "$"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "Total Liquidity Pool",
        value: totalLiquidPool,
        prefix: "$"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "Reward Pool",
        value: pool,
        subfix: "BNB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "Reserve Pool",
        value: charityPool,
        subfix: "BNB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "BHO Marketcap",
        value: marketCap,
        prefix: "$"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_s(Sumary, "DFYGtER0WYqdL7hrhgZp972K8xA=", false, function () {
  return [_hooks_useSumary__WEBPACK_IMPORTED_MODULE_5__.default, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c2 = Sumary;
/* harmony default export */ __webpack_exports__["default"] = (Sumary);

var _c, _c2;

$RefreshReg$(_c, "SumaryItem");
$RefreshReg$(_c2, "Sumary");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1N1bWFyeS5qcyJdLCJuYW1lcyI6WyJTdW1hcnlJdGVtIiwidGV4dCIsInZhbHVlIiwicHJlZml4Iiwic3ViZml4IiwibnVtYmVyRm9ybWF0IiwiU3VtYXJ5IiwidXNlU3VtYXJ5IiwicG9vbCIsInVzZVNlbGVjdG9yIiwicG9vbFNlbGVjdG9yIiwiY2hhcml0eVBvb2wiLCJjaGFyaXR5UG9vbFNlbGVjdG9yIiwicHJpY2UiLCJ0b2tlblByaWNlU2VsZWN0b3IiLCJ0b3RhbExpcXVpZFBvb2wiLCJ0b3RhbExpcXVpZFBvb2xTZWxlY3RvciIsIm1hcmtldENhcCIsIm1hcmtldENhcFNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFxQztBQUFBLE1BQWxDQyxJQUFrQyxRQUFsQ0EsSUFBa0M7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN0RCxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsZ0JBQTZDSDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLGlCQUNHRSxNQUFNLGlCQUFJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQXVCQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGIsRUFFR0QsS0FBSyxJQUFJQSxLQUFLLElBQUksQ0FBbEIsZ0JBQ0MsOERBQUMsOERBQUQ7QUFBZ0IsbUJBQVcsRUFBRUcsNERBQTdCO0FBQTJDLGFBQUssRUFBRUg7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEdBR0MsSUFMSixFQU9HRSxNQUFNLGlCQUFJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQXVCQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWZEOztLQUFNSixVOztBQWdCTixJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CQywyREFBUztBQUNULE1BQU1DLElBQUksR0FBR0Msd0RBQVcsQ0FBQ0MsNkRBQUQsQ0FBeEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLHdEQUFXLENBQUNHLG9FQUFELENBQS9CO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSix3REFBVyxDQUFDSyxtRUFBRCxDQUF6QjtBQUNBLE1BQU1DLGVBQWUsR0FBR04sd0RBQVcsQ0FBQ08sd0VBQUQsQ0FBbkM7QUFDQSxNQUFNQyxTQUFTLEdBQUdSLHdEQUFXLENBQUNTLGtFQUFELENBQTdCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDZHQUFmO0FBQUEsOEJBQ0UsOERBQUMsVUFBRDtBQUNFLFlBQUksRUFBQyx3QkFEUDtBQUVFLGFBQUssRUFBRSxnQkFGVDtBQUdFLGNBQU0sRUFBQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FLDhEQUFDLFVBQUQ7QUFBWSxZQUFJLEVBQUUsaUJBQWxCO0FBQXFDLGFBQUssRUFBRUwsS0FBNUM7QUFBbUQsY0FBTSxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FLDhEQUFDLFVBQUQ7QUFDRSxZQUFJLEVBQUMsc0JBRFA7QUFFRSxhQUFLLEVBQUVFLGVBRlQ7QUFHRSxjQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFZRSw4REFBQyxVQUFEO0FBQVksWUFBSSxFQUFDLGFBQWpCO0FBQStCLGFBQUssRUFBRVAsSUFBdEM7QUFBNEMsY0FBTSxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixlQWFFLDhEQUFDLFVBQUQ7QUFBWSxZQUFJLEVBQUMsY0FBakI7QUFBZ0MsYUFBSyxFQUFFRyxXQUF2QztBQUFvRCxjQUFNLEVBQUM7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBY0UsOERBQUMsVUFBRDtBQUFZLFlBQUksRUFBQyxlQUFqQjtBQUFpQyxhQUFLLEVBQUVNLFNBQXhDO0FBQW1ELGNBQU0sRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBNUJEOztHQUFNWCxNO1VBQ0pDLHFELEVBQ2FFLG9ELEVBQ09BLG9ELEVBQ05BLG9ELEVBQ1VBLG9ELEVBQ05BLG9EOzs7TUFOZEgsTTtBQThCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NzIwYzA4ZmEyZjIzMjZlN2M3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY2hhcml0eVBvb2xTZWxlY3RvcixcbiAgbWFya2V0Q2FwU2VsZWN0b3IsXG4gIHBvb2xTZWxlY3RvcixcbiAgdG9rZW5QcmljZVNlbGVjdG9yLFxuICB0b3RhbExpcXVpZFBvb2xTZWxlY3Rvcixcbn0gZnJvbSBcIi4uLy4uL3NsaWNlcy9jb21tb25TbGljZVwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBBbmltYXRlZE51bWJlciBmcm9tIFwiYW5pbWF0ZWQtbnVtYmVyLXJlYWN0XCI7XG5pbXBvcnQgeyBudW1iZXJGb3JtYXQgfSBmcm9tIFwiLi4vLi4vbGlicy9udW1iZXJGb3JtYXRcIjtcbmltcG9ydCB1c2VTdW1hcnkgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVN1bWFyeVwiO1xuY29uc3QgU3VtYXJ5SXRlbSA9ICh7IHRleHQsIHZhbHVlLCBwcmVmaXgsIHN1YmZpeCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGxhc3Q6bWItMCBsZzptYi0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS0yMDAgdGV4dC1zbSBtYi0xXCI+e3RleHR9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge3ByZWZpeCAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1yLTFcIj57cHJlZml4fTwvZGl2Pn1cbiAgICAgICAge3ZhbHVlICYmIHZhbHVlICE9IDAgPyAoXG4gICAgICAgICAgPEFuaW1hdGVkTnVtYmVyIGZvcm1hdFZhbHVlPXtudW1iZXJGb3JtYXR9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBcIi0tXCJcbiAgICAgICAgKX1cbiAgICAgICAge3N1YmZpeCAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1sLTFcIj57c3ViZml4fTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IFN1bWFyeSA9ICgpID0+IHtcbiAgdXNlU3VtYXJ5KCk7XG4gIGNvbnN0IHBvb2wgPSB1c2VTZWxlY3Rvcihwb29sU2VsZWN0b3IpO1xuICBjb25zdCBjaGFyaXR5UG9vbCA9IHVzZVNlbGVjdG9yKGNoYXJpdHlQb29sU2VsZWN0b3IpO1xuICBjb25zdCBwcmljZSA9IHVzZVNlbGVjdG9yKHRva2VuUHJpY2VTZWxlY3Rvcik7XG4gIGNvbnN0IHRvdGFsTGlxdWlkUG9vbCA9IHVzZVNlbGVjdG9yKHRvdGFsTGlxdWlkUG9vbFNlbGVjdG9yKTtcbiAgY29uc3QgbWFya2V0Q2FwID0gdXNlU2VsZWN0b3IobWFya2V0Q2FwU2VsZWN0b3IpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5IHRvLXZpb2xldC01MDAgcHgtOCBweS02IHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBmbGV4LXdyYXBcIj5cbiAgICAgICAgPFN1bWFyeUl0ZW1cbiAgICAgICAgICB0ZXh0PVwiTWF4IFRyYW5zYWN0aW9uIEFtb3VudFwiXG4gICAgICAgICAgdmFsdWU9ezI4NjAwMDAwMDAwMDAwMDB9XG4gICAgICAgICAgcHJlZml4PVwiJEJIT1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxTdW1hcnlJdGVtIHRleHQ9e1wiMSBCaWwgQkhPIFByaWNlXCJ9IHZhbHVlPXtwcmljZX0gcHJlZml4PVwiJFwiIC8+XG4gICAgICAgIDxTdW1hcnlJdGVtXG4gICAgICAgICAgdGV4dD1cIlRvdGFsIExpcXVpZGl0eSBQb29sXCJcbiAgICAgICAgICB2YWx1ZT17dG90YWxMaXF1aWRQb29sfVxuICAgICAgICAgIHByZWZpeD1cIiRcIlxuICAgICAgICAvPlxuICAgICAgICA8U3VtYXJ5SXRlbSB0ZXh0PVwiUmV3YXJkIFBvb2xcIiB2YWx1ZT17cG9vbH0gc3ViZml4PVwiQk5CXCIgLz5cbiAgICAgICAgPFN1bWFyeUl0ZW0gdGV4dD1cIlJlc2VydmUgUG9vbFwiIHZhbHVlPXtjaGFyaXR5UG9vbH0gc3ViZml4PVwiQk5CXCIgLz5cbiAgICAgICAgPFN1bWFyeUl0ZW0gdGV4dD1cIkJITyBNYXJrZXRjYXBcIiB2YWx1ZT17bWFya2V0Q2FwfSBwcmVmaXg9XCIkXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VtYXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==