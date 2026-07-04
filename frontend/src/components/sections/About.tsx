import React from 'react';
import { getAbout } from '../../services/about';
import AboutClient from './AboutClient';

export default async function About() {
    try {
        const aboutData = await getAbout();

        if (!aboutData) {
            return null;
        }

        return <AboutClient data={aboutData} />;
    } catch {
        return <div className="p-8 text-center text-red-500">Failed to load About section</div>;
    }
}
