import cls from "./about.module.scss";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("about");

  return <div className={cls.about}>{t("О нас")}</div>;
};
