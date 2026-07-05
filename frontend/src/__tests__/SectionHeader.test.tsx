import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SectionHeader } from '../components/ui/SectionHeader';

describe('SectionHeader Component', () => {
    test('renders the title correctly', () => {
        render(<SectionHeader title="Our Services" />);
        expect(screen.getByText('Our Services')).toBeInTheDocument();
    });

    test('renders the subtitle when provided', () => {
        render(<SectionHeader title="Our Services" subtitle="Check out what we do" />);
        expect(screen.getByText('Our Services')).toBeInTheDocument();
        expect(screen.getByText('Check out what we do')).toBeInTheDocument();
    });

    test('does not render subtitle if not provided', () => {
        render(<SectionHeader title="Our Services" />);
        expect(screen.queryByText('Check out what we do')).not.toBeInTheDocument();
    });

    test('applies custom className to wrapper element', () => {
        const { container } = render(<SectionHeader title="Custom" className="my-custom-class" />);
        expect(container.firstChild).toHaveClass('my-custom-class');
    });
});
