'use client';

import React, { useState } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error('Failed to submit form', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section id="contact" className="py-12 lg:py-16 bg-transparent border-t border-light-border/20 dark:border-dark-border/20">
            <AnimatedSection className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Direct Contact Info & Branding */}
                    <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-6">
                        <div className="space-y-4">
                            <span className="eyebrow block">
                                Let&apos;s Connect
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.15] text-balance">
                                Start Your Next Project.
                            </h2>
                            <p className="text-base md:text-lg font-light text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                                Have an idea or project in mind? Reach out and let&apos;s build something exceptional together.
                            </p>
                        </div>

                        {/* Minimalist Contact Details */}
                        <div className="space-y-6 pt-4">
                            <div className="flex gap-4 items-start">
                                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-brand-wood shrink-0 border border-zinc-200/50 dark:border-zinc-800/50">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Email Us</h4>
                                    <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:text-brand-wood transition-colors">
                                        hello@logicsolution.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-brand-wood shrink-0 border border-zinc-200/50 dark:border-zinc-800/50">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Call Us</h4>
                                    <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:text-brand-wood transition-colors">
                                        +92 21 3456 7890
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-brand-wood shrink-0 border border-zinc-200/50 dark:border-zinc-800/50">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Our Office</h4>
                                    <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed">
                                        Suite 402, Business Bay Tower, Karachi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Shadcn Card Wrapped Form */}
                    <div className="lg:col-span-7 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 md:p-8 shadow-sm">
                        {submitSuccess && (
                            <div className="mb-6 p-4 bg-success/10 text-success rounded-lg border border-success/20 animate-fade-in-down flex items-center gap-3">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="font-semibold text-sm">Message sent successfully! We&apos;ll reach out within 24 hours.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Input
                                    label="Full Name *"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    required
                                />
                                <Input
                                    label="Email Address *"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Input
                                    label="Phone Number *"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                    required
                                />
                                <Input
                                    label="Subject *"
                                    name="subject"
                                    placeholder="Project scope / Inquiry"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    error={errors.subject}
                                    required
                                />
                            </div>

                            <Textarea
                                label="Message *"
                                name="message"
                                placeholder="Describe your project requirements in detail..."
                                value={formData.message}
                                onChange={handleChange}
                                error={errors.message}
                                required
                            />

                            <div className="pt-2 flex justify-start">
                                <Button 
                                    type="submit" 
                                    isLoading={isSubmitting}
                                    className="w-full md:w-auto px-8 py-2.5 bg-brand-wood hover:bg-brand-wood/90 text-white rounded-md font-semibold text-sm transition-all shadow-sm active:scale-95 border border-brand-wood/10"
                                >
                                    Send Inquiry
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </AnimatedSection>
        </section>
    );
}
