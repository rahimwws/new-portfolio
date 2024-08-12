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

/***/ "(app-pages-browser)/./src/utils/data.ts":
/*!***************************!*\
  !*** ./src/utils/data.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        company_name: \"Freelance/Self Employed\",\n        summary: \"Created a personal project focused on habit formation, with functionalities such as tracking, complex calendars, authentication, and friend management.\",\n        sequence: 3,\n        startDate: \"2024-05-01T00:00:00.000Z\",\n        endDate: \"Present\",\n        jobTitle: \"Mobile Developer\",\n        jobLocation: \"Kuala Lumpur\",\n        bulletPoints: [\n            \"Created a personal project from scratch, collaborating with an experienced designer on the design.\",\n            \"Designed the backend architecture and developed the application, which is now fully functional and undergoing testing.\",\n            \"The app focuses on habit formation, featuring functionalities such as tracking, complex calendars, authentication, and friend management.\"\n        ],\n        forEducation: false,\n        enabled: true\n    },\n    {\n        company_name: \"RuleBreakers\",\n        summary: \"Improved the Helper project and worked on the SHE app, focusing on mobile development and enhancing communication between frontend and backend systems.\",\n        sequence: 2,\n        startDate: \"2024-03-01T00:00:00.000Z\",\n        endDate: \"2024-05-01T00:00:00.000Z\",\n        jobTitle: \"Mobile Developer\",\n        jobLocation: \"Tbilisi\",\n        bulletPoints: [\n            \"Improved the Helper project focused on import substitution for ChatGPT.\",\n            \"Developed new features and optimized the application for better performance.\",\n            \"Enhanced communication between frontend and backend systems.\",\n            \"Created new screens and integrated VK and Google authentication using React Native and sockets.\",\n            \"Worked on the SHE app, helping women communicate with an AI psychologist using the same tech stack.\"\n        ],\n        forEducation: false,\n        enabled: true\n    },\n    {\n        company_name: \"Ussat Injener\",\n        summary: \"Focused on design activities for a construction company, developing an online store and overseeing the complete design process.\",\n        sequence: 1,\n        startDate: \"2023-10-01T00:00:00.000Z\",\n        endDate: \"2024-01-31T00:00:00.000Z\",\n        jobTitle: \"Front End Developer\",\n        jobLocation: \"Ashgabat\",\n        bulletPoints: [\n            \"Focused on design activities for a construction company, handling the complete design process.\",\n            \"Developed an online store, which can be found at angar.tm, overseeing all aspects of its creation.\",\n            \"Utilized Next.js, React, React Query, Jotai, Sass, and TypeScript for both projects.\"\n        ],\n        forEducation: false,\n        enabled: true\n    },\n    {\n        company_name: \"Gozle\",\n        summary: \"Developed React components and built a news website from scratch using React, Redux Toolkit, and Axios.\",\n        sequence: 0,\n        startDate: \"2023-05-01T00:00:00.000Z\",\n        endDate: \"2023-09-30T00:00:00.000Z\",\n        jobTitle: \"Front End Developer\",\n        jobLocation: \"Ashgabat\",\n        bulletPoints: [\n            \"Developed React components as part of a collaborative team effort.\",\n            \"Built a news website from scratch, available at gozle.org, using React, Redux Toolkit, and Axios.\"\n        ],\n        forEducation: false,\n        enabled: true\n    }\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9kYXRhLnRzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZTtJQUNiO1FBQ0VBLGNBQWM7UUFDZEMsU0FDRTtRQUNGQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsY0FBYztZQUNaO1lBQ0E7WUFDQTtTQUNEO1FBQ0RDLGNBQWM7UUFDZEMsU0FBUztJQUNYO0lBQ0E7UUFDRVQsY0FBYztRQUNkQyxTQUNFO1FBQ0ZDLFVBQVU7UUFDVkMsV0FBVztRQUNYQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxjQUFjO1lBQ1o7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0RDLGNBQWM7UUFDZEMsU0FBUztJQUNYO0lBQ0E7UUFDRVQsY0FBYztRQUNkQyxTQUNFO1FBQ0ZDLFVBQVU7UUFDVkMsV0FBVztRQUNYQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxjQUFjO1lBQ1o7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsY0FBYztRQUNkQyxTQUFTO0lBQ1g7SUFDQTtRQUNFVCxjQUFjO1FBQ2RDLFNBQ0U7UUFDRkMsVUFBVTtRQUNWQyxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLGNBQWM7WUFDWjtZQUNBO1NBQ0Q7UUFDREMsY0FBYztRQUNkQyxTQUFTO0lBQ1g7Q0FDRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9kYXRhLnRzP2ZhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgY29tcGFueV9uYW1lOiBcIkZyZWVsYW5jZS9TZWxmIEVtcGxveWVkXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQ3JlYXRlZCBhIHBlcnNvbmFsIHByb2plY3QgZm9jdXNlZCBvbiBoYWJpdCBmb3JtYXRpb24sIHdpdGggZnVuY3Rpb25hbGl0aWVzIHN1Y2ggYXMgdHJhY2tpbmcsIGNvbXBsZXggY2FsZW5kYXJzLCBhdXRoZW50aWNhdGlvbiwgYW5kIGZyaWVuZCBtYW5hZ2VtZW50LlwiLFxuICAgIHNlcXVlbmNlOiAzLFxuICAgIHN0YXJ0RGF0ZTogXCIyMDI0LTA1LTAxVDAwOjAwOjAwLjAwMFpcIixcbiAgICBlbmREYXRlOiBcIlByZXNlbnRcIixcbiAgICBqb2JUaXRsZTogXCJNb2JpbGUgRGV2ZWxvcGVyXCIsXG4gICAgam9iTG9jYXRpb246IFwiS3VhbGEgTHVtcHVyXCIsXG4gICAgYnVsbGV0UG9pbnRzOiBbXG4gICAgICBcIkNyZWF0ZWQgYSBwZXJzb25hbCBwcm9qZWN0IGZyb20gc2NyYXRjaCwgY29sbGFib3JhdGluZyB3aXRoIGFuIGV4cGVyaWVuY2VkIGRlc2lnbmVyIG9uIHRoZSBkZXNpZ24uXCIsXG4gICAgICBcIkRlc2lnbmVkIHRoZSBiYWNrZW5kIGFyY2hpdGVjdHVyZSBhbmQgZGV2ZWxvcGVkIHRoZSBhcHBsaWNhdGlvbiwgd2hpY2ggaXMgbm93IGZ1bGx5IGZ1bmN0aW9uYWwgYW5kIHVuZGVyZ29pbmcgdGVzdGluZy5cIixcbiAgICAgIFwiVGhlIGFwcCBmb2N1c2VzIG9uIGhhYml0IGZvcm1hdGlvbiwgZmVhdHVyaW5nIGZ1bmN0aW9uYWxpdGllcyBzdWNoIGFzIHRyYWNraW5nLCBjb21wbGV4IGNhbGVuZGFycywgYXV0aGVudGljYXRpb24sIGFuZCBmcmllbmQgbWFuYWdlbWVudC5cIixcbiAgICBdLFxuICAgIGZvckVkdWNhdGlvbjogZmFsc2UsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGNvbXBhbnlfbmFtZTogXCJSdWxlQnJlYWtlcnNcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJbXByb3ZlZCB0aGUgSGVscGVyIHByb2plY3QgYW5kIHdvcmtlZCBvbiB0aGUgU0hFIGFwcCwgZm9jdXNpbmcgb24gbW9iaWxlIGRldmVsb3BtZW50IGFuZCBlbmhhbmNpbmcgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIGZyb250ZW5kIGFuZCBiYWNrZW5kIHN5c3RlbXMuXCIsXG4gICAgc2VxdWVuY2U6IDIsXG4gICAgc3RhcnREYXRlOiBcIjIwMjQtMDMtMDFUMDA6MDA6MDAuMDAwWlwiLFxuICAgIGVuZERhdGU6IFwiMjAyNC0wNS0wMVQwMDowMDowMC4wMDBaXCIsXG4gICAgam9iVGl0bGU6IFwiTW9iaWxlIERldmVsb3BlclwiLFxuICAgIGpvYkxvY2F0aW9uOiBcIlRiaWxpc2lcIixcbiAgICBidWxsZXRQb2ludHM6IFtcbiAgICAgIFwiSW1wcm92ZWQgdGhlIEhlbHBlciBwcm9qZWN0IGZvY3VzZWQgb24gaW1wb3J0IHN1YnN0aXR1dGlvbiBmb3IgQ2hhdEdQVC5cIixcbiAgICAgIFwiRGV2ZWxvcGVkIG5ldyBmZWF0dXJlcyBhbmQgb3B0aW1pemVkIHRoZSBhcHBsaWNhdGlvbiBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlwiLFxuICAgICAgXCJFbmhhbmNlZCBjb21tdW5pY2F0aW9uIGJldHdlZW4gZnJvbnRlbmQgYW5kIGJhY2tlbmQgc3lzdGVtcy5cIixcbiAgICAgIFwiQ3JlYXRlZCBuZXcgc2NyZWVucyBhbmQgaW50ZWdyYXRlZCBWSyBhbmQgR29vZ2xlIGF1dGhlbnRpY2F0aW9uIHVzaW5nIFJlYWN0IE5hdGl2ZSBhbmQgc29ja2V0cy5cIixcbiAgICAgIFwiV29ya2VkIG9uIHRoZSBTSEUgYXBwLCBoZWxwaW5nIHdvbWVuIGNvbW11bmljYXRlIHdpdGggYW4gQUkgcHN5Y2hvbG9naXN0IHVzaW5nIHRoZSBzYW1lIHRlY2ggc3RhY2suXCIsXG4gICAgXSxcbiAgICBmb3JFZHVjYXRpb246IGZhbHNlLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBjb21wYW55X25hbWU6IFwiVXNzYXQgSW5qZW5lclwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkZvY3VzZWQgb24gZGVzaWduIGFjdGl2aXRpZXMgZm9yIGEgY29uc3RydWN0aW9uIGNvbXBhbnksIGRldmVsb3BpbmcgYW4gb25saW5lIHN0b3JlIGFuZCBvdmVyc2VlaW5nIHRoZSBjb21wbGV0ZSBkZXNpZ24gcHJvY2Vzcy5cIixcbiAgICBzZXF1ZW5jZTogMSxcbiAgICBzdGFydERhdGU6IFwiMjAyMy0xMC0wMVQwMDowMDowMC4wMDBaXCIsXG4gICAgZW5kRGF0ZTogXCIyMDI0LTAxLTMxVDAwOjAwOjAwLjAwMFpcIixcbiAgICBqb2JUaXRsZTogXCJGcm9udCBFbmQgRGV2ZWxvcGVyXCIsXG4gICAgam9iTG9jYXRpb246IFwiQXNoZ2FiYXRcIixcbiAgICBidWxsZXRQb2ludHM6IFtcbiAgICAgIFwiRm9jdXNlZCBvbiBkZXNpZ24gYWN0aXZpdGllcyBmb3IgYSBjb25zdHJ1Y3Rpb24gY29tcGFueSwgaGFuZGxpbmcgdGhlIGNvbXBsZXRlIGRlc2lnbiBwcm9jZXNzLlwiLFxuICAgICAgXCJEZXZlbG9wZWQgYW4gb25saW5lIHN0b3JlLCB3aGljaCBjYW4gYmUgZm91bmQgYXQgYW5nYXIudG0sIG92ZXJzZWVpbmcgYWxsIGFzcGVjdHMgb2YgaXRzIGNyZWF0aW9uLlwiLFxuICAgICAgXCJVdGlsaXplZCBOZXh0LmpzLCBSZWFjdCwgUmVhY3QgUXVlcnksIEpvdGFpLCBTYXNzLCBhbmQgVHlwZVNjcmlwdCBmb3IgYm90aCBwcm9qZWN0cy5cIixcbiAgICBdLFxuICAgIGZvckVkdWNhdGlvbjogZmFsc2UsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGNvbXBhbnlfbmFtZTogXCJHb3psZVwiLFxuICAgIHN1bW1hcnk6XG4gICAgICBcIkRldmVsb3BlZCBSZWFjdCBjb21wb25lbnRzIGFuZCBidWlsdCBhIG5ld3Mgd2Vic2l0ZSBmcm9tIHNjcmF0Y2ggdXNpbmcgUmVhY3QsIFJlZHV4IFRvb2xraXQsIGFuZCBBeGlvcy5cIixcbiAgICBzZXF1ZW5jZTogMCxcbiAgICBzdGFydERhdGU6IFwiMjAyMy0wNS0wMVQwMDowMDowMC4wMDBaXCIsXG4gICAgZW5kRGF0ZTogXCIyMDIzLTA5LTMwVDAwOjAwOjAwLjAwMFpcIixcbiAgICBqb2JUaXRsZTogXCJGcm9udCBFbmQgRGV2ZWxvcGVyXCIsXG4gICAgam9iTG9jYXRpb246IFwiQXNoZ2FiYXRcIixcbiAgICBidWxsZXRQb2ludHM6IFtcbiAgICAgIFwiRGV2ZWxvcGVkIFJlYWN0IGNvbXBvbmVudHMgYXMgcGFydCBvZiBhIGNvbGxhYm9yYXRpdmUgdGVhbSBlZmZvcnQuXCIsXG4gICAgICBcIkJ1aWx0IGEgbmV3cyB3ZWJzaXRlIGZyb20gc2NyYXRjaCwgYXZhaWxhYmxlIGF0IGdvemxlLm9yZywgdXNpbmcgUmVhY3QsIFJlZHV4IFRvb2xraXQsIGFuZCBBeGlvcy5cIixcbiAgICBdLFxuICAgIGZvckVkdWNhdGlvbjogZmFsc2UsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiY29tcGFueV9uYW1lIiwic3VtbWFyeSIsInNlcXVlbmNlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImpvYlRpdGxlIiwiam9iTG9jYXRpb24iLCJidWxsZXRQb2ludHMiLCJmb3JFZHVjYXRpb24iLCJlbmFibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/data.ts\n"));

/***/ })

});