import { fetchApi } from './api';
import { Faq } from '../types';

export const getFaqs = () => fetchApi<Faq[]>('/faqs');
export const getFaqById = (id: number) => fetchApi<Faq>(`/faqs/${id}`);
