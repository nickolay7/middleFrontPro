import { classNames } from "shared/lib/helpers";

import { useTheme } from "shared/lib/hooks";

import AppRoutes from "./appRoutes/appRoutes";
import { NavBar } from "widgets/navBar";

import "./styles/index.scss";
import { SideBar } from "../widgets/sideBar";
import { Suspense } from "react";
const App = () => {
  const { theme, changeTheme } = useTheme();
  const appStyle = classNames("app", {}, [theme]);

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
