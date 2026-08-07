"use client";

import { usePathname } from "next/navigation";
import AdminLayout from "@/components/admin/layout/AdminLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Login page par AdminLayout mat lagao
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    // Baaki sab admin pages par AdminLayout lagega
    return <AdminLayout>{children}</AdminLayout>;
}