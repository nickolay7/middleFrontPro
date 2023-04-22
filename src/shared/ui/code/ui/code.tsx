import { memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './code.module.scss';

export interface CodeProps {
  className?: string;
  children?: ReactNode;
}
export const Code = memo(({ className, children }: CodeProps) => (
    <pre className={classNames(cls.code, {}, [className])}>
        <code>
            {children}
        </code>
    </pre>
));
