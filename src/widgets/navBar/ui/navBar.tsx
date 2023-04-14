import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';

import { Button, ButtonTheme } from 'shared/ui/button';
import { LoginModal } from 'features/authByUserName';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider/config/hooks';
import {
    authUserSelector, isAdminSelector, isManagerSelector, User,
} from 'entities/user';
import { setUserLogout } from 'entities/user/model/userSlice/userSlice';
import { Dropdown } from 'shared/ui/dropdown/ui/dropdown';
import { Avatar } from 'shared/ui/avatar';
import { LinkPath } from '../../sideBar/lib/types';

import cls from './navBar.module.scss';

export const NavBar = memo(() => {
    const { t } = useTranslation('about');
    const authData = useAppSelector<User | undefined>(authUserSelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAdmin = useAppSelector(isAdminSelector);
    const isManager = useAppSelector(isManagerSelector);

    const hasRules = isAdmin || isManager;

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
                        <Dropdown
                            direction="down-left"
                            trigger={<Avatar size={30} src={authData?.avatar} />}
                            items={[
                                ...(
                                    hasRules ? [
                                        {
                                            content: t('Админка'),
                                            href: `${LinkPath.ADMIN}`,
                                        },
                                    ] : []
                                ),
                                {
                                    content: t('Профиль'),
                                    href: `${LinkPath.PROFILE}${authData.id}`,
                                },
                                {
                                    content: t('Выход'),
                                    onClick: onLogout,
                                },
                            ]}
                        />
                    )
                    : (
                        <Dropdown
                            direction="down-left"
                            trigger={t('Вход')}
                            items={[
                                {
                                    content: t('Вход'),
                                    onClick: onModalToggle,
                                },
                            ]}
                        />
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
