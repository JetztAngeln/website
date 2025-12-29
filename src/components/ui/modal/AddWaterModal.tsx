import { LoaderCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { capitalizeFirst } from "@/lib/utils";
import type { ClubWaterFragment } from "@/nhost-api/graphql/generated/sdks";
import {
	addWaterToClub,
	addZoneToWater,
} from "@/nhost-api/waters/waters.server";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import Button from "../button/Button";
import { Modal } from ".";

export default function AddWaterModal({
	isOpen,
	closeModal,
	feature,
	clubId,
	addedFeatures,
	addFeature,
	type,
	selectedWater,
}: Readonly<{
	isOpen: boolean;
	closeModal: () => void;
	feature: string;
	clubId: string;
	addedFeatures: string[];
	addFeature: (feature: string[]) => void;
	type: string;
	selectedWater: ClubWaterFragment | undefined;
}>) {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const t = useTranslations(`AddWaterModal${capitalizeFirst(type)}`);

	useEffect(() => {
		if (!isOpen) {
			setLoading(false);
		}
		if (feature === "") {
			setLoading(false);
			closeModal();
		}
	}, [isOpen, feature, closeModal]);

	const handleSave = async () => {
		if (
			feature &&
			clubId &&
			!addedFeatures.includes(feature) &&
			(name.trim() !== "" || type === "zone")
		) {
			setLoading(true);
			if (selectedWater == null) {
				closeModal();
				return;
			}
			try {
				if (type === "zone") {
					await addZoneToWater(selectedWater, JSON.parse(feature));
				} else {
					await addWaterToClub(clubId, name.trim(), [JSON.parse(feature)]);
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
	};

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

			{type === "zone" ? null : (
				<div>
					<Label>{t("name")}</Label>
					<Input
						className="w-full"
						type="text"
						placeholder={t("namePlaceholder")}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
			)}

			<div className="flex items-center justify-between w-full gap-3 mt-6">
				<Button size="sm" variant="outline" onClick={closeModal}>
					{t("cancel")}
				</Button>
				<Button
					size="sm"
					onClick={handleSave}
					disabled={loading || !feature || !clubId}
				>
					{t("save")}{" "}
					{loading && (
						<LoaderCircle className="inline ml-2 animate-spin" size={16} />
					)}
				</Button>
			</div>
		</Modal>
	);
}
