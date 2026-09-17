"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {

    const quickLinks = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "BSOF Trust",
            href: "/about/bsof-trust",
        },
        {
            title: "INFIN Alpha LLP",
            href: "/about/infin-llp",
        },
        {
            title: "Leadership",
            href: "/about/leadership",
        },
    ];

    const otherLinks = [
        {
            title: "Case Studies",
            href: "/investment/caseStudy",
        },
        {
            title: "Performance",
            href: "/investment/performance",
        },
        {
            title: "Insights",
            href: "/thought-leadership",
        },
        {
            title: "Investor",
            href: "/investor",
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
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const contactVariants = {
        hidden: {
            opacity: 0,
            y: 30,
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

    const socialVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            rotate: -30,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <footer className="relative overflow-hidden bg-[#00314A] text-white">

            {/* Background Glow */}
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
                className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#009A9E]/10 blur-3xl rounded-full"
            />

            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7ACED4]/10 blur-3xl rounded-full"
            />

            {/* Top Border */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-px bg-gradient-to-r from-transparent via-[#009A9E]/40 to-transparent origin-left"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* TOP SECTION */}
                <motion.div
                    className="py-16 sm:py-20 grid lg:grid-cols-12 gap-4 xl:gap-7"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={staggerContainer}
                >
                    {/* LEFT CONTENT */}
                    <motion.div
                        className="lg:col-span-4"
                        variants={fadeLeft}
                    >
                        {/* Logo */}
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Link href="/" className="group flex items-center">
                                <img
                                    src="/logo1.png"
                                    alt="INFIN Alpha Alternatives"
                                    className="block w-[220px] sm:w-[240px] lg:w-[260px] h-auto object-contain"
                                />
                            </Link>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="mt-8 text-slate-300 leading-8 max-w-xl hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            INFIN Alpha is a specialized investment platform
                            focused on distressed credit, restructuring,
                            and special situation opportunities across
                            India's evolving financial ecosystem.
                        </motion.p>

                        {/* Socials */}
                        <motion.div
                            className="mt-8 flex items-center gap-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            <motion.div variants={socialVariants}>
                                <Link
                                    href="#"
                                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#009A9E] hover:border-[#009A9E] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="text-base font-bold tracking-tight">in</span>
                                </Link>
                            </motion.div>

                            <motion.div variants={socialVariants}>
                                <Link
                                    href="#"
                                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#009A9E] hover:border-[#009A9E] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="text-lg font-bold">𝕏</span>
                                </Link>
                            </motion.div>

                            <motion.div variants={socialVariants}>
                                <Link
                                    href="#"
                                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:border-transparent hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-white"
                                    >
                                        <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm9.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 6.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5zm0 1.5A4 4 0 1 1 8 12a4.005 4.005 0 0 1 4-4z" />
                                    </svg>
                                </Link>
                            </motion.div>

                            <motion.div variants={socialVariants}>
                                <Link
                                    href="#"
                                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:scale-110 transition-all duration-300"
                                >
                                    <span className="text-sm font-bold">▶</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* LINKS */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={fadeUp}
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-lg font-semibold text-[#7ACED4]"
                        >
                            Quick Links
                        </motion.h3>

                        <motion.div
                            className="mt-6 space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            {quickLinks.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={linkVariants}
                                    whileHover={{
                                        x: 8,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-slate-300 hover:text-[#7ACED4] hover:translate-x-2 transition-all duration-300"
                                    >
                                        <motion.span
                                            whileHover={{
                                                rotate: 45,
                                                transition: { duration: 0.3 },
                                            }}
                                        >
                                            ↗
                                        </motion.span>
                                        {item.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* OTHER LINKS */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={fadeUp}
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-lg font-semibold text-[#7ACED4]"
                        >
                            Explore
                        </motion.h3>

                        <motion.div
                            className="mt-6 space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            {otherLinks.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={linkVariants}
                                    whileHover={{
                                        x: 8,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-slate-300 hover:text-[#7ACED4] hover:translate-x-2 transition-all duration-300"
                                    >
                                        <motion.span
                                            whileHover={{
                                                rotate: 45,
                                                transition: { duration: 0.3 },
                                            }}
                                        >
                                            ↗
                                        </motion.span>
                                        {item.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div
                        className="lg:col-span-4"
                        variants={fadeRight}
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg font-semibold text-[#7ACED4]"
                        >
                            Contact
                        </motion.h3>

                        <motion.div
                            className="mt-6 space-y-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            <motion.div
                                variants={contactVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                                className="group flex items-start gap-4"
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        backgroundColor: "#009A9E",
                                        transition: { duration: 0.5 },
                                    }}
                                    className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7ACED4] flex-shrink-0 group-hover:bg-[#009A9E] group-hover:text-white transition-all duration-300"
                                >
                                    <span>📍</span>
                                </motion.div>

                                <div>
                                    <p className="text-slate-400 text-sm">
                                        Office Address
                                    </p>
                                    <p className="mt-2 text-slate-200 leading-6 break-words">
                                        A-3, 1st Floor South Tower, Girdhar Apartments, 28 Firozeshah Road, New Delhi – 110001, India
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={contactVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                                className="group flex items-start gap-4"
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        backgroundColor: "#009A9E",
                                        transition: { duration: 0.5 },
                                    }}
                                    className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7ACED4] flex-shrink-0 group-hover:bg-[#009A9E] group-hover:text-white transition-all duration-300"
                                >
                                    <span>📞</span>
                                </motion.div>

                                <div>
                                    <p className="text-slate-400 text-sm">
                                        Phone Number
                                    </p>
                                    <p className="mt-2 text-slate-200 leading-7">
                                        +91 0000000000
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={contactVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                                className="group flex items-start gap-4"
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        backgroundColor: "#009A9E",
                                        transition: { duration: 0.5 },
                                    }}
                                    className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7ACED4] flex-shrink-0 group-hover:bg-[#009A9E] group-hover:text-white transition-all duration-300"
                                >
                                    <span>✉️</span>
                                </motion.div>

                                <div>
                                    <p className="text-slate-400 text-sm">
                                        Email Address
                                    </p>
                                    <p className="mt-2 text-slate-200 leading-7 break-all">
                                        contact@infinalpha.com
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* BOTTOM BAR */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-sm text-slate-400 text-center sm:text-left"
                    >
                        © 2025 INFIN ALPHA. All rights reserved.
                    </motion.p>

                    <motion.div
                        className="flex items-center gap-6 text-sm text-slate-400"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <motion.div variants={linkVariants}>
                            <Link
                                href="/privacy-policy"
                                className="hover:text-[#7ACED4] transition-all duration-300"
                            >
                                Privacy Policy
                            </Link>
                        </motion.div>

                        {/* Divider */}
                        <span className="h-4 w-px bg-white/20"></span>

                        <motion.div variants={linkVariants}>
                            <Link
                                href="/terms"
                                className="hover:text-[#7ACED4] transition-all duration-300"
                            >
                                Terms & Conditions
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
}