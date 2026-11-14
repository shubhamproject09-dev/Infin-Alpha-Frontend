
"use client";

import {
    ArrowRight,
    CircleDollarSign,
    BriefcaseBusiness,
    Scale,
    TrendingUp,
    Landmark,
    Building2,
    RefreshCw,
    Wallet,
    ShieldCheck,
    HandCoins,
    FileSearch,
} from "lucide-react";
import { motion } from "framer-motion";

export default function InvestmentStrategySection() {
    const specialSituationStrategies = [
        {
            icon: BriefcaseBusiness,
            title: "Promoter Equity Acquisition",
            description:
                "Acquiring equity stakes from promoters, supporting increased promoter holdings and buybacks at undervalued prices.",
        },
        {
            icon: RefreshCw,
            title: "Refinancing & Bridge Finance",
            description:
                "Refinancing existing debt or providing bridge financing against anticipated monetisation.",
        },
        {
            icon: Building2,
            title: "Real Estate Last-Mile Funding",
            description:
                "Providing take-out financing and project top-up funding to help address last-mile capital requirements.",
        },
        {
            icon: Wallet,
            title: "Working Capital Funding",
            description:
                "Supporting high-growth, asset-light businesses with margin money and bridge funding ahead of an equity raise.",
        },
        {
            icon: ShieldCheck,
            title: "Collateral-Backed Structured Credit",
            description:
                "Structuring secured credit against land, real estate, shares and other tangible assets for acquisitions, refinancing, working capital or growth.",
        },
    ];

    const stressedAssetStrategies = [
        {
            icon: HandCoins,
            title: "Interim Finance",
            description:
                "Short-tenor working capital during insolvency or restructuring, supported by a first charge on cash flows or assets.",
        },
        {
            icon: Landmark,
            title: "Loan Buyouts & Security Receipts",
            description:
                "Acquiring loan exposures or security receipts at discounted valuations through asset reconstruction company channels.",
        },
        {
            icon: Scale,
            title: "Litigation Funding",
            description:
                "Funding selected litigation-related opportunities where the investment is linked to the underlying resolution process.",
        },
        {
            icon: BriefcaseBusiness,
            title: "Buyer Financing",
            description:
                "Financing strategic buyers and investors pursuing stressed-asset acquisition opportunities.",
        },
        {
            icon: TrendingUp,
            title: "Turnaround Working Capital",
            description:
                "Providing working capital against monitored receivables and inventory to help stabilise business cash flows.",
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
            x: -40,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
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
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const StrategyCard = ({ item, index }) => {
        const Icon = item.icon;

        return (
            <motion.article
                variants={cardVariants}
                whileHover={{
                    y: -6,
                    transition: { duration: 0.25 },
                }}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#009A9E]/40 hover:shadow-xl hover:shadow-[#00314A]/5 sm:p-7"
            >
                {/* Card Number */}
                <span
                    aria-hidden="true"
                    className="absolute right-5 top-3 text-6xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-[#EAF9FA] sm:text-7xl"
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <motion.div
                    whileHover={{
                        scale: 1.08,
                        rotate: 4,
                    }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white shadow-lg shadow-[#009A9E]/15"
                >
                    <Icon size={25} aria-hidden="true" />
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 mt-6 text-lg font-bold leading-snug text-[#00314A] sm:text-xl">
                    {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.description}
                </p>

                {/* Bottom Accent */}
                <motion.div
                    initial={{ width: "2rem" }}
                    whileHover={{ width: "4rem" }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 h-1 rounded-full bg-[#009A9E]"
                />
            </motion.article>
        );
    };

    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
            {/* Background Effects */}
            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.18, 0.32, 0.18],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#7ACED4]/30 blur-3xl"
            />

            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.12, 0.24, 0.12],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-32 top-[42%] h-96 w-96 rounded-full bg-[#009A9E]/15 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* SECTION INTRO */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-[#EAF9FA]/70 p-7 sm:p-10 lg:rounded-[40px] lg:p-16"
                >
                    {/* Intro Glow */}
                    <motion.div
                        aria-hidden="true"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.35, 0.2],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#7ACED4]/30 blur-3xl"
                    />

                    <div className="relative z-10 max-w-4xl">
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-[#009A9E]/20 bg-[#D5F3F5] px-4 py-2 text-sm font-semibold text-[#00314A]"
                        >
                            <motion.span
                                animate={{
                                    scale: [1, 1.35, 1],
                                    opacity: [1, 0.6, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="h-2 w-2 rounded-full bg-[#009A9E]"
                            />
                            Investment Strategy
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeUp}
                            className="mt-7 text-3xl font-bold leading-tight tracking-tight text-[#00314A] sm:text-4xl lg:text-5xl"
                        >
                            Structured Strategies for{" "}
                            <span className="text-[#009A9E]">
                                Special Situations
                            </span>{" "}
                            and Stressed Assets
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg"
                        >
                            Bharat Special Opportunity Fund (BSOF) follows a
                            sector-agnostic approach to special situations and
                            stressed assets. Its investment strategies include
                            structured credit, refinancing, last-mile project
                            funding, interim finance, loan buyouts and
                            turnaround working capital.
                        </motion.p>

                        {/* Focus Tags */}
                        <motion.div
                            variants={staggerContainer}
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            {[
                                "Structured Credit",
                                "Refinancing",
                                "Stressed Assets",
                                "Turnaround Funding",
                            ].map((tag) => (
                                <motion.span
                                    key={tag}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -3,
                                        backgroundColor: "#D5F3F5",
                                    }}
                                    className="rounded-full border border-[#009A9E]/20 bg-white px-4 py-2 text-sm font-medium text-[#00314A] shadow-sm"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* SPECIAL SITUATIONS */}
                <div className="mt-20 lg:mt-24">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                    >
                        <div className="max-w-3xl">
                            <motion.p
                                variants={fadeLeft}
                                className="text-sm font-bold uppercase tracking-[0.18em] text-[#009A9E]"
                            >
                                Strategy 01
                            </motion.p>

                            <motion.h3
                                variants={fadeUp}
                                className="mt-3 text-2xl font-bold leading-tight text-[#00314A] sm:text-3xl lg:text-4xl"
                            >
                                Investment Strategies in Special Situations
                            </motion.h3>

                            <motion.p
                                variants={fadeUp}
                                className="mt-4 max-w-2xl text-base leading-7 text-slate-600"
                            >
                                Flexible financing and investment structures
                                designed around specific capital requirements,
                                collateral and transaction needs.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={fadeRight}
                            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-[#009A9E] md:flex"
                        >
                            <span>Explore the strategies</span>
                            <ArrowRight size={18} aria-hidden="true" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {specialSituationStrategies.map((item, index) => (
                            <StrategyCard
                                key={item.title}
                                item={item}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* STRESSED ASSETS */}
                <div className="mt-20 lg:mt-24">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="mb-10 max-w-3xl"
                    >
                        <motion.p
                            variants={fadeLeft}
                            className="text-sm font-bold uppercase tracking-[0.18em] text-[#009A9E]"
                        >
                            Strategy 02
                        </motion.p>

                        <motion.h3
                            variants={fadeUp}
                            className="mt-3 text-2xl font-bold leading-tight text-[#00314A] sm:text-3xl lg:text-4xl"
                        >
                            Investment Strategy in Stressed Assets
                        </motion.h3>

                        <motion.p
                            variants={fadeUp}
                            className="mt-4 text-base leading-7 text-slate-600"
                        >
                            Targeted financing and acquisition opportunities
                            across insolvency, restructuring, litigation and
                            business turnaround situations.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {stressedAssetStrategies.map((item, index) => (
                            <StrategyCard
                                key={item.title}
                                item={item}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* BOTTOM HIGHLIGHT */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.75,
                        ease: "easeOut",
                    }}
                    className="relative mt-20 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] p-7 sm:p-10 lg:mt-24 lg:rounded-[40px] lg:p-14"
                >
                    {/* Animated Glow */}
                    <motion.div
                        aria-hidden="true"
                        animate={{
                            scale: [1, 1.25, 1],
                            opacity: [0.15, 0.3, 0.15],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#7ACED4]/30 blur-3xl"
                    />

                    <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                        {/* Left Content */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="lg:col-span-5"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7ACED4]">
                                Investment Focus
                            </p>

                            <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                                Flexible Capital. Structured Solutions.
                            </h3>

                            <p className="mt-5 text-base leading-8 text-slate-300">
                                Each opportunity is evaluated in the context
                                of its financing requirements, security,
                                restructuring needs and potential resolution
                                pathway.
                            </p>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
                        >
                            {[
                                {
                                    icon: CircleDollarSign,
                                    title: "Structured Financing",
                                    text: "Secured NCDs and collateral-backed credit structures.",
                                },
                                {
                                    icon: Building2,
                                    title: "Project Funding",
                                    text: "Last-mile and take-out financing for eligible projects.",
                                },
                                {
                                    icon: FileSearch,
                                    title: "Stressed Asset Opportunities",
                                    text: "Loan buyouts, security receipts and selected litigation funding.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Business Stabilisation",
                                    text: "Working capital and financing for restructuring or turnaround situations.",
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -5,
                                            backgroundColor:
                                                "rgba(255,255,255,0.10)",
                                        }}
                                        className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 sm:p-6"
                                    >
                                        <Icon
                                            size={24}
                                            className="text-[#7ACED4]"
                                            aria-hidden="true"
                                        />

                                        <h4 className="mt-4 text-lg font-bold text-white">
                                            {item.title}
                                        </h4>

                                        <p className="mt-2 text-sm leading-7 text-slate-300">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
