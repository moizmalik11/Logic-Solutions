import React from 'react';
import { getTestimonials } from '../../services/testimonials';
import TestimonialsClient from './TestimonialsClient';

export default async function Testimonials() {
    try {
        const testimonialsData = await getTestimonials();

        if (!testimonialsData || testimonialsData.length === 0) {
            return null;
        }

        return <TestimonialsClient items={testimonialsData} />;
    } catch {
        return <div className="p-8 text-center text-red-500">Failed to load Testimonials section</div>;
    }
}
