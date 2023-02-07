import { classNames } from "shared/lib/helpers";

import { useTheme } from "shared/lib/hooks";

import AppRoutes from "./appRoutes/appRoutes";
import { NavBar } from "widgets/navBar";

import "./styles/index.scss";
const App = () => {
  const { theme, changeTheme } = useTheme();
  const appStyle = classNames("app", {}, [theme]);

  return (
    <div className={appStyle}>
      <NavBar />
      <AppRoutes />
    </div>
  );
};
export default App;
