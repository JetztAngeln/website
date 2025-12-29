"use client";

import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { useSidebar } from "@/context/SidebarContext";
import { useModal } from "@/hooks/useModal";
import { useAuth } from "@/lib/nhost/AuthProvider";
import type { ClubWaterFragment } from "@/nhost-api/graphql/generated/sdks";
import { getWatersByClubId } from "@/nhost-api/waters/waters.client";
import EditWaterModal from "../../ui/modal/EditWaterModal";
import { getWatersColumns } from "./waters-columns";

const WatersTable = () => {
	const t = useTranslations("WatersPage");
	const { nhost } = useAuth();
	const { selectedClub } = useSidebar();

	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [search, setSearch] = useState("");
	const [debouncedSearch] = useDebounce(search, 400);
	const [sort, setSort] = useState<SortingState>([{ id: "name", desc: false }]);
	const { isOpen, openModal, closeModal } = useModal();
	const [selectedWaterId, setSelectedWaterId] = useState<string | null>();

	const watersTableQueryKey = [
		"watersTable",
		selectedClub?.id,
		page,
		pageSize,
		debouncedSearch,
		selectedWaterId,
	];

	const { data, isLoading } = useSWR<ClubWaterFragment[]>(
		watersTableQueryKey,
		async (key: typeof watersTableQueryKey) => {
			if (key[1] == null) {
				return [];
			}
			// TODO: Add searching to the API call
			return await getWatersByClubId(nhost, key[1] as string);
		},
	);

	const columns = getWatersColumns({ t, nhost, openModal, setSelectedWaterId });

	const table = useReactTable({
		data: data ?? [],
		columns,
		pageCount: data ? Math.ceil(data.length / pageSize) : -1, // This needs to be updated with total from API
		manualPagination: true,
		onSortingChange: setSort,
		state: {
			pagination: { pageIndex: page, pageSize },
			sorting: sort,
		},
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
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
		<div>
			<EditWaterModal
				isOpen={isOpen}
				closeModal={closeModal}
				// biome-ignore lint/style/noNonNullAssertion: will only get triggered if a water is present
				waterId={selectedWaterId!}
				onSave={() => setSelectedWaterId(null)}
			/>
			<div className="rounded-lg">
				{/* Search bar */}
				<div className="mb-4 flex justify-between relative">
					<span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
						<Search className="text-gray-500 dark:text-gray-400" height={20} />
					</span>
					<input
						type="text"
						placeholder={t("searchPlaceholder")}
						value={search}
						onChange={(e) => {
							setPage(0);
							setSearch(e.target.value);
						}}
						className="dark:bg-dark-900 h-11 w-fit rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
					/>
				</div>

				{/* Table */}
				<div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
					<table className="min-w-full border-collapse text-left text-sm">
						<thead className="border-b border-gray-100 dark:border-white/[0.05]">
							{table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<th
											key={header.id}
											style={{ width: `${header.column.getSize()}px` }}
											className={`cursor-pointer px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400`}
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
										<tr key={`loading-placeholder-${i}`} className="border-b">
											{/* Skeleton Items */}
											<td className="px-4 py-3">
												<div className="flex items-center gap-3">
													<div className="h-10 w-10 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
													<div>
														<div className="mb-1 h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
													</div>
												</div>
											</td>
											<td className="px-4 py-3">
												<div className="h-5 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
											</td>
											<td className="px-4 py-3">
												<div className="h-4 w-28 animate-pulse rounded bg-gray-200 dark:bg-ray-700" />
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
												<td key={cell.id} className={`px-4 py-3`}>
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

					{!isLoading && data?.length === 0 && (
						<div className="p-4 text-center text-gray-500">
							{t("noWatersFound")}
						</div>
					)}
				</div>

				{/* Pagination controls */}
				<div className="mt-4 flex items-center justify-between">
					<span className="text-sm text-gray-600">
						{t("page")} {page + 1} {t("of")}{" "}
						{data ? Math.ceil(data.length / pageSize) : 1}
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
											? Math.min(old + 1, Math.ceil(data.length / pageSize) - 1)
											: old,
									)
								}
								disabled={
									!data ||
									page >= Math.ceil(data.length / pageSize) - 1 ||
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
		</div>
	);
};
export default WatersTable;
