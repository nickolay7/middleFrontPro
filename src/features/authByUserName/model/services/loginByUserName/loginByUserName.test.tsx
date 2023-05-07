import { setUserLoginData } from '@/entities/user';
import { TestAsyncThunk } from '@/shared/lib/helpers/tests/testAsyncThank';
import { loginByUserName } from './loginByUserName';

describe('loginByUserName.test', () => {
    test('success async action loginByUserName', async () => {
        const userData = { id: '1', username: 'vasa' };
        // create action
        const asyncThank = new TestAsyncThunk(loginByUserName);
        // mocked value on post request
        asyncThank.api.post.mockReturnValue(
            Promise.resolve({ data: userData }),
        );
        // get action
        const result = await asyncThank.callThunk({
            username: '123',
            password: '123',
        });

        expect(asyncThank.api.post).toHaveBeenCalled();
        expect(asyncThank.dispatch).toHaveBeenCalledWith(
            setUserLoginData(userData),
        );
        expect(asyncThank.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('rejected async action loginByUserName', async () => {
        const asyncThank = new TestAsyncThunk(loginByUserName);
        asyncThank.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await asyncThank.callThunk({
            username: '123',
            password: '123',
        });

        expect(asyncThank.dispatch).toHaveBeenCalledTimes(2);
        expect(asyncThank.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
