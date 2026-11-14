
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    const fadeLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.96,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        hover: {
            y: -3,
            transition: { duration: 0.25 },
        },
        tap: { scale: 0.97 },
    };

    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] text-white">
            {/* Background Glow */}
            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#009A9E]/30 blur-3xl"
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
                className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#7ACED4]/20 blur-3xl"
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
                    {/* LEFT CONTENT */}
                    <motion.div
                        className="lg:col-span-7"
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Fund Label */}
                        <div className="inline-flex items-center gap-3 rounded-full border border-[#7ACED4]/25 bg-white/[0.06] px-4 py-2 backdrop-blur-md">
                            <motion.span
                                aria-hidden="true"
                                animate={{ opacity: [1, 0.45, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="h-2 w-2 rounded-full bg-[#7ACED4]"
                            />

                            <span className="text-xs font-semibold tracking-[0.12em] text-[#7ACED4] sm:text-sm">
                                BHARAT SPECIAL OPPORTUNITY FUND
                            </span>
                        </div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
                        >
                            Bharat Special
                            <span className="block text-[#7ACED4]">
                                Situation Fund 1
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
                        >
                            An investment strategy focused on distressed
                            and special situations, including deep-discount
                            acquisitions, capital infusion, resolution
                            opportunities and strategic exits.
                        </motion.p>

                        {/* Strategy Tags */}
                        <motion.div
                            className="mt-7 flex flex-wrap gap-2.5"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {[
                                "Distressed Situations",
                                "Deep-Discount Acquisitions",
                                "Capital Infusion",
                                "Resolution & Strategic Exits",
                            ].map((item) => (
                                <motion.span
                                    key={item}
                                    variants={cardVariants}
                                    className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-200"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="mt-9 flex flex-col gap-4 sm:flex-row"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                <Link
                                    href="/investment/strategy-opportunities"
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#009A9E] px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-black/10 transition-colors hover:bg-[#087F83] sm:w-auto sm:text-base"
                                >
                                    Explore Investment Strategy
                                    <span aria-hidden="true" className="ml-2">
                                        →
                                    </span>
                                </Link>
                            </motion.div>

                            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                <Link
                                    href="/contact"
                                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/[0.04] px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto sm:text-base"
                                >
                                    Enquire About the Fund
                                </Link>
                            </motion.div>
                        </motion.div>

                        <p className="mt-5 max-w-xl text-xs leading-6 text-slate-400">
                            Investment information is subject to the fund's
                            governing documents and applicable terms.
                        </p>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        className="lg:col-span-5"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
                        >
                            {/* Card Glow */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#009A9E]/20 blur-3xl"
                            />

                            <div className="relative z-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7ACED4]">
                                    Fund Overview
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                                    Bharat Special
                                    <br />
                                    Opportunity Fund
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-slate-300">
                                    Key fund parameters
                                </p>

                                {/* Corpus */}
                                <motion.div
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="mt-7 rounded-2xl border border-[#7ACED4]/20 bg-[#009A9E]/10 p-5"
                                >
                                    <p className="text-sm font-medium text-slate-300">
                                        Fund Corpus
                                    </p>

                                    <p className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                                        ₹500 Cr
                                        <span className="mx-2 text-xl font-normal text-[#7ACED4]">
                                            +
                                        </span>
                                        ₹500 Cr
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="rounded-md bg-white/10 px-3 py-1.5 text-xs text-slate-200">
                                            Base Corpus
                                        </span>
                                        <span className="rounded-md bg-white/10 px-3 py-1.5 text-xs text-slate-200">
                                            Green Shoe Option
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Fund Details */}
                                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <motion.div
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                                    >
                                        <p className="text-sm text-slate-400">
                                            Fund Tenure
                                        </p>

                                        <h3 className="mt-2 text-2xl font-semibold">
                                            5 Years
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-slate-400">
                                            Extension of 1+1 years, subject
                                            to conditions
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                                    >
                                        <p className="text-sm text-slate-400">
                                            Minimum Investment
                                        </p>

                                        <h3 className="mt-2 text-2xl font-semibold">
                                            ₹1 Cr
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-slate-400">
                                            Subject to the fund's governing
                                            documents and applicable terms
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Structure */}
                                <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-slate-400">
                                            Fund Structure
                                        </p>

                                        <p className="mt-2 text-base font-semibold sm:text-lg">
                                            AIF Category II
                                        </p>
                                    </div>

                                    <div className="h-10 w-px bg-white/10" />

                                    <div className="text-right">
                                        <p className="text-xs uppercase tracking-wider text-slate-400">
                                            Investment Manager
                                        </p>

                                        <p className="mt-2 text-base font-semibold sm:text-lg">
                                            Infin Alpha LLP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
