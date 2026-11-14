
"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    TrendingUp,
    Building2,
    GraduationCap,
    Landmark,
    Factory,
    BriefcaseBusiness,
    ShieldCheck,
    ChartNoAxesCombined,
} from "lucide-react";
import { motion } from "framer-motion";

const transactions = [
    {
        number: "01",
        title: "Road Asset",
        subtitle: "Annuity Road Infrastructure",
        icon: Landmark,
        points: [
            "An annuity road asset of strategic importance in distress due to execution delays.",
            "Helped aggregate all the debt at a discount, amounting to ₹1,000 Cr, followed by successful restructuring of the acquired debt.",
        ],
        returnValue: "21%",
        returnLabel: "Return",
        period: "~ 3 years",
        periodLabel: "Investment Period",
    },
    {
        number: "02",
        title: "Hotel Assets",
        subtitle: "Hospitality & Asset Restructuring",
        icon: Building2,
        points: [
            "A marquee asset in the old town went through distress.",
            "Restructuring failed as the pandemic impacted the business.",
            "A strategic investor was brought in to acquire the asset.",
        ],
        returnValue: "20%",
        returnLabel: "Return",
        period: null,
        periodLabel: null,
    },
    {
        number: "03",
        title: "Education Sector",
        subtitle: "Growth Funding & Private Credit",
        icon: GraduationCap,
        points: [
            "One of India's largest K-12 chains required growth funding.",
            "Large investors were clubbed together to provide funding at high-teens returns.",
            "Following a period of growth, the borrower raised equity capital and repaid all high-cost debt.",
            "A high-yield private credit deal with a 17% INR return over three years.",
        ],
        returnValue: "17%",
        returnLabel: "INR Return",
        period: "3 years",
        periodLabel: "Investment Period",
    },
    {
        number: "04",
        title: "Microfinance Sector",
        subtitle: "Yield Compression & Rating Upgrades",
        icon: ChartNoAxesCombined,
        points: [
            "Made multiple investments across companies in the sector.",
            "Captured yield compression and rating upgrades.",
            "Identified the rise of small finance banks at an early stage.",
            "Generated returns of 20%+ across investment periods ranging from 1 to 3 years.",
        ],
        returnValue: "20%+",
        returnLabel: "Return",
        period: "1–3 years",
        periodLabel: "Investment Period",
    },
    {
        number: "05",
        title: "Plastic",
        subtitle: "Corporate Debt Resolution",
        icon: Factory,
        points: [
            "A strong, branded plastics company entered insolvency due to fund mismanagement.",
            "Debt aggregation was completed on behalf of a strategic investor, followed by resolution through CIRP.",
            "Generated a 19% INR return over a two-year period.",
        ],
        returnValue: "19%",
        returnLabel: "INR Return",
        period: "2 years",
        periodLabel: "Investment Period",
    },
    {
        number: "06",
        title: "Real Estate Sector",
        subtitle: "Refinancing & Growth Funding",
        icon: Building2,
        points: [
            "Multiple investments across cities.",
            "Primarily focused on refinancing and growth funding.",
            "Investment horizons ranged from 1 to 3 years.",
            "Generated returns of 18–22%.",
        ],
        returnValue: "18–22%",
        returnLabel: "Return Range",
        period: "1–3 years",
        periodLabel: "Investment Horizon",
    },
];

export default function PerformancePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#00314A]">
            {/* Hero */}
            <section className="relative border-b border-[#009A9E]/15 bg-gradient-to-br from-[#F3FAFA] via-white to-[#EAF7F7]">
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#7ACED4]/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#009A9E]/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="max-w-4xl"
                    >

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#009A9E]/25 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007F83]">
                            <BriefcaseBusiness size={15} />
                            Fund Manager's Track Record
                        </div>

                        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Selected Past{" "}
                            <span className="text-[#009A9E]">
                                Transactions
                            </span>
                        </h1>

                        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Selected transactions led or managed by Mr. Aswini
                            Sahoo during his previous professional roles,
                            spanning infrastructure, hospitality, education,
                            microfinance, corporate debt resolution and real
                            estate.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#transactions"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#009A9E] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#007F83]"
                            >
                                Explore Transactions
                                <ArrowRight size={17} />
                            </a>

                            <Link
                                href="/investment/strategy-opportunities"
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#00314A]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#00314A] transition hover:border-[#009A9E]/50 hover:bg-[#F3FAFA]"
                            >
                                Investment Strategy
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Attribution Notice */}
            <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-12">
                <div className="flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
                    <div className="mt-0.5 shrink-0 rounded-lg bg-white p-2 text-amber-700">
                        <ShieldCheck size={21} />
                    </div>

                    <div>
                        <h2 className="text-base font-semibold text-[#00314A]">
                            Important Performance Disclosure
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                            These are selected transactions led or managed by
                            Mr. Aswini Sahoo in his previous professional
                            roles. They do not represent the track record of
                            BSOF, INFIN Alpha LLP or the Sponsor. Past
                            performance is not indicative of future results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Transactions */}
            <section
                id="transactions"
                className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
            >
                <div className="mb-10 max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#009A9E]">
                        Previous Professional Roles
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Transaction Experience
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        Selected examples of investments, restructuring
                        initiatives and financing transactions, presented
                        using the information in the fund presentation.
                    </p>
                </div>

                <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {transactions.map((transaction, index) => {
                        const Icon = transaction.icon;

                        return (
                            <motion.article
                                key={transaction.number}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{
                                    duration: 0.45,
                                    delay: (index % 3) * 0.07,
                                }}
                                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#009A9E]/40 hover:shadow-xl hover:shadow-[#00314A]/5 sm:p-7"
                            >
                                {/* Card heading */}
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7F7] text-[#00888C] transition group-hover:bg-[#009A9E] group-hover:text-white">
                                        <Icon size={23} />
                                    </div>

                                    <span className="text-sm font-semibold tracking-widest text-slate-300">
                                        {transaction.number}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                                    {transaction.title}
                                </h3>

                                <p className="mt-2 text-sm font-medium text-[#00888C]">
                                    {transaction.subtitle}
                                </p>

                                {/* Transaction details */}
                                <ul className="mt-5 flex-1 space-y-3">
                                    {transaction.points.map((point, pointIndex) => (
                                        <li
                                            key={pointIndex}
                                            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                        >
                                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#009A9E]" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Return and period */}
                                <div className="mt-7 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
                                    <div className="rounded-xl bg-[#F3FAFA] p-4">
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                                            <TrendingUp size={14} className="text-[#009A9E]" />
                                            {transaction.returnLabel}
                                        </div>

                                        <p className="mt-2 text-xl font-semibold tracking-tight text-[#007F83] sm:text-2xl">
                                            {transaction.returnValue}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-slate-50 p-4">
                                        <p className="text-xs font-medium text-slate-500">
                                            {transaction.periodLabel || "Transaction"}
                                        </p>

                                        <p className="mt-2 text-base font-semibold text-[#00314A]">
                                            {transaction.period || "Not specified"}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

        </main>
    );
}
