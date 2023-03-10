import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { Countries } from '../../../../country/model/types/country';
import { Currency } from '../../../../currency/model/types/currency';
import { profileData } from './profileData';

const data = {
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
    firstname: '',
    lastname: '',
    age: 0,
    city: '',
    country: Countries.GEORGIA,
    currency: Currency.GEL,
    username: '',
    avatar: '',
};

describe('profileDataSelector.test', () => {
    const fullState: DeepPartial<StateSchema> = {
        profile: {
            data,
            form: data,
        },
    };

    const emptyState: DeepPartial<StateSchema> = {
        profile: {
            data: emptyData,
            form: emptyData,
        },
    };

    test('full state', () => {
        expect(profileData(fullState as StateSchema)).toEqual({
            data,
            form: data,
        });
    });

    test('empty state', () => {
        expect(profileData(emptyState as StateSchema)).toEqual({
            data: emptyData,
            form: emptyData,
        });
    });
});
