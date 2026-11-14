
"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    ShieldCheck,
    TrendingUp,
    Building2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
    const ease = [0.22, 1, 0.36, 1];

    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease },
        },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease },
        },
        hover: {
            y: -3,
            transition: { duration: 0.25 },
        },
        tap: { scale: 0.97 },
    };

    const sectors = [
        "Real Estate",
        "Infrastructure",
        "Manufacturing",
        "Hospitality",
        "Pharmaceuticals",
        "Chemicals",
    ];

    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-15">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* MAIN CTA CONTAINER */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="relative isolate overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] p-6 sm:p-10 lg:p-14"
                >
                    {/* BACKGROUND GLOWS */}
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
                        className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#009A9E]/30 blur-3xl"
                    />

                    <motion.div
                        aria-hidden="true"
                        animate={{
                            scale: [1.1, 1, 1.1],
                            opacity: [0.08, 0.18, 0.08],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#7ACED4]/20 blur-3xl"
                    />

                    {/* SUBTLE DECORATIVE BORDER */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/[0.08]"
                    />

                    <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
                        {/* LEFT CONTENT */}
                        <motion.div
                            variants={fadeLeft}
                            className="lg:col-span-6"
                        >
                            {/* BADGE */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#7ACED4]/25 bg-[#009A9E]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#7ACED4] sm:text-sm">
                                <span className="h-2 w-2 rounded-full bg-[#7ACED4]" />
                                Bharat Special Opportunity Fund
                            </div>

                            {/* HEADING */}
                            <motion.h2
                                variants={fadeUp}
                                className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]"
                            >
                                Unlocking Value in{" "}
                                <span className="text-[#7ACED4]">
                                    Stressed &amp; Special Situation
                                </span>{" "}
                                Investments
                            </motion.h2>

                            {/* DESCRIPTION */}
                            <motion.p
                                variants={fadeUp}
                                className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
                            >
                                Bharat Special Opportunity Fund (BSOF) targets
                                stressed and special-situation mid-market
                                companies through structured credit,
                                acquisitions, turnarounds, and resolution
                                strategies.
                            </motion.p>

                            {/* SUPPORTING TEXT */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-6 flex gap-3"
                            >
                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#009A9E]/30 bg-[#009A9E]/10 text-[#7ACED4]">
                                    <TrendingUp size={19} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-white sm:text-base">
                                        Disciplined, Recovery-Focused Approach
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-400">
                                        Seeking risk-adjusted returns through
                                        restructuring, resolution, and
                                        turnaround-led value creation.
                                    </p>
                                </div>
                            </motion.div>

                            {/* CTA BUTTONS */}
                            <motion.div
                                variants={staggerContainer}
                                className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                            >
                                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                    <Link
                                        href="/investment/philosophy"
                                        className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#009A9E] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-colors duration-300 hover:bg-[#087D80] sm:w-auto sm:text-base"
                                    >
                                        Investment Philosophy
                                        <ArrowUpRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>
                                </motion.div>

                                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                    <Link
                                        href="/investment/caseStudy"
                                        className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-[#7ACED4]/50 hover:bg-white/10 sm:w-auto sm:text-base"
                                    >
                                        Case Studies
                                        <ArrowUpRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT CONTENT */}
                        <motion.div
                            variants={fadeRight}
                            className="lg:col-span-6"
                        >
                            <motion.div
                                variants={staggerContainer}
                                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
                            >
                                {/* RISK MANAGEMENT CARD */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#7ACED4]/30 sm:p-6"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#009A9E]/25 bg-[#009A9E]/10 text-[#7ACED4]">
                                        <ShieldCheck size={23} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">
                                        Risk Management
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-300">
                                        A disciplined investment process with
                                        structured entry, recovery-focused
                                        exit strategies, and robust downside
                                        protection mechanisms.
                                    </p>
                                </motion.div>

                                {/* INVESTMENT STRATEGY CARD */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#7ACED4]/30 sm:p-6"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#009A9E]/25 bg-[#009A9E]/10 text-[#7ACED4]">
                                        <TrendingUp size={23} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">
                                        Investment Strategy
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-300">
                                        Structured credit, acquisitions,
                                        business turnarounds, and
                                        resolution strategies for
                                        special-situation opportunities.
                                    </p>
                                </motion.div>

                                {/* SECTOR FOCUS CARD */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    className="rounded-2xl border border-[#009A9E]/25 bg-gradient-to-br from-[#009A9E]/15 to-[#7ACED4]/[0.06] p-5 backdrop-blur-md sm:col-span-2 sm:p-6"
                                >
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#7ACED4]/25 bg-[#009A9E]/15 text-[#7ACED4]">
                                            <Building2 size={23} />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7ACED4]">
                                                Sector Focus
                                            </p>

                                            <h3 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
                                                Sector-Agnostic Opportunities
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                                Focus on sectors with
                                                stressed-asset and
                                                turnaround potential.
                                            </p>

                                            {/* SECTOR TAGS */}
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {sectors.map((sector) => (
                                                    <span
                                                        key={sector}
                                                        className="rounded-lg border border-white/10 bg-[#00314A]/50 px-3 py-2 text-xs font-medium text-slate-200 sm:text-sm"
                                                    >
                                                        {sector}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
