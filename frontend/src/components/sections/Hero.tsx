import React from 'react';
import { getHero } from '../../services/hero';
import HeroVideo from '../ui/HeroVideo';

export default async function Hero() {
    try {
        const heroData = await getHero();

        if (!heroData || !heroData.is_active) {
            return null;
        }

        return (
            <section
                className="relative h-screen flex flex-col justify-center overflow-hidden bg-black"
            >
                {/* ── Video Background (poster → video crossfade) ── */}
                <HeroVideo videoUrl={heroData.video_url} posterUrl={heroData.poster_url} />

                {/* ── Centered Layout ── */}
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-center text-center">
                    
                    <h1
                        className="font-bold tracking-tight text-white max-w-3xl mx-auto"
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 4.2rem)',
                            lineHeight: 1.1,
                        }}
                    >
                        {(() => {
                            const titleText = heroData.title || '';
                            const parts = titleText.split('Meets');
                            const first = parts[0] ? parts[0].trim() : '';
                            const second = parts[1] ? 'Meets' + parts[1] : '';
                            return (
                                <>
                                    <span className="block mb-1 font-light">{first}</span>
                                    {second && (
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-brass via-amber-400 to-brand-brass">
                                            {second}
                                        </span>
                                    )}
                                </>
                            );
                        })()}
                    </h1>

                    <p className="mt-6 max-w-xl text-sm md:text-base text-white/80 leading-relaxed font-light mx-auto">
                        {heroData.subtitle || 'We build websites, apps & AI-powered products for startups worldwide.'}
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a
                            href={heroData.cta_url || '#contact'}
                            className="group relative inline-flex items-center gap-3 bg-white text-black dark:bg-black dark:text-white dark:border dark:border-black px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all overflow-hidden shadow-md shadow-white/5 dark:shadow-black/10 hover:scale-[1.01] duration-300"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span>{heroData.cta_text || 'Start a Project'}</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        <a
                            href="#portfolio"
                            className="text-sm font-medium text-white/70 hover:text-white transition-all hover:translate-x-0.5 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
                        >
                            View our work &rarr;
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 pt-6 border-t border-white/10 flex justify-center gap-8 md:gap-12 w-full max-w-xl">
                        {[
                            { value: '50+', label: 'Projects Shipped' },
                            { value: '12+', label: 'Countries' },
                            { value: '98%', label: 'Satisfaction' },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="text-xl md:text-2xl font-bold text-white tracking-tight">{s.value}</p>
                                <p className="text-[10px] text-white/50 mt-1 font-medium tracking-wide">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animated Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                    <span className="text-[10px] tracking-[0.35em] uppercase text-white/70 font-semibold">Scroll Down</span>
                    <div className="w-[20px] h-[32px] rounded-full border-2 border-white/50 flex justify-center p-1.5">
                        <div className="w-[3px] h-[6px] bg-brand-brass rounded-full animate-bounce" />
                    </div>
                </div>
            </section>
        );
    } catch {
        return <div className="p-8 text-center text-red-400">Failed to load Hero section</div>;
    }
}
