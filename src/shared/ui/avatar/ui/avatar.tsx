import { classNames } from 'shared/lib/helpers/classNames';
import cls from './avatar.module.scss';

export interface AvatarProps {
    src?: string;
    size?: number;
    alt?: string;
    className?: string;
}
export const Avatar = ({ className, ...otherProps }: AvatarProps) => {
    const { src, alt = 'pic', size } = otherProps;
    const sizeStyle = {
        width: size,
        height: size,
    };

    return (
        <img
            className={classNames(cls.avatar, {}, [className])}
            src={src}
            style={sizeStyle}
            alt={alt}
        />
    );
};
