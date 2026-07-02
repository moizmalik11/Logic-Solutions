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
        <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
                <div key={faq.id} className="border-b border-gray-200">
                    <button
                        className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none hover:bg-gray-50"
                        onClick={() => toggle(index)}
                    >
                        <span className="font-medium text-lg">{faq.question}</span>
                        <span className="text-2xl text-gray-400">
                            {openIndex === index ? '−' : '+'}
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="py-4 px-2 text-gray-600">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
