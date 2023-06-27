import { ComponentType } from 'react';
import { useAppSelector } from '@/app/providers/storeProvider';
import { jsonSettingsSelector } from '@/entities/user';
import { ThemeProvider } from './themeProvider';

export const withTheme = (Component: ComponentType) => () => {
    const { theme: defaultTheme } = useAppSelector(jsonSettingsSelector);
    return (
        <ThemeProvider initialTheme={defaultTheme}>
            <Component />
        </ThemeProvider>
    );
};
