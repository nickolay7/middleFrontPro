import { IProfile } from '@/entities/profile';
import { ValidationErrors } from '../../types/profileSchema';

export const validateProfileData = (data: IProfile) => {
    const errors: ValidationErrors[] = [];
    const {
        lastname, age, city, username, firstname,
    } = data;

    if (lastname === '') {
        errors.push(ValidationErrors.REQUIRED_LASTNAME);
    }

    if (age === 0 || undefined) {
        errors.push(ValidationErrors.REQUIRED_AGE);
    }

    if (city === '') {
        errors.push(ValidationErrors.REQUIRED_CITY);
    }

    if (firstname === '') {
        errors.push(ValidationErrors.REQUIRED_FIRSTNAME);
    }

    if (username === '') {
        errors.push(ValidationErrors.REQUIRED_USERNAME);
    }

    return errors;
};
