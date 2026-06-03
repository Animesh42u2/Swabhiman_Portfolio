module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/SmokeyCursor.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmokeyCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SmokeyCursor() {
    const [isTouch, setIsTouch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const posRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: -200,
        y: -200
    });
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouch(isTouchDevice);
        if (isTouchDevice) return; // mobile: do nothing, keep normal cursor
        const dot = dotRef.current;
        if (!dot) return;
        const TAIL = 28;
        const segments = [];
        for(let i = 0; i < TAIL; i++){
            const el = document.createElement("div");
            const progress = i / TAIL;
            const size = Math.max(2, 14 * (1 - progress));
            const opacity = 1 - progress * 0.9;
            el.style.cssText = `
        position: fixed; top: 0; left: 0;
        width: ${size}px; height: ${size}px;
        border-radius: 50%; pointer-events: none;
        z-index: 99997; transform: translate(-50%, -50%);
        will-change: left, top;
      `;
            const r = Math.round(201 + (240 - 201) * (1 - progress));
            const g = Math.round(168 + (208 - 168) * (1 - progress));
            const b = Math.round(76 + (122 - 76) * (1 - progress));
            el.style.background = `rgba(${r},${g},${b},${opacity})`;
            el.style.boxShadow = i < 6 ? `0 0 ${10 - i}px rgba(240,208,122,${0.7 - progress * 0.7})` : "none";
            document.body.appendChild(el);
            segments.push({
                el,
                x: -200,
                y: -200
            });
        }
        const onMove = (e)=>{
            posRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        const onDown = ()=>{
            dot.style.transform = "translate(-50%,-50%) scale(0.6)";
        };
        const onUp = ()=>{
            dot.style.transform = "translate(-50%,-50%) scale(1)";
        };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", onUp);
        function tick() {
            const { x, y } = posRef.current;
            dot.style.left = x + "px";
            dot.style.top = y + "px";
            let prevX = x, prevY = y;
            for(let i = 0; i < segments.length; i++){
                const s = segments[i];
                const speed = 0.42 - i * 0.012;
                s.x += (prevX - s.x) * speed;
                s.y += (prevY - s.y) * speed;
                s.el.style.left = s.x + "px";
                s.el.style.top = s.y + "px";
                prevX = s.x;
                prevY = s.y;
            }
            rafRef.current = requestAnimationFrame(tick);
        }
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", onUp);
            segments.forEach((s)=>s.el.remove());
        };
    }, []);
    // Mobile: render nothing, browser shows normal cursor
    if (isTouch) return null;
    // Desktop: render animated cursor + hide default
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `*, *::before, *::after { cursor: none !important; }`
            }, void 0, false, {
                fileName: "[project]/components/SmokeyCursor.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "#F0D07A",
                    transform: "translate(-50%,-50%)",
                    pointerEvents: "none",
                    zIndex: 99999,
                    transition: "transform 0.1s ease",
                    boxShadow: "0 0 10px rgba(240,208,122,1), 0 0 24px rgba(201,168,76,0.8), 0 0 44px rgba(201,168,76,0.4)",
                    willChange: "left, top"
                }
            }, void 0, false, {
                fileName: "[project]/components/SmokeyCursor.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03rzhkp._.js.map