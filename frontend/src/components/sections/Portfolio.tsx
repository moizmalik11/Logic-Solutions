import React from 'react';
import { getPortfolios } from '../../services/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import PortfolioClient from './PortfolioClient';
import { AnimatedSection } from '../ui/AnimatedSection';

export default async function Portfolio() {
    try {
        const portfolioData = await getPortfolios();

        if (!portfolioData || portfolioData.length === 0) {
            return null;
        }

        return (
            <section id="portfolio" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <SectionHeader title="Our Work" subtitle="Explore our latest projects" />
                    <PortfolioClient items={portfolioData} />
                </AnimatedSection>
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch portfolio:", error);
        return <div className="p-8 text-center text-red-500">Failed to load Portfolio section</div>;
    }
}
