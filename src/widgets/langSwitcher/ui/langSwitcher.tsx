import { classNames } from "shared/lib/helpers/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button";

import cls from "./langSwitcher.module.scss";
interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onTranslate = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={onTranslate}
    >
      {t("язык")}
    </Button>
  );
};
