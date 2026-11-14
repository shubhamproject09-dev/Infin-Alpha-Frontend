
"use client";

import {
    ShieldCheck,
    Building2,
    Briefcase,
    TrendingUp,
    Landmark,
    ArrowRight,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InfinAlphaSection() {
    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

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
            y: 40,
            scale: 0.95,
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

    const listVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
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
        hover: {
            scale: 1.03,
            transition: { duration: 0.3 },
        },
        tap: { scale: 0.97 },
    };

    const expertiseAreas = [
        {
            title: "Distressed Credit",
            description:
                "Investment opportunities involving stressed debt, non-performing assets and financially distressed businesses.",
        },
        {
            title: "Special Situations",
            description:
                "Complex investment situations where structured capital and transaction-specific solutions may unlock value.",
        },
        {
            title: "Restructuring & Resolution",
            description:
                "Resolution-led approaches involving financial restructuring, IBC-related opportunities and strategic exits.",
        },
        {
            title: "Private Credit",
            description:
                "Structured financing opportunities designed around the financial position, asset base and requirements of a business.",
        },
    ];

    const investmentProcess = [
        {
            number: "01",
            title: "Identify Opportunities",
            description:
                "Evaluate stressed credit, special situations and businesses facing financial or operational challenges.",
        },
        {
            number: "02",
            title: "Invest at a Discount",
            description:
                "Assess entry valuations, underlying assets, transaction structures and potential downside risks.",
        },
        {
            number: "03",
            title: "Infuse Fresh Capital",
            description:
                "Deploy capital through appropriate investment structures to support viable resolution and turnaround plans.",
        },
        {
            number: "04",
            title: "Unlock Value",
            description:
                "Pursue value realization through restructuring, resolution plans, refinancing or strategic exits, as appropriate.",
        },
    ];

    const strengths = [
        {
            title: "Industry Knowledge",
            description:
                "Focus on distressed assets, special situations, credit restructuring and IBC-led recoveries.",
        },
        {
            title: "Resolution-Oriented Approach",
            description:
                "Investment evaluation considers transaction complexity, resolution pathways and potential recovery outcomes.",
        },
        {
            title: "Structured Risk Assessment",
            description:
                "Emphasis on entry valuations, asset quality, capital structure and downside-risk evaluation.",
        },
        {
            title: "Experienced Leadership",
            description:
                "Leadership and team expertise spanning private credit, stressed assets, investment management, finance and legal-compliance matters.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white">

            {/* ================================
                HERO SECTION
            ================================= */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A]"
                style={{
                    paddingTop: "clamp(100px, 12vw, 140px)",
                    paddingBottom: "clamp(90px, 12vw, 140px)",
                }}
            >
                {/* Background Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#7ACED4]/20 blur-3xl"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7ACED4]/10 blur-3xl"
                />

                {/* Background Pattern */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.04 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"
                />

                {/* Hero Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex items-center justify-center text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="mx-auto max-w-5xl">

                            {/* Badge */}
                            <motion.div
                                variants={fadeUp}
                                className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                            >
                                <ShieldCheck size={17} />
                                Alternative Investment Management
                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                variants={fadeUp}
                                className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                            >
                                INFIN ALPHA
                                <span className="mt-2 block text-[#7ACED4]">
                                    LLP
                                </span>
                            </motion.h1>

                            {/* Hero Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.7,
                                }}
                                className="mx-auto mt-8 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl"
                            >
                                INFIN Alpha LLP is the Fund Management Entity
                                for Bharat Special Opportunity Fund (BSOF),
                                with an investment focus on distressed credit,
                                special situations, private credit and
                                restructuring-led opportunities across India.
                            </motion.p>

                            {/* Hero Tags */}
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                className="mt-10 flex flex-wrap items-center justify-center gap-3"
                            >
                                {[
                                    "Distressed Credit",
                                    "Special Situations",
                                    "Value Creation",
                                ].map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -3,
                                            borderColor: "#7ACED4",
                                        }}
                                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-sm transition-colors"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* ================================
                MAIN CONTENT
            ================================= */}
            <div className="relative z-10 py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* SECTION INTRODUCTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="mx-auto mb-14 max-w-4xl text-center lg:mb-16"
                    >
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]"
                        >
                            <Sparkles size={16} className="text-[#009A9E]" />
                            Our Approach
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#00314A] sm:text-4xl lg:text-5xl"
                        >
                            Specialized Investment Management
                            <span className="mt-2 block text-[#009A9E]">
                                For Complex Opportunities
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg"
                        >
                            The investment approach centres on identifying
                            financially stressed but potentially viable
                            businesses and assets, evaluating appropriate
                            entry structures, and developing resolution-led
                            strategies to unlock value.
                        </motion.p>
                    </motion.div>

                    {/* ================================
                        MANAGEMENT ENTITY + SIDE PANEL
                    ================================= */}
                    <motion.div
                        className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {/* LEFT CONTENT */}
                        <motion.div
                            variants={fadeLeft}
                            className="flex lg:col-span-7"
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow:
                                        "0 20px 60px rgba(0,0,0,0.08)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative h-full w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 sm:rounded-[36px] sm:p-8 lg:p-10"
                            >
                                {/* Decorative Glow */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.1, 0.2, 0.1],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#7ACED4]/10 blur-3xl"
                                />

                                <div className="relative z-10">

                                    {/* Badge */}
                                    <motion.div
                                        variants={fadeUp}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs font-semibold text-[#00314A] sm:text-sm"
                                    >
                                        <Building2
                                            size={16}
                                            className="text-[#009A9E]"
                                        />
                                        Fund Management Entity
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h2
                                        variants={fadeUp}
                                        className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-[#00314A] sm:text-3xl lg:text-4xl"
                                    >
                                        INFIN Alpha LLP
                                        <span className="mt-2 block text-[#009A9E]">
                                            Managing Special Situations
                                        </span>
                                    </motion.h2>

                                    {/* Description */}
                                    <motion.p
                                        variants={fadeUp}
                                        className="mt-6 text-base leading-8 text-slate-700 sm:text-lg"
                                    >
                                        INFIN Alpha LLP focuses on the
                                        investment management of opportunities
                                        involving distressed assets,
                                        restructuring requirements and
                                        non-traditional credit situations.
                                        Its flagship strategy, Bharat Special
                                        Opportunity Fund, is designed to
                                        pursue opportunities where capital
                                        deployment and resolution expertise
                                        may help address financial distress.
                                    </motion.p>

                                    {/* Expertise Cards */}
                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{
                                            once: false,
                                            amount: 0.2,
                                        }}
                                        className="mt-10 grid gap-5 sm:grid-cols-2"
                                    >
                                        {expertiseAreas.map((item, index) => (
                                            <motion.div
                                                key={item.title}
                                                variants={cardVariants}
                                                whileHover={{
                                                    y: -5,
                                                    borderColor: "#7ACED4",
                                                    transition: {
                                                        duration: 0.3,
                                                    },
                                                }}
                                                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-colors sm:p-6"
                                            >
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D5F3F5] bg-white text-[#009A9E]">
                                                    {index === 0 && (
                                                        <Briefcase size={22} />
                                                    )}
                                                    {index === 1 && (
                                                        <TrendingUp size={22} />
                                                    )}
                                                    {index === 2 && (
                                                        <Landmark size={22} />
                                                    )}
                                                    {index === 3 && (
                                                        <Building2 size={22} />
                                                    )}
                                                </div>

                                                <h3 className="mt-5 text-lg font-bold leading-snug text-[#00314A]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* BSOF HIGHLIGHT */}
                                    <motion.div
                                        variants={fadeUp}
                                        whileHover={{
                                            scale: 1.01,
                                            transition: { duration: 0.3 },
                                        }}
                                        className="mt-8 rounded-[28px] border border-[#D5F3F5] bg-[#EAF9FA] p-6 sm:p-8"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#009A9E]">
                                                <Landmark size={23} />
                                            </div>

                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#009A9E]">
                                                    Flagship Fund
                                                </p>

                                                <h3 className="mt-2 text-xl font-bold leading-snug text-[#00314A] sm:text-2xl">
                                                    Bharat Special Opportunity
                                                    Fund (BSOF)
                                                </h3>

                                                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                                                    A Category II Alternative
                                                    Investment Fund focused on
                                                    special situation private
                                                    credit, stressed assets,
                                                    financial restructuring
                                                    and resolution-oriented
                                                    investments.
                                                </p>

                                                <Link
                                                    href="/investment/strategy-opportunities"
                                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#009A9E] transition-colors hover:text-[#00314A]"
                                                >
                                                    Explore BSOF Strategy
                                                    <ArrowRight size={17} />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT CONTENT */}
                        <motion.div
                            variants={fadeRight}
                            className="flex lg:col-span-5"
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow:
                                        "0 20px 60px rgba(0,0,0,0.18)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] p-6 shadow-xl sm:rounded-[36px] sm:p-8 lg:p-10"
                            >
                                {/* Background Decoration */}
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
                                    className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#7ACED4]/20 blur-3xl"
                                />

                                <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px] opacity-[0.04]" />

                                <div className="relative z-10">

                                    {/* Badge */}
                                    <motion.div
                                        variants={fadeUp}
                                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#7ACED4]"
                                    >
                                        <ShieldCheck size={16} />
                                        Investment Philosophy
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h2
                                        variants={fadeUp}
                                        className="mt-7 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl"
                                    >
                                        From Financial Distress
                                        <span className="mt-2 block text-[#7ACED4]">
                                            To Value Creation
                                        </span>
                                    </motion.h2>

                                    <motion.p
                                        variants={fadeUp}
                                        className="mt-5 text-sm leading-7 text-slate-300 sm:text-base"
                                    >
                                        A structured investment process
                                        connecting opportunity identification,
                                        capital deployment and resolution-led
                                        value realization.
                                    </motion.p>

                                    {/* PROCESS LIST */}
                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{
                                            once: false,
                                            amount: 0.2,
                                        }}
                                        className="mt-9 space-y-6"
                                    >
                                        {investmentProcess.map((step) => (
                                            <motion.div
                                                key={step.number}
                                                variants={listVariants}
                                                whileHover={{
                                                    x: 5,
                                                    transition: {
                                                        duration: 0.25,
                                                    },
                                                }}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7ACED4]/30 bg-[#7ACED4]/10 text-sm font-bold text-[#7ACED4]">
                                                    {step.number}
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold text-white">
                                                        {step.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-7 text-slate-300">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Divider */}
                                    <div className="my-9 h-px bg-white/15" />

                                    {/* KEY DIFFERENTIATORS */}
                                    <motion.h3
                                        variants={fadeUp}
                                        className="text-xl font-bold text-[#7ACED4] sm:text-2xl"
                                    >
                                        Areas of Expertise
                                    </motion.h3>

                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{
                                            once: false,
                                            amount: 0.2,
                                        }}
                                        className="mt-6 space-y-5"
                                    >
                                        {strengths.map((item) => (
                                            <motion.div
                                                key={item.title}
                                                variants={listVariants}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2
                                                    size={20}
                                                    className="mt-1 shrink-0 text-[#7ACED4]"
                                                />

                                                <div>
                                                    <h4 className="font-semibold text-white">
                                                        {item.title}
                                                    </h4>

                                                    <p className="mt-1 text-sm leading-7 text-slate-300">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* ================================
                        INVESTMENT APPROACH
                    ================================= */}
                    <motion.div
                        className="mt-20 sm:mt-24"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                    >
                        <div className="mx-auto max-w-3xl text-center">
                            <motion.p
                                variants={fadeUp}
                                className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009A9E]"
                            >
                                Our Investment Approach
                            </motion.p>

                            <motion.h2
                                variants={fadeUp}
                                className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#00314A] sm:text-4xl"
                            >
                                A Resolution-Led Framework
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="mt-5 leading-8 text-slate-600"
                            >
                                The strategy follows a disciplined sequence
                                from sourcing and evaluating opportunities
                                through capital deployment and potential
                                value realization.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {investmentProcess.map((step) => (
                                <motion.div
                                    key={step.number}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -6,
                                        boxShadow:
                                            "0 18px 40px rgba(0,49,74,0.08)",
                                        transition: { duration: 0.3 },
                                    }}
                                    className="rounded-3xl border border-slate-200 bg-white p-6 transition-colors hover:border-[#7ACED4] sm:p-7"
                                >
                                    <span className="text-sm font-bold tracking-widest text-[#009A9E]">
                                        STEP {step.number}
                                    </span>

                                    <h3 className="mt-4 text-lg font-bold leading-snug text-[#00314A]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
