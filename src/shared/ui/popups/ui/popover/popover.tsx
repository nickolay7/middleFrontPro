import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { DropdownDirection, ElementTheme } from '../../../../types/ui';
import { popupDirections } from '../../styles/consts';

import popupsCls from '../../styles/popups.module.scss';
import cls from './popover.module.scss';

export interface PopoverProps {
    className?: string;
    children: ReactNode;
    trigger: ReactNode;
    direction: DropdownDirection;
    variant?: ElementTheme;
}
export const Popover = memo(
    ({
        className,
        children,
        trigger,
        direction,
        variant = ElementTheme.CLEAR,
    }: PopoverProps) => (
        <HPopover
            className={classNames(cls.popover, {}, [
                className,
                popupsCls.popups,
            ])}
        >
            <HPopover.Button
                className={classNames(popupsCls.trigger, {}, [cls[variant]])}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(popupsCls.options, {}, [
                    popupDirections[direction],
                    cls.panel,
                ])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    ),
);
