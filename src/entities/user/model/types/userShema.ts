import { FeatureFlags } from '@/shared/types/featureFlags';
import { Theme } from '@/app/providers/theme';

export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user',
    MANAGER = 'manager',
}

export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: boolean;
    settingPageHasBeenOpen?: boolean;
    wasArticlePageOpened?: boolean;
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: UserRoles[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    _init: boolean;
}
