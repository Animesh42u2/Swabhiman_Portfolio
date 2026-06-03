"use client";
import { useEffect, useRef, useState } from "react";

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
    g.addColorStop(0,   "#5a5448"); g.addColorStop(.15, "#3c3830");
    g.addColorStop(.35, "#6e6558"); g.addColorStop(.55, "#22201a");
    g.addColorStop(.75, "#4a4438"); g.addColorStop(1,   "#1a1814");
    ctx.beginPath(); ctx.arc(CX, CY, bodyR, 0, Math.PI * 2);
    ctx.fillStyle = g; ctx.fill();
  }
  ctx.save();
  ctx.beginPath(); ctx.arc(CX, CY, bodyR, 0, Math.PI * 2); ctx.clip();
  for (let i = -S; i < S * 2; i += 3.5) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + S, S);
    ctx.strokeStyle = "rgba(255,255,255,0.014)"; ctx.lineWidth = 1; ctx.stroke();
  }
  ctx.restore();
  ctx.beginPath(); ctx.arc(CX, CY, bodyR, 0, Math.PI * 2);
  ctx.strokeStyle = "#0e0d0a"; ctx.lineWidth = R * .04; ctx.stroke();

  // ── 2. ZOOM BARREL — slow CW rotation with rubber grip ridges ──
  const zoomRot = tick * 0.012;
  const zR = R * 1.38;
  ctx.save();
  ctx.translate(CX, CY); ctx.rotate(zoomRot);
  {
    const g = ctx.createLinearGradient(-zR, -zR, zR * .85, zR * .85);
    g.addColorStop(0,    "#cfc080"); g.addColorStop(.07, "#ece8b0");
    g.addColorStop(.17,  "#b0982a"); g.addColorStop(.3,  "#7a6818");
    g.addColorStop(.44,  "#2a2408"); g.addColorStop(.56, "#60520a");
    g.addColorStop(.68,  "#483c08"); g.addColorStop(.8,  "#c4b060");
    g.addColorStop(.9,   "#eee8a8"); g.addColorStop(1,   "#a89040");
    ctx.beginPath(); ctx.arc(0, 0, zR, 0, Math.PI * 2);
    ctx.strokeStyle = g; ctx.lineWidth = R * .16; ctx.stroke();
  }
  // rubber grip ridges
  const ridges = 32;
  for (let i = 0; i < ridges; i++) {
    const a = (i / ridges) * Math.PI * 2;
    const r1 = zR - R * .07, r2 = zR + R * .07;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1);
    ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
    ctx.strokeStyle = i % 2 === 0 ? "rgba(20,16,8,.7)" : "rgba(255,220,100,.08)";
    ctx.lineWidth = R * .022; ctx.stroke();
  }
  // zoom distance markings
  const dists = ["0.3","0.5","1","2","5","∞"];
  dists.forEach((d, i) => {
    const a = (i / dists.length) * Math.PI * 2 - Math.PI / 2;
    ctx.save();
    ctx.translate(Math.cos(a) * zR, Math.sin(a) * zR);
    ctx.rotate(a + Math.PI / 2);
    ctx.font = `bold ${R * .06}px 'Courier New', monospace`;
    ctx.fillStyle = "rgba(220,190,100,.8)";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(d, 0, 0);
    ctx.restore();
  });
  ctx.restore();
  // zoom ring edge shadows
  ctx.beginPath(); ctx.arc(CX, CY, zR - R * .07, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(0,0,0,.75)"; ctx.lineWidth = R * .035; ctx.stroke();
  ctx.beginPath(); ctx.arc(CX, CY, zR + R * .07, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(0,0,0,.5)";  ctx.lineWidth = R * .03;  ctx.stroke();

  // ── 3. FOCUS RING — counter-rotating with f-stop markings ──
  const focusRot = -tick * 0.00065 * 28;
  const fR = R * 1.185;
  ctx.save();
  ctx.translate(CX, CY); ctx.rotate(focusRot);
  ctx.beginPath(); ctx.arc(0, 0, fR, 0, Math.PI * 2);
  ctx.strokeStyle = "#1a1610"; ctx.lineWidth = R * .09; ctx.stroke();
  const fstops = ["1.4","2","2.8","4","5.6","8","11","16"];
  fstops.forEach((f, i) => {
    const a = (i / fstops.length) * Math.PI * 2 - Math.PI / 2;
    ctx.save();
    ctx.translate(Math.cos(a) * fR, Math.sin(a) * fR);
    ctx.rotate(a + Math.PI / 2);
    ctx.font = `bold ${R * .068}px 'Courier New', monospace`;
    ctx.fillStyle = i === 0 ? "rgba(255,168,60,.95)" : "rgba(215,190,110,.8)";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(f, 0, 0);
    ctx.restore();
  });
  // indicator dot at top of focus ring
  ctx.beginPath(); ctx.arc(0, -fR, R * .022, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,160,50,.9)"; ctx.fill();
  ctx.restore();

  // ── 4. APERTURE SCALE RING — slow CW with tick marks ──
  const apRot = tick * 0.007;
  const scR = R * 1.005;
  ctx.save();
  ctx.translate(CX, CY); ctx.rotate(apRot);
  for (let i = 0; i < 120; i++) {
    const a = (i / 120) * Math.PI * 2;
    const maj = i % 15 === 0, mid = i % 5 === 0;
    const r1 = scR * .985, r2 = scR * (maj ? 1.055 : mid ? 1.038 : 1.022);
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1);
    ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
    ctx.strokeStyle = maj ? "rgba(220,190,80,.9)" : mid ? "rgba(180,150,60,.5)" : "rgba(130,110,45,.22)";
    ctx.lineWidth = maj ? R * .016 : R * .008; ctx.stroke();
  }
  ctx.restore();

  // static index triangle at 12 o'clock
  ctx.save(); ctx.translate(CX, CY);
  ctx.beginPath();
  ctx.moveTo(0, -(scR * R + R * .04));
  ctx.lineTo(-R * .018, -(scR * R + R * .09));
  ctx.lineTo(R * .018,  -(scR * R + R * .09));
  ctx.closePath();
  ctx.fillStyle = "rgba(255,160,50,.9)"; ctx.fill();
  ctx.restore();

  // ── 5. INNER LENS GLASS ELEMENT ──
  {
    const g = ctx.createRadialGradient(CX - R * .25, CY - R * .3, R * .03, CX, CY, R);
    g.addColorStop(0,   "rgba(38,32,56,.98)"); g.addColorStop(.2,  "rgba(24,18,38,.99)");
    g.addColorStop(.55, "rgba(12,10,20,1)");   g.addColorStop(.85, "rgba(6,5,12,1)");
    g.addColorStop(1,   "rgba(3,2,7,1)");
    ctx.beginPath(); ctx.arc(CX, CY, R, 0, Math.PI * 2);
    ctx.fillStyle = g; ctx.fill();
  }

  // ── 6. IRIS BLADES ──
  const spokeLen = R * (1 - open * .93);
  const alpha = Math.max(0, 1 - open * 1.1);
  ctx.save();
  ctx.translate(CX, CY);
  ctx.beginPath(); ctx.arc(0, 0, R * .99, 0, Math.PI * 2); ctx.clip();
  for (let i = 0; i < BLADES; i++) {
    const angle = (i / BLADES) * Math.PI * 2;
    const overlap = .55;
    const a1 = angle - overlap, a2 = angle + (Math.PI * 2 / BLADES) + overlap;
    const bladeR = spokeLen + R * open * .3;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, bladeR, a1, a2); ctx.closePath();
    const bx1 = Math.cos(angle) * bladeR * .1, by1 = Math.sin(angle) * bladeR * .1;
    const bx2 = Math.cos(angle) * bladeR * .92, by2 = Math.sin(angle) * bladeR * .92;
    const bg = ctx.createLinearGradient(bx1, by1, bx2, by2);
    const v = i % 3;
    if (v === 0) {
      bg.addColorStop(0,   `rgba(34,28,50,${alpha})`);  bg.addColorStop(.3,  `rgba(52,44,70,${alpha * .97})`);
      bg.addColorStop(.65, `rgba(38,32,55,${alpha * .99})`); bg.addColorStop(1, `rgba(16,13,24,${alpha})`);
    } else if (v === 1) {
      bg.addColorStop(0,   `rgba(28,30,48,${alpha})`);  bg.addColorStop(.38, `rgba(44,46,68,${alpha * .96})`);
      bg.addColorStop(.7,  `rgba(30,32,52,${alpha * .98})`); bg.addColorStop(1, `rgba(13,14,24,${alpha})`);
    } else {
      bg.addColorStop(0,   `rgba(36,30,44,${alpha})`);  bg.addColorStop(.42, `rgba(55,46,60,${alpha * .95})`);
      bg.addColorStop(.7,  `rgba(36,30,48,${alpha * .98})`); bg.addColorStop(1, `rgba(16,12,20,${alpha})`);
    }
    ctx.fillStyle = bg; ctx.fill();
    const ea = angle + (Math.PI * 2 / BLADES) * .44;
    const ex1 = Math.cos(ea) * bladeR * .04, ey1 = Math.sin(ea) * bladeR * .04;
    const ex2 = Math.cos(ea) * bladeR * .92, ey2 = Math.sin(ea) * bladeR * .92;
    const eg = ctx.createLinearGradient(ex1, ey1, ex2, ey2);
    const ev = 1 - open * .93;
    eg.addColorStop(0,   "rgba(190,170,100,0)");
    eg.addColorStop(.18, `rgba(215,198,140,${.42 * ev})`);
    eg.addColorStop(.46, `rgba(255,240,190,${.65 * ev})`);
    eg.addColorStop(.68, `rgba(220,200,145,${.42 * ev})`);
    eg.addColorStop(1,   "rgba(190,170,100,0)");
    ctx.beginPath(); ctx.moveTo(ex1, ey1); ctx.lineTo(ex2, ey2);
    ctx.strokeStyle = eg; ctx.lineWidth = R * .013; ctx.stroke();
    if (i % 2 === 0) {
      const sx = Math.cos(angle + .18) * bladeR * .5, sy = Math.sin(angle + .18) * bladeR * .5;
      const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, bladeR * .28);
      sg.addColorStop(0, `rgba(210,195,155,${.06 * (1 - open)})`);
      sg.addColorStop(1, "rgba(210,195,155,0)");
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, bladeR, a1, a2); ctx.closePath();
      ctx.fillStyle = sg; ctx.fill();
    }
  }
  ctx.restore();

  // ── 7. APERTURE HOLE + DEPTH ──
  const innerR = R * open;
  if (innerR > 2) {
    const holeR = innerR * .78;
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath(); ctx.arc(CX, CY, holeR, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,0,1)"; ctx.fill();
    ctx.restore();
    for (let i = 0; i < 6; i++) {
      const pr = holeR * (1 + i * .055);
      ctx.beginPath(); ctx.arc(CX, CY, pr, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(170,148,72,${.2 - i * .028})`;
      ctx.lineWidth = R * .007; ctx.stroke();
    }
    const tun = ctx.createRadialGradient(CX, CY, 0, CX, CY, holeR);
    tun.addColorStop(0,   "rgba(0,0,0,.99)");  tun.addColorStop(.45, "rgba(2,2,7,.88)");
    tun.addColorStop(.82, "rgba(18,14,8,.4)"); tun.addColorStop(1,   "rgba(90,68,20,.08)");
    ctx.beginPath(); ctx.arc(CX, CY, holeR, 0, Math.PI * 2);
    ctx.fillStyle = tun; ctx.fill();
  }

  // ── 8. AR MULTI-COATING SHIMMER ──
  ctx.save();
  ctx.beginPath(); ctx.arc(CX, CY, R * .99, 0, Math.PI * 2); ctx.clip();
  [
    [CX - R * .34, CY - R * .4,  R * .7,  "rgba(35,75,210,.12)",  "rgba(55,28,175,.06)"],
    [CX + R * .3,  CY + R * .35, R * .58, "rgba(16,155,115,.09)", "rgba(8,115,95,.04)"],
    [CX + R * .08, CY - R * .52, R * .42, "rgba(205,138,35,.07)", "rgba(180,115,18,.03)"],
  ].forEach(([x, y, r, c0, c1]) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, c0); g.addColorStop(.45, c1); g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g; ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
  });
  {
    const g = ctx.createRadialGradient(CX - R * .44, CY - R * .48, 0, CX - R * .44, CY - R * .48, R * .35);
    g.addColorStop(0, "rgba(255,255,255,.3)"); g.addColorStop(.28, "rgba(240,242,255,.13)");
    g.addColorStop(.62, "rgba(220,225,255,.04)"); g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g; ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
  }
  {
    const g = ctx.createRadialGradient(CX + R * .38, CY - R * .52, 0, CX + R * .38, CY - R * .52, R * .09);
    g.addColorStop(0, "rgba(255,255,255,.5)"); g.addColorStop(.5, "rgba(255,255,255,.17)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g; ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
  }
  {
    const g = ctx.createRadialGradient(CX + R * .42, CY + R * .44, 0, CX + R * .42, CY + R * .44, R * .2);
    g.addColorStop(0, "rgba(110,148,255,.07)"); g.addColorStop(.5, "rgba(80,120,220,.03)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g; ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
  }
  ctx.restore();

  // ── 9. CENTRE GLOW (closed state) ──
  const glowA = .94 - open * .75;
  if (glowA > .02) {
    const glowRad = R * .06 + open * R * .15;
    const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, glowRad * 4.5);
    grd.addColorStop(0,   `rgba(255,248,195,${glowA})`);
    grd.addColorStop(.18, `rgba(235,200,95,${glowA * .76})`);
    grd.addColorStop(.5,  `rgba(185,140,45,${glowA * .36})`);
    grd.addColorStop(1,   "rgba(120,85,15,0)");
    ctx.beginPath(); ctx.arc(CX, CY, glowRad * 4.5, 0, Math.PI * 2);
    ctx.fillStyle = grd; ctx.fill();
  }

  // ── 10. OUTER VIGNETTE ──
  {
    const g = ctx.createRadialGradient(CX, CY, R * .88, CX, CY, R * 1.45);
    g.addColorStop(0,  "rgba(0,0,0,0)");
    g.addColorStop(.5, `rgba(0,0,0,${.18 * (1 - open * .6)})`);
    g.addColorStop(1,  "rgba(0,0,0,.55)");
    ctx.beginPath(); ctx.arc(CX, CY, R * 1.45, 0, Math.PI * 2);
    ctx.fillStyle = g; ctx.fill();
  }
}

export default function Preloader({ onComplete }) {
  const canvasRef = useRef(null);
  const panelTRef = useRef(null);
  const panelBRef = useRef(null);
  const barTRef   = useRef(null);
  const barBRef   = useRef(null);
  const ringRef   = useRef(null);
  const rafRef    = useRef(null);
  const sizeRef   = useRef(320);
  const stateRef  = useRef({ open: 0, breathT: 0, tick: 0, phase: "breathing" });
  const [done, setDone] = useState(false);

  function applySize() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const s = getSize();
    sizeRef.current = s;
    canvas.width  = s;
    canvas.height = s;
    canvas.style.width  = s + "px";
    canvas.style.height = s + "px";
    if (ringRef.current) {
      const rs = Math.round(s * 1.16) + "px";
      ringRef.current.style.width  = rs;
      ringRef.current.style.height = rs;
    }
  }

  useEffect(() => {
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
          s.open = 1; s.phase = "done";
          drawIris(ctx2, 1, s.tick, sizeRef.current);
          onIrisOpen();
          return;
        }
        drawIris(ctx2, s.open, s.tick, sizeRef.current);
        rafRef.current = requestAnimationFrame(loop);
      }
    }
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function onIrisOpen() {
    const panelT = panelTRef.current;
    const panelB = panelBRef.current;
    const barT   = barTRef.current;
    const barB   = barBRef.current;
    const ring   = ringRef.current;
    const canvas = canvasRef.current;

    if (ring)   ring.style.opacity = "0";
    if (canvas) { canvas.style.transition = "opacity 0.5s ease"; canvas.style.opacity = "0"; }

    const mk = (pos) => {
      const d = document.createElement("div");
      d.style.cssText = `position:absolute;${pos}:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#C9A84C 25%,#F0D07A 50%,#C9A84C 75%,transparent);`;
      return d;
    };
    if (panelT) { panelT.innerHTML = ""; panelT.appendChild(mk("bottom")); }
    if (panelB) { panelB.innerHTML = ""; panelB.appendChild(mk("top")); }

    if (panelT) { panelT.style.transition = "transform 0.95s cubic-bezier(0.76,0,0.24,1)"; panelT.style.transform = "translateY(-100%)"; }
    if (panelB) { panelB.style.transition = "transform 0.95s cubic-bezier(0.76,0,0.24,1)"; panelB.style.transform = "translateY(100%)"; }
    if (barT)   { barT.style.transition   = "transform 1.15s cubic-bezier(0.76,0,0.24,1)"; barT.style.transform   = "translateY(-100%)"; }
    if (barB)   { barB.style.transition   = "transform 1.15s cubic-bezier(0.76,0,0.24,1)"; barB.style.transform   = "translateY(100%)"; }

    setTimeout(() => { setDone(true); if (onComplete) onComplete(); }, 950);
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
        s.open = 1; s.phase = "done";
        if (ctx) drawIris(ctx, 1, s.tick, sizeRef.current);
        onIrisOpen();
        return;
      }
      if (ctx) drawIris(ctx, s.open, s.tick, sizeRef.current);
      rafRef.current = requestAnimationFrame(openLoop);
    }
    rafRef.current = requestAnimationFrame(openLoop);
  }

  useEffect(() => {
    const t = setTimeout(triggerOpen, 1500);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <>
      <style>{`
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
      `}</style>

      <div className="pl-wrap">
        <div className="pl-bar-top" ref={barTRef} />
        <div className="pl-bar-bot" ref={barBRef} />
        <div className="pl-panel-top" ref={panelTRef} />
        <div className="pl-panel-bot" ref={panelBRef} />
        <div className="pl-ring" ref={ringRef} />
        <canvas className="pl-iris" ref={canvasRef} />
      </div>
    </>
  );
}