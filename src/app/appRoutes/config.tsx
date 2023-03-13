import { MainAsync } from 'pages/main';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { ReactElement } from 'react';
import { AboutAsync } from '../../pages/about/ui/aboutAsync';

export enum AppPaths {
   MAIN = '/',
   ABOUT = '/about',
   PROFILE = '/profile',
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
];
