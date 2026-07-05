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
                    end: "+=500%", // Larger scroll distance for slower, controlled speed
                    pin: true,
                    scrub: 1.5, // Smooth but responsive lag time
                    pinSpacing: true,
                }
            });

            // ── Phase 1 (0.0 -> 1.2): Hero slides up and fades
            tl.to(heroRef.current, {
                yPercent: -100,
                opacity: 0,
                scale: 0.95,
                ease: 'power2.inOut',
                duration: 1.2,
            }, 0);
            
            tl.set(heroRef.current, { pointerEvents: "none" }, 1.2);

            // ── Phase 2 (1.2 -> 3.2): About words reveal word-by-word (snaps word-by-word clearly)
            if (words.length > 0) {
                tl.to(words, {
                    opacity: 1,
                    fontWeight: '700',
                    stagger: 0.08, // Wider spacing between starts
                    duration: 0.2, // Very short individual duration = snaps one-by-one, no swipe!
                    ease: 'power1.out',
                }, 1.2);
            }

            // ── Phase 3 (2.5 -> 4.8): Calligraphy line draws (starts after words are underway)
            if (path) {
                const pathLen = path.getTotalLength() || 2500;
                gsap.set(path, { strokeDasharray: pathLen, strokeDashoffset: pathLen });

                tl.to(path, {
                    strokeDashoffset: 0,
                    ease: 'power2.inOut',
                    duration: 2.3,
                }, 2.5);
            }

            // ── Phase 4 (4.8 -> 5.0): Dot pops in
            if (dot) {
                gsap.set(dot, { opacity: 0, scale: 0, transformOrigin: 'center' });
                tl.to(dot, {
                    opacity: 1,
                    scale: 1,
                    ease: 'back.out(2.2)',
                    duration: 0.2,
                }, 4.8);
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
