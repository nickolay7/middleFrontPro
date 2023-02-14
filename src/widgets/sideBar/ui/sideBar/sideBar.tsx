import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import { Button } from 'shared/ui/button';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/langSwitcher';
import cls from './sideBar.module.scss';

interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
    const [isOpen, setOpen] = useState(false);
    const { t } = useTranslation();

    const onClose = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sideBar, { [cls.close]: isOpen }, [className])}
        >
            <Button data-testid="collapse" onClick={onClose}>
                {!isOpen ? t('Свернуть') : t('Развернуть')}
            </Button>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    );
};
