import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    isLoading?: boolean;
}

export function Button({ variant = 'primary', isLoading, children, className = '', disabled, ...props }: ButtonProps) {
    const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
        primary: "bg-light-accent dark:bg-dark-accent text-white hover:bg-light-accentHover dark:hover:bg-dark-accentHover shadow-md shadow-brand-wood/20 hover:shadow-lg hover:shadow-brand-wood/40",
        secondary: "bg-light-surfaceMuted dark:bg-dark-surfaceMuted text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border",
        ghost: "bg-transparent text-light-text dark:text-dark-text border border-light-border dark:border-dark-border hover:border-light-accent dark:hover:border-dark-accent hover:text-light-accent dark:hover:text-dark-accent",
    };

    return (
        <button 
            className={`${baseStyle} ${variants[variant]} ${className}`} 
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                </>
            ) : children}
        </button>
    );
}
