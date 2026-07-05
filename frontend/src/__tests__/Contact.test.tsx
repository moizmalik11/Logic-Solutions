import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../components/sections/Contact';

// Mock the AnimatedSection to just render its children for easier testing
jest.mock('../components/ui/AnimatedSection', () => ({
  AnimatedSection: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe('Contact Component', () => {
  it('renders all required fields', () => {
    render(<Contact />);
    
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your phone number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Project scope \/ Inquiry/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Describe your project requirements/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Inquiry/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /Send Inquiry/i });
    fireEvent.submit(submitButton.closest('form')!);
    
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Phone is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Subject is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
    });
  });

  it('shows success message on successful submission', async () => {
    jest.useFakeTimers();
    render(<Contact />);
    
    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your phone number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText(/Project scope \/ Inquiry/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText(/Describe your project requirements/i), { target: { value: 'This is a test message' } });
    
    const submitButton = screen.getByRole('button', { name: /Send Inquiry/i });
    fireEvent.submit(submitButton.closest('form')!);
    
    // Fast-forward through the setTimeout in the component
    jest.advanceTimersByTime(1500);
    
    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument();
    });
    
    jest.useRealTimers();
  });
});
