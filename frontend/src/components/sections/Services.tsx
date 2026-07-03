import React from 'react';
import { getServices } from '../../services/services';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export default async function Services() {
    try {
        const servicesData = await getServices();

        if (!servicesData || servicesData.length === 0) {
            return (
                <section id="services" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Our Services" subtitle="No services available at the moment." />
                </section>
            );
        }

        return (
            <section id="services" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="Our Services" subtitle="What we offer to help your business grow" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesData.map((service) => (
                            <Card key={service.id} className="text-center">
                                {/* Normally an icon component would be rendered here based on service.icon */}
                                <div className="mb-4 text-4xl text-primary-600">
                                    <i className={`icon-${service.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch services:", error);
        return <div className="p-8 text-center text-red-500">Failed to load Services section</div>;
    }
}
