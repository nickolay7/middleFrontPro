import { useTranslation } from 'react-i18next';
import { classNames } from '../../lib/helpers';

import cls from './pageError.module.scss';
import { Button } from '../../ui/button';

export const PageError = () => {
    const { t } = useTranslation();

    const onReload = () => {
        window.location.reload();
    };

    return (
        <h2 className={classNames(cls.pageError, {})}>
            {t('Что-то пошло не так!')}
            <Button onClick={onReload}>{t('Обновить страницу')}</Button>
        </h2>
    );
};
