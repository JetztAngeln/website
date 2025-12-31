import Link from "next/link";
import type React from "react";
import { useDropdownContext } from "./Dropdown";

interface DropdownItemProps {
	tag?: "a" | "button";
	href?: string;
	onClick?: (event: React.MouseEvent) => void;
	baseClassName?: string;
	className?: string;
	children: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
	tag = "button",
	href,
	onClick,
	baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
	className = "",
	children,
}) => {
	const { setOpen } = useDropdownContext();
	const combinedClasses = `${baseClassName} ${className}`.trim();

	const handleClick = (event: React.MouseEvent) => {
		if (tag === "button") {
			event.preventDefault();
		}
		if (onClick) onClick(event);
		setOpen(false);
	};

	if (tag === "a" && href) {
		return (
			<Link href={href} className={combinedClasses} onClick={handleClick}>
				{children}
			</Link>
		);
	}

	return (
		<button type="button" onClick={handleClick} className={combinedClasses}>
			{children}
		</button>
	);
};
