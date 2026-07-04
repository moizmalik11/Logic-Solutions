import React from 'react';
import { getFeatures } from '../../services/features';
import { AnimatedSection } from '../ui/AnimatedSection';
import Image from 'next/image';

export default async function Features() {
    try {
        const featuresData = await getFeatures();

        if (!featuresData || featuresData.length === 0) {
            return null;
        }

        return (
            <section id="features" className="py-12 lg:py-16 bg-transparent border-t border-light-border/20 dark:border-dark-border/20">
                <AnimatedSection className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                        
                        {/* Left Column: Bold Typography & Visual */}
                        <div className="lg:col-span-5 space-y-3">
                            <div className="space-y-3">
                                <span className="eyebrow">
                                    Our Edge
                                </span>
                                <h2 className="heading-lg">
                                    Why Choose Us.
                                </h2>
                                <p className="body-lg">
                                    We combine technical precision with a product-driven mindset to build systems that scale smoothly.
                                </p>
                            </div>
                            
                            {/* Graphic visual box (minimal editorial style) */}
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-soft border border-light-border/30 dark:border-dark-border/30 group hidden lg:block">
                                <div className="absolute inset-0 bg-brand-wood/10 group-hover:bg-brand-wood/0 transition-all duration-700 z-10 mix-blend-overlay" />
                                <Image 
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                                    alt="Professional Workspace" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                            </div>
                        </div>

                        {/* Right Column: Clean List of Strengths */}
                        <div className="lg:col-span-7 space-y-5">
                            {featuresData.map((feature, idx) => (
                                <div key={feature.id} className="flex gap-4 lg:gap-6 items-start group">
                                    {/* Minimal index indicator */}
                                    <span className="eyebrow bg-brand-wood/5 dark:bg-brand-wood/10 px-3 py-1.5 rounded-full shrink-0">
                                        0{idx + 1}
                                    </span>
                                    <div className="space-y-3 border-b border-light-border/40 dark:border-dark-border/40 pb-6 w-full">
                                        <h3 className="heading-md group-hover:text-brand-wood transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="body-base">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </AnimatedSection>
            </section>
        );
    } catch {
        return <div className="p-8 text-center text-red-500">Failed to load Features section</div>;
    }
}
