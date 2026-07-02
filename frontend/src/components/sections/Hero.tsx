import React from 'react';
import { getHero } from '../../services/hero';
import { Button } from '../ui/Button';

export default async function Hero() {
    try {
        const heroData = await getHero();

        if (!heroData || !heroData.is_active) {
            return null; // Don't render if not active or not found
        }

        const bgStyle = heroData.background_image 
            ? { backgroundImage: `url(${heroData.background_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : { backgroundColor: '#f3f4f6' };

        return (
            <section id="hero" style={bgStyle} className="min-h-[60vh] flex items-center justify-center text-center p-8">
                <div className="max-w-4xl bg-white bg-opacity-75 p-8 rounded">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{heroData.title}</h1>
                    {heroData.subtitle && <p className="text-xl mb-6">{heroData.subtitle}</p>}
                    
                    {heroData.cta_text && (
                        <a href={heroData.cta_url || "#contact"}>
                            <Button variant="primary">{heroData.cta_text}</Button>
                        </a>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch hero:", error);
        return <div className="p-8 text-center text-red-500">Failed to load Hero section</div>;
    }
}
