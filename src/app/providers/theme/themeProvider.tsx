import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme, ThemeContext } from './themeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme as Theme);

    useEffect(() => {
        setTheme(initialTheme as Theme);
    }, [initialTheme]);

    const value = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
