import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ComponentCard from "../../../../components/common/ComponentCard";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";
import MembersTable from "../../../../components/tables/members/MembersTable";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MembersPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function MembersPage() {
  const t = useTranslations("MembersPage");
  return (
    <div>
      <PageBreadcrumb pageTitle={t("title")} />
      <ComponentCard title={t("tableTitle")}>
        <MembersTable pending={false} />
      </ComponentCard>
    </div>
  );
}
