import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Portal } from '../../portal';
import { Overlay } from '../../overlay';

import cls from './drawer.module.scss';

export interface DrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
export const Drawer = memo(({
    className, isOpen, onClose, children,
}: DrawerProps) => (
    <Portal>
        <div
            className={classNames(cls.drawer, { [cls.closed]: isOpen }, [className])}
        >
            <Overlay onClick={onClose}>
                <div
                    className={classNames(cls.content, {})}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </Overlay>
        </div>
    </Portal>
));
