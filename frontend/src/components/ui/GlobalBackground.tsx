'use client';

import React from 'react';
import { useTheme } from 'next-themes';

export function GlobalBackground() {
    const { theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-light-bg dark:bg-dark-bg transition-colors duration-700">
            
            {/* Custom Keyframes for Fluid Aurora Motion */}
            <style jsx>{`
                @keyframes aurora-1 {
                    0%, 100% { transform: translateY(0) translateX(0) scale(1); }
                    33% { transform: translateY(-10vh) translateX(10vw) scale(1.1); }
                    66% { transform: translateY(15vh) translateX(-8vw) scale(0.9); }
                }
                @keyframes aurora-2 {
                    0%, 100% { transform: translateY(0) translateX(0) scale(1); }
                    33% { transform: translateY(12vh) translateX(-15vw) scale(0.95); }
                    66% { transform: translateY(-8vh) translateX(12vw) scale(1.05); }
                }
                @keyframes aurora-3 {
                    0%, 100% { transform: translateY(0) translateX(0) scale(1); }
                    33% { transform: translateY(-15vh) translateX(-10vw) scale(1.15); }
                    66% { transform: translateY(10vh) translateX(15vw) scale(0.85); }
                }
                .animate-aurora-1 { animation: aurora-1 18s ease-in-out infinite; }
                .animate-aurora-2 { animation: aurora-2 22s ease-in-out infinite alternate; }
                .animate-aurora-3 { animation: aurora-3 25s ease-in-out infinite; }
            `}</style>

            {/* Aurora Container with intense blur to blend the colors like fluid */}
            <div className="absolute inset-0 opacity-[0.6] dark:opacity-[0.4] mix-blend-normal">
                <div className="absolute inset-0 blur-[100px] md:blur-[140px] saturate-150">
                    
                    {/* Blob 1: Brand Brass / Gold */}
                    <div 
                        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full animate-aurora-1"
                        style={{ background: isDark ? 'radial-gradient(circle, rgba(168,124,63,0.35) 0%, rgba(168,124,63,0) 70%)' : 'radial-gradient(circle, rgba(168,124,63,0.2) 0%, rgba(168,124,63,0) 70%)' }}
                    />
                    
                    {/* Blob 2: Brand Navy / Deep Blue */}
                    <div 
                        className="absolute top-[20%] left-[-15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full animate-aurora-2"
                        style={{ background: isDark ? 'radial-gradient(circle, rgba(22,35,61,0.6) 0%, rgba(22,35,61,0) 70%)' : 'radial-gradient(circle, rgba(22,35,61,0.15) 0%, rgba(22,35,61,0) 70%)' }}
                    />
                    
                    {/* Blob 3: Cool Cyan / Tech Accent (Adds modern flavor to the mix) */}
                    <div 
                        className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[60vw] max-w-[1000px] max-h-[800px] rounded-[100%] animate-aurora-3"
                        style={{ background: isDark ? 'radial-gradient(circle, rgba(45,106,140,0.3) 0%, rgba(45,106,140,0) 70%)' : 'radial-gradient(circle, rgba(45,106,140,0.15) 0%, rgba(45,106,140,0) 70%)' }}
                    />

                </div>
            </div>

            {/* Light Grid Overlay for structure */}
            <div 
                className="absolute inset-0 z-10 opacity-[0.3] dark:opacity-[0.1]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(22,35,61,0.1)'} 1px, transparent 1px),
                        linear-gradient(to bottom, ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(22,35,61,0.1)'} 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            />

            {/* Premium glass noise overlay - crucial for preventing banding in gradients */}
            <div className="absolute inset-0 z-20 opacity-[0.03] dark:opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
