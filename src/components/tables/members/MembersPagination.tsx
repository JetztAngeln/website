import type { createTranslator, Messages } from "next-intl";

type Props = {
	page: number;
	pageSize: number;
	total: number;
	isLoading: boolean;
	onPageChange: (page: number) => void;
	onPageSizeChange: (size: number) => void;
	t: ReturnType<typeof createTranslator<Messages, "MembersTable">>;
};

export default function MembersPagination({
	page,
	pageSize,
	total,
	isLoading,
	onPageChange,
	onPageSizeChange,
	t,
}: Readonly<Props>) {
	const totalPages = Math.max(1, Math.ceil(total / pageSize));

	return (
		<div className="mt-4 flex items-center justify-between">
			<span className="text-sm text-gray-600 dark:text-gray-400">
				{t("page")} {page + 1} {t("of")} {totalPages}
			</span>

			<div className="flex items-center gap-4">
				{/* Page size */}
				<select
					value={pageSize}
					onChange={(e) => {
						onPageChange(0);
						onPageSizeChange(Number(e.target.value));
					}}
					className="rounded-md border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-gray-500"
				>
					{[10, 20, 50].map((size) => (
						<option key={size} value={size}>
							{size} / {t("page")}
						</option>
					))}
				</select>

				{/* Navigation */}
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => onPageChange(Math.max(0, page - 1))}
						disabled={page === 0 || isLoading}
						className="rounded-md border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-gray-500 dark:hover:bg-gray-50/5"
					>
						{t("previous")}
					</button>

					<button
						type="button"
						onClick={() => onPageChange(Math.min(page + 1, totalPages - 1))}
						disabled={page >= totalPages - 1 || isLoading}
						className="rounded-md border border-gray-200 bg-white px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-gray-500 dark:hover:bg-gray-50/5"
					>
						{t("next")}
					</button>
				</div>
			</div>
		</div>
	);
}
