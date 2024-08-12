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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./src/utils/index.ts\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ \"(app-pages-browser)/./src/components/ui/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst About = (param)=>{\n    let { about, timeline } = param;\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const education = timeline.filter((line)=>line.forEducation && line.enabled === true).sort((a, b)=>a.sequence - b.sequence);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative\",\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_4__.SlideIn, {\n                            children: \"'I want to be great'\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                        viewport: {\n                            once: true\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl md:text-4xl text-foreground/50\",\n                            children: about.description\n                        }, void 0, false, {\n                            fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-10 overflow-hidden grid w-full\",\n                            children: education.map((edu, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TimelineCard, {\n                                        index: index,\n                                        activeIndex: activeIndex,\n                                        setActiveIndex: setActiveIndex,\n                                        timeline: edu\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, edu._id, false, {\n                                    fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sticky top-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/main.jpg\",\n                            width: 500,\n                            height: 400,\n                            alt: \"Rahym Hudaykulyyev\",\n                            className: \"rounded-xl max-md:aspect-square object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(About, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nconst TimelineCard = (param)=>{\n    let { timeline, activeIndex, setActiveIndex, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-b border-primary/20 py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between gap-4 cursor-pointer select-none\",\n                onClick: ()=>setActiveIndex(index),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"0\",\n                            index + 1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-xl md:text-3xl font-bold flex-1\",\n                        children: timeline.jobTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative size-6 flex items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-primary w-4 md:w-6 h-0.5 absolute\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.span, {\n                                initial: {\n                                    rotate: 90\n                                },\n                                animate: {\n                                    rotate: activeIndex === index ? 0 : 90\n                                },\n                                className: \"absolute bg-primary w-4 md:w-6 h-0.5 rotate-90\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                lineNumber: 84,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: {\n                    height: activeIndex === index ? \"100%\" : 0\n                },\n                animate: {\n                    height: activeIndex === index ? \"100%\" : 0\n                },\n                className: \"overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-foreground/60 py-4 max-md:text-sm\",\n                        children: timeline.summary\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center pb-3 text-foreground/80\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-md:text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: timeline.company_name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: timeline.jobLocation\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-md:text-xs\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"italic\",\n                                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(timeline.startDate).month + \", \" + (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(timeline.startDate).year\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    \" - \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"italic\",\n                                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(timeline.endDate).month + \", \" + (0,_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(timeline.endDate).year\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc list-inside\",\n                        children: timeline.bulletPoints.map((point, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-foreground/80 max-md:text-sm\",\n                                children: point\n                            }, index, false, {\n                                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rahim/Desktop/work/the-portfolio/src/components/about.tsx\",\n        lineNumber: 83,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = TimelineCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"About\");\n$RefreshReg$(_c1, \"TimelineCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRytCO0FBQzRCO0FBQ0g7QUFDbkI7QUFDTTtBQU8zQyxNQUFNTSxRQUFRO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQWM7O0lBQzVDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNVSxZQUFZSCxTQUNmSSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsWUFBWSxJQUFJRCxLQUFLRSxPQUFPLEtBQUssTUFDdkRDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxRQUFRLEdBQUdELEVBQUVDLFFBQVE7SUFFekMscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsSUFBRzs7MEJBRUgsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQUdILFdBQVU7a0NBQ1osNEVBQUNqQix3Q0FBT0E7c0NBQUM7Ozs7Ozs7Ozs7O2tDQUVYLDhEQUFDQywyQ0FBVUE7d0JBQUNvQixVQUFVOzRCQUFFQyxNQUFNO3dCQUFLO2tDQUNqQyw0RUFBQ0M7NEJBQUVOLFdBQVU7c0NBQ1ZkLE1BQU1xQixXQUFXOzs7Ozs7Ozs7OztrQ0FHdEIsOERBQUNMO3dCQUFJRixXQUFVO2tDQUNiLDRFQUFDRTs0QkFBSUYsV0FBVTtzQ0FDWlYsVUFBVWtCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDbkIsOERBQUMxQiwyQ0FBVUE7OENBQ1QsNEVBQUMyQjt3Q0FDQ0QsT0FBT0E7d0NBQ1B0QixhQUFhQTt3Q0FDYkMsZ0JBQWdCQTt3Q0FDaEJGLFVBQVVzQjs7Ozs7O21DQUxHQSxJQUFJRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBWWhDLDhEQUFDVjtnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUlGLFdBQVU7OEJBQ2IsNEVBQUNoQiwyQ0FBVUE7a0NBQ1QsNEVBQUNMLGtEQUFLQTs0QkFDSmtDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUk7NEJBQ0poQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0FuRE1mO0tBQUFBO0FBcUROLCtEQUFlQSxLQUFLQSxFQUFDO0FBU3JCLE1BQU0wQixlQUFlO1FBQUMsRUFDcEJ4QixRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsY0FBYyxFQUNkcUIsS0FBSyxFQUNhO3lCQUNsQiw4REFBQ1I7UUFBSUYsV0FBVTs7MEJBQ2IsOERBQUNFO2dCQUNDRixXQUFVO2dCQUNWaUIsU0FBUyxJQUFNNUIsZUFBZXFCOztrQ0FFOUIsOERBQUNROzs0QkFBSzs0QkFBRVIsUUFBUTs7Ozs7OztrQ0FDaEIsOERBQUNRO3dCQUFLbEIsV0FBVTtrQ0FDYmIsU0FBU2dDLFFBQVE7Ozs7OztrQ0FFcEIsOERBQUNqQjt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNrQjtnQ0FBS2xCLFdBQVU7Ozs7OzswQ0FDaEIsOERBQUNuQixpREFBTUEsQ0FBQ3FDLElBQUk7Z0NBQ1ZFLFNBQVM7b0NBQUVDLFFBQVE7Z0NBQUc7Z0NBQ3RCQyxTQUFTO29DQUNQRCxRQUFRakMsZ0JBQWdCc0IsUUFBUSxJQUFJO2dDQUN0QztnQ0FDQVYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ25CLGlEQUFNQSxDQUFDcUIsR0FBRztnQkFDVGtCLFNBQVM7b0JBQ1BMLFFBQVEzQixnQkFBZ0JzQixRQUFRLFNBQVM7Z0JBQzNDO2dCQUNBWSxTQUFTO29CQUNQUCxRQUFRM0IsZ0JBQWdCc0IsUUFBUSxTQUFTO2dCQUMzQztnQkFDQVYsV0FBVTs7a0NBRVYsOERBQUNNO3dCQUFFTixXQUFVO2tDQUNWYixTQUFTb0MsT0FBTzs7Ozs7O2tDQUVuQiw4REFBQ3JCO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUlGLFdBQVU7O2tEQUNiLDhEQUFDa0I7a0RBQU0vQixTQUFTcUMsWUFBWTs7Ozs7O2tEQUM1Qiw4REFBQ047a0RBQU0vQixTQUFTc0MsV0FBVzs7Ozs7Ozs7Ozs7OzBDQUU3Qiw4REFBQ3ZCO2dDQUFJRixXQUFVOztrREFDYiw4REFBQ2tCO3dDQUFLbEIsV0FBVTtrREFDYmxCLGtEQUFVQSxDQUFDSyxTQUFTdUMsU0FBUyxFQUFFQyxLQUFLLEdBQ25DLE9BQ0E3QyxrREFBVUEsQ0FBQ0ssU0FBU3VDLFNBQVMsRUFBRUUsSUFBSTs7Ozs7O29DQUV0QztrREFDRCw4REFBQ1Y7d0NBQUtsQixXQUFVO2tEQUNibEIsa0RBQVVBLENBQUNLLFNBQVMwQyxPQUFPLEVBQUVGLEtBQUssR0FDakMsT0FDQTdDLGtEQUFVQSxDQUFDSyxTQUFTMEMsT0FBTyxFQUFFRCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXpDLDhEQUFDRTt3QkFBRzlCLFdBQVU7a0NBQ1hiLFNBQVM0QyxZQUFZLENBQUN2QixHQUFHLENBQUMsQ0FBQ3dCLE9BQU90QixzQkFDakMsOERBQUN1QjtnQ0FBZWpDLFdBQVU7MENBQ3ZCZ0M7K0JBRE10Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUEzRGJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LnRzeD9mMGNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBBYm91dCBhcyBBYm91dFR5cGUsIFRpbWVsaW5lIH0gZnJvbSBcIkAvdXRpbHMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCB7IFNsaWRlSW4sIFRyYW5zaXRpb24gfSBmcm9tIFwiLi91aVwiO1xuXG5pbnRlcmZhY2UgQWJvdXRQcm9wcyB7XG4gIGFib3V0OiBBYm91dFR5cGU7XG4gIHRpbWVsaW5lOiBUaW1lbGluZVtdO1xufVxuXG5jb25zdCBBYm91dCA9ICh7IGFib3V0LCB0aW1lbGluZSB9OiBBYm91dFByb3BzKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgZWR1Y2F0aW9uID0gdGltZWxpbmVcbiAgICAuZmlsdGVyKChsaW5lKSA9PiBsaW5lLmZvckVkdWNhdGlvbiAmJiBsaW5lLmVuYWJsZWQgPT09IHRydWUpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEuc2VxdWVuY2UgLSBiLnNlcXVlbmNlKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy1bMS44ZnJfMWZyXSBnYXAteC0xMCBweS0yMCBweC00IG1kOnB4LTggcmVsYXRpdmVcIlxuICAgICAgaWQ9XCJhYm91dFwiXG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1kOnRleHQtNXhsIHRleHQtMnhsIGZvbnQtYm9sZCBvdmVyZmxvdy1oaWRkZW4gdXBwZXJjYXNlIHBiLThcIj5cbiAgICAgICAgICA8U2xpZGVJbj4nSSB3YW50IHRvIGJlIGdyZWF0JzwvU2xpZGVJbj5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPFRyYW5zaXRpb24gdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtNHhsIHRleHQtZm9yZWdyb3VuZC81MFwiPlxuICAgICAgICAgICAge2Fib3V0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCBvdmVyZmxvdy1oaWRkZW4gZ3JpZCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIHtlZHVjYXRpb24ubWFwKChlZHUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxUcmFuc2l0aW9uIGtleT17ZWR1Ll9pZH0+XG4gICAgICAgICAgICAgICAgPFRpbWVsaW5lQ2FyZFxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW5kZXg9e3NldEFjdGl2ZUluZGV4fVxuICAgICAgICAgICAgICAgICAgdGltZWxpbmU9e2VkdX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTZcIj5cbiAgICAgICAgICA8VHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvbWFpbi5qcGdcIlxuICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgYWx0PVwiUmFoeW0gSHVkYXlrdWx5eWV2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBtYXgtbWQ6YXNwZWN0LXNxdWFyZSBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG5cbmludGVyZmFjZSBUaW1lbGluZUNhcmRQcm9wcyB7XG4gIHRpbWVsaW5lOiBUaW1lbGluZTtcbiAgYWN0aXZlSW5kZXg6IG51bWJlcjtcbiAgc2V0QWN0aXZlSW5kZXg6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5jb25zdCBUaW1lbGluZUNhcmQgPSAoe1xuICB0aW1lbGluZSxcbiAgYWN0aXZlSW5kZXgsXG4gIHNldEFjdGl2ZUluZGV4LFxuICBpbmRleCxcbn06IFRpbWVsaW5lQ2FyZFByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXByaW1hcnkvMjAgcHktNFwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJbmRleChpbmRleCl9XG4gICAgPlxuICAgICAgPHNwYW4+MHtpbmRleCArIDF9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgZmxleC0xXCI+XG4gICAgICAgIHt0aW1lbGluZS5qb2JUaXRsZX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc2l6ZS02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdy00IG1kOnctNiBoLTAuNSBhYnNvbHV0ZVwiIC8+XG4gICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgIGluaXRpYWw9e3sgcm90YXRlOiA5MCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgIHJvdGF0ZTogYWN0aXZlSW5kZXggPT09IGluZGV4ID8gMCA6IDkwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctcHJpbWFyeSB3LTQgbWQ6dy02IGgtMC41IHJvdGF0ZS05MFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17e1xuICAgICAgICBoZWlnaHQ6IGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IFwiMTAwJVwiIDogMCxcbiAgICAgIH19XG4gICAgICBhbmltYXRlPXt7XG4gICAgICAgIGhlaWdodDogYWN0aXZlSW5kZXggPT09IGluZGV4ID8gXCIxMDAlXCIgOiAwLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiXG4gICAgPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kLzYwIHB5LTQgbWF4LW1kOnRleHQtc21cIj5cbiAgICAgICAge3RpbWVsaW5lLnN1bW1hcnl9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwYi0zIHRleHQtZm9yZWdyb3VuZC84MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1tZDp0ZXh0LXNtXCI+XG4gICAgICAgICAgPHNwYW4+e3RpbWVsaW5lLmNvbXBhbnlfbmFtZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3RpbWVsaW5lLmpvYkxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LW1kOnRleHQteHNcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGFsaWNcIj5cbiAgICAgICAgICAgIHtmb3JtYXREYXRlKHRpbWVsaW5lLnN0YXJ0RGF0ZSkubW9udGggK1xuICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICBmb3JtYXREYXRlKHRpbWVsaW5lLnN0YXJ0RGF0ZSkueWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge1wiIC0gXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRhbGljXCI+XG4gICAgICAgICAgICB7Zm9ybWF0RGF0ZSh0aW1lbGluZS5lbmREYXRlKS5tb250aCArXG4gICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgIGZvcm1hdERhdGUodGltZWxpbmUuZW5kRGF0ZSkueWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlXCI+XG4gICAgICAgIHt0aW1lbGluZS5idWxsZXRQb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kLzgwIG1heC1tZDp0ZXh0LXNtXCI+XG4gICAgICAgICAgICB7cG9pbnR9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgPC9kaXY+XG4pO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJmb3JtYXREYXRlIiwiU2xpZGVJbiIsIlRyYW5zaXRpb24iLCJBYm91dCIsImFib3V0IiwidGltZWxpbmUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiZWR1Y2F0aW9uIiwiZmlsdGVyIiwibGluZSIsImZvckVkdWNhdGlvbiIsImVuYWJsZWQiLCJzb3J0IiwiYSIsImIiLCJzZXF1ZW5jZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImRpdiIsImgzIiwidmlld3BvcnQiLCJvbmNlIiwicCIsImRlc2NyaXB0aW9uIiwibWFwIiwiZWR1IiwiaW5kZXgiLCJUaW1lbGluZUNhcmQiLCJfaWQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm9uQ2xpY2siLCJzcGFuIiwiam9iVGl0bGUiLCJpbml0aWFsIiwicm90YXRlIiwiYW5pbWF0ZSIsInN1bW1hcnkiLCJjb21wYW55X25hbWUiLCJqb2JMb2NhdGlvbiIsInN0YXJ0RGF0ZSIsIm1vbnRoIiwieWVhciIsImVuZERhdGUiLCJ1bCIsImJ1bGxldFBvaW50cyIsInBvaW50IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/about.tsx\n"));

/***/ })

});