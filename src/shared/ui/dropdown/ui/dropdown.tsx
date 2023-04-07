import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '../../../lib/helpers';
import { MenuLink } from '../../menuLink';

import cls from './dropdown.module.scss';
import { DropdownDirection } from '../../../types/ui';

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
}

export function Dropdown(props: DropdownProps) {
    const {
        className, items, trigger = 'test', direction,
    } = props;

    return (
        <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.items, { [cls.downLeft]: direction === 'down-left' })}>
                {
                    items.map((item) => (
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
                                    className={classNames(cls.item, { [cls.active]: active })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </Menu.Item>
                    ))
                }
            </Menu.Items>
        </Menu>
    );
}
