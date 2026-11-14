
"use client";

import {
    ShieldCheck,
    Landmark,
    TrendingUp,
    BriefcaseBusiness,
    Network,
    Search,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyAIFSection() {
    const points = [
        {
            icon: <Landmark size={22} />,
            title: "Deep Industry Knowledge",
            eyebrow: "01 / EXPERTISE",
            text:
                "Expertise across special situations and stressed-asset resolution, debt restructuring, IBC-led recoveries and strategic high-yield equity deals. This knowledge supports the evaluation of complex investment opportunities.",
        },
        {
            icon: <Network size={22} />,
            title: "Strong Sourcing Network",
            eyebrow: "02 / NETWORK",
            text:
                "Established relationships with banks, asset reconstruction companies (ARCs), resolution professionals and institutional investors help source stressed-asset and special-situation opportunities.",
        },
        {
            icon: <Search size={22} />,
            title: "Ability to Identify Opportunities",
            eyebrow: "03 / MARKET INSIGHT",
            text:
                "A focus on identifying turnaround-ready companies and recognising dislocations in credit markets helps evaluate opportunities that may require specialised capital and resolution expertise.",
        },
        {
            icon: <ShieldCheck size={22} />,
            title: "Disciplined Risk Management",
            eyebrow: "04 / RISK & GOVERNANCE",
            text:
                "A disciplined investment process emphasises structured entry, recovery-focused exit strategies and robust downside-protection mechanisms when evaluating investment opportunities.",
        },
    ];

    const strengths = [
        {
            icon: <Landmark size={25} />,
            title: "Industry Expertise",
            text:
                "Special situations, stressed-asset resolution, debt restructuring and IBC-led recoveries.",
        },
        {
            icon: <BriefcaseBusiness size={25} />,
            title: "Sourcing Relationships",
            text:
                "Connections with banks, ARCs, resolution professionals and institutional investors.",
        },
        {
            icon: <ShieldCheck size={25} />,
            title: "Risk-Focused Process",
            text:
                "Structured investment entry, recovery-focused exits and downside protection.",
        },
    ];

    const fadeUp = {
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

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -45,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 45,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
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
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const pointVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section
            id="why-infin-alpha"
            className="relative overflow-hidden bg-[#00314A] py-20 lg:py-28"
        >
            {/* BACKGROUND EFFECTS */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-[#009A9E]/20 blur-3xl"
                />

                <motion.div
                    animate={{
                        scale: [1.15, 1, 1.15],
                        opacity: [0.08, 0.18, 0.08],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-[#7ACED4]/10 blur-3xl"
                />

                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* SECTION HEADER */}
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* LEFT */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <span className="inline-flex items-center rounded-full border border-[#009A9E]/30 bg-[#009A9E]/10 px-4 py-2 text-sm font-medium text-[#7ACED4]">
                            Why INFIN Alpha
                        </span>

                        <h2 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[54px]">
                            Expertise That
                            <span className="mt-2 block text-[#7ACED4]">
                                Unlocks Value
                            </span>
                            in Complex Situations
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                            INFIN Alpha focuses on special situations and
                            stressed-asset investments through specialised
                            industry knowledge, established sourcing
                            relationships and a disciplined investment process.
                        </p>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
                            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7ACED4]">
                                Our Approach
                            </span>

                            <h3 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
                                Knowledge, Network, Opportunity Identification
                                and Risk Management
                            </h3>

                            <p className="mt-5 text-base leading-8 text-slate-300">
                                The fund presentation highlights the importance
                                of sourcing stressed opportunities, assessing
                                turnaround potential and applying structured
                                entry and recovery-focused exit strategies.
                                Together, these capabilities support a
                                disciplined approach to complex investments.
                            </p>

                            <div className="mt-7 h-px bg-gradient-to-r from-[#009A9E]/70 via-white/15 to-transparent" />

                            <div className="mt-6 flex items-start gap-3">
                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#009A9E]/15 text-[#7ACED4]">
                                    <TrendingUp size={20} />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white">
                                        Focused on Special Situations
                                    </h4>
                                    <p className="mt-1 text-sm leading-6 text-slate-300">
                                        Stressed assets, debt restructuring,
                                        IBC-led recoveries and strategic
                                        high-yield equity opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CORE STRENGTHS TIMELINE */}
                <div className="mt-20 lg:mt-24">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mb-10 max-w-2xl"
                    >
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7ACED4]">
                            Why Trust Us?
                        </span>

                        <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                            Four Pillars of Our Investment Approach
                        </h3>

                        <p className="mt-4 leading-7 text-slate-300">
                            The strengths outlined in the BSOF presentation
                            form the foundation of its approach to sourcing,
                            evaluating and managing stressed-asset investments.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="relative space-y-5"
                    >
                        {/* Timeline Line */}
                        <div
                            aria-hidden="true"
                            className="absolute bottom-10 left-[21px] top-10 hidden w-px bg-gradient-to-b from-[#009A9E] via-[#7ACED4]/50 to-transparent sm:block"
                        />

                        {points.map((item) => (
                            <motion.div
                                key={item.eyebrow}
                                variants={pointVariants}
                                className="group relative grid gap-5 sm:grid-cols-[44px_1fr] sm:gap-6"
                            >
                                {/* Icon */}
                                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#7ACED4]/25 bg-[#00314A] text-[#7ACED4] shadow-[0_0_20px_rgba(0,154,158,0.15)] transition-colors duration-300 group-hover:border-[#7ACED4]/60 group-hover:bg-[#009A9E]/15">
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 group-hover:border-[#009A9E]/40 group-hover:bg-white/[0.06] sm:p-8">
                                    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.5fr] lg:gap-10">
                                        <div>
                                            <span className="text-xs font-semibold tracking-[0.16em] text-[#7ACED4]">
                                                {item.eyebrow}
                                            </span>

                                            <h4 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
                                                {item.title}
                                            </h4>
                                        </div>

                                        <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* BOTTOM STRENGTHS */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="mt-20 grid gap-5 md:grid-cols-3"
                >
                    {strengths.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={pointVariants}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.25 },
                            }}
                            className="rounded-3xl border border-[#009A9E]/20 bg-gradient-to-br from-[#009A9E]/10 to-white/[0.02] p-7 transition-colors duration-300 hover:border-[#7ACED4]/40"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7ACED4]/20 bg-[#009A9E]/10 text-[#7ACED4]">
                                {item.icon}
                            </div>

                            <h4 className="mt-5 text-xl font-bold text-white">
                                {item.title}
                            </h4>

                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
