import React from 'react';
import { getTestimonials } from '../../services/testimonials';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import Image from 'next/image';

export default async function Testimonials() {
    try {
        const testimonialsData = await getTestimonials();

        if (!testimonialsData || testimonialsData.length === 0) {
            return null;
        }

        return (
            <section id="testimonials" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <SectionHeader title="What Our Clients Say" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonialsData.map((testimonial) => (
                            <Card key={testimonial.id} className="flex flex-col justify-between">
                                <div>
                                    <div className="text-yellow-400 mb-4 text-lg">
                                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                                </div>
                                <div className="flex items-center mt-4">
                                    {testimonial.avatar ? (
                                        <Image 
                                            src={testimonial.avatar} 
                                            alt={testimonial.client_name} 
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 rounded-full mr-4 object-cover" 
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 flex items-center justify-center text-xl font-bold text-gray-500">
                                            {testimonial.client_name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-bold dark:text-white">{testimonial.client_name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
        );
    } catch (error) {
        return <div className="p-8 text-center text-red-500">Failed to load Testimonials section</div>;
    }
}
