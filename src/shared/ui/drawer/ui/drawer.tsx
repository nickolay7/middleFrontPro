import {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Portal } from '../../portal';
import { Overlay } from '../../overlay';

import cls from './drawer.module.scss';
import { useAnimationLibs } from '../../../lib/hooks';

export interface DrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const height = window.innerHeight - 100;

const DrawerContent = memo(({
    className, isOpen, onClose, children,
}: DrawerProps) => {
    const { Spring: { a, useSpring, config }, Gesture: { useDrag } } = useAnimationLibs();
    const [{ y }, api] = useSpring(() => ({ y: height }));

    const open = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            open();
        }
    }, [api, isOpen, open]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                // eslint-disable-next-line no-unused-expressions
                my > height * 0.5 || (vy > 0.5 && dy > 0) ? close() : open();
            } else api.start({ y: my, immediate: true });
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div
                className={classNames(cls.drawer, { [cls.closed]: isOpen }, [className])}
            >
                <Overlay onClick={close}>
                    <a.div
                        className={cls.sheet}
                        {...bind()}
                        style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    >
                        {children}
                    </a.div>
                </Overlay>
            </div>
        </Portal>
    );
});

export const Drawer = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) return null;

    return <DrawerContent {...props} />;
};
