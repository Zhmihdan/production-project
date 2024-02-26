export function classNames(className: string, mods: Record<string, boolean | string> = {}, additional: string[] = []): string {
	return [className, ...additional.filter(Boolean), ...Object.entries(mods).filter(([, value]) => Boolean(value)).map(([clsName]) => clsName)].join(" ");
}