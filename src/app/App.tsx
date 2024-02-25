import { FC, Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "app/providers/router/AppRouter";
import { Navbar } from "widgets";
import { Sidebar } from "widgets/Sidebar";
import 'shared/config/i18n/i18n';

const App: FC = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="page-content">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App;