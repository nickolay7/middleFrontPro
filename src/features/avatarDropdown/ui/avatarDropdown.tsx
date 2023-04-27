import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Avatar } from '@/shared/ui/avatar';
import { Dropdown } from '@/shared/ui/popups';
import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import {
    authUserSelector, isAdminSelector, isManagerSelector, setUserLogout, User,
} from '@/entities/user';
import { LinkPath } from '@/shared/types/linkPathes';

import cls from './avatarDropdown.module.scss';

export interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useAppSelector<User | undefined>(authUserSelector);
    const isAdmin = useAppSelector(isAdminSelector);
    const isManager = useAppSelector(isManagerSelector);
    const onLogout = useCallback(() => {
        dispatch(setUserLogout());
    }, [dispatch]);

    const hasRules = isAdmin || isManager;

    if (!authData) return null;

    return (
        <Dropdown
            className={classNames(cls.avatarDropdown, {}, [className])}
            trigger={(
                <Avatar size={30} src={authData?.avatar} />
            )}
            direction="downLeft"
            items={[
                ...(
                    hasRules ? [
                        {
                            content: t('Админка'),
                            href: `${LinkPath.ADMIN}`,
                        },
                    ] : []
                ),
                {
                    content: t('Профиль'),
                    href: `${LinkPath.PROFILE}${authData.id}`,
                },
                {
                    content: t('Выход'),
                    onClick: onLogout,
                },
            ]}
        />
    );
});
