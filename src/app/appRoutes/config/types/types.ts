import { RouteProps } from 'react-router-dom';
import { ReactElement } from 'react';
import { UserRoles } from 'entities/user';
import { AppPaths } from '../consts/consts';

export type AppRouteProps = RouteProps & {
    path: AppPaths;
    element: ReactElement;
    authOnly?: boolean;
    roles?: UserRoles[];
}
