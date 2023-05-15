import { ButtonHTMLAttributes, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import ThemeDark from '@/shared/assets/icons/theme-dark.svg';
import ThemeLight from '@/shared/assets/icons/theme-light.svg';
import ThemeNeon from '@/shared/assets/icons/theme-neon.svg';
import { useTheme } from '@/shared/lib/hooks';
import { Theme } from '@/app/providers/theme';
import { Button } from '@/shared/ui/button';
import cls from './ThemeSwitcher.module.scss';
import { ElementTheme } from '@/shared/types/ui';
import { useAppDispatch } from '@/app/providers/storeProvider';
import { setUserJsonSettings } from '@/entities/user';

export interface ThemeSwitcherProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ElementTheme;
}
export const ThemeSwitcher = memo(
    ({ className, ...otherProps }: ThemeSwitcherProps) => {
        const dispatch = useAppDispatch();
        const { theme, changeTheme } = useTheme((newTheme) => {
            dispatch(setUserJsonSettings({ theme: newTheme }));
        });
        const { variant = ElementTheme.CLEAR } = otherProps;

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

        const onToggleTheme = useCallback(() => {
            changeTheme();
        }, [changeTheme]);

        return (
            <Button
                variant={variant}
                onClick={onToggleTheme}
                className={classNames(cls.ThemeSwitcher, {}, [className])}
            >
                {themeStyle}
            </Button>
        );
    },
);
