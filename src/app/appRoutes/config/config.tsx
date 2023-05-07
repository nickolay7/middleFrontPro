import { MainAsync } from '@/pages/main';
import { NotFoundPage } from '@/pages/notFoundPage';
import { ProfilePage } from '@/pages/profilePage';
import { About } from '@/pages/about';
import { ArticlesPage } from '@/pages/articlesPage';
import { ArticleDetailsPage } from '@/pages/articleDetailsPage';
import { ArticleEditPage } from '@/pages/articleEditPage';
import { AdminPanelPage } from '@/pages/adminPanelPage';
import { UserRoles } from '@/entities/user';
import { ForbiddenPage } from '@/pages/forbiddenPage';
import {
    getAbout,
    getAdmin,
    getArticleCreate,
    getArticleDetails,
    getArticleEdit,
    getArticles,
    getForbidden,
    getMain,
    getNotFound,
    getProfile,
} from '@/shared/consts/consts';
import { AppRouteProps } from './types/types';

export const pathsConfig: AppRouteProps[] = [
    {
        path: getMain(),
        element: <MainAsync />,
    },
    {
        path: getAbout(),
        element: <About />,
    },
    {
        path: getNotFound(),
        element: <NotFoundPage />,
    },
    {
        path: getProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: getArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: getArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: getArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: getArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: getAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRoles.MANAGER, UserRoles.ADMIN],
    },
    {
        path: getForbidden(),
        element: <ForbiddenPage />,
    },
];
