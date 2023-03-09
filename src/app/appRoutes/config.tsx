import { MainAsync } from 'pages/main';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { AboutAsync } from '../../pages/about/ui/aboutAsync';

export enum AppPaths {
   MAIN = '/',
   ABOUT = '/about',
   PROFILE = '/profile',
   // routes end
   NOTFOUND = '/*',
}

type AppRouteProps = RouteProps & {
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
