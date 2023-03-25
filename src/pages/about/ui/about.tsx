import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/page';
import cls from './about.module.scss';

const About = () => {
    const { t } = useTranslation('about');

    return <Page className={cls.about}>{t('О нас')}</Page>;
};

export default About;
