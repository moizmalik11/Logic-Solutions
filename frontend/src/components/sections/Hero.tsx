import React from 'react';
import { getHero } from '../../services/hero';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import Image from 'next/image';

export default async function Hero() {
    try {
        const heroData = await getHero();

        if (!heroData || !heroData.is_active) {
            return null;
        }

        return (
            <section id="hero" className="relative min-h-[60vh] flex items-center justify-center text-center p-8 dark:bg-gray-900 overflow-hidden">
                {heroData.background_image && (
                    <Image 
                        src={heroData.background_image}
                        alt={heroData.title}
                        fill
                        priority
                        className="object-cover z-0"
                    />
                )}
                <div className="z-10 relative w-full flex items-center justify-center">
                    <AnimatedSection>
                        <div className="max-w-4xl bg-white dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-80 p-8 rounded">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">{heroData.title}</h1>
                            {heroData.subtitle && <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">{heroData.subtitle}</p>}
                            
                            {heroData.cta_text && (
                                <a href={heroData.cta_url || "#contact"}>
                                    <Button variant="primary">{heroData.cta_text}</Button>
                                </a>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        );
    } catch (error) {
        return <div className="p-8 text-center text-red-500">Failed to load Hero section</div>;
    }
}
