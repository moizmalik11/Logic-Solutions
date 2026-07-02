import React from 'react';
import { getTestimonials } from '../../services/testimonials';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export default async function Testimonials() {
    try {
        const testimonialsData = await getTestimonials();

        if (!testimonialsData || testimonialsData.length === 0) {
            return null;
        }

        return (
            <section id="testimonials" className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader title="What Our Clients Say" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonialsData.map((testimonial) => (
                            <Card key={testimonial.id} className="flex flex-col justify-between">
                                <div>
                                    <div className="text-yellow-400 mb-4 text-lg">
                                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                    </div>
                                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                                </div>
                                <div className="flex items-center mt-4">
                                    {testimonial.avatar ? (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img src={testimonial.avatar} alt={testimonial.client_name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-xl font-bold text-gray-500">
                                            {testimonial.client_name.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-bold">{testimonial.client_name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        return <div className="p-8 text-center text-red-500">Failed to load Testimonials section</div>;
    }
}
