import { FC, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter: FC = () => {
	const { t } = useTranslation();

	return (
		<Suspense fallback={<div>{t("загрузка")}</div>}>
			<Routes>
				{routeConfig.map(({ element, path }) => (
					<Route
						path={path} element={(
							<div className="page-wrapper">
								{element}
							</div>
						)} key={path}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;