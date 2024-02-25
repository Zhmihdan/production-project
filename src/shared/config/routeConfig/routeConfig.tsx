import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { ReactElement } from "react";
import { RouteProps } from "react-router-dom";

export enum RoutePaths {
	MAIN = '/',
	ABOUT = '/about'
}

interface Route extends RouteProps {
	path: RoutePaths,
	element: ReactElement
}

export const routeConfig: Route[] = [
	{path: RoutePaths.MAIN, element: <MainPage/>},
	{path: RoutePaths.ABOUT, element: <AboutPage />}
]