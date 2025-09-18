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
    const { selectedClub } = useSidebar();
    const clubId = selectedClub?.id;

    // Build the API URL with query params
    const url = useMemo(() => {
        if (!clubId) return null;
        let q = `/api/clubs/${clubId}/users?page=${page + 1}&pageSize=${pageSize}&search=${search}`;
        return q;
    }, [clubId, page, pageSize, search]);

    const { data, error, isLoading } = useSWR<{ data: UserInfo[]; total: number }>(
        url,
        fetcher
    );

    console.log("Fetched data:", data, "Error:", error);

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
                        <button className="rounded p-2 hover:bg-gray-100">
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
        <div className="rounded-lg bg-white shadow-md">
            <div className="p-4">
                {/* Search bar */}
                <div className="mb-4 flex justify-between">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={search}
                        onChange={(e) => {
                            setPage(0);
                            setSearch(e.target.value);
                        }}
                        className="w-64 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
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
                                onClick={() => setPage((old) => Math.max(0, old - 1))}
                                disabled={page === 0 || isLoading}
                                className="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50 disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button
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
        </div>
    );
};
export default MembersTable;
