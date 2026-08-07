"use client";

import {
    FileText,
    ShieldCheck,
} from "lucide-react";

import PdfCard from "./PdfCard";
import UploadCard from "./UploadCard";

export default function InvestorComplaintPage() {

    return (
        <div className="space-y-8">

            {/* ===========================
                Hero
            ============================ */}

            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00314A] via-[#004A63] to-[#009A9E] p-8 text-white shadow-xl">

                {/* Background */}

                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}

                    <div className="max-w-2xl">

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">

                            <ShieldCheck size={18} />

                            <span className="text-sm font-medium">

                                Admin Module

                            </span>

                        </div>

                        <h1 className="text-4xl font-bold">

                            Investor Complaint PDF

                        </h1>

                        <p className="mt-4 text-base leading-7 text-cyan-100">

                            Upload, replace and manage the Investor Complaint
                            PDF displayed on the website. Only PDF files are
                            allowed.

                        </p>

                    </div>

                    {/* Right */}

                    <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur">

                        <FileText size={54} />

                    </div>

                </div>

            </section>

            {/* ===========================
                Content
            ============================ */}

            <div className="grid gap-8 xl:grid-cols-2">

                <PdfCard />

                <UploadCard />

            </div>

        </div>
    );
}