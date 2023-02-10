import { classNames } from 'shared/lib/helpers/classNames';
import './spinner.scss';

interface LoaderProps {
    className?: string;
}

export const Spinner = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
