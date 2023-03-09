import { useEffect } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import {
    fetchProfileData, ProfileCard, profileData, profileReducer, updateProfile,
} from 'entities/profile';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';

import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/loader';
import { Text, TextVariant } from 'shared/ui/text';
import cls from './profilePage.module.scss';
import { ProfileHeader } from './profileHeader';

export interface ProfileProps {
  className?: string;
}

const reducers = {
    profile: profileReducer,
};
export const ProfilePage = ({ className }: ProfileProps) => {
    useDynamicModuleLoader(reducers, true);
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const profile = useAppSelector(profileData);
    const {
        form, error, isLoading, readonly,
    } = profile;

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeHandler = (value: string | number, key: string) => {
        if (typeof value === 'number') dispatch(updateProfile({ [key]: Number(value) }));
        else dispatch(updateProfile({ [key]: value }));
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Text text={t('Что-то пошло не так!')} variant={TextVariant.RED} />;
    }

    return (
        <div className={classNames(cls.profile, {}, [className])}>
            <ProfileHeader readonly={readonly} />
            <ProfileCard
                onChangeHandler={onChangeHandler}
                readonly={readonly}
                form={form}
            />
        </div>
    );
};
