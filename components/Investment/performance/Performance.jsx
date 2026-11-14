
"use client";

import {
    ShieldCheck,
    TrendingUp,
    BarChart3,
    Building2,
    Landmark,
    CheckCircle2,
    ArrowUpRight,
    Target,
    BriefcaseBusiness,
    Wallet,
    Clock3,
    HandCoins,
    Layers3,
    Scale,
    Network,
    ChartNoAxesCombined,
    FileCheck2,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
    {
        title: "₹500 Cr",
        subtitle: "Target First Close",
        description: "Initial fund corpus targeted by BSOF.",
        icon: Landmark,
    },
    {
        title: "₹1,000 Cr",
        subtitle: "Potential Fund Corpus",
        description: "Including the additional ₹500 Cr green-shoe option.",
        icon: Wallet,
    },
    {
        title: "12%",
        subtitle: "Hurdle Rate",
        description: "Pre-tax IRR hurdle for investor distributions.",
        icon: Scale,
    },
    {
        title: "18–20%",
        subtitle: "Expected IRR",
        description: "Targeted pre-tax internal rate of return.",
        icon: ChartNoAxesCombined,
    },
];

const fundDetails = [
    {
        title: "Fund Tenure",
        value: "5 Years",
        description:
            "Five-year fund term, with an extension option of 1+1 years, subject to applicable approvals and fund documents.",
        icon: Clock3,
    },
    {
        title: "Minimum Investment",
        value: "₹1 Crore",
        description:
            "Minimum investor commitment as stated in the Pitch Deck, subject to applicable regulations.",
        icon: HandCoins,
    },
    {
        title: "Investment Ticket Size",
        value: "25%",
        description:
            "Target investment ticket size of 25% of the investable funds.",
        icon: Layers3,
    },
    {
        title: "Sponsor Commitment",
        value: "2.5%",
        description:
            "2.5% of the total corpus or ₹5 crore, whichever is lower, as stated in the Pitch Deck.",
        icon: ShieldCheck,
    },
];

const investmentStrategies = [
    {
        title: "Deep-Discount Acquisitions",
        description:
            "Target stressed and special-situation assets at attractive valuations to establish a disciplined investment entry point.",
        icon: TrendingUp,
    },
    {
        title: "Structured Credit",
        description:
            "Use secured NCDs, preference shares and structured credit instruments to address complex financing requirements.",
        icon: Landmark,
    },
    {
        title: "Fresh Capital Infusion",
        description:
            "Provide capital to support business continuity, refinancing, working capital and project completion.",
        icon: Wallet,
    },
    {
        title: "Resolution & Strategic Exits",
        description:
            "Pursue restructuring, turnaround and resolution-led strategies to unlock asset value and facilitate exits.",
        icon: Target,
    },
];

const assetClasses = [
    {
        title: "Stressed Corporate Debt",
        description:
            "NPAs, insolvency proceedings under the IBC, and loan portfolios offered by banks and Asset Reconstruction Companies.",
        icon: Landmark,
    },
    {
        title: "Overleveraged Companies",
        description:
            "Businesses with viable underlying operations and strong fundamentals but challenging debt structures.",
        icon: Building2,
    },
    {
        title: "Stalled & Incomplete Projects",
        description:
            "Infrastructure, real estate and manufacturing projects with potential for revival and completion.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Promoter Financing",
        description:
            "Financing solutions for founders and promoters facing ownership-related or capital constraints.",
        icon: Network,
    },
    {
        title: "Asset-Backed Distress",
        description:
            "Opportunities secured against plants, land, operating infrastructure and other tangible assets.",
        icon: Wallet,
    },
];

const trustPoints = [
    {
        title: "Industry Knowledge",
        description:
            "Expertise in special situations, stressed asset resolution, debt restructuring and IBC-led recoveries.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Established Network",
        description:
            "Relationships with banks, ARCs, resolution professionals and institutional investors to support opportunity sourcing.",
        icon: Network,
    },
    {
        title: "Market Dislocation",
        description:
            "Focus on identifying turnaround-ready businesses and opportunities arising from dislocations in credit markets.",
        icon: TrendingUp,
    },
    {
        title: "Risk Management",
        description:
            "A disciplined investment process with structured entry strategies, recovery-focused exits and downside protection mechanisms.",
        icon: ShieldCheck,
    },
];

const containerVariants = {
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

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 35,
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

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
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

export default function Performance() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A]">
                <motion.div
                    aria-hidden="true"
                    animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#7ACED4]/20 blur-3xl"
                />

                <motion.div
                    aria-hidden="true"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#7ACED4]/15 blur-3xl"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.04]"
                />

                <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-5xl text-center"
                    >
                        <motion.div
                            variants={fadeUpVariants}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                        >
                            <ShieldCheck size={17} />
                            Bharat Special Opportunity Fund
                        </motion.div>

                        <motion.h1
                            variants={fadeUpVariants}
                            className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Fund Performance
                            <span className="mt-2 block text-[#7ACED4]">
                                & Investment Outlook
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUpVariants}
                            className="mx-auto mt-7 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
                        >
                            An investment strategy focused on stressed assets,
                            structured credit and special situations, combining
                            disciplined capital deployment with restructuring,
                            turnaround and resolution-led value creation.
                        </motion.p>

                        <motion.div
                            variants={fadeUpVariants}
                            className="mt-9 flex flex-wrap items-center justify-center gap-3"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#7ACED4]/30 bg-[#7ACED4]/10 px-4 py-2 text-sm text-white">
                                <CheckCircle2
                                    size={16}
                                    className="text-[#7ACED4]"
                                />
                                Structured Credit
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full border border-[#7ACED4]/30 bg-[#7ACED4]/10 px-4 py-2 text-sm text-white">
                                <CheckCircle2
                                    size={16}
                                    className="text-[#7ACED4]"
                                />
                                Special Situations
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full border border-[#7ACED4]/30 bg-[#7ACED4]/10 px-4 py-2 text-sm text-white">
                                <CheckCircle2
                                    size={16}
                                    className="text-[#7ACED4]"
                                />
                                Value Creation
                            </span>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#7ACED4]/60 to-transparent" />
            </section>

            {/* MAIN CONTENT */}
            <div className="relative pb-20 pt-12 sm:pb-24 sm:pt-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* FUND OVERVIEW */}
                    <motion.section
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl sm:rounded-[36px]"
                    >
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.04]"
                            />

                            <div className="relative z-10 max-w-4xl">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-[#7ACED4]">
                                    <TrendingUp size={17} />
                                    Fund Overview
                                </div>

                                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                                    Bharat Special Opportunity Fund
                                    <span className="mt-2 block text-[#7ACED4]">
                                        BSOF
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                                    BSOF focuses on stressed and special-situation
                                    mid-market opportunities across sectors.
                                    Its approach combines attractive entry
                                    valuations, structured financing, fresh
                                    capital and resolution-oriented execution
                                    to pursue risk-adjusted returns.
                                </p>

                                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                    {[
                                        {
                                            title: "Investment Focus",
                                            value: "Special Situations",
                                        },
                                        {
                                            title: "Market Approach",
                                            value: "India-Focused",
                                        },
                                        {
                                            title: "Investment Style",
                                            value: "Sector-Agnostic",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                                        >
                                            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                                {item.title}
                                            </p>
                                            <p className="mt-2 text-base font-semibold text-white">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FUND METRICS */}
                        <div className="p-5 sm:p-8 lg:p-10">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
                            >
                                {stats.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.subtitle}
                                            variants={cardVariants}
                                            whileHover={{
                                                y: -6,
                                                transition: {
                                                    duration: 0.25,
                                                },
                                            }}
                                            className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#7ACED4] hover:shadow-lg sm:p-7"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white transition-transform duration-300 group-hover:scale-105">
                                                <Icon size={23} />
                                            </div>

                                            <h3 className="mt-6 text-3xl font-bold tracking-tight text-[#009A9E] sm:text-4xl">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-base font-semibold text-[#00314A]">
                                                {item.subtitle}
                                            </p>

                                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* INVESTMENT PARAMETERS */}
                            <motion.section
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                className="mt-16"
                            >
                                <div className="max-w-3xl">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                                        <Target size={16} />
                                        Fund Terms & Commitments
                                    </div>

                                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#00314A] sm:text-4xl">
                                        Investment Parameters
                                    </h2>

                                    <p className="mt-4 text-base leading-8 text-slate-600">
                                        Key fund terms, investor commitments
                                        and investment structure as outlined
                                        in the BSOF Pitch Deck.
                                    </p>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="mt-8 grid gap-5 sm:grid-cols-2"
                                >
                                    {fundDetails.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={cardVariants}
                                                whileHover={{
                                                    y: -5,
                                                    transition: {
                                                        duration: 0.25,
                                                    },
                                                }}
                                                className="flex gap-5 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#7ACED4] hover:shadow-lg sm:p-7"
                                            >
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF9FA] text-[#009A9E]">
                                                    <Icon size={23} />
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-slate-500">
                                                        {item.title}
                                                    </p>

                                                    <h3 className="mt-1 text-2xl font-bold text-[#00314A]">
                                                        {item.value}
                                                    </h3>

                                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>

                                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                    <FileCheck2
                                        size={21}
                                        className="mt-0.5 shrink-0 text-[#009A9E]"
                                    />

                                    <p className="text-sm leading-7 text-slate-600">
                                        The additional green-shoe option is
                                        subject to the applicable fund
                                        documentation and regulatory
                                        requirements. Fund extensions and
                                        commitments are governed by the
                                        applicable contribution agreements
                                        and fund documents.
                                    </p>
                                </div>
                            </motion.section>

                            {/* INVESTMENT STRATEGY */}
                            <motion.section
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="mt-20"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                                        <TrendingUp size={16} />
                                        Value Creation Framework
                                    </div>

                                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#00314A] sm:text-4xl lg:text-5xl">
                                        Investment Strategy
                                    </h2>

                                    <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
                                        A structured approach to identifying
                                        opportunities, deploying capital and
                                        unlocking value in stressed and
                                        special-situation investments.
                                    </p>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="mt-10 grid gap-5 sm:grid-cols-2"
                                >
                                    {investmentStrategies.map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={cardVariants}
                                                className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7ACED4] hover:shadow-xl sm:p-8"
                                            >
                                                <div className="absolute right-5 top-3 text-6xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-[#EAF9FA]">
                                                    0{index + 1}
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white">
                                                        <Icon size={25} />
                                                    </div>

                                                    <h3 className="mt-6 text-xl font-bold text-[#00314A] sm:text-2xl">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.section>

                            {/* TARGET ASSET CLASSES */}
                            <motion.section
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="mt-20"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                                        <Building2 size={16} />
                                        Target Asset Classes
                                    </div>

                                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#00314A] sm:text-4xl lg:text-5xl">
                                        Strategic Investment
                                        <span className="mt-2 block text-[#009A9E]">
                                            Opportunity Segments
                                        </span>
                                    </h2>

                                    <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
                                        BSOF targets a range of stressed
                                        credit and special-situation
                                        opportunities across businesses,
                                        projects and asset-backed structures.
                                    </p>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                                >
                                    {assetClasses.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={cardVariants}
                                                whileHover={{
                                                    y: -6,
                                                    transition: {
                                                        duration: 0.25,
                                                    },
                                                }}
                                                className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#7ACED4] hover:shadow-xl sm:p-7"
                                            >
                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D5F3F5] bg-[#EAF9FA] text-[#009A9E] transition-colors duration-300 group-hover:bg-[#009A9E] group-hover:text-white">
                                                    <Icon size={25} />
                                                </div>

                                                <h3 className="mt-6 text-xl font-bold leading-snug text-[#00314A]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                                    {item.description}
                                                </p>

                                                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#009A9E]">
                                                    Investment Focus
                                                    <ArrowUpRight
                                                        size={16}
                                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                                    />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.section>

                            {/* WHY TRUST US */}
                            <motion.section
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="mt-20 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] p-6 sm:rounded-[36px] sm:p-10 lg:p-12"
                            >
                                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                                    <div>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-[#7ACED4]">
                                            <ShieldCheck size={16} />
                                            Our Approach
                                        </div>

                                        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                                            Why Trust
                                            <span className="block mt-2 text-[#7ACED4]">
                                                BSOF?
                                            </span>
                                        </h2>

                                        <p className="mt-5 text-base leading-8 text-slate-300">
                                            A focus on sourcing, investment
                                            discipline, risk management and
                                            resolution-led execution forms
                                            the foundation of the BSOF
                                            investment approach.
                                        </p>

                                        <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7ACED4]/10 text-[#7ACED4]">
                                                <Target size={24} />
                                            </div>

                                            <div>
                                                <p className="font-semibold text-white">
                                                    Disciplined Execution
                                                </p>
                                                <p className="mt-1 text-sm text-slate-400">
                                                    Focused on resolution and
                                                    value recovery
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{
                                            once: true,
                                            amount: 0.1,
                                        }}
                                        className="grid gap-4 sm:grid-cols-2"
                                    >
                                        {trustPoints.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <motion.div
                                                    key={item.title}
                                                    variants={cardVariants}
                                                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-colors duration-300 hover:border-[#7ACED4]/40 hover:bg-white/[0.08]"
                                                >
                                                    <Icon
                                                        size={25}
                                                        className="text-[#7ACED4]"
                                                    />

                                                    <h3 className="mt-4 text-lg font-semibold text-white">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-7 text-slate-300">
                                                        {item.description}
                                                    </p>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </div>
                            </motion.section>
                        </div>
                    </motion.section>
                </div>
            </div>
        </section>
    );
}
