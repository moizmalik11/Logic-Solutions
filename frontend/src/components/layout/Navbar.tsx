'use client';

import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Features', href: '#features' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Team', href: '#team' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">CompanyLogo</span>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-gray-700 hover:text-blue-600 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
