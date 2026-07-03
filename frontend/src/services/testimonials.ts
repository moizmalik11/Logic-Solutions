import { fetchApi } from './api';
import { Testimonial } from '../types';

export const getTestimonials = () => fetchApi<Testimonial[]>('/testimonials');
export const getTestimonialById = (id: number) => fetchApi<Testimonial>(`/testimonials/${id}`);
