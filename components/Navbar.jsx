"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ChevronDown,
    Menu,
    X,
    Building2,
    Briefcase,
    Users,
    BookOpen,
    TrendingUp,
    FolderKanban,
    BarChart3,
    ArrowRight,
    Sparkles,
    Home,
    Lightbulb,
    Scale,
    Mail,
    LogIn,
    ShieldCheck,
} from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [investOpen, setInvestOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    useEffect(() => {
        document.body.style.overflowX = "hidden";
    }, []);

    const closeDrawer = () => {
        setOpen(false);
    };

    const handleLinkClick = () => {
        setOpen(false);
        setAboutOpen(false);
        setInvestOpen(false);
    };

    return (
        <motion.header
            initial={{
                y: -80,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className="w-full bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <Link href="/" className="group flex items-center">
                        <img
                            src="/logo.png"
                            alt="INFIN Alpha Alternatives"
                            className="block w-[220px] sm:w-[200px] lg:w-[230px] h-auto object-contain"
                        />
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.35,
                        duration: 0.6,
                    }}
                    className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-semibold text-gray-800"
                >
                    <Link href="/" className="relative hover:text-[#009A9E] transition py-2 after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#009A9E] after:to-[#009A9E] hover:after:w-full after:transition-all after:duration-300">
                        Home
                    </Link>

                    {/* About Dropdown Desktop */}
                    <div className="relative group">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#009A9E] transition py-2">
                            About <ChevronDown size={16} className="group-hover:rotate-180 transition duration-300" />
                        </div>
                        <div className="absolute top-10 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                            <div className="relative bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-2 w-64">
                                <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                                <Link href="/about/bsof-trust" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#EAF9FA] transition group/item">
                                    <Building2 size={20} className="text-[#009A9E] group-hover/item:scale-110 transition" />
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover/item:text-[#009A9E] transition">BSOF Trust</p>
                                        <p className="text-xs text-gray-500">Foundation & structure</p>
                                    </div>
                                </Link>
                                <Link href="/about/infin-llp" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#EAF9FA] transition group/item">
                                    <Briefcase size={20} className="text-[#009A9E] group-hover/item:scale-110 transition" />
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover/item:text-[#009A9E] transition">INFIN Alpha LLP</p>
                                        <p className="text-xs text-gray-500">Core investment entity</p>
                                    </div>
                                </Link>
                                <Link
                                    href="/about/advisory-board"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#EAF9FA] transition group/item"
                                >
                                    <ShieldCheck size={20} className="text-[#009A9E] group-hover/item:scale-110 transition" />
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover/item:text-[#009A9E] transition">
                                            Advisory Board
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Industry experts & advisors
                                        </p>
                                    </div>
                                </Link>
                                <Link href="/about/leadership" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#EAF9FA] transition group/item">
                                    <Users size={20} className="text-[#009A9E] group-hover/item:scale-110 transition" />
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover/item:text-[#009A9E] transition">Leadership</p>
                                        <p className="text-xs text-gray-500">Team & management</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Investment Dropdown Desktop */}
                    <div className="relative group">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#009A9E] transition py-2">
                            Investment <ChevronDown size={16} className="group-hover:rotate-180 transition duration-300" />
                        </div>
                        <div className="absolute top-10 left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                            <div className="relative bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-2 w-72">
                                <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                                <Link href="/investment/philosophy" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#EAF9FA] transition group/item">
                                    <BookOpen size={20} className="text-[#009A9E] group-hover/item:scale-110 transition" />
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover/item:text-[#009A9E] transition">Investment Philosophy</p>
                                        <p className="text-xs text-gray-500">Core belief & principles</p>
                                    </div>
                                </Link>
                                <Link href="/investment/strategy-opportunities" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#EAF9FA] transition group/item">
                                    <TrendingUp size={20} className="text-[#009A9E] group-hover/item:scale-110 transition" />
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover/item:text-[#009A9E] transition">Strategy & Opportunities</p>
                                        <p className="text-xs text-gray-500">Growth-focused approach</p>
                                    </div>
                                </Link>
                                <Link href="/investment/caseStudy" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#EAF9FA] transition group/item">
                                    <FolderKanban size={20} className="text-[#009A9E] group-hover/item:scale-110 transition" />
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover/item:text-[#009A9E] transition">Case Studies</p>
                                        <p className="text-xs text-gray-500">Real investment insights</p>
                                    </div>
                                </Link>
                                <Link
                                    href="/investment/performance"
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition"
                                >
                                    <BarChart3 size={20} className="text-[#009A9E] group-hover/item:scale-110 transition" />
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover/item:text-[#009A9E] transition">Performance</p>
                                        <p className="text-xs text-gray-500">Track record & results</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/thought-leadership" className="relative hover:text-[#009A9E] transition py-2 after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#009A9E] after:to-[#009A9E] hover:after:w-full after:transition-all after:duration-300">Insights</Link>
                    <Link href="/investor" className="relative hover:text-[#009A9E] transition py-2 after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#009A9E] after:to-[#009A9E] hover:after:w-full after:transition-all after:duration-300">Investor</Link>
                    <Link href="/regulatory-disclosures" className="relative hover:text-[#009A9E] transition py-2 after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#009A9E] after:to-[#009A9E] hover:after:w-full after:transition-all after:duration-300">Regulatory Disclosures</Link>
                </motion.nav>

                {/* CTA Button Desktop */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.6,
                    }}
                >
                    <Link
                        href="/contact"
                        className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#009A9E] to-[#009A9E] hover:from-[#009A9E] hover:to-[#00314A] text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-semibold text-sm"
                    >
                        Have a Query ?
                    </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setOpen(true)}
                        className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 active:scale-95"
                        aria-label="Open menu"
                    >
                        <Menu size={24} className="text-gray-800" />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer - All Links with Dropdowns Working Properly */}
            <div
                className={`lg:hidden fixed inset-0 z-[998] transition-all duration-300 ${open
                    ? "bg-black/50 backdrop-blur-md opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
                onClick={closeDrawer}
            />

            <div
                onClick={(e) => e.stopPropagation()}
                className={`
        lg:hidden
        fixed
        top-0
        right-0
        h-screen
        w-[78%]
        max-w-[360px]
        bg-white
        z-[999]
        shadow-2xl
        transition-transform
        duration-300
        ease-in-out
        ${open ? "translate-x-0" : "translate-x-full hidden"}
    `}
            >
                <div className="h-full flex flex-col">
                    {/* Drawer Header */}
                    <div className="relative px-5 pt-6 pb-4 bg-gradient-to-br from-[#009A9E] to-[#00314A] text-white">

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <Link href="/" className="group flex items-center">
                                    <img
                                        src="/logo1.png"
                                        alt="INFIN Alpha Alternatives"
                                        className="block w-[180px] sm:w-[210px] h-auto object-contain"
                                    />
                                </Link>
                                <button
                                    onClick={closeDrawer}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                >
                                    <X size={22} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Navigation with ALL Links */}
                    <div className="flex-1 overflow-y-auto py-4 px-4 bg-gray-50/30 pb-24">

                        {/* HOME */}
                        <Link
                            href="/"
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 px-4 py-3.5 mb-2 font-semibold text-gray-800 bg-white rounded-xl hover:bg-[#EAF9FA] hover:text-[#009A9E] transition-all duration-200 shadow-sm border border-gray-100"
                        >
                            <Home size={18} className="text-[#009A9E]" />
                            Home
                        </Link>

                        {/* ABOUT with Dropdown */}
                        <div className="mb-2">
                            <button
                                onClick={() => setAboutOpen(!aboutOpen)}
                                className="w-full flex items-center justify-between px-4 py-3.5 font-semibold text-gray-800 bg-white rounded-xl hover:bg-[#EAF9FA] transition-all duration-200 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <Building2 size={18} className="text-[#009A9E]" />
                                    About
                                </div>
                                <ChevronDown
                                    size={18}
                                    className={`text-gray-400 transition-transform duration-300 ${aboutOpen ? "rotate-180 text-[#009A9E]" : ""}`}
                                />
                            </button>

                            {aboutOpen && (
                                <div className="mt-2 ml-6 space-y-1.5 border-l-2 border-[#7ACED4] pl-3">
                                    <Link href="/about/bsof-trust" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition">
                                        <Building2 size={14} />
                                        BSOF Trust
                                    </Link>
                                    <Link href="/about/infin-llp" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition">
                                        <Briefcase size={14} />
                                        INFIN Alpha LLP
                                    </Link>
                                    <Link
                                        href="/about/advisory-board"
                                        onClick={handleLinkClick}
                                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition"
                                    >
                                        <ShieldCheck size={14} />
                                        Advisory Board
                                    </Link>
                                    <Link href="/about/leadership" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition">
                                        <Users size={14} />
                                        Leadership
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* INVESTMENT with Dropdown */}
                        <div className="mb-2">
                            <button
                                onClick={() => setInvestOpen(!investOpen)}
                                className="w-full flex items-center justify-between px-4 py-3.5 font-semibold text-gray-800 bg-white rounded-xl hover:bg-[#EAF9FA] transition-all duration-200 shadow-sm border border-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <TrendingUp size={18} className="text-[#009A9E]" />
                                    Investment
                                </div>
                                <ChevronDown
                                    size={18}
                                    className={`text-gray-400 transition-transform duration-300 ${investOpen ? "rotate-180 text-[#009A9E]" : ""}`}
                                />
                            </button>

                            {investOpen && (
                                <div className="mt-2 ml-6 space-y-1.5 border-l-2 border-[#7ACED4] pl-3">
                                    <Link href="/investment/philosophy" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition">
                                        <BookOpen size={14} />
                                        Investment Philosophy
                                    </Link>
                                    <Link href="/investment/strategy-opportunities" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition">
                                        <TrendingUp size={14} />
                                        Strategy & Opportunities
                                    </Link>
                                    <Link href="/investment/caseStudy" onClick={handleLinkClick} className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition">
                                        <FolderKanban size={14} />
                                        Case Studies
                                    </Link>
                                    <Link
                                        href="/investment/performance"
                                        onClick={handleLinkClick}
                                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#009A9E] hover:bg-[#EAF9FA] rounded-lg transition"
                                    >
                                        <BarChart3 size={14} />
                                        Performance
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* INSIGHTS */}
                        <Link
                            href="/thought-leadership"
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 px-4 py-3.5 mb-2 font-semibold text-gray-800 bg-white rounded-xl hover:bg-[#EAF9FA] hover:text-[#009A9E] transition-all duration-200 shadow-sm border border-gray-100"
                        >
                            <Lightbulb size={18} className="text-[#009A9E]" />
                            Insights
                        </Link>

                        {/* INVESTOR PORTAL */}
                        <Link
                            href="/investor"
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 px-4 py-3.5 mb-2 font-semibold text-gray-800 bg-white rounded-xl hover:bg-[#EAF9FA] hover:text-[#009A9E] transition-all duration-200 shadow-sm border border-gray-100"
                        >
                            <LogIn size={18} className="text-[#009A9E]" />
                            Investor
                        </Link>

                        {/* LEGAL */}
                        <Link
                            href="/regulatory-disclosures"
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 px-4 py-3.5 mb-2 font-semibold text-gray-800 bg-white rounded-xl hover:bg-[#EAF9FA] hover:text-[#009A9E] transition-all duration-200 shadow-sm border border-gray-100"
                        >
                            <Scale size={18} className="text-[#009A9E]" />
                            Regulatory Disclosures
                        </Link>
                    </div>

                    {/* Drawer Footer with CTA */}
                    <div className="p-4 border-t border-gray-100 bg-white mt-auto">
                        <Link
                            href="/contact"
                            onClick={handleLinkClick}
                            className="w-full bg-gradient-to-r from-[#009A9E] to-[#009A9E] hover:from-[#009A9E] hover:to-[#00314A] text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
                        >
                            Have a Query <ArrowRight size={16} />
                        </Link>
                        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
                            <span>Privacy Policy</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>Terms of Use</span>
                        </div>
                        <p className="text-center text-[10px] text-gray-400 mt-3">
                            © 2025 INFIN ALPHA. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}