import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

import { Suspense } from 'react';
import i18n from '../i18n';

export const translateDecorator = (Story: Story) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <Story />
        </Suspense>
    </I18nextProvider>
);
