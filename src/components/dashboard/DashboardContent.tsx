"use client";

import { Droplets, FileText, Plus, Settings, Users } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type React from "react";
import { useState } from "react";
import useSWR from "swr";
import { useSidebar } from "@/context/SidebarContext";
import { useModal } from "@/hooks/useModal";
import { useAuth } from "@/lib/nhost/AuthProvider";
import { getClubsDashboard } from "@/nhost-api/clubs/clubs.client";
import type { GetClubDashboardStatsQuery } from "@/nhost-api/graphql/generated/sdks";
import EditWaterModal from "../ui/modal/EditWaterModal";

export default function DashboardContent() {
    const { nhost, session } = useAuth();
    const { selectedClub } = useSidebar();
    const t = useTranslations("Dashboard");
    const clubId = selectedClub?.id;
    const { isOpen, openModal, closeModal } = useModal();
    const [selectedWaterId, setSelectedWaterId] = useState<string | null>(null);

    const handleWaterClick = (waterId: string) => {
        setSelectedWaterId(waterId);
        openModal();
    };

    const { data, error, isLoading, mutate } =
        useSWR<GetClubDashboardStatsQuery | null>(
            clubId ? ["dashboardStats", clubId] : null,
            async () => {
                return getClubsDashboard(nhost, session, clubId);
            },
        );

    if (!clubId) {
        return (
            <div className="p-6">
                <p className="text-gray-500 dark:text-gray-400">{t("selectClub")}</p>
            </div>
        );
    }

    if (isLoading) {
        return <div className="p-6">Loading...</div>;
    }

    if (error || data == null) {
        return <div className="p-6 text-red-500">Error: {error.message}</div>;
    }

    const stats = data;

    const memberCount = stats.members.length;
    const publishedWatersCount = stats.waters.filter((w) => !w.draft).length;
    const draftWatersCount = stats.waters.filter((w) => w.draft).length;

    return (
        <div className="space-y-6">
            {selectedWaterId && (
                <EditWaterModal
                    isOpen={isOpen}
                    closeModal={() => {
                        closeModal();
                        setSelectedWaterId(null);
                    }}
                    waterId={selectedWaterId}
                    onSave={() => {
                        mutate();
                        closeModal();
                        setSelectedWaterId(null);
                    }}
                />
            )}
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard
                    title={t("stats.members")}
                    value={memberCount}
                    icon={<Users className="w-6 h-6 text-blue-500" />}
                />
                <StatCard
                    title={t("stats.publishedWaters")}
                    value={publishedWatersCount}
                    icon={<Droplets className="w-6 h-6 text-green-500" />}
                />
                <StatCard
                    title={t("stats.draftWaters")}
                    value={draftWatersCount}
                    icon={<FileText className="w-6 h-6 text-orange-500" />}
                />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Recent Members */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
                        {t("recentActivity.newMembers")}
                    </h3>
                    <div className="space-y-4">
                        {stats.members.length > 0 ? (
                            stats.members.slice(0, 5).map((member) => (
                                <div
                                    key={member.id}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                                            {member.user.displayName.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800 dark:text-white/90">
                                                {member.user.displayName}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400">
                                {t("recentActivity.noMembers")}
                            </p>
                        )}
                    </div>
                </div>

                {/* Recent Waters */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
                        {t("recentActivity.newWaters")}
                    </h3>
                    <div className="space-y-4">
                        {stats.waters.length > 0 ? (
                            stats.waters.slice(0, 5).map((water) => (
                                <button
                                    key={water.id}
                                    onClick={() => handleWaterClick(water.id)}
                                    className="flex w-full items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                                    type="button"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                            <Droplets className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium text-gray-800 dark:text-white/90">
                                                {water.name}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {water.draft
                                                    ? t("stats.draftWaters")
                                                    : t("stats.publishedWaters")}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400">
                                {t("recentActivity.noWaters")}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
                    {t("quickActions.title")}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <QuickActionCard
                        title={t("quickActions.addMember")}
                        href="/members"
                        icon={<Plus className="w-5 h-5" />}
                        color="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    />
                    <QuickActionCard
                        title={t("quickActions.addWater")}
                        href="/waters/add/river"
                        icon={<Plus className="w-5 h-5" />}
                        color="bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                    />
                    <QuickActionCard
                        title={t("quickActions.editProfile")}
                        href="/profile"
                        icon={<Settings className="w-5 h-5" />}
                        color="bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    />
                </div>
            </div>
        </div>
    );
}

function StatCard({
    title,
    value,
    icon,
}: {
    title: string;
    value: number | string;
    icon: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                    <h4 className="mt-2 text-2xl font-bold text-gray-800 dark:text-white/90">
                        {value}
                    </h4>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800">
                    {icon}
                </div>
            </div>
        </div>
    );
}

function QuickActionCard({
    title,
    href,
    icon,
    color,
}: {
    title: string;
    href: string;
    icon: React.ReactNode;
    color: string;
}) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 rounded-xl border border-gray-100 p-4 transition-all hover:border-gray-200 hover:shadow-sm dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-white/[0.03]"
        >
            <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}
            >
                {icon}
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300">
                {title}
            </span>
        </Link>
    );
}