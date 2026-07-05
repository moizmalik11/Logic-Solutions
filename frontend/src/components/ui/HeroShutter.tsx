'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeroShutter({ hero, children }: { hero: React.ReactNode; children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (heroRef.current && contentRef.current && containerRef.current) {
            const words = document.querySelectorAll('.about-word');
            const path = document.querySelector('#about-brush-path') as SVGPathElement;
            const dot = document.querySelector('#about-brush-dot') as SVGCircleElement;

            // Hint GPU about upcoming animated elements
            gsap.set(heroRef.current, { willChange: 'transform, opacity', force3D: true });
            if (path) gsap.set(path, { willChange: 'stroke-dashoffset' });

            // Master Timeline — scrub:1 is the sweet spot: responsive yet smooth
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=600%",
                    pin: true,
                    scrub: 1,
                    pinSpacing: true,
                    anticipatePin: 1,
                }
            });

            // ── Phase 1 (0.0 -> 1.2): Hero slides up — GPU-only transforms
            tl.to(heroRef.current, {
                yPercent: -100,
                opacity: 0,
                scale: 0.95,
                ease: 'power2.inOut',
                force3D: true,
                duration: 1.2,
            }, 0);
            
            tl.set(heroRef.current, { pointerEvents: "none" }, 1.2);

            // ── Phase 2 (1.2 -> 3.2): Words fade in — opacity only (no layout-triggering props)
            if (words.length > 0) {
                tl.to(words, {
                    opacity: 1,
                    stagger: 0.06,
                    duration: 0.15,
                    ease: 'none',
                    force3D: true,
                }, 1.2);
            }

            // ── Phase 3 (2.5 -> 6.0): Calligraphy line draws (Starts mid-way through words, lasts longer)
            if (path) {
                const pathLen = path.getTotalLength() || 2500;
                gsap.set(path, { strokeDasharray: pathLen, strokeDashoffset: pathLen });

                tl.to(path, {
                    strokeDashoffset: 0,
                    ease: 'power2.inOut',
                    duration: 3.5, // Increased duration for a slower draw
                }, 2.5);
            }

            // ── Phase 4 (6.0 -> 6.2): Dot pops in at the very end
            if (dot) {
                gsap.set(dot, { opacity: 0, scale: 0, transformOrigin: 'center' });
                tl.to(dot, {
                    opacity: 1,
                    scale: 1,
                    ease: 'back.out(2.2)',
                    duration: 0.2,
                }, 6.0);
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden">
            {/* Hero section on top (z-20) */}
            <div 
                ref={heroRef} 
                className="relative z-20 w-full h-screen bg-black overflow-hidden"
            >
                {hero}
            </div>
            
            {/* Content section pinned stationary underneath (z-10) */}
            <div 
                ref={contentRef} 
                className="relative z-10 -mt-[100vh] w-full min-h-screen bg-transparent"
            >
                {children}
            </div>
        </div>
    );
}
