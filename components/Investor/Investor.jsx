
"use client";

import {
    ShieldCheck,
    TrendingUp,
    Landmark,
    Building2,
    CheckCircle2,
    ArrowUpRight,
    Wallet,
    BriefcaseBusiness,
    FileCheck2,
    Users,
    Handshake,
    ChartNoAxesCombined,
    Scale,
    Banknote,
    Clock3,
    Target,
    Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

const fundDetails = [
    {
        label: "Fund Category",
        value: "Category II AIF",
        description:
            "SEBI-registered Alternative Investment Fund",
        icon: ShieldCheck,
    },
    {
        label: "Minimum Investment",
        value: "₹1 Crore",
        description:
            "Minimum investment stated in the fund presentation",
        icon: Wallet,
    },
    {
        label: "Fund Corpus",
        value: "₹500 Crore",
        description:
            "With a green-shoe option of ₹500 crore",
        icon: Banknote,
    },
    {
        label: "Fund Tenure",
        value: "5 Years",
        description:
            "Extension options as specified in the fund presentation",
        icon: Clock3,
    },
];

const serviceProviders = [
    {
        role: "Sponsor",
        name: "IKSD Udyam Private Limited",
        icon: Handshake,
    },
    {
        role: "Trustee",
        name: "Vistra ITCL (India) Limited",
        icon: ShieldCheck,
    },
    {
        role: "Investment Manager",
        name: "Infin Alpha LLP",
        icon: BriefcaseBusiness,
    },
    {
        role: "Custodian",
        name: "Axis Bank Limited",
        icon: Landmark,
    },
    {
        role: "RTA, Fund Administrator & Digital Onboarding",
        name: "Computer Age Management Services Limited (CAMS)",
        icon: Building2,
    },
    {
        role: "Merchant Banker",
        name: "Beeline Capital Advisors Private Limited",
        icon: FileCheck2,
    },
];

const governanceTeams = [
    {
        title: "Advisory Board",
        members: "3 Members",
        icon: Users,
        description:
            "Reviews governance and compliance across deal origination, asset management, exits and investor relations. Also addresses conflicts of interest and confidential reporting.",
    },
    {
        title: "Investment Committee",
        members: "3 Members",
        icon: ChartNoAxesCombined,
        description:
            "Approves fund investments and divestments, reviews transaction processes, and provides inputs to the Investment Manager.",
    },
    {
        title: "Risk & Compliance Team",
        members: "2 Members",
        icon: Scale,
        description:
            "Independently evaluates deals, assesses potential risks, and reviews fund compliance.",
    },
    {
        title: "Investor Relations Team",
        members: "2 Members",
        icon: Handshake,
        description:
            "Responsible for investor relations, marketing and communication.",
    },
    {
        title: "Transaction Team",
        members: "2 Members",
        icon: Target,
        description:
            "Supports deal origination, project evaluation, due diligence and transaction documentation.",
    },
    {
        title: "Credit & Asset Management",
        members: "3 Members",
        icon: Layers3,
        description:
            "Focuses on investment monitoring, compliance, operations and exit strategy.",
    },
];

const investmentApproach = [
    {
        number: "01",
        title: "Invest or Acquire",
        description:
            "Target special-situation and stressed assets at attractive valuations, including opportunities available at a deep discount.",
        icon: Target,
    },
    {
        number: "02",
        title: "Infuse Fresh Capital",
        description:
            "Use structured investment approaches to support financial restructuring, recapitalisation and turnaround opportunities.",
        icon: TrendingUp,
    },
    {
        number: "03",
        title: "Resolve & Create Value",
        description:
            "Pursue resolution and strategic exit opportunities with a focus on risk-adjusted returns and long-term value creation.",
        icon: ArrowUpRight,
    },
];

const sectors = [
    "Real Estate",
    "Infrastructure",
    "Manufacturing",
    "Hospitality",
    "Pharmaceuticals",
    "Chemicals",
];

const instruments = [
    "Secured NCDs",
    "Preference Shares",
    "Resolution-Linked Equity",
    "Structured Credit",
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease,
        },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -35 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease,
        },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 35 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease,
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease,
        },
    },
};

export default function Investor() {
    return (
        <main className="relative overflow-hidden bg-white">
            {/* HERO */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] pb-20 pt-32 sm:pb-24 sm:pt-30 lg:pb-28">
                <motion.div
                    aria-hidden="true"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.12, 0.25, 0.12],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#009A9E]/40 blur-3xl"
                />

                <motion.div
                    aria-hidden="true"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.08, 0.2, 0.08],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#7ACED4]/20 blur-3xl"
                />

                <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:25px_25px] opacity-[0.035]" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-5xl text-center"
                    >
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-[#7ACED4]/25 bg-white/[0.06] px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                        >
                            <ShieldCheck size={17} />
                            Investor Information
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Bharat Special
                            <span className="mt-2 block text-[#7ACED4]">
                                Opportunity Fund
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
                        >
                            Investing in Distressed. Creating Value. Building
                            Tomorrow. Explore the fund structure, investment
                            approach, key service providers and governance
                            framework of BSOF.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3"
                        >
                            <span className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/90">
                                Category II AIF
                            </span>
                            <span className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/90">
                                Scheme: Bharat Special Situation Fund 1
                            </span>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 text-xs tracking-wide text-slate-400 sm:text-sm"
                        >
                            SEBI Registration No. IN/AIF2/26-27/2127
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* FUND SNAPSHOT */}
            <section
                id="fund-overview"
                className="relative z-10 -mt-8 pb-16 sm:-mt-10 sm:pb-20"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {fundDetails.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.label}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-[#00314A]/[0.05] transition-colors hover:border-[#7ACED4] sm:p-6"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                        <Icon size={22} />
                                    </div>

                                    <p className="mt-5 text-sm font-medium text-slate-500">
                                        {item.label}
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold text-[#00314A]">
                                        {item.value}
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* FUND OVERVIEW */}
            <section className="py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <span className="inline-flex rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                                Fund Overview
                            </span>

                            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl">
                                A Focused Approach to
                                <span className="block text-[#009A9E]">
                                    Special Situations
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-8 text-slate-600">
                                Bharat Special Opportunity Fund (BSOF) targets
                                stressed and special-situation mid-market
                                companies through structured credit,
                                acquisition, turnaround and resolution
                                strategies.
                            </p>

                            <p className="mt-4 text-base leading-8 text-slate-600">
                                Its sector-agnostic approach focuses on
                                identifying opportunities across industries
                                and economic cycles, with an objective of
                                delivering risk-adjusted returns through
                                financial restructuring and value creation.
                            </p>

                            <div className="mt-7 rounded-2xl border-l-4 border-[#009A9E] bg-[#EAF9FA]/70 p-5">
                                <p className="text-sm font-semibold text-[#00314A]">
                                    Investment Objective
                                </p>
                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    Target special-situation and stressed
                                    assets at attractive valuations, drive
                                    financial restructuring, and unlock value
                                    through resolution and turnaround
                                    strategies.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="rounded-[28px] bg-gradient-to-br from-[#00314A] to-[#0A3635] p-6 text-white sm:p-8 lg:p-9"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#7ACED4]">
                                    <Layers3 size={24} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-300">
                                        Investment Instruments
                                    </p>
                                    <h3 className="mt-1 text-xl font-bold">
                                        Capital Deployment
                                    </h3>
                                </div>
                            </div>

                            <p className="mt-6 text-sm leading-7 text-slate-300">
                                The fund presentation identifies the
                                following instruments for investment
                                opportunities:
                            </p>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {instruments.map((instrument) => (
                                    <div
                                        key={instrument}
                                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-4"
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="mt-0.5 shrink-0 text-[#7ACED4]"
                                        />
                                        <span className="text-sm leading-6 text-white/90">
                                            {instrument}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-6">
                                <p className="text-sm font-semibold text-[#7ACED4]">
                                    Target Sectors
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {sectors.map((sector) => (
                                        <span
                                            key={sector}
                                            className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-2 text-xs text-slate-200 sm:text-sm"
                                        >
                                            {sector}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FUND TERMS */}
            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                            Fund Terms & Structure
                        </span>

                        <h2 className="mt-5 text-3xl font-bold text-[#00314A] sm:text-4xl">
                            Key Investment Terms
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Key terms as stated in the fund presentation.
                            Please refer to the applicable fund documents
                            for the complete terms and conditions.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <motion.div
                            variants={cardVariants}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <Wallet className="text-[#009A9E]" size={25} />
                            <p className="mt-5 text-sm text-slate-500">
                                Minimum Investment
                            </p>
                            <h3 className="mt-2 text-3xl font-bold text-[#00314A]">
                                ₹1 Crore
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <Banknote className="text-[#009A9E]" size={25} />
                            <p className="mt-5 text-sm text-slate-500">
                                Sponsor Commitment
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-[#00314A]">
                                2.5% of Total Corpus
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Or ₹5 crore, whichever is lower.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <TrendingUp className="text-[#009A9E]" size={25} />
                            <p className="mt-5 text-sm text-slate-500">
                                Hurdle Rate
                            </p>
                            <h3 className="mt-2 text-3xl font-bold text-[#00314A]">
                                12%
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <Clock3 className="text-[#009A9E]" size={25} />
                            <p className="mt-5 text-sm text-slate-500">
                                Fund Tenure
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-[#00314A]">
                                5 Years
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Extension of up to 1+1 years, subject to
                                the terms stated in the presentation.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <Target className="text-[#009A9E]" size={25} />
                            <p className="mt-5 text-sm text-slate-500">
                                Ticket Size
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-[#00314A]">
                                25%
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Of investible funds, as stated in the
                                presentation.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <FileCheck2 className="text-[#009A9E]" size={25} />
                            <p className="mt-5 text-sm text-slate-500">
                                Final Closing
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-[#00314A]">
                                Up to 24 Months
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                From the date of First Close, as stated
                                in the presentation.
                            </p>
                        </motion.div>
                    </motion.div>

                    <p className="mt-6 text-xs leading-6 text-slate-500">
                        The presentation states that the Investment Manager
                        may extend the tenure by 12 months at its sole
                        discretion, and a further extension is subject to
                        the prior consent of a two-thirds majority of
                        contributors in accordance with the contribution
                        agreement and applicable laws. The definitive fund
                        documents govern.
                    </p>
                </div>
            </section>

            {/* KEY SERVICE PROVIDERS */}
            <section id="fund-structure" className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                            Fund Structure
                        </span>

                        <h2 className="mt-5 text-3xl font-bold text-[#00314A] sm:text-4xl">
                            Key Stakeholders & Service Providers
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            The fund presentation identifies the following
                            parties and their roles in the fund structure.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {serviceProviders.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.role}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-[#7ACED4] hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                        <Icon size={23} />
                                    </div>

                                    <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        {item.role}
                                    </p>

                                    <h3 className="mt-2 text-lg font-bold leading-7 text-[#00314A]">
                                        {item.name}
                                    </h3>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                        <h3 className="font-bold text-[#00314A]">
                            Additional Advisors & Filings
                        </h3>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <p className="text-xs text-slate-500">
                                    Knowledge Partner
                                </p>
                                <p className="mt-1 font-semibold text-slate-800">
                                    Money Plus Consultancy Services
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">
                                    Auditor
                                </p>
                                <p className="mt-1 font-semibold text-slate-800">
                                    SVJK & Associates
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500">
                                    Tax Advisor
                                </p>
                                <p className="mt-1 font-semibold text-slate-800">
                                    Money Plus Consultancy Services
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-slate-600">
                            The presentation also states that the Private
                            Placement Memorandum (PPM) was filed with SEBI
                            through a Merchant Banker and that the PPM
                            due-diligence certificate was completed by
                            the Merchant Banker.
                        </p>
                    </div>
                </div>
            </section>

            {/* INVESTMENT APPROACH */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] py-16 sm:py-20">
                <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:25px_25px] opacity-[0.035]" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex rounded-full border border-[#7ACED4]/25 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-[#7ACED4]">
                            Investment Approach
                        </span>

                        <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                            How BSOF Creates Value
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-300">
                            A resolution-oriented strategy focused on
                            attractive entry valuations, fresh capital
                            and strategic exits.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-12 grid gap-5 lg:grid-cols-3"
                    >
                        {investmentApproach.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.number}
                                    variants={cardVariants}
                                    whileHover={{ y: -6 }}
                                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm sm:p-8"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-[#7ACED4]/60">
                                            {item.number}
                                        </span>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#009A9E]/20 text-[#7ACED4]">
                                            <Icon size={23} />
                                        </div>
                                    </div>

                                    <h3 className="mt-7 text-xl font-bold text-white sm:text-2xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-300">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* GOVERNANCE FRAMEWORK */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                            Governance Framework
                        </span>

                        <h2 className="mt-5 text-3xl font-bold text-[#00314A] sm:text-4xl">
                            Governance, Investment & Risk Oversight
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            The fund presentation outlines dedicated teams
                            for investment decisions, governance, compliance,
                            investor relations and asset management.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {governanceTeams.map((team) => {
                            const Icon = team.icon;

                            return (
                                <motion.div
                                    key={team.title}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-[#7ACED4] hover:shadow-lg"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                            <Icon size={23} />
                                        </div>

                                        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                                            {team.members}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold leading-snug text-[#00314A]">
                                        {team.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {team.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* INVESTMENT GUIDELINES */}
            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                <Scale size={24} />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold text-[#00314A]">
                                Investment Guidelines
                            </h2>

                            <ul className="mt-6 space-y-4">
                                {[
                                    "The fund shall not invest more than 25% of its investible funds in any one portfolio entity.",
                                    "Transactions should offer free cash cover of 2.0x or greater.",
                                    "Hard-asset security cover of at least 1.25x of principal plus interest.",
                                    "Diversification across geographies, project types and groups.",
                                    "Experienced counterparties in target markets.",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="mt-1 shrink-0 text-[#009A9E]"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                <ShieldCheck size={24} />
                            </div>

                            <h2 className="mt-5 text-2xl font-bold text-[#00314A]">
                                Security Collaterals
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                The presentation identifies the following
                                potential security mechanisms, subject to
                                the relevant transaction and fund documents.
                            </p>

                            <ul className="mt-5 space-y-4">
                                {[
                                    "Charge or mortgage over land, fixed assets, current assets and the project under development or construction.",
                                    "Escrow account for receivables, with withdrawals controlled until fund dues are serviced.",
                                    "Personal guarantees of promoters and a corporate guarantee from the parent company.",
                                    "Pledge of shares and post-dated cheques towards scheduled repayments.",
                                    "Right to appoint a nominee director and power of attorney to enforce security.",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="mt-1 shrink-0 text-[#009A9E]"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INVESTOR NOTICE */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="overflow-hidden rounded-[28px] border border-[#D5F3F5] bg-[#EAF9FA] p-6 sm:p-9"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#009A9E] shadow-sm">
                                <FileCheck2 size={24} />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[#00314A]">
                                    Important Investor Information
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                                    This presentation is for private and
                                    confidential informational purposes only.
                                    It does not constitute an offer or
                                    invitation to purchase or subscribe for
                                    units or investments in any jurisdiction.
                                    Any offer or invitation relating to the
                                    fund shall be made solely pursuant to
                                    the applicable Private Placement
                                    Memorandum (PPM).
                                </p>

                                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                                    Investment in the fund involves risk.
                                    No assurance is given that investors
                                    will receive a return of their capital.
                                    Investors should review the applicable
                                    offering documents and consult their own
                                    legal, accounting, tax and other
                                    professional advisors before making
                                    an investment decision.
                                </p>

                                <p className="mt-4 text-xs leading-6 text-slate-500">
                                    The pitch deck states that it does not
                                    purport to be the PPM and that details
                                    in the PPM may differ. The applicable
                                    definitive fund documents and relevant
                                    laws govern.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
