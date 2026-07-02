import React from 'react';
import { getPortfolios } from '../../services/portfolio';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export default async function Portfolio() {
    try {
        const portfolioData = await getPortfolios();

        if (!portfolioData || portfolioData.length === 0) {
            return null;
        }

        return (
            <section id="portfolio" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="Our Work" subtitle="Explore our latest projects" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioData.map((item) => (
                            <Card key={item.id} className="overflow-hidden p-0 flex flex-col">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex-1 flex flex-col">
                                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 flex-1">{item.description}</p>
                                    
                                    {item.url && (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 hover:underline">
                                            View Project &rarr;
                                        </a>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch portfolio:", error);
        return <div className="p-8 text-center text-red-500">Failed to load Portfolio section</div>;
    }
}
