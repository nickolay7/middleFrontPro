import {
    createContext, Dispatch, SetStateAction, useContext,
} from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}
export interface IThemeContext {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const useThemeContext = () => useContext(ThemeContext);
