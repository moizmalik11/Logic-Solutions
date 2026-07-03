import { fetchApi } from './api';
import { Hero } from '../types';

export const getHero = () => fetchApi<Hero>('/hero');
