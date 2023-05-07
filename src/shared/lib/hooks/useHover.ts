import { useCallback, useMemo, useState } from 'react';

interface HoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, HoverBind];

export const useHover = (): UseHoverResult => {
    const [isHover, setHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, []);

    return useMemo(
        () => [isHover, { onMouseEnter, onMouseLeave }],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
