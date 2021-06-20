self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Dashboard/DashboardContent.js":
/*!******************************************************!*\
  !*** ./src/components/Dashboard/DashboardContent.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useConnector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useConnector */ "./src/hooks/useConnector.js");
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useContract */ "./src/hooks/useContract.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../slices/commonSlice */ "./src/slices/commonSlice.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var _libs_isAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../libs/isAddress */ "./src/libs/isAddress.js");
/* harmony import */ var _libs_numberFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/numberFormat */ "./src/libs/numberFormat.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/dapp-starter-v2/src/components/Dashboard/DashboardContent.js",
    _this = undefined,
    _s = $RefreshSig$();














var DashboardContent = function DashboardContent() {
  _s();

  var connector = (0,_hooks_useConnector__WEBPACK_IMPORTED_MODULE_5__.default)();
  var contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_6__.default)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__.accountSelector);
  var share = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__.shareSelector);
  var reward = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__.bnbRewardSelector);
  var nextDateClaim = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__.nextClaimSelector);

  var getBnbReward = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var reward;
      return _home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return contract.calcBnbReward(account);

            case 2:
              reward = _context.sent;
              dispatch((0,_slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__.setBnbReward)(reward));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getBnbReward() {
      return _ref.apply(this, arguments);
    };
  }();

  var getNextClaim = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var nextDate;
      return _home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return contract.getNextClaim(account);

            case 2:
              nextDate = _context2.sent;
              dispatch((0,_slices_commonSlice__WEBPACK_IMPORTED_MODULE_8__.setNextClaim)(nextDate));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getNextClaim() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleClaimBnb = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      var isChainId, web3;
      return _home_kaliz_dev_tantranlee_dapp_starter_v2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return connector.validateChainId();

            case 2:
              isChainId = _context3.sent;

              if (isChainId) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.error("Please select Binance Smart Chain"));

            case 5:
              if (!(reward == null || nextDateClaim == null || reward == 0 || nextDateClaim - Date.now() > 0)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_13__.toast.error("You can not collect BNB at this time"));

            case 7:
              _context3.next = 9;
              return connector.getWeb3();

            case 9:
              web3 = _context3.sent;
              _context3.next = 12;
              return contract.claimBnb(web3, account);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleClaimBnb() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react_use__WEBPACK_IMPORTED_MODULE_14__.useInterval)(function () {
    if ((0,_libs_isAddress__WEBPACK_IMPORTED_MODULE_9__.default)(account)) {
      getBnbReward();
      getNextClaim();
    }
  }, account ? 5000 : null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if ((0,_libs_isAddress__WEBPACK_IMPORTED_MODULE_9__.default)(account)) {
      getBnbReward();
      getNextClaim();
    }
  }, [account]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "py-16",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "p-8 rounded bg-white max-w-lg text-lg mx-auto mb-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/logo.png",
        alt: "",
        className: "w-24 h-24 mx-auto mb-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "font-medium text-secondary text-center text-xl",
        children: "$BHO"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), account && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: "Your Reward Share"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-medium text-xl",
          children: [share !== null ? (0,_libs_numberFormat__WEBPACK_IMPORTED_MODULE_10__.numberFormat)(share) : "--", "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: "Buy More To Increase Your BNB Reward Share!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center mb-8",
        children: "Accumulating Wealth Was Never This Simple!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=".concat(_constants__WEBPACK_IMPORTED_MODULE_12__.CONTRACT_ADDRESS),
          target: "_blank",
          className: "inline-block text-lg px-4 py-2 rounded-full focus:outline-none bg-gradient-to-br from-primary to-violet-500 text-white font-medium",
          children: "Buy $BHO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-white p-8 rounded shadow text-lg text-center",
      children: account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-medium mb-2",
          children: ["My collectable BNB: ", (0,_libs_numberFormat__WEBPACK_IMPORTED_MODULE_10__.numberFormat)(reward), " BNB"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-primary mb-2",
          children: ["*Forecasted Annual BNB Rewards: ", (0,_libs_numberFormat__WEBPACK_IMPORTED_MODULE_10__.numberFormat)(reward * 364), " BNB"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-gray-500 mb-2",
          children: "*Pool and Rewards are always changing based on buys, sells, collects by others and your percentage holdings."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-4",
          children: ["Next Collect Date:", " ", reward == 0 | reward == null && nextDateClaim == 0 ? "You need to Buy and Hold Tokens to Earn BNB" : nextDateClaim > Date.now() ? moment__WEBPACK_IMPORTED_MODULE_7___default()(nextDateClaim).format("MMMM Do YYYY, h:mm a") : "You can claim NOW"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "px-4 py-2 rounded-full bg-gradient-to-br from-primary to-violet-500 text-white font-medium",
            onClick: handleClaimBnb,
            children: "Collect my BNB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-medium mb-2",
          children: "My collectable BNB: -- BNB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: ["Please choose", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-primary",
            children: "Binanace Smart Chain"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, _this), " and", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: connector.onConnect,
            className: "px-4 py-2 bg-gradient-to-br from-primary to-violet-500 text-white rounded-full focus:outline-none",
            children: "connect"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, _this), " ", "your wallet"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
};

_s(DashboardContent, "f2oe7bx7VXri+OflwybGo6Jz7vE=", false, function () {
  return [_hooks_useConnector__WEBPACK_IMPORTED_MODULE_5__.default, _hooks_useContract__WEBPACK_IMPORTED_MODULE_6__.default, react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_use__WEBPACK_IMPORTED_MODULE_14__.useInterval];
});

_c = DashboardContent;
/* harmony default export */ __webpack_exports__["default"] = (DashboardContent);

var _c;

$RefreshReg$(_c, "DashboardContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZENvbnRlbnQuanMiXSwibmFtZXMiOlsiRGFzaGJvYXJkQ29udGVudCIsImNvbm5lY3RvciIsInVzZUNvbm5lY3RvciIsImNvbnRyYWN0IiwidXNlQ29udHJhY3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWNjb3VudCIsInVzZVNlbGVjdG9yIiwiYWNjb3VudFNlbGVjdG9yIiwic2hhcmUiLCJzaGFyZVNlbGVjdG9yIiwicmV3YXJkIiwiYm5iUmV3YXJkU2VsZWN0b3IiLCJuZXh0RGF0ZUNsYWltIiwibmV4dENsYWltU2VsZWN0b3IiLCJnZXRCbmJSZXdhcmQiLCJjYWxjQm5iUmV3YXJkIiwic2V0Qm5iUmV3YXJkIiwiZ2V0TmV4dENsYWltIiwibmV4dERhdGUiLCJzZXROZXh0Q2xhaW0iLCJoYW5kbGVDbGFpbUJuYiIsInZhbGlkYXRlQ2hhaW5JZCIsImlzQ2hhaW5JZCIsInRvYXN0IiwiRGF0ZSIsIm5vdyIsImdldFdlYjMiLCJ3ZWIzIiwiY2xhaW1CbmIiLCJ1c2VJbnRlcnZhbCIsImlzQWRkcmVzcyIsInVzZUVmZmVjdCIsIm51bWJlckZvcm1hdCIsIkNPTlRSQUNUX0FERFJFU1MiLCJtb21lbnQiLCJmb3JtYXQiLCJvbkNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLFNBQVMsR0FBR0MsNERBQVksRUFBOUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLDJEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Msd0RB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YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5iZTY2NGM5ZGZkMDAwNDZjODY4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB1c2VDb25uZWN0b3IgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvbm5lY3RvclwiO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gXCIuLi8uLi9ob29rcy91c2VDb250cmFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQge1xuICBhY2NvdW50U2VsZWN0b3IsXG4gIGJuYlJld2FyZFNlbGVjdG9yLFxuICBuZXh0Q2xhaW1TZWxlY3RvcixcbiAgcG9vbFNlbGVjdG9yLFxuICBzZXRCbmJSZXdhcmQsXG4gIHNldE5leHRDbGFpbSxcbiAgc2V0U2hhcmUsXG4gIHNoYXJlU2VsZWN0b3IsXG59IGZyb20gXCIuLi8uLi9zbGljZXMvY29tbW9uU2xpY2VcIjtcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuaW1wb3J0IGlzQWRkcmVzcyBmcm9tIFwiLi4vLi4vbGlicy9pc0FkZHJlc3NcIjtcbmltcG9ydCB7IG51bWJlckZvcm1hdCB9IGZyb20gXCIuLi8uLi9saWJzL251bWJlckZvcm1hdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBtcyBmcm9tIFwibXNcIjtcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5jb25zdCBEYXNoYm9hcmRDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb25uZWN0b3IgPSB1c2VDb25uZWN0b3IoKTtcbiAgY29uc3QgY29udHJhY3QgPSB1c2VDb250cmFjdCgpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihhY2NvdW50U2VsZWN0b3IpO1xuICBjb25zdCBzaGFyZSA9IHVzZVNlbGVjdG9yKHNoYXJlU2VsZWN0b3IpO1xuICBjb25zdCByZXdhcmQgPSB1c2VTZWxlY3RvcihibmJSZXdhcmRTZWxlY3Rvcik7XG4gIGNvbnN0IG5leHREYXRlQ2xhaW0gPSB1c2VTZWxlY3RvcihuZXh0Q2xhaW1TZWxlY3Rvcik7XG5cbiAgY29uc3QgZ2V0Qm5iUmV3YXJkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJld2FyZCA9IGF3YWl0IGNvbnRyYWN0LmNhbGNCbmJSZXdhcmQoYWNjb3VudCk7XG4gICAgZGlzcGF0Y2goc2V0Qm5iUmV3YXJkKHJld2FyZCkpO1xuICB9O1xuICBjb25zdCBnZXROZXh0Q2xhaW0gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbmV4dERhdGUgPSBhd2FpdCBjb250cmFjdC5nZXROZXh0Q2xhaW0oYWNjb3VudCk7XG4gICAgZGlzcGF0Y2goc2V0TmV4dENsYWltKG5leHREYXRlKSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsYWltQm5iID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGlzQ2hhaW5JZCA9IGF3YWl0IGNvbm5lY3Rvci52YWxpZGF0ZUNoYWluSWQoKTtcbiAgICBpZiAoIWlzQ2hhaW5JZCkge1xuICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKFwiUGxlYXNlIHNlbGVjdCBCaW5hbmNlIFNtYXJ0IENoYWluXCIpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICByZXdhcmQgPT0gbnVsbCB8fFxuICAgICAgbmV4dERhdGVDbGFpbSA9PSBudWxsIHx8XG4gICAgICByZXdhcmQgPT0gMCB8fFxuICAgICAgbmV4dERhdGVDbGFpbSAtIERhdGUubm93KCkgPiAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gdG9hc3QuZXJyb3IoXCJZb3UgY2FuIG5vdCBjb2xsZWN0IEJOQiBhdCB0aGlzIHRpbWVcIik7XG4gICAgfVxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBjb25uZWN0b3IuZ2V0V2ViMygpO1xuICAgIC8vIGNoZWNrIGNoYWluIElkXG4gICAgYXdhaXQgY29udHJhY3QuY2xhaW1CbmIod2ViMywgYWNjb3VudCk7XG4gIH07XG4gIHVzZUludGVydmFsKFxuICAgICgpID0+IHtcbiAgICAgIGlmIChpc0FkZHJlc3MoYWNjb3VudCkpIHtcbiAgICAgICAgZ2V0Qm5iUmV3YXJkKCk7XG4gICAgICAgIGdldE5leHRDbGFpbSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWNjb3VudCA/IDUwMDAgOiBudWxsXG4gICk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQWRkcmVzcyhhY2NvdW50KSkge1xuICAgICAgZ2V0Qm5iUmV3YXJkKCk7XG4gICAgICBnZXROZXh0Q2xhaW0oKTtcbiAgICB9XG4gIH0sIFthY2NvdW50XSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggcm91bmRlZCBiZy13aGl0ZSBtYXgtdy1sZyB0ZXh0LWxnIG14LWF1dG8gbWItMTZcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNlY29uZGFyeSB0ZXh0LWNlbnRlciB0ZXh0LXhsXCI+XG4gICAgICAgICAgJEJIT1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2FjY291bnQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+WW91ciBSZXdhcmQgU2hhcmU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC14bFwiPlxuICAgICAgICAgICAgICB7c2hhcmUgIT09IG51bGwgPyBudW1iZXJGb3JtYXQoc2hhcmUpIDogXCItLVwifSVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5CdXkgTW9yZSBUbyBJbmNyZWFzZSBZb3VyIEJOQiBSZXdhcmQgU2hhcmUhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgIEFjY3VtdWxhdGluZyBXZWFsdGggV2FzIE5ldmVyIFRoaXMgU2ltcGxlIVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9leGNoYW5nZS5wYW5jYWtlc3dhcC5maW5hbmNlLyMvc3dhcD9vdXRwdXRDdXJyZW5jeT0ke0NPTlRSQUNUX0FERFJFU1N9YH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1sZyBweC00IHB5LTIgcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1ncmFkaWVudC10by1iciBmcm9tLXByaW1hcnkgdG8tdmlvbGV0LTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBCdXkgJEJIT1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQgc2hhZG93IHRleHQtbGcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAge2FjY291bnQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbWItMlwiPlxuICAgICAgICAgICAgICBNeSBjb2xsZWN0YWJsZSBCTkI6IHtudW1iZXJGb3JtYXQocmV3YXJkKX0gQk5CXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IG1iLTJcIj5cbiAgICAgICAgICAgICAgKkZvcmVjYXN0ZWQgQW5udWFsIEJOQiBSZXdhcmRzOiB7bnVtYmVyRm9ybWF0KHJld2FyZCAqIDM2NCl9IEJOQlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbWItMlwiPlxuICAgICAgICAgICAgICAqUG9vbCBhbmQgUmV3YXJkcyBhcmUgYWx3YXlzIGNoYW5naW5nIGJhc2VkIG9uIGJ1eXMsIHNlbGxzLFxuICAgICAgICAgICAgICBjb2xsZWN0cyBieSBvdGhlcnMgYW5kIHlvdXIgcGVyY2VudGFnZSBob2xkaW5ncy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIE5leHQgQ29sbGVjdCBEYXRlOntcIiBcIn1cbiAgICAgICAgICAgICAgeyhyZXdhcmQgPT0gMCkgfCAocmV3YXJkID09IG51bGwpICYmIG5leHREYXRlQ2xhaW0gPT0gMFxuICAgICAgICAgICAgICAgID8gXCJZb3UgbmVlZCB0byBCdXkgYW5kIEhvbGQgVG9rZW5zIHRvIEVhcm4gQk5CXCJcbiAgICAgICAgICAgICAgICA6IG5leHREYXRlQ2xhaW0gPiBEYXRlLm5vdygpXG4gICAgICAgICAgICAgICAgPyBtb21lbnQobmV4dERhdGVDbGFpbSkuZm9ybWF0KFwiTU1NTSBEbyBZWVlZLCBoOm1tIGFcIilcbiAgICAgICAgICAgICAgICA6IFwiWW91IGNhbiBjbGFpbSBOT1dcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wcmltYXJ5IHRvLXZpb2xldC01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xhaW1CbmJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb2xsZWN0IG15IEJOQlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG1iLTJcIj5NeSBjb2xsZWN0YWJsZSBCTkI6IC0tIEJOQjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgUGxlYXNlIGNob29zZXtcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+QmluYW5hY2UgU21hcnQgQ2hhaW48L3NwYW4+IGFuZHtcIiBcIn1cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3Rvci5vbkNvbm5lY3R9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHJpbWFyeSB0by12aW9sZXQtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBjb25uZWN0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgICAgICAgeW91ciB3YWxsZXRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==