"use client";

import {

    Files,

    CheckCircle2,

    Archive,

} from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function HistorySummaryCards() {

    const { history } = useSelector(
        (state: RootState) => state.investorComplaint
    );

    const totalPdf = history.length;

    const activePdf = history.filter(
        (item) => item.status === "ACTIVE"
    ).length;

    const archivedPdf = history.filter(
        (item) => item.status === "INACTIVE"
    ).length;

    return (

        <div className="grid gap-6 lg:grid-cols-3">

            {/* Total */}

            <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-slate-500">

                            Total PDFs

                        </p>

                        <h2 className="mt-2 text-3xl font-bold">

                            {totalPdf}

                        </h2>

                    </div>

                    <div className="rounded-2xl bg-cyan-100 p-4">

                        <Files
                            className="text-[#009A9E]"
                            size={30}
                        />

                    </div>

                </div>

            </div>

            {/* Active */}

            <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-slate-500">

                            Active PDF

                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-green-600">

                            {activePdf}

                        </h2>

                    </div>

                    <div className="rounded-2xl bg-green-100 p-4">

                        <CheckCircle2
                            className="text-green-600"
                            size={30}
                        />

                    </div>

                </div>

            </div>

            {/* Archived */}

            <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-slate-500">

                            Archived PDFs

                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-orange-500">

                            {archivedPdf}

                        </h2>

                    </div>

                    <div className="rounded-2xl bg-orange-100 p-4">

                        <Archive
                            className="text-orange-600"
                            size={30}
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}