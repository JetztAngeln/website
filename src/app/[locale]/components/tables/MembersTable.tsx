"use client";

import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { MemberSortEnum } from "@/app/lib/enums/MemberSortEnum";
import type { UserInfo } from "@/app/lib/nhost/server/data/users";
import { useSidebar } from "../../context/SidebarContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const roleColors: Record<UserInfo["role"], string> = {
    ADMIN: "bg-red-100 text-red-800",
    SUPERVISOR: "bg-yellow-100 text-yellow-800",
    USER: "bg-gray-100 text-gray-800",
};

const MembersTable: React.FC = () => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<MemberSortEnum>(MemberSortEnum.DISPLAY_NAME_ASC);
    const { selectedClub } = useSidebar();
    const clubId = selectedClub?.id;

    // Build the API URL with query params
    const url = useMemo(() => {
        if (!clubId) return null;
        const q = `/api/clubs/${clubId}/users?page=${page + 1}&pageSize=${pageSize}&search=${search}&sort=${sort}`;
        return q;
    }, [clubId, page, pageSize, search, sort]);

    const { data, error, isLoading } = useSWR<{ data: UserInfo[]; total: number }>(
        url,
        fetcher
    );

    console.log(url);

    const columns = useMemo<ColumnDef<UserInfo>[]>(
        () => [
            {
                accessorKey: "displayName",
                header: "Name",
                cell: ({ row }) => {
                    const user = row.original;
                    return (
                        <div className="flex items-center gap-3">
                            <Image
                                src={user.avatarUrl || "/default-avatar.png"}
                                alt={user.displayName}
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                                <div className="font-medium">{user.displayName}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                        </div>
                    );
                },
            },
            {
                accessorKey: "role",
                header: "Role",
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
                header: "Last Seen",
                cell: ({ row }) => {
                    const lastSeen = row.original.lastSeen ? new Date(row.original.lastSeen) : null;
                    return lastSeen ? (
                        <span className="text-sm text-gray-600">
                            {lastSeen.toLocaleDateString()}{" "}
                            {lastSeen.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                    ) : (
                        <span className="text-sm text-gray-400">Never</span>
                    );
                },
            },
            {
                id: "actions",
                header: "Action",
                cell: ({ row }) => (
                    <div className="relative">
                        <button type="button" className="rounded p-2 hover:bg-gray-100">
                            <EllipsisVertical className="h-5 w-5 text-gray-600" />
                        </button>
                    </div>
                ),
            },
        ],
        []
    );

    const table = useReactTable({
        data: data?.data ?? [],
        columns,
        pageCount: data ? Math.ceil(data.total / pageSize) : -1,
        manualPagination: true,
        manualSorting: true,
        state: {
            pagination: { pageIndex: page, pageSize },
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
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => {
                        setPage(0);
                        setSearch(e.target.value);
                    }}
                    className="dark:bg-dark-900 h-11 w-fit rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <table className="min-w-full border-collapse text-left text-sm">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="cursor-pointer px-4 py-2 font-medium"
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{
                                            asc: " 🔼",
                                            desc: " 🔽",
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {isLoading
                            ? Array.from({ length: pageSize }).map((_, i) => (
                                <tr key={i} className="border-b">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
                                            <div>
                                                <div className="mb-1 h-4 w-32 animate-pulse rounded bg-gray-200" />
                                                <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="h-5 w-16 animate-pulse rounded bg-gray-200" />
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
                                    </td>
                                </tr>
                            ))
                            : table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className="border-b hover:bg-gray-50 transition-colors">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-4 py-3">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                </table>

                {!isLoading && data?.data.length === 0 && (
                    <div className="p-4 text-center text-gray-500">No users found.</div>
                )}
            </div>

            {/* Pagination controls */}
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                    Page {page + 1} of {data ? Math.ceil(data.total / pageSize) : 1}
                </span>

                <div className="flex items-center gap-4">
                    {/* Page size selector */}
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPage(0);
                            setPageSize(Number(e.target.value));
                        }}
                        className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    >
                        {[10, 20, 50].map((size) => (
                            <option key={size} value={size}>
                                {size} / page
                            </option>
                        ))}
                    </select>

                    {/* Page buttons */}
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => setPage((old) => Math.max(0, old - 1))}
                            disabled={page === 0 || isLoading}
                            className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                setPage((old) =>
                                    !data ? old : Math.min(old + 1, Math.ceil(data.total / pageSize) - 1)
                                )
                            }
                            disabled={!data || page >= Math.ceil(data.total / pageSize) - 1 || isLoading}
                            className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MembersTable;
