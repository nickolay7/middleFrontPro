import axios from 'axios';
import { setUserLoginData } from 'entities/user/model/userSlice/userSlice';
import { TestAsyncThunk } from 'shared/lib/helpers';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUserName.test', () => {
    test('success async action loginByUserName', async () => {
        const userData = { id: '1', username: 'vasa' };
        // mocked value on post request
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        // create action
        const asyncThank = new TestAsyncThunk(loginByUserName);
        // get action
        const result = await asyncThank.callThunk({ username: '123', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(asyncThank.dispatch).toHaveBeenCalledWith(setUserLoginData(userData));
        expect(asyncThank.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('rejected async action loginByUserName', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const asyncThank = new TestAsyncThunk(loginByUserName);
        const result = await asyncThank.callThunk({ username: '123', password: '123' });

        expect(asyncThank.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
