(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/canvas/ClientScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
// Prevent WebGL from running on the server
const ThreeScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/canvas/ThreeScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/canvas/ThreeScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ThreeScene;
function ClientScene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeScene, {}, void 0, false, {
        fileName: "[project]/src/components/canvas/ClientScene.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c1 = ClientScene;
var _c, _c1;
__turbopack_context__.k.register(_c, "ThreeScene");
__turbopack_context__.k.register(_c1, "ClientScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/HeroOverlay.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/ui/HeroOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/HeroOverlay.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroOverlay() {
    _s();
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const taglineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroOverlay.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
        }
    }["HeroOverlay.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: logoRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoMark,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIcon,
                        children: "◈"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoText,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].center,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: titleRef,
                        "data-hero-title": "",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "LEADERS TALK"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: lineRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: taglineRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagline,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollHint,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollTrack,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollDot
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollLabel,
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
_s(HeroOverlay, "HgD/aqo0hLvg+kA+mtC18YVq6QM=");
_c = HeroOverlay;
var _c;
__turbopack_context__.k.register(_c, "HeroOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Section2Overlay.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "Section2Overlay-module__PTd-xq__body",
  "bottomDot": "Section2Overlay-module__PTd-xq__bottomDot",
  "breathe": "Section2Overlay-module__PTd-xq__breathe",
  "content": "Section2Overlay-module__PTd-xq__content",
  "cta": "Section2Overlay-module__PTd-xq__cta",
  "dotInner": "Section2Overlay-module__PTd-xq__dotInner",
  "dotRing": "Section2Overlay-module__PTd-xq__dotRing",
  "heading": "Section2Overlay-module__PTd-xq__heading",
  "innerPulse": "Section2Overlay-module__PTd-xq__innerPulse",
  "wrapper": "Section2Overlay-module__PTd-xq__wrapper",
});
}),
"[project]/src/components/ui/Section2Overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section2Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section2Overlay.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Section2Overlay() {
    _s();
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Section2Overlay.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: "#section-2",
                    start: "top 60%",
                    end: "top 20%",
                    toggleActions: "play none none reverse"
                }
            });
            tl.fromTo(headingRef.current, {
                opacity: 0,
                y: 40,
                filter: "blur(8px)"
            }, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.0,
                ease: "power3.out"
            }).fromTo(bodyRef.current, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5").fromTo(ctaRef.current, {
                opacity: 0,
                y: 12
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4").fromTo(dotRef.current, {
                opacity: 0,
                scaleY: 0
            }, {
                opacity: 1,
                scaleY: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.2");
        }
    }["Section2Overlay.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: headingRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                    children: "Mục đích"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    ref: bodyRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                    children: "Leaders Talk tập hợp những nhà lãnh đạo tầm nhìn nhất thế giới trong một hệ sinh thái ý tưởng sống động — nơi mỗi ý tưởng được rèn giũa từ tiềm năng và hội tụ thành hiện thực."
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    ref: ctaRef,
                    href: "#",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cta,
                    id: "explore-cta",
                    children: [
                        "Khám phá mạng lưới",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 14 14",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2.5 7h9M8 3.5L11.5 7 8 10.5",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: dotRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomDot,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotRing,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotInner
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Section2Overlay.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section2Overlay.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Section2Overlay, "X+elvsTMtpxImpWjO7NV9UGScmQ=");
_c = Section2Overlay;
var _c;
__turbopack_context__.k.register(_c, "Section2Overlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/particleStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared mutable bridge: GSAP (DOM) writes here → R3F (WebGL) reads in useFrame
__turbopack_context__.s([
    "particleStore",
    ()=>particleStore
]);
const particleStore = {
    introProgress: 0,
    scrollProgress: 0,
    assemblyProgress: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ScrollController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/particleStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ScrollController() {
    _s();
    const heroTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollController.useEffect": ()=>{
            // Grab the h1 to animate its opacity via scroll
            heroTitleRef.current = document.querySelector("[data-hero-title]");
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ScrollController.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: "#scroll-root",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1.6,
                        onUpdate: {
                            "ScrollController.useEffect.ctx": (self)=>{
                                const p = self.progress;
                                // ── Intro: particles fade in (scroll 0 → 12%) ─────────────────────
                                const INTRO_S = 0.00, INTRO_E = 0.14;
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].introProgress = Math.min(1, Math.max(0, (p - INTRO_S) / (INTRO_E - INTRO_S)));
                                // ── HTML title: fades out as particles appear ──────────────────────
                                if (heroTitleRef.current) {
                                    const fade = Math.max(0, 1 - p / 0.10); // full opacity → 0 by 10%
                                    heroTitleRef.current.style.opacity = String(fade);
                                }
                                // ── Disintegration: text → noise flow (scroll 8% → 55%) ───────────
                                const DIS_S = 0.08, DIS_E = 0.55;
                                const ASM_S = 0.65, ASM_E = 1.00;
                                if (p < DIS_S) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 0;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                                } else if (p <= DIS_E) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = (p - DIS_S) / (DIS_E - DIS_S);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                                } else if (p < ASM_S) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                                } else {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = (p - ASM_S) / (ASM_E - ASM_S);
                                }
                            }
                        }["ScrollController.useEffect.ctx"]
                    });
                }
            }["ScrollController.useEffect.ctx"]);
            return ({
                "ScrollController.useEffect": ()=>ctx.revert()
            })["ScrollController.useEffect"];
        }
    }["ScrollController.useEffect"], []);
    return null;
}
_s(ScrollController, "HxeIOX2UqinFrZHmk7cc3UUxkCQ=");
_c = ScrollController;
var _c;
__turbopack_context__.k.register(_c, "ScrollController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0p97~ka._.js.map