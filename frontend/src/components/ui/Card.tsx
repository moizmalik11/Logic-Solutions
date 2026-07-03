import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
            {children}
        </div>
    );
}
