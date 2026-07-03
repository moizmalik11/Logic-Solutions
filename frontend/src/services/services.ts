import { fetchApi } from './api';
import { Service } from '../types';

export const getServices = () => fetchApi<Service[]>('/services');
export const getServiceById = (id: number) => fetchApi<Service>(`/services/${id}`);
