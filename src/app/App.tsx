import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers';

import { NavBar } from 'widgets/navBar';
import { SideBar } from 'widgets/sideBar';
import { initAuthData } from 'entities/user';
import AppRoutes from './appRoutes/appRoutes';
import { useAppDispatch } from './providers/storeProvider';

const App = () => {
    const appStyle = classNames('app', {}, []);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (
        <div className={appStyle}>
            <Suspense fallback="">
                <NavBar />
                <div className="main">
                    <SideBar />
                    <AppRoutes />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
