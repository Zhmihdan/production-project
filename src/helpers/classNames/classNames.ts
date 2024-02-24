export function classNames(className: string, mods: Record<string, boolean | string>, additional: string[]): string {
	return [className, ...additional, ...Object.entries(mods).filter(([, value]) => Boolean(value)).map(([className]) => className)].join(' ');
}