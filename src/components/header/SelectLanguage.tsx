"use client";

import { DE, GB } from "country-flag-icons/react/3x2";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";

const LanguageSelect = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const toggleLanguage = () => {
		const newLocale = locale === "en" ? "de" : "en";
		router.replace(`/${pathname.split("/").slice(2).join("/")}`, {
			locale: newLocale,
		});
	};

	// Show the opposite language flag
	const FlagIcon = locale === "en" ? DE : GB;
	const ariaLabel =
		locale === "en" ? "Zu Deutsch wechseln" : "Switch to English";

	return (
		<button
			onClick={toggleLanguage}
			className={className}
			aria-label={ariaLabel}
			title={ariaLabel}
			type="button"
		>
			<FlagIcon className="h-4 w-6" />
			{children}
		</button>
	);
};

export default LanguageSelect;
