import { classNames } from 'shared/lib/helpers/classNames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './sideBar.module.scss';
import { Button } from 'shared/ui/button';

interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
    const [isOpen, setOpen] = useState(false);
    const { t } = useTranslation();

    const onClose = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sideBar, { [cls.close]: isOpen }, [className])}
        >
            <Button onClick={onClose}>
                {!isOpen ? t('Свернуть') : t('Развернуть')}
            </Button>
        </div>
    );
};
