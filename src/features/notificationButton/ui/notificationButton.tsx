import { memo } from 'react';
import { Icon, StrokeColor } from 'shared/ui/icon';
import Notification from 'shared/assets/icons/notification-20-20.svg';
import { NotificationsList } from 'entities/notification';
import { Popover } from 'shared/ui/popups';
import { classNames } from 'shared/lib/helpers';

import cls from './notificationButton.module.scss';

export interface NotificationButtonProps {
  className?: string;
}
export const NotificationButton = memo(({ className }: NotificationButtonProps) => (
    <Popover
        className={classNames(cls.notificationButton, {}, [className])}
        trigger={(
            <Icon stroke={StrokeColor.INVERTED_PRIMARY} Svg={Notification} />
        )}
        direction="downLeft"
    >
        <NotificationsList />
    </Popover>
));
