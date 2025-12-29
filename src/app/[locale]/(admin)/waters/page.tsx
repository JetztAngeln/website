import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import WatersTable from "@/components/tables/waters/WatersTable";

export const metadata: Metadata = {
	title: "Gewässerkarte - JetztAngeln",
	description: "Bearbeite und verwalte die Gewässerkarte für deinen Verein.",
};

export default function WatersPageMetadata() {
	const t = useTranslations("WatersPage");
	return (
		<div>
			<PageBreadcrumb pageTitle={t("title")} />
			<ComponentCard title={t("tableTitle")}>
				<WatersTable />
			</ComponentCard>
		</div>
	);
}
