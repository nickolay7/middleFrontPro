import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../lib/helpers';
import { HStack } from '../../../stack';
import { DropdownDirection, ElementTheme } from '../../../../types/ui';
import { popupDirections } from '../../styles/consts';

import popupsCls from '../../styles/popups.module.scss';
import cls from './listBox.module.scss';

interface ListOption {
    value: string;
    content: string;
    disabled?: boolean;
}

interface ListBoxProps {
    value: string;
    name: string;
    label?: string;
    direction?: DropdownDirection;
    className?: string;
    items: ListOption[];
    readonly?: boolean;
    defaultValue?: string;
    onChange?: (value: string, key: string) => void;
    trigger: ReactNode;
    variant?: ElementTheme;
}

export function ListBox(props: ListBoxProps) {
    const { t } = useTranslation();
    const {
        className,
        items,
        value,
        name,
        onChange,
        readonly,
        label,
        direction = 'down',
        defaultValue = '',
        trigger,
        variant = ElementTheme.OUTLINE,
    } = props;

    const onChangeHandler = (value: string) => {
        if (onChange) onChange(value.toUpperCase(), name);
    };

    return (
        <HListBox
            as="div"
            value={value}
            onChange={onChangeHandler}
            disabled={readonly}
            className={classNames(cls.listBox, { [cls.disabled]: readonly }, [
                className,
                popupsCls.popups,
            ])}
        >
            <HStack gap="gap8">
                {label && (
                    <label className={cls.label} htmlFor="select">
                        {label}
                    </label>
                )}
                <HListBox.Button
                    className={classNames(popupsCls.trigger, {}, [
                        cls[variant],
                    ])}
                >
                    {trigger}
                </HListBox.Button>
            </HStack>
            <HListBox.Options
                className={classNames(popupsCls.options, {}, [
                    popupDirections[direction],
                ])}
                defaultValue={t(defaultValue)}
            >
                {items.map((item) => (
                    <HListBox.Option
                        key={item.value}
                        value={item.value}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    '',
                                    {
                                        [popupsCls.active]: active,
                                        [cls.selected]: selected,
                                        [popupsCls.disabled]: item.disabled,
                                    },
                                    [popupsCls.item],
                                )}
                            >
                                <HStack justify="justifyCenter">
                                    {/* eslint-disable-next-line i18next/no-literal-string */}
                                    {selected && <p>&#10004;</p>}
                                    {item.content}
                                </HStack>
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
}
