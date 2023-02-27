import { classNames } from 'shared/lib/helpers/classNames';
import cls from './text.module.scss';

export enum TextVariant {
    RED = 'red',
    PRIMARY = 'primary',
}
export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
}
export const Text = ({ className, ...otherProps }: TextProps) => {
    const {
        title,
        text,
        variant = TextVariant.PRIMARY,
    } = otherProps;

    return (
        <div className={classNames(cls.text, {}, [className, cls[variant]])}>
            {title && <h3 className={cls.title}>{title}</h3> }
            {text && <h3 className={cls.message}>{text}</h3> }
        </div>
    );
};
