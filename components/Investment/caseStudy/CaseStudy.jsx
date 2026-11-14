
"use client";

import {
    ArrowRight,
    ArrowUpRight,
    Landmark,
    Building2,
    Scale,
    BriefcaseBusiness,
    TrendingUp,
    ShieldCheck,
    RefreshCw,
    Wallet,
    Target,
    Layers3,
    FileSearch,
    Handshake,
    ChartNoAxesCombined,
    CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

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
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const investmentOpportunities = [
    {
        number: "01",
        title: "Stressed Corporate Debt",
        category: "Stressed Credit",
        description:
            "Identify and evaluate stressed corporate debt and loan exposures available at a discount, with a focus on resolution potential and risk-adjusted value creation.",
        icon: Landmark,
        points: [
            "Evaluate distressed debt opportunities",
            "Assess underlying recovery potential",
            "Structure investments around resolution pathways",
        ],
    },
    {
        number: "02",
        title: "Viable but Overleveraged Companies",
        category: "Corporate Restructuring",
        description:
            "Assess fundamentally viable businesses facing excessive debt, liquidity constraints, or capital structure challenges that may benefit from restructuring and fresh capital.",
        icon: BriefcaseBusiness,
        points: [
            "Evaluate business viability",
            "Review debt and capital structures",
            "Explore restructuring-led solutions",
        ],
    },
    {
        number: "03",
        title: "Stalled & Incomplete Projects",
        category: "Project Resolution",
        description:
            "Evaluate stalled or incomplete projects where capital requirements, financial stress, or execution challenges may create opportunities for structured intervention.",
        icon: Building2,
        points: [
            "Assess project status and funding needs",
            "Evaluate underlying assets and liabilities",
            "Identify feasible completion or resolution routes",
        ],
    },
    {
        number: "04",
        title: "Promoter Financing",
        category: "Structured Financing",
        description:
            "Evaluate structured financing opportunities involving promoters where appropriate collateral, transaction structuring, and a clearly assessed repayment or exit strategy are available.",
        icon: Wallet,
        points: [
            "Assess financing requirements",
            "Evaluate collateral and transaction risks",
            "Structure suitable financing solutions",
        ],
    },
    {
        number: "05",
        title: "Asset-Backed Distress",
        category: "Asset-Backed Opportunities",
        description:
            "Explore distressed investment opportunities supported by identifiable underlying assets, subject to legal, financial, valuation, and recovery assessment.",
        icon: ShieldCheck,
        points: [
            "Review underlying asset quality",
            "Assess legal and recovery considerations",
            "Evaluate potential exit pathways",
        ],
    },
    {
        number: "06",
        title: "Complex Special Situations",
        category: "Special Situations",
        description:
            "Evaluate complex situations involving litigation-locked assets, multiple stakeholders, or intricate capital structures where a tailored investment and resolution approach may be required.",
        icon: Scale,
        points: [
            "Analyse legal and stakeholder complexity",
            "Assess restructuring alternatives",
            "Identify potential resolution-led outcomes",
        ],
    },
];

const valueCreationStages = [
    {
        number: "01",
        title: "Invest or Acquire at a Deep Discount",
        description:
            "Identify suitable stressed assets and special situations, undertake financial and legal due diligence, and evaluate entry pricing against the underlying risks and potential recovery.",
        icon: FileSearch,
    },
    {
        number: "02",
        title: "Infuse Fresh Capital",
        description:
            "Where appropriate, provide or arrange additional capital to support restructuring, address funding gaps, or help unlock the underlying asset's potential.",
        icon: RefreshCw,
    },
    {
        number: "03",
        title: "Unlock Value Through Resolution",
        description:
            "Work towards value realization through suitable resolution plans, restructuring, strategic transactions, or other appropriate exit opportunities.",
        icon: ChartNoAxesCombined,
    },
];

const focusAreas = [
    {
        title: "Stressed Credit",
        description:
            "Distressed corporate debt and loan exposures requiring careful recovery assessment.",
        icon: Landmark,
    },
    {
        title: "Special Situations",
        description:
            "Non-standard investment opportunities requiring tailored transaction structures.",
        icon: Target,
    },
    {
        title: "Litigation-Locked Assets",
        description:
            "Assets involving legal or stakeholder complexities that require detailed evaluation.",
        icon: Scale,
    },
    {
        title: "Complex Restructuring",
        description:
            "Businesses and transactions requiring financial restructuring or resolution-led intervention.",
        icon: Layers3,
    },
];

const investmentPrinciples = [
    "Financial, legal, and commercial due diligence",
    "Assessment of downside risks and recovery scenarios",
    "Structured investment and capital allocation",
    "Resolution-focused execution and exit planning",
];

export default function CaseStudy() {
    return (
        <main className="overflow-hidden bg-white text-[#00314A]">
            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-[#00314A]">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#009A9E]/20 blur-3xl" />
                    <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#7ACED4]/10 blur-3xl" />

                    <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />
                </div>

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeUp}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#7ACED4]/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7ACED4] sm:text-sm">
                                <span className="h-2 w-2 rounded-full bg-[#7ACED4]" />
                                Bharat Special Opportunity Fund
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
                        >
                            Investment Strategy
                            <span className="mt-2 block text-[#7ACED4]">
                                & Illustrative Opportunities
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-7 max-w-3xl text-base leading-8 text-white/75 sm:text-lg"
                        >
                            A resolution-led approach to stressed credit,
                            complex restructuring, and special situations.
                            We evaluate opportunities where disciplined
                            investment selection, appropriate capital
                            structuring, and focused execution may help
                            unlock underlying value.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-9 flex flex-wrap gap-4"
                        >
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-3 rounded-full bg-[#7ACED4] px-6 py-3.5 text-sm font-semibold text-[#00314A] transition hover:bg-white"
                            >
                                Discuss an Opportunity
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>

                            <a
                                href="#investment-opportunities"
                                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#7ACED4] hover:text-[#7ACED4]"
                            >
                                Explore Our Focus Areas
                                <ArrowRight size={17} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="mt-16 grid grid-cols-1 gap-4 border-t border-white/15 pt-7 sm:grid-cols-3"
                    >
                        {[
                            {
                                label: "Investment Approach",
                                value: "Resolution-led",
                            },
                            {
                                label: "Core Focus",
                                value: "Stressed & Special Situations",
                            },
                            {
                                label: "Value Creation",
                                value: "Structured & Strategic",
                            },
                        ].map((item) => (
                            <div key={item.label} className="py-2">
                                <p className="text-sm text-white/55">
                                    {item.label}
                                </p>
                                <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009A9E]">
                            Our Investment Philosophy
                        </p>

                        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#00314A] sm:text-4xl lg:text-5xl">
                            Complexity can create opportunity when supported
                            by disciplined execution.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="space-y-5 text-base leading-8 text-slate-600"
                    >
                        <p>
                            Bharat Special Opportunity Fund focuses on
                            identifying and evaluating stressed credit,
                            viable but overleveraged businesses, stalled
                            projects, and complex special situations.
                        </p>

                        <p>
                            The investment approach combines detailed
                            assessment of the underlying asset, capital
                            structure, legal position, and potential recovery
                            pathways. Where appropriate, investment may be
                            supported by fresh capital and a structured
                            resolution plan.
                        </p>

                        <p>
                            Each opportunity is evaluated on its individual
                            merits, including risk, pricing, execution
                            requirements, and potential exit options. An
                            investment outcome is not assured.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* INVESTMENT OPPORTUNITIES */}
            <section
                id="investment-opportunities"
                className="bg-[#F4F9FA] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
            >
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={staggerContainer}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009A9E]"
                        >
                            Where We Look for Opportunity
                        </motion.p>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-4 text-3xl font-semibold tracking-tight text-[#00314A] sm:text-4xl lg:text-5xl"
                        >
                            Investment Opportunities
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 text-base leading-8 text-slate-600"
                        >
                            Our investment universe includes a range of
                            stressed and complex situations. The following
                            represent strategy areas for evaluation, not
                            disclosures of completed investments.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                    >
                        {investmentOpportunities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.number}
                                    variants={fadeUp}
                                    className="group flex h-full flex-col rounded-2xl border border-[#DCE9EC] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7ACED4] hover:shadow-xl hover:shadow-[#00314A]/5 sm:p-7"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7F7] text-[#009A9E] transition group-hover:bg-[#009A9E] group-hover:text-white">
                                            <Icon size={23} />
                                        </div>

                                        <span className="text-sm font-semibold tracking-widest text-[#009A9E]/70">
                                            {item.number}
                                        </span>
                                    </div>

                                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#009A9E]">
                                        {item.category}
                                    </p>

                                    <h3 className="mt-3 text-xl font-semibold leading-snug text-[#00314A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600">
                                        {item.description}
                                    </p>

                                    <div className="my-6 h-px bg-[#E6EEF0]" />

                                    <ul className="mt-auto space-y-3">
                                        {item.points.map((point) => (
                                            <li
                                                key={point}
                                                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                            >
                                                <CheckCircle2
                                                    size={17}
                                                    className="mt-0.5 shrink-0 text-[#009A9E]"
                                                />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* VALUE CREATION PROCESS */}
            <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009A9E]">
                                How We Create Value
                            </p>

                            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#00314A] sm:text-4xl lg:text-5xl">
                                From investment selection to resolution.
                            </h2>

                            <p className="mt-6 text-base leading-8 text-slate-600">
                                Our approach is built around three
                                interconnected stages. Each transaction
                                requires its own assessment, execution plan,
                                and potential exit strategy.
                            </p>

                            <div className="mt-8 rounded-2xl border border-[#DCE9EC] bg-[#F4F9FA] p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00314A] text-white">
                                        <TrendingUp size={22} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#00314A]">
                                            Disciplined Value Creation
                                        </h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-600">
                                            Entry pricing, capital deployment,
                                            resolution feasibility, and exit
                                            planning are assessed together
                                            rather than in isolation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={staggerContainer}
                            className="space-y-5"
                        >
                            {valueCreationStages.map((stage, index) => {
                                const Icon = stage.icon;

                                return (
                                    <motion.div
                                        key={stage.number}
                                        variants={fadeUp}
                                        className="relative rounded-2xl border border-[#DCE9EC] bg-white p-6 sm:p-7"
                                    >
                                        {index !==
                                            valueCreationStages.length - 1 && (
                                                <div className="absolute bottom-0 left-[43px] top-[90px] hidden w-px bg-[#CDE8EA] sm:block" />
                                            )}

                                        <div className="flex items-start gap-5">
                                            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F7F7] text-[#009A9E]">
                                                <Icon size={22} />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#009A9E]">
                                                    Stage {stage.number}
                                                </p>

                                                <h3 className="mt-2 text-xl font-semibold leading-snug text-[#00314A]">
                                                    {stage.title}
                                                </h3>

                                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                                    {stage.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STRATEGIC FOCUS */}
            <section className="bg-[#00314A] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="max-w-3xl"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ACED4]"
                        >
                            Strategic Focus
                        </motion.p>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                        >
                            Focused on complex situations that require
                            structured solutions.
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 text-base leading-8 text-white/70"
                        >
                            We evaluate opportunities that may require
                            specialised analysis, stakeholder coordination,
                            financial restructuring, or a tailored
                            resolution strategy.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {focusAreas.map((area) => {
                            const Icon = area.icon;

                            return (
                                <motion.div
                                    key={area.title}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition hover:border-[#7ACED4]/60 hover:bg-white/[0.07]"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7ACED4]/10 text-[#7ACED4]">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-semibold text-white">
                                        {area.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/65">
                                        {area.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* INVESTMENT DISCIPLINE */}
            <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009A9E]">
                            Investment Discipline
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#00314A] sm:text-4xl">
                            Every opportunity starts with rigorous evaluation.
                        </h2>

                        <p className="mt-5 text-base leading-8 text-slate-600">
                            Investment decisions require a detailed
                            understanding of the underlying asset, financial
                            position, legal considerations, capital
                            requirements, and potential resolution routes.
                            Suitability and execution feasibility are
                            assessed on a transaction-by-transaction basis.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={staggerContainer}
                        className="rounded-2xl border border-[#DCE9EC] bg-[#F4F9FA] p-6 sm:p-8"
                    >
                        <h3 className="text-xl font-semibold text-[#00314A]">
                            Key Evaluation Considerations
                        </h3>

                        <div className="mt-6 space-y-4">
                            {investmentPrinciples.map((principle) => (
                                <motion.div
                                    key={principle}
                                    variants={fadeUp}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2
                                        size={20}
                                        className="mt-0.5 shrink-0 text-[#009A9E]"
                                    />

                                    <p className="text-sm leading-7 text-slate-600">
                                        {principle}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-7 border-t border-[#DCE9EC] pt-6">
                            <div className="flex items-start gap-3">
                                <ShieldCheck
                                    size={21}
                                    className="mt-0.5 shrink-0 text-[#009A9E]"
                                />

                                <p className="text-xs leading-6 text-slate-500">
                                    All opportunities are subject to due
                                    diligence, applicable documentation,
                                    regulatory requirements, investment
                                    approvals, and transaction-specific
                                    conditions. No investment outcome or
                                    return is guaranteed.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
