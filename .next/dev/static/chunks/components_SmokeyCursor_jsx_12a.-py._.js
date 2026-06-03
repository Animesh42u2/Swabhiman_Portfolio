(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SmokeyCursor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagneticCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MagneticCursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const posRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -200,
        y: -200
    });
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MagneticCursor.useEffect": ()=>{
            const dot = dotRef.current;
            if (!dot) return;
            const TAIL = 28;
            const segments = [];
            for(let i = 0; i < TAIL; i++){
                const el = document.createElement("div");
                const progress = i / TAIL;
                const size = Math.max(2, 14 * (1 - progress)); // 14px → 2px
                const opacity = 1 - progress * 0.9;
                el.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99997;
        transform: translate(-50%, -50%);
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
            const onMove = {
                "MagneticCursor.useEffect.onMove": (e)=>{
                    posRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["MagneticCursor.useEffect.onMove"];
            const onDown = {
                "MagneticCursor.useEffect.onDown": ()=>{
                    dot.style.transform = "translate(-50%,-50%) scale(0.6)";
                }
            }["MagneticCursor.useEffect.onDown"];
            const onUp = {
                "MagneticCursor.useEffect.onUp": ()=>{
                    dot.style.transform = "translate(-50%,-50%) scale(1)";
                }
            }["MagneticCursor.useEffect.onUp"];
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
            return ({
                "MagneticCursor.useEffect": ()=>{
                    cancelAnimationFrame(rafRef.current);
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("mousedown", onDown);
                    window.removeEventListener("mouseup", onUp);
                    segments.forEach({
                        "MagneticCursor.useEffect": (s)=>s.el.remove()
                    }["MagneticCursor.useEffect"]);
                }
            })["MagneticCursor.useEffect"];
        }
    }["MagneticCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `*, *::before, *::after { cursor: none !important; }`
            }, void 0, false, {
                fileName: "[project]/components/SmokeyCursor.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MagneticCursor, "o8irCEwu/yjsp9PevJc0wWa0sH0=");
_c = MagneticCursor;
var _c;
__turbopack_context__.k.register(_c, "MagneticCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_SmokeyCursor_jsx_12a.-py._.js.map