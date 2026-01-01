"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import SelectWater from "@/components/tables/waters/SelectWater";
import type { ClubWaterFragment } from "@/nhost-api/graphql/generated/sdks";
import Button from "../button/Button";

interface SelectWaterModalProps {
    isOpen: boolean;
    waters: ClubWaterFragment[];
    onSelect: (waterId: string) => void;
    loading: boolean;
}

export default function SelectWaterModal({
    isOpen,
    waters,
    onSelect,
    loading,
}: SelectWaterModalProps) {
    const [selectedId, setSelectedId] = useState<string>("");
    const t = useTranslations("SelectWaterModal");

    if (!isOpen) return null;

    const handleConfirm = () => {
        if (selectedId) {
            onSelect(selectedId);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full mx-4 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t("title")}
                    </h2>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {t("description")}
                </p>

                {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                    </div>
                ) : waters.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600 dark:text-gray-400">
                            {t("noWaters")}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <label
                                htmlFor="water-select"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                {t("selectLabel")}
                            </label>
                            <SelectWater
                                waters={waters}
                                selectedWater={selectedId || null}
                                setSelectedWater={setSelectedId}
                                placeholder={t("selectPlaceholder")}
                            />
                        </div>
                        <Button
                            type="button"
                            variant="primary"
                            onClick={handleConfirm}
                            disabled={!selectedId}
                            className="w-full"
                        >
                            {t("confirm")}
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
