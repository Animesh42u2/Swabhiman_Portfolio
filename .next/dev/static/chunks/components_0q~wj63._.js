(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 60)
            }["Navbar.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const links = [
        'About',
        'Stats',
        'Videos',
        'Brands',
        'Contact'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '1.25rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.4s ease',
            background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
            borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
            backdropFilter: scrolled ? 'blur(12px)' : 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#hero",
                style: {
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    color: 'var(--gold)',
                    textDecoration: 'none',
                    textTransform: 'uppercase'
                },
                children: "Mr. Swabhi"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    display: 'flex',
                    gap: '2.5rem',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                },
                className: "desktop-nav",
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${l.toLowerCase()}`,
                            style: {
                                fontFamily: 'Tenor Sans, sans-serif',
                                fontSize: '0.7rem',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--cream-dim)',
                                textDecoration: 'none',
                                transition: 'color 0.2s'
                            },
                            onMouseEnter: (e)=>e.target.style.color = 'var(--gold)',
                            onMouseLeave: (e)=>e.target.style.color = 'var(--cream-dim)',
                            children: l
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, l, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMenuOpen(!menuOpen),
                style: {
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'none'
                },
                className: "mobile-menu-btn",
                "aria-label": "Toggle menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 24,
                            height: 1,
                            background: 'var(--gold)',
                            marginBottom: 6
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 16,
                            height: 1,
                            background: 'var(--gold)',
                            marginBottom: 6
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 20,
                            height: 1,
                            background: 'var(--gold)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(10,10,10,0.98)',
                    padding: '2rem',
                    borderBottom: '1px solid rgba(201,168,76,0.2)'
                },
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `#${l.toLowerCase()}`,
                        onClick: ()=>setMenuOpen(false),
                        style: {
                            display: 'block',
                            padding: '0.75rem 0',
                            fontFamily: 'Tenor Sans, sans-serif',
                            fontSize: '0.8rem',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'var(--cream-dim)',
                            textDecoration: 'none',
                            borderBottom: '1px solid rgba(201,168,76,0.1)'
                        },
                        children: l
                    }, l, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Navbar, "EaXJNDiM7KISlWFYokQmqh/1M0I=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Hero() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const el = sectionRef.current;
            if (!el) return;
            setTimeout({
                "Hero.useEffect": ()=>el.classList.add('loaded')
            }["Hero.useEffect"], 100);
            const handleScroll = {
                "Hero.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY;
                    const vh = window.innerHeight;
                    if (videoRef.current) {
                        const parallaxOffset = scrollY * 0.45;
                        videoRef.current.style.transform = `translate(-50%, calc(-50% + ${parallaxOffset}px)) scale(1.15)`;
                    }
                    if (overlayRef.current) {
                        const opacity = Math.min(0.5 + scrollY / vh * 0.4, 0.85);
                        overlayRef.current.style.background = `rgba(0,0,0,${opacity})`;
                    }
                    if (contentRef.current) {
                        const fadeOut = Math.max(1 - scrollY / vh * 1.4, 0);
                        const moveUp = scrollY * 0.15;
                        contentRef.current.style.opacity = fadeOut;
                        contentRef.current.style.transform = `translateY(-${moveUp}px)`;
                    }
                }
            }["Hero.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Hero.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        * { box-sizing: border-box; }
        #hero { display: block; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }
        .hero-btn-primary {
          display: inline-block;
          padding: 0.85rem 2.5rem;
          background: var(--gold);
          color: var(--black);
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .hero-btn-primary:hover {
          background: var(--gold-light, #e0c97f);
          transform: translateY(-2px);
        }
        .hero-btn-outline {
          display: inline-block;
          padding: 0.85rem 2.5rem;
          border: 1px solid var(--gold-dim);
          color: var(--gold);
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .hero-btn-outline:hover {
          background: rgba(201,168,76,0.12);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 600px) {
          .hero-title { font-size: clamp(2.8rem, 16vw, 5rem) !important; }
          .hero-subtitle { font-size: 0.6rem !important; letter-spacing: 0.2em !important; }
          .hero-desc { font-size: 0.85rem !important; }
          .hero-divider-line { width: 30px !important; }
          .hero-btns { flex-direction: column !important; align-items: center !important; }
          .hero-btn-primary, .hero-btn-outline { width: 80vw !important; text-align: center !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                ref: sectionRef,
                style: {
                    minHeight: '100vh',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'var(--black)',
                    border: 'none',
                    margin: 0,
                    padding: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            overflow: 'hidden',
                            zIndex: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            style: {
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%) scale(1.15)',
                                minWidth: '100%',
                                minHeight: '100%',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'cover',
                                willChange: 'transform'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "https://res.cloudinary.com/dcse27hnb/video/upload/v1780425347/videoplayback_ofop58.webm",
                                type: "video/webm"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: overlayRef,
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0,0,0,0.58)',
                            zIndex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: -2,
                            left: 0,
                            right: 0,
                            height: '35%',
                            background: 'linear-gradient(to top, #0d0d0d 0%, #0d0d0d 2%, transparent 100%)',
                            zIndex: 2,
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contentRef,
                        style: {
                            position: 'relative',
                            zIndex: 3,
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '6rem 2rem 5rem',
                            textAlign: 'center',
                            willChange: 'opacity, transform'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-subtitle",
                                style: {
                                    fontFamily: 'Tenor Sans, sans-serif',
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.4em',
                                    textTransform: 'uppercase',
                                    color: 'var(--gold)',
                                    marginBottom: '1.5rem',
                                    opacity: 0,
                                    animation: 'fadeUp 0.8s ease 0.2s forwards'
                                },
                                children: "Creator · Storyteller · Singer"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-title",
                                style: {
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                                    fontWeight: 300,
                                    lineHeight: 0.9,
                                    letterSpacing: '-0.01em',
                                    marginBottom: '0.2em',
                                    opacity: 0,
                                    animation: 'fadeUp 0.8s ease 0.4s forwards'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            color: '#ffffff',
                                            textShadow: '0 4px 60px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.9)'
                                        },
                                        children: "Swabhiman"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            fontStyle: 'italic',
                                            color: 'var(--gold)',
                                            textShadow: '0 4px 60px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.8)'
                                        },
                                        children: "Ball"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    justifyContent: 'center',
                                    margin: '2rem 0',
                                    opacity: 0,
                                    animation: 'fadeUp 0.8s ease 0.6s forwards'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-divider-line",
                                        style: {
                                            height: '1px',
                                            width: 60,
                                            background: 'var(--gold-dim)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-subtitle",
                                        style: {
                                            fontFamily: 'Tenor Sans, sans-serif',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.25em',
                                            textTransform: 'uppercase',
                                            color: 'rgba(255,255,255,0.75)',
                                            margin: 0
                                        },
                                        children: "Lifestyle · Fashion · Travel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-divider-line",
                                        style: {
                                            height: '1px',
                                            width: 60,
                                            background: 'var(--gold-dim)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-desc",
                                style: {
                                    fontSize: '0.95rem',
                                    color: 'rgba(255,255,255,0.72)',
                                    maxWidth: 420,
                                    margin: '0 auto 2.5rem',
                                    lineHeight: 1.9,
                                    opacity: 0,
                                    animation: 'fadeUp 0.8s ease 0.7s forwards',
                                    textShadow: '0 2px 16px rgba(0,0,0,0.9)'
                                },
                                children: "Based in Kolkata · Crafting stories that feel real — work, wanderlust, music & the everyday extraordinary."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-btns",
                                style: {
                                    display: 'flex',
                                    gap: '1rem',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    opacity: 0,
                                    animation: 'fadeUp 0.8s ease 0.9s forwards'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#videos",
                                        className: "hero-btn-primary",
                                        children: "Watch My Work"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: "hero-btn-outline",
                                        children: "Work With Me"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.jsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '2rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            zIndex: 4,
                            opacity: 0,
                            animation: 'fadeIn 1s ease 1.5s forwards'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Hero, "Uy5nnHnfv0KZf4SkEpLHS/IPXjg=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/About.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    show: (i = 0)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.15,
                ease: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            }
        })
};
const slideLeft = {
    hidden: {
        opacity: 0,
        x: -60
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
const slideRight = {
    hidden: {
        opacity: 0,
        x: 60
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        }
    }
};
const stats = [
    {
        label: 'Based in',
        value: 'Kolkata, WB'
    },
    {
        label: 'Since',
        value: '2019'
    },
    {
        label: 'Platforms',
        value: 'Instagram · YouTube'
    }
];
function splitWords(text) {
    return text.split(/(\s+)/).map((w, i)=>({
            t: w,
            key: i
        }));
}
const p1Words = splitWords("I'm a creator, storyteller, and playback singer from Kolkata, West Bengal. My content lives at the intersection of real life and beautiful storytelling — fashion that feels personal, travel that goes beyond the tourist trail, and lifestyle content that's genuinely, unapologetically me.");
const p2Words = splitWords("With 3.4L+ followers across platforms, I collaborate with brands that believe in authentic storytelling — not just ads, but experiences worth remembering.");
function WordReveal({ words, visible }) {
    return words.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                display: 'inline',
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease'
            },
            children: w.t
        }, i, false, {
            fileName: "[project]/components/About.jsx",
            lineNumber: 38,
            columnNumber: 5
        }, this));
}
_c = WordReveal;
/* ── Gold BorderBeam (pure CSS animation) ── */ function GoldBorderBeam({ duration = 4, size = 140 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @property --beam-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes beam-spin {
          to { --beam-angle: 360deg; }
        }
        @keyframes beam-spin-rev {
          from { --beam-angle: 360deg; }
          to   { --beam-angle: 0deg; }
        }
        .gold-beam-border {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          pointer-events: none;
          z-index: 3;
        }
        .gold-beam-border::before,
        .gold-beam-border::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
        }
        /* The travelling beam — conic gradient that sweeps around */
        .gold-beam-border::before {
          padding: 1.5px;
          background: conic-gradient(
            from var(--beam-angle),
            transparent 0%,
            transparent 60%,
            rgba(201,168,76,0.15) 70%,
            rgba(201,168,76,0.85) 85%,
            rgba(255,220,120,1)   90%,
            rgba(201,168,76,0.85) 95%,
            rgba(201,168,76,0.15) 98%,
            transparent 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: beam-spin ${duration}s linear infinite;
        }
        /* Second beam going the opposite direction, offset */
        .gold-beam-border::after {
          padding: 1px;
          background: conic-gradient(
            from var(--beam-angle),
            transparent 0%,
            transparent 65%,
            rgba(201,168,76,0.08) 72%,
            rgba(201,168,76,0.4)  82%,
            rgba(255,220,120,0.6) 87%,
            rgba(201,168,76,0.4)  92%,
            rgba(201,168,76,0.08) 97%,
            transparent 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: beam-spin-rev ${duration * 1.3}s linear infinite;
          animation-delay: ${duration * 0.5}s;
          opacity: 0.65;
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/About.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gold-beam-border"
            }, void 0, false, {
                fileName: "[project]/components/About.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = GoldBorderBeam;
function About() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '-80px'
    });
    const [vis1, setVis1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(p1Words.length).fill(false));
    const [vis2, setVis2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(p2Words.length).fill(false));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            if (!isInView) return;
            const timers = [];
            p1Words.forEach({
                "About.useEffect": (_, i)=>{
                    timers.push(setTimeout({
                        "About.useEffect": ()=>{
                            setVis1({
                                "About.useEffect": (prev)=>{
                                    const n = [
                                        ...prev
                                    ];
                                    n[i] = true;
                                    return n;
                                }
                            }["About.useEffect"]);
                        }
                    }["About.useEffect"], 300 + i * 55));
                }
            }["About.useEffect"]);
            const p2Start = 300 + p1Words.length * 55 + 80;
            p2Words.forEach({
                "About.useEffect": (_, i)=>{
                    timers.push(setTimeout({
                        "About.useEffect": ()=>{
                            setVis2({
                                "About.useEffect": (prev)=>{
                                    const n = [
                                        ...prev
                                    ];
                                    n[i] = true;
                                    return n;
                                }
                            }["About.useEffect"]);
                        }
                    }["About.useEffect"], p2Start + i * 55));
                }
            }["About.useEffect"]);
            return ({
                "About.useEffect": ()=>timers.forEach(clearTimeout)
            })["About.useEffect"];
        }
    }["About.useEffect"], [
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: ref,
        style: {
            padding: 'clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 2rem)',
            background: 'var(--black-soft)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: -80,
                    right: -80,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/About.jsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: -100,
                    left: -100,
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/About.jsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1100,
                    margin: '0 auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                        gap: 'clamp(2.5rem, 7vw, 5rem)',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: "hidden",
                            animate: isInView ? 'show' : 'hidden',
                            variants: slideLeft,
                            style: {
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: isInView ? {
                                        opacity: 1
                                    } : {
                                        opacity: 0
                                    },
                                    transition: {
                                        delay: 0.6,
                                        duration: 0.8
                                    },
                                    style: {
                                        position: 'absolute',
                                        top: -20,
                                        left: -12,
                                        zIndex: 3,
                                        fontFamily: 'Cormorant Garamond, serif',
                                        fontSize: 'clamp(5rem, 12vw, 8rem)',
                                        fontWeight: 300,
                                        color: 'rgba(201,168,76,0.07)',
                                        lineHeight: 1,
                                        userSelect: 'none',
                                        pointerEvents: 'none'
                                    },
                                    children: "01"
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.015
                                    },
                                    transition: {
                                        duration: 0.4,
                                        ease: 'easeOut'
                                    },
                                    style: {
                                        aspectRatio: '3/4',
                                        background: 'var(--black-mid)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        maxWidth: 420
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoldBorderBeam, {
                                            duration: 4
                                        }, void 0, false, {
                                            fileName: "[project]/components/About.jsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/swabhi.jpeg",
                                            alt: "Swabhiman Ball",
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'top',
                                                display: 'block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/About.jsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            whileHover: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.4
                                            },
                                            style: {
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)',
                                                pointerEvents: 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/About.jsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                y: 20,
                                                opacity: 0
                                            },
                                            animate: isInView ? {
                                                y: 0,
                                                opacity: 1
                                            } : {},
                                            transition: {
                                                delay: 0.9,
                                                duration: 0.6
                                            },
                                            style: {
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: '1.5rem 1.25rem 1.25rem',
                                                background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)',
                                                zIndex: 4
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'Tenor Sans, sans-serif',
                                                    fontSize: '0.6rem',
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--gold)'
                                                },
                                                children: "Mr. Swabhi"
                                            }, void 0, false, {
                                                fileName: "[project]/components/About.jsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/About.jsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -10,
                                        y: -10
                                    },
                                    animate: isInView ? {
                                        opacity: 1,
                                        x: 0,
                                        y: 0
                                    } : {},
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.8
                                    },
                                    style: {
                                        position: 'absolute',
                                        top: 20,
                                        left: 20,
                                        right: -14,
                                        bottom: -14,
                                        border: '1px solid rgba(201,168,76,0.2)',
                                        zIndex: -1,
                                        maxWidth: 434
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8,
                                        rotate: -6
                                    },
                                    animate: isInView ? {
                                        opacity: 1,
                                        scale: 1,
                                        rotate: -3
                                    } : {},
                                    transition: {
                                        delay: 1,
                                        duration: 0.6,
                                        type: 'spring',
                                        stiffness: 200
                                    },
                                    whileHover: {
                                        rotate: 0,
                                        scale: 1.05
                                    },
                                    style: {
                                        position: 'absolute',
                                        bottom: 30,
                                        right: -20,
                                        background: 'var(--gold)',
                                        padding: '0.6rem 1rem',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                                        zIndex: 5
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'Tenor Sans, sans-serif',
                                            fontSize: '0.6rem',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: 'var(--black)',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: "3.4L+ Followers"
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.jsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/About.jsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: "hidden",
                            animate: isInView ? 'show' : 'hidden',
                            variants: slideRight,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '2rem',
                                        overflow: 'hidden'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        initial: {
                                            y: 60,
                                            opacity: 0
                                        },
                                        animate: isInView ? {
                                            y: 0,
                                            opacity: 1
                                        } : {},
                                        transition: {
                                            delay: 0.2,
                                            duration: 0.9,
                                            ease: [
                                                0.25,
                                                0.1,
                                                0.25,
                                                1
                                            ]
                                        },
                                        style: {
                                            fontFamily: 'Cormorant Garamond, serif',
                                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                                            fontWeight: 300,
                                            lineHeight: 1.1
                                        },
                                        children: [
                                            "I'm",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gold-text",
                                                style: {
                                                    fontStyle: 'italic'
                                                },
                                                children: "Swabhiman"
                                            }, void 0, false, {
                                                fileName: "[project]/components/About.jsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/About.jsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            "but you can call me ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/About.jsx",
                                                lineNumber: 244,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                initial: {
                                                    color: 'var(--cream)'
                                                },
                                                animate: isInView ? {
                                                    color: 'var(--gold)'
                                                } : {},
                                                transition: {
                                                    delay: 1,
                                                    duration: 0.8
                                                },
                                                children: "Mr. Swabhi"
                                            }, void 0, false, {
                                                fileName: "[project]/components/About.jsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/About.jsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scaleX: 0
                                    },
                                    animate: isInView ? {
                                        scaleX: 1
                                    } : {},
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.8
                                    },
                                    style: {
                                        height: 1,
                                        background: 'linear-gradient(to right, var(--gold-dim), transparent)',
                                        transformOrigin: 'left',
                                        marginBottom: '1.75rem'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                        color: 'var(--gray)',
                                        lineHeight: 1.9,
                                        marginBottom: '1.25rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WordReveal, {
                                        words: p1Words,
                                        visible: vis1
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.jsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                        color: 'var(--gray)',
                                        lineHeight: 1.9,
                                        marginBottom: '1.25rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WordReveal, {
                                        words: p2Words,
                                        visible: vis2
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.jsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: "hidden",
                                    animate: isInView ? 'show' : 'hidden',
                                    variants: {
                                        show: {
                                            transition: {
                                                staggerChildren: 0.12,
                                                delayChildren: 0.6
                                            }
                                        }
                                    },
                                    style: {
                                        display: 'flex',
                                        gap: 'clamp(1rem, 3vw, 2rem)',
                                        flexWrap: 'wrap',
                                        marginTop: '2rem'
                                    },
                                    children: stats.map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            variants: fadeUp,
                                            whileHover: {
                                                y: -4
                                            },
                                            transition: {
                                                type: 'spring',
                                                stiffness: 300
                                            },
                                            style: {
                                                borderTop: '1px solid var(--gray-light)',
                                                paddingTop: '1rem',
                                                minWidth: 110
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: 'Tenor Sans, sans-serif',
                                                        fontSize: '0.6rem',
                                                        letterSpacing: '0.25em',
                                                        textTransform: 'uppercase',
                                                        color: 'var(--gold-dim)',
                                                        marginBottom: '0.3rem'
                                                    },
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/About.jsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '0.9rem',
                                                        color: 'var(--cream-dim)'
                                                    },
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/About.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/components/About.jsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: isInView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        delay: 1.1,
                                        duration: 0.6
                                    },
                                    style: {
                                        marginTop: '2.5rem'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: "#contact",
                                        whileHover: {
                                            scale: 1.04,
                                            backgroundColor: 'var(--gold-light)'
                                        },
                                        whileTap: {
                                            scale: 0.97
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        style: {
                                            display: 'inline-block',
                                            padding: '0.85rem 2.25rem',
                                            background: 'var(--gold)',
                                            color: 'var(--black)',
                                            fontFamily: 'Tenor Sans, sans-serif',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            textDecoration: 'none'
                                        },
                                        children: "Let's Collaborate ✦"
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.jsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/About.jsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/About.jsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/About.jsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/About.jsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/About.jsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(About, "9Q629qp12MB+BYVVULXT5nTqS+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = About;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WordReveal");
__turbopack_context__.k.register(_c1, "GoldBorderBeam");
__turbopack_context__.k.register(_c2, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Stats.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
function useCountUp(target, duration = 2000, start = false) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!start) return;
            let startTime = null;
            const step = {
                "useCountUp.useEffect.step": (timestamp)=>{
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(eased * target);
                    if (progress < 1) requestAnimationFrame(step);
                }
            }["useCountUp.useEffect.step"];
            requestAnimationFrame(step);
        }
    }["useCountUp.useEffect"], [
        target,
        duration,
        start
    ]);
    return count;
}
_s(useCountUp, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
function formatStat(number, rawSuffix) {
    if (number >= 1_000_000) {
        const val = number / 1_000_000;
        // Always show one decimal: 4000000 → 4.0M, 5300000 → 5.3M
        return {
            displayTarget: val,
            unit: 'M',
            suffix: rawSuffix.includes('+') ? '+' : '',
            decimals: 1
        };
    }
    if (number >= 100_000) {
        // 340000 → 340K
        return {
            displayTarget: number / 1_000,
            unit: 'K',
            suffix: rawSuffix.includes('+') ? '+' : '',
            decimals: 0
        };
    }
    // Below 100K — show raw number, no abbreviation (1155 stays 1155)
    return {
        displayTarget: number,
        unit: '',
        suffix: rawSuffix,
        decimals: 0
    };
}
function StatCard({ number, suffix, label, platform, delay }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { displayTarget, unit, suffix: formattedSuffix, decimals } = formatStat(number, suffix);
    const count = useCountUp(displayTarget, 2000, visible);
    const displayCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCard.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "StatCard.useEffect": ([e])=>{
                    if (e.isIntersecting) setVisible(true);
                }
            }["StatCard.useEffect"], {
                threshold: 0.2
            });
            if (ref.current) obs.observe(ref.current);
            return ({
                "StatCard.useEffect": ()=>obs.disconnect()
            })["StatCard.useEffect"];
        }
    }["StatCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "stat-card",
        style: {
            padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem)',
            border: '1px solid var(--gray-light)',
            position: 'relative',
            overflow: 'hidden',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s ease`,
            cursor: 'default'
        },
        onMouseEnter: (e)=>e.currentTarget.style.borderColor = 'var(--gold-dim)',
        onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'var(--gray-light)',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.8s ease 0.5s'
                }
            }, void 0, false, {
                fileName: "[project]/components/Stats.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'Tenor Sans, sans-serif',
                    fontSize: 'clamp(0.5rem, 1vw, 0.6rem)',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-dim)',
                    marginBottom: '0.75rem',
                    whiteSpace: 'nowrap'
                },
                children: platform
            }, void 0, false, {
                fileName: "[project]/components/Stats.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                    color: 'var(--cream)',
                    marginBottom: '0.5rem',
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.01em'
                },
                children: [
                    displayCount,
                    unit,
                    formattedSuffix
                ]
            }, void 0, true, {
                fileName: "[project]/components/Stats.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: 'Tenor Sans, sans-serif',
                    fontSize: 'clamp(0.55rem, 1vw, 0.65rem)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gray)',
                    whiteSpace: 'nowrap'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Stats.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Stats.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s1(StatCard, "FF2qkZuSX2gaAwjHMfmfAE0VYBU=", false, function() {
    return [
        useCountUp
    ];
});
_c = StatCard;
function Stats() {
    const stats = [
        {
            number: 340000,
            suffix: '+',
            label: 'Followers',
            platform: 'Instagram'
        },
        {
            number: 4000000,
            suffix: '+',
            label: 'Total Likes',
            platform: 'Instagram'
        },
        {
            number: 1155,
            suffix: '',
            label: 'Posts & Reels',
            platform: 'Instagram'
        },
        {
            number: 16100,
            suffix: '',
            label: 'Subscribers',
            platform: 'YouTube'
        },
        {
            number: 5300000,
            suffix: '+',
            label: 'Total Views',
            platform: 'YouTube'
        },
        {
            number: 100,
            suffix: '+',
            label: 'Brand Collabs',
            platform: 'Campaigns'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        #stats { position: relative; overflow: hidden; }
        #stats::before {
          content: '';
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center 30%;
          background-attachment: fixed;
          opacity: 0.18; z-index: 0;
        }
        #stats::after {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 50% 0%, transparent 20%, var(--black) 80%),
            linear-gradient(to bottom, var(--black) 0%, transparent 25%, transparent 75%, var(--black) 100%);
          z-index: 1;
        }
        #stats > * { position: relative; z-index: 2; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1px;
          background: var(--gray-light);
          border: 1px solid var(--gray-light);
        }
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .stat-card:hover { background: rgba(255,255,255,0.02); }
      `
            }, void 0, false, {
                fileName: "[project]/components/Stats.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "stats",
                style: {
                    padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)',
                    background: 'var(--black)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1100,
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                                fontWeight: 300,
                                marginBottom: 'clamp(2rem, 5vw, 4rem)',
                                color: 'var(--cream)'
                            },
                            children: [
                                "Reach that ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontStyle: 'italic',
                                        color: 'var(--gold)'
                                    },
                                    children: "speaks"
                                }, void 0, false, {
                                    fileName: "[project]/components/Stats.jsx",
                                    lineNumber: 173,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Stats.jsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stats-grid",
                            children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'var(--black)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        ...s,
                                        delay: i * 100
                                    }, void 0, false, {
                                        fileName: "[project]/components/Stats.jsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/Stats.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Stats.jsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Stats.jsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Stats.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = Stats;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "Stats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Videos.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Videos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Videos() {
    const reels = [
        {
            label: 'Style Bazaar',
            category: 'Fashion & Lifestyle',
            likes: '4.3K',
            views: '22.6K',
            shares: '120',
            url: 'https://www.instagram.com/reel/DYcaTglq8V9/',
            thumb: '/thumbnails/style-bazaar.jpg',
            gradient: 'linear-gradient(135deg, #1a1200 0%, #2a1f00 40%, #1a1608 100%)'
        },
        {
            label: 'Gamers Paradise',
            category: 'Tech & Gaming',
            likes: '1.1K',
            views: '18.4K',
            shares: '44',
            url: 'https://www.instagram.com/reel/DXwcziUKM7z/',
            thumb: '/thumbnails/gamers-paradise.jpg',
            gradient: 'linear-gradient(135deg, #0a0e1a 0%, #0d1a2a 40%, #080c14 100%)'
        },
        {
            label: 'Dolby Vision',
            category: 'Tech Review',
            likes: '740',
            views: '12.1K',
            shares: '30',
            url: 'https://www.instagram.com/reel/DWFGu2_E53n/',
            thumb: '/thumbnails/dolby-vision.jpg',
            gradient: 'linear-gradient(135deg, #12060a 0%, #1f0a10 40%, #0e0608 100%)'
        },
        {
            label: 'Cars24',
            category: 'Brand Collab',
            likes: '2.8K',
            views: '22.6K',
            shares: '95',
            url: 'https://www.instagram.com/reel/DUz0yB0kfFm/',
            thumb: '/thumbnails/cars24.jpg',
            gradient: 'linear-gradient(135deg, #0e0a00 0%, #1f1400 40%, #120e00 100%)'
        },
        {
            label: 'Geek Aire GF6 Fan',
            category: 'Product Review',
            likes: '3.5K',
            views: '31.5K',
            shares: '112',
            url: 'https://www.instagram.com/reel/CrLM4IKP8Au/',
            thumb: '/thumbnails/geek-aire-gf6.jpg',
            gradient: 'linear-gradient(135deg, #001a10 0%, #002a1a 40%, #001208 100%)'
        },
        {
            label: 'Viral Video',
            category: 'Trending',
            likes: '1.9K',
            views: '19.2K',
            shares: '67',
            url: 'https://www.instagram.com/reel/DCTvSOeN7L5/',
            thumb: '/thumbnails/viral-video.jpg',
            gradient: 'linear-gradient(135deg, #0e0014 0%, #1a0028 40%, #0a0010 100%)'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "videos",
        style: {
            padding: '8rem 2rem',
            background: 'var(--black-soft)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .reel-card-3d {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(145deg, #1a1608, #0e0c07);
          border: 1px solid rgba(201,168,76,0.2);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.4s ease;
          transform-style: preserve-3d;
          box-shadow: 0 4px 15px rgba(0,0,0,0.4), 0 1px 0 rgba(201,168,76,0.08) inset, 0 -1px 0 rgba(0,0,0,0.5) inset;
          text-decoration: none;
        }
        .reel-card-3d:hover {
          transform: translateY(-10px) rotateX(4deg) rotateY(-2deg) scale(1.02);
          border-color: rgba(201,168,76,0.55);
          box-shadow: 0 30px 70px rgba(0,0,0,0.6), 0 10px 30px rgba(201,168,76,0.12), 0 1px 0 rgba(201,168,76,0.15) inset;
        }
        .reel-card-3d:hover .play-ring {
          transform: translate(-50%, -50%) scale(1.12);
          box-shadow: 0 0 0 2px rgba(201,168,76,0.5), 0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.2);
        }
        .reel-card-3d:hover .card-shine { opacity: 1; }
        .reel-card-3d:hover .ig-redirect { opacity: 1; transform: translateY(0); }
        .reel-card-3d:hover .thumb-overlay { opacity: 1; }

        .thumb-wrap {
          width: 100%;
          aspect-ratio: 9/16;
          position: relative;
          overflow: hidden;
        }
        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
        }
        .reel-card-3d:hover .thumb-img {
          transform: scale(1.07);
        }
        /* Gold tint overlay on hover */
        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        /* Bottom fade for text readability */
        .thumb-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,6,2,0.95) 0%, rgba(8,6,2,0.2) 40%, transparent 65%);
          pointer-events: none;
        }
        /* Fallback gradient (shown while image loads or if missing) */
        .thumb-fallback {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .thumb-img { position: relative; z-index: 1; }

        /* Gold frame corners */
        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: absolute;
          width: 16px; height: 16px;
          z-index: 4;
        }
        .corner-tl { top: 12px; left: 12px; border-top: 1px solid rgba(201,168,76,0.5); border-left: 1px solid rgba(201,168,76,0.5); }
        .corner-tr { top: 12px; right: 12px; border-top: 1px solid rgba(201,168,76,0.5); border-right: 1px solid rgba(201,168,76,0.5); }
        .corner-bl { bottom: 12px; left: 12px; border-bottom: 1px solid rgba(201,168,76,0.5); border-left: 1px solid rgba(201,168,76,0.5); }
        .corner-br { bottom: 12px; right: 12px; border-bottom: 1px solid rgba(201,168,76,0.5); border-right: 1px solid rgba(201,168,76,0.5); }

        .card-shine {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 30%, rgba(255,220,100,0.9) 50%, rgba(201,168,76,0.6) 70%, transparent 100%);
          opacity: 0.4;
          transition: opacity 0.4s ease;
          z-index: 5;
        }
        .play-ring {
          position: absolute;
          top: 62%; left: 50%;
          transform: translate(-50%, -50%);
          width: 60px; height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(0,0,0,0.5), rgba(0,0,0,0.3));
          border: 1.5px solid rgba(201,168,76,0.85);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease;
          box-shadow: 0 0 0 1px rgba(201,168,76,0.15), 0 0 24px rgba(201,168,76,0.25), inset 0 1px 0 rgba(255,230,120,0.2);
          z-index: 3;
          backdrop-filter: blur(6px);
        }
        .play-triangle {
          width: 0; height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 18px solid #C9A84C;
          margin-left: 4px;
          filter: drop-shadow(0 0 8px rgba(201,168,76,0.9));
        }
        .ig-redirect {
          position: absolute;
          bottom: 12px; right: 12px;
          display: flex; align-items: center; gap: 4px;
          padding: 5px 10px;
          background: rgba(10,8,5,0.9);
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 20px;
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.48rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.75);
          z-index: 4;
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .reel-info-bar {
          padding: 0.9rem 1rem 1rem;
          background: linear-gradient(180deg, #0e0c07 0%, #0a0805 100%);
          border-top: 1px solid rgba(201,168,76,0.1);
          position: relative;
          z-index: 2;
        }
        .reel-info-bar::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent);
        }
        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 9px;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 20px;
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.48rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.55);
          margin-bottom: 0.45rem;
          background: rgba(201,168,76,0.04);
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
        }

        .reels-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
          perspective: 1200px;
        }
        @media (max-width: 1100px) {
          .reels-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reels-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .reel-card-3d:hover { transform: translateY(-4px) scale(1.01); }
          .reel-info-bar { padding: 0.7rem 0.75rem 0.85rem; }
        }
        @media (max-width: 400px) {
          .reels-grid { grid-template-columns: 1fr 1fr; gap: 0.6rem; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Videos.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '3.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.7rem',
                                    marginBottom: '1rem'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Videos.jsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    fontWeight: 300,
                                    color: 'var(--cream)',
                                    lineHeight: 1.2
                                },
                                children: [
                                    "Content that ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontStyle: 'italic',
                                            color: 'var(--gold)'
                                        },
                                        children: "connects"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Videos.jsx",
                                        lineNumber: 250,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Videos.jsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Videos.jsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "reels-grid",
                        children: reels.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: r.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "reel-card-3d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-shine"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Videos.jsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "thumb-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "thumb-fallback",
                                                style: {
                                                    background: r.gradient
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: r.thumb,
                                                alt: r.label,
                                                className: "thumb-img",
                                                onError: (e)=>{
                                                    e.currentTarget.style.display = 'none';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "thumb-overlay"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "thumb-fade"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner-tl"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner-tr"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 276,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner-bl"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner-br"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 277,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "play-ring",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "play-triangle"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Videos.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ig-redirect",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "8",
                                                        height: "8",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "2",
                                                                y: "2",
                                                                width: "20",
                                                                height: "20",
                                                                rx: "5",
                                                                stroke: "rgba(201,168,76,0.7)",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Videos.jsx",
                                                                lineNumber: 287,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "4.5",
                                                                stroke: "rgba(201,168,76,0.7)",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Videos.jsx",
                                                                lineNumber: 288,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "17.5",
                                                                cy: "6.5",
                                                                r: "1",
                                                                fill: "rgba(201,168,76,0.7)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Videos.jsx",
                                                                lineNumber: 289,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Videos.jsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Watch on Instagram"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Videos.jsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reel-info-bar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "category-pill",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: 4,
                                                            height: 4,
                                                            borderRadius: '50%',
                                                            background: 'rgba(201,168,76,0.6)',
                                                            display: 'inline-block',
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Videos.jsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this),
                                                    r.category
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'Cormorant Garamond, serif',
                                                    fontSize: '0.95rem',
                                                    fontWeight: 400,
                                                    color: 'var(--cream)',
                                                    marginBottom: '0.6rem',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                },
                                                children: r.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '0.85rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "stat-item",
                                                        style: {
                                                            color: 'rgba(245,235,215,0.4)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "10",
                                                                height: "10",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Videos.jsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Videos.jsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 80
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Videos.jsx",
                                                                lineNumber: 306,
                                                                columnNumber: 21
                                                            }, this),
                                                            r.views
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Videos.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "stat-item",
                                                        style: {
                                                            color: 'rgba(201,168,76,0.65)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "10",
                                                                height: "10",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Videos.jsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Videos.jsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, this),
                                                            r.likes
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Videos.jsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "stat-item",
                                                        style: {
                                                            color: 'rgba(245,235,215,0.4)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "10",
                                                                height: "10",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "18",
                                                                        cy: "5",
                                                                        r: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Videos.jsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "6",
                                                                        cy: "12",
                                                                        r: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Videos.jsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 54
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "18",
                                                                        cy: "19",
                                                                        r: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Videos.jsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 85
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "8.59",
                                                                        y1: "13.51",
                                                                        x2: "15.42",
                                                                        y2: "17.49"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Videos.jsx",
                                                                        lineNumber: 320,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "15.41",
                                                                        y1: "6.51",
                                                                        x2: "8.59",
                                                                        y2: "10.49"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Videos.jsx",
                                                                        lineNumber: 321,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Videos.jsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            r.shares
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Videos.jsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Videos.jsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Videos.jsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Videos.jsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Videos.jsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Videos.jsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Videos.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = Videos;
var _c;
__turbopack_context__.k.register(_c, "Videos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Brands.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Brands
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-velocity.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const VelocityCtx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ScrollVelocityProvider({ children }) {
    _s();
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const scrollVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"])(scrollY);
    const smoothVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothVelocity, {
        "ScrollVelocityProvider.useTransform[velocityFactor]": (v)=>{
            const sign = v < 0 ? -1 : 1;
            return sign * Math.min(5, Math.abs(v) / 1000 * 5);
        }
    }["ScrollVelocityProvider.useTransform[velocityFactor]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VelocityCtx.Provider, {
        value: velocityFactor,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Brands.jsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_s(ScrollVelocityProvider, "dGjwKa+r47LNaZ4bEdD+GjKTM4M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ScrollVelocityProvider;
function MarqueeRow({ children, baseVelocity = 4, direction = 1 }) {
    _s1();
    const sharedFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(VelocityCtx);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const localVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"])(scrollY);
    const localSmooth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(localVelocity, {
        damping: 50,
        stiffness: 400
    });
    const localFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(localSmooth, {
        "MarqueeRow.useTransform[localFactor]": (v)=>{
            const sign = v < 0 ? -1 : 1;
            return sign * Math.min(5, Math.abs(v) / 1000 * 5);
        }
    }["MarqueeRow.useTransform[localFactor]"]);
    const velocityFactor = sharedFactor || localFactor;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [numCopies, setNumCopies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const prevTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const unitWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const baseXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const dragStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const childrenArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarqueeRow.useMemo[childrenArray]": ()=>Array.isArray(children) ? children : [
                children
            ]
    }["MarqueeRow.useMemo[childrenArray]"], [
        children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarqueeRow.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const block = container.querySelector('.marquee-block');
            if (block) {
                unitWidthRef.current = block.scrollWidth;
                const needed = Math.max(4, Math.ceil(container.offsetWidth / unitWidthRef.current) + 2);
                setNumCopies(needed);
            }
        }
    }["MarqueeRow.useEffect"], [
        childrenArray
    ]);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        margin: '20%'
    });
    const shouldPause = hovered || isDragging.current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
        "MarqueeRow.useAnimationFrame": (time)=>{
            if (!isInView || shouldPause) return;
            if (prevTimeRef.current == null) prevTimeRef.current = time;
            const dt = Math.max(0, (time - prevTimeRef.current) / 1000);
            prevTimeRef.current = time;
            const unitWidth = unitWidthRef.current;
            if (unitWidth <= 0) return;
            const velocity = velocityFactor.get();
            const speedMul = Math.min(5, Math.abs(velocity));
            const scrollDir = velocity >= 0 ? 1 : -1;
            const currentDir = direction * scrollDir;
            const pps = unitWidth * baseVelocity / 100;
            const moveBy = currentDir * pps * (1 + speedMul) * dt;
            const newX = baseXRef.current + moveBy;
            if (newX >= unitWidth) baseXRef.current = newX % unitWidth;
            else if (newX <= 0) baseXRef.current = unitWidth + newX % unitWidth;
            else baseXRef.current = newX;
            x.set(baseXRef.current);
        }
    }["MarqueeRow.useAnimationFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarqueeRow.useEffect": ()=>{
            if (shouldPause) prevTimeRef.current = null;
        }
    }["MarqueeRow.useEffect"], [
        shouldPause
    ]);
    const onDragStart = (clientX)=>{
        isDragging.current = true;
        dragStartX.current = clientX;
        dragStartBase.current = baseXRef.current;
    };
    const onDragMove = (clientX)=>{
        if (!isDragging.current) return;
        const unitWidth = unitWidthRef.current;
        if (unitWidth <= 0) return;
        const delta = dragStartX.current - clientX;
        let newX = dragStartBase.current + delta;
        newX = (newX % unitWidth + unitWidth) % unitWidth;
        baseXRef.current = newX;
        x.set(newX);
    };
    const onDragEnd = ()=>{
        isDragging.current = false;
    };
    const xTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, {
        "MarqueeRow.useTransform[xTransform]": (v)=>`translate3d(${-v}px,0,0)`
    }["MarqueeRow.useTransform[xTransform]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "marquee-container",
        style: {
            overflow: 'hidden',
            width: '100%',
            cursor: isDragging.current ? 'grabbing' : 'grab'
        },
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>{
            setHovered(false);
            onDragEnd();
        },
        onMouseDown: (e)=>onDragStart(e.clientX),
        onMouseMove: (e)=>onDragMove(e.clientX),
        onMouseUp: onDragEnd,
        onTouchStart: (e)=>onDragStart(e.touches[0].clientX),
        onTouchMove: (e)=>onDragMove(e.touches[0].clientX),
        onTouchEnd: onDragEnd,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                transform: xTransform,
                display: 'inline-flex',
                willChange: 'transform',
                userSelect: 'none'
            },
            children: Array.from({
                length: numCopies
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: i === 0 ? 'marquee-block' : '',
                    style: {
                        display: 'inline-flex',
                        flexShrink: 0
                    },
                    children: childrenArray
                }, i, false, {
                    fileName: "[project]/components/Brands.jsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Brands.jsx",
            lineNumber: 126,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Brands.jsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s1(MarqueeRow, "gAqmO9q9hKnBxUXRo+uBpJgHj7k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = MarqueeRow;
function BrandCard({ name, logo, category }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            margin: '0 clamp(0.5rem, 1.5vw, 1rem)',
            padding: 'clamp(0.6rem, 1.5vw, 0.9rem) clamp(0.75rem, 2vw, 1.25rem)',
            minWidth: 'clamp(80px, 10vw, 130px)',
            height: 'clamp(60px, 8vw, 88px)',
            background: 'transparent',
            flexShrink: 0,
            userSelect: 'none',
            WebkitTapHighlightColor: 'transparent'
        },
        children: [
            logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: logo,
                alt: name,
                draggable: false,
                style: {
                    height: 'clamp(24px, 3.5vw, 38px)',
                    maxWidth: 'clamp(70px, 9vw, 105px)',
                    objectFit: 'contain',
                    opacity: 0.82,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/Brands.jsx",
                lineNumber: 155,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: 'Tenor Sans, sans-serif',
                    fontSize: 'clamp(0.5rem, 1.1vw, 0.68rem)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.5)',
                    textAlign: 'center',
                    lineHeight: 1.3
                },
                children: name
            }, void 0, false, {
                fileName: "[project]/components/Brands.jsx",
                lineNumber: 168,
                columnNumber: 9
            }, this),
            category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: 'Tenor Sans, sans-serif',
                    fontSize: 'clamp(0.3rem, 0.7vw, 0.4rem)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.22)'
                },
                children: category
            }, void 0, false, {
                fileName: "[project]/components/Brands.jsx",
                lineNumber: 179,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Brands.jsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c2 = BrandCard;
function Brands() {
    const row1 = [
        {
            name: "Dolby Atmos",
            logo: '/brands/dolby-atmos.png',
            category: 'Audio Tech'
        },
        {
            name: "Dolby Vision",
            logo: '/brands/dolby-vision.png',
            category: 'Display Tech'
        },
        {
            name: "OYO",
            logo: '/brands/oyo.png',
            category: 'Hospitality'
        },
        {
            name: "Realme",
            logo: '/brands/realme.png',
            category: 'Mobile'
        },
        {
            name: "Style Bazaar",
            logo: '/brands/style-bazaar.png',
            category: 'Fashion'
        },
        {
            name: "Cars24",
            logo: '/brands/cars24.png',
            category: 'Automotive'
        },
        {
            name: "Oppo",
            logo: '/brands/oppo.png',
            category: 'Mobile'
        },
        {
            name: "Royal Stag",
            logo: '/brands/royal-stag.png',
            category: 'Lifestyle'
        },
        {
            name: "Amazon",
            logo: '/brands/amazon.png',
            category: 'E-Commerce'
        }
    ];
    const row2 = [
        {
            name: "Reliance",
            logo: '/brands/reliance.png',
            category: 'Retail'
        },
        {
            name: "Flipkart",
            logo: '/brands/flipkart.png',
            category: 'E-Commerce'
        },
        {
            name: "L'Oréal",
            logo: '/brands/loreal.png',
            category: 'Beauty'
        },
        {
            name: "Samsung",
            logo: '/brands/samsung.png',
            category: 'Electronics'
        },
        {
            name: "Nykaa",
            logo: '/brands/nykaa.png',
            category: 'Beauty'
        },
        {
            name: "JBL",
            logo: '/brands/jbl.png',
            category: 'Audio'
        },
        {
            name: "boAt",
            logo: '/brands/boat.png',
            category: 'Audio'
        },
        {
            name: "Hyundai",
            logo: '/brands/hyundai.png',
            category: 'Automotive'
        },
        {
            name: "Fastrack",
            logo: '/brands/fastrack.png',
            category: 'Fashion'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "brands",
        style: {
            padding: 'clamp(4rem, 10vw, 8rem) 0',
            background: 'var(--black)',
            overflow: 'hidden',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .brands-header, .brands-quote { padding: 0 clamp(1.25rem, 5vw, 2.5rem); }
        .marquee-container { user-select: none; }
        .brand-row-wrap {
          position: relative;
          padding: clamp(0.3rem, 1vw, 0.5rem) 0;
        }
        .brand-row-wrap::before, .brand-row-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: clamp(30px, 6vw, 90px);
          z-index: 2;
          pointer-events: none;
        }
        .brand-row-wrap::before { left: 0; background: linear-gradient(to right, var(--black), transparent); }
        .brand-row-wrap::after  { right: 0; background: linear-gradient(to left, var(--black), transparent); }
        .row-divider {
          width: 100%; height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,168,76,0.1), transparent);
          margin: 0.25rem 0;
        }
        .bottom-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
          padding: 0 clamp(1.25rem, 5vw, 2.5rem);
          max-width: 1100px;
          margin: clamp(3rem, 6vw, 5rem) auto 0;
        }
        @media (max-width: 700px) {
          .bottom-layout {
            grid-template-columns: 1fr;
          }
          .profile-side {
            order: -1;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Brands.jsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "brands-header",
                style: {
                    maxWidth: 1100,
                    margin: '0 auto clamp(2rem, 5vw, 4rem)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.1,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        style: {
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                            fontWeight: 300,
                            color: 'var(--cream)',
                            marginBottom: '0.75rem',
                            lineHeight: 1.2
                        },
                        children: [
                            "Trusted by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontStyle: 'italic',
                                    color: 'var(--gold)'
                                },
                                children: "great brands"
                            }, void 0, false, {
                                fileName: "[project]/components/Brands.jsx",
                                lineNumber: 271,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Brands.jsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.2,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        style: {
                            fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                            color: 'var(--gray)',
                            maxWidth: 500,
                            lineHeight: 1.8
                        },
                        children: "From global giants to homegrown names — building campaigns that feel genuine."
                    }, void 0, false, {
                        fileName: "[project]/components/Brands.jsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Brands.jsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollVelocityProvider, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-row-wrap",
                        style: {
                            marginBottom: '0.25rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                            baseVelocity: 3.5,
                            direction: 1,
                            children: row1.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandCard, {
                                    ...b
                                }, i, false, {
                                    fileName: "[project]/components/Brands.jsx",
                                    lineNumber: 286,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Brands.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Brands.jsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row-divider"
                    }, void 0, false, {
                        fileName: "[project]/components/Brands.jsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-row-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                            baseVelocity: 3.5,
                            direction: -1,
                            children: row2.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandCard, {
                                    ...b
                                }, i, false, {
                                    fileName: "[project]/components/Brands.jsx",
                                    lineNumber: 294,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Brands.jsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Brands.jsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Brands.jsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bottom-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        style: {
                            borderLeft: '1px solid var(--gold-dim)',
                            padding: 'clamp(1.25rem,3vw,2rem) clamp(1.25rem,3vw,2.5rem)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
                                    fontWeight: 300,
                                    fontStyle: 'italic',
                                    lineHeight: 1.6,
                                    color: 'var(--cream-dim)',
                                    marginBottom: '1.25rem'
                                },
                                children: [
                                    '"Content should feel like a conversation,',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Brands.jsx",
                                        lineNumber: 314,
                                        columnNumber: 54
                                    }, this),
                                    'not an advertisement."'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Brands.jsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'Tenor Sans, sans-serif',
                                    fontSize: 'clamp(0.5rem, 1vw, 0.6rem)',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    color: 'var(--gold-dim)'
                                },
                                children: "— Swabhiman Ball"
                            }, void 0, false, {
                                fileName: "[project]/components/Brands.jsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Brands.jsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "profile-side",
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.15,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        },
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                width: 'clamp(200px, 28vw, 320px)',
                                aspectRatio: '3 / 4'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: -10,
                                        left: -10,
                                        width: 40,
                                        height: 40,
                                        borderTop: '1px solid rgba(201,168,76,0.5)',
                                        borderLeft: '1px solid rgba(201,168,76,0.5)',
                                        zIndex: 2,
                                        pointerEvents: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Brands.jsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: -10,
                                        right: -10,
                                        width: 40,
                                        height: 40,
                                        borderBottom: '1px solid rgba(201,168,76,0.5)',
                                        borderRight: '1px solid rgba(201,168,76,0.5)',
                                        zIndex: 2,
                                        pointerEvents: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Brands.jsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/content.jpeg",
                                    alt: "Swabhiman Ball",
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        display: 'block',
                                        filter: 'brightness(0.92) contrast(1.04)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Brands.jsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Brands.jsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Brands.jsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Brands.jsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Brands.jsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_c3 = Brands;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ScrollVelocityProvider");
__turbopack_context__.k.register(_c1, "MarqueeRow");
__turbopack_context__.k.register(_c2, "BrandCard");
__turbopack_context__.k.register(_c3, "Brands");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// ── Confetti ─────────────────────────────────────────────────────────────────
function GoldenConfetti({ active }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoldenConfetti.useEffect": ()=>{
            if (!active) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const colors = [
                '#C9A84C',
                '#E2C97E',
                '#F5E6B2',
                '#B8860B',
                '#FFD700',
                '#FFF8DC'
            ];
            const pieces = Array.from({
                length: 120
            }, {
                "GoldenConfetti.useEffect.pieces": ()=>({
                        x: Math.random() * canvas.width,
                        y: -20 - Math.random() * 200,
                        w: 6 + Math.random() * 8,
                        h: 10 + Math.random() * 6,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        rot: Math.random() * Math.PI * 2,
                        rotSpeed: (Math.random() - 0.5) * 0.15,
                        vx: (Math.random() - 0.5) * 2.5,
                        vy: 2.5 + Math.random() * 3,
                        opacity: 1
                    })
            }["GoldenConfetti.useEffect.pieces"]);
            const draw = {
                "GoldenConfetti.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    let alive = false;
                    pieces.forEach({
                        "GoldenConfetti.useEffect.draw": (p)=>{
                            p.x += p.vx;
                            p.y += p.vy;
                            p.rot += p.rotSpeed;
                            if (p.y > canvas.height * 0.7) p.opacity -= 0.018;
                            if (p.opacity > 0) alive = true;
                            ctx.save();
                            ctx.globalAlpha = Math.max(0, p.opacity);
                            ctx.translate(p.x, p.y);
                            ctx.rotate(p.rot);
                            ctx.fillStyle = p.color;
                            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                            ctx.restore();
                        }
                    }["GoldenConfetti.useEffect.draw"]);
                    if (alive) animRef.current = requestAnimationFrame(draw);
                }
            }["GoldenConfetti.useEffect.draw"];
            animRef.current = requestAnimationFrame(draw);
            return ({
                "GoldenConfetti.useEffect": ()=>cancelAnimationFrame(animRef.current)
            })["GoldenConfetti.useEffect"];
        }
    }["GoldenConfetti.useEffect"], [
        active
    ]);
    if (!active) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            pointerEvents: 'none'
        }
    }, void 0, false, {
        fileName: "[project]/components/Contact.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(GoldenConfetti, "8Ah9mKgKVPuezmrk2gW6S7ZACzU=");
_c = GoldenConfetti;
function Contact() {
    _s1();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        company: '',
        type: '',
        budget: '',
        message: ''
    });
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confetti, setConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleChange = (name, value)=>setForm((p)=>({
                ...p,
                [name]: value
            }));
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzWReSbj8Wxch5KFRuxhgdnNf80ymsTCqDzzXTtDkzq8UAAP4s1LcGSh9RJKD47NGW0zg/exec';
        try {
            const fd = new FormData();
            Object.entries(form).forEach(([key, val])=>fd.append(key, val));
            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: fd,
                mode: 'no-cors'
            });
            setSent(true);
            setConfetti(true);
            setTimeout(()=>setConfetti(false), 4000);
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    const inputStyle = {
        width: '100%',
        padding: '0.85rem 1rem',
        background: 'var(--black-mid)',
        border: '1px solid var(--gray-light)',
        color: 'var(--cream)',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.85rem',
        outline: 'none',
        transition: 'border-color 0.2s',
        boxSizing: 'border-box'
    };
    const labelStyle = {
        fontFamily: 'Tenor Sans, sans-serif',
        fontSize: '0.6rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--gold-dim)',
        display: 'block',
        marginBottom: '0.5rem'
    };
    const typeOptions = [
        {
            value: '',
            label: 'Select type'
        },
        {
            value: 'Sponsored video',
            label: 'Sponsored video'
        },
        {
            value: 'Instagram reel / post',
            label: 'Instagram reel / post'
        },
        {
            value: 'Brand ambassador',
            label: 'Brand ambassador'
        },
        {
            value: 'Product review',
            label: 'Product review'
        },
        {
            value: 'Event coverage',
            label: 'Event coverage'
        },
        {
            value: 'Other',
            label: 'Other'
        }
    ];
    const budgetOptions = [
        {
            value: '',
            label: 'Select budget'
        },
        {
            value: 'Under ₹10,000',
            label: 'Under ₹10,000'
        },
        {
            value: '₹10,000 – ₹30,000',
            label: '₹10,000 – ₹30,000'
        },
        {
            value: '₹30,000 – ₹75,000',
            label: '₹30,000 – ₹75,000'
        },
        {
            value: '₹75,000+',
            label: '₹75,000+'
        },
        {
            value: "Let's discuss",
            label: "Let's discuss"
        }
    ];
    const CustomSelect = ({ name, value, options, placeholder })=>{
        const isOpen = openDropdown === name;
        const selected = options.find((o)=>o.value === value);
        const displayLabel = selected?.value ? selected.label : placeholder;
        const toggle = ()=>setOpenDropdown(isOpen ? null : name);
        const select = (val)=>{
            handleChange(name, val);
            setOpenDropdown(null);
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'relative',
                userSelect: 'none'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: toggle,
                    style: {
                        ...inputStyle,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        borderColor: isOpen ? 'var(--gold-dim)' : 'var(--gray-light)',
                        color: value ? 'var(--cream)' : 'var(--gray)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: displayLabel
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.jsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 12 12",
                            fill: "none",
                            style: {
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s',
                                flexShrink: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2 4l4 4 4-4",
                                stroke: "var(--gold-dim)",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.jsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 'calc(100% + 2px)',
                        left: 0,
                        right: 0,
                        zIndex: 100,
                        background: '#1a1a1a',
                        border: '1px solid var(--gold-dim)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                    },
                    children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>select(opt.value),
                            style: {
                                padding: '0.75rem 1rem',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontFamily: 'DM Sans, sans-serif',
                                color: opt.value === value ? 'var(--gold)' : opt.value === '' ? 'var(--gray)' : 'var(--cream)',
                                background: opt.value === value ? 'rgba(180,140,60,0.12)' : 'transparent',
                                borderLeft: opt.value === value ? '2px solid var(--gold)' : '2px solid transparent',
                                transition: 'all 0.15s'
                            },
                            onMouseEnter: (e)=>{
                                if (opt.value !== value) {
                                    e.currentTarget.style.background = 'rgba(180,140,60,0.07)';
                                    e.currentTarget.style.color = 'var(--cream)';
                                }
                            },
                            onMouseLeave: (e)=>{
                                if (opt.value !== value) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = opt.value === '' ? 'var(--gray)' : 'var(--cream)';
                                }
                            },
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/Contact.jsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Contact.jsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Contact.jsx",
            lineNumber: 134,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoldenConfetti, {
                active: confetti
            }, void 0, false, {
                fileName: "[project]/components/Contact.jsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                style: {
                    padding: '8rem 2rem',
                    background: 'var(--black-soft)'
                },
                onClick: (e)=>{
                    if (!e.target.closest('[data-dropdown]')) setOpenDropdown(null);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 700,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                                    fontWeight: 300,
                                    marginBottom: '0.75rem',
                                    color: 'var(--cream)'
                                },
                                children: [
                                    "Let's create something ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontStyle: 'italic',
                                            color: 'var(--gold)'
                                        },
                                        children: "together"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 188,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact.jsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.9rem',
                                    color: 'var(--gray)',
                                    marginBottom: '3rem',
                                    lineHeight: 1.7
                                },
                                children: "Collabs, campaigns & long-term partnerships — let's chat."
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '3rem',
                                    border: '1px solid var(--gold-dim)',
                                    textAlign: 'center',
                                    animation: 'fadeUp 0.6s ease forwards'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '2.5rem',
                                            marginBottom: '1rem'
                                        },
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'Cormorant Garamond, serif',
                                            fontSize: '1.8rem',
                                            color: 'var(--gold)',
                                            marginBottom: '0.5rem'
                                        },
                                        children: "Message received!"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'var(--gray)',
                                            fontSize: '0.85rem'
                                        },
                                        children: "I'll get back to you within 48 hours."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact.jsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.25rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Your Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.jsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "name",
                                                        value: form.name,
                                                        onChange: (e)=>handleChange('name', e.target.value),
                                                        required: true,
                                                        placeholder: "John Doe",
                                                        style: inputStyle,
                                                        onFocus: (e)=>e.target.style.borderColor = 'var(--gold-dim)',
                                                        onBlur: (e)=>e.target.style.borderColor = 'var(--gray-light)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.jsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Contact.jsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.jsx",
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "email",
                                                        type: "email",
                                                        value: form.email,
                                                        onChange: (e)=>handleChange('email', e.target.value),
                                                        required: true,
                                                        placeholder: "you@brand.com",
                                                        style: inputStyle,
                                                        onFocus: (e)=>e.target.style.borderColor = 'var(--gold-dim)',
                                                        onBlur: (e)=>e.target.style.borderColor = 'var(--gray-light)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.jsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Contact.jsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Company / Agency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "company",
                                                        value: form.company,
                                                        onChange: (e)=>handleChange('company', e.target.value),
                                                        placeholder: "Acme Inc.",
                                                        style: inputStyle,
                                                        onFocus: (e)=>e.target.style.borderColor = 'var(--gold-dim)',
                                                        onBlur: (e)=>e.target.style.borderColor = 'var(--gray-light)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.jsx",
                                                        lineNumber: 239,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Contact.jsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-dropdown": true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "Collaboration Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.jsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                                        name: "type",
                                                        value: form.type,
                                                        options: typeOptions,
                                                        placeholder: "Select type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Contact.jsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-dropdown": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "Budget Range"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Contact.jsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                                name: "budget",
                                                value: form.budget,
                                                options: budgetOptions,
                                                placeholder: "Select budget"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Contact.jsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "Tell me about your idea"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Contact.jsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "message",
                                                value: form.message,
                                                onChange: (e)=>handleChange('message', e.target.value),
                                                required: true,
                                                rows: 5,
                                                placeholder: "What would you like to create together?",
                                                style: {
                                                    ...inputStyle,
                                                    resize: 'vertical',
                                                    lineHeight: 1.7
                                                },
                                                onFocus: (e)=>e.target.style.borderColor = 'var(--gold-dim)',
                                                onBlur: (e)=>e.target.style.borderColor = 'var(--gray-light)'
                                            }, void 0, false, {
                                                fileName: "[project]/components/Contact.jsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmit,
                                        disabled: loading,
                                        style: {
                                            padding: '1rem 2.5rem',
                                            background: loading ? 'var(--gold-dim)' : 'var(--gold)',
                                            color: 'var(--black)',
                                            border: 'none',
                                            cursor: loading ? 'not-allowed' : 'pointer',
                                            fontFamily: 'Tenor Sans, sans-serif',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.25em',
                                            textTransform: 'uppercase',
                                            alignSelf: 'flex-start',
                                            transition: 'all 0.3s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        onMouseEnter: (e)=>{
                                            if (!loading) {
                                                e.currentTarget.style.background = 'var(--gold-light)';
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = loading ? 'var(--gold-dim)' : 'var(--gold)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        },
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: 14,
                                                        height: 14,
                                                        border: '2px solid var(--black)',
                                                        borderTopColor: 'transparent',
                                                        borderRadius: '50%',
                                                        display: 'inline-block',
                                                        animation: 'spin 0.7s linear infinite'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Contact.jsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, this),
                                                "Sending..."
                                            ]
                                        }, void 0, true) : 'Send My Message ✦'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.jsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact.jsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          @media (max-width: 600px) {
            .form-grid { grid-template-columns: 1fr !important; }
            #contact { padding: 5rem 1.25rem !important; }
            #contact button { width: 100%; justify-content: center; }
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/components/Contact.jsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Contact.jsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(Contact, "mEaSHAEmKSjnikALUHBAltgEhqI=");
_c1 = Contact;
var _c, _c1;
__turbopack_context__.k.register(_c, "GoldenConfetti");
__turbopack_context__.k.register(_c1, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Footer() {
    const socials = [
        {
            label: 'YouTube',
            href: 'https://youtube.com/@mrswabhi6394?si=ApXoGhix2WeyDoRH',
            color: '#FF0000',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "#FF0000",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 10,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/mr.swabhi/',
            color: '#E1306C',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "url(#igGrad)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "igGrad",
                            x1: "0%",
                            y1: "100%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#f09433"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "25%",
                                    stopColor: "#e6683c"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#dc2743"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "75%",
                                    stopColor: "#cc2366"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#bc1888"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.jsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        },
        {
            label: 'Facebook',
            href: 'https://www.facebook.com/share/18bWp7Zt2X/?mibextid=wwXIfr',
            color: '#1877F2',
            glowColor: 'rgba(24,119,242,0.4)',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "#1877F2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        },
        {
            label: 'Email',
            href: 'mailto:Swabhiman50@gmail.com',
            color: '#EA4335',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "#EA4335",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }
    ];
    const glowMap = {
        YouTube: 'rgba(255,0,0,0.35)',
        Instagram: 'rgba(220,39,67,0.35)',
        Facebook: 'rgba(24,119,242,0.35)',
        Email: 'rgba(234,67,53,0.35)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            padding: '3rem 2rem',
            background: 'var(--black)',
            borderTop: '1px solid var(--gray-light)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1100,
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1.5rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: '1.2rem',
                            fontWeight: 300,
                            color: 'var(--gold)',
                            letterSpacing: '0.1em',
                            margin: 0
                        },
                        children: "Swabhiman Ball"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '0.75rem',
                            alignItems: 'center'
                        },
                        children: socials.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: s.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: s.label,
                                className: "footer-icon",
                                style: {
                                    '--glow': glowMap[s.label],
                                    width: 42,
                                    height: 42,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    textDecoration: 'none',
                                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.12)';
                                    e.currentTarget.style.boxShadow = `0 8px 24px ${glowMap[s.label]}`;
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                },
                                children: s.icon
                            }, s.label, false, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'Tenor Sans, sans-serif',
                            fontSize: '0.6rem',
                            letterSpacing: '0.1em',
                            color: 'var(--gray)',
                            margin: 0
                        },
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Swabhiman Ball. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 600px) {
          footer > div {
            flex-direction: column !important;
            text-align: center;
            align-items: center !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Preloader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const BLADES = 9;
function getSize() {
    const vmin = Math.min(window.innerWidth, window.innerHeight);
    return Math.round(Math.min(Math.max(vmin * 0.72, 220), 560));
}
function drawIris(ctx, open, tick, S) {
    const CX = S / 2, CY = S / 2, R = S * 0.42;
    ctx.clearRect(0, 0, S, S);
    // ── 1. OUTER BODY: machined aluminium ──
    const bodyR = R * 1.45;
    {
        const g = ctx.createRadialGradient(CX - bodyR * .3, CY - bodyR * .35, bodyR * .05, CX, CY, bodyR * 1.1);
        g.addColorStop(0, "#5a5448");
        g.addColorStop(.15, "#3c3830");
        g.addColorStop(.35, "#6e6558");
        g.addColorStop(.55, "#22201a");
        g.addColorStop(.75, "#4a4438");
        g.addColorStop(1, "#1a1814");
        ctx.beginPath();
        ctx.arc(CX, CY, bodyR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
    }
    ctx.save();
    ctx.beginPath();
    ctx.arc(CX, CY, bodyR, 0, Math.PI * 2);
    ctx.clip();
    for(let i = -S; i < S * 2; i += 3.5){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + S, S);
        ctx.strokeStyle = "rgba(255,255,255,0.014)";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    ctx.restore();
    ctx.beginPath();
    ctx.arc(CX, CY, bodyR, 0, Math.PI * 2);
    ctx.strokeStyle = "#0e0d0a";
    ctx.lineWidth = R * .04;
    ctx.stroke();
    // ── 2. ZOOM BARREL — slow CW rotation with rubber grip ridges ──
    const zoomRot = tick * 0.012;
    const zR = R * 1.38;
    ctx.save();
    ctx.translate(CX, CY);
    ctx.rotate(zoomRot);
    {
        const g = ctx.createLinearGradient(-zR, -zR, zR * .85, zR * .85);
        g.addColorStop(0, "#cfc080");
        g.addColorStop(.07, "#ece8b0");
        g.addColorStop(.17, "#b0982a");
        g.addColorStop(.3, "#7a6818");
        g.addColorStop(.44, "#2a2408");
        g.addColorStop(.56, "#60520a");
        g.addColorStop(.68, "#483c08");
        g.addColorStop(.8, "#c4b060");
        g.addColorStop(.9, "#eee8a8");
        g.addColorStop(1, "#a89040");
        ctx.beginPath();
        ctx.arc(0, 0, zR, 0, Math.PI * 2);
        ctx.strokeStyle = g;
        ctx.lineWidth = R * .16;
        ctx.stroke();
    }
    // rubber grip ridges
    const ridges = 32;
    for(let i = 0; i < ridges; i++){
        const a = i / ridges * Math.PI * 2;
        const r1 = zR - R * .07, r2 = zR + R * .07;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1);
        ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
        ctx.strokeStyle = i % 2 === 0 ? "rgba(20,16,8,.7)" : "rgba(255,220,100,.08)";
        ctx.lineWidth = R * .022;
        ctx.stroke();
    }
    // zoom distance markings
    const dists = [
        "0.3",
        "0.5",
        "1",
        "2",
        "5",
        "∞"
    ];
    dists.forEach((d, i)=>{
        const a = i / dists.length * Math.PI * 2 - Math.PI / 2;
        ctx.save();
        ctx.translate(Math.cos(a) * zR, Math.sin(a) * zR);
        ctx.rotate(a + Math.PI / 2);
        ctx.font = `bold ${R * .06}px 'Courier New', monospace`;
        ctx.fillStyle = "rgba(220,190,100,.8)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(d, 0, 0);
        ctx.restore();
    });
    ctx.restore();
    // zoom ring edge shadows
    ctx.beginPath();
    ctx.arc(CX, CY, zR - R * .07, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(0,0,0,.75)";
    ctx.lineWidth = R * .035;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(CX, CY, zR + R * .07, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(0,0,0,.5)";
    ctx.lineWidth = R * .03;
    ctx.stroke();
    // ── 3. FOCUS RING — counter-rotating with f-stop markings ──
    const focusRot = -tick * 0.00065 * 28;
    const fR = R * 1.185;
    ctx.save();
    ctx.translate(CX, CY);
    ctx.rotate(focusRot);
    ctx.beginPath();
    ctx.arc(0, 0, fR, 0, Math.PI * 2);
    ctx.strokeStyle = "#1a1610";
    ctx.lineWidth = R * .09;
    ctx.stroke();
    const fstops = [
        "1.4",
        "2",
        "2.8",
        "4",
        "5.6",
        "8",
        "11",
        "16"
    ];
    fstops.forEach((f, i)=>{
        const a = i / fstops.length * Math.PI * 2 - Math.PI / 2;
        ctx.save();
        ctx.translate(Math.cos(a) * fR, Math.sin(a) * fR);
        ctx.rotate(a + Math.PI / 2);
        ctx.font = `bold ${R * .068}px 'Courier New', monospace`;
        ctx.fillStyle = i === 0 ? "rgba(255,168,60,.95)" : "rgba(215,190,110,.8)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(f, 0, 0);
        ctx.restore();
    });
    // indicator dot at top of focus ring
    ctx.beginPath();
    ctx.arc(0, -fR, R * .022, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,160,50,.9)";
    ctx.fill();
    ctx.restore();
    // ── 4. APERTURE SCALE RING — slow CW with tick marks ──
    const apRot = tick * 0.007;
    const scR = R * 1.005;
    ctx.save();
    ctx.translate(CX, CY);
    ctx.rotate(apRot);
    for(let i = 0; i < 120; i++){
        const a = i / 120 * Math.PI * 2;
        const maj = i % 15 === 0, mid = i % 5 === 0;
        const r1 = scR * .985, r2 = scR * (maj ? 1.055 : mid ? 1.038 : 1.022);
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1);
        ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
        ctx.strokeStyle = maj ? "rgba(220,190,80,.9)" : mid ? "rgba(180,150,60,.5)" : "rgba(130,110,45,.22)";
        ctx.lineWidth = maj ? R * .016 : R * .008;
        ctx.stroke();
    }
    ctx.restore();
    // static index triangle at 12 o'clock
    ctx.save();
    ctx.translate(CX, CY);
    ctx.beginPath();
    ctx.moveTo(0, -(scR * R + R * .04));
    ctx.lineTo(-R * .018, -(scR * R + R * .09));
    ctx.lineTo(R * .018, -(scR * R + R * .09));
    ctx.closePath();
    ctx.fillStyle = "rgba(255,160,50,.9)";
    ctx.fill();
    ctx.restore();
    // ── 5. INNER LENS GLASS ELEMENT ──
    {
        const g = ctx.createRadialGradient(CX - R * .25, CY - R * .3, R * .03, CX, CY, R);
        g.addColorStop(0, "rgba(38,32,56,.98)");
        g.addColorStop(.2, "rgba(24,18,38,.99)");
        g.addColorStop(.55, "rgba(12,10,20,1)");
        g.addColorStop(.85, "rgba(6,5,12,1)");
        g.addColorStop(1, "rgba(3,2,7,1)");
        ctx.beginPath();
        ctx.arc(CX, CY, R, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
    }
    // ── 6. IRIS BLADES ──
    const spokeLen = R * (1 - open * .93);
    const alpha = Math.max(0, 1 - open * 1.1);
    ctx.save();
    ctx.translate(CX, CY);
    ctx.beginPath();
    ctx.arc(0, 0, R * .99, 0, Math.PI * 2);
    ctx.clip();
    for(let i = 0; i < BLADES; i++){
        const angle = i / BLADES * Math.PI * 2;
        const overlap = .55;
        const a1 = angle - overlap, a2 = angle + Math.PI * 2 / BLADES + overlap;
        const bladeR = spokeLen + R * open * .3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, bladeR, a1, a2);
        ctx.closePath();
        const bx1 = Math.cos(angle) * bladeR * .1, by1 = Math.sin(angle) * bladeR * .1;
        const bx2 = Math.cos(angle) * bladeR * .92, by2 = Math.sin(angle) * bladeR * .92;
        const bg = ctx.createLinearGradient(bx1, by1, bx2, by2);
        const v = i % 3;
        if (v === 0) {
            bg.addColorStop(0, `rgba(34,28,50,${alpha})`);
            bg.addColorStop(.3, `rgba(52,44,70,${alpha * .97})`);
            bg.addColorStop(.65, `rgba(38,32,55,${alpha * .99})`);
            bg.addColorStop(1, `rgba(16,13,24,${alpha})`);
        } else if (v === 1) {
            bg.addColorStop(0, `rgba(28,30,48,${alpha})`);
            bg.addColorStop(.38, `rgba(44,46,68,${alpha * .96})`);
            bg.addColorStop(.7, `rgba(30,32,52,${alpha * .98})`);
            bg.addColorStop(1, `rgba(13,14,24,${alpha})`);
        } else {
            bg.addColorStop(0, `rgba(36,30,44,${alpha})`);
            bg.addColorStop(.42, `rgba(55,46,60,${alpha * .95})`);
            bg.addColorStop(.7, `rgba(36,30,48,${alpha * .98})`);
            bg.addColorStop(1, `rgba(16,12,20,${alpha})`);
        }
        ctx.fillStyle = bg;
        ctx.fill();
        const ea = angle + Math.PI * 2 / BLADES * .44;
        const ex1 = Math.cos(ea) * bladeR * .04, ey1 = Math.sin(ea) * bladeR * .04;
        const ex2 = Math.cos(ea) * bladeR * .92, ey2 = Math.sin(ea) * bladeR * .92;
        const eg = ctx.createLinearGradient(ex1, ey1, ex2, ey2);
        const ev = 1 - open * .93;
        eg.addColorStop(0, "rgba(190,170,100,0)");
        eg.addColorStop(.18, `rgba(215,198,140,${.42 * ev})`);
        eg.addColorStop(.46, `rgba(255,240,190,${.65 * ev})`);
        eg.addColorStop(.68, `rgba(220,200,145,${.42 * ev})`);
        eg.addColorStop(1, "rgba(190,170,100,0)");
        ctx.beginPath();
        ctx.moveTo(ex1, ey1);
        ctx.lineTo(ex2, ey2);
        ctx.strokeStyle = eg;
        ctx.lineWidth = R * .013;
        ctx.stroke();
        if (i % 2 === 0) {
            const sx = Math.cos(angle + .18) * bladeR * .5, sy = Math.sin(angle + .18) * bladeR * .5;
            const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, bladeR * .28);
            sg.addColorStop(0, `rgba(210,195,155,${.06 * (1 - open)})`);
            sg.addColorStop(1, "rgba(210,195,155,0)");
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, bladeR, a1, a2);
            ctx.closePath();
            ctx.fillStyle = sg;
            ctx.fill();
        }
    }
    ctx.restore();
    // ── 7. APERTURE HOLE + DEPTH ──
    const innerR = R * open;
    if (innerR > 2) {
        const holeR = innerR * .78;
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(CX, CY, holeR, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
        ctx.restore();
        for(let i = 0; i < 6; i++){
            const pr = holeR * (1 + i * .055);
            ctx.beginPath();
            ctx.arc(CX, CY, pr, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(170,148,72,${.2 - i * .028})`;
            ctx.lineWidth = R * .007;
            ctx.stroke();
        }
        const tun = ctx.createRadialGradient(CX, CY, 0, CX, CY, holeR);
        tun.addColorStop(0, "rgba(0,0,0,.99)");
        tun.addColorStop(.45, "rgba(2,2,7,.88)");
        tun.addColorStop(.82, "rgba(18,14,8,.4)");
        tun.addColorStop(1, "rgba(90,68,20,.08)");
        ctx.beginPath();
        ctx.arc(CX, CY, holeR, 0, Math.PI * 2);
        ctx.fillStyle = tun;
        ctx.fill();
    }
    // ── 8. AR MULTI-COATING SHIMMER ──
    ctx.save();
    ctx.beginPath();
    ctx.arc(CX, CY, R * .99, 0, Math.PI * 2);
    ctx.clip();
    [
        [
            CX - R * .34,
            CY - R * .4,
            R * .7,
            "rgba(35,75,210,.12)",
            "rgba(55,28,175,.06)"
        ],
        [
            CX + R * .3,
            CY + R * .35,
            R * .58,
            "rgba(16,155,115,.09)",
            "rgba(8,115,95,.04)"
        ],
        [
            CX + R * .08,
            CY - R * .52,
            R * .42,
            "rgba(205,138,35,.07)",
            "rgba(180,115,18,.03)"
        ]
    ].forEach(([x, y, r, c0, c1])=>{
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, c0);
        g.addColorStop(.45, c1);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
    });
    {
        const g = ctx.createRadialGradient(CX - R * .44, CY - R * .48, 0, CX - R * .44, CY - R * .48, R * .35);
        g.addColorStop(0, "rgba(255,255,255,.3)");
        g.addColorStop(.28, "rgba(240,242,255,.13)");
        g.addColorStop(.62, "rgba(220,225,255,.04)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
    }
    {
        const g = ctx.createRadialGradient(CX + R * .38, CY - R * .52, 0, CX + R * .38, CY - R * .52, R * .09);
        g.addColorStop(0, "rgba(255,255,255,.5)");
        g.addColorStop(.5, "rgba(255,255,255,.17)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
    }
    {
        const g = ctx.createRadialGradient(CX + R * .42, CY + R * .44, 0, CX + R * .42, CY + R * .44, R * .2);
        g.addColorStop(0, "rgba(110,148,255,.07)");
        g.addColorStop(.5, "rgba(80,120,220,.03)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
    }
    ctx.restore();
    // ── 9. CENTRE GLOW (closed state) ──
    const glowA = .94 - open * .75;
    if (glowA > .02) {
        const glowRad = R * .06 + open * R * .15;
        const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, glowRad * 4.5);
        grd.addColorStop(0, `rgba(255,248,195,${glowA})`);
        grd.addColorStop(.18, `rgba(235,200,95,${glowA * .76})`);
        grd.addColorStop(.5, `rgba(185,140,45,${glowA * .36})`);
        grd.addColorStop(1, "rgba(120,85,15,0)");
        ctx.beginPath();
        ctx.arc(CX, CY, glowRad * 4.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
    }
    // ── 10. OUTER VIGNETTE ──
    {
        const g = ctx.createRadialGradient(CX, CY, R * .88, CX, CY, R * 1.45);
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(.5, `rgba(0,0,0,${.18 * (1 - open * .6)})`);
        g.addColorStop(1, "rgba(0,0,0,.55)");
        ctx.beginPath();
        ctx.arc(CX, CY, R * 1.45, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
    }
}
function Preloader({ onComplete }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelTRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelBRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const barTRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const barBRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(320);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        open: 0,
        breathT: 0,
        tick: 0,
        phase: "breathing"
    });
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function applySize() {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const s = getSize();
        sizeRef.current = s;
        canvas.width = s;
        canvas.height = s;
        canvas.style.width = s + "px";
        canvas.style.height = s + "px";
        if (ringRef.current) {
            const rs = Math.round(s * 1.16) + "px";
            ringRef.current.style.width = rs;
            ringRef.current.style.height = rs;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            applySize();
            function onResize() {
                applySize();
                const ctx = canvas.getContext("2d");
                drawIris(ctx, stateRef.current.open, stateRef.current.tick, sizeRef.current);
            }
            window.addEventListener("resize", onResize);
            const ctx = canvas.getContext("2d");
            drawIris(ctx, 0, 0, sizeRef.current);
            function loop() {
                const s = stateRef.current;
                s.tick++;
                const ctx2 = canvas.getContext("2d");
                if (s.phase === "breathing") {
                    s.breathT += 0.011;
                    s.open = 0.03 + Math.sin(s.breathT) * 0.025;
                    drawIris(ctx2, s.open, s.tick, sizeRef.current);
                    rafRef.current = requestAnimationFrame(loop);
                } else if (s.phase === "opening") {
                    s.open += 0.018;
                    if (s.open >= 1) {
                        s.open = 1;
                        s.phase = "done";
                        drawIris(ctx2, 1, s.tick, sizeRef.current);
                        onIrisOpen();
                        return;
                    }
                    drawIris(ctx2, s.open, s.tick, sizeRef.current);
                    rafRef.current = requestAnimationFrame(loop);
                }
            }
            rafRef.current = requestAnimationFrame(loop);
            return ({
                "Preloader.useEffect": ()=>{
                    cancelAnimationFrame(rafRef.current);
                    window.removeEventListener("resize", onResize);
                }
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], []);
    function onIrisOpen() {
        const panelT = panelTRef.current;
        const panelB = panelBRef.current;
        const barT = barTRef.current;
        const barB = barBRef.current;
        const ring = ringRef.current;
        const canvas = canvasRef.current;
        if (ring) ring.style.opacity = "0";
        if (canvas) {
            canvas.style.transition = "opacity 0.5s ease";
            canvas.style.opacity = "0";
        }
        const mk = (pos)=>{
            const d = document.createElement("div");
            d.style.cssText = `position:absolute;${pos}:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#C9A84C 25%,#F0D07A 50%,#C9A84C 75%,transparent);`;
            return d;
        };
        if (panelT) {
            panelT.innerHTML = "";
            panelT.appendChild(mk("bottom"));
        }
        if (panelB) {
            panelB.innerHTML = "";
            panelB.appendChild(mk("top"));
        }
        if (panelT) {
            panelT.style.transition = "transform 0.95s cubic-bezier(0.76,0,0.24,1)";
            panelT.style.transform = "translateY(-100%)";
        }
        if (panelB) {
            panelB.style.transition = "transform 0.95s cubic-bezier(0.76,0,0.24,1)";
            panelB.style.transform = "translateY(100%)";
        }
        if (barT) {
            barT.style.transition = "transform 1.15s cubic-bezier(0.76,0,0.24,1)";
            barT.style.transform = "translateY(-100%)";
        }
        if (barB) {
            barB.style.transition = "transform 1.15s cubic-bezier(0.76,0,0.24,1)";
            barB.style.transform = "translateY(100%)";
        }
        setTimeout(()=>{
            setDone(true);
            if (onComplete) onComplete();
        }, 950);
    }
    function triggerOpen() {
        const s = stateRef.current;
        if (s.phase !== "breathing") return;
        cancelAnimationFrame(rafRef.current);
        s.phase = "opening";
        const canvas = canvasRef.current;
        function openLoop() {
            s.tick++;
            s.open += 0.018;
            const ctx = canvas?.getContext("2d");
            if (s.open >= 1) {
                s.open = 1;
                s.phase = "done";
                if (ctx) drawIris(ctx, 1, s.tick, sizeRef.current);
                onIrisOpen();
                return;
            }
            if (ctx) drawIris(ctx, s.open, s.tick, sizeRef.current);
            rafRef.current = requestAnimationFrame(openLoop);
        }
        rafRef.current = requestAnimationFrame(openLoop);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            const t = setTimeout(triggerOpen, 1500);
            return ({
                "Preloader.useEffect": ()=>clearTimeout(t)
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], []);
    if (done) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .pl-wrap {
          position: fixed; inset: 0;
          background: radial-gradient(ellipse 80% 80% at 50% 50%,
            #0d0b14 0%, #07060a 50%, #030208 100%
          );
          z-index: 9999; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .pl-wrap::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 55% 55% at 50% 50%,
            transparent 20%, rgba(0,0,0,0.85) 100%
          );
          pointer-events: none; z-index: 1;
        }
        .pl-bar-top, .pl-bar-bot {
          position: absolute; left: 0; right: 0;
          height: 44px; background: #000; z-index: 40;
        }
        .pl-bar-top { top: 0; }
        .pl-bar-bot { bottom: 0; }
        .pl-ring {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(180,155,70,0.12);
          z-index: 28;
          transition: opacity 0.4s;
          animation: plPulse 2.8s ease-in-out infinite;
          pointer-events: none;
        }
        .pl-ring::before {
          content: ''; position: absolute; inset: -24px;
          border-radius: 50%;
          border: 0.5px solid rgba(160,135,60,0.06);
        }
        .pl-ring::after {
          content: ''; position: absolute; inset: -50px;
          border-radius: 50%;
          border: 0.5px solid rgba(140,115,50,0.03);
        }
        canvas.pl-iris {
          position: relative; z-index: 30; display: block;
          border-radius: 50%;
          filter:
            drop-shadow(0 0 30px rgba(170,135,45,0.3))
            drop-shadow(0 0 80px rgba(110,80,15,0.15))
            drop-shadow(0 0 160px rgba(70,50,8,0.08));
          transition: opacity 0.5s ease;
        }
        .pl-panel-top, .pl-panel-bot {
          position: absolute; left: 0; right: 0;
          height: 50%; z-index: 20;
          background: #030208;
        }
        .pl-panel-top { top: 0; }
        .pl-panel-bot { bottom: 0; }
        @keyframes plPulse {
          0%,100% { transform: translate(-50%,-50%) scale(0.975); opacity: 0.45; }
          50%      { transform: translate(-50%,-50%) scale(1.025); opacity: 0.9;  }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/Preloader.jsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-bar-top",
                        ref: barTRef
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.jsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-bar-bot",
                        ref: barBRef
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.jsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-panel-top",
                        ref: panelTRef
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.jsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-panel-bot",
                        ref: panelBRef
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.jsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-ring",
                        ref: ringRef
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.jsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        className: "pl-iris",
                        ref: canvasRef
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.jsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Preloader.jsx",
                lineNumber: 466,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Preloader, "Fd8nV0DGo74VxnNnSHkVwxMdJDg=");
_c = Preloader;
var _c;
__turbopack_context__.k.register(_c, "Preloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PreloaderWrapper.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreloaderWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Preloader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Preloader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PreloaderWrapper() {
    _s();
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (done) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Preloader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onComplete: ()=>setDone(true)
    }, void 0, false, {
        fileName: "[project]/components/PreloaderWrapper.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_s(PreloaderWrapper, "0mz8s7cWzSmcGyoUdgXTliy2Hjc=");
_c = PreloaderWrapper;
var _c;
__turbopack_context__.k.register(_c, "PreloaderWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0q~wj63._.js.map