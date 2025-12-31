import { getTranslations } from "next-intl/server";
import type React from "react";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "AddWater" });

	return {
		title: t("metaTitle"),
		description: t("metaDescription"),
	};
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
