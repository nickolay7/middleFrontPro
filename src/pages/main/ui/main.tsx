import { useTranslation } from 'react-i18next';
import cls from './main.module.scss';

export const Main = () => {
    const { t } = useTranslation('main');

    return <div className={cls.main}>{t('Домашняя страница')}</div>;
};
