export enum Mode {
	PRODUCTION = "production",
	DEVELOPMENT = "development"
}

export type BuildMode = Mode.PRODUCTION | Mode.DEVELOPMENT;

export interface BuildEnv {
	port: number;
	mode: BuildMode;
}

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
	src: string;
}

export interface BuildOptions {
	mode: BuildMode,
	isDev: boolean,
	paths: BuildPaths,
	port: number
}