import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">CompanyLogo</h3>
                    <p className="text-gray-400">
                        Transforming Ideas into Digital Reality. We build scalable, high-performance web applications and enterprise software solutions.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                    <ul className="text-gray-400 space-y-2">
                        <li>123 Tech Street, Silicon Valley, CA 94025</li>
                        <li>contact@company.com</li>
                        <li>+1 (555) 123-4567</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
            </div>
        </footer>
    );
}
