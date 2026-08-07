"use client";

import {
    Activity,
    TrendingUp,
    Users,
    ShieldCheck,
    FileText,
    Mail,
} from "lucide-react";

import {
    useSelector,
} from "react-redux";

import {
    RootState,
} from "@/redux/store";

export default function DashboardAnalytics() {

    const {
        stats,
    } = useSelector(
        (state: RootState) =>
            state.admin
    );
    const { history } = useSelector(
        (state: RootState) =>
            state.investorComplaint
    );

    const { contacts } = useSelector(
        (state: RootState) =>
            state.contact
    );

    const totalAdmins = stats?.totalAdmins || 0;

    const superAdmins = stats?.superAdmins || 0;

    const totalPdfs = history.length;

    const totalContacts = contacts.length;

    const totalRecords =
        totalAdmins +
        totalPdfs +
        totalContacts;

    const adminPercent =
        totalRecords === 0
            ? 0
            : Math.round((totalAdmins / totalRecords) * 100);

    const pdfPercent =
        totalRecords === 0
            ? 0
            : Math.round((totalPdfs / totalRecords) * 100);

    const contactPercent =
        totalRecords === 0
            ? 0
            : Math.round((totalContacts / totalRecords) * 100);

    return (

        <div className="grid gap-6 xl:grid-cols-3">

            {/* Left */}

            <div className="xl:col-span-2 rounded-3xl border bg-white p-8 shadow-sm">

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-2xl font-bold text-[#00314A]">

                            System Analytics

                        </h2>

                        <p className="mt-2 text-slate-500">

                            Live overview of your business dashboard.

                        </p>

                    </div>

                    <div className="rounded-2xl bg-cyan-100 p-4">

                        <Activity
                            size={32}
                            className="text-[#009A9E]"
                        />

                    </div>

                </div>

                <div className="mt-10 space-y-8">

                    {/* Active */}

                    <div>

                        <div className="mb-3 flex items-center justify-between">

                            <span className="font-medium">

                                Business Admins

                            </span>

                            <span className="font-bold text-green-600">

                                {adminPercent}%

                            </span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                            <div

                                style={{
                                    width: `${adminPercent}%`,
                                }}

                                className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-700"

                            />

                        </div>

                    </div>

                    {/* Inactive */}

                    <div>

                        <div className="mb-3 flex items-center justify-between">

                            <span className="font-medium">

                                Complaint PDFs

                            </span>

                            <span className="font-bold text-red-600">

                                {pdfPercent}%

                            </span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                            <div

                                style={{
                                    width: `${pdfPercent}%`,
                                }}

                                className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-700"

                            />

                        </div>

                    </div>

                    {/* Super */}

                    <div>

                        <div className="mb-3 flex items-center justify-between">

                            <span className="font-medium">

                                Contact Enquiries

                            </span>

                            <span className="font-bold text-yellow-600">

                                {contactPercent}%

                            </span>

                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                            <div

                                style={{
                                    width: `${contactPercent}%`,
                                }}

                                className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-700"

                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Right */}

            <div className="space-y-6">

                <StatCard
                    title="System Health"
                    value="Excellent"
                    color="text-green-600"
                    icon={<ShieldCheck size={30} />}
                />

                <StatCard
                    title="Complaint PDFs"
                    value={String(totalPdfs)}
                    icon={<FileText size={30} />}
                    color="text-cyan-600"

                />

                <StatCard
                    title="Contact Enquiries"
                    value={String(totalContacts)}
                    icon={<Mail size={30} />}
                    color="text-[#00314A]"
                />

            </div>

        </div>

    );

}

interface CardProps {

    title: string;

    value: string;

    color: string;

    icon: React.ReactNode;

}

function StatCard({

    title,

    value,

    color,

    icon,

}: CardProps) {

    return (

        <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-slate-500">

                        {title}

                    </p>

                    <h2 className={`mt-3 text-3xl font-bold ${color}`}>

                        {value}

                    </h2>

                </div>

                <div className="rounded-2xl bg-slate-100 p-4">

                    {icon}

                </div>

            </div>

        </div>

    );

}