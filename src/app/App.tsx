import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";

import {classNames} from "shared/lib/helpers";
import {Main} from "pages/main";
import {About} from "pages/about";

import {useTheme} from "shared/lib/hooks";

import "./styles/index.scss";
const App = () => {
    const { theme, changeTheme } = useTheme();
    const appStyle = classNames('app', {}, [theme]);

    return (
        <div className={appStyle}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={changeTheme}>Set theme</button>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </Suspense>
        </div>
    );
};
export default App;
