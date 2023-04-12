import { Countries } from '../../../../../entities/country/model/types/country';
import { Currency } from '../../../../../entities/currency/model/types/currency';
import { ValidationErrors } from '../../types/profileSchema';
import { validateProfileData } from './validateProfileData';

const data = {
    id: '1',
    firstname: 'Nick',
    lastname: 'Semu',
    age: 17,
    city: 'Rustavi',
    country: Countries.GEORGIA,
    currency: Currency.GEL,
    username: 'admin',
    avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
};

const emptyData = {
    id: '',
    firstname: '',
    lastname: '',
    age: 0,
    city: '',
    country: Countries.GEORGIA,
    currency: Currency.GEL,
    username: '',
    avatar: '',
};

const errors = [
    ValidationErrors.REQUIRED_LASTNAME,
    ValidationErrors.REQUIRED_AGE,
    ValidationErrors.REQUIRED_CITY,
    ValidationErrors.REQUIRED_FIRSTNAME,
    ValidationErrors.REQUIRED_USERNAME,
];

describe('updateProfileData.test', () => {
    test('validate success', async () => {
        expect(validateProfileData(data)).toEqual([]);
    });

    test('validate error', async () => {
        expect(validateProfileData(emptyData)).toEqual(errors);
    });
});
