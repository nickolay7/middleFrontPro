import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Page } from 'widgets/page';

import cls from './adminPanelPage.module.scss';

export interface AdminPanelPageProps {
  className?: string;
}
export const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {
    /* eslint-disable  @typescript-eslint/no-unused-vars */
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page className={classNames(cls.adminPanelPage, {}, [className])}>
            ADMIN PANEL
        </Page>
    );
});
