import React, { memo, useState } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui/button';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/langSwitcher';
import { VStack } from 'shared/ui/stack';
import { useMenuConfig } from '../../lib/menuConfig';
import { SideBarItem } from '../sideBarItem/sideBarItem';
import cls from './sideBar.module.scss';

export interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [isOpen, setOpen] = useState(false);
    const menuConfig = useMenuConfig();

    const onClose = () => {
        setOpen((prev) => !prev);
    };

    const switchersBoxMode = {
        [cls.btnVerticalOrientation]: isOpen,
    };

    return (
        <VStack
            data-testid="sidebar"
            justify="justifyBetween"
            className={classNames(cls.sideBar, { [cls.close]: isOpen }, [className])}
        >
            <VStack
                align="alignStart"
                gap="gap8"
                className={classNames(cls.links, { [cls.linksSideBarCollapsed]: isOpen })}
            >
                {menuConfig.map(({
                    to, title, Icon, authOnly,
                }) => (
                    <SideBarItem
                        key={to}
                        to={to}
                        title={title}
                        isOpen={isOpen}
                        Icon={Icon}
                        authOnly={authOnly}
                    />
                ))}
            </VStack>
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
        </VStack>
    );
});
