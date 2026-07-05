import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../components/ui/Button';

describe('Button Component', () => {
    test('renders children content correctly', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    test('applies primary classes by default', () => {
        render(<Button>Primary</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-light-accent');
    });

    test('handles click events correctly', async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Clickable</Button>);
        const button = screen.getByRole('button');
        await userEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('shows loading spinner and disables click when isLoading is true', () => {
        render(<Button isLoading>Click Me</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
        expect(screen.getByText('Processing...')).toBeInTheDocument();
    });

    test('is disabled when disabled prop is passed', () => {
        render(<Button disabled>Disabled</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
});
