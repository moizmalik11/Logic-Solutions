import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
}

export function Button({ variant = 'primary', isLoading, children, className = '', disabled, ...props }: ButtonProps) {
    const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none hover:shadow-lg hover:-translate-y-0.5";
    const primaryStyle = "bg-primary-600 text-white hover:bg-primary-700";
    const secondaryStyle = "bg-white text-primary-600 border border-primary-600 hover:bg-primary-50";

    const variantStyle = variant === 'primary' ? primaryStyle : secondaryStyle;

    return (
        <button 
            className={`${baseStyle} ${variantStyle} ${className}`} 
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                </span>
            ) : children}
        </button>
    );
}
