import { FC, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import ThemeSwitcher from "widgets/ThemeSwither/ThemeSwither";
import LangSwither from "widgets/LangSwitcher/LangSwitcher";
import Button from "shared/ui/Button/Button";
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
		<div data-testid="sidebar" className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}>
			<Button data-testid="toggle-sidebar" onClick={toggleSidebar}>{t("скрыть сайдбар")}</Button>
			<div className={classes.switchers}>
				<ThemeSwitcher />
				<LangSwither className={classes.lang} />
			</div>
		</div>
	);
};

export default withTranslation()(Sidebar);