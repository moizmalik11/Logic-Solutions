'use client';

import React, { useState } from 'react';
import { Portfolio } from '../../types';
import Image from 'next/image';

const LOCAL_IMAGES = [
    '/images/portfolio_brand.png',
    '/images/portfolio_web.png',
    '/images/portfolio_saas.png',
];

export default function PortfolioClient({ items }: { items: Portfolio[] }) {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    
    // Get unique categories
    const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
    
    // Filter items
    const filteredItems = activeCategory === 'All' 
        ? items 
        : items.filter(item => item.category === activeCategory);

    return (
        <div className="w-full">
            {/* Minimal Underlined Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 border-b border-light-border/20 dark:border-dark-border/20 pb-4">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`relative pb-4 text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
                            activeCategory === category 
                            ? 'text-brand-wood' 
                            : 'text-light-textMuted dark:text-dark-textMuted hover:text-light-text dark:hover:text-dark-text'
                        }`}
                    >
                        {category}
                        {activeCategory === category && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-wood rounded-full animate-fade-in-up" />
                        )}
                    </button>
                ))}
            </div>

            {/* Premium Borderless Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredItems.map((item, idx) => {
                    const localImg = LOCAL_IMAGES[idx % LOCAL_IMAGES.length];
                    return (
                        <div key={item.id} className="group flex flex-col bg-transparent relative">
                            
                            {/* Graphic Visual container with Grayscale hover effect */}
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm mb-6 border border-light-border/30 dark:border-dark-border/30 bg-light-surfaceMuted dark:bg-dark-surfaceMuted">
                                <div className="absolute inset-0 bg-brand-wood/5 group-hover:bg-brand-wood/0 transition-colors duration-500 z-10 mix-blend-overlay" />
                                <Image 
                                    src={localImg} 
                                    alt={item.title} 
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-[1s] ease-out" 
                                />
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col flex-1 space-y-3 mt-4">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="eyebrow">
                                        {item.category}
                                    </span>
                                </div>
                                
                                <h3 className="heading-md group-hover:text-brand-wood transition-colors duration-300">
                                    {item.title}
                                </h3>
                                
                                <p className="body-base">
                                    {item.description}
                                </p>
                                
                                {item.url && (
                                    <a 
                                        href={item.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-sm font-bold text-light-text dark:text-dark-text hover:text-brand-wood dark:hover:text-brand-wood inline-flex items-center gap-2 group/link transition-colors pt-2"
                                    >
                                        Explore Project
                                        <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                                            &rarr;
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {filteredItems.length === 0 && (
                <div className="text-center py-12 text-light-textMuted dark:text-dark-textMuted">
                    No projects found in this category.
                </div>
            )}
        </div>
    );
}
