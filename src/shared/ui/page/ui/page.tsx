import {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './page.module.scss';
import { useInfiniteScroll } from '../../../lib/hooks';

export interface PageProps {
  className?: string;
  children: ReactNode;
  onLoadNextPart?: () => void;
}
export const Page = memo(({ className, children, onLoadNextPart }: PageProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({ callback: onLoadNextPart, triggerRef, wrapperRef });

    return (
        <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
