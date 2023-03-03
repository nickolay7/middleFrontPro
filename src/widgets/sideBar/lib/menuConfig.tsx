import About from 'shared/assets/icons/about.svg';
import Home from 'shared/assets/icons/home.svg';
import Profile from 'shared/assets/icons/profile.svg';
import { MenuItem } from './types';

export const menuConfig: MenuItem[] = [
    {
        to: '/',
        title: 'Домой',
        // @ts-ignore
        Icon: Home,
    },
    {
        to: '/about',
        title: 'О нас',
        // @ts-ignore
        Icon: About,
    },
    {
        to: '/profile',
        title: 'Профиль',
        // @ts-ignore
        Icon: Profile,
    },
];
