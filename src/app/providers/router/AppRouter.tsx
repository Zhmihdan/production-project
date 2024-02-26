import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>Идет загрузка...</div>}>
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