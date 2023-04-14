import { MainAsync } from 'pages/main';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { ReactElement } from 'react';
import { AboutAsync } from 'pages/about/ui/aboutAsync';
import { ArticlesPage } from 'pages/articlesPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { ArticleEditPage } from 'pages/articleEditPage';
import { AdminPanelPage } from 'pages/adminPanelPage';
import { UserRoles } from 'entities/user';
import { ForbiddenPage } from '../../pages/forbiddenPage';

export enum AppPaths {
   MAIN = '/',
   ABOUT = '/about',
   PROFILE = '/profile/:id',
   ARTICLES = '/articles',
   ARTICLE_DETAILS = '/articles/:id',
   ARTICLE_EDIT = '/articles/:id/edit',
   ARTICLE_CREATE = '/articles/new',
   ADMIN_PANEL = '/admin',
   FORBIDDEN = '/forbidden',
   // routes end
   NOTFOUND = '/*',
}

export type AppRouteProps = RouteProps & {
    path: AppPaths;
    element: ReactElement;
    authOnly?: boolean;
    roles?: UserRoles[];
}

export const pathsConfig: AppRouteProps[] = [
    {
        path: AppPaths.MAIN,
        element: <MainAsync />,
    },
    {
        path: AppPaths.ABOUT,
        element: <AboutAsync />,
    },
    {
        path: AppPaths.NOTFOUND,
        element: <NotFoundPage />,
    },
    {
        path: AppPaths.PROFILE,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: AppPaths.ARTICLES,
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: AppPaths.ARTICLE_DETAILS,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: AppPaths.ARTICLE_EDIT,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: AppPaths.ARTICLE_CREATE,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: AppPaths.ADMIN_PANEL,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRoles.MANAGER, UserRoles.ADMIN],
    },
    {
        path: AppPaths.FORBIDDEN,
        element: <ForbiddenPage />,
    },
];
