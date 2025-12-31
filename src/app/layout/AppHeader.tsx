"use client";
import { TextAlignStart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type React from "react";
import { useState } from "react";
import useSWR from "swr";
import type { ClubInfo } from "@/lib/models/club_info";
import { useAuth } from "@/lib/nhost/AuthProvider";
import { getClubsForCurrentUser } from "@/nhost-api/clubs/user.client";
import { ThemeToggleButton } from "../../components/common/ThemeToggleButton";
import SelectClub from "../../components/header/SelectClub";
import UserDropdown from "../../components/header/UserDropdown";
import { useSidebar } from "../../context/SidebarContext";

const AppHeader: React.FC = () => {
	const { nhost, session } = useAuth();
	const [isApplicationMenuOpen, setIsApplicationMenuOpen] = useState(false);
	const {
		data: clubs,
		error: errorClubs,
		isLoading: isLoadingClubs,
	} = useSWR<
		ClubInfo[],
		{
			error: string;
		},
		any
	>("appHeader", async () => await getClubsForCurrentUser(nhost, session));

	const {
		isMobileOpen,
		toggleSidebar,
		toggleMobileSidebar,
		selectedClub,
		setSelectedClub,
	} = useSidebar();
	const t = useTranslations("AppHeader");

	const handleToggle = () => {
		if (window.innerWidth >= 1024) {
			toggleSidebar();
		} else {
			toggleMobileSidebar();
		}
	};

	const toggleApplicationMenu = () => {
		setIsApplicationMenuOpen(!isApplicationMenuOpen);
	};

	return (
		<header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
			<div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
				<div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
					<button
						type="button"
						className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
						onClick={handleToggle}
						aria-label="Toggle Sidebar"
					>
						{isMobileOpen ? <X /> : <TextAlignStart />}
						{/* Cross Icon */}
					</button>

					<Link href="/" className="lg:hidden">
						<Image
							width={154}
							height={32}
							className="dark:hidden"
							src="/images/logo/logo_blue.svg"
							alt="Logo"
						/>
						<Image
							width={154}
							height={32}
							className="hidden dark:block"
							src="/images/logo/logo_white.svg"
							alt="Logo"
						/>
					</Link>
					<div className="flex gap-x-4 items-center">
						<div className="block lg:hidden">
							<ThemeToggleButton />
						</div>
						<button
							type="button"
							onClick={toggleApplicationMenu}
							className="flex items-center justify-center w-10 h-10 -ml-2 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
						>
							<TextAlignStart />
						</button>
					</div>

					<div className="hidden lg:block">
						{clubs && (
							<SelectClub
								clubs={clubs}
								selectedClub={selectedClub}
								setSelectedClub={setSelectedClub}
								placeholder={t("selectClubPlaceholder")}
								error={errorClubs}
								isLoading={isLoadingClubs}
							/>
						)}
					</div>
				</div>
				<div
					className={`${
						isApplicationMenuOpen ? "flex" : "hidden"
					} items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
				>
					{" "}
					{/* <!-- Language Selector & Theme Toggler --> */}
					<div className="hidden lg:block">
						<ThemeToggleButton />
					</div>
					<div className="lg:hidden">
						{clubs && (
							<SelectClub
								clubs={clubs}
								selectedClub={selectedClub}
								setSelectedClub={setSelectedClub}
								placeholder={t("selectClubPlaceholder")}
								error={errorClubs}
								isLoading={isLoadingClubs}
							/>
						)}
					</div>
					{/* <!-- User Area --> */}
					<UserDropdown />
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
