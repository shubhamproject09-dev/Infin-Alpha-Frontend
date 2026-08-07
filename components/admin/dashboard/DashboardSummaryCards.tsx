"use client";

import {
    Shield,
    FileText,
    Mail,
    Crown,
    ArrowUpRight,
} from "lucide-react";

import { useEffect } from "react";

import {
    useDispatch,
    useSelector,
} from "react-redux";

import {
    AppDispatch,
    RootState,
} from "@/redux/store";

import { getAdminStats } from "@/redux/admin/adminThunk";
import {
    getInvestorComplaintHistory,
} from "@/redux/investorComplaint/investorComplaintThunk";
import {
    getContacts,
} from "@/redux/contact/contactThunk";

export default function DashboardSummaryCards() {

    const dispatch = useDispatch<AppDispatch>();

    const {
        stats,
        statsLoading,
    } = useSelector(
        (state: RootState) =>
            state.admin
    );

    const {
        history,
    } = useSelector(
        (state: RootState) =>
            state.investorComplaint
    );

    const {
        contacts,
    } = useSelector(
        (state: RootState) =>
            state.contact
    );

    useEffect(() => {

        dispatch(getAdminStats());

        dispatch(getInvestorComplaintHistory());

        dispatch(getContacts());

    }, [dispatch]);

    if (statsLoading) {

        return (

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                {

                    [...Array(4)].map((_, index) => (

                        <div
                            key={index}
                            className="h-44 animate-pulse rounded-3xl bg-slate-100"
                        />

                    ))

                }

            </div>

        );

    }

    const cards = [

        {
            title: "Total Admins",
            value: stats?.totalAdmins ?? 0,
            icon: Shield,
            color: "from-[#00314A] to-[#014C63]",
            bg: "bg-cyan-50",
            iconBg: "bg-cyan-100",
            iconColor: "text-cyan-700",
        },

        {
            title: "Complaint PDFs",
            value: history.length,
            icon: FileText,
            color: "from-indigo-500 to-violet-600",
            bg: "bg-indigo-50",
            iconBg: "bg-indigo-100",
            iconColor: "text-indigo-700",
        },

        {
            title: "Contact Enquiries",
            value: contacts?.length ?? 0,
            icon: Mail,
            color: "from-green-500 to-emerald-600",
            bg: "bg-green-50",
            iconBg: "bg-green-100",
            iconColor: "text-green-700",
        },

        {
            title: "Super Admins",
            value: stats?.superAdmins ?? 0,
            icon: Crown,
            color: "from-amber-500 to-yellow-500",
            bg: "bg-yellow-50",
            iconBg: "bg-yellow-100",
            iconColor: "text-yellow-700",
        },

    ];

    return (

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {

                cards.map((card) => {

                    const Icon = card.icon;

                    return (

                        <div
                            key={card.title}
                            className={`group relative overflow-hidden rounded-3xl border ${card.bg} p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                        >

                            {/* Background Glow */}

                            <div
                                className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-3xl`}
                            />

                            <div className="relative z-10">

                                <div className="flex items-start justify-between">

                                    <div>

                                        <p className="text-sm font-medium text-slate-500">

                                            {card.title}

                                        </p>

                                        <h2 className="mt-4 text-5xl font-bold text-slate-800">

                                            {card.value}

                                        </h2>

                                    </div>

                                    <div
                                        className={`rounded-2xl ${card.iconBg} p-4 transition duration-500 group-hover:scale-110`}
                                    >

                                        <Icon
                                            size={34}
                                            className={card.iconColor}
                                        />

                                    </div>

                                </div>

                                <div className="mt-8 flex items-center justify-between">

                                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">

                                        Live Statistics

                                    </span>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </div>

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

}