"use client";

import {
    ShieldCheck,
    Scale,
    FileText,
    BadgeCheck,
    Globe,
    Download,
    ExternalLink,
    Building2,
} from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LegalSection() {

    const documents = [
        {
            title: "Investor Charter",
            description:
                "Investor Charter issued in accordance with SEBI guidelines outlining investor rights, responsibilities and grievance redressal mechanism.",
            icon: FileText,
            slug: "investor-charter",
            button: "View Charter",
            href: "/pdf/investor-charter.pdf",
            external: false,
        },

        {
            title: "SEBI Registration Certificate",
            description:
                "View the official SEBI Registration Certificate issued to BHARAT SPECIAL OPPORTUNITY FUND which is managed by INFIN ALPHA LLP.",
            icon: BadgeCheck,
            button: "View Certificate",
            slug: "sebi-registration",
            href: "/pdf/sebi-registration.pdf",
            external: false,
        },

        {
            title: "Investor Complaint Data",
            description:
                "View investor complaint statistics, complaint status, and grievance redressal information as prescribed under applicable regulatory requirements.",
            icon: FileText,
            slug: "investor-complaint-data",
            button: "View Details",
            href: "/pdf/investor-complaint-data.pdf",
            external: false,
        },

        {
            title: "SEBI SCORES Portal",
            description:
                "Lodge and track investor complaints through SEBI's official SCORES grievance redressal portal.",
            icon: Globe,
            button: "Visit Portal",
            href: "https://scores.sebi.gov.in",
            external: true,
        },
    ];

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

    const legalBlockVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const complianceCardVariants = {
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
                {/* Glow */}
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

                {/* Pattern */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.04 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:24px_24px]"
                />

                {/* CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex items-center justify-center text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <div className="max-w-5xl mx-auto">
                            {/* Badge */}
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
                                Legal & Compliance
                            </motion.div>

                            {/* Heading */}
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
                                className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white"
                            >
                                Regulatory
                                <span className="block mt-2 text-[#7ACED4]">
                                    Disclosures
                                </span>
                            </motion.h1>

                            {/* Paragraph */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-9 text-slate-300"
                            >
                                Transparency, investor protection and regulatory compliance
                                are at the core of INFIN ALPHA LLP.

                                Access our Investor Charter, SEBI Registration Certificate
                                and the official SCORES Portal for investor grievance redressal.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* MAIN SECTION */}
            <div className="relative z-10 pb-20 sm:pb-24 pt-[40px] sm:pt-[70px] lg:pt-[100px]" style={{ marginTop: "80px" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {/* LEFT SIDE */}
                        <motion.div
                            className="lg:col-span-8 flex"
                            variants={fadeLeft}
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
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
                                    className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#EAF9FA]/10 blur-3xl rounded-full"
                                />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]"
                                    >
                                        <Scale size={16} />
                                        Regulatory Disclosure
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#009A9E]"
                                    >
                                        Important Legal
                                        Information
                                    </motion.h2>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="mt-6 text-base sm:text-lg leading-8 text-slate-700"
                                    >
                                        The information provided on this website
                                        is intended solely for informational purposes
                                        and does not constitute an offer to sell,
                                        solicitation, recommendation,
                                        or invitation to invest in any securities,
                                        investment products, or financial instruments.
                                    </motion.p>

                                    {/* CONTENT BLOCKS */}
                                    <motion.div
                                        className="mt-10 space-y-6"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        <motion.div
                                            className="mt-10 grid gap-6"
                                            variants={staggerContainer}
                                        >
                                            {documents.map((doc, index) => {
                                                const Icon = doc.icon;

                                                return (
                                                    <motion.div
                                                        key={index}
                                                        variants={legalBlockVariants}
                                                        whileHover={{
                                                            y: -8,
                                                            transition: { duration: 0.3 },
                                                        }}
                                                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition"
                                                    >
                                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                                                            <div className="flex gap-5">

                                                                <div className="w-14 h-14 rounded-2xl bg-[#EAF9FA] flex items-center justify-center shrink-0">
                                                                    <Icon
                                                                        size={28}
                                                                        className="text-[#009A9E]"
                                                                    />
                                                                </div>

                                                                <div className="flex-1">

                                                                    <h3 className="text-2xl font-bold text-[#00314A]">
                                                                        {doc.title}
                                                                    </h3>

                                                                    <p className="mt-3 text-slate-600 leading-7">
                                                                        {doc.description}
                                                                    </p>

                                                                    {/* Button */}
                                                                    <Link
                                                                        href={
                                                                            doc.external
                                                                                ? doc.href
                                                                                : `/pdf-viewer/${doc.slug}`
                                                                        }
                                                                        target={doc.external ? "_blank" : "_self"}
                                                                        rel={doc.external ? "noopener noreferrer" : undefined}
                                                                        className="inline-flex items-center gap-2 mt-6 bg-[#009A9E] text-white px-6 py-3 rounded-xl hover:bg-[#00314A] transition-all duration-300"
                                                                    >
                                                                        {doc.button}

                                                                        {doc.external ? (
                                                                            <ExternalLink size={18} />
                                                                        ) : (
                                                                            <FileText size={18} />
                                                                        )}
                                                                    </Link>

                                                                </div>

                                                            </div>

                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            className="lg:col-span-4 flex"
                            variants={fadeRight}
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 lg:p-10 shadow-2xl text-slate-300 h-full flex flex-col"
                                style={{
                                    background: "linear-gradient(135deg, #F8FCFC 0%, #FFFFFF 100%)",
                                }}
                            >
                                {/* Glow */}
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

                                {/* Pattern */}
                                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]"
                                    >
                                        Trusted & Transparent
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.03em] text-[#00314A]"
                                    >
                                        Investor Confidence
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="mt-6 text-sm sm:text-base leading-8 text-slate-700"
                                    >
                                        INFIN ALPHA LLP is committed to maintaining transparency and regulatory excellence.

                                        We follow a structured compliance framework to ensure investor confidence, ethical practices, and adherence to applicable SEBI regulations.
                                    </motion.p>

                                    {/* STATS */}
                                    <motion.div
                                        className="mt-10 grid gap-3"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        <div className="mt-5 space-y-4">

                                            <div className="rounded-2xl border border-[#D5F3F5] bg-[#F8FCFC] p-5">
                                                <h4 className="font-semibold text-[#00314A]">
                                                    Regulatory Compliance
                                                </h4>

                                                <p className="mt-2 text-sm text-slate-600 leading-7">
                                                    Operates in accordance with applicable SEBI regulations and compliance standards.
                                                </p>
                                            </div>

                                            <div className="rounded-2xl border border-[#D5F3F5] bg-[#F8FCFC] p-5">
                                                <h4 className="font-semibold text-[#00314A]">
                                                    Investor Protection
                                                </h4>

                                                <p className="mt-2 text-sm text-slate-600 leading-7">
                                                    Transparent disclosures and investor-first practices remain our highest priority.
                                                </p>
                                            </div>

                                            <div className="rounded-2xl border border-[#D5F3F5] bg-[#F8FCFC] p-5">
                                                <h4 className="font-semibold text-[#00314A]">
                                                    Ethical Standards
                                                </h4>

                                                <p className="mt-2 text-sm text-slate-600 leading-7">
                                                    We are committed to integrity, accountability and responsible financial practices.
                                                </p>
                                            </div>

                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}