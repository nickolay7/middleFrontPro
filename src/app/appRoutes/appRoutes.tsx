import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {pathsConfig} from "./config";

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {
                    pathsConfig.map(({path, element}) => (
                        <Route key={path} path={path} element={element} />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
