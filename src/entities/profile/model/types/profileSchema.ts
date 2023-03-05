import { IProfile } from './IProfile';

export interface ProfileSchema {
    data: IProfile;
    isLoading?: boolean;
    error?: string | undefined;
    readonly?: boolean;
}
