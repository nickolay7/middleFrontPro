import About from '@/shared/assets/icons/about.svg';
import Home from '@/shared/assets/icons/home.svg';
import Profile from '@/shared/assets/icons/profile.svg';
import Article from '@/shared/assets/icons/article.svg';
import { useAppSelector } from '@/app/providers/storeProvider';
import { authUserSelector } from '@/entities/user';
import { MenuItem } from '../types/types';
import {
    getAbout,
    getArticles,
    getMain,
    getProfile,
} from '@/shared/consts/consts';

export const useMenuConfig = (): MenuItem[] => {
    const user = useAppSelector(authUserSelector);

    return [
        {
            to: getMain(),
            title: 'Домой',
            Icon: Home,
        },
        {
            to: getAbout(),
            title: 'О нас',
            Icon: About,
        },
        {
            to: getProfile(user?.id || ''),
            title: 'Профиль',
            Icon: Profile,
            authOnly: true,
        },
        {
            to: getArticles(),
            title: 'Статьи',
            Icon: Article,
            authOnly: true,
        },
    ];
};
