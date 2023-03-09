import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/select';
import { Countries } from '../model/types/country';

export interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: string, key: string) => void;
    disabled?: boolean;
    name: string;
}
export const CountrySelect = ({ className, ...otherProps }: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const {
        value, disabled, name, onChange,
    } = otherProps;

    return (
        <Select
            className={className}
            label={`${t('Страна')}: `}
            value={value}
            disabled={disabled}
            name={name}
            onChange={onChange}
            options={Object.keys(Countries)}
        />
    );
};
