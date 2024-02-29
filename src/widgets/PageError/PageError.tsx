import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import classes from "./PageError.module.scss";

interface PageErrorProps {
	className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation();

	const reload = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={classNames(classes.PageError, {}, [className])}>
			<p>{t("произошла непредвиденная ошибка")}</p>
			<Button onClick={reload}>{t("Перезагрузить страницу")}</Button>
		</div>
	);
};

export default PageError;