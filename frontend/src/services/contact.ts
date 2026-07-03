import { fetchApi } from './api';
import { ContactMessage } from '../types';

export const submitContactForm = (data: Partial<ContactMessage>) => fetchApi<ContactMessage>('/contact', {
    method: 'POST',
    body: JSON.stringify(data)
});
