import { ReactElement, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import {
    authUserSelector, rolesSelector, UserRoles,
} from 'entities/user';
import { useAppSelector } from '../providers/storeProvider';
import { AppPaths } from './config';
import { Loader } from '../../shared/ui/loader';

interface ProtectedRouteProps {
    children: ReactElement;
    roles?: UserRoles[];
}

export const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
    const isAuth = useAppSelector(authUserSelector);
    const userRoles = useAppSelector(rolesSelector);

    const hasRequiredRoles = (roles?: UserRoles[]) => {
        if (!roles) return false;

        return !roles.some((requiredRole) => userRoles?.includes(requiredRole));
    };

    if (!isAuth) {
        return <Navigate to={AppPaths.MAIN} replace />;
    }

    if (hasRequiredRoles(roles)) {
        return <Navigate to={AppPaths.FORBIDDEN} replace />;
    }

    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
