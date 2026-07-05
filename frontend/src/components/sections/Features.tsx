import React from 'react';
import { getFeatures } from '../../services/features';
import { AnimatedSection } from '../ui/AnimatedSection';
import Image from 'next/image';
function renderFeatureIcon(iconName: string) {
    const baseClass = "w-5 h-5 text-brand-wood";
    switch (iconName) {
        case 'user-check':
            return (
                <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 11l2 2 4-4" />
                </svg>
            );
        case 'kanban':
            return (
                <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v16H4zm10 0h6v10h-6zm0 14h6v2h-6z" />
                </svg>
            );
        case 'trending-up':
            return (
                <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
            );
        case 'life-buoy':
            return (
                <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                </svg>
            );
        default:
            return (
                <svg className={baseClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
            );
    }
}

export default async function Features() {
    try {
        const featuresData = await getFeatures();

        if (!featuresData || featuresData.length === 0) {
            return null;
        }

        return (
            <section id="features" className="py-12 lg:py-16 bg-transparent border-t border-light-border/20 dark:border-dark-border/20">
                <AnimatedSection className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Left Column: Bold Typography & Visual */}
                        <div className="lg:col-span-5 space-y-6">
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
                            <div className="relative w-full aspect-[4/3] rounded-none overflow-hidden shadow-soft border border-light-border/30 dark:border-dark-border/30 group hidden lg:block">
                                <div className="absolute inset-0 bg-brand-wood/10 group-hover:bg-brand-wood/0 transition-all duration-700 z-10 mix-blend-overlay" />
                                <Image 
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
                                    alt="Engineering Design Collaboration" 
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                    sizes="(max-width: 1024px) 100vw, 400px"
                                />
                            </div>
                        </div>

                        {/* Right Column: Clean List of Strengths with dynamic icons */}
                        <div className="lg:col-span-7 space-y-6">
                            {featuresData.map((feature) => (
                                <div key={feature.id} className="flex gap-4 lg:gap-6 items-start group">
                                    {/* Minimal outline icon box (Shadcn/Stripe styling) */}
                                    <div className="w-11 h-11 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/20 text-brand-wood flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-brand-wood group-hover:bg-brand-wood/5">
                                        {renderFeatureIcon(feature.icon)}
                                    </div>
                                    <div className="space-y-2 border-b border-light-border/40 dark:border-dark-border/40 pb-5 w-full">
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
