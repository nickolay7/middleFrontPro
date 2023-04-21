import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Card } from 'shared/ui/card';
import { Text } from 'shared/ui/text';
import { Notification } from '../../model/types/notifications';

import cls from './notificationsListItem.module.scss';

export interface NotificationsListItemProps {
  className?: string;
  data: Notification;
}
export const NotificationsListItem = memo(({ className, data }: NotificationsListItemProps) => {
    const {
        href, title, description,
    } = data;

    const content = (
        <Card
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={title} text={description} />
        </Card>
    );

    if (href) {
        return (
            <a className={cls.link} target="_blank" href={href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
