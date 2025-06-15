export interface IEmployee {
    name: string;
    email: string;
    role: string;
    id: number;
}

export type SortField = 'name' | 'email' | 'role';

export type SortDirection = 'asc' | 'desc';