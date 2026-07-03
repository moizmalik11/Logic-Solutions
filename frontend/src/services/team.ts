import { fetchApi } from './api';
import { TeamMember } from '../types';

export const getTeamMembers = () => fetchApi<TeamMember[]>('/team-members');
export const getTeamMemberById = (id: number) => fetchApi<TeamMember>(`/team-members/${id}`);
