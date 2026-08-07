"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    LogOut,
} from "lucide-react";
import { menuItems } from "./menu";
import { useDispatch } from "react-redux";
import { logoutAdmin, logoutAllDevices } from "@/redux/auth/authThunk";
import type { AppDispatch } from "@/redux/store";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    const handleLogout = async () => {

        try {

            await dispatch(logoutAdmin()).unwrap();

            toast.success("Logged out successfully");

            router.replace("/admin/login");

        } catch (error: any) {

            toast.error(error);

        }

    };

    const handleLogoutAll = async () => {

        try {

            await dispatch(logoutAllDevices()).unwrap();

            toast.success(
                "Logged out from all devices"
            );

            router.replace("/admin/login");

        } catch (error: any) {

            toast.error(error);

        }

    };

    return (
        <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 flex-col bg-gradient-to-b from-[#00314A] via-[#014C63] to-[#009A9E] text-white shadow-2xl lg:flex">
            {/* Logo */}
            <div className="border-b border-white/10 px-8 py-7">
                <h2 className="text-2xl font-bold tracking-wide">
                    INFIN ALPHA
                </h2>

                <p className="mt-1 text-sm text-white/70">
                    Admin Dashboard
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    const active =
                        pathname === item.href ||
                        pathname.startsWith(item.href + "/");

                    return (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={`group flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300

                ${active
                                    ? "bg-white text-[#00314A] shadow-lg"
                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                                }
              `}
                        >
                            <Icon
                                size={22}
                                className={`transition-transform duration-300 group-hover:scale-110 ${active ? "text-[#009A9E]" : ""
                                    }`}
                            />

                            <span className="font-medium">
                                {item.title}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="border-t border-white/10 p-5">

                <button
                    onClick={() => setShowLogoutDialog(true)}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-white/10 py-3 text-sm font-medium transition hover:bg-red-500"
                >
                    <LogOut size={18} />
                    Logout
                </button>

                {showLogoutDialog && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">

                        <div className="w-[380px] rounded-2xl bg-white p-6 shadow-2xl">

                            <h3 className="text-xl font-bold text-gray-900">
                                Logout
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                                Choose how you want to logout.
                            </p>

                            <div className="mt-6 space-y-3">

                                <button
                                    onClick={handleLogout}
                                    className="w-full rounded-xl bg-[#009A9E] py-3 font-medium text-white hover:bg-[#007f83]"
                                >
                                    Logout Current Device
                                </button>

                                <button
                                    onClick={handleLogoutAll}
                                    className="w-full rounded-xl bg-red-600 py-3 font-medium text-white hover:bg-red-700"
                                >
                                    Logout All Devices
                                </button>

                                <button
                                    onClick={() => setShowLogoutDialog(false)}
                                    className="w-full rounded-xl border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </div>
        </aside>
    );
}