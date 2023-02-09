import { useTranslation } from 'react-i18next';
import cls from './about.module.scss';

export const About = () => {
    const { t } = useTranslation('about');

    return <div className={cls.about}>{t('О нас')}</div>;
};
