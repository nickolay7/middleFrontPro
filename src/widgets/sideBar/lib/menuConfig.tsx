import About from 'shared/assets/icons/about.svg';
import Home from 'shared/assets/icons/home.svg';
import Profile from 'shared/assets/icons/profile.svg';
import Article from 'shared/assets/icons/article.svg';
import { useAppSelector } from 'app/providers/storeProvider';
import { authUserSelector } from 'entities/user';
import { LinkPath, MenuItem } from './types';

export const useMenuConfig = (): MenuItem[] => {
    const user = useAppSelector(authUserSelector);

    return [
        {
            to: LinkPath.MAIN,
            title: 'Домой',
            Icon: Home,
        },
        {
            to: LinkPath.ABOUT,
            title: 'О нас',
            Icon: About,
        },
        {
            to: `${LinkPath.PROFILE}${user?.id}`,
            title: 'Профиль',
            Icon: Profile,
            authOnly: true,
        },
        {
            to: LinkPath.ARTICLES,
            title: 'Статьи',
            Icon: Article,
            authOnly: true,
        },
    ];
};
