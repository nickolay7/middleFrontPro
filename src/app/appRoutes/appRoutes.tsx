import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/loader';
import { AppRouteProps, pathsConfig } from './config';
import { ProtectedRoute } from './protectedRoute';

const AppRoutes = () => {
    const renderWithWrapper = ({ path, element, authOnly }: AppRouteProps) => (
        <Route
            key={path}
            path={path}
            element={(
                authOnly
                    ? (
                        <ProtectedRoute>
                            <Suspense fallback={<Loader />}>
                                {element}
                            </Suspense>
                        </ProtectedRoute>
                    )
                    : element
            )}
        />
    );

    return (
        <Routes>
            {
                pathsConfig.map(renderWithWrapper)
            }
        </Routes>
    );
};
export default AppRoutes;
