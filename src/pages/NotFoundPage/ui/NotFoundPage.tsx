import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./NotFountPage.module.scss";

const NotFoundPage: FC = () => {
	const { t } = useTranslation();

	return (
		<div className={classes.NotFoundPage}>{t("страница не найдена")}</div>
	);
};

export default NotFoundPage;