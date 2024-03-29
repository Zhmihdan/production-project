import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export default function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ["@svgr/webpack"],
	};

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
				plugins: [
					[
						"i18next-extract",
						{
							locales: ["ru", "en"],
							keyAsDefaultValue: true
						}
					]
				]
			}
		}
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (path: string) => path.includes(".module."),
						localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
					}
				}
			},
			"sass-loader"
		]
	};

	return [
		babelLoader,
		typescriptLoader,
		cssLoader,
		svgLoader,
		fileLoader
	];
}