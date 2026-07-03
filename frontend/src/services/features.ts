import { fetchApi } from './api';
import { Feature } from '../types';

export const getFeatures = () => fetchApi<Feature[]>('/features');
export const getFeatureById = (id: number) => fetchApi<Feature>(`/features/${id}`);
