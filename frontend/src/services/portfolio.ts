import { fetchApi } from './api';
import { Portfolio } from '../types';

export const getPortfolios = () => fetchApi<Portfolio[]>('/portfolio');
export const getPortfolioById = (id: number) => fetchApi<Portfolio>(`/portfolio/${id}`);
