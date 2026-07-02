import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', isLoading, children, ...props }) => {
    const baseStyle = "px-4 py-2 rounded font-medium focus:outline-none";
    const variantStyle = variant === 'primary' ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300";
    const disabledStyle = props.disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button className={`${baseStyle} ${variantStyle} ${disabledStyle}`} disabled={props.disabled || isLoading} {...props}>
            {isLoading ? 'Loading...' : children}
        </button>
    );
};
