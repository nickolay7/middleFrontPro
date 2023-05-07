import { Route, Routes } from 'react-router-dom';
import { useCallback } from 'react';
import { pathsConfig } from './config/config';
import { ProtectedRoute } from './protectedRoute';
import { AppRouteProps } from './config/types/types';

const AppRoutes = () => {
    const renderWithWrapper = useCallback(
        ({ path, element, authOnly, roles }: AppRouteProps) => (
            <Route
                key={path}
                path={path}
                element={
                    authOnly ? (
                        <ProtectedRoute roles={roles}>{element}</ProtectedRoute>
                    ) : (
                        element
                    )
                }
            />
        ),
        [],
    );

    return <Routes>{pathsConfig.map(renderWithWrapper)}</Routes>;
};
export default AppRoutes;
