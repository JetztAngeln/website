import { getUserFromCookies } from "@/app/lib/auth/actions";
import AdminLayout from "./_layout_client";


export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserFromCookies();

  if (!user) {
    return null;
  }

  return <AdminLayout user={user}>{children}</AdminLayout>;
}
