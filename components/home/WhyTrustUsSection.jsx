
"use client";

import {
    ShieldCheck,
    Network,
    TrendingUp,
    BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyTrustUsSection() {
    const trustPoints = [
        {
            icon: BriefcaseBusiness,
            title: "Industry Knowledge",
            description:
                "Deep expertise in special situation and stressed asset resolution, debt restructuring, IBC-led recoveries, and strategic high-yield equity deals.",
        },
        {
            icon: Network,
            title: "Strong Sourcing Network",
            description:
                "Established relationships with banks, Asset Reconstruction Companies (ARCs), resolution professionals, and institutional investors to source stressed asset opportunities.",
        },
        {
            icon: TrendingUp,
            title: "Micro-Trend Intelligence",
            description:
                "Identifying turnaround-ready companies and recognising opportunities arising from systemic dislocations in credit markets.",
        },
        {
            icon: ShieldCheck,
            title: "Disciplined Risk Management",
            description:
                "A disciplined investment process focused on structured entry, recovery-oriented exit strategies, and robust downside protection.",
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
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.14,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 35,
            scale: 0.96,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative isolate overflow-hidden bg-[#00314A] py-20 text-white sm:py-24 lg:py-28">
            {/* BACKGROUND IMAGE */}
            <motion.div
                aria-hidden="true"
                initial={{ scale: 1.06, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.4,
                    ease: "easeOut",
                }}
                className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
                }}
            />

            {/* DARK OVERLAY */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-20 bg-[#00314A]/95"
            />

            {/* ANIMATED BACKGROUND GLOW */}
            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1, 1.18, 1],
                    opacity: [0.12, 0.25, 0.12],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -left-32 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#009A9E]/30 blur-3xl"
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
                className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-[450px] w-[450px] rounded-full bg-[#7ACED4]/20 blur-3xl"
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* SECTION INTRO */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mx-auto max-w-4xl text-left lg:text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-[#7ACED4]/25 bg-[#009A9E]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                    >
                        <motion.span
                            animate={{
                                scale: [1, 1.35, 1],
                                opacity: [1, 0.55, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="h-2 w-2 rounded-full bg-[#7ACED4]"
                        />

                        Why Trust INFIN Alpha
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        className="mt-7 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                    >
                        Expertise That Drives{" "}
                        <span className="text-[#7ACED4]">
                            Special Situation
                        </span>{" "}
                        Investing
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="mx-0 mt-6 max-w-3xl text-base leading-8 text-slate-300 lg:mx-auto sm:text-lg"
                    >
                        INFIN Alpha's investment approach is built around
                        stressed asset expertise, institutional sourcing
                        relationships, the identification of turnaround
                        opportunities, and disciplined risk management.
                        These capabilities support the evaluation and
                        execution of complex investment situations.
                    </motion.p>
                </motion.div>

                {/* TRUST CARDS SLIDER */}
                <div className="relative mt-14 sm:mt-16 lg:mt-20">
                    {/* Subtle Slider Edge Effects */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-[#00314A] to-transparent sm:block lg:w-20"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-[#00314A] to-transparent sm:block lg:w-20"
                    />

                    <div className="overflow-hidden py-4">
                        <motion.div
                            className="flex w-max gap-5 sm:gap-6"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                duration: 36,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            whileHover={{
                                animationPlayState: "paused",
                            }}
                            style={{
                                willChange: "transform",
                            }}
                        >
                            {[...trustPoints, ...trustPoints].map(
                                (item, index) => {
                                    const Icon = item.icon;
                                    const originalIndex =
                                        index % trustPoints.length;

                                    return (
                                        <motion.article
                                            key={`${item.title}-${index}`}
                                            variants={cardVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{
                                                once: true,
                                                amount: 0.15,
                                            }}
                                            whileHover={{
                                                y: -8,
                                                borderColor:
                                                    "rgba(122,206,212,0.4)",
                                                transition: {
                                                    duration: 0.25,
                                                },
                                            }}
                                            className="group relative flex min-h-[340px] w-[285px] shrink-0 flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.08] sm:w-[310px] sm:p-7 lg:w-[330px] lg:rounded-[32px]"
                                        >
                                            {/* Card Glow */}
                                            <motion.div
                                                aria-hidden="true"
                                                animate={{
                                                    opacity: [
                                                        0.03,
                                                        0.12,
                                                        0.03,
                                                    ],
                                                    scale: [1, 1.15, 1],
                                                }}
                                                transition={{
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay:
                                                        originalIndex * 0.4,
                                                }}
                                                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#009A9E]/40 blur-3xl"
                                            />

                                            {/* Card Number */}
                                            <span
                                                aria-hidden="true"
                                                className="absolute right-5 top-4 text-6xl font-bold text-white/[0.055] transition-colors duration-300 group-hover:text-[#7ACED4]/10"
                                            >
                                                {String(
                                                    originalIndex + 1
                                                ).padStart(2, "0")}
                                            </span>

                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <motion.div
                                                    whileHover={{
                                                        scale: 1.08,
                                                        rotate: 4,
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7ACED4]/20 bg-gradient-to-br from-[#009A9E] to-[#00314A] text-[#7ACED4] shadow-lg shadow-[#009A9E]/10"
                                                >
                                                    <Icon
                                                        size={25}
                                                        strokeWidth={1.8}
                                                        aria-hidden="true"
                                                    />
                                                </motion.div>

                                                {/* Title */}
                                                <h3 className="mt-7 text-xl font-bold leading-snug text-white sm:text-2xl">
                                                    {item.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Bottom Accent */}
                                            <div className="relative z-10 mt-7 h-px w-full origin-left bg-gradient-to-r from-[#009A9E]/70 via-[#7ACED4]/30 to-transparent" />
                                        </motion.article>
                                    );
                                }
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* BOTTOM TRUST PILLARS */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
                >
                    {[
                        "Industry Expertise",
                        "Institutional Relationships",
                        "Turnaround Opportunity Identification",
                        "Downside Protection Focus",
                    ].map((item) => (
                        <motion.div
                            key={item}
                            variants={cardVariants}
                            whileHover={{
                                y: -4,
                                borderColor:
                                    "rgba(122,206,212,0.35)",
                            }}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 transition-colors duration-300"
                        >
                            <ShieldCheck
                                size={19}
                                className="shrink-0 text-[#7ACED4]"
                                aria-hidden="true"
                            />

                            <span className="text-sm font-medium leading-6 text-slate-200">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
