export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface ApiResponse<T = unknown> {
    success: boolean;
    message: string;
    errors: Record<string, string[]> | null;
    data: T;
}

export class ApiError extends Error {
    public status: number;
    public errors: Record<string, string[]> | null;

    constructor(message: string, status: number, errors: Record<string, string[]> | null = null) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
}

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const headers = new Headers(options.headers);
    if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
        headers.set('Content-Type', 'application/json');
    }
    headers.set('Accept', 'application/json');

    const config: RequestInit = {
        ...options,
        headers,
    };

    const response = await fetch(url, config);
    const result: ApiResponse<T> = await response.json();

    if (!response.ok || !result.success) {
        throw new ApiError(result.message || 'An error occurred', response.status, result.errors);
    }

    return result.data;
}
