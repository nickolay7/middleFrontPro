import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/page';
import cls from './main.module.scss';

const Main = () => {
    const { t } = useTranslation('main');

    return (
        <Page className={cls.main}>{t('Домашняя страница')}</Page>
    );
};

export default Main;
