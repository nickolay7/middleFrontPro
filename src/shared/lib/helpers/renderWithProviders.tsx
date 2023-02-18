import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import i18n from 'shared/config/i18nForTests';

export default (component: ReactNode) => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
