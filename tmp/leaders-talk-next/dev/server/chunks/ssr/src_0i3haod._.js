module.exports = [
"[project]/src/components/canvas/ClientScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
// Prevent WebGL from running on the server
const ThreeScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/canvas/ThreeScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function ClientScene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeScene, {}, void 0, false, {
        fileName: "[project]/src/components/canvas/ClientScene.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/HeroOverlay.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "center": "HeroOverlay-module__c7WY7W__center",
  "hero": "HeroOverlay-module__c7WY7W__hero",
  "line": "HeroOverlay-module__c7WY7W__line",
  "logoIcon": "HeroOverlay-module__c7WY7W__logoIcon",
  "logoMark": "HeroOverlay-module__c7WY7W__logoMark",
  "logoText": "HeroOverlay-module__c7WY7W__logoText",
  "scrollDot": "HeroOverlay-module__c7WY7W__scrollDot",
  "scrollDown": "HeroOverlay-module__c7WY7W__scrollDown",
  "scrollHint": "HeroOverlay-module__c7WY7W__scrollHint",
  "scrollLabel": "HeroOverlay-module__c7WY7W__scrollLabel",
  "scrollTrack": "HeroOverlay-module__c7WY7W__scrollTrack",
  "tagline": "HeroOverlay-module__c7WY7W__tagline",
  "title": "HeroOverlay-module__c7WY7W__title",
});
}),
"[project]/src/components/ui/HeroOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/HeroOverlay.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function HeroOverlay() {
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const taglineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            delay: 0.3
        });
        // Logo mark fades in first
        tl.fromTo(logoRef.current, {
            opacity: 0,
            y: -12
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        })// Title chars animate in
        .fromTo(titleRef.current, {
            opacity: 0,
            y: 30,
            letterSpacing: "0.3em"
        }, {
            opacity: 1,
            y: 0,
            letterSpacing: "0.12em",
            duration: 1.1,
            ease: "power3.out"
        }, "-=0.3").fromTo(lineRef.current, {
            scaleX: 0
        }, {
            scaleX: 1,
            duration: 0.7,
            ease: "power2.inOut"
        }, "-=0.5").fromTo(taglineRef.current, {
            opacity: 0,
            y: 14
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out"
        }, "-=0.3").fromTo(scrollRef.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.6
        }, "-=0.1");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: logoRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoMark,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIcon,
                        children: "◈"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoText,
                        children: "Leaders Talk"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].center,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: titleRef,
                        "data-hero-title": "",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "LEADERS TALK"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: lineRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: taglineRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagline,
                        children: "Where visionary leaders shape tomorrow's conversations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollHint,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollTrack,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollDot
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollLabel,
                        children: "SCROLL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Section2Overlay.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Section2Overlay-module__PTd-xq__body",
  "heading": "Section2Overlay-module__PTd-xq__heading",
  "wrapper": "Section2Overlay-module__PTd-xq__wrapper",
});
}),
"[project]/src/components/ui/Section2Overlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section2Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section2Overlay.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Section2Overlay() {
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: "#section-2",
                start: "top 65%",
                end: "top 15%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(headingRef.current, {
            opacity: 0,
            y: 30,
            filter: "blur(10px)"
        }, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out"
        }).fromTo(bodyRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out"
        }, "-=0.4");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: headingRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                children: "Mục đích"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                ref: bodyRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                children: "Leaders Talk tập hợp những nhà lãnh đạo tầm nhìn nhất thế giới trong một hệ sinh thái ý tưởng sống động — nơi mỗi ý tưởng được rèn giũa từ tiềm năng và hội tụ thành hiện thực."
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Section2Overlay.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Section3Overlay.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Section3Overlay-module__0QZ0IG__card",
  "cardAccent": "Section3Overlay-module__0QZ0IG__cardAccent",
  "cardBody": "Section3Overlay-module__0QZ0IG__cardBody",
  "cardIcon": "Section3Overlay-module__0QZ0IG__cardIcon",
  "cardTitle": "Section3Overlay-module__0QZ0IG__cardTitle",
  "cards": "Section3Overlay-module__0QZ0IG__cards",
  "heading": "Section3Overlay-module__0QZ0IG__heading",
  "headingAccent": "Section3Overlay-module__0QZ0IG__headingAccent",
  "label": "Section3Overlay-module__0QZ0IG__label",
  "wrapper": "Section3Overlay-module__0QZ0IG__wrapper",
});
}),
"[project]/src/components/ui/Section3Overlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section3Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section3Overlay.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const CORE_VALUES = [
    {
        id: "cv-1",
        icon: "◎",
        color: "var(--c1)",
        title: "Góc nhìn thực chiến",
        body: "Không phải lý thuyết. Bạn được nghe cách người thật đang xử lý vấn đề thật – thứ bạn có thể đem về áp dụng ngay ngày mai."
    },
    {
        id: "cv-2",
        icon: "✦",
        color: "var(--c2)",
        title: "Đào sâu pain point",
        body: "Những vấn đề \"đau nhưng ít ai nói\" sẽ được mang lên bàn: đội ngũ, KPI, vận hành, áp lực... và mổ xẻ đến tận gốc."
    },
    {
        id: "cv-3",
        icon: "◈",
        color: "var(--c3)",
        title: "Tranh luận trực diện",
        body: "Không chỉ nghe – bạn được hỏi thẳng, phản biện, challenge diễn giả để tìm ra góc nhìn phù hợp nhất với mình."
    },
    {
        id: "cv-4",
        icon: "⬡",
        color: "var(--c4)",
        title: "Giải pháp thực tế",
        body: "Rời buổi không chỉ có insight, mà có luôn cách làm cụ thể để xử lý bài toán bạn đang mắc kẹt."
    }
];
function Section3Overlay() {
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cards = cardsRef.current?.querySelectorAll("[data-card]");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: "#section-3",
                start: "top 60%",
                end: "top 10%",
                toggleActions: "play none none reverse"
            }
        }).fromTo(headingRef.current, {
            opacity: 0,
            y: 24,
            filter: "blur(6px)"
        }, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out"
        }).fromTo(cards ?? [], {
            opacity: 0,
            y: 28
        }, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.10
        }, "-=0.4");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: headingRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                id: "core-values-heading",
                children: [
                    "Bốn giá trị",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headingAccent,
                        children: "cốt lõi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cardsRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cards,
                id: "core-values-cards",
                children: CORE_VALUES.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-card": "",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            "--card-color": v.color
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardAccent
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                children: v.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: v.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBody,
                                children: v.body
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, v.id, true, {
                        fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Section3Overlay.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/particleStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "particleStore",
    ()=>particleStore
]);
const particleStore = {
    introProgress: 0,
    scrollProgress: 0,
    assemblyProgress: 0,
    splitProgress: 0
};
}),
"[project]/src/components/ui/ScrollController.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/particleStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ScrollController() {
    const heroTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        heroTitleRef.current = document.querySelector("[data-hero-title]");
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: "#scroll-root",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.0,
                // ── Snap to section anchor points ─────────────────────────────────
                // Snap at: Hero(0), Mục đích(200/300=0.667), Core values(300/300=1.0)
                snap: {
                    snapTo: [
                        0,
                        0.667,
                        1.0
                    ],
                    duration: {
                        min: 0.35,
                        max: 0.75
                    },
                    delay: 0.08,
                    ease: "power2.inOut",
                    inertia: false
                },
                onUpdate: (self)=>{
                    const p = self.progress;
                    // ── Hero title fade ──────────────────────────────────────────────
                    if (heroTitleRef.current) {
                        heroTitleRef.current.style.opacity = String(Math.max(0, 1 - p / 0.09));
                    }
                    // ── Intro ────────────────────────────────────────────────────────
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].introProgress = Math.min(1, Math.max(0, p / 0.12));
                    // ── Phases ───────────────────────────────────────────────────────
                    const DIS_S = 0.08, DIS_E = 0.48;
                    const ASM_S = 0.60, ASM_E = 0.78;
                    const SPL_S = 0.80, SPL_E = 1.00;
                    if (p < DIS_S) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 0;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                    } else if (p <= DIS_E) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = (p - DIS_S) / (DIS_E - DIS_S);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                    } else if (p < ASM_S) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                    } else if (p <= ASM_E) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = (p - ASM_S) / (ASM_E - ASM_S);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                    } else if (p < SPL_S) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = (p - SPL_S) / (SPL_E - SPL_S);
                    }
                }
            });
        });
        return ()=>ctx.revert();
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=src_0i3haod._.js.map