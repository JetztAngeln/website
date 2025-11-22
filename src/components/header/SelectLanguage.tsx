"use client";

import { useRouter } from '@/i18n/navigation';
import { routing } from "@/i18n/routing";
import { ChevronsUpDownIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const LanguageSelect = () => {
    // Default to the first club when clubs are available
    const locale = useLocale();

    const router = useRouter();
    const pathname = usePathname();

    const Languages = useTranslations("Languages");

    const changeLanguage = (lng: string) => {
        router.replace(`/${pathname.split('/').slice(2).join('/')}`, {
            locale: lng
        });
    };

    return (
        <div className="w-full max-w-sm relative shrink-0">
            <select
                className={`h-11 w-full appearance-none rounded-lg border bg-white border-gray-300 px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 text-gray-800`}
                value={locale ?? ""}
                onChange={(e) => {
                    changeLanguage(e.currentTarget.value);
                }}
            >
                {routing.locales.map((language) => (
                    <option key={language} value={language} className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
                        {Languages(language)}
                    </option>
                ))}

            </select>
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <ChevronsUpDownIcon size={16} />
            </span>
        </div>
    );
};

export default LanguageSelect;