import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type React from "react";
import LanguageSelect from "@/components/header/SelectLanguage";
import GridShape from "../../../components/common/GridShape";
import ThemeTogglerTwo from "../../../components/common/ThemeTogglerTwo";
import { ThemeProvider } from "../../../context/ThemeContext";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const t = useTranslations("SignIn");
	return (
		<div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
			<ThemeProvider>
				<div className="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900 sm:p-0">
					{children}
					<div className="lg:w-1/2 w-full h-full lg:grid items-center hidden bg-brand-950">
						<div className="relative items-center justify-center flex z-1">
							<GridShape />
							<div className="flex flex-col items-center max-w-xs">
								<Link href="/" className="block mb-4">
									<Image
										width={231}
										height={48}
										src="/images/logo/logo_area_text.svg"
										alt="JetztAngeln"
									/>
								</Link>
								<p className="text-center text-gray-400 dark:text-white/60">
									{t("layoutDescription")}
								</p>
							</div>
						</div>
					</div>
					<div className="fixed top-6 right-6 z-50 flex sm:top-auto sm:bottom-6 justify-end items-center gap-2 w-60">
						<div className="w-34">
							<LanguageSelect />
						</div>
						<ThemeTogglerTwo />
					</div>
				</div>
			</ThemeProvider>
		</div>
	);
}
