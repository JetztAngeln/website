"use client";

import WatersGrid from "@/components/grids/WatersGrid";
import EditWaterModal from "@/components/ui/modal/EditWaterModal";
import { useModal } from "@/hooks/useModal";
import { useTranslations } from "next-intl";
import { useState } from "react";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";




export default function WatersPage() {
  const t = useTranslations("WatersPage");
  const { isOpen, openModal, closeModal } = useModal();
  const [waterId, setWaterId] = useState<string | null>();

  return (
    <div>
      <EditWaterModal isOpen={isOpen} closeModal={closeModal} waterId={waterId!} />
      <PageBreadcrumb pageTitle={t("title")} />
      <WatersGrid onWaterSelect={(waterId: string) => {
        setWaterId(waterId);
        openModal();
      }} />
    </div>
  );
}
