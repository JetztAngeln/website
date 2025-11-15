
import { addWaterToClub } from "@/nhost-api/waters/waters.server";
import { LoaderCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Modal } from ".";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import Button from "../button/Button";

export default function AddWaterModal({ isOpen, closeModal, feature, clubId, addedFeatures, addFeature }: Readonly<{ isOpen: boolean; closeModal: () => void; feature: string; clubId: string; addedFeatures: string[]; addFeature: (feature: string[]) => void; }>) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const t = useTranslations("AddWaterModal");

    useEffect(() => {
        if (!isOpen) {
            setLoading(false);
        }
        if (feature === "") {
            setLoading(false);
            closeModal();
        }
    }, [isOpen, feature]);

    const handleSave = async () => {
        if (feature && clubId && !addedFeatures.includes(feature) && name.trim() !== "") {
            setLoading(true);
            try {
                const response = await addWaterToClub(clubId, name.trim(), JSON.parse(feature).geometry);

                if (response.error) {
                    console.error("Failed to add water:", response.error);
                    setLoading(false);
                    return;
                }

                console.log("Water saved successfully:");
                addFeature([...addedFeatures, feature]);
                setLoading(false);
                closeModal();
            } catch (error) {
                console.error("Error saving water:", error);
                setLoading(false);
            }
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            className="max-w-[507px] p-6 lg:p-10"
        >
            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                {t("title")}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{t("subText")}</p>

            <div>
                <Label>{t("name")}</Label>
                <Input className="w-full" type="text" placeholder={t("namePlaceholder")} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="flex items-center justify-between w-full gap-3 mt-6">
                <Button size="sm" variant="outline" onClick={closeModal}>
                    {t("cancel")}
                </Button>
                <Button size="sm" onClick={handleSave} disabled={loading || !feature || !clubId}>
                    {t("save")} {loading && <LoaderCircle className="inline ml-2 animate-spin" size={16} />}
                </Button>
            </div>
        </Modal>
    )
}
