import { Route, Routes } from 'react-router-dom';
import { useCallback } from 'react';
import { AppRouteProps, pathsConfig } from './config';
import { ProtectedRoute } from './protectedRoute';

const AppRoutes = () => {
    const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRouteProps) => (
        <Route
            key={path}
            path={path}
            element={(
                authOnly
                    ? (
                        <ProtectedRoute>
                            {element}
                        </ProtectedRoute>
                    )
                    : element
            )}
        />
    ), []);

    return (
        <Routes>
            {
                pathsConfig.map(renderWithWrapper)
            }
        </Routes>
    );
};
export default AppRoutes;
