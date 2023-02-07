import { classNames } from "shared/lib/helpers/classNames";
import ThemeDark from "shared/assets/icons/theme-dark.svg";
import ThemeLight from "shared/assets/icons/theme-light.svg";
import { useTheme } from "shared/lib/hooks";
import { Theme } from "app/providers/theme";
import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "../../button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, changeTheme } = useTheme();

  return (
    <Button
      onClick={changeTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.LIGHT ? <ThemeLight /> : <ThemeDark />}
    </Button>
  );
};
