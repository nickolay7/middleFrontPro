import { Suspense } from 'react';
import { classNames } from 'shared/lib/helpers';

import { useTheme } from 'shared/lib/hooks';

import { NavBar } from 'widgets/navBar';
import AppRoutes from './appRoutes/appRoutes';

import './styles/index.scss';
import { SideBar } from '../widgets/sideBar';

const App = () => {
    const { theme } = useTheme();
    const appStyle = classNames('app', {}, [theme]);

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
