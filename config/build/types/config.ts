export type BuildMode = Mode.PRODUCTION | Mode.DEVELOPMENT;

export enum Mode {
	PRODUCTION = 'production',
	DEVELOPMENT = 'development'
}

export interface BuildEnv {
	port: number;
	mode: BuildMode;
}

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
}

export interface BuildOptions {
	mode: BuildMode,
	isDev: boolean,
	paths: BuildPaths,
	port: number
}