import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "../../lib/classNames/classNames";
import classes from "./AppLink.module.scss";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
	const {
		theme, to, className, children, ...otherProps
	} = props;

	return (
		<Link to={to} className={classNames(classes.AppLink, {}, [className, classes[theme]])} {...otherProps}>{children}</Link>
	);
};

export default AppLink;