import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import { Text } from 'shared/ui/text';
import { Button, ButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { IProfile } from '../model/types/IProfile';

import cls from './profile.module.scss';

interface ProfileProps {
  className?: string;
  data: IProfile;
}
export const Profile = ({ className, data }: ProfileProps) => {
    const { t } = useTranslation('profile');
    const { firstname, lastname } = data;

    return (
        <div className={classNames(cls.profile, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button variant={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} placeholder={t('Введите имя')} value={firstname} />
                <Input className={cls.input} placeholder={t('Введите фамилию')} value={lastname} />
            </div>
        </div>
    );
};
