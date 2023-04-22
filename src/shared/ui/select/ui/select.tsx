import { ChangeEvent } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './select.module.scss';

export interface SelectOptionData {
    value: string;
    content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  value?: string;
  onChange?: (value: string, key: string) => void;
  disabled?: boolean;
  name: string;
  options?: SelectOptionData[];
}
export const Select = ({
    className, label, value, onChange, disabled, name, options,
}: SelectProps) => {
    const opt = options?.map(({ value, content }) => (
        <option key={value} value={value}>
            {content}
        </option>
    ));

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e.target.value, name);
    };

    return (
        <div className={cls.wrap}>
            <label className={cls.label} htmlFor="select">{label}</label>
            <select
                id="select"
                onChange={onSelect}
                className={classNames(cls.select, {}, [className])}
                disabled={disabled}
                value={value}
            >
                {opt}
            </select>
        </div>
    );
};
