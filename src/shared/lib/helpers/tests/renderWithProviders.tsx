import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18nForTests';
import { StoreProvider } from '@/app/providers/storeProvider/storeProvider';
import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';
import { Theme, ThemeProvider } from '@/app/providers/theme';
import '../../../../app/styles/index.scss';

interface RenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

interface TestOptionsProps {
    children: ReactNode;
    options: RenderOptions;
}

export const TestOptions = (props: TestOptionsProps) => {
    const {
        children,
        options: { route = '/', initialState, asyncReducers },
    } = props;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState}
                asyncReducers={asyncReducers}
            >
                <ThemeProvider initialTheme={Theme.LIGHT}>
                    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
                </ThemeProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

export default (children: ReactNode, options: RenderOptions = {}) => {
    render(<TestOptions options={options}>{children}</TestOptions>);
};
