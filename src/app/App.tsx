import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers';

import { NavBar } from 'widgets/navBar';
import { SideBar } from 'widgets/sideBar';
import { initAuthData, initUserSelector } from 'entities/user';
import AppRoutes from './appRoutes/appRoutes';
import { useAppDispatch, useAppSelector } from './providers/storeProvider';

const App = () => {
    const dispatch = useAppDispatch();
    const init = useAppSelector(initUserSelector);
    const appStyle = classNames('app', {}, []);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    return (
        <div className={appStyle}>
            <Suspense fallback="">
                <NavBar />
                <div className="main">
                    <SideBar />
                    {init && <AppRoutes />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
