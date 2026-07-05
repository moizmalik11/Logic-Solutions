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
            <section id="portfolio" className="py-16 lg:py-24 bg-transparent relative">
                <AnimatedSection className="max-w-7xl mx-auto px-5 lg:px-8">
                    <SectionHeader title="Our Work" subtitle="Explore our latest projects" />
                    <PortfolioClient items={portfolioData} />
                </AnimatedSection>
            </section>
        );
    } catch {
        return <div className="p-8 text-center text-red-500">Failed to load Portfolio section</div>;
    }
}
