'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Service } from '../../types';
import Image from 'next/image';

const SERVICE_IMAGES = [
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop', // Web Dev
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop', // Mobile
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop', // AI / Machine Learning
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop', // UI/UX
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop', // Data / Analytics
];

export default function ServicesClient({ items }: { items: Service[] }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Triple the items to enable infinite scrolling in both directions
    const tripleItems = [...items, ...items, ...items];

    // Set scroll position to the center set of items on mount
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Let content render, then scroll to center copy
            setTimeout(() => {
                container.scrollLeft = container.scrollWidth / 3;
            }, 100);
        }
    }, [items]);

    // Handle seamless infinite scroll boundaries
    const handleScrollEvent = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const oneThird = container.scrollWidth / 3;
        
        // If scrolled past the second third, jump back to the middle set
        if (container.scrollLeft >= oneThird * 2) {
            container.scrollLeft -= oneThird;
        }
        // If scrolled before the second third, jump forward to the middle set
        else if (container.scrollLeft <= 0) {
            container.scrollLeft += oneThird;
        }
    };

    // Auto-scroll loop
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const isMobile = window.innerWidth < 768;
            const cardWidth = (isMobile ? 300 : 380) + 24; // Width + gap

            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }, 4000); // Transition every 4 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleArrowClick = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const isMobile = window.innerWidth < 768;
        const cardWidth = (isMobile ? 300 : 380) + 24; // Width + gap

        if (direction === 'left') {
            container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="py-16 lg:py-24 bg-transparent border-t border-light-border/20 dark:border-dark-border/20 overflow-hidden w-full transition-all">
            {/* Custom CSS to hide scrollbars completely */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none !important;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none !important;
                    scrollbar-width: none !important;
                }
                .carousel-track {
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                }
                @media (min-width: 768px) {
                    .carousel-track {
                        padding-left: calc(max(3rem, (100vw - 1400px) / 2 + 3rem));
                        padding-right: calc(max(3rem, (100vw - 1400px) / 2 + 3rem));
                    }
                }
            `}</style>

            <div className="w-full">
                
                {/* Header Row: Same-size title block (Top = Black, Bottom = Grey) */}
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10 border-b border-light-border/10 dark:border-dark-border/10 pb-6">
                    <div className="space-y-2 flex flex-col items-start">
                        <span className="eyebrow block">
                            What We Do
                        </span>
                        <h2 className="heading-xl">
                            Our Services.
                        </h2>
                    </div>
                </div>

                {/* Scroller Area: Breaks out to screen edges */}
                <div 
                    className="relative w-full group/scroller"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    
                    {/* Left Navigation Chevron - White drop-shadowed arrow for maximum visibility */}
                    <button
                        onClick={() => handleArrowClick('left')}
                        className="absolute left-2 md:left-8 top-[calc(50%-8px)] -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all duration-300 p-2 active:scale-95 hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                        aria-label="Previous service"
                    >
                        <svg className="w-9 h-9 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Navigation Chevron - White drop-shadowed arrow for maximum visibility */}
                    <button
                        onClick={() => handleArrowClick('right')}
                        className="absolute right-2 md:right-8 top-[calc(50%-8px)] -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all duration-300 p-2 active:scale-95 hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                        aria-label="Next service"
                    >
                        <svg className="w-9 h-9 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Horizontal Scroller Container with hidden scrollbars and responsive calculations */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScrollEvent}
                        className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pb-4 carousel-track"
                    >
                        {tripleItems.map((service, idx) => {
                            const bgImage = SERVICE_IMAGES[idx % SERVICE_IMAGES.length];
                            return (
                                <div
                                    key={`${service.id}-${idx}`}
                                    className="flex-shrink-0 w-[300px] md:w-[380px] h-[440px] md:h-[500px] relative rounded-none overflow-hidden shadow-soft border border-light-border/20 dark:border-dark-border/20 group cursor-pointer snap-start"
                                >
                                    {/* Card Background Image: Blurred by default, clear on hover */}
                                    <div className="absolute inset-0 transition-all duration-700 ease-in-out filter blur-[3px] group-hover:blur-none scale-100 group-hover:scale-105">
                                        <Image
                                            src={bgImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 300px, 380px"
                                            priority={idx < 6}
                                        />
                                    </div>

                                    {/* Dark Glass Overlay: Visible by default, transparent on hover */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-500 z-10" />

                                    {/* Card Content: Visible by default, fades out on hover */}
                                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-95">
                                        {/* Card Title using dynamic Brand wood/accent colors */}
                                        <h3 className="heading-md text-brand-wood dark:text-brand-wood mb-4 tracking-tight drop-shadow-sm">
                                            {service.title}
                                        </h3>
                                        {/* Description */}
                                        <p className="body-base text-zinc-100/90 dark:text-zinc-200/90 drop-shadow">
                                            {service.description.length > 95
                                                ? `${service.description.substring(0, 95)}...`
                                                : service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
