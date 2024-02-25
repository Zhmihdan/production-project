import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from './Sidebar.module.scss';
import ThemeSwitcher from "widgets/ThemeSwither/ThemeSwither";
import LangSwither from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = ({className}) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const toggleSidebar = () => {
		setCollapsed(prev => !prev);
	}

	return (
		<div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
			<button onClick={toggleSidebar}>TOGGLE</button>
			<div className={classes.switchers}>
				<ThemeSwitcher />
				<LangSwither className={classes.lang} />
			</div>
		</div>
	)
}

export default Sidebar;