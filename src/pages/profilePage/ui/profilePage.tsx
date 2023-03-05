import { useEffect } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import {
    profileReducer, fetchProfileData, profileData, Profile,
} from 'entities/profile';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';

import cls from './profilePage.module.scss';

export interface ProfileProps {
  className?: string;
}

const reducers = {
    profile: profileReducer,
};
export const ProfilePage = ({ className }: ProfileProps) => {
    useDynamicModuleLoader(reducers, true);
    const dispatch = useAppDispatch();
    const profile = useAppSelector(profileData);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profile, {}, [className])}>
            <Profile data={profile} />
        </div>
    );
};
