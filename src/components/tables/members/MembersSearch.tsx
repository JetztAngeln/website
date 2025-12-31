import { Search } from "lucide-react";

export default function MembersSearch({
	value,
	onChange,
}: Readonly<{
	value: string;
	onChange: (v: string) => void;
}>) {
	return (
		<div className="mb-4 flex justify-between relative">
			<span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
				<Search className="text-gray-500 dark:text-gray-400" height={20} />
			</span>
			<input
				type="text"
				placeholder="Search by name or email..."
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}
				className="dark:bg-dark-900 h-11 w-fit rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
			/>
		</div>
	);
}
