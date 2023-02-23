import { Button } from 'shared/ui/button';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/input';
import { useInput } from 'shared/ui/input/lib/useInput';
import cls from './login.module.scss';

export const LoginForm = () => {
    const { t } = useTranslation();

    const [username, setUsername] = useInput();
    const [password, setPassword] = useInput();

    return (
        <div className={cls.loginForm}>
            <Input
                type="text"
                onChange={setUsername}
                value={username}
                placeholder={t('введите имя')}
                autoFocus
            />
            <Input
                type="text"
                onChange={setPassword}
                value={password}
                placeholder={t('введите пароль')}
            />
            <Button>{t('Вход')}</Button>
        </div>
    );
};
