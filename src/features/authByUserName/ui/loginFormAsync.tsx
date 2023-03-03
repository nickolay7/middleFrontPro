import { FC, lazy } from 'react';
import { LoginFormProps } from './loginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    setTimeout(
        // @ts-ignore
        () => resolve(import('./loginForm')),
        1000,
    );
}));
