import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Oops! The page you are looking for doesn't exist or has been moved. 
                But don't worry, you can find your way back from here.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition">
                    Back to Home
                </Link>
                <Link href="/#services" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded font-medium hover:bg-gray-50 transition">
                    Our Services
                </Link>
                <Link href="/#contact" className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded font-medium hover:bg-gray-50 transition">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
