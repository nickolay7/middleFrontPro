import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, setPassword, setUsername } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };

        expect(loginReducer(state as LoginSchema, setUsername('vasa'))).toEqual(
            {
                username: 'vasa',
            },
        );
    });

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };

        expect(loginReducer(state as LoginSchema, setPassword('123'))).toEqual({
            password: '123',
        });
    });
});
