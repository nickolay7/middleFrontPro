import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames } from '@/shared/lib/helpers';

import cls from './profilePage.module.scss';
import { Page } from '@/shared/ui/page';

export interface ProfileProps {
  className?: string;
}

export const ProfilePage = ({ className }: ProfileProps) => {
    const { id } = useParams();

    return (
        <Page data-testid="ProfilePage" className={classNames(cls.profile, {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};
