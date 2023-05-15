import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme, ThemeContext } from './themeContext';
import { useAppSelector } from '@/app/providers/storeProvider';
import { jsonSettingsSelector } from '@/entities/user';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { theme: defaultTheme } = useAppSelector(jsonSettingsSelector);

    const { initialTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(
        initialTheme || (defaultTheme as Theme),
    );

    useEffect(() => {
        setTheme(defaultTheme as Theme);
    }, [defaultTheme]);

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
