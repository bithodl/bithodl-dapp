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
        value: null,
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
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "Total Liquidity Pool",
        value: totalLiquidPool,
        prefix: "$"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "Reward Pool",
        value: pool,
        subfix: "BNB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "Reserve Pool",
        value: charityPool,
        subfix: "BNB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SumaryItem, {
        text: "BHO Marketcap",
        value: marketCap,
        prefix: "$"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1N1bWFyeS5qcyJdLCJuYW1lcyI6WyJTdW1hcnlJdGVtIiwidGV4dCIsInZhbHVlIiwicHJlZml4Iiwic3ViZml4IiwibnVtYmVyRm9ybWF0IiwiU3VtYXJ5IiwidXNlU3VtYXJ5IiwicG9vbCIsInVzZVNlbGVjdG9yIiwicG9vbFNlbGVjdG9yIiwiY2hhcml0eVBvb2wiLCJjaGFyaXR5UG9vbFNlbGVjdG9yIiwicHJpY2UiLCJ0b2tlblByaWNlU2VsZWN0b3IiLCJ0b3RhbExpcXVpZFBvb2wiLCJ0b3RhbExpcXVpZFBvb2xTZWxlY3RvciIsIm1hcmtldENhcCIsIm1hcmtldENhcFNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFxQztBQUFBLE1BQWxDQyxJQUFrQyxRQUFsQ0EsSUFBa0M7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN0RCxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsZ0JBQTZDSDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLGlCQUNHRSxNQUFNLGlCQUFJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQXVCQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGIsRUFFR0QsS0FBSyxJQUFJQSxLQUFLLElBQUksQ0FBbEIsZ0JBQ0MsOERBQUMsOERBQUQ7QUFBZ0IsbUJBQVcsRUFBRUcsNERBQTdCO0FBQTJDLGFBQUssRUFBRUg7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEdBR0MsSUFMSixFQU9HRSxNQUFNLGlCQUFJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQXVCQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWZEOztLQUFNSixVOztBQWdCTixJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CQywyREFBUztBQUNULE1BQU1DLElBQUksR0FBR0Msd0RBQVcsQ0FBQ0MsNkRBQUQsQ0FBeEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLHdEQUFXLENBQUNHLG9FQUFELENBQS9CO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSix3REFBVyxDQUFDSyxtRUFBRCxDQUF6QjtBQUNBLE1BQU1DLGVBQWUsR0FBR04sd0RBQVcsQ0FBQ08sd0VBQUQsQ0FBbkM7QUFDQSxNQUFNQyxTQUFTLEdBQUdSLHdEQUFXLENBQUNTLGtFQUFELENBQTdCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDZHQUFmO0FBQUEsOEJBQ0UsOERBQUMsVUFBRDtBQUFZLFlBQUksRUFBQyx3QkFBakI7QUFBMEMsYUFBSyxFQUFFLElBQWpEO0FBQXVELGNBQU0sRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxVQUFEO0FBQVksWUFBSSxFQUFFLGlCQUFsQjtBQUFxQyxhQUFLLEVBQUVMLEtBQTVDO0FBQW1ELGNBQU0sRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxVQUFEO0FBQ0UsWUFBSSxFQUFDLHNCQURQO0FBRUUsYUFBSyxFQUFFRSxlQUZUO0FBR0UsY0FBTSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBUUUsOERBQUMsVUFBRDtBQUFZLFlBQUksRUFBQyxhQUFqQjtBQUErQixhQUFLLEVBQUVQLElBQXRDO0FBQTRDLGNBQU0sRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFTRSw4REFBQyxVQUFEO0FBQVksWUFBSSxFQUFDLGNBQWpCO0FBQWdDLGFBQUssRUFBRUcsV0FBdkM7QUFBb0QsY0FBTSxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFLDhEQUFDLFVBQUQ7QUFBWSxZQUFJLEVBQUMsZUFBakI7QUFBaUMsYUFBSyxFQUFFTSxTQUF4QztBQUFtRCxjQUFNLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXhCRDs7R0FBTVgsTTtVQUNKQyxxRCxFQUNhRSxvRCxFQUNPQSxvRCxFQUNOQSxvRCxFQUNVQSxvRCxFQUNOQSxvRDs7O01BTmRILE07QUEwQk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGY0MzdlMWZkMGRkYmE2OGIxNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNoYXJpdHlQb29sU2VsZWN0b3IsXG4gIG1hcmtldENhcFNlbGVjdG9yLFxuICBwb29sU2VsZWN0b3IsXG4gIHRva2VuUHJpY2VTZWxlY3RvcixcbiAgdG90YWxMaXF1aWRQb29sU2VsZWN0b3IsXG59IGZyb20gXCIuLi8uLi9zbGljZXMvY29tbW9uU2xpY2VcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQW5pbWF0ZWROdW1iZXIgZnJvbSBcImFuaW1hdGVkLW51bWJlci1yZWFjdFwiO1xuaW1wb3J0IHsgbnVtYmVyRm9ybWF0IH0gZnJvbSBcIi4uLy4uL2xpYnMvbnVtYmVyRm9ybWF0XCI7XG5pbXBvcnQgdXNlU3VtYXJ5IGZyb20gXCIuLi8uLi9ob29rcy91c2VTdW1hcnlcIjtcbmNvbnN0IFN1bWFyeUl0ZW0gPSAoeyB0ZXh0LCB2YWx1ZSwgcHJlZml4LCBzdWJmaXggfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBsYXN0Om1iLTAgbGc6bWItMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIHRleHQtc20gbWItMVwiPnt0ZXh0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtwcmVmaXggJiYgPGRpdiBjbGFzc05hbWU9XCJtci0xXCI+e3ByZWZpeH08L2Rpdj59XG4gICAgICAgIHt2YWx1ZSAmJiB2YWx1ZSAhPSAwID8gKFxuICAgICAgICAgIDxBbmltYXRlZE51bWJlciBmb3JtYXRWYWx1ZT17bnVtYmVyRm9ybWF0fSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCItLVwiXG4gICAgICAgICl9XG4gICAgICAgIHtzdWJmaXggJiYgPGRpdiBjbGFzc05hbWU9XCJtbC0xXCI+e3N1YmZpeH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBTdW1hcnkgPSAoKSA9PiB7XG4gIHVzZVN1bWFyeSgpO1xuICBjb25zdCBwb29sID0gdXNlU2VsZWN0b3IocG9vbFNlbGVjdG9yKTtcbiAgY29uc3QgY2hhcml0eVBvb2wgPSB1c2VTZWxlY3RvcihjaGFyaXR5UG9vbFNlbGVjdG9yKTtcbiAgY29uc3QgcHJpY2UgPSB1c2VTZWxlY3Rvcih0b2tlblByaWNlU2VsZWN0b3IpO1xuICBjb25zdCB0b3RhbExpcXVpZFBvb2wgPSB1c2VTZWxlY3Rvcih0b3RhbExpcXVpZFBvb2xTZWxlY3Rvcik7XG4gIGNvbnN0IG1hcmtldENhcCA9IHVzZVNlbGVjdG9yKG1hcmtldENhcFNlbGVjdG9yKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeSB0by12aW9sZXQtNTAwIHB4LTggcHktNiByb3VuZGVkLWxnIHRleHQtd2hpdGUgZmxleC13cmFwXCI+XG4gICAgICAgIDxTdW1hcnlJdGVtIHRleHQ9XCJNYXggVHJhbnNhY3Rpb24gQW1vdW50XCIgdmFsdWU9e251bGx9IHByZWZpeD1cIiRCSE9cIiAvPlxuICAgICAgICA8U3VtYXJ5SXRlbSB0ZXh0PXtcIjEgQmlsIEJITyBQcmljZVwifSB2YWx1ZT17cHJpY2V9IHByZWZpeD1cIiRcIiAvPlxuICAgICAgICA8U3VtYXJ5SXRlbVxuICAgICAgICAgIHRleHQ9XCJUb3RhbCBMaXF1aWRpdHkgUG9vbFwiXG4gICAgICAgICAgdmFsdWU9e3RvdGFsTGlxdWlkUG9vbH1cbiAgICAgICAgICBwcmVmaXg9XCIkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFN1bWFyeUl0ZW0gdGV4dD1cIlJld2FyZCBQb29sXCIgdmFsdWU9e3Bvb2x9IHN1YmZpeD1cIkJOQlwiIC8+XG4gICAgICAgIDxTdW1hcnlJdGVtIHRleHQ9XCJSZXNlcnZlIFBvb2xcIiB2YWx1ZT17Y2hhcml0eVBvb2x9IHN1YmZpeD1cIkJOQlwiIC8+XG4gICAgICAgIDxTdW1hcnlJdGVtIHRleHQ9XCJCSE8gTWFya2V0Y2FwXCIgdmFsdWU9e21hcmtldENhcH0gcHJlZml4PVwiJFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1bWFyeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=