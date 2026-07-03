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
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <button
                        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500"
                        onClick={() => toggle(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className={`font-medium text-lg transition-colors duration-300 ${openIndex === index ? 'text-primary-600' : 'text-gray-900'}`}>{faq.question}</span>
                        <span className={`text-2xl transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary-600' : 'text-gray-400'}`}>
                            ↓
                        </span>
                    </button>
                    
                    <div 
                        className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                        <div className="overflow-hidden">
                            <div className="py-4 px-6 text-gray-600 border-t border-gray-100">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
