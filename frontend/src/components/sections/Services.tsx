import React from 'react';
import { getServices } from '../../services/services';
import ServicesClient from './ServicesClient';

export default async function Services() {
    try {
        const servicesData = await getServices();

        if (!servicesData || servicesData.length === 0) {
            return null;
        }

        return <ServicesClient items={servicesData} />;
    } catch {
        return <div className="p-8 text-center text-red-500">Failed to load Services section</div>;
    }
}
