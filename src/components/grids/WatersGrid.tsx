"use client";

import { useSidebar } from "@/context/SidebarContext";
import { ClubWater } from "@/lib/models/water";
import { useAuth } from "@/lib/nhost/AuthProvider";
import { getWatersByClubId } from "@/nhost-api/waters/waters.client";
import { NhostClient } from "@nhost/nhost-js";
import { _Translator, useTranslations } from "next-intl";
import useSWR from "swr";

export default function WatersGrid({ onWaterSelect }: Readonly<{ onWaterSelect: (waterId: string) => void }>) {
    const { nhost } = useAuth();
    const { selectedClub } = useSidebar();
    const t = useTranslations("WatersPage");
    const fishTypesT = useTranslations("FishTypes");

    const { data: waters, error: errorWaters, isLoading: isLoadingWaters } = useSWR<ClubWater[], {
        error: string;
    }, any>(`watersForClub-${selectedClub?.id!}`, async (url: any) => await getWatersByClubId(nhost, selectedClub?.id!));

    if (isLoadingWaters) {
        return <div>
            <p>Loading...</p>
        </div>;
    }


    return <div>
        <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{t('pageDescription')}</p>
        </div>
        <div className="grid gap-6 items-start" style={{
            gridTemplateColumns: "repeat(auto-fit, 24rem)"
        }}>
            {waters?.map((e) => (
                <WaterCard key={e.id} nhost={nhost} t={t} name={e.name} draft={e.draft} imageId={e.image_id} description={e.description ?? t("noDescription")} fishTypes={e.fish_types.map((fishType) => fishTypesT(fishType))} onClick={() => onWaterSelect(e.id)} />
            ))}
        </div>
    </div>;
}

function WaterCard(
    { nhost, t, imageId, name, draft, description, fishTypes, onClick }:
        Readonly<{ nhost: NhostClient, t: _Translator, imageId?: string, name: string, draft: boolean, description: string, fishTypes: string[], onClick: () => void }>
) {
    const imageUrl = nhost.storage.baseURL + "/files/" + imageId;

    return <button className="w-sm rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden text-start" onClick={onClick}>
        {imageId == null ? (
            <div className="w-full h-32 bg-gray-200 dark:bg-gray-800"></div>
        ) : (
            <img src={imageUrl} alt="" className="w-full h-32" />
        )}

        <div className="p-4">
            <div className="flex flex-row justify-between items-center gap-2">
                <p className="text-gray-800 dark:text-white font-bold text-2xl overflow-auto break-words">{name}</p>
                {
                    draft ?
                        (<div className="bg-red-500 rounded-full">
                            <p className="text-xs text-white p-3 py-2">{t("draft")}</p>
                        </div>) : null
                }
            </div>
            <div className="mt-2">
                <p className="text-gray-800 dark:text-white font-semibold">{t("description")}</p>
                <p className="text-gray-800 dark:text-white line-clamp-3">{description}</p>
            </div>
            <div className="mt-4">
                <p className="text-gray-800 dark:text-white font-semibold">{t("fishTypes", { count: fishTypes.length })}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {
                        fishTypes.map((e) => (
                            <div key={e} className="bg-gray-800  rounded-full">
                                <p className="text-xs text-white p-3 py-2">{e}</p>
                            </div>
                        )).slice(0, 10)
                    }
                    {fishTypes.length > 10 ? (
                        <div className="bg-gray-800 rounded-full">
                            <p className="text-xs text-white p-3 py-2">...</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    </button>;
}