// components/Investment/philosophy/Philosophy.tsx

"use client";

import {
    ShieldCheck,
    TrendingUp,
    Landmark,
    Building2,
    ArrowUpRight,
    CheckCircle2,
    Briefcase,
    Scale,
    Wallet,
    Target,
    BarChart3,
    Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const philosophyCards = [
    {
        title: "Deep Discount Acquisitions",
        desc: "Invest in or acquire stressed and special-situation opportunities at attractive valuations, with a focus on mid-market companies.",
        icon: TrendingUp,
        href: "/investment/philosophy/deep-discount-acquisition",
    },
    {
        title: "Fresh Capital Infusion",
        desc: "Provide structured capital to businesses facing financial stress, supporting their restructuring, revival and funding requirements.",
        icon: Wallet,
        href: "/investment/philosophy/strategic-capital",
    },
    {
        title: "Resolution-led Value Creation",
        desc: "Pursue value realisation through resolution plans, financial restructuring, turnaround strategies and strategic exits.",
        icon: Scale,
        href: "/investment/philosophy/resolution-value-creation",
    },
];

const focusAreas = [
    {
        title: "Stressed Credit",
        desc: "Opportunities involving stressed corporate debt, NPAs, IBC cases and stressed-loan acquisitions.",
        icon: Landmark,
    },
    {
        title: "Special Situations",
        desc: "Structured credit and investment opportunities involving financially stressed mid-market companies.",
        icon: Briefcase,
    },
    {
        title: "Litigation-Locked Assets",
        desc: "Selected opportunities involving legal claims or disputes where resolution may unlock asset value.",
        icon: Building2,
    },
    {
        title: "Complex Restructuring",
        desc: "Financial restructuring, interim finance, loan buyouts and turnaround working capital for stressed businesses.",
        icon: BarChart3,
    },
];

const trustPoints = [
    {
        title: "Industry Knowledge",
        desc: "Expertise in special situations, stressed-asset resolution, debt restructuring and IBC-led recoveries.",
    },
    {
        title: "Sourcing Network",
        desc: "Relationships with banks, ARCs, resolution professionals and institutional investors for sourcing opportunities.",
    },
    {
        title: "Market Opportunities",
        desc: "Focus on identifying turnaround-ready companies and opportunities arising from credit-market dislocations.",
    },
    {
        title: "Experienced Team",
        desc: "Fund management and advisory capabilities covering private credit, special situations and stressed-asset investing.",
    },
    {
        title: "Risk Management",
        desc: "Investment guidelines include cash-flow coverage, hard-asset security and portfolio diversification requirements.",
    },
    {
        title: "Sector-Agnostic Strategy",
        desc: "Investment opportunities across sectors, with a stated focus on real estate, infrastructure, manufacturing, hospitality, pharmaceuticals and chemicals.",
    },
];

export default function Philosophy() {
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const staggerContainer = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 35,
            scale: 0.97,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative overflow-hidden bg-[#f8fafc]">
            {/* ================= HERO SECTION ================= */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A]"
                style={{
                    paddingTop: "140px",
                    paddingBottom: "140px",
                }}
            >
                {/* Background glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#EAF9FA]/20 blur-3xl"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7ACED4]/10 blur-3xl"
                />

                {/* Background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.04]" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="mx-auto max-w-5xl text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                        >
                            <ShieldCheck size={16} />
                            Investment Philosophy & Strategy
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Investment
                            <span className="mt-2 block text-[#7ACED4]">
                                Philosophy
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-8 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl"
                        >
                            A sector-agnostic investment strategy focused on
                            stressed credit, special situations, litigation-locked
                            assets and complex restructuring. The approach is to
                            invest or acquire at a deep discount, infuse fresh
                            capital and pursue value realisation through resolution
                            plans and strategic exits.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-[#7ACED4]/80"
                        >
                            Bharat Special Opportunity Fund · BSOF
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* ================= MAIN CONTENT ================= */}
            <div
                className="relative z-10 pb-20 sm:pb-24"
                style={{ marginTop: "80px" }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:rounded-[40px]"
                    >
                        {/* ================= STRATEGY INTRO ================= */}
                        <div
                            className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-[#0A3635] px-6 sm:px-10 lg:px-16"
                            style={{
                                paddingTop: "80px",
                                paddingBottom: "80px",
                            }}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:26px_26px] opacity-[0.04]" />

                            <div className="relative z-10 max-w-5xl">
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-semibold text-[#7ACED4]"
                                >
                                    <Sparkles size={16} />
                                    Strategic Approach
                                </motion.div>

                                <motion.h2
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                                >
                                    Resolution-Focused
                                    <span className="mt-2 block text-[#7ACED4]">
                                        Alternative Investments
                                    </span>
                                </motion.h2>

                                <motion.p
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="mt-7 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg"
                                >
                                    INFIN Alpha LLP is the investment manager
                                    for Bharat Special Opportunity Fund (BSOF).
                                    The Fund focuses on stressed and special-situation
                                    mid-market companies through structured credit,
                                    acquisitions, turnaround and resolution strategies.
                                </motion.p>
                            </div>
                        </div>

                        {/* ================= PHILOSOPHY CARDS ================= */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">
                            <motion.div
                                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                {philosophyCards.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.title}
                                            variants={cardVariants}
                                            whileHover={{
                                                y: -8,
                                                borderColor: "#7ACED4",
                                                boxShadow:
                                                    "0 20px 50px rgba(0,49,74,0.10)",
                                            }}
                                            className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-md transition-colors duration-300 sm:p-8"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#EAF9FA]/0 to-[#D5F3F5]/0 transition-all duration-500 group-hover:from-[#EAF9FA] group-hover:to-white" />

                                            <div className="relative z-10 flex h-full flex-col">
                                                <motion.div
                                                    whileHover={{
                                                        rotate: [0, -8, 8, 0],
                                                        scale: 1.05,
                                                    }}
                                                    transition={{ duration: 0.4 }}
                                                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white shadow-lg"
                                                >
                                                    <Icon size={26} />
                                                </motion.div>

                                                <h3 className="mt-7 text-2xl font-bold leading-tight text-[#00314A] sm:text-3xl">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-5 flex-grow text-sm leading-7 text-slate-700 sm:text-base">
                                                    {item.desc}
                                                </p>

                                                <p className="mt-5 text-xs font-medium text-[#009A9E]">
                                                    {item.source}
                                                </p>

                                                <Link
                                                    href={item.href}
                                                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#009A9E] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:bg-[#00314A]"
                                                >
                                                    Learn More
                                                    <ArrowUpRight size={17} />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* ================= INVESTMENT PROCESS ================= */}
                            <motion.div
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.7 }}
                                className="mt-14 overflow-hidden rounded-[32px] border border-[#D5F3F5] bg-[#F8FCFC] p-6 sm:p-8 lg:p-12"
                            >
                                <div className="grid items-center gap-10 lg:grid-cols-12">
                                    <div className="lg:col-span-5">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-white px-4 py-2 text-sm font-semibold text-[#00314A]">
                                            <Target size={16} />
                                            Investment Strategy
                                        </div>

                                        <h3 className="mt-6 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl lg:text-5xl">
                                            Invest.
                                            <span className="block text-[#009A9E]">
                                                Resolve.
                                            </span>
                                            <span className="block text-[#00314A]">
                                                Unlock Value.
                                            </span>
                                        </h3>

                                        <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                                            The Fund&apos;s value-creation approach
                                            combines attractive entry valuations,
                                            fresh capital and resolution-led
                                            execution.
                                        </p>
                                    </div>

                                    <div className="lg:col-span-7">
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    number: "01",
                                                    title: "Invest / Acquire at a Deep Discount",
                                                    desc: "Identify stressed and special-situation opportunities at attractive valuations.",
                                                },
                                                {
                                                    number: "02",
                                                    title: "Infuse Fresh Capital",
                                                    desc: "Provide capital through an appropriate structured investment approach.",
                                                },
                                                {
                                                    number: "03",
                                                    title: "Unlock Value",
                                                    desc: "Pursue resolution plans, restructuring, turnaround and strategic exits.",
                                                },
                                            ].map((step, idx) => (
                                                <motion.div
                                                    key={step.number}
                                                    initial={{
                                                        opacity: 0,
                                                        x: 25,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    viewport={{
                                                        once: true,
                                                        amount: 0.2,
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: idx * 0.12,
                                                    }}
                                                    whileHover={{
                                                        x: 4,
                                                        borderColor: "#7ACED4",
                                                    }}
                                                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-300 sm:p-6"
                                                >
                                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FA] text-sm font-bold text-[#009A9E]">
                                                        {step.number}
                                                    </div>

                                                    <div>
                                                        <h4 className="text-base font-bold leading-6 text-[#00314A] sm:text-lg">
                                                            {step.title}
                                                        </h4>

                                                        <p className="mt-2 text-sm leading-7 text-slate-600">
                                                            {step.desc}
                                                        </p>
                                                    </div>

                                                    <CheckCircle2
                                                        size={20}
                                                        className="ml-auto mt-1 hidden shrink-0 text-[#009A9E] sm:block"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ================= FOCUS AREAS ================= */}
                            <motion.div
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.7 }}
                                className="mt-16"
                            >
                                <div className="text-center">
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]"
                                    >
                                        <Target size={16} />
                                        Areas of Focus
                                    </motion.div>

                                    <motion.h3
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="mt-6 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl lg:text-5xl"
                                    >
                                        Core Investment
                                        <span className="mt-2 block text-[#009A9E]">
                                            Opportunity Segments
                                        </span>
                                    </motion.h3>

                                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                                        The Fund&apos;s mandate covers stressed
                                        credit and special situations, including
                                        opportunities where financial or legal
                                        complexity requires a resolution-focused
                                        investment approach.
                                    </p>
                                </div>

                                <motion.div
                                    className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    {focusAreas.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={cardVariants}
                                                whileHover={{
                                                    y: -8,
                                                    borderColor: "#7ACED4",
                                                    boxShadow:
                                                        "0 18px 40px rgba(0,49,74,0.08)",
                                                }}
                                                className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 sm:p-7"
                                            >
                                                <motion.div
                                                    whileHover={{
                                                        rotate: [0, -8, 8, 0],
                                                        scale: 1.05,
                                                    }}
                                                    transition={{ duration: 0.4 }}
                                                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D5F3F5] bg-[#EAF9FA] text-[#009A9E]"
                                                >
                                                    <Icon size={25} />
                                                </motion.div>

                                                <h4 className="mt-6 text-xl font-bold leading-tight text-[#00314A]">
                                                    {item.title}
                                                </h4>

                                                <p className="mt-4 text-sm leading-7 text-slate-700">
                                                    {item.desc}
                                                </p>

                                                <p className="mt-4 text-xs font-medium text-[#009A9E]">
                                                    {item.source}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>

                            {/* ================= TARGET ASSET CLASSES ================= */}
                            <motion.div
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.7 }}
                                className="mt-16 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                            >
                                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                                    <div className="lg:col-span-4">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                                            <Landmark size={16} />
                                            Target Asset Classes
                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold leading-tight text-[#00314A] sm:text-3xl">
                                            Opportunities Across
                                            <span className="mt-1 block text-[#009A9E]">
                                                Stressed Assets
                                            </span>
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            The pitch deck identifies the
                                            following asset categories for
                                            consideration under the Fund&apos;s
                                            investment strategy.
                                        </p>
                                    </div>

                                    <div className="space-y-4 lg:col-span-8">
                                        {[
                                            {
                                                title: "Stressed Corporate Debt",
                                                desc: "NPAs, IBC cases and bank or ARC loan-sale opportunities.",
                                            },
                                            {
                                                title: "Viable but Overleveraged Companies",
                                                desc: "Businesses with strong underlying operations but significant debt burdens.",
                                            },
                                            {
                                                title: "Stalled or Incomplete Projects",
                                                desc: "Infrastructure, real estate and manufacturing projects with revival potential.",
                                            },
                                            {
                                                title: "Promoter Financing",
                                                desc: "Financing opportunities linked to founder or promoter-level financial stress.",
                                            },
                                            {
                                                title: "Asset-Backed Distress",
                                                desc: "Distressed opportunities involving plants, land and operating infrastructure assets.",
                                            },
                                        ].map((asset, idx) => (
                                            <motion.div
                                                key={asset.title}
                                                initial={{
                                                    opacity: 0,
                                                    x: 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    delay: idx * 0.08,
                                                }}
                                                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#F8FCFC] p-4 sm:p-5"
                                            >
                                                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                                    <CheckCircle2 size={19} />
                                                </div>

                                                <div>
                                                    <h4 className="font-bold text-[#00314A]">
                                                        {asset.title}
                                                    </h4>
                                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                                        {asset.desc}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* ================= WHY TRUST US ================= */}
                            <motion.div
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.7 }}
                                className="mt-16"
                            >
                                <div className="rounded-[32px] border border-[#D5F3F5] bg-gradient-to-br from-[#EAF9FA] to-white p-6 sm:p-9 lg:p-12">
                                    <div className="max-w-4xl">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-white px-4 py-2 text-sm font-semibold text-[#00314A] shadow-sm">
                                            <ShieldCheck size={16} />
                                            Why INFIN Alpha & BSOF
                                        </div>

                                        <motion.h3
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            className="mt-6 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl lg:text-5xl"
                                        >
                                            Specialized Knowledge.
                                            <span className="mt-2 block text-[#009A9E]">
                                                Structured Execution.
                                            </span>
                                        </motion.h3>

                                        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
                                            The Fund&apos;s stated approach
                                            combines specialized stressed-asset
                                            knowledge, opportunity sourcing,
                                            sector flexibility and defined
                                            investment guidelines.
                                        </p>
                                    </div>

                                    <motion.div
                                        className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        {trustPoints.map((item) => (
                                            <motion.div
                                                key={item.title}
                                                variants={cardVariants}
                                                whileHover={{
                                                    y: -3,
                                                    boxShadow:
                                                        "0 12px 28px rgba(0,49,74,0.06)",
                                                }}
                                                className="flex items-start gap-4 rounded-2xl border border-[#D5F3F5] bg-white p-5 shadow-sm sm:p-6"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                                    <CheckCircle2 size={21} />
                                                </div>

                                                <div>
                                                    <h4 className="text-base font-bold text-[#00314A] sm:text-lg">
                                                        {item.title}
                                                    </h4>

                                                    <p className="mt-2 text-sm leading-7 text-slate-600">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}