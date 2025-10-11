"use client";

import type { User } from "@nhost/nhost-js/auth";
import type React from "react";
import { useSidebar } from "../context/SidebarContext";
import { UserProvider } from "../context/UserContext";
import AppHeader from "../layout/AppHeader";
import AppSidebar from "../layout/AppSidebar";
import Backdrop from "../layout/Backdrop";

export default function AdminLayout({
  children,
  user
}: {
  children: React.ReactNode;
  user: User;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";

  return (
    <UserProvider user={user}>
      <div className="min-h-screen xl:flex">
        {/* Sidebar and Backdrop */}
        <AppSidebar />
        <Backdrop />
        {/* Main Content Area */}
        <div
          className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
        >
          {/* Header */}
          <AppHeader />
          {/* Page Content */}
          <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
        </div>
      </div>
    </UserProvider>
  );
}
