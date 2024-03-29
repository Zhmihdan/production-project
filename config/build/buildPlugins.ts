import {
	WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin
} from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BuildOptions } from "./types/config";

export default function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({ template: paths.html }),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css"
		}),
		new DefinePlugin({
			__IS_DEV__: isDev
		}),
		new BundleAnalyzerPlugin({ openAnalyzer: false })
	];

	if (isDev) {
		plugins.push(new HotModuleReplacementPlugin());
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	return plugins;
}