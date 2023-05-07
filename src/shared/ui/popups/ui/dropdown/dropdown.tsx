import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '../../../../lib/helpers';
import { MenuLink } from '../../../menuLink';
import { DropdownDirection, ElementTheme } from '../../../../types/ui';

import popupsCls from '../../styles/popups.module.scss';
import cls from './dropdown.module.scss';
import { popupDirections } from '../../styles/consts';

interface DropdownItem {
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    content?: string;
}

export interface DropdownProps {
    className?: string;
    trigger?: ReactNode;
    items: DropdownItem[];
    direction?: DropdownDirection;
    variant?: ElementTheme;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger = 'click_me',
        direction = 'down',
        variant = ElementTheme.CLEAR,
    } = props;

    return (
        <Menu
            as="div"
            className={classNames(cls.dropdown, {}, [
                className,
                popupsCls.popups,
            ])}
        >
            <Menu.Button
                className={classNames(popupsCls.trigger, {}, [cls[variant]])}
            >
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(popupsCls.options, {}, [
                    popupDirections[direction],
                ])}
            >
                {items.map((item) => (
                    <Menu.Item
                        key={item.content}
                        as={MenuLink}
                        disabled={item.disabled}
                        to={item.href || ''}
                        className={cls.link}
                        onClick={item.onClick}
                    >
                        {({ active }) => (
                            <li
                                className={classNames(popupsCls.item, {
                                    [popupsCls.active]: active,
                                })}
                            >
                                {item.content}
                            </li>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
}
