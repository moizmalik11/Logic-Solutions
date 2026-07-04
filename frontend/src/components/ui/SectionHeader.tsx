import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-10 ${className}`}>
            <h2 className="heading-lg">
                {title}
            </h2>
            {subtitle && (
                <p className="body-lg max-w-2xl mx-auto mt-4">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
