import React from 'react';
import { getAbout } from '../../services/about';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import Image from 'next/image';

export default async function About() {
    try {
        const aboutData = await getAbout();

        if (!aboutData) {
            return null;
        }

        return (
            <section id="about" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <SectionHeader title={aboutData.title} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{aboutData.body}</p>
                            
                            {aboutData.mission && (
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">Our Mission</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{aboutData.mission}</p>
                                </div>
                            )}
                            
                            {aboutData.vision && (
                                <div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">Our Vision</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{aboutData.vision}</p>
                                </div>
                            )}
                        </div>
                        
                        {aboutData.image && (
                            <div className="relative w-full aspect-video rounded shadow-lg overflow-hidden">
                                <Image 
                                    src={aboutData.image} 
                                    alt={aboutData.title} 
                                    fill
                                    className="object-cover" 
                                />
                            </div>
                        )}
                    </div>
                </AnimatedSection>
            </section>
        );
    } catch (error) {
        return <div className="p-8 text-center text-red-500">Failed to load About section</div>;
    }
}
