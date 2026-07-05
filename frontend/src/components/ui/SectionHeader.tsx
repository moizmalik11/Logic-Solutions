'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    // Container for staggering characters
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: 0.1,
            }
        }
    };

    // Each character's typing animation
    const charVariants: Variants = {
        hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { 
                type: 'spring',
                damping: 12,
                stiffness: 100
            } 
        }
    };

    // Subtitle fade-in animation
    const subtitleVariants: Variants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { 
                duration: 0.8, 
                ease: [0.21, 0.47, 0.32, 0.98],
            } 
        }
    };

    return (
        <motion.div 
            className={`text-center mb-10 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2 
                className="heading-lg flex flex-wrap justify-center overflow-hidden"
                variants={containerVariants}
            >
                {title.split(' ').map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-flex mr-2 last:mr-0">
                        {word.split('').map((char, charIndex) => (
                            <motion.span key={charIndex} variants={charVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </motion.h2>
            
            {subtitle && (
                <motion.p variants={subtitleVariants} className="body-lg max-w-2xl mx-auto mt-4">
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
};
