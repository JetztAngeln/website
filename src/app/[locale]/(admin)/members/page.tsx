import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import MembersTable from "../../components/tables/MembersTable";

export const metadata: Metadata = {
  title: "Mitglieder - JetztAngeln",
  description: "Verwalte die Mitglieder deines Angelvereins",
};

export default function MembersPage() {
  const t = useTranslations("MembersPage");
  return (
    <div>
      <PageBreadcrumb pageTitle={t("title")} />
      <ComponentCard title={t("tableTitle")}>
        <MembersTable />
      </ComponentCard>
    </div>
  );
}
