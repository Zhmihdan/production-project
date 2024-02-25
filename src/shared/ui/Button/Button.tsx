import { FC, HTMLAttributes } from "react";
import classes from './Button.module.scss';
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme;
	className?: string;
}

const Button: FC<ButtonProps> = (props) => {
	const { theme, className, children, ...otherProps } = props;
	
	return (
		<button className={classNames(classes.Button, {}, [className, classes[theme]])} {...otherProps}>
			{children}
		</button>
	)
}

export default Button;