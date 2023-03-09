import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/loader';
import { authUserSelector } from 'entities/user';
import { pathsConfig } from './config';
import { useAppSelector } from '../providers/storeProvider';

const AppRoutes = () => {
    const isAuth = useAppSelector(authUserSelector);
    const pathsFilteredByAuth = pathsConfig.filter(({ authOnly }) => {
        if (!authOnly) return true;
        return authOnly && isAuth;
    });

    return (
        <Routes>
            {
                pathsFilteredByAuth.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<Loader />}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))
            }
        </Routes>
    );
};

export default AppRoutes;
