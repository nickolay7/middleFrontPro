import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import {
    fetchProfileData,
    ProfileCard,
    profileData,
    profileReducer,
    updateProfile,
    ValidationErrors,
} from 'entities/profile';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import { Loader } from 'shared/ui/loader';
import { Text, TextVariant } from 'shared/ui/text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'shared/ui/page';
import cls from './profilePage.module.scss';
import { ProfileHeader } from './profileHeader';

export interface ProfileProps {
  className?: string;
}

const reducers = {
    profile: profileReducer,
};

const errorsMapping = {
    [ValidationErrors.REQUIRED_FIRSTNAME]: 'please input firstname',
    [ValidationErrors.REQUIRED_LASTNAME]: 'please input lastname',
    [ValidationErrors.REQUIRED_AGE]: 'please input age',
    [ValidationErrors.REQUIRED_CITY]: 'please input city',
    [ValidationErrors.REQUIRED_USERNAME]: 'please input username',
    [ValidationErrors.ERROR_REQUEST]: 'server error, try again later',
};
export const ProfilePage = ({ className }: ProfileProps) => {
    useDynamicModuleLoader(reducers, true);
    const { validationErrors } = useAppSelector(profileData);
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const profile = useAppSelector(profileData);
    const {
        form, error, isLoading, readonly,
    } = profile;

    useInitialEffect(() => dispatch(fetchProfileData(id)));

    const onChangeHandler = (value: string | number, key: string) => {
        if (key === 'age') dispatch(updateProfile({ [key]: Number(value) }));
        else dispatch(updateProfile({ [key]: value }));
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Text text={t('Что-то пошло не так!')} variant={TextVariant.RED} />;
    }

    return (
        <Page className={classNames(cls.profile, {}, [className])}>
            <ProfileHeader readonly={readonly} />
            {
                validationErrors && validationErrors
                    .map((error: ValidationErrors) => (
                        <Text variant={TextVariant.RED} text={errorsMapping[error]} />
                    ))
            }
            <ProfileCard
                onChangeHandler={onChangeHandler}
                readonly={readonly}
                form={form}
            />
        </Page>
    );
};
