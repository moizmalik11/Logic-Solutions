import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-10 ${className}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">{subtitle}</p>}
        </div>
    );
};
