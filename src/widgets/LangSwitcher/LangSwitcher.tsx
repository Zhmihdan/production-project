import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
	className?: string;
}

const LangSwither: FC<LangSwitcherProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	}

	return (
		<Button className={classNames(className)} onClick={toggleLanguage} theme={ButtonTheme.CLEAR}>{t('язык')}</Button>
	)
}

export default LangSwither;