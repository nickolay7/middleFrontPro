import { useTranslation } from 'react-i18next';

import cls from './navBar.module.scss';

export const NavBar = () => {
    const { t } = useTranslation('about');

    return (
        <div className={cls.navBar}>
            <div className={cls.logo}>{t('Логотип')}</div>
        </div>
    );
};
