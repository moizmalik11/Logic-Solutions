import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, className = '', ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-xs font-bold uppercase tracking-widest text-light-textMuted dark:text-dark-textMuted mb-2">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={`
                        w-full px-3.5 py-2.5 
                        bg-white dark:bg-zinc-950
                        text-zinc-900 dark:text-zinc-50
                        text-sm
                        border ${error ? 'border-error' : 'border-zinc-200 dark:border-zinc-800'} 
                        rounded-md
                        focus:outline-none focus:ring-2 focus:ring-brand-wood/10 focus:border-brand-wood
                        transition-all duration-200
                        placeholder:text-zinc-400 dark:placeholder:text-zinc-600
                        resize-y min-h-[120px]
                        ${className}
                    `}
                    {...props}
                />
                {error && <p className="mt-1.5 text-sm text-error animate-fade-in-down">{error}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
