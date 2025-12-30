"use client";

import {
	flexRender,
	getCoreRowModel,
	type SortingState,
	useReactTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon, Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import type React from "react";
import { useState } from "react";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import AcceptNewJoinerModal from "@/components/ui/modal/AcceptNewJoinerModal";
import DeclineNewJoinerModal from "@/components/ui/modal/DeclineNewJoinerModal";
import { useAuth } from "@/lib/nhost/AuthProvider";
import membersMapSort from "@/lib/sorting/members/mapSort";
import { getUsersByClubId } from "@/nhost-api/clubs/user.client";
import {
	ClubUserOrderByEnum,
	type ClubUserRelationFragment,
} from "@/nhost-api/graphql/generated/sdks";
import { useSidebar } from "../../../context/SidebarContext";
import { useModal } from "../../../hooks/useModal";
import DeleteUserModal from "../../ui/modal/DeleteUserModal";
import EditUserRoleModal from "../../ui/modal/EditUserRoleModal";
import { getMembersColumns } from "./members-columns";

const MembersTable: React.FC<{ pending: boolean }> = ({ pending }) => {
	const { nhost, session, user } = useAuth();
	const locale = useLocale();
	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [search, setSearch] = useState("");
	const [debouncedSearch] = useDebounce(search, 400);
	const [sort, setSort] = useState<SortingState>([
		{ id: "displayName", desc: false },
	]);
	const [selectedUserClubRelation, setSelectedUserClubRelation] =
		useState<ClubUserRelationFragment | null>(null);
	const {
		isOpen: isEditOpen,
		openModal: openEditModal,
		closeModal: closeEditModal,
	} = useModal();
	const {
		isOpen: isDeleteOpen,
		openModal: openDeleteModal,
		closeModal: closeDeleteModal,
	} = useModal();
	const {
		isOpen: isAcceptNewJoinerOpen,
		openModal: openAcceptNewJoinerModal,
		closeModal: closeAcceptNewJoinerModal,
	} = useModal();
	const {
		isOpen: isDeclineNewJoinerOpen,
		openModal: openDeclineNewJoinerModal,
		closeModal: closeDeclineNewJoinerModal,
	} = useModal();
	const { selectedClub } = useSidebar();
	const t = useTranslations("MembersTable");
	const clubId = selectedClub?.id;

	const membersTableKey = [
		"membersTable",
		clubId,
		pending,
		page,
		pageSize,
		debouncedSearch,
		sort,
	] as const;

	const { data, isLoading, mutate } = useSWR<{
		users: ClubUserRelationFragment[];
		total: number;
	} | null>(membersTableKey, async (key: typeof membersTableKey) => {
		if (key[1] == null) {
			return {
				users: [],
				total: 0,
			};
		}

		const sortParams = membersMapSort(key[6]);
		if (sortParams.length === 0) {
			sortParams.push(ClubUserOrderByEnum.DisplayNameAsc);
		}

		return await getUsersByClubId(
			nhost,
			session,
			key[1],
			key[2],
			key[3] + 1,
			key[4],
			key[5],
			sortParams[0],
		);
	});

	const columns = getMembersColumns({
		t,
		user,
		pending,
		locale,
		openEditModal,
		openDeleteModal,
		openAcceptNewJoinerModal,
		openDeclineNewJoinerModal,
		setSelectedUser: setSelectedUserClubRelation,
	});

	const table = useReactTable({
		data: data?.users ?? [],
		columns,
		pageCount: data ? Math.ceil(data.total / pageSize) : -1,
		manualPagination: true,
		manualSorting: true,
		onSortingChange: setSort,
		state: {
			pagination: { pageIndex: page, pageSize },
			sorting: sort,
		},
		getCoreRowModel: getCoreRowModel(),
		onPaginationChange: (updater) => {
			const newState =
				typeof updater === "function"
					? updater({ pageIndex: page, pageSize })
					: updater;
			setPage(newState.pageIndex);
			setPageSize(newState.pageSize);
		},
	});

	return (
		<div className="rounded-lg">
			{/* Search bar */}
			<div className="mb-4 flex justify-between relative">
				<span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
					<Search className="text-gray-500 dark:text-gray-400" height={20} />
				</span>
				<input
					type="text"
					placeholder="Search by name or email..."
					value={search}
					onChange={(e) => {
						setPage(0);
						setSearch(e.target.value);
					}}
					className="dark:bg-dark-900 h-11 w-fit rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
				/>
			</div>

			{/* Edit User Modal */}
			<EditUserRoleModal
				isOpen={isEditOpen}
				closeModal={closeEditModal}
				selectedUserClubRelation={selectedUserClubRelation ?? null}
				onSuccess={mutate}
			/>
			{/* Delete User Modal */}
			<DeleteUserModal
				isOpen={isDeleteOpen}
				closeModal={closeDeleteModal}
				selectedUserClubRelation={selectedUserClubRelation ?? null}
				clubId={clubId || ""}
				onSuccess={mutate}
			/>
			{/* Accept New Joiner Modal */}
			<AcceptNewJoinerModal
				isOpen={isAcceptNewJoinerOpen}
				closeModal={closeAcceptNewJoinerModal}
				selectedUserClubRelation={selectedUserClubRelation ?? null}
				clubId={clubId || ""}
				onSuccess={mutate}
			/>
			{/* Decline New Joiner Modal */}
			<DeclineNewJoinerModal
				isOpen={isDeclineNewJoinerOpen}
				closeModal={closeDeclineNewJoinerModal}
				selectedUserClubRelation={selectedUserClubRelation ?? null}
				clubId={clubId || ""}
				onSuccess={mutate}
			/>

			{/* Table */}
			<div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
				<table className="min-w-full border-collapse text-left text-sm">
					<thead className="border-b border-gray-100 dark:border-white/[0.05]">
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										className="cursor-pointer px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
										onClick={header.column.getToggleSortingHandler()}
									>
										{flexRender(
											header.column.columnDef.header,
											header.getContext(),
										)}
										{{
											asc: (
												<ChevronUpIcon
													className="ml-1 inline-block h-4 w-4"
													aria-label="sorted ascending"
												/>
											),
											desc: (
												<ChevronDownIcon
													className="ml-1 inline-block h-4 w-4"
													aria-label="sorted descending"
												/>
											),
										}[header.column.getIsSorted() as string] ?? null}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{isLoading
							? [...new Array(10).keys()].map((i) => (
									<tr key={i} className="border-b">
										{/* Skeleton Items */}
										<td className="px-4 py-3">
											<div className="flex items-center gap-3">
												<div className="h-10 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
												<div>
													<div className="mb-1 h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
													<div className="h-3 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
												</div>
											</div>
										</td>
										<td className="px-4 py-3">
											<div className="h-5 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
										</td>
										<td className="px-4 py-3">
											<div className="h-4 w-28 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
										</td>
										<td className="px-4 py-3">
											<div className="h-6 w-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
										</td>
									</tr>
								))
							: table.getRowModel().rows.map((row) => (
									<tr
										key={row.id}
										className="border-b border-gray-100 dark:border-white/[0.05] hover:bg-gray-50 dark:hover:bg-gray-50/5 transition-colors"
									>
										{/* Real Items */}
										{row.getVisibleCells().map((cell) => (
											<td key={cell.id} className="px-4 py-3">
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
								))}
					</tbody>
				</table>

				{!isLoading && data?.users.length === 0 && (
					<div className="p-4 text-center text-gray-500">
						{t("noUsersFound")}
					</div>
				)}
			</div>

			{/* Pagination controls */}
			<div className="mt-4 flex items-center justify-between">
				<span className="text-sm text-gray-600">
					{t("page")} {page + 1} {t("of")}{" "}
					{data ? Math.ceil(data.total / pageSize) : 1}
				</span>

				<div className="flex items-center gap-4">
					{/* Page size selector */}
					<select
						value={pageSize}
						onChange={(e) => {
							setPage(0);
							setPageSize(Number(e.target.value));
						}}
						className="rounded-md border border-gray-200 text-gray-600 dark:text-gray-500 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] px-2 py-1 text-sm"
					>
						{[10, 20, 50].map((size) => (
							<option key={size} value={size}>
								{size} / {t("page")}
							</option>
						))}
					</select>

					{/* Page buttons */}
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => setPage((old) => Math.max(0, old - 1))}
							disabled={page === 0 || isLoading}
							className="rounded-md border border-gray-200 text-gray-600 dark:text-gray-500 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] px-2 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-50/5 disabled:opacity-50"
						>
							{t("previous")}
						</button>
						<button
							type="button"
							onClick={() =>
								setPage((old) =>
									data
										? Math.min(old + 1, Math.ceil(data.total / pageSize) - 1)
										: old,
								)
							}
							disabled={
								!data ||
								page >= Math.ceil(data.total / pageSize) - 1 ||
								isLoading
							}
							className="rounded-md border border-gray-200 text-gray-600 dark:text-gray-500 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] px-2 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-50/5 disabled:opacity-50"
						>
							{t("next")}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MembersTable;
