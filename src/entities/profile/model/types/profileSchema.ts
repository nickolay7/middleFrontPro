import { IProfile } from './IProfile';

export interface ProfileSchema {
    data: IProfile;
    isLoading: boolean;
    error: string | null;
    readonly: boolean;
}
