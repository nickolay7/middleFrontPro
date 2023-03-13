import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/loader';
import { pathsConfig } from './config';
import { ProtectedRoute } from './protectedRoute';

const AppRoutes = () => (
    <Routes>
        {
            pathsConfig.map((
                { path, element, authOnly },
            ) => (
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
                            : (
                                <Suspense fallback={<Loader />}>
                                    {element}
                                </Suspense>
                            )
                    )}
                />
            ))
        }
    </Routes>
);
export default AppRoutes;
