import { Button } from 'shared/ui/button';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

import { Input } from 'shared/ui/input';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider/config/hooks';
import { setPassword, setUsername } from '../model/slice/loginSlice';
import { loginSelector } from '../model/selectors/loginSelector/loginSelector';

import cls from './login.module.scss';

export const LoginForm = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { username, password } = useAppSelector(loginSelector);

    const onSetUsername = useCallback((val: string) => {
        dispatch(setUsername(val));
    }, [dispatch]);

    const onSetPassword = useCallback((val: string) => {
        dispatch(setPassword(val));
    }, [dispatch]);

    const onSignIn = useCallback(() => {

    }, []);

    return (
        <div className={cls.loginForm}>
            <Input
                type="text"
                onChange={onSetUsername}
                value={username}
                placeholder={t('введите имя')}
                autoFocus
            />
            <Input
                type="text"
                onChange={onSetPassword}
                value={password}
                placeholder={t('введите пароль')}
            />
            <Button onClick={onSignIn}>{t('Вход')}</Button>
        </div>
    );
};
