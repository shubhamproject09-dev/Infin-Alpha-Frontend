"use client";

import Link from "next/link";
import { X, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { menuItems } from "./menu";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileSidebar({
    open,
    setOpen,
}: Props) {
    const pathname = usePathname();

    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <aside className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-gradient-to-b from-[#00314A] via-[#014C63] to-[#009A9E] text-white shadow-2xl lg:hidden">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

                    <div>
                        <h2 className="text-xl font-bold">
                            INFIN ALPHA
                        </h2>

                        <p className="text-xs text-white/70">
                            Admin Panel
                        </p>
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="rounded-lg p-2 hover:bg-white/10"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Menu */}
                <nav className="flex-1 space-y-2 p-4">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        const active =
                            pathname === item.href ||
                            pathname.startsWith(item.href + "/");

                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all

                ${active
                                        ? "bg-white text-[#00314A]"
                                        : "text-white/80 hover:bg-white/10"
                                    }`}
                            >
                                <Icon
                                    size={22}
                                    className={active ? "text-[#009A9E]" : ""}
                                />

                                <span className="font-medium">
                                    {item.title}
                                </span>

                            </Link>
                        );
                    })}

                </nav>

                {/* Logout */}

                <div className="border-t border-white/10 p-5">

                    <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white/10 py-3 transition hover:bg-red-500">

                        <LogOut size={18} />

                        Logout

                    </button>

                </div>

            </aside>
        </>
    );
}