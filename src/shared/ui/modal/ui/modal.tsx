import { classNames } from 'shared/lib/helpers/classNames';
import {
    ReactNode,
    useCallback, useEffect, useRef, useState,
} from 'react';
import cls from './modal.module.scss';

interface ModalProps {
  className?: string;
  children: string | ReactNode;
  isModalOpen: boolean;
  toggleHandler: () => void;
  lazy?: boolean;
}
export const Modal = ({ className, children, ...otherProps }: ModalProps) => {
    const [isClosed, setClosed] = useState(false);
    const [isMounted, setMounted] = useState(false);
    const timerIdRef = useRef<ReturnType<typeof setTimeout>>();
    const { isModalOpen, toggleHandler, lazy } = otherProps;

    const onClose = useCallback(() => {
        setClosed((prev) => !prev);
        timerIdRef.current = setTimeout(() => {
            toggleHandler();
            setClosed((prev) => !prev);
        }, 400);
    }, [toggleHandler]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        setMounted(true);
    }, [isModalOpen]);

    useEffect(() => {
        if (!isModalOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerIdRef.current);
        };
    }, [isModalOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={classNames(cls.modal, { [cls.closed]: isModalOpen }, [className])}>
            <div className={cls.overlay} onClick={onClose}>
                <div
                    className={classNames(cls.content, {
                        [cls.transformedOpen]: isModalOpen || isClosed,
                    })}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
