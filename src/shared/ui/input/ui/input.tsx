import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import cls from './input.module.scss';

type InputAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;
export interface InputProps extends InputAttrs {
  className?: string;
  value?: string;
  onChange?: (value: string, key: string) => void;
  placeholder: string;
  autoFocus?: boolean;
  readonly?: boolean;
  name: string;
  label?: boolean;
}
export const Input = memo(({ className, ...otherProps }: InputProps) => {
    const { t } = useTranslation('profile');

    const {
        value,
        placeholder,
        autoFocus,
        onChange,
        readonly,
        name,
        label = true,
    } = otherProps;

    const onInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.target.value, name);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {label && <label className={cls.label} htmlFor={name}>{`${t(name)}: `}</label>}
            <input
                id={name}
                className={cls.input}
                value={value}
                name={name}
                onChange={onInput}
                placeholder={placeholder}
                autoFocus={autoFocus}
                readOnly={readonly}
            />
        </div>
    );
});
