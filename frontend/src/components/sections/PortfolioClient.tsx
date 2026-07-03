'use client';

import React, { useState } from 'react';
import { Portfolio } from '../../types';
import { Card } from '../ui/Card';
import Image from 'next/image';

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
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeCategory === category 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-200'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden p-0 flex flex-col group">
                        <div className="relative w-full h-56 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                                {item.category}
                            </span>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600 flex-1">{item.description}</p>
                            
                            {item.url && (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-primary-600 font-medium hover:underline inline-flex items-center">
                                    View Project <span className="ml-1">&rarr;</span>
                                </a>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
            
            {filteredItems.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No projects found in this category.
                </div>
            )}
        </div>
    );
}
