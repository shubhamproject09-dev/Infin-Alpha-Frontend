"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import ProtectedRoute from "../auth/ProtectedRoute";
interface Props {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <ProtectedRoute>

            <div className="flex h-screen overflow-hidden bg-slate-100">
                {/* Desktop Sidebar */}
                <Sidebar />

                {/* Mobile Sidebar */}
                <MobileSidebar open={open} setOpen={setOpen} />

                {/* Right Content */}
                <div className="flex flex-1 flex-col lg:ml-72 overflow-hidden">

                    <Header setOpen={setOpen} />

                    <main className="flex-1 overflow-y-auto bg-slate-100 p-4 md:p-6 lg:p-8">
                        {children}
                    </main>

                </div>
            </div>
        </ProtectedRoute>
    );
}