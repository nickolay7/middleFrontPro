import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button';

import cls from './langSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  variant?: ButtonTheme;
  short?: boolean;
}
export const LangSwitcher = ({ className, ...otherProps }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const { variant = ButtonTheme.PRIMARY, short = false } = otherProps;

    const onTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            variant={variant}
            onClick={onTranslate}
        >
            {t(short ? 'короткое название' : 'язык')}
        </Button>
    );
};
