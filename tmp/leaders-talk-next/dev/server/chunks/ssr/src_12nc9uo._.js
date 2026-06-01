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
  "bottomZone": "HeroOverlay-module__c7WY7W__bottomZone",
  "center": "HeroOverlay-module__c7WY7W__center",
  "ctaGroup": "HeroOverlay-module__c7WY7W__ctaGroup",
  "ctaPrimary": "HeroOverlay-module__c7WY7W__ctaPrimary",
  "ctaSecondary": "HeroOverlay-module__c7WY7W__ctaSecondary",
  "hero": "HeroOverlay-module__c7WY7W__hero",
  "line": "HeroOverlay-module__c7WY7W__line",
  "logoImg": "HeroOverlay-module__c7WY7W__logoImg",
  "logoMark": "HeroOverlay-module__c7WY7W__logoMark",
  "scrollDot": "HeroOverlay-module__c7WY7W__scrollDot",
  "scrollDown": "HeroOverlay-module__c7WY7W__scrollDown",
  "scrollHint": "HeroOverlay-module__c7WY7W__scrollHint",
  "scrollLabel": "HeroOverlay-module__c7WY7W__scrollLabel",
  "scrollTrack": "HeroOverlay-module__c7WY7W__scrollTrack",
  "tagline": "HeroOverlay-module__c7WY7W__tagline",
  "talkBg": "HeroOverlay-module__c7WY7W__talkBg",
  "talkBgSlide": "HeroOverlay-module__c7WY7W__talkBgSlide",
  "talkColorFlip": "HeroOverlay-module__c7WY7W__talkColorFlip",
  "talkText": "HeroOverlay-module__c7WY7W__talkText",
  "title": "HeroOverlay-module__c7WY7W__title",
  "titleFadeIn": "HeroOverlay-module__c7WY7W__titleFadeIn",
  "titleLeaders": "HeroOverlay-module__c7WY7W__titleLeaders",
  "titleTalk": "HeroOverlay-module__c7WY7W__titleTalk",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/HeroOverlay.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
function HeroOverlay() {
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const taglineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // wraps CTAs + scroll hint
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
        }).fromTo(lineRef.current, {
            scaleX: 0
        }, {
            scaleX: 1,
            duration: 0.7,
            ease: "power2.inOut"
        }).fromTo(taglineRef.current, {
            opacity: 0,
            y: 14
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out"
        }, "-=0.3")// Animate entire bottom zone (CTAs + scroll hint) as one unit
        .fromTo(bottomRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out"
        }, "-=0.2");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: logoRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoMark,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/5 logos.png",
                    alt: "Leaders Talk",
                    width: 700,
                    height: 140,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoImg,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].center,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: titleRef,
                        "data-hero-title": "",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleLeaders,
                                children: "LEADERS "
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleTalk,
                                "aria-label": "TALK",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].talkBg,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].talkText,
                                        children: "TALK"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: lineRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: taglineRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagline,
                        children: "Where visionary leaders shape tomorrow's conversations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bottomRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomZone,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#section-5",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaPrimary,
                                id: "hero-cta-register",
                                children: [
                                    "Đăng ký ngay",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 14 14",
                                        fill: "none",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M2.5 7h9M8 3.5L11.5 7 8 10.5",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#section-4",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaSecondary,
                                id: "hero-cta-issues",
                                children: "Những số khác"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollHint,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollTrack,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollDot
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroOverlay$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollLabel,
                                children: "Cuộn tiếp để khám phá"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/HeroOverlay.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/HeroOverlay.tsx",
        lineNumber: 40,
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
"[project]/src/components/ui/StatsSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "StatsSection-module__FmhKJG__card",
  "cardGlow": "StatsSection-module__FmhKJG__cardGlow",
  "cardIcon": "StatsSection-module__FmhKJG__cardIcon",
  "cardLabel": "StatsSection-module__FmhKJG__cardLabel",
  "cardSub": "StatsSection-module__FmhKJG__cardSub",
  "cardTopLine": "StatsSection-module__FmhKJG__cardTopLine",
  "counter": "StatsSection-module__FmhKJG__counter",
  "counterSuffix": "StatsSection-module__FmhKJG__counterSuffix",
  "counterValue": "StatsSection-module__FmhKJG__counterValue",
  "glow1": "StatsSection-module__FmhKJG__glow1",
  "glow2": "StatsSection-module__FmhKJG__glow2",
  "grid": "StatsSection-module__FmhKJG__grid",
  "heading": "StatsSection-module__FmhKJG__heading",
  "tag": "StatsSection-module__FmhKJG__tag",
  "title": "StatsSection-module__FmhKJG__title",
  "titleAccent": "StatsSection-module__FmhKJG__titleAccent",
  "wrapper": "StatsSection-module__FmhKJG__wrapper",
});
}),
"[project]/src/components/ui/StatsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/StatsSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const STATS = [
    {
        id: "stat-speakers",
        value: 20,
        suffix: "+",
        label: "Diễn giả hàng đầu",
        icon: "◎",
        colorVar: "#FF5200"
    },
    {
        id: "stat-students",
        value: 500,
        suffix: "+",
        label: "Học viên / buổi",
        icon: "✦",
        colorVar: "#CC4200"
    }
];
function StatsSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const countersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const triggerEl = document.getElementById("section-stats") ?? sectionRef.current;
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            // ── Heading reveal ───────────────────────────────────────────────────
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(headingRef.current, {
                opacity: 0,
                y: 28,
                filter: "blur(8px)"
            }, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: triggerEl,
                    start: "top 80%",
                    once: true
                }
            });
            // ── Cards stagger reveal ──────────────────────────────────────────
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo("[data-stat-card]", {
                opacity: 0,
                y: 44,
                scale: 0.94
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.85,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: triggerEl,
                    start: "top 80%",
                    once: true
                }
            });
            // ── Animated counters (chạy số từ 0 đến đích) ──────────────────────
            STATS.forEach((stat, i)=>{
                const el = countersRef.current[i];
                if (!el) return;
                const obj = {
                    val: 0
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(obj, {
                    val: stat.value,
                    duration: 2.4,
                    ease: "power2.out",
                    delay: i * 0.2 + 0.3,
                    scrollTrigger: {
                        trigger: triggerEl,
                        start: "top 80%",
                        once: true
                    },
                    onUpdate () {
                        el.textContent = Math.round(obj.val).toString();
                    }
                });
            });
        }, sectionRef);
        return ()=>ctx.revert();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glow1,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/StatsSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glow2,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/StatsSection.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headingRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                id: "stats-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                    children: "Những con số biết nói"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/StatsSection.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/StatsSection.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                id: "stats-grid",
                children: STATS.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: stat.id,
                        "data-stat-card": "",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        style: {
                            "--card-color": stat.colorVar,
                            "--card-color-dim": stat.colorVar + "22"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardGlow,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/StatsSection.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTopLine
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/StatsSection.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardIcon,
                                children: stat.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/StatsSection.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].counter,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].counterValue,
                                        ref: (el)=>{
                                            countersRef.current[i] = el;
                                        },
                                        children: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/StatsSection.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].counterSuffix,
                                        children: stat.suffix
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/StatsSection.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/StatsSection.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StatsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLabel,
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/StatsSection.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.id, true, {
                        fileName: "[project]/src/components/ui/StatsSection.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/StatsSection.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/StatsSection.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Section4Gallery.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "danhNhoBgSlide": "Section4Gallery-module__aV-ClG__danhNhoBgSlide",
  "danhNhoColorFlip": "Section4Gallery-module__aV-ClG__danhNhoColorFlip",
  "filmCard": "Section4Gallery-module__aV-ClG__filmCard",
  "filmCardLabel": "Section4Gallery-module__aV-ClG__filmCardLabel",
  "filmCardOverlay": "Section4Gallery-module__aV-ClG__filmCardOverlay",
  "filmCardPhoto": "Section4Gallery-module__aV-ClG__filmCardPhoto",
  "filmInner": "Section4Gallery-module__aV-ClG__filmInner",
  "filmOuter": "Section4Gallery-module__aV-ClG__filmOuter",
  "filmRow": "Section4Gallery-module__aV-ClG__filmRow",
  "headerBlock": "Section4Gallery-module__aV-ClG__headerBlock",
  "heading": "Section4Gallery-module__aV-ClG__heading",
  "headingGray": "Section4Gallery-module__aV-ClG__headingGray",
  "headingHighlight": "Section4Gallery-module__aV-ClG__headingHighlight",
  "highlightBg": "Section4Gallery-module__aV-ClG__highlightBg",
  "highlightText": "Section4Gallery-module__aV-ClG__highlightText",
  "rowLeft": "Section4Gallery-module__aV-ClG__rowLeft",
  "rowLeftSlow": "Section4Gallery-module__aV-ClG__rowLeftSlow",
  "rowRight": "Section4Gallery-module__aV-ClG__rowRight",
  "scrollLeft": "Section4Gallery-module__aV-ClG__scrollLeft",
  "scrollRight": "Section4Gallery-module__aV-ClG__scrollRight",
  "subtext": "Section4Gallery-module__aV-ClG__subtext",
  "wrapper": "Section4Gallery-module__aV-ClG__wrapper",
});
}),
"[project]/src/components/ui/Section4Gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section4Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section4Gallery.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// Distribute 15 real photos across 3 rows
// objectPos overrides the default 'center' crop per-image
const ROW_1 = [
    {
        id: "1",
        src: "/1.jpg",
        alt: "Leaders Talk — khoảnh khắc 1"
    },
    {
        id: "2",
        src: "/2.jpg",
        alt: "Leaders Talk — khoảnh khắc 2"
    },
    {
        id: "3",
        src: "/3.jpg",
        alt: "Leaders Talk — khoảnh khắc 3"
    },
    {
        id: "4",
        src: "/4.JPG",
        alt: "Leaders Talk — khoảnh khắc 4"
    },
    {
        id: "5",
        src: "/5.jpg",
        alt: "Leaders Talk — khoảnh khắc 5"
    }
];
const ROW_2 = [
    {
        id: "6",
        src: "/6.jpg",
        alt: "Leaders Talk — khoảnh khắc 6"
    },
    {
        id: "7",
        src: "/7.jpg",
        alt: "Leaders Talk — khoảnh khắc 7"
    },
    {
        id: "8",
        src: "/8.jpg",
        alt: "Leaders Talk — khoảnh khắc 8"
    },
    {
        id: "9",
        src: "/9.JPG",
        alt: "Leaders Talk — khoảnh khắc 9"
    },
    {
        id: "10",
        src: "/10.JPG",
        alt: "Leaders Talk — khoảnh khắc 10"
    }
];
const ROW_3 = [
    {
        id: "11",
        src: "/11.png",
        alt: "Leaders Talk — khoảnh khắc 11",
        objectPos: "center 75%"
    },
    {
        id: "12",
        src: "/12.JPG",
        alt: "Leaders Talk — khoảnh khắc 12"
    },
    {
        id: "13",
        src: "/13.JPG",
        alt: "Leaders Talk — khoảnh khắc 13"
    },
    {
        id: "14",
        src: "/14.JPG",
        alt: "Leaders Talk — khoảnh khắc 14"
    },
    {
        id: "15",
        src: "/15.JPG",
        alt: "Leaders Talk — khoảnh khắc 15"
    }
];
/* ── Photo card ──────────────────────────────────────────────────────────── */ function FilmCard({ src, alt, objectPos }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filmCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: alt,
                fill: true,
                sizes: "280px",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filmCardPhoto,
                style: objectPos ? {
                    objectPosition: objectPos
                } : undefined,
                quality: 80
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filmCardOverlay,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function Section4Gallery() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stripRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Reveal heading on scroll into view
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(headerRef.current, {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(stripRef.current, {
            y: -60,
            ease: "none",
            scrollTrigger: {
                trigger: "#section-4",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
            }
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerBlock,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                        id: "gallery-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headingGray,
                                children: "Khoảnh khắc "
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headingHighlight,
                                "aria-label": "đáng nhớ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlightBg,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlightText,
                                        children: "đáng nhớ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtext,
                        children: "Những buổi chia sẻ, workshop và kết nối giữa những nhà lãnh đạo hàng đầu"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stripRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filmOuter,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filmInner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filmRow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rowLeft}`,
                            children: [
                                ...ROW_1,
                                ...ROW_1
                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmCard, {
                                    src: c.src,
                                    alt: c.alt
                                }, `r1-${i}`, false, {
                                    fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filmRow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rowRight}`,
                            children: [
                                ...ROW_2,
                                ...ROW_2
                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmCard, {
                                    src: c.src,
                                    alt: c.alt
                                }, `r2-${i}`, false, {
                                    fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filmRow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section4Gallery$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rowLeftSlow}`,
                            children: [
                                ...ROW_3,
                                ...ROW_3
                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmCard, {
                                    src: c.src,
                                    alt: c.alt
                                }, `r3-${i}`, false, {
                                    fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section4Gallery.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Section4Gallery.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Section5Featured.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accentShimmer": "Section5Featured-module__8NKWfG__accentShimmer",
  "author": "Section5Featured-module__8NKWfG__author",
  "badge": "Section5Featured-module__8NKWfG__badge",
  "card": "Section5Featured-module__8NKWfG__card",
  "cardTopAccent": "Section5Featured-module__8NKWfG__cardTopAccent",
  "container": "Section5Featured-module__8NKWfG__container",
  "content": "Section5Featured-module__8NKWfG__content",
  "contentMeta": "Section5Featured-module__8NKWfG__contentMeta",
  "divider": "Section5Featured-module__8NKWfG__divider",
  "eventBadge": "Section5Featured-module__8NKWfG__eventBadge",
  "eventDate": "Section5Featured-module__8NKWfG__eventDate",
  "eventIcon": "Section5Featured-module__8NKWfG__eventIcon",
  "eventInfo": "Section5Featured-module__8NKWfG__eventInfo",
  "eventLabel": "Section5Featured-module__8NKWfG__eventLabel",
  "excerpt": "Section5Featured-module__8NKWfG__excerpt",
  "labelDot": "Section5Featured-module__8NKWfG__labelDot",
  "modalAuthor": "Section5Featured-module__8NKWfG__modalAuthor",
  "modalBadge": "Section5Featured-module__8NKWfG__modalBadge",
  "modalBody": "Section5Featured-module__8NKWfG__modalBody",
  "modalClose": "Section5Featured-module__8NKWfG__modalClose",
  "modalCover": "Section5Featured-module__8NKWfG__modalCover",
  "modalCoverBg": "Section5Featured-module__8NKWfG__modalCoverBg",
  "modalCoverImg": "Section5Featured-module__8NKWfG__modalCoverImg",
  "modalCoverIssue": "Section5Featured-module__8NKWfG__modalCoverIssue",
  "modalCoverOverlay": "Section5Featured-module__8NKWfG__modalCoverOverlay",
  "modalCoverSteps": "Section5Featured-module__8NKWfG__modalCoverSteps",
  "modalCoverText": "Section5Featured-module__8NKWfG__modalCoverText",
  "modalCoverTitle": "Section5Featured-module__8NKWfG__modalCoverTitle",
  "modalCta": "Section5Featured-module__8NKWfG__modalCta",
  "modalEventBox": "Section5Featured-module__8NKWfG__modalEventBox",
  "modalEventTitle": "Section5Featured-module__8NKWfG__modalEventTitle",
  "modalLead": "Section5Featured-module__8NKWfG__modalLead",
  "modalList": "Section5Featured-module__8NKWfG__modalList",
  "modalMeta": "Section5Featured-module__8NKWfG__modalMeta",
  "modalOverlay": "Section5Featured-module__8NKWfG__modalOverlay",
  "modalPanel": "Section5Featured-module__8NKWfG__modalPanel",
  "modalParagraph": "Section5Featured-module__8NKWfG__modalParagraph",
  "modalQuote": "Section5Featured-module__8NKWfG__modalQuote",
  "modalSection": "Section5Featured-module__8NKWfG__modalSection",
  "modalSectionHeading": "Section5Featured-module__8NKWfG__modalSectionHeading",
  "modalTitle": "Section5Featured-module__8NKWfG__modalTitle",
  "poster": "Section5Featured-module__8NKWfG__poster",
  "posterBg": "Section5Featured-module__8NKWfG__posterBg",
  "posterContent": "Section5Featured-module__8NKWfG__posterContent",
  "posterImg": "Section5Featured-module__8NKWfG__posterImg",
  "posterIssue": "Section5Featured-module__8NKWfG__posterIssue",
  "posterStep": "Section5Featured-module__8NKWfG__posterStep",
  "posterSteps": "Section5Featured-module__8NKWfG__posterSteps",
  "posterTitle": "Section5Featured-module__8NKWfG__posterTitle",
  "readMore": "Section5Featured-module__8NKWfG__readMore",
  "readTime": "Section5Featured-module__8NKWfG__readTime",
  "registerBtn": "Section5Featured-module__8NKWfG__registerBtn",
  "s5BgSlide": "Section5Featured-module__8NKWfG__s5BgSlide",
  "s5ColorFlip": "Section5Featured-module__8NKWfG__s5ColorFlip",
  "section": "Section5Featured-module__8NKWfG__section",
  "sectionHeading": "Section5Featured-module__8NKWfG__sectionHeading",
  "sectionHeadingBg": "Section5Featured-module__8NKWfG__sectionHeadingBg",
  "sectionHeadingGray": "Section5Featured-module__8NKWfG__sectionHeadingGray",
  "sectionHeadingHighlight": "Section5Featured-module__8NKWfG__sectionHeadingHighlight",
  "sectionHeadingText": "Section5Featured-module__8NKWfG__sectionHeadingText",
  "sectionLabel": "Section5Featured-module__8NKWfG__sectionLabel",
  "tag": "Section5Featured-module__8NKWfG__tag",
  "tags": "Section5Featured-module__8NKWfG__tags",
  "title": "Section5Featured-module__8NKWfG__title",
});
}),
"[project]/src/components/ui/Section5Featured.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section5Featured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollToPlugin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section5Featured.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollToPlugin"]);
/* ── Placeholder episode data ─────────────────────────────────────────── */ const EPISODE = {
    issue: "SỐ 106",
    badge: "LEADERS TALK",
    author: "Nguyễn Thị Huỳnh Như",
    title: 'Đằng sau làn sóng "Gõ Prompt Dạo": Khi AI không thể thay thế tư duy hệ thống của doanh nghiệp',
    excerpt: 'Hầu hết nhân sự hiện nay đang đối thoại với Trí tuệ nhân tạo (AI) theo phương thức "giao tiếp tối giản". Tuy nhiên, cách tiếp cận này đang vô tình biến các mô hình ngôn ngữ lớn trở nên "rời rạc"...',
    body: [
        'Hầu hết nhân sự hiện nay đang đối thoại với Trí tuệ nhân tạo (AI) theo phương thức "giao tiếp tối giản": yêu cầu viết một email, tóm tắt một văn bản hay dịch một đoạn hội thoại. Tuy nhiên, cách tiếp cận mang tính bản năng này đang vô tình biến các mô hình ngôn ngữ lớn trở nên "rời rạc", đồng thời đẩy người dùng vào vòng lặp chỉnh sửa thủ công tốn thời gian.',
        'Thực tế định hình một nghịch lý công nghệ: AI không thay thế tư duy của con người — nó chỉ khuếch đại những gì doanh nghiệp đã sở hữu. Sự kém hiệu quả trong vận hành không đến từ việc thiếu AI, mà đến từ việc thiếu một tư duy hệ thống đủ mạnh để điều phối AI.',
        'Workshop lần này đặt ra một câu hỏi trọng tâm: Làm thế nào để xây dựng một "hệ sinh thái AI" thực sự phục vụ doanh nghiệp — thay vì chỉ là tập hợp rời rạc của các công cụ tự động hóa?'
    ],
    sections: [
        {
            heading: 'Trải nghiệm thực chiến: Giải quyết "bài toán thật"',
            body: 'Điểm khác biệt của Workshop lần này nằm ở tính thực tiễn cao. Khán thính giả tham gia không chỉ dừng lại ở việc lắng nghe lý thuyết đơn thuần, mà trực tiếp mang theo các đầu việc lặp đi lặp lại hàng tuần của phòng ban mình lên lớp để phân tích và tối ưu.',
            bullets: [
                {
                    bold: "Thiết lập bản đồ hybrid (Người và Máy):",
                    text: " Vẽ sơ đồ quy trình, phân định rõ ràng các phân khúc tác vụ nào nên chuyển giao cho AI và những bước nào bắt buộc phải giữ lại yếu tố quản trị tối cao của con người."
                },
                {
                    bold: "Chuẩn hóa chuỗi tự động (Flow Automation):",
                    text: " Kết nối các kỹ năng đơn lẻ thành một chuỗi vận hành tự động liên tục, giúp giải phóng áp lực thời gian cho nhân sự."
                }
            ],
            quote: '"Học quy hoạch hệ thống prompt một lần — Thụ hưởng mãi mãi."'
        },
        {
            heading: "Công tác chuẩn bị trước giờ G",
            body: "Chương trình sẽ chính thức diễn ra vào cuối tuần này. Nhằm bảo đảm tính đồng bộ và chất lượng thực hành, Ban tổ chức khuyến nghị các thành viên tham gia hoàn thiện các bước chuẩn bị kỹ thuật trước khi tham gia.",
            bullets: [
                {
                    bold: "Tải và cài đặt ứng dụng chuyên dụng Antigravity",
                    text: " bằng email cá nhân."
                },
                {
                    bold: "Nghiên cứu kỹ lưỡng các tài liệu hướng dẫn",
                    text: " đã được gửi kèm đến hộp thư hàng tuần."
                },
                {
                    bold: "Chuẩn bị máy tính cá nhân",
                    text: " ở trạng thái sẵn sàng và sạc đầy năng lượng."
                }
            ]
        }
    ],
    event: {
        time: "10:00 – 12:00 | Ngày 29/05/2026 (Thứ Sáu)",
        location: "Trực tiếp tại Learning Center hoặc Trực tuyến qua Google Meet",
        speaker: "Đinh Hồ Nho Thông"
    },
    ctaLabel: "Đăng ký ngay",
    ctaUrl: "https://docs.google.com/forms/d/e/1FAIpQLScPjDVT0jC-C4M92A9WTxwXXRVphKEsqRdKlIGUII__rbeljA/viewform?usp=dialog"
};
/* ── Article Modal ────────────────────────────────────────────────────── */ function ArticleModal({ onClose }) {
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Mount animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(overlayRef.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.25,
            ease: "power2.out"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(panelRef.current, {
            y: 40,
            opacity: 0,
            scale: 0.97
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.40,
            ease: "power3.out"
        });
        // Lock body scroll
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, []);
    const handleClose = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(panelRef.current, {
            y: 20,
            opacity: 0,
            scale: 0.97,
            duration: 0.22,
            ease: "power2.in"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(overlayRef.current, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
            onComplete: onClose
        });
    };
    // Close on Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handler);
        return ()=>window.removeEventListener("keydown", handler);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
        onClick: handleClose,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Bài viết",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: panelRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalPanel,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalClose,
                    onClick: handleClose,
                    "aria-label": "Đóng",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCover,
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCoverBg,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Wst5.png",
                                alt: "Leaders Talk — Workshop cover",
                                fill: true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCoverImg,
                                quality: 85,
                                sizes: "640px"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCoverOverlay
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalBody,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalMeta,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalBadge,
                                    children: EPISODE.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalAuthor,
                                    children: EPISODE.author
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                            children: EPISODE.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        EPISODE.body.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalLead : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalParagraph,
                                children: p
                            }, i, false, {
                                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)),
                        EPISODE.sections.map((sec, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalSectionHeading,
                                        children: sec.heading
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalParagraph,
                                        children: sec.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    sec.bullets && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalList,
                                        children: sec.bullets.map((b, bi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: b.bold
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 34
                                                    }, this),
                                                    b.text
                                                ]
                                            }, bi, true, {
                                                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    sec.quote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalQuote,
                                        children: sec.quote
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, si, true, {
                                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalEventBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalEventTitle,
                                    children: "Thông tin chi tiết về sự kiện:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "🕙 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Thời gian:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        EPISODE.event.time
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "📍 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Địa điểm:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        EPISODE.event.location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "🎤 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Diễn giả:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        EPISODE.event.speaker
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: EPISODE.ctaUrl,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCta,
                            id: "modal-register-cta",
                            children: [
                                EPISODE.ctaLabel,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M2.5 7h9M8 3.5L11.5 7 8 10.5",
                                        stroke: "currentColor",
                                        strokeWidth: "1.8",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Section5Featured.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section5Featured.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
function Section5Featured() {
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Reveal card on scroll into view
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(cardRef.current, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });
        // Điểm neo (snap point): khi cuộn gần section-5 thì khóa vào nó
        let isSnapping = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: sectionRef.current,
            start: "top 55%",
            onEnter: ()=>{
                if (isSnapping) return;
                isSnapping = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(window, {
                    scrollTo: {
                        y: sectionRef.current,
                        offsetY: 0
                    },
                    duration: 0.55,
                    ease: "power3.inOut",
                    onComplete: ()=>{
                        isSnapping = false;
                    }
                });
            }
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                id: "section-5",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                "aria-label": "Sự kiện nổi bật",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            maxWidth: '1140px',
                            fontFamily: "'Anton', sans-serif",
                            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                            fontWeight: '400',
                            color: '#3d3d3d',
                            letterSpacing: '0.03em',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            visibility: 'visible',
                            opacity: 1,
                            position: 'relative',
                            zIndex: 5,
                            textAlign: 'center'
                        },
                        children: [
                            "Sự kiện",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: '#FF5200',
                                    color: '#ffffff',
                                    padding: '0.04em 0.22em',
                                    borderRadius: '5px',
                                    display: 'inline-block',
                                    verticalAlign: 'middle'
                                },
                                children: "nổi bật"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: cardRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                            id: "featured-episode-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTopAccent,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].poster,
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].posterBg,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/Wst5.png",
                                            alt: "Leaders Talk Workshop",
                                            fill: true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].posterImg,
                                            quality: 85,
                                            sizes: "50vw",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentMeta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                                    children: EPISODE.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readTime,
                                                    children: "⏱ 4 phút đọc"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                            children: EPISODE.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].excerpt,
                                            children: EPISODE.excerpt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventBadge,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventIcon,
                                                    children: "📅"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventLabel,
                                                            children: "Sự kiện diễn ra"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventDate,
                                                            children: EPISODE.event.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].author,
                                            children: [
                                                "— ",
                                                EPISODE.author
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '0.75rem',
                                                flexWrap: 'wrap',
                                                alignItems: 'center',
                                                marginTop: '0.5rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readMore,
                                                    onClick: ()=>setModalOpen(true),
                                                    id: "featured-read-more",
                                                    style: {
                                                        marginTop: 0,
                                                        alignSelf: 'center'
                                                    },
                                                    children: [
                                                        "Đọc bài viết",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 14 14",
                                                            fill: "none",
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M2.5 7h9M8 3.5L11.5 7 8 10.5",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://docs.google.com/forms/d/e/1FAIpQLScPjDVT0jC-C4M92A9WTxwXXRVphKEsqRdKlIGUII__rbeljA/viewform?usp=dialog",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    id: "featured-register-cta",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section5Featured$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].registerBtn,
                                                    style: {
                                                        alignSelf: 'center'
                                                    },
                                                    children: [
                                                        "Đăng ký ngay",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 14 14",
                                                            fill: "none",
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M2.5 7h9M8 3.5L11.5 7 8 10.5",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/Section5Featured.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Section5Featured.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Section5Featured.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleModal, {
                onClose: ()=>setModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Section5Featured.tsx",
                lineNumber: 318,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true);
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
    splitProgress: 0,
    hideProgress: 0
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
        // ── introProgress is driven by scroll, not page-load ───────────────────────────────
        // At p=0: particles invisible (introProgress=0), solid HTML title visible.
        // As user scrolls (p reaches 0.02→0.06): particles fade in simultaneously
        // with the HTML title fading out — shattering effect.
        // This approach is immune to snap-bounce artifacts.
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: "#scroll-root",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.0,
                // ── Snap to section anchor points ─────────────────────────────────
                // Hero(0) | Mục đích(0.40) | Core values(0.60) | Stats(0.80) | Gallery(1.0)
                snap: {
                    snapTo: [
                        0,
                        0.40,
                        0.60,
                        0.80,
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
                    // ── Hero title HTML fade (disappears as scroll begins) ────────────
                    if (heroTitleRef.current) {
                        heroTitleRef.current.style.opacity = String(Math.max(0, 1 - p / 0.07));
                    }
                    // ── introProgress: tied directly to scroll (immune to snap bounce) ───────
                    // p=0: particles invisible. p≥0.06: particles fully visible.
                    const INTRO_S = 0.02, INTRO_E = 0.06;
                    if (p < INTRO_S) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].introProgress = 0;
                    } else if (p <= INTRO_E) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].introProgress = (p - INTRO_S) / (INTRO_E - INTRO_S);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].introProgress = 1;
                    }
                    // ── Particle scroll phases ───────────────────────────────────────
                    const DIS_S = 0.06, DIS_E = 0.34; // disintegration
                    const ASM_S = 0.34, ASM_E = 0.40; // sphere assembly
                    const SPL_S = 0.50, SPL_E = 0.60; // 4 mini-circles (core values)
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
                    } else if (p <= SPL_E) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = (p - SPL_S) / (SPL_E - SPL_S);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress = 1;
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].splitProgress = 1;
                    }
                    // ── Hide particles BEFORE stats section ──────────────────────────
                    // Fades from 0→1 between progress 0.65 (mid core-values) and 0.78
                    // so the 4 mini-spheres are fully gone before stats numbers appear.
                    const HIDE_S = 0.65, HIDE_E = 0.78;
                    if (p < HIDE_S) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].hideProgress = 0;
                    } else if (p <= HIDE_E) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].hideProgress = (p - HIDE_S) / (HIDE_E - HIDE_S);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["particleStore"].hideProgress = 1;
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

//# sourceMappingURL=src_12nc9uo._.js.map