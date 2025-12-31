import { mapLocaleDE } from "./map_locale_de";
import { mapLocaleEN } from "./map_locale_en";

export function getMapLocaleByLocale(locale: string) {
	if (locale === "de") {
		return mapLocaleDE;
	}

	return mapLocaleEN;
}
