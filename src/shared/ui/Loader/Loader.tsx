import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Loader.module.scss";

interface LoaderProps {
	className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
	return (
		<span className={classNames(classes.Loader, {}, [className])} />
	);
};

export default Loader;