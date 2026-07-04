'use client';

import React, { useState } from 'react';
import { Faq } from '../../types';

interface FAQClientProps {
    faqs: Faq[];
}

export default function FAQClient({ faqs }: FAQClientProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto divide-y divide-light-border/40 dark:divide-dark-border/40 border-t border-b border-light-border/40 dark:border-dark-border/40">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={faq.id} className="py-6 md:py-8 transition-colors duration-300">
                        <button
                            className="w-full text-left flex justify-between items-center focus:outline-none group gap-6"
                            onClick={() => toggle(index)}
                        >
                            <span className={`heading-md transition-colors duration-300 ${
                                isOpen ? 'text-brand-wood' : 'group-hover:text-brand-wood'
                            }`}>
                                {faq.question}
                            </span>
                            
                            {/* Minimal Plus/Minus Indicator */}
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-light-border/60 dark:border-dark-border/60 transition-all duration-300 group-hover:border-brand-wood">
                                {isOpen ? (
                                    <svg className="w-4 h-4 text-brand-wood" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 text-light-textMuted dark:text-dark-textMuted group-hover:text-brand-wood" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                )}
                            </span>
                        </button>
                        
                        {/* Smooth Slide Down Panel */}
                        <div 
                            className={`overflow-hidden transition-all duration-500 ease-out ${
                                isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
                            }`}
                        >
                            <p className="body-base">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
