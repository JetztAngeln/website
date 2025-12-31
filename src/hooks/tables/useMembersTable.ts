"use client";

import {
	getCoreRowModel,
	type SortingState,
	useReactTable,
} from "@tanstack/react-table";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { getMembersColumns } from "@/components/tables/members/members-columns";
import { useSidebar } from "@/context/SidebarContext";
import { useUser } from "@/context/UserContext";
import { useAuth } from "@/lib/nhost/AuthProvider";
import membersMapSort from "@/lib/sorting/members/mapSort";
import { getUsersByClubId } from "@/nhost-api/clubs/user.client";
import { ClubUserOrderByEnum } from "@/nhost-api/graphql/generated/sdks";
import type { MembersTableActions } from "./useMembersTableModal";

export function useMembersTable(
	pending: boolean,
	actions: MembersTableActions,
) {
	const { nhost, session } = useAuth();
	const { selectedClub } = useSidebar();
	const locale = useLocale();

	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [search, setSearch] = useState("");
	const [debouncedSearch] = useDebounce(search, 400);
	const [sort, setSort] = useState<SortingState>([
		{ id: "displayName", desc: false },
	]);
	const user = useUser();

	const t = useTranslations("MembersTable");

	const clubId = selectedClub?.id;

	const swrKey = [
		"membersTable",
		clubId,
		pending,
		page,
		pageSize,
		debouncedSearch,
		sort,
	] as const;

	const swr = useSWR(swrKey, async (key) => {
		if (!key[1]) return { users: [], total: 0 };

		const sortParams = membersMapSort(key[6]);
		if (!sortParams.length) {
			sortParams.push(ClubUserOrderByEnum.DisplayNameAsc);
		}

		return getUsersByClubId(
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
		actions,
	});

	const table = useReactTable({
		data: swr.data?.users ?? [],
		columns,
		pageCount: swr.data ? Math.ceil(swr.data.total / pageSize) : -1,
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

	return {
		table,
		...swr,
		search,
		clubId,
		t,
		setSearch,
		page,
		pageSize,
		setPage,
		setPageSize,
	};
}
