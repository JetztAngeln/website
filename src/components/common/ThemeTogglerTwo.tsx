"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeTogglerTwo() {
	const { toggleTheme } = useTheme();
	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="inline-flex size-14 items-center justify-center rounded-full bg-brand-500 text-white transition-colors hover:bg-brand-600"
		>
			<Sun className="hidden dark:block" height={20} />
			<Moon className="dark:hidden" height={20} />
		</button>
	);
}
