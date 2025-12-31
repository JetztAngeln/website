import type { NhostClient } from "@nhost/nhost-js";
import type { ColumnDef } from "@tanstack/react-table";
import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import type { createTranslator, Messages } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import {
	Dropdown,
	DropdownContent,
	DropdownTrigger,
} from "@/components/ui/dropdown/Dropdown";
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem";
import type { ClubWaterFragment } from "@/nhost-api/graphql/generated/sdks";

type WatersColumns = {
	t: ReturnType<typeof createTranslator<Messages, "WatersPage">>;
	nhost: NhostClient;
	openModal: () => void;
	setSelectedWaterId: Dispatch<SetStateAction<string | null | undefined>>;
};

export const getWatersColumns = ({
	t,
	nhost,
	openModal,
	setSelectedWaterId,
}: WatersColumns) => {
	const columns: ColumnDef<ClubWaterFragment>[] = [
		{
			accessorKey: "image",
			header: "",
			enableSorting: false,
			cell: ({ row }) => {
				const water = row.original;
				const imageUrl = water.image_id
					? `${`${nhost.storage.baseURL}/files/${water.image_id}`}`
					: "https://gravatar.com/avatar/?d=identicon";
				return (
					<Image
						src={imageUrl}
						alt={water.name}
						width={128}
						height={60}
						className="max-h-16 rounded-md object-cover"
					/>
				);
			},
		},
		{
			accessorKey: "name",
			header: t("name"),
			cell: ({ row }) => {
				const water = row.original;
				return (
					<div className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
						{water.name}
					</div>
				);
			},
		},
		{
			accessorKey: "fish_types",
			header: t("fishTypes", { count: 2 }),
			cell: ({ row }) => {
				const fishTypes = row.original.fish_types;
				return (
					<span className="text-sm text-gray-600 dark:text-gray-500">
						{fishTypes.length}
					</span>
				);
			},
		},
		{
			accessorKey: "membersOnly",
			header: t("status"),
			cell: ({ row }) => {
				const isMembersOnly = row.original.members_only;
				return (
					<span
						className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
							isMembersOnly
								? "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500"
								: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500"
						}`}
						title={isMembersOnly ? t("private_info") : t("public_info")}
					>
						{isMembersOnly ? t("private") : t("public")}
					</span>
				);
			},
		},
		{
			accessorKey: "draft",
			header: t("draft"),
			cell: ({ row }) => {
				const isDraft = row.original.draft;
				return (
					<span
						className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
							isDraft
								? "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500"
								: ""
						}`}
					>
						{isDraft ? t("draft") : ""}
					</span>
				);
			},
		},
		{
			id: "actions",
			header: t("action"),
			cell: ({ row }) => {
				const handleEdit = () => {
					setSelectedWaterId(row.original.id);
					openModal();
				};

				const handleDelete = () => {
					// TODO: Implement delete
				};

				return (
					<Dropdown>
						<DropdownTrigger>
							<EllipsisVerticalIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
						</DropdownTrigger>
						<DropdownContent>
							<DropdownItem
								onClick={handleEdit}
								className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
							>
								{t("edit")}
							</DropdownItem>
							<DropdownItem
								onClick={handleDelete}
								className="flex w-full font-normal text-left text-error-600! rounded-lg hover:bg-error-500/10! hover:text-error-700! dark:text-error-500!  dark:hover:text-error-400!"
							>
								{t("delete")}
							</DropdownItem>
						</DropdownContent>
					</Dropdown>
				);
			},
		},
	];

	return columns;
};
