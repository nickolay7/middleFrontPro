import { classNames } from 'shared/lib/helpers/classNames';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { profileReducer } from 'entities/profile/model/slice/profileSlice';
import cls from './profilePage.module.scss';

export interface ProfileProps {
  className?: string;
}

const reducers = {
    profile: profileReducer,
};
export const ProfilePage = ({ className }: ProfileProps) => {
    useDynamicModuleLoader(reducers, true);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.profile, {}, [className])}>
            PROFILE
        </div>
    );
};
