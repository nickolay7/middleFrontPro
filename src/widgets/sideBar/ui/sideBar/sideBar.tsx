import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/button';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/langSwitcher';
import { MenuLink } from 'shared/ui/menuLink';
import cls from './sideBar.module.scss';
import { menuConfig } from '../../lib/menuConfig';

export interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    const [isOpen, setOpen] = useState(false);
    const { t } = useTranslation();

    const onClose = () => {
        setOpen((prev) => !prev);
    };

    const switchersBoxMode = {
        [cls.btnVerticalOrientation]: isOpen,
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sideBar, { [cls.close]: isOpen }, [className])}
        >
            <div className={classNames(cls.links, { [cls.linksVerticalOrientation]: isOpen })}>
                {menuConfig.map(({ to, title, Icon }) => (
                    <MenuLink key={to} to={to}>
                        {Icon}
                        <span className={classNames('', { [cls.linkLabel]: isOpen })}>
                            {t(title)}
                        </span>
                    </MenuLink>
                ))}
            </div>
            <div className={classNames(cls.switchersBox, switchersBoxMode)}>
                <ThemeSwitcher />
                <LangSwitcher variant={ButtonTheme.OUTLINE_INVERTED} short={isOpen} />
            </div>
            <Button
                data-testid="collapse"
                variant={ButtonTheme.CLEAR_INVERTED}
                className={classNames(cls.collapseButton, {})}
                onClick={onClose}
            >
                {!isOpen ? '<' : '>'}
            </Button>
        </div>
    );
};
