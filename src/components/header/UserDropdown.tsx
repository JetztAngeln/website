"use client";

import { signOut } from "@/lib/auth/actions";
import { ChevronDown, CircleUserRound, Info, LogOut } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useUser } from "../../context/UserContext";
import { Dropdown, DropdownContent, DropdownTrigger } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

export default function UserDropdown() {
  const t = useTranslations("UserDropdown");
  const user = useUser();

  if (!user) {
    return (
      <div className="text-gray-500 dark:text-gray-400">
        {t("loading")}
      </div>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <button
          type="button"
          className="group flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle"
        >
          <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
            <Image
              width={44}
              height={44}
              src={user.avatarUrl ?? "https://www.gravatar.com/avatar/?d=identicon"}
              alt="User"
              loading="lazy"
            />
          </span>

          <span className="block mr-1 font-medium text-theme-sm">
            {user.displayName || "User"}
          </span>

          <ChevronDown className="stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownTrigger>

      <DropdownContent className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark">
        <div className="pt-3 px-3">
          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
            {user.displayName || "User"}
          </span>
          <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
            {user.email || "Email"}
          </span>
        </div>

        <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
          <li>
            <DropdownItem
              tag="a"
              href="/profile"
              className="flex items-center gap-3 px-3! py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              {/* Profile icon */}
              <CircleUserRound className="text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 flex-none" height={20} />
              {t("editProfile")}
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              tag="a"
              href="/support"
              className="flex items-center gap-3 px-3! py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              {/* Support icon */}
              <Info className="text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 flex-none" height={20} />
              {t("support")}
            </DropdownItem>
          </li>
        </ul>

        <DropdownItem
          tag="button"
          className="flex items-center gap-3 px-3! py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
          onClick={async (e) => {
            e.preventDefault();
            await signOut();
          }}
        >
          {/* Sign out icon */}
          <LogOut className="text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 flex-none" height={20} />
          {t("signOut")}
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}