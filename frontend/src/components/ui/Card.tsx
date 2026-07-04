import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function Card({ children, className = '', hoverEffect = true, ...props }: CardProps) {
    return (
        <div 
            className={`
                bg-light-surface/80 dark:bg-dark-surface/80 
                backdrop-blur-md 
                border border-light-border/50 dark:border-dark-border/50 
                rounded-2xl p-8 
                shadow-soft 
                transition-all duration-300
                ${hoverEffect ? 'hover:shadow-lg hover:-translate-y-1 hover:border-light-accent/30 dark:hover:border-dark-accent/30' : ''}
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}
