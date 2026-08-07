"use client";

import {

    Shield,

    UserCheck,

    UserX,

    Crown,

} from "lucide-react";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {

    AppDispatch,

    RootState,

} from "@/redux/store";

import {

    getAdminStats,

} from "@/redux/admin/adminThunk";

export default function UserSummaryCards() {

    const dispatch = useDispatch<AppDispatch>();

    const {

        stats,

        statsLoading,

    } = useSelector(

        (state: RootState) =>

            state.admin

    );

    if (statsLoading) {

        return (

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {

                    [...Array(4)].map((_, i) => (

                        <div

                            key={i}

                            className="h-36 animate-pulse rounded-3xl bg-slate-100"

                        />

                    ))

                }

            </div>

        );

    }

    const cards = [

        {

            title: "Total Admins",

            value: stats?.totalAdmins || 0,

            icon: Shield,

            bg: "bg-cyan-100",

            iconColor: "text-cyan-700",

        },

        {

            title: "Active Admins",

            value: stats?.activeAdmins || 0,

            icon: UserCheck,

            bg: "bg-green-100",

            iconColor: "text-green-700",

        },

        {

            title: "Inactive Admins",

            value: stats?.inactiveAdmins || 0,

            icon: UserX,

            bg: "bg-red-100",

            iconColor: "text-red-700",

        },

        {

            title: "Super Admin",

            value: stats?.superAdmins || 0,

            icon: Crown,

            bg: "bg-yellow-100",

            iconColor: "text-yellow-700",

        },

    ];

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {

                cards.map((card) => {

                    const Icon = card.icon;

                    return (

                        <div

                            key={card.title}

                            className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"

                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-sm text-slate-500">

                                        {card.title}

                                    </p>

                                    <h2 className="mt-3 text-4xl font-bold">

                                        {card.value}

                                    </h2>

                                </div>

                                <div

                                    className={`rounded-2xl ${card.bg} p-4 transition group-hover:scale-110`}

                                >

                                    <Icon

                                        size={32}

                                        className={card.iconColor}

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