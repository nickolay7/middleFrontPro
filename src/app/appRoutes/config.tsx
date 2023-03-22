import { MainAsync } from 'pages/main';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { ReactElement } from 'react';
import { AboutAsync } from 'pages/about/ui/aboutAsync';
import { ArticlesPage } from 'pages/articlesPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';

export enum AppPaths {
   MAIN = '/',
   ABOUT = '/about',
   PROFILE = '/profile/:id',
   ARTICLES = '/articles',
   ARTICLE_DETAILS = '/articles/:id',
   // routes end
   NOTFOUND = '/*',
}

export type AppRouteProps = RouteProps & {
    path: AppPaths;
    element: ReactElement;
    authOnly?: boolean;
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
];
