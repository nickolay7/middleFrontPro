import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Page } from '@/widgets/page';
import cls from './notFoundPage.module.scss';

export interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>
            <h2>{t('Страница не найдена!')}</h2>
        </Page>
    );
};
