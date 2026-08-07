"use client";

import {
    FolderArchive,
    ShieldCheck,
} from "lucide-react";

export default function HistoryHero() {

    return (

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00314A] via-[#014C63] to-[#009A9E] p-8 text-white shadow-xl">

            {/* Background */}

            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">

                        <ShieldCheck size={18} />

                        <span className="text-sm font-medium">

                            Admin Module

                        </span>

                    </div>

                    <h1 className="text-4xl font-bold">

                        Investor Complaint History

                    </h1>

                    <p className="mt-4 max-w-3xl text-cyan-100 leading-7">

                        Manage every uploaded Investor Complaint PDF,
                        restore previous versions, preview documents,
                        download files and permanently remove records.

                    </p>

                </div>

                <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur">

                    <FolderArchive size={65} />

                </div>

            </div>

        </section>

    );

}