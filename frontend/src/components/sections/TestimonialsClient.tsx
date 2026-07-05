'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Testimonial } from '../../types';
import Image from 'next/image';

export default function TestimonialsClient({ items }: { items: Testimonial[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
            setIsAnimating(false);
        }, 300);
    }, [isAnimating, items.length]);

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
            setIsAnimating(false);
        }, 300);
    }, [isAnimating, items.length]);

    // Auto-scroll functionality
    useEffect(() => {
        if (isHovered) return;
        
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // Auto-change every 5 seconds

        return () => clearInterval(timer);
    }, [handleNext, isHovered]);

    if (!items || items.length === 0) return null;

    const current = items[currentIndex];

    return (
        <section 
            id="testimonials" 
            className="py-16 lg:py-24 bg-transparent border-t border-light-border/20 dark:border-dark-border/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative">
                <span className="eyebrow block mb-6">
                    Client Success
                </span>
                
                {/* Large Quote Mark */}
                <div className="text-brand-wood/10 text-8xl font-serif absolute -top-8 left-4 select-none pointer-events-none">
                    “
                </div>

                {/* Testimonial Quote Frame */}
                <div className={`transition-all duration-300 min-h-[180px] flex items-center justify-center ${
                    isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                    <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-light-text dark:text-dark-text font-normal italic">
                        &quot;{current.quote}&quot;
                    </p>
                </div>

                {/* Divider Line */}
                <div className="w-16 h-[2px] bg-brand-wood mx-auto my-8 rounded-full" />

                {/* Profile Visual Info */}
                <div className={`flex flex-col items-center gap-3 transition-opacity duration-300 ${
                    isAnimating ? 'opacity-0' : 'opacity-100'
                }`}>
                    {current.avatar ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-soft border border-light-border/40 dark:border-dark-border/40">
                            <Image 
                                src={current.avatar} 
                                alt={current.client_name} 
                                fill
                                className="object-cover" 
                            />
                        </div>
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-light-surfaceMuted dark:bg-dark-surfaceMuted flex items-center justify-center text-xl font-bold text-light-textMuted dark:text-dark-textMuted border border-light-border/40 dark:border-dark-border/40">
                            {current.client_name.charAt(0)}
                        </div>
                    )}
                    <div>
                        <h4 className="text-base font-bold text-light-text dark:text-dark-text">
                            {current.client_name}
                        </h4>
                        <p className="eyebrow mt-1">
                            {current.role}, {current.company}
                        </p>
                    </div>
                </div>

                {/* Sleek Arrow Controls */}
                <div className="flex justify-center gap-6 mt-12">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="w-12 h-12 rounded-full border border-light-border/60 dark:border-dark-border/60 flex items-center justify-center text-light-textMuted dark:text-dark-textMuted hover:border-brand-wood hover:text-brand-wood hover:bg-brand-wood/5 transition-all active:scale-95"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        className="w-12 h-12 rounded-full border border-light-border/60 dark:border-dark-border/60 flex items-center justify-center text-light-textMuted dark:text-dark-textMuted hover:border-brand-wood hover:text-brand-wood hover:bg-brand-wood/5 transition-all active:scale-95"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
