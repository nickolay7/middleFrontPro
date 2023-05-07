import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    useThemeContext,
} from '@/app/providers/theme';

interface UseThemeResult {
    theme: Theme;
    changeTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
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
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeStyle);
    };

    document.body.className = theme;

    return { theme, changeTheme };
};
