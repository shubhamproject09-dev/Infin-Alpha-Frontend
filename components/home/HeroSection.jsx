
"use client";

import Link from "next/link";
import {
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 30,
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

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -40,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 40,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
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
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative isolate overflow-hidden bg-white text-black">
            {/* Animated Background Effects */}
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.12, 0.24, 0.12],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-24 -top-20 -z-10 h-80 w-80 rounded-full bg-[#009A9E]/20 blur-3xl"
            />

            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.08, 0.2, 0.08],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-96 w-96 rounded-full bg-[#7ACED4]/30 blur-3xl"
            />

            {/* Subtle Decorative Line */}
            <motion.div
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut",
                }}
                className="absolute left-0 top-0 h-1 w-full origin-left bg-gradient-to-r from-[#009A9E] via-[#7ACED4] to-transparent"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <motion.div
                    className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                >
                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={fadeLeft}
                        className="min-w-0"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{
                                y: -2,
                                scale: 1.02,
                            }}
                            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#009A9E]/20 bg-[#009A9E]/10 px-4 py-2 text-sm font-medium text-[#007F83]"
                        >
                            <TrendingUp
                                size={16}
                                className="shrink-0"
                                aria-hidden="true"
                            />
                            <span>
                                Sector Agnostic · Focused on India's Growth
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                        >
                            <span className="block">
                                Unlocking Value in
                            </span>

                            <motion.span
                                initial={{
                                    opacity: 0,
                                    y: 18,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.35,
                                    ease: "easeOut",
                                }}
                                className="mt-2 block text-[#009A9E]"
                            >
                                India’s Stressed Asset Ecosystem
                            </motion.span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg"
                        >
                            Infin Alpha LLP is the Investment Manager of
                            Bharat Special Opportunity Fund (BSOF), focused
                            on special situations and stressed mid-market
                            companies through structured credit, acquisitions,
                            financial restructuring, turnaround and resolution
                            strategies.
                        </motion.p>

                        {/* Fund Information Cards */}
                        <motion.div
                            variants={containerVariants}
                            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                        >
                            {/* Corpus Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{
                                    y: -6,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }}
                                className="group rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm transition-shadow duration-300 hover:border-[#009A9E]/40 hover:shadow-xl"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <motion.div
                                        whileHover={{
                                            rotate: 5,
                                            scale: 1.08,
                                        }}
                                        className="rounded-xl bg-[#009A9E]/10 p-2.5"
                                    >
                                        <Landmark
                                            size={22}
                                            className="text-[#009A9E]"
                                            aria-hidden="true"
                                        />
                                    </motion.div>

                                    <p className="text-sm font-medium text-gray-500">
                                        Fund Corpus
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-[#009A9E]">
                                    ₹500 Cr
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    With a green-shoe option of ₹500 Cr
                                </p>
                            </motion.div>

                            {/* Fund Structure Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{
                                    y: -6,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }}
                                className="group rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm transition-shadow duration-300 hover:border-[#009A9E]/40 hover:shadow-xl"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <motion.div
                                        whileHover={{
                                            rotate: -5,
                                            scale: 1.08,
                                        }}
                                        className="rounded-xl bg-[#009A9E]/10 p-2.5"
                                    >
                                        <ShieldCheck
                                            size={22}
                                            className="text-[#009A9E]"
                                            aria-hidden="true"
                                        />
                                    </motion.div>

                                    <p className="text-sm font-medium text-gray-500">
                                        Fund Structure
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-[#009A9E]">
                                    Category II AIF
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    SEBI Registration No.
                                </p>

                                <p className="break-all text-sm font-semibold text-gray-800">
                                    IN/AIF2/26-27/2127
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-9 flex flex-col gap-4 sm:flex-row"
                        >
                            <motion.div
                                whileHover={{
                                    y: -3,
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="/investment/strategy-opportunities"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#009A9E] px-6 py-3.5 font-semibold text-white shadow-md shadow-[#009A9E]/20 transition-colors duration-300 hover:bg-[#007F83] sm:w-auto"
                                >
                                    Explore Opportunities

                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                            ease: "easeInOut",
                                        }}
                                        className="inline-flex"
                                    >
                                        <ArrowRight
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    </motion.span>
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -3,
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href="/track-record"
                                    className="inline-flex w-full items-center justify-center rounded-xl border border-[#009A9E] bg-white px-6 py-3.5 font-semibold text-[#007F83] transition-colors duration-300 hover:bg-[#009A9E]/10 sm:w-auto"
                                >
                                    View Track Record
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        variants={fadeRight}
                        className="relative min-w-0"
                    >
                        {/* Floating Fund Card */}
                        <motion.div
                            animate={{
                                y: [0, -7, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative rounded-3xl border border-gray-200/80 bg-white/95 p-6 shadow-xl shadow-[#00314A]/5 backdrop-blur-sm sm:p-8"
                        >
                            {/* Decorative Accent */}
                            <motion.div
                                initial={{
                                    scaleX: 0,
                                }}
                                whileInView={{
                                    scaleX: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3,
                                }}
                                className="absolute left-6 right-6 top-0 h-1 origin-left rounded-full bg-gradient-to-r from-[#009A9E] to-[#7ACED4] sm:left-8 sm:right-8"
                            />

                            {/* Fund Identity */}
                            <div className="mb-8 flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-[#009A9E]">
                                        Bharat Special Opportunity Fund
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
                                        Investing in Distressed.

                                        <span className="block text-[#009A9E]">
                                            Creating Value.
                                        </span>

                                        <span className="block">
                                            Building Tomorrow.
                                        </span>
                                    </h2>
                                </div>

                                <motion.div
                                    animate={{
                                        y: [0, -4, 0],
                                        rotate: [0, 3, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="shrink-0 rounded-2xl border border-[#009A9E]/20 bg-[#009A9E]/10 p-3 sm:p-4"
                                >
                                    <Landmark
                                        size={28}
                                        className="text-[#009A9E]"
                                        aria-hidden="true"
                                    />
                                </motion.div>
                            </div>

                            {/* Investment Approach */}
                            <motion.div
                                variants={containerVariants}
                                className="space-y-4"
                            >
                                {/* Structured Credit */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{
                                        x: 4,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    }}
                                    className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-colors duration-300 hover:border-[#009A9E]/40 sm:p-5"
                                >
                                    <div className="shrink-0 rounded-xl bg-[#009A9E]/10 p-3">
                                        <ShieldCheck
                                            size={22}
                                            className="text-[#009A9E]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                                            Structured Credit
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            Secured financing through
                                            structured credit instruments,
                                            including secured NCDs.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Special Situations */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{
                                        x: 4,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    }}
                                    className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-colors duration-300 hover:border-[#009A9E]/40 sm:p-5"
                                >
                                    <div className="shrink-0 rounded-xl bg-[#009A9E]/10 p-3">
                                        <TrendingUp
                                            size={22}
                                            className="text-[#009A9E]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                                            Special Situations
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            Targeting stressed assets,
                                            financial restructuring,
                                            turnaround opportunities and
                                            resolution-led value creation.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Fund Tenure */}
                            <motion.div
                                variants={fadeUp}
                                whileHover={{
                                    y: -3,
                                    transition: {
                                        duration: 0.2,
                                    },
                                }}
                                className="mt-6 rounded-2xl border border-[#009A9E]/20 bg-[#EAF9FA] p-5"
                            >
                                <p className="text-sm font-medium text-gray-600">
                                    Fund Tenure
                                </p>

                                <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                    <span className="text-3xl font-bold text-gray-900">
                                        5 Years
                                    </span>

                                    <span className="text-sm text-gray-600">
                                        + extension option of 1+1 years*
                                    </span>
                                </div>

                                <p className="mt-2 text-xs leading-5 text-gray-500">
                                    *Subject to applicable fund terms and
                                    extension conditions.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Floating Decorative Dot */}
                        <motion.div
                            aria-hidden="true"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute -right-3 top-16 h-5 w-5 rounded-full bg-[#009A9E]/30 blur-[1px] sm:-right-5"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
