import { classNames } from 'shared/lib/helpers/classNames';
import cls from './profile.module.scss';

interface ProfileProps {
  className?: string;
}
export const Profile = ({ className }: ProfileProps) => (
    <div className={classNames(cls.profile, {}, [className])} />
);
