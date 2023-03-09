import { IProfile } from './IProfile';

export interface ProfileSchema {
    data: IProfile;
    form: IProfile;
    isLoading?: boolean;
    error?: string | undefined;
    readonly?: boolean;
}
