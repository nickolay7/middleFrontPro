import { useCallback, useRef } from 'react';

export const useThrottle = <T>(cb: (...args: T[]) => void, delay: number) => {
    const ref = useRef(true);

    return useCallback(
        (...args: T[]) => {
            if (ref.current) {
                cb(...args);
                ref.current = false;

                setTimeout(() => {
                    ref.current = true;
                }, delay);
            }
        },
        [cb, delay],
    );
};
