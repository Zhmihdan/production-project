import { FC, Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";

const App: FC = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={'/'}>Главная страница</Link>
			<Link to={'/about'}>о сайте</Link>
			<Suspense fallback={<div>Идет загрузка...</div>}>
				<Routes>
					<Route path="/" element={<MainPageAsync />} />
					<Route path="/about" element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App;