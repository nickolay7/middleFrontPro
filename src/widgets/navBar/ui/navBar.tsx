import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { LoginModal } from '@/features/authByUserName';
import { useAppSelector } from '@/app/providers/storeProvider/config/hooks';
import { authUserSelector, User } from '@/entities/user';
import { HStack } from '@/shared/ui/stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { ElementTheme } from '@/shared/types/ui';
import { LinkPath } from '../../sideBar/types/types';

import cls from './navBar.module.scss';

export const NavBar = memo(() => {
    const { t } = useTranslation('about');
    const navigate = useNavigate();
    const authData = useAppSelector<User | undefined>(authUserSelector);
    const [isModalOpen, setModalOpen] = useState(false);

    const onModalToggle = useCallback(() => {
        setModalOpen((prev) => !prev);
    }, []);

    const onCreateArticle = () => {
        navigate(`${LinkPath.ARTICLES}new`);
    };

    return (
        <HStack justify="justifyBetween" className={cls.navBar}>
            <div className={cls.logo}>{t('Логотип')}</div>
            {
                authData
                    ? (
                        <HStack justify="justifyBetween" gap="gap16">
                            <Button
                                onClick={onCreateArticle}
                                variant={ElementTheme.OUTLINE_INVERTED}
                            >
                                {t('Создать статью')}
                            </Button>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    )
                    : (
                        <>
                            <Button
                                onClick={onModalToggle}
                                variant={ElementTheme.CLEAR_INVERTED}
                            >
                                {t('Вход')}
                            </Button>
                            <LoginModal
                                isModalOpen={isModalOpen}
                                toggleHandler={onModalToggle}
                            />
                        </>
                    )
            }
        </HStack>
    );
});
