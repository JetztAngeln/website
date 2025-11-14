/** biome-ignore-all lint/correctness/useExhaustiveDependencies: causes re-render loop */
"use client";

import { useSidebar } from "@/context/SidebarContext";
import { ClubWater } from "@/lib/models/water";
import { useAuth } from "@/lib/nhost/AuthProvider";
import { getWatersByClubId } from "@/nhost-api/waters/waters.client";
import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    type SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon, EllipsisVerticalIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type React from "react";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { Dropdown, DropdownContent, DropdownTrigger } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

const WatersTable: React.FC<{ onWaterSelect: (waterId: string) => void; updateCounter: number }> = ({ onWaterSelect, updateCounter }) => {
    const { nhost } = useAuth();
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 400);
    const [sort, setSort] = useState<SortingState>([{ id: "name", desc: false }]);
    const { selectedClub } = useSidebar();
    const t = useTranslations("WatersPage");

    const { data, isLoading } = useSWR<ClubWater[], any>(
        ["watersTable", selectedClub?.id, page, pageSize, debouncedSearch, updateCounter],
        async (key: any) => {
            if (key[1] == null) {
                return [];
            }
            // TODO: Add sorting and searching to the API call
            return await getWatersByClubId(nhost, key[1]);
        },
    );

    const columns = useMemo<ColumnDef<ClubWater>[]>(
        () => [
            {
                accessorKey: "image",
                header: "",
                enableSorting: false,
                cell: ({ row }) => {
                    const water = row.original;
                    const imageUrl = water.image_id ? `${nhost.storage.baseURL + "/files/" + water.image_id}` : "https://gravatar.com/avatar/?d=identicon";
                    return (
                        <Image
                            src={imageUrl}
                            alt={water.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-md object-cover"
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
                        <div className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">{water.name}</div>
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
                accessorKey: "draft",
                header: t("status"),
                cell: ({ row }) => {
                    const isDraft = row.original.draft;
                    return (
                        <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${isDraft
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
                        onWaterSelect(row.original.id);
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
                                    className="flex w-full font-normal text-left text-error-600! rounded-lg hover:bg-error-50! hover:text-error-700! dark:text-error-500 dark:hover:bg-error-500/10 dark:hover:text-error-400"
                                >
                                    {t("delete")}
                                </DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    );
                },
            },
        ],
        [t, onWaterSelect, nhost.storage]
    );

    const table = useReactTable({
        data: data ?? [],
        columns,
        pageCount: data ? Math.ceil(data.length / pageSize) : -1, // This needs to be updated with total from API
        manualPagination: true,
        onSortingChange: setSort,
        state: {
            pagination: { pageIndex: page, pageSize },
            sorting: sort
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
        <div className="rounded-lg">
            {/* Search bar */}
            <div className="mb-4 flex justify-between relative">
                <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                    <svg
                        className="fill-gray-500 dark:fill-gray-400"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Search icon</title>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                            fill=""
                        />
                    </svg>
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
                                        className="cursor-pointer px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{
                                            asc: <ChevronUpIcon className="ml-1 inline-block h-4 w-4" aria-label="sorted ascending" />,
                                            desc: <ChevronDownIcon className="ml-1 inline-block h-4 w-4" aria-label="sorted descending" />,
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {isLoading
                            ? Array.from({ length: pageSize }).map((_, i) => (
                                // biome-ignore lint/suspicious/noArrayIndexKey: <i> is fine here
                                <tr key={i} className="border-b">
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
                                <tr key={row.id} className="border-b border-gray-100 dark:border-white/[0.05] hover:bg-gray-50 dark:hover:bg-gray-50/5 transition-colors">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-4 py-3">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                </table>

                {!isLoading && data?.length === 0 && (
                    <div className="p-4 text-center text-gray-500">{t("noWatersFound")}</div>
                )}
            </div>

            {/* Pagination controls */}
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                    {t("page")} {page + 1} {t("of")} {data ? Math.ceil(data.length / pageSize) : 1}
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
                                    !data ? old : Math.min(old + 1, Math.ceil(data.length / pageSize) - 1)
                                )
                            }
                            disabled={!data || page >= Math.ceil(data.length / pageSize) - 1 || isLoading}
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
export default WatersTable;
