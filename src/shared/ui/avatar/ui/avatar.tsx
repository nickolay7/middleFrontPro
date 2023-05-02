import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './avatar.module.scss';
import { AppImage } from '../../appImage';
import { Skeleton } from '../../skeleton';
import { Icon, StrokeColor } from '../../icon';
import UserIcon from '../../../assets/icons/user-filled.svg';

export interface AvatarProps {
    src?: string;
    size?: number;
    alt?: string;
    className?: string;
}
export const Avatar = ({ className, ...otherProps }: AvatarProps) => {
    const { src = '', alt = 'pic', size = 30 } = otherProps;
    const sizeStyle = {
        width: size,
        height: size,
    };

    const errorImg = <Icon Svg={UserIcon} stroke={StrokeColor.INVERTED_PRIMARY} />;

    return (
        <AppImage
            className={classNames(cls.avatar, {}, [className])}
            src={src}
            style={sizeStyle}
            alt={alt}
            fallback={<Skeleton width={size} height={size} border="50%" />}
            error={errorImg}
        />
    );
};
