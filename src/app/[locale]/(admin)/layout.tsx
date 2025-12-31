"use client";

import { useAuth } from "@/lib/nhost/AuthProvider";
import AdminLayout from "./_layout_client";

export default function DashboardLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const auth = useAuth();

	if (!auth.isAuthenticated || auth.user == null) {
		return null;
	}

	return <AdminLayout>{children}</AdminLayout>;
}
