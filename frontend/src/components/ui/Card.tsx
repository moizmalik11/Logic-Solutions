import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`bg-white dark:bg-gray-800 dark:text-gray-200 border border-transparent dark:border-gray-700 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6 ${className}`}>
            {children}
        </div>
    );
}
