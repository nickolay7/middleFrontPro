import { IProfile } from './IProfile';

export enum ValidationErrors {
    REQUIRED_FIRSTNAME = 'required_firstname',
    REQUIRED_LASTNAME = 'required_lastname',
    REQUIRED_AGE = 'required_age',
    REQUIRED_CITY = 'required_city',
    REQUIRED_USERNAME = 'required_username',
    ERROR_REQUEST = 'server error',
}

export interface ProfileSchema {
    data: IProfile;
    form: IProfile;
    isLoading?: boolean;
    error?: string | undefined;
    readonly?: boolean;
    validationErrors?: ValidationErrors[];
}
