import { classNames } from 'shared/lib/helpers/classNames';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/theme-light.svg';
import ThemeNeon from 'shared/assets/icons/theme-neon.svg';
import { useTheme } from 'shared/lib/hooks';
import { Theme } from 'app/providers/theme';
import { ButtonHTMLAttributes, memo } from 'react';
import { Button, ButtonTheme } from '../../../shared/ui/button';
import cls from './ThemeSwitcher.module.scss';

export interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonTheme;
}
export const ThemeSwitcher = memo(({ className, ...otherProps }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();
    const { variant = ButtonTheme.CLEAR } = otherProps;

    let themeStyle;

    switch (theme) {
    case Theme.DARK:
        themeStyle = <ThemeDark />;
        break;
    case Theme.LIGHT:
        themeStyle = <ThemeLight />;
        break;
    case Theme.NEON:
        themeStyle = <ThemeNeon />;
        break;
    default:
        themeStyle = <ThemeLight />;
        break;
    }

    return (
        <Button
            variant={variant}
            onClick={changeTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {themeStyle}
        </Button>
    );
});
