
"use client";

import { useRef } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Landmark,
    Factory,
    BriefcaseBusiness,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FocusAreasSection() {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction === "left" ? -340 : 340,
                behavior: "smooth",
            });
        }
    };

    // Content aligned with page 6 of the BSOF pitch deck
    const focusAreas = [
        {
            icon: <Landmark size={24} />,
            title: "Stressed Corporate Debt",
            description:
                "NPAs, IBC cases, and stressed loan portfolios sourced through banks and Asset Reconstruction Companies (ARCs).",
            image:
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: <Building2 size={24} />,
            title: "Viable but Overleveraged Companies",
            description:
                "Businesses with strong core operations but high debt, offering opportunities for financial restructuring and recovery.",
            image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: <Factory size={24} />,
            title: "Stalled / Incomplete Projects",
            description:
                "Infrastructure, real estate, and manufacturing projects with revival potential through structured capital solutions.",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: <BriefcaseBusiness size={24} />,
            title: "Promoter Financing",
            description:
                "Financing solutions addressing founder- and promoter-level financial distress and supporting resolution strategies.",
            image:
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Asset-Backed Distress",
            description:
                "Distressed investment opportunities secured by tangible assets, including plants, land, and operating infrastructure.",
            image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const fadeLeft = {
        hidden: { opacity: 0, x: -60 },
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
        hidden: { opacity: 0, x: 60 },
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
                staggerChildren: 0.13,
                delayChildren: 0.15,
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

    const buttonVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
            id="focus-areas"
        >
            {/* Background Glow */}
            <motion.div
                aria-hidden="true"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-[#D5F3F5]/40 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">

                    {/* LEFT CONTENT */}
                    <motion.div
                        className="lg:col-span-4"
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]"
                        >
                            Target Asset Classes
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                            className="mt-5 text-3xl font-bold leading-tight text-[#00314A] sm:text-4xl"
                        >
                            Investing in
                            <span className="block">
                                Stressed Assets.
                            </span>
                            <span className="block text-[#009A9E]">
                                Creating Value.
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="mt-5 text-base leading-7 text-slate-600 sm:text-lg"
                        >
                            Bharat Special Opportunity Fund (BSOF) targets
                            stressed and special situation mid-market companies
                            through structured credit, acquisition, turnaround,
                            and resolution strategies.
                        </motion.p>

                        {/* Supporting information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.45, duration: 0.7 }}
                            className="mt-7 border-l-2 border-[#009A9E] pl-5"
                        >
                            <p className="text-sm font-semibold uppercase tracking-wider text-[#00314A]">
                                Sector-Agnostic Approach
                            </p>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Focused on identifying opportunities across
                                industries through disciplined investment,
                                restructuring, and resolution-led value creation.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SLIDER */}
                    <motion.div
                        className="min-w-0 lg:col-span-8"
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <motion.div
                            ref={sliderRef}
                            className="flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden pb-5 scroll-smooth scrollbar-hide sm:gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {focusAreas.map((item, index) => (
                                <motion.article
                                    key={item.title}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -7,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="group relative h-[390px] min-w-[255px] flex-shrink-0 snap-start overflow-hidden rounded-[28px] bg-[#00314A] sm:min-w-[270px] lg:h-[410px] lg:min-w-[260px]"
                                >
                                    {/* Background Image */}
                                    <motion.div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url("${item.image}")`,
                                        }}
                                        whileHover={{ scale: 1.07 }}
                                        transition={{ duration: 0.7 }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#00314A] via-[#00314A]/75 to-[#00314A]/10" />

                                    {/* Decorative Glow */}
                                    <motion.div
                                        aria-hidden="true"
                                        animate={{
                                            opacity: [0.05, 0.2, 0.05],
                                            scale: [1, 1.15, 1],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.25,
                                        }}
                                        className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#7ACED4]/30 blur-3xl"
                                    />

                                    {/* Card Content */}
                                    <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
                                        {/* Number */}
                                        <span className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#7ACED4]">
                                            0{index + 1} / 05
                                        </span>

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{
                                                rotate: [0, -6, 6, 0],
                                                scale: 1.06,
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#7ACED4] backdrop-blur-md"
                                        >
                                            {item.icon}
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="mt-6 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#7ACED4] sm:text-2xl">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-4 text-sm leading-6 text-slate-200 sm:text-[15px]">
                                            {item.description}
                                        </p>

                                        {/* Bottom Accent */}
                                        <div className="mt-5 h-1 w-12 rounded-full bg-[#7ACED4] transition-all duration-500 group-hover:w-20" />
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>

                        {/* Slider Controls */}
                        <motion.div
                            className="mt-2 flex items-center justify-between"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-sm text-slate-500">
                                Explore our investment focus
                            </p>

                            <div className="flex items-center gap-3">
                                <motion.button
                                    type="button"
                                    aria-label="Scroll focus areas left"
                                    variants={buttonVariants}
                                    whileHover={{
                                        scale: 1.08,
                                        backgroundColor: "#009A9E",
                                        color: "#FFFFFF",
                                    }}
                                    whileTap={{ scale: 0.94 }}
                                    onClick={() => scroll("left")}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#00314A] shadow-sm transition-colors duration-300 hover:border-[#009A9E]"
                                >
                                    <ArrowLeft size={19} />
                                </motion.button>

                                <motion.button
                                    type="button"
                                    aria-label="Scroll focus areas right"
                                    variants={buttonVariants}
                                    whileHover={{
                                        scale: 1.08,
                                        backgroundColor: "#009A9E",
                                        color: "#FFFFFF",
                                    }}
                                    whileTap={{ scale: 0.94 }}
                                    onClick={() => scroll("right")}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#00314A] shadow-sm transition-colors duration-300 hover:border-[#009A9E]"
                                >
                                    <ArrowRight size={19} />
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
