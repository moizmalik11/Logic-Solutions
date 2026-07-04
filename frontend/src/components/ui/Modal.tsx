import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl w-full max-w-md mx-4 shadow-xl overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-center p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                    {title && <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>}
                    <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 text-xl font-medium transition-colors">&times;</button>
                </div>
                <div className="p-6 text-zinc-700 dark:text-zinc-300">
                    {children}
                </div>
            </div>
        </div>
    );
};
