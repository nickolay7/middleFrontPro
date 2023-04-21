import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';

import cls from './overlay.module.scss';

export interface OverlayProps {
  className?: string;
  onClick: () => void;
  children: ReactNode;
}
export const Overlay = memo(({ className, onClick, children }: OverlayProps) => (
    <div onClick={onClick} className={classNames(cls.overlay, {}, [className])}>
        {children}
    </div>
));
