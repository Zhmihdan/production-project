import { FC } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import DarkTheme from "shared/assets/icons/DarkTheme.svg";
import LightTheme from "shared/assets/icons/LightTheme.svg";
import { Theme, useTheme } from "app/providers/ThemeProvider";

const ThemeSwitcher: FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button theme={ButtonTheme.CLEAR} onClick={() => toggleTheme()}>
			{theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
		</Button>
	);
};

export default ThemeSwitcher;