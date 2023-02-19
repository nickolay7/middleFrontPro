import { classNames } from 'shared/lib/helpers/classNames';
import {
    useCallback, useEffect, useRef, useState,
} from 'react';
import cls from './modal.module.scss';

interface ModalProps {
  className?: string;
  children: string;
  isModalOpen: boolean;
  toggleHandler: () => void;
}
export const Modal = ({ className, children, ...otherProps }: ModalProps) => {
    const [isClosed, setClosed] = useState(false);
    const timerIdRef = useRef<ReturnType<typeof setTimeout>>();
    const { isModalOpen, toggleHandler } = otherProps;

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
        if (!isModalOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerIdRef.current);
        };
    }, [isModalOpen, onKeyDown]);

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
