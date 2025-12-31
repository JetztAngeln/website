import type { User } from "@nhost/nhost-js/auth";
import type { ColumnDef } from "@tanstack/react-table";
import { EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import type { createTranslator, Messages } from "next-intl";
import {
	Dropdown,
	DropdownContent,
	DropdownTrigger,
} from "@/components/ui/dropdown/Dropdown";
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem";
import type { MembersTableActions } from "@/hooks/tables/useMembersTableModal";
import type { UserClubRelation } from "@/nhost-api/graphql/generated/sdks";

type MembersColumns = {
	t: ReturnType<typeof createTranslator<Messages, "MembersPage">>;
	user: User | null | undefined;
	pending: boolean;
	locale: string;
	actions: MembersTableActions;
};

const roleColors: Record<UserClubRelation["role"], string> = {
	ADMIN: "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500",
	SUPERVISOR:
		"bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
	USER: "bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80",
};

export const getMembersColumns = ({
	t,
	user,
	pending,
	locale,
	actions,
}: MembersColumns) => {
	const columns: ColumnDef<UserClubRelation>[] = [
		{
			accessorKey: "displayName",
			header: "Name",
			cell: ({ row }) => {
				const userClubRelation = row.original;
				return (
					<div className="flex items-center gap-3">
						<Image
							src={
								userClubRelation.user.avatarUrl ||
								"https://gravatar.com/avatar/?d=identicon"
							}
							alt={userClubRelation.user.displayName}
							width={40}
							height={40}
							className="h-10 w-10 rounded-full object-cover"
						/>
						<div>
							<div className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
								{userClubRelation.user.displayName}
							</div>
							<div className="text-sm text-gray-500">
								{userClubRelation.user.email}
							</div>
						</div>
					</div>
				);
			},
		},
		{
			accessorKey: "role",
			header: t("role"),
			cell: ({ row }) => {
				const role = row.original.role;
				return (
					<span
						className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${roleColors[role]}`}
					>
						{role}
					</span>
				);
			},
		},
		{
			accessorKey: "lastSeen",
			header: t("lastSeen"),
			cell: ({ row }) => {
				const lastSeen = row.original.user.lastSeen
					? new Date(row.original.user.lastSeen)
					: null;
				return lastSeen ? (
					<span className="text-sm text-gray-600 dark:text-gray-500">
						{lastSeen.toLocaleDateString(locale)}{" "}
						{lastSeen.toLocaleTimeString(locale, {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</span>
				) : (
					<span className="text-sm text-gray-400">{t("never")}</span>
				);
			},
		},
		{
			id: "actions",
			header: t("action"),
			cell: ({ row }) => {
				const handleEdit = () => {
					actions.edit(row.original);
				};

				const handleDelete = () => {
					actions.delete(row.original);
				};

				const handleAcceptNewJoiner = () => {
					actions.accept(row.original);
				};

				const handleDeclineNewJoiner = () => {
					actions.decline(row.original);
				};

				return (
					<div hidden={row.original.user.id === user?.id}>
						<Dropdown>
							<DropdownTrigger>
								<EllipsisVerticalIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
							</DropdownTrigger>
							<DropdownContent>
								<DropdownItem
									onClick={pending ? handleAcceptNewJoiner : handleEdit}
									className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
								>
									{t(pending ? "acceptNewJoiner" : "viewProfile")}
								</DropdownItem>
								<DropdownItem
									onClick={pending ? handleDeclineNewJoiner : handleDelete}
									className="flex w-full font-normal text-left text-error-600! rounded-lg hover:bg-error-500/10! hover:text-error-700! dark:text-error-500!  dark:hover:text-error-400!"
								>
									{t(pending ? "declineNewJoiner" : "delete")}
								</DropdownItem>
							</DropdownContent>
						</Dropdown>
					</div>
				);
			},
		},
	];

	return columns;
};
