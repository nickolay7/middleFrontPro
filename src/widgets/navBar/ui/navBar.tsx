import React from "react";
import { MenuLink } from "shared/ui/menuLink";

import cls from "./styles.module.scss";
import { menuConfig } from "../lib/menuConfig";
import { ThemeSwitcher } from "../../../shared/ui/themeSwitcher";
export const NavBar = () => {
  return (
    <div className={cls.navBar}>
      <div className={cls.logo}>Logo</div>
      <div className={cls.links}>
        {menuConfig.map(({ to, title }) => (
          <MenuLink key={to} to={to}>
            {title}
          </MenuLink>
        ))}
        <ThemeSwitcher />
      </div>
    </div>
  );
};
