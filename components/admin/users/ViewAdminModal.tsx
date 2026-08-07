"use client";

import Image from "next/image";

import {

    X,

    User,

    Mail,

    Shield,

    Calendar,

    Clock,

    CheckCircle2,

    XCircle,

    Crown,

    Sparkles,

} from "lucide-react";

interface Admin {

    _id: string;

    firstName: string;

    lastName: string;

    email: string;

    role: "Super Admin" | "Admin";

    profileImage: string;

    isActive: boolean;

    lastLogin: string | null;

    createdAt: string;

    createdBy?: any;

    updatedBy?: any;

}

interface Props {

    open: boolean;

    admin: Admin | null;

    onClose: () => void;

}

interface TimelineProps {

    color: string;

    title: string;

    value: string;

}

function TimelineItem({

    color,

    title,

    value,

}: TimelineProps) {

    return (

        <div className="flex items-start gap-5">

            <div className="flex flex-col items-center">

                <div

                    className={`h-4 w-4 rounded-full ${color}`}

                />

                <div className="mt-2 h-12 w-[2px] bg-slate-200" />

            </div>

            <div>

                <h4 className="font-semibold text-slate-700">

                    {title}

                </h4>

                <p className="mt-1 text-sm text-slate-500">

                    {value}

                </p>

            </div>

        </div>

    );

}

export default function ViewAdminModal({

    open,

    admin,

    onClose,

}: Props) {

    if (!open || !admin) return null;

    return (

        <div className="fixed inset-0 z-[999] overflow-y-auto bg-black/70 backdrop-blur-md">

            <div className="flex min-h-screen items-center justify-center p-4 lg:p-8">

                <div className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_35px_100px_rgba(0,0,0,.35)] max-h-[100vh]">

                    {/* ================= HEADER ================= */}

                    <div className="relative overflow-hidden bg-gradient-to-r from-[#00263A] via-[#003F5C] to-[#009A9E] px-8 pt-10 pb-30 text-white">

                        {/* Background */}

                        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-[120px]" />

                        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
                        {/* Close */}

                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-90 hover:border-red-400 hover:bg-red-500 active:scale-95"
                        >

                            <X
                                size={22}
                                strokeWidth={2.5}
                            />

                        </button>

                        <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row">

                            {/* Avatar */}

                            {

                                admin.profileImage ?

                                    (

                                        <div className="relative">

                                            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-40" />

                                            <Image

                                                src={admin.profileImage}

                                                alt={admin.firstName}

                                                width={120}

                                                height={120}

                                                className="relative h-32 w-32 rounded-full border-[5px] border-white object-cover shadow-2xl"

                                            />

                                            <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-2 border-white bg-green-500" />

                                        </div>

                                    )

                                    :

                                    (

                                        <div className="flex h-32 w-32 items-center justify-center rounded-full border-[5px] border-white bg-white/15">

                                            <User size={48} />

                                        </div>

                                    )

                            }

                            {/* Details */}

                            <div className="flex-1 text-center lg:text-left">

                                <h2 className="mt-5 text-4xl font-bold">

                                    {admin.firstName} {admin.lastName}

                                </h2>

                                <p className="mt-2 text-lg text-cyan-100">

                                    {admin.email}

                                </p>

                                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">

                                    <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-semibold">

                                        {

                                            admin.role === "Super Admin"

                                                ?

                                                "👑 Super Admin"

                                                :

                                                "🛡 Admin"

                                        }

                                    </span>

                                    <span

                                        className={`rounded-full px-5 py-2 text-sm font-semibold ${admin.isActive

                                            ?

                                            "bg-green-500/20 text-green-100"

                                            :

                                            "bg-red-500/20 text-red-100"

                                            }`}

                                    >

                                        {

                                            admin.isActive

                                                ?

                                                "🟢 Active"

                                                :

                                                "🔴 Inactive"

                                        }

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ================= BODY ================= */}

                    <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
                        {/* ================= INFO GRID ================= */}

                        <div className="grid gap-6 lg:grid-cols-2">

                            <InfoCard

                                icon={

                                    <Mail

                                        size={22}

                                    />

                                }

                                title="Email Address"

                                value={

                                    admin.email

                                }

                            />

                            <InfoCard

                                icon={

                                    <Shield

                                        size={22}

                                    />

                                }

                                title="Role"

                                value={

                                    admin.role

                                }

                            />

                            <InfoCard

                                icon={

                                    admin.isActive ?

                                        <CheckCircle2

                                            size={22}

                                        />

                                        :

                                        <XCircle

                                            size={22}

                                        />

                                }

                                title="Account Status"

                                value={

                                    admin.isActive ?

                                        "Active"

                                        :

                                        "Inactive"

                                }

                            />

                            <InfoCard

                                icon={

                                    <Clock

                                        size={22}

                                    />

                                }

                                title="Last Login"

                                value={

                                    admin.lastLogin ?

                                        new Date(

                                            admin.lastLogin

                                        ).toLocaleString()

                                        :

                                        "Never Logged In"

                                }

                            />

                            <InfoCard

                                icon={

                                    <Calendar

                                        size={22}

                                    />

                                }

                                title="Account Created"

                                value={

                                    new Date(

                                        admin.createdAt

                                    ).toLocaleString()

                                }

                            />

                            <InfoCard

                                icon={

                                    <Crown

                                        size={22}

                                    />

                                }

                                title="Created By"

                                value={

                                    admin.createdBy?.firstName ?

                                        `${admin.createdBy.firstName} ${admin.createdBy.lastName}`

                                        :

                                        "System"

                                }

                            />

                            <InfoCard

                                icon={

                                    <User

                                        size={22}

                                    />

                                }

                                title="Updated By"

                                value={

                                    admin.updatedBy?.firstName ?

                                        `${admin.updatedBy.firstName} ${admin.updatedBy.lastName}`

                                        :

                                        "-"

                                }

                            />

                        </div>
                        {/* ================= TIMELINE ================= */}

                        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                            <div className="mb-6 flex items-center gap-3">

                                <div className="rounded-xl bg-[#009A9E]/10 p-3">

                                    <Calendar

                                        className="text-[#009A9E]"

                                    />

                                </div>

                                <div>

                                    <h3 className="text-xl font-bold">

                                        Account Timeline

                                    </h3>

                                    <p className="text-sm text-slate-500">

                                        Complete account activity

                                    </p>

                                </div>

                            </div>

                            <div className="space-y-8">

                                <TimelineItem

                                    color="bg-green-500"

                                    title="Account Created"

                                    value={

                                        new Date(

                                            admin.createdAt

                                        ).toLocaleString()

                                    }

                                />

                                <TimelineItem

                                    color="bg-blue-500"

                                    title="Last Login"

                                    value={

                                        admin.lastLogin ?

                                            new Date(

                                                admin.lastLogin

                                            ).toLocaleString()

                                            :

                                            "No Login History"

                                    }

                                />

                                <TimelineItem
                                    color="bg-purple-500"

                                    title="Current Status"

                                    value={

                                        admin.isActive ?

                                            "Active"

                                            :

                                            "Inactive"

                                    }
                                />

                            </div>
                        </div>

                        {/* ================= FOOTER ================= */}

                        <div className="bottom-0 flex items-center justify-between border-t border-slate-200 bg-white px-8 py-5">

                            <div>

                                <p className="text-sm font-medium text-slate-500">

                                    INFIN ALPHA LLP

                                </p>

                                <p className="text-xs text-slate-400">

                                    Administrator Management System

                                </p>

                            </div>

                            <div className="flex gap-3">

                                <button

                                    onClick={onClose}

                                    className="rounded-xl bg-gradient-to-r from-[#00314A] to-[#009A9E] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"

                                >

                                    Close

                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    );

}

interface CardProps {

    icon: React.ReactNode;

    title: string;

    value: React.ReactNode;

}

function InfoCard({

    icon,

    title,

    value,

}: CardProps) {

    return (

        <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#009A9E] hover:shadow-xl">

            <div className="flex items-start gap-4">

                <div className="rounded-2xl bg-gradient-to-br from-[#00314A] to-[#009A9E] p-4 text-white shadow-lg">

                    {icon}

                </div>

                <div className="flex-1">

                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">

                        {title}

                    </p>

                    <p className="mt-3 break-words text-lg font-semibold text-slate-700">

                        {value}

                    </p>

                </div>

            </div>

        </div>

    );

}