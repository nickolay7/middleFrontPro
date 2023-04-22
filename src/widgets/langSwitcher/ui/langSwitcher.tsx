import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Button } from '@/shared/ui/button';
import { ElementTheme } from '@/shared/types/ui';

import cls from './langSwitcher.module.scss';

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
