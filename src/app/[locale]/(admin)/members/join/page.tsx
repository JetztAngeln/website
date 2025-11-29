import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { ClubInviteQRCodeDownload } from "@/components/header/ClubInviteQRCodeDownload";
import MembersTable from "@/components/tables/members/MembersTable";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Mitglieder - JetztAngeln",
  description: "Verwalte die Mitglieder deines Angelvereins",
};

export default function MembersPage() {
  const t = useTranslations("MembersJoinPage");
  return (
    <div>
      <PageBreadcrumb pageTitle={t("title")} />
      <ClubInviteQRCodeDownload />
      <ComponentCard title={t("tableTitle")}>
        <MembersTable pending={true} />
      </ComponentCard>
    </div>
  );
}
