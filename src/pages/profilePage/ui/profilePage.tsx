import { useParams } from 'react-router-dom';
import { EditableProfileCard } from 'features/editableProfileCard';

import cls from './profilePage.module.scss';
import { classNames } from '../../../shared/lib/helpers';

export interface ProfileProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfileProps) => {
    const { id } = useParams();

    return (
        <div className={classNames(cls.profile, {}, [className])}>
            <EditableProfileCard id={id} />
        </div>
    );
};
