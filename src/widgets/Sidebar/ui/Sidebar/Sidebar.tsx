import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import ThemeSwitcher from "widgets/ThemeSwither/ThemeSwither";
import LangSwither from "widgets/LangSwitcher/LangSwitcher";
import classes from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const { t } = useTranslation();

	const toggleSidebar = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}>
			<button type="button" onClick={toggleSidebar}>{t("скрыть сайдбар")}</button>
			<div className={classes.switchers}>
				<ThemeSwitcher />
				<LangSwither className={classes.lang} />
			</div>
		</div>
	);
};

export default Sidebar;