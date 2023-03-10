import { TestAsyncThunk } from 'shared/lib/helpers/tests/testAsyncThank';
import { Countries } from '../../../../country/model/types/country';
import { Currency } from '../../../../currency/model/types/currency';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('success fetchProfileData', async () => {
        const fetchData = data;
        // create action
        const asyncThank = new TestAsyncThunk(fetchProfileData);
        // mocked value on post request
        asyncThank.api.get.mockReturnValue(Promise.resolve({ data: fetchData }));
        // get action
        const result = await asyncThank.callThunk();

        expect(asyncThank.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(fetchData);
    });

    test('rejected fetchProfileData', async () => {
        const asyncThank = new TestAsyncThunk(fetchProfileData);
        asyncThank.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await asyncThank.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
