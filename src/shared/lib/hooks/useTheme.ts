import { Theme, useThemeContext } from '@/app/providers/theme';

interface UseThemeResult {
    theme: Theme;
    changeTheme: () => void;
}

type UseThemeProps = (theme: Theme) => void;

export const useTheme = (saveThemeAction?: UseThemeProps): UseThemeResult => {
    const { theme, setTheme } = useThemeContext();

    let themeStyle: Theme;

    switch (theme) {
        case Theme.DARK:
            themeStyle = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            themeStyle = Theme.NEON;
            break;
        case Theme.NEON:
            themeStyle = Theme.DARK;
            break;
        default:
            themeStyle = Theme.LIGHT;
            break;
    }

    const changeTheme = () => {
        setTheme(themeStyle);
        saveThemeAction?.(themeStyle);
    };

    document.body.className = theme;

    return { theme, changeTheme };
};
