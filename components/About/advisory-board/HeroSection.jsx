
"use client";

import { ArrowRight, ShieldCheck, TrendingUp, Scale, Globe2, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";


const advisors = [
    {
        name: "Vivek Dave",
        role: "Global Advisor",
        image: "/Team/VivekSir.jpg",
        expertise: [
            "Global Markets & Investment Advisory",
            "Structured Finance & M&A",
            "International Business Development",
        ],
        description:
            "Brings experience across global markets, portfolio management, structured finance and mergers and acquisitions, with exposure to the UK, Europe, the Middle East and Asia.",
    },
    {
        name: "Pushpendra Singh",
        role: "Global Advisor",
        image: "/Team/PushpendraSir.jpg",
        expertise: [
            "Private Equity & Venture Capital",
            "Cross-Border Investments",
            "Strategic Advisory & Governance",
        ],
        description:
            "Offers over 25 years of experience across venture capital, private equity, M&A and technology investments, supported by relationships across institutional investors and global capital markets.",
    },
    {
        name: "Shruti Gonsalves",
        role: "Senior Advisor",
        image: "/Team/ShrutiMam.jpg",
        expertise: [
            "Financial Services Leadership",
            "Affordable Housing Finance",
            "ESG & Financial Inclusion",
        ],
        description:
            "Brings over 28 years of experience across microfinance, project finance and institution building, with a focus on financial inclusion, strategic partnerships and sustainable development.",
    },
];


const expertise = [
    {
        icon: TrendingUp,
        title: "Investment Perspective",
        description:
            "Strategic insights across private credit, special situations, stressed assets and structured investments to support informed investment decisions.",
    },
    {
        icon: ShieldCheck,
        title: "Governance & Oversight",
        description:
            "A governance-focused approach that supports accountability, compliance, appropriate oversight and the management of potential conflicts of interest.",
    },
    {
        icon: Scale,
        title: "Legal & Regulatory Insight",
        description:
            "Experienced perspectives on corporate law, regulatory matters, dispute resolution and the legal considerations surrounding complex transactions.",
    },
    {
        icon: Globe2,
        title: "Global Market Experience",
        description:
            "Broader market perspectives spanning international investments, institutional relationships, financial services and cross-border opportunities.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -45 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 45 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function AdvisoryBoard() {
    return (
        <main className="relative overflow-hidden bg-white text-[#00314A]">

            {/* ================= HERO SECTION ================= */}

            <section className="relative isolate overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-[#009A9E]/10 blur-[100px]" />
                <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#00314A]/10 blur-[100px]" />

                <div className="mx-auto max-w-7xl px-6 py-15 sm:px-8 lg:py-20">
                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT CONTENT */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#009A9E]/20 bg-[#EAF9FA] px-5 py-2 text-sm font-semibold tracking-wide text-[#009A9E]">
                                <span className="h-2 w-2 rounded-full bg-[#009A9E]" />
                                Advisory Board
                            </span>

                            <h1 className="mt-8 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                                Experience That
                                <br />
                                Shapes{" "}
                                <span className="text-[#009A9E]">
                                    Better Decisions
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                                Independent perspective. Strategic insight.
                                Stronger governance. Our advisory ecosystem
                                brings together experienced professionals
                                across investment management, global markets,
                                corporate law and financial services to support
                                disciplined decision-making and long-term value
                                creation.
                            </p>

                            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                <motion.a
                                    href="#advisors"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#009A9E] px-7 py-4 font-semibold text-white shadow-lg shadow-[#009A9E]/20 transition-colors duration-300 hover:bg-[#00314A]"
                                >
                                    Meet Our Advisors
                                    <ArrowRight size={18} />
                                </motion.a>
                            </div>

                            {/* Trust highlights */}
                            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-200 pt-8">
                                <div>
                                    <p className="text-2xl font-bold text-[#009A9E] sm:text-3xl">
                                        3
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Advisory Board Members
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-[#009A9E] sm:text-3xl">
                                        Multi-disciplinary
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Expertise & Perspectives
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT IMAGE */}
                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative mx-auto w-full max-w-xl"
                        >
                            <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[#009A9E]/20 sm:-right-8 sm:-top-8 sm:h-48 sm:w-48" />

                            <motion.div
                                whileHover={{ scale: 1.015 }}
                                transition={{ duration: 0.4 }}
                                className="relative overflow-hidden rounded-[30px] border border-gray-100 bg-gray-100 shadow-2xl"
                            >

                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                                    alt="Professionals collaborating on strategic business decisions"
                                    className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[570px]"
                                />

                                {/* Professional image overlay */}
                                <div className="absolute inset-0 bg-[#00314A]/25" />

                                {/* Bottom gradient for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00314A]/90 via-[#00314A]/20 to-transparent" />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#00314A]/90 via-[#00314A]/10 to-transparent" />

                                <div className="absolute inset-x-0 bottom-15 p-7 sm:p-9">
                                    <div className="mb-4 h-1 w-14 rounded-full bg-[#7ACED4]" />

                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ACED4]">
                                        INFIN ALPHA
                                    </p>

                                    <h2 className="mt-3 max-w-sm text-2xl font-bold leading-snug text-white sm:text-3xl">
                                        Insight That Informs.
                                        Experience That Matters.
                                    </h2>

                                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                                        Supporting sound judgment across
                                        complex investment situations.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Floating governance card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -bottom-20 left-4 right-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:-left-7 sm:right-auto sm:max-w-[310px] sm:p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FA] text-[#009A9E]">
                                        <ShieldCheck size={25} />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-[#00314A]">
                                            Governance-Led Thinking
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-500">
                                            A structured approach to oversight,
                                            accountability and risk awareness.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= OUR APPROACH ================= */}

            <section
                id="our-approach"
                className="relative scroll-mt-24 bg-[#F6FAFB] py-24 lg:py-28"
            >
                <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex rounded-full bg-[#EAF9FA] px-5 py-2 text-sm font-semibold text-[#009A9E]">
                            Our Approach
                        </span>

                        <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Expertise Beyond{" "}
                            <span className="text-[#009A9E]">Capital</span>
                        </h2>

                        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                            Effective investment decisions require more than
                            capital alone. They demand sound judgment,
                            specialist knowledge and a clear understanding of
                            governance, risk and value creation.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {expertise.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.25 },
                                    }}
                                    className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#00314A]/5"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF9FA] text-[#009A9E] transition-colors duration-300 group-hover:bg-[#009A9E] group-hover:text-white">
                                        <Icon size={27} strokeWidth={1.8} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold leading-snug text-[#00314A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-600">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 h-1 w-10 rounded-full bg-[#009A9E]/40 transition-all duration-300 group-hover:w-16 group-hover:bg-[#009A9E]" />
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ================= GOVERNANCE FRAMEWORK ================= */}

            <section className="py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <span className="inline-flex rounded-full bg-[#EAF9FA] px-5 py-2 text-sm font-semibold text-[#009A9E]">
                                Governance Framework
                            </span>

                            <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                                Strong Governance.
                                <br />
                                <span className="text-[#009A9E]">
                                    Disciplined Execution.
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-8 text-gray-600">
                                INFIN ALPHA&apos;s governance framework is
                                designed to support disciplined investment
                                processes, oversight and accountability across
                                the fund lifecycle. Advisory Board oversight
                                operates alongside the Investment Committee
                                and Risk &amp; Compliance Team, with distinct
                                responsibilities within the overall framework.
                            </p>

                            <div className="mt-8 space-y-5">
                                {[
                                    {
                                        title: "Governance & Compliance Review",
                                        text: "Reviews governance and compliance across deal origination, asset management, exits and investor relations.",
                                    },
                                    {
                                        title: "Conflict-of-Interest Oversight",
                                        text: "Supports arm's-length dealings and the appropriate management of potential conflicts of interest.",
                                    },
                                    {
                                        title: "Confidential Reporting",
                                        text: "Provides a direct reporting line for whistleblower and confidential reports from the Trustee, Custodian, RTA and other agencies.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex gap-4"
                                    >
                                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF9FA] text-[#009A9E]">
                                            <ShieldCheck size={17} />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-[#00314A]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-7 text-gray-600">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-bl-[40px] border-b-2 border-l-2 border-[#009A9E]/40" />

                            <div className="relative overflow-hidden rounded-[28px] bg-[#00314A] p-8 text-white shadow-2xl sm:p-10 lg:p-12">
                                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
                                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

                                <div className="relative">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#7ACED4]">
                                        <BriefcaseBusiness size={28} />
                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold sm:text-3xl">
                                        A Structured Framework for Better Decisions
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                                        Defined responsibilities and
                                        complementary expertise help establish
                                        a disciplined approach to investment
                                        oversight and execution.
                                    </p>

                                    <div className="mt-9 space-y-0">
                                        {[
                                            {
                                                number: "01",
                                                title: "Advisory Board",
                                                text: "Governance and compliance oversight",
                                            },
                                            {
                                                number: "02",
                                                title: "Investment Committee",
                                                text: "Investment and divestment decisions",
                                            },
                                            {
                                                number: "03",
                                                title: "Risk & Compliance Team",
                                                text: "Independent risk evaluation and compliance",
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={item.number}
                                                className={`flex gap-4 py-5 ${index !== 2
                                                    ? "border-b border-white/10"
                                                    : ""
                                                    }`}
                                            >
                                                <span className="text-lg font-bold text-[#7ACED4]">
                                                    {item.number}
                                                </span>

                                                <div>
                                                    <h4 className="font-semibold">
                                                        {item.title}
                                                    </h4>
                                                    <p className="mt-1 text-sm leading-6 text-white/60">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= ADVISORY TEAM ================= */}

            <section
                id="advisors"
                className="scroll-mt-24 bg-[#F6FAFB] py-24 lg:py-28"
            >
                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <span className="inline-flex rounded-full bg-[#EAF9FA] px-5 py-2 text-sm font-semibold text-[#009A9E]">
                            Meet the Experts
                        </span>

                        <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Experience That
                            <br />
                            <span className="text-[#009A9E]">
                                Adds Perspective
                            </span>
                        </h2>

                        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                            Our advisory team brings complementary
                            perspectives across international investments,
                            financial services, strategic transactions and
                            institution building.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {advisors.map((advisor) => (
                            <motion.article
                                key={advisor.name}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.25 },
                                }}
                                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#00314A]/10"
                            >
                                <div className="relative h-[300px] overflow-hidden bg-[#EAF9FA]">
                                    <img
                                        src={advisor.image}
                                        alt={advisor.name}
                                        loading="lazy"

                                        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${advisor.name === "Pushpendra Singh" ||
                                            advisor.name === "Shruti Gonsalves"
                                            ? "object-[center_20%]"
                                            : "object-[center_20%]"
                                            }`}

                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#00314A]/75 via-transparent to-transparent" />

                                    <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                                        {advisor.role}
                                    </span>
                                </div>

                                <div className="p-7 sm:p-8">
                                    <h3 className="text-2xl font-bold text-[#00314A]">
                                        {advisor.name}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-600">
                                        {advisor.description}
                                    </p>

                                    <div className="my-6 h-px bg-gray-100" />

                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#009A9E]">
                                        Areas of Expertise
                                    </p>

                                    <ul className="mt-4 space-y-3">
                                        {advisor.expertise.map((skill) => (
                                            <li
                                                key={skill}
                                                className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#009A9E]" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-gray-500"
                    >
                        Profiles reflect the advisory team information
                        presented in the BSOF presentation. The individuals
                        shown here are identified as Global Advisors and
                        Senior Advisor in that presentation.
                    </motion.p>
                </div>
            </section>
        </main>
    );
}
