import React from 'react';

export default function Footer() {
    return (
        <footer className="relative z-10 pt-16 pb-8 border-t border-light-border/40 dark:border-dark-border/40 bg-light-surface/30 dark:bg-dark-surface/30 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
                
                {/* Column 1: Logo & Text */}
                <div className="lg:col-span-1">
                    <a
                        href="#hero"
                        className="inline-block shrink-0 text-light-text dark:text-dark-text font-bold text-2xl tracking-tight select-none hover:opacity-80 transition-opacity mb-4"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        Logic<span className="text-brand-wood">Solution</span>
                    </a>
                    <p className="text-sm text-light-textMuted dark:text-dark-textMuted leading-relaxed">
                        Where Logic Meets Innovation. We design, build, and scale websites, mobile apps, and AI-powered products for startups and enterprises worldwide.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-6">Quick Links</h4>
                    <ul className="flex flex-col gap-3 text-sm text-light-textMuted dark:text-dark-textMuted">
                        <li><a href="#hero" className="hover:text-brand-wood transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-brand-wood transition-colors">About</a></li>
                        <li><a href="#services" className="hover:text-brand-wood transition-colors">Services</a></li>
                        <li><a href="#portfolio" className="hover:text-brand-wood transition-colors">Portfolio</a></li>
                        <li><a href="#team" className="hover:text-brand-wood transition-colors">Team</a></li>
                        <li><a href="#contact" className="hover:text-brand-wood transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-6">Services</h4>
                    <ul className="flex flex-col gap-3 text-sm text-light-textMuted dark:text-dark-textMuted">
                        <li><a href="#services" className="hover:text-brand-wood transition-colors">Web Development</a></li>
                        <li><a href="#services" className="hover:text-brand-wood transition-colors">SEO</a></li>
                        <li><a href="#services" className="hover:text-brand-wood transition-colors">App Development</a></li>
                        <li><a href="#services" className="hover:text-brand-wood transition-colors">Marketing</a></li>
                        <li><a href="#services" className="hover:text-brand-wood transition-colors">Advanced Services</a></li>
                    </ul>
                </div>

                {/* Column 5: Contacts */}
                <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-6">Contacts</h4>
                    <ul className="flex flex-col gap-4 text-sm text-light-textMuted dark:text-dark-textMuted mb-6">
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-brand-wood shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <span>+92 21 3456 7890<br/><span className="text-xs opacity-70">(Toll Free)</span></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-brand-wood shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            hello@logicsolution.com
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-brand-wood shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Suite 402, Business Bay Tower, Shahrah-e-Faisal, Karachi
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <a href="#" className="text-light-textMuted dark:text-dark-textMuted hover:text-brand-wood transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                        </a>
                        <a href="#" className="text-light-textMuted dark:text-dark-textMuted hover:text-brand-wood transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="#" className="text-light-textMuted dark:text-dark-textMuted hover:text-brand-wood transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 border-t border-light-border/20 dark:border-dark-border/20 text-center text-sm text-light-textMuted dark:text-dark-textMuted font-medium">
                <p>Developed by LogicSolution Inc.</p>
            </div>
        </footer>
    );
}
