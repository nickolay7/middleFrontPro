import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { VStack } from 'shared/ui/stack';
import { Skeleton } from 'shared/ui/skeleton';
import cls from './notificationsList.module.scss';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationsListItem } from '../notificationsListItem/notificationsListItem';

export interface NotificationsListProps {
  className?: string;
}
export const NotificationsList = memo(({ className }: NotificationsListProps) => {
    const { isLoading, data } = useGetNotificationsQuery(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="gap16"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width={150} height={30} />
                <Skeleton width={150} height={30} />
                <Skeleton width={150} height={30} />
            </VStack>
        );
    }

    return (
        <VStack gap="gap2" max className={classNames(cls.notificationsList, {}, [className])}>
            {
                data && data.map((notification) => (
                    <NotificationsListItem key={notification.id} data={notification} />
                ))
            }
        </VStack>
    );
});
