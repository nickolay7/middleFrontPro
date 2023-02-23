import { classNames } from 'shared/lib/helpers/classNames';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import cls from './input.module.scss';

type InputAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
export interface InputProps extends InputAttrs {
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder: string;
  autoFocus?: boolean;
}
export const Input = ({ className, ...otherProps }: InputProps) => {
    const {
        value,
        placeholder,
        autoFocus,
    } = otherProps;

    const onInput = (e: ChangeEvent<HTMLInputElement>) => {
        otherProps?.onChange(e.target.value);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <input
                className={cls.input}
                value={value}
                onChange={onInput}
                placeholder={placeholder}
                autoFocus={autoFocus}
            />
        </div>
    );
};
