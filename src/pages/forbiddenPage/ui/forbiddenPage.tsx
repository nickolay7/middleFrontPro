import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Page } from 'widgets/page';

import cls from './forbiddenPage.module.scss';

export interface ForbiddenPageProps {
  className?: string;
}
export const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
    /* eslint-disable  @typescript-eslint/no-unused-vars */
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.forbiddenPage, {}, [className])}>
            {t('У Вас нет доступа к этой странице')}
        </Page>
    );
});
