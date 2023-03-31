import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';

import { Button, ButtonTheme } from 'shared/ui/button';
import { LoginModal } from 'features/authByUserName';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider/config/hooks';
import { authUserSelector, User } from 'entities/user';
import { setUserLogout } from 'entities/user/model/userSlice/userSlice';
import { LinkPath } from '../../sideBar/lib/types';

import cls from './navBar.module.scss';

export const NavBar = memo(() => {
    const { t } = useTranslation('about');
    const authData = useAppSelector<User | undefined>(authUserSelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [isModalOpen, setModalOpen] = useState(true);

    const onModalToggle = useCallback(() => {
        setModalOpen((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(setUserLogout());
    }, [dispatch]);

    const onCreateArticle = () => {
        navigate(`${LinkPath.ARTICLES}new`);
    };

    return (
        <div className={cls.navBar}>
            <div className={cls.logo}>{t('Логотип')}</div>
            <Button onClick={onCreateArticle} variant={ButtonTheme.OUTLINE_INVERTED}>{t('Создать статью')}</Button>
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
