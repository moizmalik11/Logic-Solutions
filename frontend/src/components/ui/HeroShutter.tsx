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

            // Master Timeline that pins the entire page for smooth coordination
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=380%", // 100% for Hero slide/fade, 280% for About animations
                    pin: true,
                    scrub: 2, // Slow, elegant drag feel (feels like painter's brush)
                    pinSpacing: true,
                }
            });

            // ── Phase 1 (0.0 -> 1.0): Hero slides up and fades to reveal About underneath
            tl.to(heroRef.current, {
                yPercent: -100,
                opacity: 0,
                scale: 0.95,
                ease: 'none',
                duration: 1.0,
            }, 0);
            
            tl.set(heroRef.current, { pointerEvents: "none" }, 1.0);

            // ── Phase 2 (1.0 -> 2.5): About words reveal word-by-word
            if (words.length > 0) {
                tl.to(words, {
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'none',
                    duration: 1.5,
                }, 1.0);
            }

            // ── Phase 3 (1.5 -> 3.6): Calligraphy line draws (extremely slow, 0.5x speed)
            // Starts after ~33% of word reveal (approx. 2 lines of text) and draws very slowly
            if (path) {
                const pathLen = path.getTotalLength() || 2500;
                gsap.set(path, { strokeDasharray: pathLen, strokeDashoffset: pathLen });

                tl.to(path, {
                    strokeDashoffset: 0,
                    ease: 'power1.inOut',
                    duration: 2.1, // Stretched duration for slow 0.5x brush stroke speed
                }, 1.5);
            }

            // ── Phase 4 (3.6 -> 3.8): Dot pops in
            if (dot) {
                gsap.set(dot, { opacity: 0, scale: 0, transformOrigin: 'center' });
                tl.to(dot, {
                    opacity: 1,
                    scale: 1,
                    ease: 'back.out(2.5)',
                    duration: 0.2,
                }, 3.6);
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
