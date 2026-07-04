'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

/* ── Ultra Minimal Theme Toggle ── */
function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-[76px] h-[32px]" />;

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className={`
                relative w-[76px] h-[32px] rounded-full transition-colors duration-500 focus:outline-none flex items-center p-1
                ${isDark ? 'bg-black/40 border border-white/10 shadow-inner' : 'bg-white border border-gray-200 shadow-sm'}
            `}
        >
            {/* Background Texts */}
            <span 
                className={`absolute left-2.5 text-[9px] font-bold tracking-wider transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100 text-gray-400'}`}
            >
                LIGHT
            </span>
            <span 
                className={`absolute right-2.5 text-[9px] font-bold tracking-wider transition-opacity duration-300 ${isDark ? 'opacity-100 text-gray-400' : 'opacity-0'}`}
            >
                DARK
            </span>

            {/* Sliding Knob */}
            <span
                className={`
                    absolute w-[24px] h-[24px] rounded-full flex items-center justify-center transition-all duration-500 shadow-sm z-10
                    ${isDark ? 'translate-x-0 bg-white' : 'translate-x-[44px] bg-black'}
                `}
            >
                {isDark ? (
                    /* Moon Icon */
                    <svg className="w-[12px] h-[12px] text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                ) : (
                    /* Sun Icon */
                    <svg className="w-[14px] h-[14px] text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM6.166 18.894a.75.75 0 001.06 1.06l1.59-1.591a.75.75 0 10-1.06-1.061l-1.591 1.59zM4.5 12a.75.75 0 01-.75-.75H1.5a.75.75 0 010 1.5h2.25a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 00-1.06 1.06l1.591 1.59a.75.75 0 101.06-1.061l-1.59-1.59z" />
                    </svg>
                )}
            </span>
        </button>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Home',      href: '#hero' },
        { name: 'About',     href: '#about' },
        { name: 'Services',  href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Team',      href: '#team' },
        { name: 'Contact',   href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-black/70 backdrop-blur-2xl border-b border-white/[0.06]'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-14">
                <div className="flex items-center justify-between h-[68px]">

                    {/* ── LEFT: Wordmark only ── */}
                    <a
                        href="#hero"
                        className="text-white font-black text-2xl tracking-tight select-none hover:opacity-80 transition-opacity"
                        style={{ letterSpacing: '-0.03em' }}
                    >
                        Logic<span className="text-brand-brass">Solution</span>
                    </a>

                    {/* ── CENTER: Nav Links ── */}
                    <div className="hidden md:flex items-center">
                        {/* Pill container — no border, subtle bg only when scrolled */}
                        <div className={`flex items-center gap-0.5 rounded-full px-1.5 py-1.5 transition-all duration-500 ${
                            scrolled ? 'bg-white/5' : ''
                        }`}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveLink(link.name)}
                                    className={`px-4 py-1.5 text-sm rounded-full font-medium transition-all duration-200 ${
                                        activeLink === link.name
                                            ? 'bg-white/10 text-white'
                                            : 'text-white/55 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Toggle + CTA ── */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 bg-brand-brass hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 tracking-wide shadow-lg shadow-brand-brass/20 hover:shadow-brand-brass/40"
                        >
                            Get In Touch
                            <svg
                                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* ── Mobile: Toggle + Hamburger ── */}
                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative w-8 h-8 flex flex-col justify-center items-center gap-[5px] group"
                            aria-label="Menu"
                        >
                            <span className={`block h-px bg-white transition-all duration-300 origin-center ${isOpen ? 'w-5 rotate-45 translate-y-[6px]' : 'w-5'}`} />
                            <span className={`block h-px bg-white transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                            <span className={`block h-px bg-white transition-all duration-300 origin-center ${isOpen ? 'w-5 -rotate-45 -translate-y-[6px]' : 'w-5'}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Menu ── */}
            <div className={`md:hidden overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="bg-black/90 backdrop-blur-2xl border-t border-white/5 px-6 py-5 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="px-3 py-3 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-3 text-center bg-brand-brass hover:bg-amber-600 text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </nav>
    );
}
