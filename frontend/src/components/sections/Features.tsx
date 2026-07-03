import React from 'react';
import { getFeatures } from '../../services/features';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export default async function Features() {
    try {
        const featuresData = await getFeatures();

        if (!featuresData || featuresData.length === 0) {
            return null;
        }

        return (
            <section id="features" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="Why Choose Us" subtitle="Our key features that set us apart" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuresData.map((feature) => (
                            <Card key={feature.id} className="text-center hover:shadow-lg transition-shadow">
                                <div className="mb-4 text-4xl text-indigo-600">
                                    <i className={`icon-${feature.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch features:", error);
        return <div className="p-8 text-center text-red-500">Failed to load Features section</div>;
    }
}
