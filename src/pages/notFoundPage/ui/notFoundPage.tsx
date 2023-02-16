import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './notFoundPage.module.scss';

export interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <h2 className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница не найдена!')}
        </h2>
    );
};
