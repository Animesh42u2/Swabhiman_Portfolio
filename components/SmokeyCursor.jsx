"use client";
import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const dotRef  = useRef(null);
  const posRef  = useRef({ x: -200, y: -200 });
  const rafRef  = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const TAIL = 28;
    const segments = [];

    for (let i = 0; i < TAIL; i++) {
      const el = document.createElement("div");
      const progress = i / TAIL;
      const size = Math.max(2, 14 * (1 - progress));  // 14px → 2px
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
      const b = Math.round(76  + (122 - 76)  * (1 - progress));
      el.style.background = `rgba(${r},${g},${b},${opacity})`;
      el.style.boxShadow  = i < 6
        ? `0 0 ${10 - i}px rgba(240,208,122,${0.7 - progress * 0.7})`
        : "none";

      document.body.appendChild(el);
      segments.push({ el, x: -200, y: -200 });
    }

    const onMove = (e) => { posRef.current = { x: e.clientX, y: e.clientY }; };
    const onDown = () => { dot.style.transform = "translate(-50%,-50%) scale(0.6)"; };
    const onUp   = () => { dot.style.transform = "translate(-50%,-50%) scale(1)"; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    function tick() {
      const { x, y } = posRef.current;

      dot.style.left = x + "px";
      dot.style.top  = y + "px";

      let prevX = x, prevY = y;
      for (let i = 0; i < segments.length; i++) {
        const s = segments[i];
        const speed = 0.42 - i * 0.012;
        s.x += (prevX - s.x) * speed;
        s.y += (prevY - s.y) * speed;
        s.el.style.left = s.x + "px";
        s.el.style.top  = s.y + "px";
        prevX = s.x;
        prevY = s.y;
      }

      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      segments.forEach(s => s.el.remove());
    };
  }, []);

  return (
    <>
      <style>{`*, *::before, *::after { cursor: none !important; }`}</style>

      {/* Lead dot */}
      <div ref={dotRef} style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "16px",
        height:        "16px",
        borderRadius:  "50%",
        background:    "#F0D07A",
        transform:     "translate(-50%,-50%)",
        pointerEvents: "none",
        zIndex:        99999,
        transition:    "transform 0.1s ease",
        boxShadow:     "0 0 10px rgba(240,208,122,1), 0 0 24px rgba(201,168,76,0.8), 0 0 44px rgba(201,168,76,0.4)",
        willChange:    "left, top",
      }} />
    </>
  );
}
