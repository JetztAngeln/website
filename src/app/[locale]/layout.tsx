import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { SidebarProvider } from "../../context/SidebarContext";
import { ThemeProvider } from "../../context/ThemeContext";
import { AuthProvider } from "../../lib/nhost/AuthProvider";
import "./globals.css";

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
	title: "JetztAngeln - Die Angelplattform",
	description:
		"Dein Angelverein digital in der Hosentasche - JetztAngeln macht's möglich!",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<Props>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<html lang={locale}>
			<body className="dark:bg-gray-900">
				<NextIntlClientProvider>
					<ThemeProvider>
						<AuthProvider>
							<SidebarProvider>{children}</SidebarProvider>
						</AuthProvider>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
