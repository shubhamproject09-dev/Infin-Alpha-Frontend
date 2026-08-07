"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.replace("/admin/login");
        } else {
            setChecking(false);
        }
    }, [router]);

    if (checking) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-100">
                Loading...
            </div>
        );
    }

    return <>{children}</>;
}