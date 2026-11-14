
"use client";

import {
    Landmark,
    Building2,
    Scale,
    BriefcaseBusiness,
    TrendingUp,
    Handshake,
    ShieldCheck,
    ArrowRight,
    Wallet,
    RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";

export default function OpportunitySection() {
    const opportunities = [
        {
            icon: <Landmark size={27} />,
            title: "Stressed Loan Acquisitions",
            description:
                "Acquiring stressed loans and security receipts through banks, asset reconstruction companies (ARCs) and secondary-market opportunities.",
        },
        {
            icon: <Building2 size={27} />,
            title: "Special Situation Financing",
            description:
                "Bridge financing, promoter stake acquisition and interim capital for companies with specific funding or liquidity requirements.",
        },
        {
            icon: <RefreshCw size={27} />,
            title: "Refinancing & Turnaround",
            description:
                "Structured refinancing, working capital and additional project funding to support business continuity, restructuring and recovery.",
        },
        {
            icon: <Scale size={27} />,
            title: "Resolution-Led Opportunities",
            description:
                "Resolution participation, pre-IBC settlements, one-time settlements and litigation-linked opportunities where applicable.",
        },
    ];

    const sourcingChannels = [
        {
            icon: <Landmark size={21} />,
            title: "Banks & ARCs",
            description:
                "Sourcing stressed loans and security receipts through banks and asset reconstruction companies.",
        },
        {
            icon: <BriefcaseBusiness size={21} />,
            title: "Off-Market Transactions",
            description:
                "Exploring mid-market opportunities beyond crowded insolvency auction processes.",
        },
        {
            icon: <Handshake size={21} />,
            title: "Direct Promoter Engagement",
            description:
                "Evaluating promoter-led transactions, bridge finance and one-time settlement opportunities.",
        },
    ];

    const valueCreation = [
        {
            number: "01",
            icon: <Wallet size={23} />,
            title: "Invest at Attractive Valuations",
            description:
                "Invest in or acquire assets at a deep discount where the opportunity supports the fund's investment objectives.",
        },
        {
            number: "02",
            icon: <TrendingUp size={23} />,
            title: "Infuse Fresh Capital",
            description:
                "Deploy structured capital to support refinancing, working capital, project completion or business revival.",
        },
        {
            number: "03",
            icon: <ShieldCheck size={23} />,
            title: "Unlock Value",
            description:
                "Pursue financial restructuring, resolution and strategic exits to realise value from investments.",
        },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: "easeOut" },
        },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -45 },
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
        hidden: { opacity: 0, x: 45 },
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
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: "easeOut" },
        },
    };

    return (
        <section
            id="india-opportunity"
            className="relative overflow-hidden bg-[#F5F7FA] py-16 lg:py-20"
        >
            {/* Background Glow */}
            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#D5F3F5] blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left Side */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <span className="inline-flex items-center rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                            India’s Emerging Opportunity
                        </span>

                        <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Unlocking Value Across
                            <span className="mt-2 block text-[#009A9E]">
                                Stressed & Special
                            </span>
                            Situation Assets
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                            India’s stressed-asset ecosystem presents
                            opportunities to invest in mid-market companies
                            facing financial or operational challenges.
                            BSOF focuses on identifying these opportunities
                            through structured credit, acquisitions,
                            restructuring, turnaround and resolution strategies.
                        </p>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:pt-12"
                    >
                        <h3 className="text-xl font-bold text-[#00314A] sm:text-2xl">
                            Opportunities Across Sectors
                        </h3>

                        <p className="mt-4 text-base leading-8 text-slate-600">
                            The fund follows a sector-agnostic approach, with
                            a focus on real estate, infrastructure,
                            manufacturing, hospitality, pharmaceuticals and
                            chemicals. Investment opportunities may involve
                            secured credit, preference shares, resolution-linked
                            equity and other structured credit instruments,
                            as described in the fund presentation.
                        </p>

                        {/* Sector Tags */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {[
                                "Real Estate",
                                "Infrastructure",
                                "Manufacturing",
                                "Hospitality",
                                "Pharmaceuticals",
                                "Chemicals",
                            ].map((sector) => (
                                <span
                                    key={sector}
                                    className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700"
                                >
                                    {sector}
                                </span>
                            ))}
                        </div>

                        {/* Investment Focus Highlight */}
                        <div className="mt-7 flex items-start gap-4 rounded-2xl border border-[#D5F3F5] bg-white p-5 shadow-sm">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                <TrendingUp size={23} />
                            </div>

                            <div>
                                <h4 className="font-bold text-[#00314A]">
                                    Two Complementary Investment Approaches
                                </h4>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Stressed investments focused on
                                    restructuring and turnaround, alongside
                                    high-yield structured credit designed
                                    around secured returns and downside
                                    protection.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Opportunity Cards */}
                <motion.div
                    className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {opportunities.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.25 },
                            }}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-7"
                        >
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#EAF9FA]/0 to-[#7ACED4]/0 transition-colors duration-300 group-hover:to-[#7ACED4]/10"
                            />

                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D5F3F5] bg-[#EAF9FA] text-[#009A9E] transition-transform duration-300 group-hover:scale-105">
                                {item.icon}
                            </div>

                            <h3 className="relative mt-6 text-xl font-bold leading-snug text-slate-900">
                                {item.title}
                            </h3>

                            <p className="relative mt-3 text-sm leading-7 text-slate-600">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sourcing Strategy */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="mt-16 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 lg:mt-20 lg:p-10"
                >
                    <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.5fr] lg:gap-12">
                        <div>
                            <span className="inline-flex rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]">
                                Opportunity Sourcing
                            </span>

                            <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                                Finding Opportunities Beyond Conventional Channels
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                BSOF’s presentation highlights a mid-market
                                focus and multiple channels for sourcing
                                stressed and special-situation investments.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {sourcingChannels.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                        {item.icon}
                                    </div>

                                    <h4 className="mt-4 font-bold text-[#00314A]">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* How Value Is Created */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] p-7 sm:p-9 lg:p-12"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#7ACED4]/10 blur-3xl"
                    />

                    <div className="relative z-10">
                        <div className="max-w-2xl">
                            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#7ACED4]">
                                How We Create Value
                            </span>

                            <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                                From Investment to Value Realisation
                            </h3>

                            <p className="mt-4 text-base leading-7 text-slate-300">
                                The fund presentation outlines a three-step
                                approach to pursuing value across stressed
                                and special-situation investments.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {valueCreation.map((item, index) => (
                                <motion.div
                                    key={item.number}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ delay: index * 0.12 }}
                                    className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7ACED4]/10 text-[#7ACED4]">
                                            {item.icon}
                                        </div>

                                        <span className="text-2xl font-bold text-white/25">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h4 className="mt-5 text-lg font-bold text-white">
                                        {item.title}
                                    </h4>

                                    <p className="mt-3 text-sm leading-7 text-slate-300">
                                        {item.description}
                                    </p>

                                    {index < valueCreation.length - 1 && (
                                        <div
                                            aria-hidden="true"
                                            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-[#7ACED4] md:block"
                                        >
                                            <ArrowRight size={22} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
