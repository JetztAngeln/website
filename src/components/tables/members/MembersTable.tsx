"use client";

import type React from "react";
import { useMembersTable } from "@/hooks/tables/useMembersTable";
import { useMembersTableModals } from "@/hooks/tables/useMembersTableModal";
import MembersModals from "./MembersModals";
import MembersPagination from "./MembersPagination";
import MembersSearch from "./MembersSearch";
import MembersTableView from "./MembersTableView";

const MembersTable: React.FC<{ pending: boolean }> = ({ pending }) => {
    const modals = useMembersTableModals();
    const members = useMembersTable(pending, modals.actions);

    return (
        <div className="rounded-lg">
            <MembersSearch
                value={members.search}
                onChange={(v) => {
                    members.setPage(0);
                    members.setSearch(v);
                }}
            ></MembersSearch>

            <MembersModals
                clubId={members.clubId}
                onSuccess={members.mutate}
                modals={modals}
            ></MembersModals>

            {/* Table */}
            <MembersTableView
                isLoading={members.isLoading}
                table={members.table}
                data={members.data}
                t={members.t}
            ></MembersTableView>

            {/* Pagination controls */}
            <MembersPagination
                page={members.page}
                pageSize={members.pageSize}
                total={members.data?.total ?? 0}
                isLoading={members.isLoading}
                onPageChange={members.setPage}
                onPageSizeChange={members.setPageSize}
                t={members.t}
            />
        </div>
    );
};
export default MembersTable;
