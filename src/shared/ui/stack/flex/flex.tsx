import { ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import {
    FlexAlign, FlexDirection, FlexGap, FlexJustify,
} from '../types/stack';

import cls from './flex.module.scss';

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  direction?: FlexDirection;
  max?: boolean;
}
export const Flex = ({ className, ...otherProps }: FlexProps) => {
    const {
        children, gap, max, justify = 'justifyStart', direction = 'row', align = 'alignCenter',
    } = otherProps;

    const gaps = {
        gap2: cls.gap2,
        gap4: cls.gap4,
        gap8: cls.gap8,
        gap16: cls.gap16,
        gap32: cls.gap32,
    };

    const directions = {
        row: cls.directionRow,
        column: cls.directionColumn,
    };

    const aligns = {
        alignStart: cls.alignStart,
        alignEnd: cls.alignEnd,
        alignCenter: cls.alignCenter,
    };

    const justifies = {
        justifyStart: cls.justifyStart,
        justifyEnd: cls.justifyEnd,
        justifyCenter: cls.justifyCenter,
        justifyBetween: cls.justifyBetween,
    };

    const styles = [directions[direction], justifies[justify], aligns[align], gap && gaps[gap]];

    return (
        <div {...otherProps} className={classNames(cls.flex, { [cls.max]: max }, [className, ...styles])}>
            {children}
        </div>
    );
};
