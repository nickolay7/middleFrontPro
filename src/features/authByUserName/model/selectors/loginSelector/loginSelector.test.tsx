import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';
import { loginSelector } from './loginSelector';

describe('loginSelector.test', () => {
    const fullState: DeepPartial<StateSchema> = {
        loginForm: {
            username: 'vasa',
            password: '123',
            isLoading: false,
            error: 'error',
        },
    };

    const emptyState: DeepPartial<StateSchema> = {
        loginForm: {
            username: '',
            password: '',
            isLoading: true,
            error: '',
        },
    };

    test('full state', () => {
        expect(loginSelector(fullState as StateSchema)).toEqual({
            username: 'vasa',
            password: '123',
            isLoading: false,
            error: 'error',
        });
    });

    test('empty state', () => {
        expect(loginSelector(emptyState as StateSchema)).toEqual({
            username: '',
            password: '',
            isLoading: true,
            error: '',
        });
    });
});
