
"use client";

import {
    ShieldCheck,
    TrendingUp,
    BookOpen,
    ArrowUpRight,
    Building2,
    Newspaper,
    Podcast,
    CheckCircle2,
    Scale,
    BriefcaseBusiness,
    FileText,
    Target,
    Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const insightAreas = [
    {
        number: "01",
        title: "Special Situations",
        description:
            "Explore investment opportunities arising from complex financial situations, restructuring requirements and situations that call for a differentiated investment approach.",
        icon: Target,
        topics: [
            "Special-situation opportunities",
            "Structured investment approaches",
            "Resolution-oriented strategies",
        ],
    },
    {
        number: "02",
        title: "Distressed Credit",
        description:
            "Understand the role of credit-focused strategies in distressed situations, including the assessment of risks, underlying assets and potential recovery pathways.",
        icon: TrendingUp,
        topics: [
            "Distressed credit opportunities",
            "Credit and asset assessment",
            "Recovery considerations",
        ],
    },
    {
        number: "03",
        title: "Litigation Assets",
        description:
            "Examine situations involving litigation-linked assets and the considerations relevant to evaluating complex opportunities and their associated risks.",
        icon: Scale,
        topics: [
            "Litigation-linked opportunities",
            "Risk assessment",
            "Resolution considerations",
        ],
    },
    {
        number: "04",
        title: "Turnaround & Resolution",
        description:
            "Explore restructuring, turnaround and resolution-led approaches aimed at addressing business challenges and identifying potential pathways to value creation.",
        icon: Building2,
        topics: [
            "Financial restructuring",
            "Turnaround strategies",
            "Resolution and exit pathways",
        ],
    },
];

const investmentPerspectives = [
    {
        title: "Opportunity Assessment",
        description:
            "Evaluate special situations by considering the underlying opportunity, associated risks and available resolution pathways.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Structured Investment",
        description:
            "Understand how structured credit and differentiated investment approaches may be considered in complex situations.",
        icon: FileText,
    },
    {
        title: "Value Creation",
        description:
            "Examine turnaround, restructuring and resolution strategies as potential routes to unlocking value.",
        icon: Lightbulb,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
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
        y: 25,
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

export default function Insights() {
    return (
        <main className="relative overflow-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28">
                <motion.div
                    aria-hidden="true"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.12, 0.24, 0.12],
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
                            Thought Leadership & Insights
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Research & Market
                            <span className="mt-2 block text-[#7ACED4]">
                                Perspectives
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
                        >
                            Explore perspectives on special situations,
                            distressed credit, litigation-linked assets,
                            restructuring and resolution-led investment
                            approaches relevant to the alternative
                            investment landscape.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex flex-wrap items-center justify-center gap-3"
                        >
                            {[
                                "Special Situations",
                                "Distressed Credit",
                                "Turnaround & Resolution",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/90"
                                >
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                                <BookOpen size={16} />
                                About Our Insights
                            </span>

                            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl">
                                Perspectives on
                                <span className="block text-[#009A9E]">
                                    Complex Investment Situations
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-8 text-slate-600">
                                INFIN Alpha LLP focuses on special situations,
                                distressed credit and opportunities that may
                                require structured investment, restructuring
                                or resolution-oriented approaches.
                            </p>

                            <p className="mt-4 text-base leading-8 text-slate-600">
                                This section brings together the key subject
                                areas relevant to these strategies. Research
                                articles, interviews and other publications
                                can be presented here as approved content
                                becomes available.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#00314A] to-[#0A3635] p-7 text-white sm:p-9"
                        >
                            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#009A9E]/20 blur-3xl" />

                            <div className="relative z-10">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#7ACED4]">
                                    <Lightbulb size={24} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
                                    Areas of Focus
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    Our content themes reflect the investment
                                    areas and strategic approaches relevant
                                    to special situations and stressed assets.
                                </p>

                                <div className="mt-7 space-y-4">
                                    {[
                                        "Special-situation opportunities",
                                        "Distressed credit and litigation assets",
                                        "Restructuring, turnaround and resolution",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2
                                                size={19}
                                                className="mt-1 shrink-0 text-[#7ACED4]"
                                            />
                                            <p className="text-sm leading-6 text-white/90">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INSIGHT AREAS */}
            <section
                id="insight-areas"
                className="bg-slate-50 py-16 sm:py-20"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                            Key Themes
                        </span>

                        <h2 className="mt-5 text-3xl font-bold text-[#00314A] sm:text-4xl">
                            Explore Our Areas of Focus
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Discover the investment themes that shape our
                            focus on complex credit and special situations.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-10 grid gap-5 md:grid-cols-2"
                    >
                        {insightAreas.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.number}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#7ACED4] hover:shadow-xl sm:p-8"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF9FA] text-[#009A9E] transition-colors group-hover:bg-[#009A9E] group-hover:text-white">
                                            <Icon size={26} />
                                        </div>

                                        <span className="text-3xl font-bold text-[#009A9E]/20">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-[#00314A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 border-t border-slate-100 pt-5">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Topics
                                        </p>

                                        <ul className="mt-4 space-y-3">
                                            {item.topics.map((topic) => (
                                                <li
                                                    key={topic}
                                                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                                >
                                                    <CheckCircle2
                                                        size={17}
                                                        className="mt-1 shrink-0 text-[#009A9E]"
                                                    />
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* INVESTMENT PERSPECTIVES */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                            <TrendingUp size={16} />
                            Strategic Perspectives
                        </span>

                        <h2 className="mt-5 text-3xl font-bold text-[#00314A] sm:text-4xl">
                            From Opportunity to Resolution
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Three connected perspectives for understanding
                            complex investment situations.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-10 grid gap-5 md:grid-cols-3"
                    >
                        {investmentPerspectives.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#7ACED4] hover:shadow-lg sm:p-7"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-[#00314A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* RESEARCH & PUBLICATIONS */}
            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="lg:col-span-5"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF9FA] text-[#009A9E]">
                                <Newspaper size={27} />
                            </div>

                            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl">
                                Research &
                                <span className="block text-[#009A9E]">
                                    Publications
                                </span>
                            </h2>

                            <p className="mt-5 text-base leading-8 text-slate-600">
                                This space is intended for research articles,
                                thought leadership, interviews and other
                                approved publications relating to the
                                investment themes covered on this page.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="lg:col-span-7"
                        >
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                    <BookOpen size={23} />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-[#00314A]">
                                    Research Library
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Published materials can be added here
                                    with their approved title, publication
                                    date, summary and a link to the full
                                    article or document.
                                </p>

                                <div className="mt-6 rounded-xl border border-dashed border-[#7ACED4] bg-[#F8FCFC] p-5">
                                    <p className="text-sm font-semibold text-[#00314A]">
                                        Publications will appear here
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        No individual articles or publication
                                        links are displayed until the actual
                                        content is provided and approved.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MEDIA & COMMENTARY */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                            <Podcast size={16} />
                            Media & Commentary
                        </span>

                        <h2 className="mt-5 text-3xl font-bold text-[#00314A] sm:text-4xl">
                            Interviews & Market Commentary
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-600">
                            A dedicated space for approved interviews,
                            media appearances and commentary from
                            INFIN Alpha LLP.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-10 grid gap-5 md:grid-cols-3"
                    >
                        {[
                            {
                                title: "Interviews",
                                description:
                                    "Approved interviews and conversations on special situations and investment strategy.",
                                icon: Podcast,
                            },
                            {
                                title: "Media Commentary",
                                description:
                                    "Published commentary on relevant developments in distressed assets and credit.",
                                icon: Newspaper,
                            },
                            {
                                title: "Research Updates",
                                description:
                                    "New research and institutional perspectives as approved materials become available.",
                                icon: FileText,
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#7ACED4] hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-[#00314A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* IMPORTANT INFORMATION */}
            <section className="pb-16 sm:pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="rounded-2xl border border-[#D5F3F5] bg-[#EAF9FA] p-6 sm:p-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#009A9E]">
                                <ShieldCheck size={22} />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-[#00314A]">
                                    Important Information
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Content on this page is intended for
                                    general informational purposes only.
                                    It should not be treated as investment,
                                    legal, tax or financial advice, or as
                                    an offer or solicitation to invest.
                                    Any investment-related decision should
                                    be based on the applicable fund
                                    documents and independent professional
                                    advice.
                                </p>

                                <p className="mt-3 text-xs leading-6 text-slate-500">
                                    Investment opportunities involve risks.
                                    Please refer to the applicable offering
                                    documents for the relevant terms,
                                    conditions and risk factors.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
