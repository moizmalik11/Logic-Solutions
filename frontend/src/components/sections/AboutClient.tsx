'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AboutData {
    title: string;
    body: string;
}

export default function AboutClient({ data }: { data: AboutData }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef    = useRef<HTMLParagraphElement>(null);
    const svgPathRef = useRef<SVGPathElement>(null);
    const dotRef     = useRef<SVGCircleElement>(null);

    // Clean content to remove any em-dashes or double-dashes for a professional tech copy
    const cleanedBody = data.body
        .replace(/\s*—\s*/g, ', including ')
        .replace(/\s*--\s*/g, ', including ');

    // All words are visible but dim (opacity-25) at start, switching colors based on light/dark mode
    const words = cleanedBody.split(' ').map((word, i) => (
        <span key={i} className="about-word inline-block mr-[0.35em] text-zinc-900 dark:text-white opacity-25">
            {word}
        </span>
    ));

    useEffect(() => {
        // Initial setup for the SVG path length and state
        const path = svgPathRef.current;
        const dot = dotRef.current;
        if (path) {
            const pathLen = path.getTotalLength();
            gsap.set(path, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
        }
        if (dot) {
            gsap.set(dot, { opacity: 0, scale: 0, transformOrigin: 'center' });
        }
    }, []);

    return (
        <section 
            ref={sectionRef} 
            id="about" 
            className="h-screen bg-transparent relative overflow-hidden flex flex-col items-center justify-center w-full"
        >
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Glowing 'Logic' Signature Path spanning full viewport width */}
            <svg 
                className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[400px] pointer-events-none z-0" 
                viewBox="0 0 1000 300" 
                preserveAspectRatio="none"
            >
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="35%" stopColor="#FBBF24" />
                    <stop offset="70%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComponentTransfer in="blur" result="glow1">
                      <feFuncA type="linear" slope="0.8" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="glow1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Custom continuous cursive path for "Logic" with entry and exit tails spanning from 0 to 1000 */}
                <path 
                    ref={svgPathRef}
                    id="about-brush-path"
                    d="
                        M 0,150 
                        L 300,150 
                        C 280,100 280,30 320,20 
                        C 360,10 370,100 330,160 
                        C 310,195 285,180 300,155 
                        C 320,130 380,140 420,140 
                        C 450,140 480,100 480,100 
                        C 480,75 450,75 435,100 
                        C 420,125 450,155 480,125 
                        C 500,105 515,105 530,105
                        C 550,105 565,90 565,90 
                        C 565,65 535,65 520,90 
                        C 505,115 535,145 565,130 
                        L 565,210 
                        C 565,250 520,250 515,220 
                        C 510,190 550,165 590,130
                        C 610,110 625,100 625,100 
                        L 625,140 
                        C 625,145 640,145 655,140
                        C 670,125 685,110 700,110 
                        C 680,110 665,130 685,150 
                        C 705,170 735,155 765,140
                        L 1000,140
                    "
                    fill="none" 
                    stroke="url(#goldGradient)"
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    style={{ transform: 'rotate(-1.5deg)', transformOrigin: 'center' }}
                />
                {/* Dot for 'i' (appears when drawn) */}
                <circle ref={dotRef} id="about-brush-dot" cx="625" cy="70" r="4.5" fill="#FBBF24" filter="url(#glow)" />
            </svg>

            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center h-full">
                
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 dark:text-white mb-10 text-center transition-colors">
                    {data.title || "About Us"}
                </h2>
                
                {/* Text Container */}
                <div className="relative">
                    
                    {/* Paragraph with word-by-word reveal */}
                    <p ref={textRef} className="text-lg md:text-xl lg:text-2xl leading-[1.7] md:leading-[1.8] text-left font-sans font-light tracking-wide select-none relative z-10 max-w-4xl mx-auto transition-colors">
                        {words}
                    </p>
                </div>

                {/* Bottom Right Link with micro-animation */}
                <div className="mt-12 text-right relative z-20 max-w-4xl mx-auto">
                    <a 
                        href="#contact" 
                        className="group inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 text-base font-medium"
                    >
                        Learn More About Us 
                        <span className="transform group-hover:translate-x-2 transition-transform duration-300 font-bold">&rarr;</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
