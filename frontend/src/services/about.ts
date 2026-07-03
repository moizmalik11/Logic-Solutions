import { fetchApi } from './api';
import { About } from '../types';

export const getAbout = () => fetchApi<About>('/about');
