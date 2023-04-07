import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../lib/helpers';
import { HStack, VStack } from '../stack';

import cls from './listBox.module.scss';
import { FlexAlign } from '../stack/types/stack';
import { DropdownDirection } from '../../types/ui';

interface ListOption {
    value: string;
    content: string;
    disabled?: boolean;
}

interface ListBoxProps {
    value: string;
    name: string;
    label?: string
    width?: number;
    direction?: DropdownDirection;
    position?: FlexAlign;
    className?: string;
    items: ListOption[];
    readonly?: boolean;
    defaultValue?: string;
    onChange?: (value: string, key: string) => void;
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
        width,
        position,
        label,
        direction = 'down',
        defaultValue = '',
    } = props;

    const onChangeHandler = (value: string) => {
        if (onChange) onChange(value.toUpperCase(), name);
    };

    const elementWidth = { width };

    return (
        <VStack
            max
            style={elementWidth}
            align={position}
            className={classNames(cls.listBox, { [cls.disabled]: readonly }, [className])}
        >
            <HListBox
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                <HStack gap="gap8">
                    {label && <label className={cls.label} htmlFor="select">{label}</label>}
                    <HListBox.Button className={cls.btn}>
                        <HStack max justify="justifyBetween">
                            {value}
                            {/* eslint-disable-next-line i18next/no-literal-string */}
                            <span className={cls.arrow}>
                                &#9650;
                            </span>
                        </HStack>
                    </HListBox.Button>
                </HStack>
                <HListBox.Options
                    className={classNames(cls.options, {
                        [cls.directionTop]: direction === 'top',
                        [cls.directionDown]: direction === 'down',
                    })}
                    defaultValue={t(defaultValue)}
                >
                    {items.map((item) => (
                        <HListBox.Option key={item.value} value={item.value} as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames('', {
                                        [cls.active]: active,
                                        [cls.selected]: selected,
                                        [cls.disabled]: item.disabled,
                                    }, [cls.item])}
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
        </VStack>
    );
}
