"use client";

import { useAuth } from "@/app/lib/nhost/AuthProvider";
import AdminLayout from "./_layout_client";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return null;
  }

  return <AdminLayout user={auth.user!}>{children}</AdminLayout>;
}
