import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames';
import {
    profileReducer, updateProfile,
} from '../../model/slice/profileSlice';
import { Text, TextVariant } from '@/shared/ui/text';
import { Page } from '@/widgets/page';
import { useDynamicModuleLoader, useInitialEffect } from '@/shared/lib/hooks';
import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { Loader } from '@/shared/ui/loader';
import { HStack } from '@/shared/ui/stack';
import { ProfileHeader } from './profileHeader';
import { ProfileCard } from '@/entities/profile';
import { ValidationErrors } from '../../model/types/profileSchema';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileData } from '../../model/selectors/profileData/profileData';

import cls from './editableProfileCard.module.scss';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const errorsMapping = {
    [ValidationErrors.REQUIRED_FIRSTNAME]: 'please input firstname',
    [ValidationErrors.REQUIRED_LASTNAME]: 'please input lastname',
    [ValidationErrors.REQUIRED_AGE]: 'please input age',
    [ValidationErrors.REQUIRED_CITY]: 'please input city',
    [ValidationErrors.REQUIRED_USERNAME]: 'please input username',
    [ValidationErrors.ERROR_REQUEST]: 'server error, try again later',
};

const reducers = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { validationErrors } = useAppSelector(profileData);
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (id) dispatch(fetchProfileData(id));
    });

    useDynamicModuleLoader(reducers, true);

    const profile = useAppSelector(profileData);
    const {
        form, error, isLoading, readonly,
    } = profile;

    const onChangeHandler = (value: string | number, key: string) => {
        if (key === 'age') dispatch(updateProfile({ [key]: Number(value) }));
        else dispatch(updateProfile({ [key]: value }));
    };

    if (!id) {
        return <HStack>{t('Профиль не найден')}</HStack>;
    }

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Text text={t('Что-то пошло не так!')} variant={TextVariant.RED} />;
    }

    return (
        <div className={classNames(cls.editableProfileCard, {}, [className])}>
            <Page className={classNames(cls.profile, {}, [className])}>
                <ProfileHeader readonly={readonly} />
                {
                    validationErrors && validationErrors
                        .map((error: ValidationErrors) => (
                            <Text
                                data-testid="EditableProfileCard.Error"
                                variant={TextVariant.RED}
                                text={errorsMapping[error]}
                            />
                        ))
                }
                <ProfileCard
                    onChangeHandler={onChangeHandler}
                    readonly={readonly}
                    form={form}
                />
            </Page>
        </div>
    );
});
