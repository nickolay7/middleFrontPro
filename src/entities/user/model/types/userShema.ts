import { FeatureFlags } from '@/shared/types/featureFlags';

export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user',
    MANAGER = 'manager',
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: UserRoles[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;
    _init: boolean;
}
