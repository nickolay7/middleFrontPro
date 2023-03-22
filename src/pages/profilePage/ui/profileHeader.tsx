import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text';
import { Button, ButtonTheme } from 'shared/ui/button';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import {
    cancelEditing, setReadonly, upsetReadonly, updateProfileData, profileData,
} from 'entities/profile';

import cls from './profileHeader.module.scss';
import { authUserSelector } from '../../../entities/user';

interface ProfileHeaderProps {
    className?: string;
    readonly?: boolean;
}
export const ProfileHeader = ({ className, readonly }: ProfileHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const authUser = useAppSelector(authUserSelector);
    const profile = useAppSelector(profileData);
    const isAuthUser = authUser?.id === profile.form?.id;

    const onEdit = () => {
        dispatch(setReadonly());
    };

    const onCancel = () => {
        dispatch(upsetReadonly());
        dispatch(cancelEditing());
    };

    const onSave = () => {
        dispatch(updateProfileData());
    };

    return (
        <div className={classNames(cls.profileHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {
                isAuthUser && (readonly ? (
                    <Button onClick={onEdit} variant={ButtonTheme.OUTLINE}>
                        {t('Редактировать')}
                    </Button>

                ) : (
                    <div>
                        <Button onClick={onCancel} variant={ButtonTheme.OUTLINE}>
                            {t('Отменить')}
                        </Button>
                        <Button onClick={onSave} variant={ButtonTheme.OUTLINE_ORANGE}>
                            {t('Сохранить')}
                        </Button>
                    </div>
                ))
            }
        </div>
    );
};
