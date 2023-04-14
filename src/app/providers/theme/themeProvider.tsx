import {
    FC, ReactNode, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const themeLS = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme = Theme.LIGHT,
        children,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || themeLS as Theme);

    const value = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
