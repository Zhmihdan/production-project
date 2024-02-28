import { ReactElement } from "react";
import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";

export enum RoutePaths {
	MAIN = "/",
	ABOUT = "/about",
	ERROR = "*"
}

interface Route extends RouteProps {
	path: RoutePaths,
	element: ReactElement
}

export const routeConfig: Route[] = [
	{ path: RoutePaths.MAIN, element: <MainPage /> },
	{ path: RoutePaths.ABOUT, element: <AboutPage /> },
	{ path: RoutePaths.ERROR, element: <NotFoundPage /> }
];