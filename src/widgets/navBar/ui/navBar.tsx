import React from 'react';
import { MenuLink } from 'shared/ui/menuLink';

import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/langSwitcher';
import { menuConfig } from '../lib/menuConfig';
import cls from './navBar.module.scss';

export const NavBar = () => {
    const { t } = useTranslation('about');

    return (
        <div className={cls.navBar}>
            <div className={cls.logo}>{t('Logo')}</div>
            <div className={cls.links}>
                {menuConfig.map(({ to, title }) => (
                    <MenuLink key={to} to={to}>
                        {t(title)}
                    </MenuLink>
                ))}
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
