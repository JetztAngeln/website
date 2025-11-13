/** biome-ignore-all lint/correctness/useExhaustiveDependencies: / */

import { LoaderCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Modal } from ".";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import Button from "../button/Button";

export default function EditWaterModal({ isOpen, closeModal, waterId }: { isOpen: boolean; closeModal: () => void; waterId: string; }) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const t = useTranslations("AddWaterModal");

    useEffect(() => {
        if (!isOpen) {
            setLoading(false);
        }
    }, [isOpen]);

    const handleSave = async () => {

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
                <Button size="sm" onClick={handleSave} disabled={loading}>
                    {t("save")} {loading && <LoaderCircle className="inline ml-2 animate-spin" size={16} />}
                </Button>
            </div>
        </Modal>
    )
}
