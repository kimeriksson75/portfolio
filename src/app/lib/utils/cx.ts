type Types = null | undefined | number | string | boolean;
/**
 * Filters out classNames
 * @param args - classNames to filter
 */
function cx(...args: (Types | Record<string, Types>)[]): string {
	const classNames = new Set<string>();

	for (const arg of args) {
		if (!arg) continue;

		switch (typeof arg) {
			case "number":
				throw new TypeError("Class names cannot be of type number");
			case "string":
				classNames.add(`${arg}`);
				break;
			case "object":
				for (const [className, valid] of Object.entries(arg)) {
					if (valid) classNames.add(className);
				}
		}
	}
	return Array.from(classNames).join(" ");
}
export default cx;
