import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { pathsConfig } from './config';
import { Loader } from '../../shared/ui/loader';

const AppRoutes = () => (
    <Routes>
        {
            pathsConfig.map(({ path, element }) => (
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

export default AppRoutes;
