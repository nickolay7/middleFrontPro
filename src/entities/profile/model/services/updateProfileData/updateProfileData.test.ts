import { TestAsyncThunk } from 'shared/lib/helpers/tests/testAsyncThank';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Countries } from '../../../../country/model/types/country';
import { Currency } from '../../../../currency/model/types/currency';
import { updateProfileData } from './updateProfileData';
import { ValidationErrors } from '../../types/profileSchema';

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

const errors = [
    ValidationErrors.REQUIRED_LASTNAME,
    ValidationErrors.REQUIRED_AGE,
    ValidationErrors.REQUIRED_CITY,
    ValidationErrors.REQUIRED_FIRSTNAME,
    ValidationErrors.REQUIRED_USERNAME,
];

describe('updateProfileData.test', () => {
    test('success update', async () => {
        // create action
        const asyncThank = new TestAsyncThunk(
            updateProfileData,
            fullState,
        );
        // mocked value on post request
        asyncThank.api.put.mockReturnValue(Promise.resolve({ data }));
        // get action
        const result = await asyncThank.callThunk();

        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('rejected update', async () => {
        const asyncThank = new TestAsyncThunk(
            updateProfileData,
            fullState,
        );
        asyncThank.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await asyncThank.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
    test('validate error', async () => {
        const asyncThank = new TestAsyncThunk(
            updateProfileData,
            emptyState,
        );

        const result = await asyncThank.callThunk();

        expect(result.payload).toEqual(errors);
    });
});
