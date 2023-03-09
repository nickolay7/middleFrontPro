import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import { Input } from 'shared/ui/input';
import { Avatar } from 'shared/ui/avatar/ui/avatar';
import { IProfile } from '../model/types/IProfile';

import cls from './profile.module.scss';
import { CurrencySelect } from '../../currency';
import { CountrySelect } from '../../country';

interface ProfileCardProps {
  className?: string;
  form: IProfile;
  readonly?: boolean;
  onChangeHandler?: (value: string, key: string) => void;
}
export const ProfileCard = ({
    className, form, readonly, onChangeHandler,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const profileDataPairs = Object.entries(form) as [keyof IProfile, string][];

    return (
        <div className={classNames(cls.profile, { [cls.readonlyBorder]: !readonly }, [className])}>
            <div className={cls.wrap}>
                {
                    // eslint-disable-next-line
                    form.avatar && <Avatar src={form.avatar} alt="pic" />
                }
            </div>
            <div className={cls.data}>
                {
                    profileDataPairs.map(([key, value]) => {
                        if (key === 'currency') {
                            return (
                                <CurrencySelect
                                    key={key}
                                    value={value}
                                    disabled={readonly}
                                    name={key}
                                    onChange={onChangeHandler}
                                />
                            );
                        }

                        if (key === 'country') {
                            return (
                                <CountrySelect
                                    key={key}
                                    value={value}
                                    disabled={readonly}
                                    name={key}
                                    onChange={onChangeHandler}
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
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};
