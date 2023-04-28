import { RouteProps } from 'react-router-dom';
import { ReactElement } from 'react';
import { UserRoles } from '@/entities/user';

export type AppRouteProps = RouteProps & {
    path: string;
    element: ReactElement;
    authOnly?: boolean;
    roles?: UserRoles[];
}
