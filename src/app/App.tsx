import { Suspense } from 'react';
import { classNames } from 'shared/lib/helpers';

import { NavBar } from 'widgets/navBar';
import AppRoutes from './appRoutes/appRoutes';
import { SideBar } from '../widgets/sideBar';

const App = () => {
    const appStyle = classNames('app', {}, []);

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
