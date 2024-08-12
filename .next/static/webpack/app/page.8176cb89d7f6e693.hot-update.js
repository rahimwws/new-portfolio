"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/about.tsx":
/*!**********************************!*\
  !*** ./src/components/about.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./src/utils/index.ts\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ \"(app-pages-browser)/./src/components/ui/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst About = (param)=>{\n    let { about, timeline } = param;\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const education = timeline.filter((line)=>line.forEducation && line.enabled === true).sort((a, b)=>a.sequence - b.sequence);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative\",\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_4__.SlideIn, {\n                            children: about.quote\n                        }, void 0, false, {\n                            fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                        viewport: {\n                            once: true\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl md:text-4xl text-foreground/50\",\n                            children: about.description\n                        }, void 0, false, {\n                            fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sticky top-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/main.jpg\",\n                            width: 500,\n                            height: 400,\n                            alt: \"Rahym Hudaykulyyev\",\n                            className: \"rounded-xl max-md:aspect-square object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nconst TimelineCard = (param)=>{\n    let { timeline, activeIndex, setActiveIndex, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-b border-primary/20 py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between gap-4 cursor-pointer select-none\",\n                onClick: ()=>setActiveIndex(index),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"0\",\n                            index + 1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-xl md:text-3xl font-bold flex-1\",\n                        children: timeline.jobTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative size-6 flex items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-primary w-4 md:w-6 h-0.5 absolute\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {\n                                initial: {\n                                    rotate: 90\n                                },\n                                animate: {\n                                    rotate: activeIndex === index ? 0 : 90\n                                },\n                                className: \"absolute bg-primary w-4 md:w-6 h-0.5 rotate-90\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                lineNumber: 70,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: {\n                    height: activeIndex === index ? \"100%\" : 0\n                },\n                animate: {\n                    height: activeIndex === index ? \"100%\" : 0\n                },\n                className: \"overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-foreground/60 py-4 max-md:text-sm\",\n                        children: timeline.summary\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center pb-3 text-foreground/80\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-md:text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: timeline.company_name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: timeline.jobLocation\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-md:text-xs\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"italic\",\n                                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(timeline.startDate).month + \", \" + (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(timeline.startDate).year\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    \" - \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"italic\",\n                                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(timeline.endDate).month + \", \" + (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(timeline.endDate).year\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc list-inside\",\n                        children: timeline.bulletPoints.map((point, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-foreground/80 max-md:text-sm\",\n                                children: point\n                            }, index, false, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                lineNumber: 89,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n        lineNumber: 69,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = TimelineCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c1, \"TimelineCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRytCO0FBQzRCO0FBQ0g7QUFDbkI7QUFDTTtBQU8zQyxNQUFNTSxRQUFRO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQWM7O0lBQzVDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNVSxZQUFZSCxTQUNmSSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsWUFBWSxJQUFJRCxLQUFLRSxPQUFPLEtBQUssTUFDdkRDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxRQUFRLEdBQUdELEVBQUVDLFFBQVE7SUFFekMscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsSUFBRzs7MEJBRUgsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQUdILFdBQVU7a0NBQ1osNEVBQUNqQix3Q0FBT0E7c0NBQUVHLE1BQU1rQixLQUFLOzs7Ozs7Ozs7OztrQ0FFdkIsOERBQUNwQiwyQ0FBVUE7d0JBQUNxQixVQUFVOzRCQUFFQyxNQUFNO3dCQUFLO2tDQUNqQyw0RUFBQ0M7NEJBQUVQLFdBQVU7c0NBQ1ZkLE1BQU1zQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJeEIsOERBQUNOO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDRTtvQkFBSUYsV0FBVTs4QkFDYiw0RUFBQ2hCLDJDQUFVQTtrQ0FDVCw0RUFBQ0wsa0RBQUtBOzRCQUNKOEIsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBSTs0QkFDSlosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBckNNZjtLQUFBQTtBQXVDTiwrREFBZUEsS0FBS0EsRUFBQztBQVNyQixNQUFNNEIsZUFBZTtRQUFDLEVBQ3BCMUIsUUFBUSxFQUNSQyxXQUFXLEVBQ1hDLGNBQWMsRUFDZHlCLEtBQUssRUFDYTt5QkFDbEIsOERBQUNaO1FBQUlGLFdBQVU7OzBCQUNiLDhEQUFDRTtnQkFDQ0YsV0FBVTtnQkFDVmUsU0FBUyxJQUFNMUIsZUFBZXlCOztrQ0FFOUIsOERBQUNFOzs0QkFBSzs0QkFBRUYsUUFBUTs7Ozs7OztrQ0FDaEIsOERBQUNFO3dCQUFLaEIsV0FBVTtrQ0FDYmIsU0FBUzhCLFFBQVE7Ozs7OztrQ0FFcEIsOERBQUNmO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ2dCO2dDQUFLaEIsV0FBVTs7Ozs7OzBDQUNoQiw4REFBQ25CLGlEQUFNQSxDQUFDbUMsSUFBSTtnQ0FDVkUsU0FBUztvQ0FBRUMsUUFBUTtnQ0FBRztnQ0FDdEJDLFNBQVM7b0NBQ1BELFFBQVEvQixnQkFBZ0IwQixRQUFRLElBQUk7Z0NBQ3RDO2dDQUNBZCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWhCLDhEQUFDbkIsaURBQU1BLENBQUNxQixHQUFHO2dCQUNUZ0IsU0FBUztvQkFDUFAsUUFBUXZCLGdCQUFnQjBCLFFBQVEsU0FBUztnQkFDM0M7Z0JBQ0FNLFNBQVM7b0JBQ1BULFFBQVF2QixnQkFBZ0IwQixRQUFRLFNBQVM7Z0JBQzNDO2dCQUNBZCxXQUFVOztrQ0FFViw4REFBQ087d0JBQUVQLFdBQVU7a0NBQ1ZiLFNBQVNrQyxPQUFPOzs7Ozs7a0NBRW5CLDhEQUFDbkI7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBSUYsV0FBVTs7a0RBQ2IsOERBQUNnQjtrREFBTTdCLFNBQVNtQyxZQUFZOzs7Ozs7a0RBQzVCLDhEQUFDTjtrREFBTTdCLFNBQVNvQyxXQUFXOzs7Ozs7Ozs7Ozs7MENBRTdCLDhEQUFDckI7Z0NBQUlGLFdBQVU7O2tEQUNiLDhEQUFDZ0I7d0NBQUtoQixXQUFVO2tEQUNibEIsa0RBQVVBLENBQUNLLFNBQVNxQyxTQUFTLEVBQUVDLEtBQUssR0FDbkMsT0FDQTNDLGtEQUFVQSxDQUFDSyxTQUFTcUMsU0FBUyxFQUFFRSxJQUFJOzs7Ozs7b0NBRXRDO2tEQUNELDhEQUFDVjt3Q0FBS2hCLFdBQVU7a0RBQ2JsQixrREFBVUEsQ0FBQ0ssU0FBU3dDLE9BQU8sRUFBRUYsS0FBSyxHQUNqQyxPQUNBM0Msa0RBQVVBLENBQUNLLFNBQVN3QyxPQUFPLEVBQUVELElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJekMsOERBQUNFO3dCQUFHNUIsV0FBVTtrQ0FDWGIsU0FBUzBDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9qQixzQkFDakMsOERBQUNrQjtnQ0FBZWhDLFdBQVU7MENBQ3ZCK0I7K0JBRE1qQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUEzRGJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LnRzeD9mMGNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBBYm91dCBhcyBBYm91dFR5cGUsIFRpbWVsaW5lIH0gZnJvbSBcIkAvdXRpbHMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCB7IFNsaWRlSW4sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi91aVwiO1xuXG5pbnRlcmZhY2UgQWJvdXRQcm9wcyB7XG4gIGFib3V0OiBBYm91dFR5cGU7XG4gIHRpbWVsaW5lOiBUaW1lbGluZVtdO1xufVxuXG5jb25zdCBBYm91dCA9ICh7IGFib3V0LCB0aW1lbGluZSB9OiBBYm91dFByb3BzKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgZWR1Y2F0aW9uID0gdGltZWxpbmVcbiAgICAuZmlsdGVyKChsaW5lKSA9PiBsaW5lLmZvckVkdWNhdGlvbiAmJiBsaW5lLmVuYWJsZWQgPT09IHRydWUpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEuc2VxdWVuY2UgLSBiLnNlcXVlbmNlKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy1bMS44ZnJfMWZyXSBnYXAteC0xMCBweS0yMCBweC00IG1kOnB4LTggcmVsYXRpdmVcIlxuICAgICAgaWQ9XCJhYm91dFwiXG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1kOnRleHQtNXhsIHRleHQtMnhsIGZvbnQtYm9sZCBvdmVyZmxvdy1oaWRkZW4gdXBwZXJjYXNlIHBiLThcIj5cbiAgICAgICAgICA8U2xpZGVJbj57YWJvdXQucXVvdGV9PC9TbGlkZUluPlxuICAgICAgICA8L2gzPlxuICAgICAgICA8VHJhbnNpdGlvbiB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC00eGwgdGV4dC1mb3JlZ3JvdW5kLzUwXCI+XG4gICAgICAgICAgICB7YWJvdXQuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTZcIj5cbiAgICAgICAgICA8VHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvbWFpbi5qcGdcIlxuICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgYWx0PVwiUmFoeW0gSHVkYXlrdWx5eWV2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBtYXgtbWQ6YXNwZWN0LXNxdWFyZSBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG5cbmludGVyZmFjZSBUaW1lbGluZUNhcmRQcm9wcyB7XG4gIHRpbWVsaW5lOiBUaW1lbGluZTtcbiAgYWN0aXZlSW5kZXg6IG51bWJlcjtcbiAgc2V0QWN0aXZlSW5kZXg6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5jb25zdCBUaW1lbGluZUNhcmQgPSAoe1xuICB0aW1lbGluZSxcbiAgYWN0aXZlSW5kZXgsXG4gIHNldEFjdGl2ZUluZGV4LFxuICBpbmRleCxcbn06IFRpbWVsaW5lQ2FyZFByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXByaW1hcnkvMjAgcHktNFwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJbmRleChpbmRleCl9XG4gICAgPlxuICAgICAgPHNwYW4+MHtpbmRleCArIDF9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgZmxleC0xXCI+XG4gICAgICAgIHt0aW1lbGluZS5qb2JUaXRsZX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc2l6ZS02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdy00IG1kOnctNiBoLTAuNSBhYnNvbHV0ZVwiIC8+XG4gICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgIGluaXRpYWw9e3sgcm90YXRlOiA5MCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgIHJvdGF0ZTogYWN0aXZlSW5kZXggPT09IGluZGV4ID8gMCA6IDkwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctcHJpbWFyeSB3LTQgbWQ6dy02IGgtMC41IHJvdGF0ZS05MFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17e1xuICAgICAgICBoZWlnaHQ6IGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IFwiMTAwJVwiIDogMCxcbiAgICAgIH19XG4gICAgICBhbmltYXRlPXt7XG4gICAgICAgIGhlaWdodDogYWN0aXZlSW5kZXggPT09IGluZGV4ID8gXCIxMDAlXCIgOiAwLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiXG4gICAgPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kLzYwIHB5LTQgbWF4LW1kOnRleHQtc21cIj5cbiAgICAgICAge3RpbWVsaW5lLnN1bW1hcnl9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwYi0zIHRleHQtZm9yZWdyb3VuZC84MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1tZDp0ZXh0LXNtXCI+XG4gICAgICAgICAgPHNwYW4+e3RpbWVsaW5lLmNvbXBhbnlfbmFtZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3RpbWVsaW5lLmpvYkxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LW1kOnRleHQteHNcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGFsaWNcIj5cbiAgICAgICAgICAgIHtmb3JtYXREYXRlKHRpbWVsaW5lLnN0YXJ0RGF0ZSkubW9udGggK1xuICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICBmb3JtYXREYXRlKHRpbWVsaW5lLnN0YXJ0RGF0ZSkueWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge1wiIC0gXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRhbGljXCI+XG4gICAgICAgICAgICB7Zm9ybWF0RGF0ZSh0aW1lbGluZS5lbmREYXRlKS5tb250aCArXG4gICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgIGZvcm1hdERhdGUodGltZWxpbmUuZW5kRGF0ZSkueWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlXCI+XG4gICAgICAgIHt0aW1lbGluZS5idWxsZXRQb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kLzgwIG1heC1tZDp0ZXh0LXNtXCI+XG4gICAgICAgICAgICB7cG9pbnR9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgPC9kaXY+XG4pO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJmb3JtYXREYXRlIiwiU2xpZGVJbiIsIlRyYW5zaXRpb24iLCJBYm91dCIsImFib3V0IiwidGltZWxpbmUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiZWR1Y2F0aW9uIiwiZmlsdGVyIiwibGluZSIsImZvckVkdWNhdGlvbiIsImVuYWJsZWQiLCJzb3J0IiwiYSIsImIiLCJzZXF1ZW5jZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImgzIiwicXVvdGUiLCJ2aWV3cG9ydCIsIm9uY2UiLCJwIiwiZGVzY3JpcHRpb24iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIlRpbWVsaW5lQ2FyZCIsImluZGV4Iiwib25DbGljayIsInNwYW4iLCJqb2JUaXRsZSIsImluaXRpYWwiLCJyb3RhdGUiLCJhbmltYXRlIiwic3VtbWFyeSIsImNvbXBhbnlfbmFtZSIsImpvYkxvY2F0aW9uIiwic3RhcnREYXRlIiwibW9udGgiLCJ5ZWFyIiwiZW5kRGF0ZSIsInVsIiwiYnVsbGV0UG9pbnRzIiwibWFwIiwicG9pbnQiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/about.tsx\n"));

/***/ })

});