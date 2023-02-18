import { ReactNode } from 'react';
import About from 'shared/assets/icons/about.svg';
import Home from 'shared/assets/icons/home.svg';

import cls from '../ui/sideBar/sideBar.module.scss';

export enum LinkTHeme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface MenuItem {
    to: string;
    title: string;
    theme?: LinkTHeme;
    Icon?: ReactNode;
}

export const menuConfig: MenuItem[] = [
    {
        to: '/',
        title: 'Домой',
        theme: LinkTHeme.PRIMARY,
        // @ts-ignore
        Icon: <Home className={cls.icon} />,
    },
    {

        to: '/about',
        title: 'О нас',
        theme: LinkTHeme.SECONDARY,
        // @ts-ignore
        Icon: <About className={cls.icon} />,
    },
];
