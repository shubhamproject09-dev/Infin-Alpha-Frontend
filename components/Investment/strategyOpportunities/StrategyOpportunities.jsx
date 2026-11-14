
"use client";

import {
    ShieldCheck,
    TrendingUp,
    Landmark,
    Building2,
    BriefcaseBusiness,
    Scale,
    Wallet,
    Target,
    Sparkles,
    Layers3,
    Activity,
    ArrowUpRight,
    RefreshCw,
    HandCoins,
    FileSearch,
} from "lucide-react";
import { motion } from "framer-motion";

const opportunities = [
    {
        title: "Stressed Corporate Debt",
        desc: "Distressed corporate debt opportunities, including NPAs, IBC cases, and loan-sale opportunities from banks and asset reconstruction companies.",
        icon: Landmark,
        number: "01",
    },
    {
        title: "Viable but Overleveraged Companies",
        desc: "Businesses with viable operations but high debt burdens, where restructuring and appropriate capital support may help unlock value.",
        icon: Building2,
        number: "02",
    },
    {
        title: "Stalled / Incomplete Projects",
        desc: "Stalled or incomplete infrastructure, real estate, and manufacturing projects requiring capital, restructuring, or a resolution-led approach.",
        icon: TrendingUp,
        number: "03",
    },
    {
        title: "Promoter Financing",
        desc: "Financing opportunities involving promoters where structured capital can support a suitable special-situations transaction.",
        icon: BriefcaseBusiness,
        number: "04",
    },
    {
        title: "Asset-Backed Distress",
        desc: "Distressed opportunities supported by underlying assets, evaluated for asset value, transaction structure, and potential recovery.",
        icon: Wallet,
        number: "05",
    },
];

const strategyFlow = [
    {
        title: "Invest / Acquire at a Deep Discount",
        desc: "Identify suitable stressed-asset opportunities and pursue investments or acquisitions at an appropriate discount.",
        icon: FileSearch,
        number: "01",
    },
    {
        title: "Infuse Fresh Capital",
        desc: "Provide fresh capital where required, alongside a suitable restructuring or turnaround approach.",
        icon: HandCoins,
        number: "02",
    },
    {
        title: "Unlock Value",
        desc: "Work towards value realization through resolution plans, restructuring, turnarounds, and strategic exits.",
        icon: TrendingUp,
        number: "03",
    },
];

const focusAreas = [
    {
        title: "Stressed Credit",
        desc: "Corporate debt and other stressed-credit opportunities.",
        icon: Landmark,
    },
    {
        title: "Special Situations",
        desc: "Complex investment situations requiring structured solutions.",
        icon: Sparkles,
    },
    {
        title: "Litigation-Locked Assets",
        desc: "Assets where legal proceedings or disputes form a key part of the resolution process.",
        icon: Scale,
    },
    {
        title: "Complex Restructuring",
        desc: "Situations requiring financial restructuring and a resolution-led approach.",
        icon: RefreshCw,
    },
];

const transactionTypes = [
    {
        title: "Interim Finance",
        desc: "Financing opportunities associated with stressed situations and resolution processes.",
        icon: Wallet,
    },
    {
        title: "Loan Buyouts",
        desc: "Acquisition of suitable loan exposures as part of a stressed-credit investment strategy.",
        icon: ArrowUpRight,
    },
    {
        title: "Turnaround Working Capital",
        desc: "Working-capital support for suitable businesses undergoing restructuring or turnaround.",
        icon: Activity,
    },
];

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
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
            delayChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

export default function StrategyOpportunities() {
    return (
        <section className="relative overflow-hidden bg-[#F8FAFC]">
            {/* HERO SECTION */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A]">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.12, 0.25, 0.12],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#7ACED4]/30 blur-3xl"
                />

                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.1, 0.22, 0.1],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-20 -right-10 h-96 w-96 rounded-full bg-[#009A9E]/25 blur-3xl"
                />

                <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:25px_25px] opacity-[0.04]" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="mx-auto max-w-5xl text-center"
                    >
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                        >
                            <ShieldCheck size={17} />
                            Bharat Special Opportunity Fund
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Investment Strategy
                            <span className="mt-2 block text-[#7ACED4]">
                                & Opportunities
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-7 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
                        >
                            A special-situations investment approach focused on
                            stressed corporate debt, viable but overleveraged
                            companies, stalled projects, promoter financing,
                            and asset-backed distress — with an emphasis on
                            structured solutions and resolution-led value creation.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-3"
                        >
                            {[
                                "Stressed Credit",
                                "Special Situations",
                                "Asset Restructuring",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-[#7ACED4]/25 bg-[#7ACED4]/10 px-4 py-2 text-sm text-white/90"
                                >
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#7ACED4]/60 to-transparent" />
            </div>

            {/* MAIN CONTENT */}
            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                {/* INTRODUCTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    className="mx-auto mb-14 max-w-4xl text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                        <Sparkles size={16} />
                        Opportunity Landscape
                    </div>

                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#00314A] sm:text-4xl lg:text-5xl">
                        Target Asset Classes
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                        BSOF focuses on selected stressed and special-situation
                        opportunities where the investment case may involve
                        discounted entry, capital support, restructuring, or
                        resolution.
                    </p>
                </motion.div>

                {/* TARGET ASSET CLASSES */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.08 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {opportunities.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.number}
                                variants={cardVariants}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.25 },
                                }}
                                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:border-[#7ACED4] hover:shadow-[0_18px_45px_rgba(0,49,74,0.10)] sm:p-8"
                            >
                                <div className="absolute right-5 top-4 text-5xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-[#EAF9FA]">
                                    {item.number}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white shadow-lg shadow-[#00314A]/10">
                                        <Icon size={25} strokeWidth={1.8} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold leading-snug text-[#00314A] sm:text-2xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                                        {item.desc}
                                    </p>

                                    <div className="mt-6 h-1 w-12 rounded-full bg-[#7ACED4] transition-all duration-300 group-hover:w-20" />
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* INVESTMENT LIFECYCLE */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    className="mt-20 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#00314A] via-[#073D48] to-[#0A3635] p-6 shadow-[0_25px_70px_rgba(0,49,74,0.12)] sm:mt-24 sm:p-10 lg:p-14"
                >
                    <div className="absolute" />

                    <div className="mx-auto max-w-3xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-semibold text-[#7ACED4]">
                            <Activity size={16} />
                            How We Create Value
                        </div>

                        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            From Distress to
                            <span className="block mt-2 text-[#7ACED4]">
                                Value Realisation
                            </span>
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-300">
                            A three-stage approach to suitable stressed-asset
                            investments, combining entry discipline, capital
                            infusion, and resolution-led value creation.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="relative mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
                    >
                        {strategyFlow.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.number}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.25 },
                                    }}
                                    className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7ACED4]/15 text-[#7ACED4]">
                                            <Icon size={23} />
                                        </div>

                                        <span className="text-sm font-semibold tracking-widest text-white/40">
                                            STEP {item.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold leading-snug text-white sm:text-2xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                                        {item.desc}
                                    </p>

                                    {index < strategyFlow.length - 1 && (
                                        <div className="mt-6 hidden items-center gap-2 text-[#7ACED4] md:flex">
                                            <div className="h-px flex-1 bg-[#7ACED4]/30" />
                                            <ArrowUpRight size={18} />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <p className="mt-8 text-center text-xs leading-6 text-slate-400 sm:text-sm">
                        Investments and outcomes are subject to transaction
                        diligence, applicable approvals, structuring, and
                        resolution outcomes.
                    </p>
                </motion.div>

                {/* INVESTMENT FOCUS */}
                <div className="mt-20 sm:mt-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={fadeUp}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                            <Target size={16} />
                            Investment Focus
                        </div>

                        <h2 className="mt-6 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl lg:text-5xl">
                            Focused on Complex
                            <span className="mt-2 block text-[#009A9E]">
                                Special Situations
                            </span>
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                            The strategy centres on situations that may require
                            a combination of credit analysis, transaction
                            structuring, legal-commercial assessment, and
                            restructuring expertise.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.08 }}
                        variants={staggerContainer}
                        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {focusAreas.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.25 },
                                    }}
                                    className="rounded-3xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-[#7ACED4] sm:p-7"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold leading-snug text-[#00314A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {item.desc}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>

                {/* TRANSACTION TYPES */}
                <div className="mt-20 sm:mt-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={fadeUp}
                        className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                    >
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                                <Layers3 size={16} />
                                Transaction Approaches
                            </div>

                            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl">
                                Potential Investment Structures
                            </h2>

                            <p className="mt-4 text-base leading-8 text-slate-600">
                                Depending on the opportunity and transaction
                                requirements, the strategy may involve
                                structures such as the following.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.08 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 gap-5 md:grid-cols-3"
                    >
                        {transactionTypes.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -5,
                                        transition: { duration: 0.25 },
                                    }}
                                    className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#7ACED4] hover:shadow-lg sm:p-7"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-[#00314A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>

                {/* CLOSING SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    className="mt-20 overflow-hidden rounded-[32px] border border-[#D5F3F5] bg-gradient-to-br from-[#EAF9FA] via-white to-white p-7 sm:mt-24 sm:p-10 lg:p-14"
                >
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-white px-4 py-2 text-sm font-semibold text-[#00314A]">
                                <ShieldCheck size={16} />
                                Disciplined Investment Approach
                            </div>

                            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl">
                                Resolution-Led Value Creation
                            </h2>

                            <p className="mt-5 text-base leading-8 text-slate-600">
                                BSOF&apos;s stated investment approach is to
                                identify suitable opportunities at a deep
                                discount, infuse fresh capital where required,
                                and work towards unlocking value through
                                resolution plans, restructuring, turnarounds,
                                and strategic exits.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-slate-500">
                                All investments remain subject to due
                                diligence, fund documents, applicable laws,
                                transaction-specific risks, and approvals.
                                Investment objectives are not a guarantee of
                                returns.
                            </p>
                        </div>

                        <div className="flex justify-start lg:justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white shadow-xl shadow-[#00314A]/15 sm:h-28 sm:w-28">
                                <Target size={44} strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
