import { useTranslation } from 'react-i18next';
import cls from './about.module.scss';

const About = () => {
    const { t } = useTranslation('about');

    return <div className={cls.about}>{t('О нас')}</div>;
};

export default About;
