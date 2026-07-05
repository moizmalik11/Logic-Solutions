import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-center px-4 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-wood/10 rounded-full blur-[140px] pointer-events-none" />

            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-brand-wood mb-4 animate-pulse">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">Page Not Found</h2>
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mb-8 max-w-sm mx-auto font-light leading-relaxed">
                The page you are looking for doesn&apos;t exist or has been moved. 
                Use the links below to get back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center z-10">
                <Link href="/" className="px-6 py-2.5 bg-brand-wood hover:bg-brand-wood/90 text-white rounded-md font-semibold text-sm transition-all shadow-sm active:scale-95">
                    Back to Home
                </Link>
                <Link href="/#services" className="px-6 py-2.5 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-md font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all active:scale-95">
                    Our Services
                </Link>
                <Link href="/#contact" className="px-6 py-2.5 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-md font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all active:scale-95">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
