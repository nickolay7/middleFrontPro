import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Icon, StrokeColor } from '@/shared/ui/icon';
import Notification from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationsList } from '@/entities/notification';
import { Popover } from '@/shared/ui/popups';
import { classNames } from '@/shared/lib/helpers';
import { Drawer } from '@/shared/ui/drawer';
import { Button } from '@/shared/ui/button';
import { ElementTheme } from '@/shared/types/ui';

import cls from './notificationButton.module.scss';

export interface NotificationButtonProps {
    className?: string;
}
export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isDrawerOpen, setDrawerOpen] = useState(true);

        const onDrawerToggle = useCallback(() => {
            setDrawerOpen((prev) => !prev);
        }, []);

        return (
            <div>
                <BrowserView>
                    <Popover
                        className={classNames(cls.notificationButton, {}, [
                            className,
                        ])}
                        trigger={
                            <Icon
                                size={30}
                                stroke={StrokeColor.INVERTED_PRIMARY}
                                Svg={Notification}
                            />
                        }
                        direction="downLeft"
                    >
                        <NotificationsList />
                    </Popover>
                </BrowserView>
                <MobileView>
                    <Button
                        onClick={onDrawerToggle}
                        variant={ElementTheme.CLEAR_INVERTED}
                    >
                        <Icon
                            size={30}
                            stroke={StrokeColor.INVERTED_PRIMARY}
                            Svg={Notification}
                        />
                    </Button>
                    <Drawer isOpen={isDrawerOpen} onClose={onDrawerToggle}>
                        <NotificationsList />
                    </Drawer>
                </MobileView>
            </div>
        );
    },
);
