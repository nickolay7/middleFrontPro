import {Main} from "pages/main";
import {About} from "pages/about";
import {RouteProps} from "react-router-dom";

export enum AppPaths {
   MAIN = '/',
   ABOUT = '/about',
}
export const pathsConfig: RouteProps[] = [
    {
        path: AppPaths.MAIN,
        element: <Main />
    },
    {
        path: AppPaths.ABOUT,
        element: <About />
    }
];
