import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';

import cls from './langSwitcher.module.scss';
import { ElementTheme } from '../../../shared/types/ui';

interface LangSwitcherProps {
  className?: string;
  variant?: ElementTheme;
  short?: boolean;
}
export const LangSwitcher = memo(({ className, ...otherProps }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const { variant = ElementTheme.PRIMARY, short = false } = otherProps;

    const onTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            variant={variant}
            onClick={onTranslate}
        >
            {short ? t('короткое название') : t('язык')}
        </Button>
    );
});
