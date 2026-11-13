"use client";

import {
    ShieldCheck,
    Users,
    CheckCircle2,
    Landmark,
    Building2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LeadershipSection() {

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

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -80,
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
            y: 50,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const leaderCardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const tagVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const stakeholderVariants = {
        hidden: {
            opacity: 0,
            y: 40,
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
    };

    return (
        <section className="relative overflow-hidden bg-white">

            {/* HERO SECTION */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A]"
                style={{
                    paddingTop: "140px",
                    paddingBottom: "140px",
                }}
            >
                {/* GLOW */}
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
                    className="absolute top-0 left-0 w-72 h-72 bg-[#EAF9FA]/20 blur-3xl rounded-full"
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
                    className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ACED4]/10 blur-3xl rounded-full"
                />

                {/* PATTERN */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.04 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-5xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {/* BADGE */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <ShieldCheck size={16} />
                            </motion.div>
                            Leadership & Governance
                        </motion.div>

                        {/* HEADING */}
                        <motion.h1
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
                            className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white"
                        >
                            Experienced Leadership
                            <span className="block mt-2 text-[#7ACED4]">
                                Institutional Vision
                            </span>
                        </motion.h1>

                        {/* DESCRIPTION */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                        >
                            INFIN ALPHA LLP is led by professionals
                            with deep expertise across investment banking,
                            distressed assets,
                            restructuring,
                            legal-commercial negotiations,
                            and institutional investment management.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* MAIN SECTION */}
            <div
                className="relative z-10 pb-20 sm:pb-24"
                style={{ marginTop: "80px" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* MAIN WRAPPER */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] border border-slate-200 bg-white shadow-2xl"
                    >
                        {/* GLOW */}
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
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EAF9FA]/10 blur-3xl rounded-full"
                        />

                        {/* TOP SECTION */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden bg-gradient-to-br from-[#00314A] via-[#0A3635] to-[#00314A] px-6 sm:px-10 lg:px-14"
                            style={{
                                paddingTop: "80px",
                                paddingBottom: "80px",
                            }}
                        >
                            {/* PATTERN */}
                            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]" />

                            <div className="relative z-10 max-w-5xl">
                                {/* BADGE */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-medium text-[#7ACED4] backdrop-blur-md"
                                >
                                    <Users size={16} />
                                    Executive Leadership
                                </motion.div>

                                {/* HEADING */}
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
                                    className="mt-8 text-3xl sm:text-3xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white"
                                >
                                    Experienced Leaders
                                    <span className="block mt-2 text-[#7ACED4]">
                                        Driving Strategic Value
                                    </span>
                                </motion.h2>

                                {/* DESCRIPTION */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.5, duration: 0.7 }}
                                    className="mt-8 max-w-4xl text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                                >
                                    INFIN ALPHA LLP leadership combines
                                    distressed asset expertise,
                                    restructuring-led execution,
                                    institutional relationships,
                                    and governance-focused investment discipline
                                    to unlock strategic opportunities across India's evolving alternative investment ecosystem.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* CONTENT */}
                        <div className="relative z-10 p-5 sm:p-8 lg:p-12">
                            {/* LEADERSHIP GRID */}
                            <motion.div
                                className="gap-6"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                    alignItems: "stretch",
                                }}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                {[
                                    {
                                        name: "Mr. Aswini Sahoo",
                                        role: "Fund Manager - BSOF",
                                        image: "/Team/AshwaniSir.jpg",
                                        desc: "Mr. Aswini Sahoo, Fund Manager of BSOF, brings over 25 years of experience in private credit, special situations, and stressed asset investing.",
                                        tags: [
                                            "Private Credit",
                                            "Special Situations",
                                            "Restructuring",
                                            "Distressed Assets",
                                        ],
                                    },
                                    {
                                        name: "Ms. Manisha Pathak",
                                        role: "INFIN ALPHA LLP",
                                        image:
                                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
                                        desc: "Experienced professional supporting strategic investment initiatives, institutional coordination, governance, and operational leadership functions within INFIN ALPHA LLP.",
                                    },
                                    {
                                        name: "Ms. Karuna Sharma",
                                        role: "INFIN ALPHA LLP",
                                        image:
                                            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop",
                                        desc: "Leadership professional contributing towards investment operations, strategic coordination, institutional communication, and execution support across key initiatives.",
                                    },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={leaderCardVariants}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.02,
                                            borderColor: "#7ACED4",
                                            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl hover:shadow-2xl hover:border-[#7ACED4] transition-all duration-500 flex flex-col h-full"
                                    >
                                        {/* IMAGE */}
                                        <div
                                            className="relative overflow-hidden"
                                            style={{
                                                height: "320px",
                                                minHeight: "320px",
                                                maxHeight: "320px",
                                            }}
                                        >
                                            <motion.img
                                                initial={{ scale: 1.1, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />

                                            {/* OVERLAY */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                                            {/* BADGE */}
                                            <motion.div
                                                initial={{ opacity: 0, y: -20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                                                className="absolute top-5 left-5"
                                            >
                                                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg">
                                                    {item.role}
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex flex-col flex-1 p-6 sm:p-8">
                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                                className="text-2xl sm:text-3xl font-bold text-[#009A9E] leading-tight"
                                            >
                                                {item.name}
                                            </motion.h3>

                                            <motion.div
                                                initial={{ scaleX: 0, opacity: 0 }}
                                                whileInView={{ scaleX: 1, opacity: 1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4 + idx * 0.1, duration: 0.8 }}
                                                className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#EAF9FA] to-emerald-500 origin-left"
                                            />

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                                                className="mt-6 text-sm sm:text-base leading-8 flex-1"
                                                style={{ color: "#000000" }}
                                            >
                                                {item.desc}
                                            </motion.p>

                                            {/* TAGS ONLY FOR FIRST CARD */}
                                            {item.tags && (
                                                <motion.div
                                                    className="mt-8 flex flex-wrap gap-3"
                                                    variants={staggerContainer}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: false, amount: 0.3 }}
                                                >
                                                    {item.tags.map((tag, index) => (
                                                        <motion.span
                                                            key={index}
                                                            variants={tagVariants}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                backgroundColor: "#009A9E",
                                                                color: "#FFFFFF",
                                                                borderColor: "#009A9E",
                                                                transition: { duration: 0.3 },
                                                            }}
                                                            className="rounded-full bg-[#EAF9FA] border border-[#D5F3F5] px-4 py-2 text-sm font-medium text-[#00314A] cursor-default"
                                                        >
                                                            {tag}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* IC SECTION */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-8"
                            >
                                <div className="relative overflow-hidden rounded-[36px] p-6 sm:p-8 lg:p-10 text-white shadow-2xl" style={{ background: "#F8FCFC" }}>
                                    {/* GLOW */}
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
                                        className="absolute top-0 right-0 w-72 h-72 bg-[#EAF9FA]/20 blur-3xl rounded-full"
                                    />

                                    {/* PATTERN */}
                                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]" />

                                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
                                        {/* LEFT */}
                                        <motion.div
                                            className="lg:col-span-5"
                                            variants={fadeLeft}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-sm font-semibold text-[#00314A]"
                                            >
                                                Investment Committee
                                            </motion.div>

                                            <motion.h3
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3, duration: 0.7 }}
                                                className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-[#00314A]"
                                            >
                                                IC Composition
                                                & Governance
                                            </motion.h3>
                                        </motion.div>

                                        {/* RIGHT */}
                                        <motion.div
                                            className="lg:col-span-7"
                                            variants={fadeRight}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.3 }}
                                        >
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.4, duration: 0.6 }}
                                                className="text-white/80 text-base sm:text-lg leading-9"
                                                style={{ color: "#000000" }}
                                            >
                                                Investment Committee composition,
                                                institutional governance framework,
                                                strategic oversight,
                                                and committee credentials
                                                are currently under development (TBD & WIP).
                                            </motion.p>

                                            {/* FEATURES */}
                                            <motion.div
                                                className="mt-8 grid sm:grid-cols-2 gap-4"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.3 }}
                                            >
                                                {[
                                                    "Institutional Governance",
                                                    "Investment Oversight",
                                                    "Risk Management",
                                                    "Strategic Execution",
                                                ].map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        variants={cardVariants}
                                                        whileHover={{
                                                            scale: 1.05,
                                                            backgroundColor: "rgba(0,154,158,0.1)",
                                                            borderColor: "#009A9E",
                                                            transition: { duration: 0.3 },
                                                        }}
                                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                                    >
                                                        <motion.div
                                                            animate={{
                                                                scale: [1, 1.2, 1],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay: idx * 0.2,
                                                            }}
                                                        >
                                                            <CheckCircle2
                                                                className="text-[#7ACED4] shrink-0"
                                                                size={18}
                                                            />
                                                        </motion.div>
                                                        <p className="text-sm sm:text-base text-black/90">
                                                            {item}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* STAKEHOLDERS */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mt-16"
                            >
                                {/* HEADING */}
                                <motion.div
                                    className="text-center"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <motion.div
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-sm font-semibold text-[#00314A]"
                                    >
                                        <Landmark size={16} />
                                        Key Stakeholders
                                    </motion.div>

                                    <motion.h3
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
                                        className="mt-6 text-4xl sm:text-5xl font-bold leading-tight"
                                    >
                                        <span style={{ color: "#000000" }}>
                                            Strategic Ecosystem
                                        </span>
                                        <span className="block mt-2 text-[#009A9E]">
                                            Institutional Partners
                                        </span>
                                    </motion.h3>
                                </motion.div>

                                {/* GRID */}
                                <motion.div
                                    className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.1 }}
                                >
                                    {[
                                        {
                                            title: "Axis Bank Ltd.",
                                            subtitle: "Banking Partner",
                                        },
                                        {
                                            title: "EJ Legal",
                                            subtitle: "Legal Advisor",
                                        },
                                        {
                                            title: "Vistra",
                                            subtitle: "Trustee Services",
                                        },
                                        {
                                            title: "Axis Bank",
                                            subtitle: "Custodian",
                                        },
                                        {
                                            title: "CAMS",
                                            subtitle: "R & TA Agent",
                                        },
                                        {
                                            title: "CAMS",
                                            subtitle: "Fund Accounting & Administration",
                                        },
                                        {
                                            title: "MPCS",
                                            subtitle: "Tax & SEBI Advisory",
                                        },
                                        {
                                            title: "Auditor",
                                            subtitle: "TBD",
                                        },
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={stakeholderVariants}
                                            whileHover={{
                                                y: -10,
                                                scale: 1.05,
                                                borderColor: "#7ACED4",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                                transition: { duration: 0.3 },
                                            }}
                                            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#7ACED4] transition-all duration-500"
                                        >
                                            {/* ICON */}
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-14 h-14 rounded-2xl border-2 border-[#EAF9FA] text-[#009A9E] flex items-center justify-center bg-[#EAF9FA]"
                                            >
                                                <Building2 size={24} />
                                            </motion.div>

                                            {/* TITLE */}
                                            <motion.h4
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.2 + idx * 0.05, duration: 0.6 }}
                                                className="mt-6 text-2xl font-bold text-[#009A9E] leading-tight"
                                            >
                                                {item.title}
                                            </motion.h4>

                                            {/* SUBTITLE */}
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3 + idx * 0.05, duration: 0.6 }}
                                                className="mt-4 text-sm leading-7"
                                                style={{ color: "#000000" }}
                                            >
                                                {item.subtitle}
                                            </motion.p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}