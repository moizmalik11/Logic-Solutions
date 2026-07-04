'use client';

import React, { useEffect, useRef } from 'react';

export default function ParticleWave() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let W = window.innerWidth;
        let H = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;
        let mouseX = W * 0.7;
        let mouseY = H * 0.5;
        let tMX = W * 0.7;
        let tMY = H * 0.5;
        let frame = 0;

        const setup = () => {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width = W + 'px';
            canvas.style.height = H + 'px';
            ctx.scale(dpr, dpr);
        };
        setup();

        window.addEventListener('resize', setup);
        window.addEventListener('mousemove', (e) => { tMX = e.clientX; tMY = e.clientY; });

        const SEP = 40;
        const NX = 130;
        const NY = 50;

        const draw = () => {
            mouseX += (tMX - mouseX) * 0.04;
            mouseY += (tMY - mouseY) * 0.04;

            const isDark = document.documentElement.classList.contains('dark');
            ctx.clearRect(0, 0, W, H);

            const t = frame * 0.012;

            for (let ix = 0; ix < NX; ix++) {
                for (let iy = 0; iy < NY; iy++) {
                    // 3D base position — push field to bottom-right for drama
                    const bx = ix * SEP - (NX * SEP) / 2;
                    const bz = iy * SEP - (NY * SEP) / 2 + 900;

                    // wave height
                    const wave =
                        Math.sin((ix * 0.18) + t) * 45 +
                        Math.sin((iy * 0.22) + t * 1.1) * 35 +
                        Math.sin((ix + iy) * 0.12 + t * 0.8) * 20;

                    // perspective
                    const fov = 380;
                    const scale = fov / (fov + bz);
                    if (scale <= 0) continue;

                    // subtle mouse parallax
                    const pShiftX = (mouseX - W * 0.5) * 0.06 * (bz / 900);
                    const pShiftY = (mouseY - H * 0.5) * 0.04 * (bz / 900);

                    const px = W * 0.5 + (bx + pShiftX) * scale;
                    const py = H * 0.62 + (wave + pShiftY) * scale;

                    if (px < -20 || px > W + 20 || py < -20 || py > H + 20) continue;

                    // mouse influence — gentle rise
                    const dx = px - mouseX;
                    const dy = py - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const RADIUS = 380;

                    let dotSize = scale * 1.6;
                    let alpha = scale * (isDark ? 0.45 : 0.3);

                    if (dist < RADIUS) {
                        const f = (RADIUS - dist) / RADIUS;
                        const ripple = Math.sin((dist / RADIUS) * Math.PI * 2) * f * 40;
                        // we adjust the drawn y (we already computed px/py, apply offset)
                        const ry = py - ripple;
                        dotSize += f * 1.2;
                        alpha = Math.min(alpha + f * 0.4, 0.9);

                        const fog = Math.max(0, 1 - bz / 2800);
                        ctx.fillStyle = isDark
                            ? `rgba(255,255,255,${alpha * fog})`
                            : `rgba(0,0,0,${alpha * fog})`;
                        ctx.beginPath();
                        ctx.arc(px, ry, Math.max(0.3, dotSize), 0, Math.PI * 2);
                        ctx.fill();
                        continue;
                    }

                    const fog = Math.max(0, 1 - bz / 2800);
                    ctx.fillStyle = isDark
                        ? `rgba(255,255,255,${alpha * fog})`
                        : `rgba(0,0,0,${alpha * fog})`;
                    ctx.beginPath();
                    ctx.arc(px, py, Math.max(0.3, dotSize), 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Gradient mask — heavy top fade so text reads perfectly
            const gTop = ctx.createLinearGradient(0, 0, 0, H * 0.55);
            gTop.addColorStop(0, isDark ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)');
            gTop.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gTop;
            ctx.fillRect(0, 0, W, H * 0.55);

            // Gradient mask — edges
            const gEdge = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.65);
            gEdge.addColorStop(0, 'rgba(0,0,0,0)');
            gEdge.addColorStop(1, isDark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.85)');
            ctx.fillStyle = gEdge;
            ctx.fillRect(0, 0, W, H);

            frame++;
            requestAnimationFrame(draw);
        };

        const raf = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', setup);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0"
            style={{ pointerEvents: 'auto' }}
        />
    );
}
