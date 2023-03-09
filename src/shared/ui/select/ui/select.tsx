import { classNames } from 'shared/lib/helpers/classNames';
import { ChangeEvent } from 'react';
import cls from './select.module.scss';

interface SelectProps {
  className?: string;
  label?: string;
  value?: string;
  onChange?: (value: string, key: string) => void;
  disabled?: boolean;
  name: string;
  options?: (string | number)[];
}
export const Select = ({
    className, label, value, onChange, disabled, name, options,
}: SelectProps) => {
    const opt = options?.map((key) => (
        <option key={key}>
            {key}
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
                defaultValue={value}
            >
                {opt}
            </select>
        </div>
    );
};
