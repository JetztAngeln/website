"use client";

import WatersTable from "@/components/tables/WatersTable";
import EditWaterModal from "@/components/ui/modal/EditWaterModal";
import { useModal } from "@/hooks/useModal";
import { useTranslations } from "next-intl";
import { useState } from "react";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";




export default function WatersPage() {
  const t = useTranslations("WatersPage");
  const { isOpen, openModal, closeModal } = useModal();
  const [waterId, setWaterId] = useState<string | null>();
  const [updateCounter, setUpdateCounter] = useState(0);

  return (
    <div>
      <EditWaterModal isOpen={isOpen} closeModal={closeModal} waterId={waterId!} onSave={() => setUpdateCounter(c => c + 1)} />
      <PageBreadcrumb pageTitle={t("title")} />
      <WatersTable onWaterSelect={(waterId: string) => {
        setWaterId(waterId);
        openModal();
      }}
        updateCounter={updateCounter}
      />
    </div>
  );
}
