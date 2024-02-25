import path from "path";
import setupConfig from "./config/build/setupConfig";
import { BuildEnv, BuildPaths, Mode } from "./config/build/types/config";
import { Configuration } from "webpack";

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src')
	}

	const mode = env.mode || Mode.DEVELOPMENT;
	const PORT = env.port || 3000;

	const isDev = mode === Mode.DEVELOPMENT;

	const config: Configuration = setupConfig({
		port: PORT,
		mode,
		isDev,
		paths
	});

	return config;
};