import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../providers/storeProvider';
import { authUserSelector } from '../../entities/user';
import { AppPaths } from './config';

interface ProtectedRouteProps {
    children: ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const isAuth = useAppSelector(authUserSelector);

    if (!isAuth) {
        // eslint-disable-next-line i18next/no-literal-string
        return <Navigate to={AppPaths.MAIN} replace />;
    }

    return children;
};
