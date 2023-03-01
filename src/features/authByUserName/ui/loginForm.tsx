import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider/config/hooks';
import { Spinner } from 'shared/ui/spinner';
import { Text, TextVariant } from 'shared/ui/text';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { loginReducer, setPassword, setUsername } from '../model/slice/loginSlice';
import { loginSelector } from '../model/selectors/loginSelector/loginSelector';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

import cls from './login.module.scss';

const LoginForm = memo(() => {
    const { t } = useTranslation();
    useDynamicModuleLoader({ loginForm: loginReducer });
    const dispatch = useAppDispatch();
    const {
        username,
        password,
        isLoading,
        error,
    } = useAppSelector(loginSelector);

    const onSetUsername = useCallback((val: string) => {
        dispatch(setUsername(val));
    }, [dispatch]);

    const onSetPassword = useCallback((val: string) => {
        dispatch(setPassword(val));
    }, [dispatch]);

    const onSignIn = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={cls.loginForm}>
            <Text title={t('Форма входа')} />
            {isLoading && <Spinner />}
            {error && <Text text={t('Неверный логин или пароль')} variant={TextVariant.RED} />}
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
            <Button
                onClick={onSignIn}
                disabled={isLoading}
            >
                {t('Вход')}
            </Button>
        </div>
    );
});

export default LoginForm;
