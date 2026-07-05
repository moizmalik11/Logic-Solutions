export interface Hero {
    id: number;
    title: string;
    subtitle?: string;
    cta_text?: string;
    cta_url?: string;
    background_image?: string;
    video_url?: string;
    poster_url?: string;
    is_active: boolean;
}

export interface About {
    id: number;
    title: string;
    body: string;
    image?: string;
    mission?: string;
    vision?: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    sort_order: number;
    is_active: boolean;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
    sort_order: number;
}

export interface Portfolio {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    url?: string;
    sort_order: number;
}

export interface Testimonial {
    id: number;
    client_name: string;
    role: string;
    company: string;
    quote: string;
    avatar?: string;
    rating: number;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio?: string;
    photo?: string;
    linkedin_url?: string;
    twitter_url?: string;
    sort_order: number;
}

export interface Faq {
    id: number;
    question: string;
    answer: string;
    category?: string;
    sort_order: number;
    is_active: boolean;
}

export interface ContactMessage {
    id: number;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    is_read: boolean;
    created_at: string;
}
