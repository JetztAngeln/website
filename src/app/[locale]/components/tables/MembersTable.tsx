/** biome-ignore-all lint/correctness/useExhaustiveDependencies: causes re-render loop */
"use client";

import { User } from "@nhost/nhost-js/auth";
import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    type SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon, EllipsisVerticalIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type React from "react";
import { useMemo, useState } from "react";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { MemberSortEnum } from "@/app/lib/enums/MemberSortEnum";
import type { UserInfo } from "@/app/lib/nhost/server/data/users";
import { fetcher } from "@/app/lib/swr/fetcher";
import { useSidebar } from "../../context/SidebarContext";
import { useUser } from "../../context/UserContext";
import { useModal } from "../../hooks/useModal";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import DeleteUserModal from "../ui/modal/DeleteUserModal";
import EditUserRoleModal from "../ui/modal/EditUserRoleModal";

const roleColors: Record<UserInfo["role"], string> = {
    ADMIN: "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500",
    SUPERVISOR: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
    USER: "bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80",
};


function mapSort(inputs: SortingState): MemberSortEnum[] {
    return inputs.map((input) => {
        switch (input.id) {
            case "displayName":
                return input.desc ? MemberSortEnum.DISPLAY_NAME_DESC : MemberSortEnum.DISPLAY_NAME_ASC;
            case "role":
                return input.desc ? MemberSortEnum.ROLE_DESC : MemberSortEnum.ROLE_ASC;
            case "lastSeen":
                return input.desc ? MemberSortEnum.LAST_SEEN_DESC : MemberSortEnum.LAST_SEEN_ASC;
            default:
                return MemberSortEnum.DISPLAY_NAME_ASC;
        }
    });
}

const MembersTable: React.FC = () => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 400);
    const [sort, setSort] = useState<SortingState>([{ id: "displayName", desc: false }]);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<UserInfo | null>(null);
    const { isOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal();
    const { isOpen: isDeleteOpen, openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal();
    const { selectedClub } = useSidebar();
    const user = useUser();
    const t = useTranslations("MembersTable");
    const clubId = selectedClub?.id;

    const url = useMemo(() => {
        if (!clubId) return null;
        const sortParams = mapSort(sort);
        if (sortParams.length === 0) {
            sortParams.push(MemberSortEnum.DISPLAY_NAME_ASC);
        }
        const q = `/api/clubs/${clubId}/users?page=${page + 1}&pageSize=${pageSize}&search=${debouncedSearch}&sort=${sortParams}`;
        return q;
    }, [clubId, page, pageSize, debouncedSearch, sort, !isDeleteOpen]);

    const { data, isLoading, mutate } = useSWR<{ data: UserInfo[]; total: number }>(
        url,
        fetcher
    );

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
                                src={user.avatarUrl || "https://gravatar.com/avatar/?d=identicon"}
                                alt={user.displayName}
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                                <div className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">{user.displayName}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
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
                    const lastSeen = row.original.lastSeen ? new Date(row.original.lastSeen) : null;
                    return lastSeen ? (
                        <span className="text-sm text-gray-600 dark:text-gray-500">
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
                header: t("action"),
                cell: ({ row }) => {
                    const handleEdit = () => {
                        setSelectedUser(row.original);
                        openEditModal();
                        setOpenDropdownId(null);
                    };

                    const handleDelete = () => {
                        setSelectedUser(row.original);
                        openDeleteModal();
                        setOpenDropdownId(null);
                    };

                    return (
                        <div className="relative" hidden={row.original.id === user?.id}>
                            <button
                                type="button"
                                className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                onClick={() => setOpenDropdownId(openDropdownId === row.id ? null : row.id)}
                                disabled={row.original.id === user?.id}
                            >
                                <EllipsisVerticalIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
                            </button>
                            <Dropdown
                                isOpen={openDropdownId === row.id}
                                onClose={() => setOpenDropdownId(null)}
                                className="w-40 p-2"
                            >
                                <DropdownItem
                                    onClick={handleEdit}
                                    className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                >
                                    {t("viewProfile")}
                                </DropdownItem>
                                <DropdownItem
                                    onClick={handleDelete}
                                    className="flex w-full font-normal text-left text-error-600! rounded-lg hover:bg-error-50! hover:text-error-700! dark:text-error-500 dark:hover:bg-error-500/10 dark:hover:text-error-400"
                                >
                                    {t("delete")}
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    );
                },
            },
        ],
        [t, openDropdownId]
    );

    const table = useReactTable({
        data: data?.data ?? [],
        columns,
        pageCount: data ? Math.ceil(data.total / pageSize) : -1,
        manualPagination: true,
        manualSorting: true,
        onSortingChange: setSort,
        state: {
            pagination: { pageIndex: page, pageSize },
            sorting: sort
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
                    className="dark:bg-dark-900 h-11 w-fit rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
                />
            </div>

            {/* Edit User Modal */}
            <EditUserRoleModal
                isOpen={isEditOpen}
                closeModal={closeEditModal}
                selectedUser={selectedUser ? { ...selectedUser, avatarUrl: selectedUser.avatarUrl ?? "" } : null}
                clubId={clubId || ""}
                onSuccess={mutate}
            />
            {/* Delete User Modal */}
            <DeleteUserModal
                isOpen={isDeleteOpen}
                closeModal={closeDeleteModal}
                selectedUser={selectedUser ? { ...selectedUser, avatarUrl: selectedUser.avatarUrl ?? "" } : null}
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

                {!isLoading && data?.data.length === 0 && (
                    <div className="p-4 text-center text-gray-500">{t("noUsersFound")}</div>
                )}
            </div>

            {/* Pagination controls */}
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                    {t("page")} {page + 1} {t("of")} {data ? Math.ceil(data.total / pageSize) : 1}
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
                                    !data ? old : Math.min(old + 1, Math.ceil(data.total / pageSize) - 1)
                                )
                            }
                            disabled={!data || page >= Math.ceil(data.total / pageSize) - 1 || isLoading}
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