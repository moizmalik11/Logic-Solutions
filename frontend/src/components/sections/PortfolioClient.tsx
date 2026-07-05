'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Portfolio } from '../../types';
import Image from 'next/image';
import gsap from 'gsap';

export default function PortfolioClient({ items }: { items: Portfolio[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

    const activeItem = items[currentIndex];
    const activeImage = activeItem.image;

    // Auto-play setup
    useEffect(() => {
        if (isAutoplayPaused) {
            if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
            return;
        }

        autoplayTimerRef.current = setInterval(() => {
            handleNext();
        }, 5000); // Rotate every 5 seconds

        return () => {
            if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
        };
    }, [currentIndex, isAutoplayPaused, items.length]);

    const handleNext = () => {
        animateSlideChange((currentIndex + 1) % items.length);
    };

    const handlePrev = () => {
        animateSlideChange((currentIndex - 1 + items.length) % items.length);
    };

    const handleDotClick = (index: number) => {
        if (index === currentIndex) return;
        animateSlideChange(index);
    };

    // GSAP Slider Transition Animation
    const animateSlideChange = (nextIndex: number) => {
        const textElements = textContainerRef.current?.children;
        const imageElement = imageContainerRef.current?.querySelector('.project-img');
        const overlayElement = imageContainerRef.current?.querySelector('.project-overlay');

        if (!textElements || !imageElement) {
            // Fallback state change if DOM not fully ready
            setCurrentIndex(nextIndex);
            return;
        }

        // 1. Fade out current content
        const tl = gsap.timeline({
            onComplete: () => {
                // Update state in the middle of transition
                setCurrentIndex(nextIndex);
            }
        });

        // Text slide out down and fade out
        tl.to(Array.from(textElements), {
            y: 15,
            opacity: 0,
            stagger: 0.05,
            duration: 0.3,
            ease: 'power2.in'
        }, 0);

        // Image zoom out and fade out
        tl.to(imageElement, {
            scale: 0.95,
            opacity: 0,
            duration: 0.35,
            ease: 'power2.in'
        }, 0);

        // Flash dynamic overlay
        if (overlayElement) {
            tl.to(overlayElement, {
                opacity: 0.4,
                duration: 0.2,
                ease: 'none'
            }, 0.1);
        }

        // 2. Animate next content in (GSAP handles entering state change in timeline)
        tl.add(() => {
            // The state has updated, trigger entering animations
            gsap.fromTo(Array.from(textElements), 
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.08, duration: 0.45, ease: 'power2.out' }
            );

            gsap.fromTo(imageElement,
                { scale: 1.05, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
            );

            if (overlayElement) {
                gsap.to(overlayElement, {
                    opacity: 0,
                    duration: 0.4,
                    ease: 'none'
                });
            }
        });
    };

    if (!items || items.length === 0) {
        return (
            <div className="text-center py-12 text-light-textMuted dark:text-dark-textMuted">
                No projects found.
            </div>
        );
    }

    return (
        <div 
            className="w-full relative px-4 md:px-12"
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
        >
            {/* Left Chevron Button */}
            <button
                onClick={handlePrev}
                className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/90 dark:bg-zinc-900/90 text-brand-wood hover:text-white border border-light-border dark:border-dark-border hover:bg-brand-wood dark:hover:bg-brand-wood flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
                aria-label="Previous project"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Right Chevron Button */}
            <button
                onClick={handleNext}
                className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/90 dark:bg-zinc-900/90 text-brand-wood hover:text-white border border-light-border dark:border-dark-border hover:bg-brand-wood dark:hover:bg-brand-wood flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
                aria-label="Next project"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Main 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[460px]">
                
                {/* Left Column: Project Details (stagger animated) */}
                <div ref={textContainerRef} className="lg:col-span-5 space-y-5 text-left order-2 lg:order-1">
                    {/* Category Eyebrow */}
                    <span className="eyebrow block tracking-widest">
                        {activeItem.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                        {activeItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg font-light text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                        {activeItem.description}
                    </p>

                    {/* Explore Link */}
                    {activeItem.url && (
                        <div className="pt-4">
                            <a 
                                href={activeItem.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group/link inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white hover:text-brand-wood dark:hover:text-brand-wood transition-colors pt-2"
                            >
                                Explore Project
                                <span className="transform transition-transform duration-300 group-hover/link:translate-x-2">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    )}
                </div>

                {/* Right Column: Project Image (sharp corners, grayscale transition on hover) */}
                <div 
                    ref={imageContainerRef} 
                    className="lg:col-span-7 relative aspect-[16/10] w-full rounded-none overflow-hidden border border-light-border/20 dark:border-dark-border/20 shadow-soft order-1 lg:order-2 bg-zinc-100 dark:bg-zinc-900/40"
                >
                    {/* Entering/Leaving Image */}
                    <div className="project-img absolute inset-0 w-full h-full">
                        <Image 
                            src={activeImage} 
                            alt={activeItem.title} 
                            fill
                            priority
                            className="object-cover transition-all duration-700 ease-out filter grayscale hover:grayscale-0" 
                            sizes="(max-width: 1024px) 100vw, 700px"
                        />
                    </div>

                    {/* Flash Overlay used during slide transitions */}
                    <div className="project-overlay absolute inset-0 bg-brand-wood opacity-0 pointer-events-none z-10 mix-blend-overlay" />
                </div>
            </div>

            {/* Bottom Centered Navigation Dots */}
            <div className="flex justify-center gap-3 mt-12">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                            index === currentIndex
                                ? 'bg-brand-wood border-brand-wood scale-110 shadow-sm'
                                : 'border-zinc-300 dark:border-zinc-700 hover:border-brand-wood hover:scale-105'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
