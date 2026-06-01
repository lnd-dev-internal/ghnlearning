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
  "ctaGroup": "HeroOverlay-module__c7WY7W__ctaGroup",
  "ctaPrimary": "HeroOverlay-module__c7WY7W__ctaPrimary",
  "ctaSecondary": "HeroOverlay-module__c7WY7W__ctaSecondary",
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
    const ctaGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroOverlay.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                delay: 0.3
            });
            tl.fromTo(logoRef.current, {
                opacity: 0,
                y: -12
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }).fromTo(titleRef.current, {
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
            }, "-=0.3").fromTo(ctaGroupRef.current, {
                opacity: 0,
                y: 18
            }, {
                opacity: 1,
                y: 0,
                duration: 0.65,
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
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoText,
                        children: "Leaders Talk"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 52,
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
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: lineRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: taglineRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagline,
                        children: "Where visionary leaders shape tomorrow's conversations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ctaGroupRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#section-5",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaPrimary,
                                id: "hero-cta-register",
                                children: [
                                    "Đăng ký ngay",
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
                                            fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#section-4",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaSecondary,
                                id: "hero-cta-issues",
                                children: "Những số khác"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 58,
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
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollLabel,
                        children: "Cuộn tiếp để khám phá"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(HeroOverlay, "Jv51qf1AizsA7eAoWuLFOI2vIiM=");
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
  "heading": "Section2Overlay-module__PTd-xq__heading",
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Section2Overlay.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
        }
    }["Section2Overlay.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: headingRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                children: "Mục đích"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section2Overlay.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                ref: bodyRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section2Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
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
_s(Section2Overlay, "mm8p1srikCxZ17JkI9eV8CBR44A=");
_c = Section2Overlay;
var _c;
__turbopack_context__.k.register(_c, "Section2Overlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Section3Overlay.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/ui/Section3Overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section3Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section3Overlay.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
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
    _s();
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Section3Overlay.useEffect": ()=>{
            const cards = cardsRef.current?.querySelectorAll("[data-card]");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
        }
    }["Section3Overlay.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: headingRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                id: "core-values-heading",
                children: [
                    "Bốn giá trị",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingAccent,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cardsRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cards,
                id: "core-values-cards",
                children: CORE_VALUES.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-card": "",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            "--card-color": v.color
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardAccent
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardIcon,
                                children: v.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: v.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section3Overlay.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section3Overlay$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
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
_s(Section3Overlay, "y3v8oEnfYem5Iy4kDgBzz3b3mJQ=");
_c = Section3Overlay;
var _c;
__turbopack_context__.k.register(_c, "Section3Overlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Section4Gallery.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "filmCard": "Section4Gallery-module__aV-ClG__filmCard",
  "filmCardInner": "Section4Gallery-module__aV-ClG__filmCardInner",
  "filmCardLabel": "Section4Gallery-module__aV-ClG__filmCardLabel",
  "filmInner": "Section4Gallery-module__aV-ClG__filmInner",
  "filmOuter": "Section4Gallery-module__aV-ClG__filmOuter",
  "filmRow": "Section4Gallery-module__aV-ClG__filmRow",
  "headerRow": "Section4Gallery-module__aV-ClG__headerRow",
  "heading": "Section4Gallery-module__aV-ClG__heading",
  "headingAccent": "Section4Gallery-module__aV-ClG__headingAccent",
  "innerGlow": "Section4Gallery-module__aV-ClG__innerGlow",
  "rowLeft": "Section4Gallery-module__aV-ClG__rowLeft",
  "rowLeftSlow": "Section4Gallery-module__aV-ClG__rowLeftSlow",
  "rowRight": "Section4Gallery-module__aV-ClG__rowRight",
  "scrollLeft": "Section4Gallery-module__aV-ClG__scrollLeft",
  "scrollRight": "Section4Gallery-module__aV-ClG__scrollRight",
  "subtext": "Section4Gallery-module__aV-ClG__subtext",
  "tone1": "Section4Gallery-module__aV-ClG__tone1",
  "tone2": "Section4Gallery-module__aV-ClG__tone2",
  "tone3": "Section4Gallery-module__aV-ClG__tone3",
  "wrapper": "Section4Gallery-module__aV-ClG__wrapper",
});
}),
"[project]/src/components/ui/Section4Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section4Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section4Gallery.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// 8 cards per row, duplicated for seamless infinite scroll
const FILM_CARDS_ROW_A = [
    {
        id: "a1",
        label: "Leaders Talk",
        tone: 1
    },
    {
        id: "a2",
        label: "Khoảnh khắc",
        tone: 2
    },
    {
        id: "a3",
        label: "Diễn giả",
        tone: 3
    },
    {
        id: "a4",
        label: "Hội trường",
        tone: 1
    },
    {
        id: "a5",
        label: "Workshop",
        tone: 2
    },
    {
        id: "a6",
        label: "Networking",
        tone: 3
    },
    {
        id: "a7",
        label: "Chia sẻ",
        tone: 1
    },
    {
        id: "a8",
        label: "Kết nối",
        tone: 2
    }
];
const FILM_CARDS_ROW_B = [
    {
        id: "b1",
        label: "Insight",
        tone: 2
    },
    {
        id: "b2",
        label: "Tư duy",
        tone: 3
    },
    {
        id: "b3",
        label: "Lãnh đạo",
        tone: 1
    },
    {
        id: "b4",
        label: "Thực chiến",
        tone: 2
    },
    {
        id: "b5",
        label: "Ý tưởng",
        tone: 3
    },
    {
        id: "b6",
        label: "Pain point",
        tone: 1
    },
    {
        id: "b7",
        label: "Khoảnh khắc",
        tone: 2
    },
    {
        id: "b8",
        label: "Tầm nhìn",
        tone: 3
    }
];
function FilmCard({ tone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`tone${tone}`]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmCardInner
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Section4Gallery.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = FilmCard;
function Section4Gallery() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stripRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Section4Gallery.useEffect": ()=>{
            // Reveal heading row (heading + subtext together)
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(headerRef.current, {
                opacity: 0,
                y: 30,
                filter: "blur(8px)"
            }, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#section-4",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });
            // Parallax lift of the whole film strip on scroll
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(stripRef.current, {
                y: -60,
                ease: "none",
                scrollTrigger: {
                    trigger: "#section-4",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2
                }
            });
        }
    }["Section4Gallery.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                        id: "gallery-heading",
                        children: [
                            "Khoảnh khắc ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingAccent,
                                children: "đáng nhớ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                lineNumber: 78,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtext,
                        children: [
                            "Những buổi chia sẻ, workshop và kết nối",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                lineNumber: 81,
                                columnNumber: 50
                            }, this),
                            "giữa những nhà lãnh đạo hàng đầu."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stripRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmOuter,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmRow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowLeft}`,
                            children: [
                                ...FILM_CARDS_ROW_A,
                                ...FILM_CARDS_ROW_A
                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmCard, {
                                    ...c
                                }, `r1-${i}`, false, {
                                    fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmRow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowRight}`,
                            children: [
                                ...FILM_CARDS_ROW_B,
                                ...FILM_CARDS_ROW_B
                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmCard, {
                                    ...c
                                }, `r2-${i}`, false, {
                                    fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filmRow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowLeftSlow}`,
                            children: [
                                ...FILM_CARDS_ROW_A,
                                ...FILM_CARDS_ROW_A
                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmCard, {
                                    ...c
                                }, `r3-${i}`, false, {
                                    fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(Section4Gallery, "hY1dS2g3SC7DEWWPo6VpDgCw33Q=");
_c1 = Section4Gallery;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilmCard");
__turbopack_context__.k.register(_c1, "Section4Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/particleStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
            heroTitleRef.current = document.querySelector("[data-hero-title]");
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ScrollController.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: "#scroll-root",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1.0,
                        // ── Snap to section anchor points ─────────────────────────────────
                        // Hero(0) | Mục đích(0.5) | Core values(0.75) | Gallery(1.0)
                        snap: {
                            snapTo: [
                                0,
                                0.5,
                                0.75,
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
                        onUpdate: {
                            "ScrollController.useEffect.ctx": (self)=>{
                                const p = self.progress;
                                // ── Hero title fade ──────────────────────────────────────────────
                                if (heroTitleRef.current) {
                                    heroTitleRef.current.style.opacity = String(Math.max(0, 1 - p / 0.09));
                                }
                                // ── Intro ────────────────────────────────────────────────────────
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].introProgress = Math.min(1, Math.max(0, p / 0.10));
                                // ── Phases (tuned for max-scroll=400vh, progress 0→1) ─────────
                                const DIS_S = 0.08, DIS_E = 0.42;
                                const ASM_S = 0.42, ASM_E = 0.50;
                                const SPL_S = 0.62, SPL_E = 0.75;
                                if (p < DIS_S) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 0;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                                } else if (p <= DIS_E) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = (p - DIS_S) / (DIS_E - DIS_S);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                                } else if (p < ASM_S) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 0;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                                } else if (p <= ASM_E) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = (p - ASM_S) / (ASM_E - ASM_S);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                                } else if (p < SPL_S) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 0;
                                } else if (p <= SPL_E) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = (p - SPL_S) / (SPL_E - SPL_S);
                                } else {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 1;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 1;
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

//# sourceMappingURL=src_10734cx._.js.map