import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter: FC = () => {
	return (
		<Routes>
			{routeConfig.map(({ element, path }) => (
				<Route
					path={path} element={(
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">
								{element}
							</div>
						</Suspense>
					)} key={path}
				/>
			))}
		</Routes>
	);
};

export default AppRouter;