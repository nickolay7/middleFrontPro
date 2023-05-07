import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/shared/ui/page';

import cls from './adminPanelPage.module.scss';

export interface AdminPanelPageProps {
    className?: string;
}
export const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => (
    <Page
        data-testid="AdminPanelPage"
        className={classNames(cls.adminPanelPage, {}, [className])}
        // eslint-disable-next-line i18next/no-literal-string
    >
        ADMIN PANEL
    </Page>
));
