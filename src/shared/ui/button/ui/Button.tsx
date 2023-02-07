import { classNames } from "shared/lib/helpers/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button = ({ className, children, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls.clear])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
