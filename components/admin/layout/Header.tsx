"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
    Bell,
    Clock3,
    LayoutDashboard,
    FileText,
    Menu,
    ShieldCheck,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getProfile } from "@/redux/auth/authThunk";
import ViewAdminModal from "@/components/admin/users/ViewAdminModal";
import AdminDropdown from "./AdminDropdown";
import ChangePasswordModal from "../profile/ChangePasswordModal";

interface HeaderProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setOpen }: HeaderProps) {
    const pathname = usePathname();
    const [time, setTime] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const [openPassword, setOpenPassword] = useState(false);
    const { admin } = useSelector(
        (state: RootState) => state.auth
    );

    const [
        openProfile,
        setOpenProfile,
    ] = useState(false);

    useEffect(() => {
        const update = () =>
            setTime(
                new Date().toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );

        update();
        const timer = setInterval(update, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {

        dispatch(getProfile());

    }, [dispatch]);

    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning ☀️"
            : hour < 18
                ? "Good Afternoon 🌤️"
                : "Good Evening 🌙";

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const page = useMemo(() => {
        if (pathname === "/admin/dashboard") {
            return {
                title: "Dashboard",
                icon: <LayoutDashboard size={18} />,
            };
        }

        if (pathname.includes("investor-complaint")) {
            return {
                title: "Investor Complaint",
                icon: <FileText size={18} />,
            };
        }

        return {
            title: "Admin Panel",
            icon: <ShieldCheck size={18} />,
        };
    }, [pathname]);

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
                <div className="relative overflow-hidden">

                    {/* Background */}
                    <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl" />
                    <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-sky-200/20 blur-3xl" />

                    <div className="relative flex min-h-[72px] md:h-24 items-center justify-between px-4 md:px-8 py-3 md:py-0">

                        {/* Left */}
                        <div className="flex min-w-0 items-center gap-3 md:gap-4">

                            <button
                                onClick={() => setOpen(true)}
                                className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition hover:bg-slate-100 lg:hidden"
                            >
                                <Menu size={22} />
                            </button>

                            <div>

                                <div className="flex items-center gap-2 text-[#009A9E]">

                                    {page.icon}

                                    <span className="text-xs md:text-sm font-semibold truncate">
                                        {page.title}
                                    </span>

                                </div>

                                <h1 className="mt-0.5 text-lg md:text-2xl font-bold text-slate-800 truncate">
                                    {greeting}
                                </h1>

                                <p className="mt-0.5 hidden sm:block text-sm text-slate-500 truncate">
                                    {today}
                                </p>

                            </div>

                        </div>

                        {/* Right */}
                        <div className="flex min-w-0 items-center gap-3 md:gap-4">

                            {/* Time */}
                            <div className="hidden lg:flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

                                <Clock3
                                    size={18}
                                    className="text-[#009A9E]"
                                />

                                <span className="font-medium text-slate-700">
                                    {time}
                                </span>

                            </div>

                            {/* Admin */}
                            <AdminDropdown
                                onProfileClick={() =>
                                    setOpenProfile(true)
                                }
                                onPasswordClick={() =>
                                    setOpenPassword(true)
                                }
                            />

                        </div>

                    </div>
                </div>
            </header>
            <ViewAdminModal
                open={openProfile}
                admin={admin}
                onClose={() =>
                    setOpenProfile(false)
                }
            />
            <ChangePasswordModal
                open={openPassword}
                onClose={() =>
                    setOpenPassword(false)
                }
            />
        </>
    );
}