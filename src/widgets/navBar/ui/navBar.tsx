import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/modal';
import { Button } from 'shared/ui/button';

import cls from './navBar.module.scss';
import { Portal } from '../../../shared/ui/portal';

export const NavBar = () => {
    const { t } = useTranslation('about');

    const [isModalOpen, setModalOpen] = useState(true);

    const toggleHandler = useCallback(() => {
        setModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={cls.navBar}>
            <div className={cls.logo}>{t('Логотип')}</div>
            <Button onClick={toggleHandler}>{t('Вход')}</Button>
            <Portal>
                <Modal isModalOpen={isModalOpen} toggleHandler={toggleHandler}>
                    {'Lorem ipsum dolor sit amet,'
                        + ' consectetur adipisicing elit.'
                        + ' Ex fuga necessitatibus obcaecati perspiciatis saepe!'
                        + ' Aliquam assumenda blanditiis consectetur enim eos incidunt minus,'
                        + ' nisi optio placeat quidem quos rem suscipit, tempore.'}
                </Modal>
            </Portal>
        </div>
    );
};
