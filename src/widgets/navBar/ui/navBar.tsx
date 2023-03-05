import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';

import { Button, ButtonTheme } from 'shared/ui/button';
import { LoginModal } from 'features/authByUserName';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider/config/hooks';
import { authUserSelector } from 'entities/user/model/selectors/ authUserSelector/authUserSelector';
import { User } from 'entities/user';
import { setUserLogout } from 'entities/user/model/userSlice/userSlice';

import cls from './navBar.module.scss';

export const NavBar = memo(() => {
    const { t } = useTranslation('about');
    const authData = useAppSelector<User | undefined>(authUserSelector);
    const dispatch = useAppDispatch();

    const [isModalOpen, setModalOpen] = useState(true);

    const onModalToggle = useCallback(() => {
        setModalOpen((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(setUserLogout());
    }, [dispatch]);

    return (
        <div className={cls.navBar}>
            <div className={cls.logo}>{t('Логотип')}</div>
            {
                authData
                    ? (
                        <Button
                            variant={ButtonTheme.OUTLINE_INVERTED}
                            onClick={onLogout}
                        >
                            {t('Выход')}
                        </Button>
                    )
                    : (
                        <Button
                            variant={ButtonTheme.OUTLINE_INVERTED}
                            onClick={onModalToggle}
                        >
                            {t('Вход')}
                        </Button>
                    )
            }
            {
                !isModalOpen && !authData && (
                    <LoginModal
                        isModalOpen={isModalOpen}
                        toggleHandler={onModalToggle}
                    />
                )
            }
        </div>
    );
});
