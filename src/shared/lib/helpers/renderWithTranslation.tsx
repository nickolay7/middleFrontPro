// the hoc
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import i18n from 'shared/config/i18nForTests';
import { ReactNode } from 'react';

export default (component: ReactNode) => {
    render(
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>,
    );
};
