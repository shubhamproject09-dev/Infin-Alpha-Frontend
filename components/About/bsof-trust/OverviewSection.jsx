
"use client";

import { motion } from "framer-motion";

export default function OverviewSection() {
    // Animation variants
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 80,
        },
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

    const statVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 30,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const targetAssets = [
        {
            title: "Stressed Corporate Debt",
            description:
                "NPAs, IBC cases, and bank or ARC asset sales.",
        },
        {
            title: "Overleveraged Companies",
            description:
                "Businesses with viable core operations but significant debt burdens.",
        },
        {
            title: "Stalled & Incomplete Projects",
            description:
                "Infrastructure, real estate, and manufacturing projects with revival potential.",
        },
        {
            title: "Promoter Financing",
            description:
                "Financing solutions for founder- or promoter-level financial distress.",
        },
        {
            title: "Asset-Backed Distress",
            description:
                "Opportunities involving plants, land, and operating infrastructure assets.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-23 lg:py-25">

            {/* Background Pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.03 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:24px_24px]"
            />

            {/* Top Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#7ACED4]/10 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* TOP SECTION */}
                <motion.div
                    className="mx-auto max-w-5xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-5 py-2 text-sm font-semibold text-[#00314A]"
                    >
                        <motion.span
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className="h-2 w-2 rounded-full bg-[#009A9E]"
                        />

                        Bharat Special Opportunity Fund
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                        }}
                        className="mt-8 text-3xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-5xl"
                        style={{ color: "#000" }}
                    >
                        Investing in Distressed.
                        <span
                            className="mt-2 block"
                            style={{ color: "#009A9E" }}
                        >
                            Creating Value.
                        </span>
                        Building Tomorrow.
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.7,
                        }}
                        className="mx-auto mt-8 max-w-4xl text-lg leading-9 sm:text-xl"
                        style={{ color: "#000" }}
                    >
                        Bharat Special Opportunity Fund (BSOF) invests in
                        stressed and special situation mid-market companies
                        through structured credit, acquisitions, turnaround
                        initiatives, and resolution strategies. Managed by
                        Infin Alpha LLP, the Fund follows a flexible,
                        sector-agnostic approach focused on attractive
                        valuations, disciplined investment decisions, and
                        long-term value creation.
                    </motion.p>
                </motion.div>

                {/* MAIN GRID */}
                <motion.div
                    className="mt-20 grid items-stretch gap-8 lg:mt-24 lg:grid-cols-12"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {/* LEFT SIDE */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">

                        {/* CARD 1: INVESTMENT STRATEGY */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#EAF9FA]/0 transition-all duration-500 group-hover:bg-[#EAF9FA]/[0.03]" />

                            {/* Top Border */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                }}
                                className="absolute left-0 top-0 h-1 bg-[#7ACED4]"
                            />

                            {/* Icon */}
                            <motion.div
                                whileHover={{
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}
                                className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#EAF9FA] bg-white text-3xl text-[#009A9E] shadow-sm transition duration-300 group-hover:scale-110"
                            >
                                ↗
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.6,
                                }}
                                className="relative mt-8 text-2xl font-bold leading-snug text-[#009A9E]"
                            >
                                Investment Strategy
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.6,
                                }}
                                className="relative mt-5 leading-8"
                                style={{ color: "#000" }}
                            >
                                Acquire or invest in assets at a deep
                                discount, infuse fresh capital, and unlock
                                value through resolution plans, financial
                                restructuring, and strategic exits.
                            </motion.p>
                        </motion.div>

                        {/* CARD 2: SECTOR AGNOSTIC */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-[#EAF9FA]/0 transition-all duration-500 group-hover:bg-[#EAF9FA]/[0.03]" />

                            {/* Top Border */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                }}
                                className="absolute left-0 top-0 h-1 bg-[#7ACED4]"
                            />

                            {/* Icon */}
                            <motion.div
                                whileHover={{
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}
                                className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#EAF9FA] bg-white text-3xl text-[#009A9E] shadow-sm transition duration-300 group-hover:scale-110"
                            >
                                ◎
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.6,
                                }}
                                className="relative mt-8 text-2xl font-bold leading-snug text-[#009A9E]"
                            >
                                Sector-Agnostic Investing
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.6,
                                }}
                                className="relative mt-5 leading-8"
                                style={{ color: "#000" }}
                            >
                                Identifying special situation opportunities
                                across real estate, infrastructure,
                                manufacturing, hospitality, pharmaceuticals,
                                and chemicals.
                            </motion.p>
                        </motion.div>

                        {/* LARGE CARD: FUND CORPUS */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl sm:col-span-2 sm:p-10"
                        >
                            {/* Glow */}
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
                                className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#7ACED4]/10 blur-3xl"
                            />

                            {/* Pattern */}
                            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:22px_22px] opacity-[0.03]" />

                            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                                {/* LEFT */}
                                <div className="max-w-xl">
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{
                                            delay: 0.3,
                                            duration: 0.6,
                                        }}
                                        className="text-sm font-semibold uppercase tracking-[0.2em] text-[#009A9E]"
                                    >
                                        Fund Overview
                                    </motion.p>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{
                                            delay: 0.4,
                                            duration: 0.7,
                                        }}
                                        className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-black sm:text-5xl"
                                    >
                                        ₹500 Crore
                                        <span className="mt-2 block text-[#009A9E]">
                                            Fund Corpus
                                        </span>
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 0.6,
                                        }}
                                        className="mt-5 max-w-lg leading-8"
                                        style={{ color: "#000" }}
                                    >
                                        With an additional ₹500 crore
                                        green-shoe option, BSOF is structured
                                        to pursue stressed asset and special
                                        situation investment opportunities.
                                    </motion.p>
                                </div>

                                {/* RIGHT: FUND METRICS */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.7,
                                    }}
                                    className="flex flex-col gap-7 sm:flex-row lg:flex-col"
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <motion.h4
                                            initial={{
                                                scale: 0.5,
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                scale: 1,
                                                opacity: 1,
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                            transition={{
                                                delay: 0.6,
                                                duration: 0.5,
                                                type: "spring",
                                            }}
                                            className="text-3xl font-bold text-[#009A9E] sm:text-4xl"
                                        >
                                            ₹500 Cr
                                        </motion.h4>

                                        <p
                                            className="mt-2 text-sm"
                                            style={{ color: "#000" }}
                                        >
                                            Green-Shoe Option
                                        </p>
                                    </motion.div>

                                    <div className="h-px w-full bg-slate-200 lg:w-40" />

                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <motion.h4
                                            initial={{
                                                scale: 0.5,
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                scale: 1,
                                                opacity: 1,
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                            transition={{
                                                delay: 0.7,
                                                duration: 0.5,
                                                type: "spring",
                                            }}
                                            className="text-3xl font-bold text-[#009A9E] sm:text-4xl"
                                        >
                                            12%
                                        </motion.h4>

                                        <p
                                            className="mt-2 text-sm"
                                            style={{ color: "#000" }}
                                        >
                                            Hurdle Rate
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        className="lg:col-span-5"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.div
                            whileHover={{
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="group relative h-full overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                        >
                            {/* IMAGE */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.7 },
                                }}
                                className="overflow-hidden"
                            >
                                <div
                                    className="h-[260px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 sm:h-[320px]"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop')",
                                    }}
                                />
                            </motion.div>

                            {/* CONTENT */}
                            <div className="p-8 sm:p-10">

                                {/* Badge */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: false,
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.5,
                                    }}
                                    className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]"
                                >
                                    <motion.span
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [1, 0.5, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="h-2 w-2 rounded-full bg-[#009A9E]"
                                    />

                                    Investment Focus
                                </motion.div>

                                {/* Heading */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{
                                        once: false,
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.7,
                                    }}
                                    className="mt-7 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#009A9E] sm:text-4xl"
                                >
                                    Turning Distress
                                    <span className="mt-2 block">
                                        Into Opportunity
                                    </span>
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{
                                        once: false,
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.6,
                                    }}
                                    className="mt-6 leading-8"
                                    style={{ color: "#000" }}
                                >
                                    BSOF targets stressed credit, litigation-
                                    locked assets, and complex restructuring
                                    opportunities where fresh capital and
                                    resolution expertise can help unlock
                                    value.
                                </motion.p>

                                {/* STATS */}
                                <motion.div
                                    className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{
                                        once: false,
                                        amount: 0.3,
                                    }}
                                >
                                    {/* FUND STRUCTURE */}
                                    <motion.div
                                        variants={statVariants}
                                        whileHover={{
                                            scale: 1.04,
                                            borderColor: "#7ACED4",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:border-[#7ACED4]"
                                    >
                                        <p
                                            className="text-sm"
                                            style={{ color: "#000" }}
                                        >
                                            Fund Structure
                                        </p>

                                        <motion.h4
                                            initial={{
                                                scale: 0.8,
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                scale: 1,
                                                opacity: 1,
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                            transition={{
                                                delay: 0.4,
                                                duration: 0.5,
                                                type: "spring",
                                            }}
                                            className="mt-3 text-xl font-bold text-[#009A9E] sm:text-2xl"
                                        >
                                            Category II AIF
                                        </motion.h4>
                                    </motion.div>

                                    {/* GEOGRAPHY */}
                                    <motion.div
                                        variants={statVariants}
                                        whileHover={{
                                            scale: 1.04,
                                            borderColor: "#7ACED4",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:border-[#7ACED4]"
                                    >
                                        <p
                                            className="text-sm"
                                            style={{ color: "#000" }}
                                        >
                                            Investment Approach
                                        </p>

                                        <motion.h4
                                            initial={{
                                                scale: 0.8,
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                scale: 1,
                                                opacity: 1,
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                            transition={{
                                                delay: 0.5,
                                                duration: 0.5,
                                                type: "spring",
                                            }}
                                            className="mt-3 text-xl font-bold text-[#009A9E] sm:text-2xl"
                                        >
                                            Sector Agnostic
                                        </motion.h4>
                                    </motion.div>
                                </motion.div>

                                {/* TARGET ASSET CLASSES */}
                                <div className="mt-10 border-t border-slate-200 pt-8">
                                    <motion.h4
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: false,
                                            amount: 0.3,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                        }}
                                        className="text-xl font-bold text-[#00314A]"
                                    >
                                        Target Asset Classes
                                    </motion.h4>

                                    <motion.div
                                        className="mt-5 space-y-5"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{
                                            once: false,
                                            amount: 0.2,
                                        }}
                                    >
                                        {targetAssets.map((asset) => (
                                            <motion.div
                                                key={asset.title}
                                                variants={cardVariants}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#009A9E]" />

                                                <div>
                                                    <h5 className="font-semibold text-[#009A9E]">
                                                        {asset.title}
                                                    </h5>

                                                    <p
                                                        className="mt-1 text-sm leading-6"
                                                        style={{
                                                            color: "#000",
                                                        }}
                                                    >
                                                        {asset.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
