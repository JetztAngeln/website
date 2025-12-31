import { flexRender, type Table as ReactTable } from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type { createTranslator, Messages } from "next-intl";
import type { ClubUserRelationFragment } from "@/nhost-api/graphql/generated/sdks";

type Props<T> = {
    table: ReactTable<T>;
    isLoading: boolean;
    data:
        | { relations: ClubUserRelationFragment[]; total: number }
        | null
        | undefined;
    t: ReturnType<typeof createTranslator<Messages, "MembersTable">>;
};

export default function MembersTableView<T>({
    table,
    isLoading,
    data,
    t,
}: Readonly<Props<T>>) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <table className="min-w-full border-collapse text-left text-sm">
                <thead className="border-b border-gray-100 dark:border-white/[0.05]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="cursor-pointer px-5 py-3 font-medium text-gray-500 text-theme-xs dark:text-gray-400"
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
                                    }[header.column.getIsSorted() as string] ??
                                        null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {isLoading
                        ? renderSkeletonRows()
                        : table.getRowModel().rows.map((row) => (
                              <tr
                                  key={row.id}
                                  className="border-b border-gray-100 dark:border-white/[0.05] hover:bg-gray-50 dark:hover:bg-gray-50/5 transition-colors"
                              >
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

            {!isLoading && data?.relations.length === 0 && (
                <div className="p-4 text-center text-gray-500">
                    {t("noUsersFound")}
                </div>
            )}
        </div>
    );
}

/* ---------- helpers ---------- */

function renderSkeletonRows(rows = 10) {
    return Array.from(new Array(rows)).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: it's just for loading
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
    ));
}
