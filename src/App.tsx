import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "helpers/classNames";

import Main from "pages/main/main";
import About from "pages/about/about";

import {useTheme} from "theme/useTheme";

import "styles/index.scss";
const App = () => {
    const { theme, changeTheme } = useTheme();
    const appStyle = classNames('app', {}, [theme]);

    return (
        <div className={appStyle}>
            <Link to="/main">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={changeTheme}>Set theme</button>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/main" element={<Main />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </Suspense>
        </div>
    );
};
export default App;
