import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames';
import { Input } from '@/shared/ui/input';
import { Avatar } from '@/shared/ui/avatar/ui/avatar';
import { HStack, VStack } from '@/shared/ui/stack';
import { ListBox } from '@/shared/ui/popups/ui/listBox/listBox';
import { IProfile } from '../model/types/IProfile';
import { Currency } from '../../currency/model/types/currency';
import { Countries } from '../../country/model/types/country';

import cls from './profile.module.scss';

export interface ProfileCardProps {
    className?: string;
    form: IProfile;
    readonly?: boolean;
    onChangeHandler?: (value: string, key: string) => void;
}
export const ProfileCard = ({
    className,
    form,
    readonly,
    onChangeHandler,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const profileDataPairs = Object.entries(form) as [keyof IProfile, string][];

    const currencyOptions = Object.entries(Currency).map(([key, value]) => ({
        value,
        content: key,
    }));
    const countryOptions = Object.entries(Countries).map(([key, value]) => ({
        value,
        content: key,
    }));

    return (
        <VStack
            gap="gap8"
            // eslint-disable-next-line i18next/no-literal-string
            data-testId="ProfileCard"
            className={classNames(
                cls.profile,
                { [cls.readonlyBorder]: !readonly },
                [className],
            )}
        >
            <HStack justify="justifyCenter">
                {form.avatar && (
                    <Avatar
                        className={cls.profileAvatar}
                        src={form.avatar}
                        alt="pic"
                    />
                )}
            </HStack>
            <VStack gap="gap8" align="alignEnd" className={cls.data}>
                {profileDataPairs.map(([key, value]) => {
                    if (key === 'currency') {
                        return (
                            <ListBox
                                key={key}
                                value={value}
                                label={`${t('Валюта')}`}
                                readonly={readonly}
                                name={key}
                                direction="top"
                                onChange={onChangeHandler}
                                items={currencyOptions}
                                trigger={
                                    <HStack $max justify="justifyBetween">
                                        {t(value)}
                                        {/* eslint-disable-next-line i18next/no-literal-string */}
                                        <span className={cls.arrow}>
                                            &#9650;
                                        </span>
                                    </HStack>
                                }
                            />
                        );
                    }

                    if (key === 'country') {
                        return (
                            <ListBox
                                key={key}
                                value={value}
                                label={`${t('Страна')}`}
                                readonly={readonly}
                                name={key}
                                direction="top"
                                onChange={onChangeHandler}
                                items={countryOptions}
                                trigger={
                                    <HStack $max justify="justifyBetween">
                                        {t(value)}
                                        {/* eslint-disable-next-line i18next/no-literal-string */}
                                        <span className={cls.arrow}>
                                            &#9650;
                                        </span>
                                    </HStack>
                                }
                            />
                        );
                    }

                    return (
                        <Input
                            key={key}
                            name={key}
                            readonly={readonly}
                            className={cls.input}
                            placeholder={t(key)}
                            value={value}
                            onChange={onChangeHandler}
                            data-testid={`ProfileCard.${key}`}
                        />
                    );
                })}
            </VStack>
        </VStack>
    );
};
