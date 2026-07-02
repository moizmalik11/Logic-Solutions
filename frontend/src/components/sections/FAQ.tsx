import React from 'react';
import { getFaqs } from '../../services/faq';
import { SectionHeader } from '../ui/SectionHeader';
import FAQClient from './FAQClient';

export default async function FAQ() {
    try {
        const faqsData = await getFaqs();

        if (!faqsData || faqsData.length === 0) {
            return null;
        }

        return (
            <section id="faq" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="Frequently Asked Questions" subtitle="Find answers to common questions" />
                    <FAQClient faqs={faqsData} />
                </div>
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch FAQs:", error);
        return <div className="p-8 text-center text-red-500">Failed to load FAQ section</div>;
    }
}
