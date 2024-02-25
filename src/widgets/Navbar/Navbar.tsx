import { FC } from "react";
import { classNames } from "../../shared/lib/classNames/classNames";
import classes from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
	className?: string;
}

const Navbar: FC<NavbarProps> = ({className}) => {
	return (
		<div className={classNames(classes.Navbar, {}, [className])}>
			<div className={classes.Navbar__links}>
				<AppLink theme={AppLinkTheme.SECONDARY} className={classes.Main__Link} to={RoutePaths.MAIN}>Главная страница</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePaths.ABOUT}>О сайте</AppLink>
			</div>
		</div>
	)
}

export default Navbar