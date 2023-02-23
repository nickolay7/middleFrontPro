import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'shared/ui/button';

import { Portal } from 'shared/ui/portal';
import { LoginModal } from 'features/authByUserName';
import cls from './navBar.module.scss';

export const NavBar = () => {
    const { t } = useTranslation('about');

    const [isModalOpen, setModalOpen] = useState(true);
    useEffect(() => {

    });

    const toggleHandler = useCallback(() => {
        setModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={cls.navBar}>
            <div className={cls.logo}>{t('Логотип')}</div>
            <Button onClick={toggleHandler}>{t('Вход')}</Button>
            {
                !isModalOpen && (
                    <Portal>
                        <LoginModal isModalOpen={isModalOpen} toggleHandler={toggleHandler} />
                    </Portal>
                )
            }
        </div>
    );
};
