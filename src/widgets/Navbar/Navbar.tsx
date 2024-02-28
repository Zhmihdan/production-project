import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import classes from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
	const translationAbout = useTranslation("about");
	const translationMain = useTranslation("main");

	return (
		<div className={classNames(classes.Navbar, {}, [className])}>
			<div className={classes.Navbar__links}>
				<AppLink theme={AppLinkTheme.SECONDARY} className={classes.Main__Link} to={RoutePaths.MAIN}>{translationMain.t("Главная страница")}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePaths.ABOUT}>{translationAbout.t("О сайте")}</AppLink>
			</div>
		</div>
	);
};

export default Navbar;