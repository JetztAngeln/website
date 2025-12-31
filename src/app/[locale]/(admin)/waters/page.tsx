import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import WatersTable from "@/components/tables/waters/WatersTable";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Waters" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

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
