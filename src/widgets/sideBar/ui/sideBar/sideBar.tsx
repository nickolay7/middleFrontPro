import { classNames } from "shared/lib/helpers/classNames";
import cls from "./sideBar.module.scss";
import { useState } from "react";
import { Button } from "../../../../shared/ui/button";

interface SideBarProps {
  className?: string;
}
export const SideBar = ({ className }: SideBarProps) => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sideBar, { [cls.close]: isOpen }, [className])}
    >
      <button onClick={onClose}>Collapse</button>
    </div>
  );
};
