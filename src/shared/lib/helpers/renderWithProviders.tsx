import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { DeepPartial } from '@reduxjs/toolkit';

import i18n from 'shared/config/i18nForTests';
import { StoreProvider } from 'app/providers/storeProvider/storeProvider';
import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

interface RenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export default (children: ReactNode, options?: RenderOptions) => {
    render(
        <StoreProvider initialState={options?.initialState}>
            <MemoryRouter initialEntries={[options?.route || '/']}>
                <I18nextProvider i18n={i18n}>
                    {children}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};
