import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

import cls from "./styles.module.scss";

interface AppLinkProps extends LinkProps {
  classname?: string;
  theme?: string;
}

export const MenuLink: FC<AppLinkProps> = (props) => {
  const { to, children } = props;

  return (
    <Link className={cls.navLink} to={to}>
      {children}
    </Link>
  );
};
