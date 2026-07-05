'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    // Professional subtle animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { 
                duration: 0.8, 
                ease: [0.21, 0.47, 0.32, 0.98] 
            } 
        }
    };

    return (
        <motion.div 
            className={`text-center mb-10 ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2 variants={itemVariants} className="heading-lg">
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p variants={itemVariants} className="body-lg max-w-2xl mx-auto mt-4">
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
};
