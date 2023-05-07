import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/select';
import { Currency } from '../model/types/currency';

export interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: string, key: string) => void;
    disabled?: boolean;
    name: string;
}
export const CurrencySelect = ({
    className,
    ...otherProps
}: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const { value, disabled, name, onChange } = otherProps;

    const opt = Object.entries(Currency).map(([key, value]) => ({
        value,
        content: key,
    }));

    return (
        <Select
            className={className}
            label={`${t('Валюта')}`}
            value={value}
            disabled={disabled}
            name={name}
            onChange={onChange}
            options={opt}
        />
    );
};
