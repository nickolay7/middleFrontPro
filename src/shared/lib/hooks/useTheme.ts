import {LOCAL_STORAGE_THEME_KEY, Theme, useThemeContext} from "../../../app/providers/theme/themeContext";

interface UseThemeResult {
    theme: Theme;
    changeTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useThemeContext();

    const themeStyle = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    const changeTheme = () => {
        setTheme(themeStyle);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeStyle);
    }

    return {theme, changeTheme};
};
