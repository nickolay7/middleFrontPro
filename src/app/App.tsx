import { memo, Suspense, useEffect } from 'react';

import { NavBar } from '@/widgets/navBar';
import { SideBar } from '@/widgets/sideBar';
import { initUserSelector, initAuthData } from '@/entities/user';
import AppRoutes from './appRoutes/appRoutes';
import { useAppDispatch, useAppSelector } from './providers/storeProvider';
import { Loader } from '@/shared/ui/loader';
import { ToggleFeaturesElement } from '@/shared/lib/helpers/features/toggleFeaturesElement';
import { withTheme } from './providers/theme/withTheme';

const App = memo(() => {
    const dispatch = useAppDispatch();
    const init = useAppSelector(initUserSelector);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!init) {
        return <Loader />;
    }

    return (
        <ToggleFeaturesElement
            feature="isRedesigned"
            on={
                <div className="app_redesigned">
                    <Suspense fallback="">
                        <NavBar />
                        <div className="main">
                            <SideBar />
                            {init && <AppRoutes />}
                        </div>
                    </Suspense>
                </div>
            }
            off={
                <div className="app">
                    <Suspense fallback="">
                        <NavBar />
                        <div className="main">
                            <SideBar />
                            {init && <AppRoutes />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
});

export default withTheme(App);
