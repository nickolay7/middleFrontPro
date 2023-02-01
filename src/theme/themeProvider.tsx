import {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./themeContext";

export const ThemeProvider: FC = ({children}) => {
    const themeLS = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
    const [theme, setTheme] = useState<Theme>(themeLS as Theme);

    const value = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>)
}
