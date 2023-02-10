import { Main } from 'pages/main';
import { About } from 'pages/about';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/notFoundPage';

export enum AppPaths {
   MAIN = '/',
   ABOUT = '/about',
   NOTFOUND = '/*'
}
export const pathsConfig: RouteProps[] = [
    {
        path: AppPaths.MAIN,
        element: <Main />,
    },
    {
        path: AppPaths.ABOUT,
        element: <About />,
    },
    {
        path: AppPaths.NOTFOUND,
        element: <NotFoundPage />,
    },
];
