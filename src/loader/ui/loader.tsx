import { classNames } from 'shared/lib/helpers/classNames';
import { Spinner } from 'shared/ui/spinner';
import cls from './loader.module.scss';

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.loader, {}, [className])}>
        <Spinner />
    </div>
);
