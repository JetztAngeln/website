import { FishType } from "@/lib/models/fish_type";
import { ClubWater } from "@/lib/models/water";
import { useAuth } from "@/lib/nhost/AuthProvider";
import { getGraphQLClient } from "@/nhost-api/graphql/graphql_provider";
import { LoaderCircle } from "lucide-react";
import { GeoJSONFeature } from "maplibre-gl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal } from ".";
import Checkbox from "../../form/input/Checkbox";
import FileInput from "../../form/input/FileInput";
import Input from "../../form/input/InputField";
import TextArea from "../../form/input/TextArea";
import Label from "../../form/Label";
import Button from "../button/Button";

type EditWaterModalType = Readonly<{
    isOpen: boolean;
    closeModal: () => void;
    waterId: string;
    onSave: () => void;
}>;

export default function EditWaterModal({ isOpen, closeModal, waterId, onSave }: EditWaterModalType) {
    const { nhost } = useAuth();
    const t = useTranslations("EditWaterModal");
    const FishTypesT = useTranslations("FishTypes");
    const locale = useLocale();

    const [loading, setLoading] = useState(false);
    const [water, setWater] = useState<ClubWater | null>(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isDraft, setIsDraft] = useState(false);
    const [isMembersOnly, setIsMembersOnly] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [selectedFishTypeIds, setSelectedFishTypeIds] = useState<string[]>([]);

    useEffect(() => {
        if (!isOpen) {
            setLoading(false);
            setWater(null);
            setName("");
            setDescription("");
            setIsDraft(false);
            setIsMembersOnly(false);
            setImageFile(null);
            setImageUrl(null);
            setSelectedFishTypeIds([]);
            return;
        }

        const fetchWaterData = async () => {
            setLoading(true);
            try {
                const result = await getGraphQLClient(nhost).GetWaterById({
                    id: waterId,
                });

                if (result.club_waters_by_pk) {
                    setWater({ ...result.club_waters_by_pk, geo_json: result.club_waters_by_pk.geo_json as GeoJSONFeature[], fish_types: result.club_waters_by_pk.fish_types as FishType[] });
                    setName(result.club_waters_by_pk.name);
                    setDescription(result.club_waters_by_pk.description || "");
                    setIsDraft(result.club_waters_by_pk.draft);
                    setIsMembersOnly(result.club_waters_by_pk.members_only);
                    setImageUrl(result.club_waters_by_pk.image_id ? `${nhost.storage.baseURL}/files/${result.club_waters_by_pk.image_id}` : null);
                    setSelectedFishTypeIds(result.club_waters_by_pk.fish_types || []);
                }
            } catch (err) {
                console.error("Error fetching water data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchWaterData();
    }, [isOpen, waterId, nhost.graphql, nhost.storage]);

    const handleFishTypeChange = (fishTypeId: string, isChecked: boolean) => {
        setSelectedFishTypeIds((prev) =>
            isChecked ? [...prev, fishTypeId] : prev.filter((id) => id !== fishTypeId)
        );
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            let newImageId = water?.image_id || null;

            // 1. Upload new image if present
            if (imageFile) {
                const response = await nhost.storage.uploadFiles({
                    "file[]": [
                        imageFile
                    ],
                    "bucket-id": "public", // Assuming a bucket for water images
                });

                const { processedFiles } = response.body;
                const file = processedFiles[0];

                newImageId = file?.id || null;
            }

            // 2. Call UPDATE_WATER mutation
            await getGraphQLClient(nhost).UpdateWater({
                id: waterId,
                name,
                description,
                draft: isDraft,
                members_only: isMembersOnly,
                image_id: newImageId,
                fish_types: selectedFishTypeIds,
            });

            // 3. Close modal on success
            onSave();
            closeModal();
        } catch (err) {
            console.error("Error saving water:", err);
            // TODO: Show a user-friendly error message
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[507px] p-6 lg:p-10">
                <LoaderCircle className="animate-spin mx-auto" size={32} />
            </Modal>
        );
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            className="max-w-[507px] max-h-8/12 overflow-scroll no-scrollbar p-6 lg:p-10"
        >
            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                {t("title")}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{t("subText")}</p>

            <div className="space-y-4">
                <div>
                    <Label htmlFor="name">{t("name")}</Label>
                    <Input
                        id="name"
                        className="w-full"
                        type="text"
                        placeholder={t("namePlaceholder")}
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <Label htmlFor="description">{t("description")}</Label>
                    <TextArea
                        className="w-full"
                        placeholder={t("descriptionPlaceholder")}
                        value={description}
                        onChange={(e) => setDescription(e)}
                    />
                </div>

                <div>
                    <Label htmlFor="image">{t("image")}</Label>
                    {imageUrl && (
                        <div className="mb-2">
                            <Image src={imageUrl} alt="Water Image" width={200} height={200} className="rounded-md" />
                        </div>
                    )}
                    <FileInput
                        onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox
                        id="isDraft"
                        checked={isDraft}
                        onChange={(e) => setIsDraft(e)}
                    />
                    <Label htmlFor="isDraft" className="h-3.5">{t("isDraft")}</Label>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox
                        id="isMembersOnly"
                        checked={isMembersOnly}
                        onChange={(e) => setIsMembersOnly(e)}
                    />
                    <Label htmlFor="isMembersOnly" className="h-3.5">{t("isMembersOnly")}</Label>
                </div>

                <div>
                    <Label>{t("fishTypes")}</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {Object.values(FishType).map((e) => { return { "key": e, "value": FishTypesT(e) } }).sort((a, b) => a.value.localeCompare(b.value, locale)).map((fishType) => {
                            const isSelected = selectedFishTypeIds.includes(fishType.key);
                            return (
                                <button
                                    key={fishType.key}
                                    className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200 ${isSelected
                                        ? "bg-brand-500 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                                        }`}
                                    onClick={() => handleFishTypeChange(fishType.key, !isSelected)}
                                >
                                    {fishType.value}
                                </button>
                            );
                        })}
                    </div>
                </div>
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
