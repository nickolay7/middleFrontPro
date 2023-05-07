import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollArgs {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollArgs) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const trigger = triggerRef.current;
        const wrapper = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapper,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.current.observe(trigger);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer.current?.unobserve(trigger);
        };
    }, [callback, triggerRef, wrapperRef]);
};
