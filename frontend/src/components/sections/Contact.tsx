'use client';

import React, { useState } from 'react';
import { submitContactForm, ApiError } from '../../services';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [globalError, setGlobalError] = useState<string | null>(null);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        const phoneRegex = /^([0-9\s\-\+\(\)]*)$/;
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
        } else if (!phoneRegex.test(formData.phone) || formData.phone.length < 10) {
            newErrors.phone = 'Invalid phone format (min 10 chars)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setGlobalError(null);
        setSubmitSuccess(false);

        if (!validateForm()) return;

        setIsLoading(true);
        try {
            await submitContactForm(formData);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error: unknown) {
            if (error instanceof ApiError) {
                setGlobalError(error.message);
                if (error.errors) {
                    const backendErrors: Record<string, string> = {};
                    Object.keys(error.errors).forEach(key => {
                        backendErrors[key] = error.errors![key][0];
                    });
                    setErrors(backendErrors);
                }
            } else {
                setGlobalError('An unexpected error occurred. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <AnimatedSection className="max-w-4xl mx-auto">
                <SectionHeader title="Contact Us" subtitle="We'd love to hear from you" />

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    {submitSuccess && (
                        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded border border-green-200">
                            Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
                        </div>
                    )}

                    {globalError && (
                        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded border border-red-200">
                            {globalError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone *</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                            <textarea
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                        </div>

                        <div>
                            <Button type="submit" variant="primary" isLoading={isLoading} disabled={isLoading} className="w-full md:w-auto px-8 py-3">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </AnimatedSection>
        </section>
    );
}
