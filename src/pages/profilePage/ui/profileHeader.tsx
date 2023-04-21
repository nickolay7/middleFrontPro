import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text';
import { Button } from 'shared/ui/button';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import {
    cancelEditing, setReadonly, upsetReadonly, updateProfileData, profileData,
} from 'entities/profile';
import { authUserSelector } from 'entities/user';
import { HStack } from 'shared/ui/stack';

import cls from './profileHeader.module.scss';
import { ElementTheme } from '../../../shared/types/ui';

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
        <HStack
            justify="justifyBetween"
            className={classNames(cls.profileHeader, {}, [className])}
        >
            <Text title={t('Профиль')} />
            {
                isAuthUser && (readonly ? (
                    <Button data-testid="ProfileHeader.Edit" onClick={onEdit} variant={ElementTheme.OUTLINE}>
                        {t('Редактировать')}
                    </Button>

                ) : (
                    <HStack gap="gap16">
                        <Button data-testid="ProfileHeader.Cancel" onClick={onCancel} variant={ElementTheme.OUTLINE}>
                            {t('Отменить')}
                        </Button>
                        <Button data-testid="ProfileHeader.Save" onClick={onSave} variant={ElementTheme.OUTLINE_ORANGE}>
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                ))
            }
        </HStack>
    );
};
