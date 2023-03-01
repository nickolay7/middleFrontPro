import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers';

import { NavBar } from 'widgets/navBar';
import AppRoutes from './appRoutes/appRoutes';
import { SideBar } from '../widgets/sideBar';
import { useAppDispatch } from './providers/storeProvider/config/hooks';
import { initAuthData } from '../entities/user/model/userSlice/userSlice';

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
