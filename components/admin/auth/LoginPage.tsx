"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    ShieldCheck,
    LockKeyhole,
    TrendingUp,
    Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import LoginForm from "./LoginForm";
import { isAuthenticated } from "@/lib/auth";

export default function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated()) {
            router.replace("/admin/dashboard");
        }
    }, [router]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#001728] via-[#00314A] to-[#009A9E]">
            {/* ================= Background ================= */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_60%)]" />

            <motion.div
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, 20, -20, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
                className="absolute -left-40 -top-32 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-[130px]"
            />

            <motion.div
                animate={{
                    x: [0, -30, 20, 0],
                    y: [0, -30, 30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                }}
                className="absolute right-[-120px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[150px]"
            />

            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
            />

            {/* ================= Back Button ================= */}

            <Link
                href="/"
                className="absolute left-6 top-6 z-50 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
                <ArrowLeft size={18} />
                Back to Website
            </Link>

            {/* ================= Main ================= */}

            <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-2 items-center gap-12 px-5 py-8 sm:px-8 lg:px-12 mt-15">
                {/* Left */}

                <div className="hidden lg:flex w-full flex-col justify-center pr-8 xl:pr-16">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
                            <ShieldCheck size={16} />
                            Secure Admin Portal
                        </div>

                        <h1 className="mt-8 text-5xl xl:text-6xl font-black leading-tight text-white">
                            Welcome to
                            <span className="block text-cyan-300">
                                INFIN ALPHA
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base xl:text-lg leading-8 text-cyan-100">
                            Sign in securely to access the administration dashboard and manage
                            users, portfolios, complaints, reports, and platform settings.
                        </p>

                    </motion.div>

                    <div className="mt-12 space-y-5">

                        {[
                            {
                                title: "Secure Authentication",
                                desc: "Encrypted login with role-based access control.",
                            },
                            {
                                title: "Enterprise Grade Security",
                                desc: "Your data is protected using modern security standards.",
                            },
                            {
                                title: "Real-time Dashboard",
                                desc: "Manage operations, reports and users from one place.",
                            },
                            {
                                title: "24×7 System Monitoring",
                                desc: "Continuous monitoring ensures high availability.",
                            },
                        ].map((item, index) => (

                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{
                                    x: 6,
                                }}
                                className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
                            >

                                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20">
                                    <ShieldCheck
                                        size={20}
                                        className="text-cyan-300"
                                    />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-cyan-100">
                                        {item.desc}
                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

                {/* Right */}

                <div className="flex w-full items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative w-full max-w-md lg:max-w-xl overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/20 bg-white/10 p-5 sm:p-7 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop-blur-3xl"
                    >
                        {/* Glow */}

                        <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

                        {/* Logo */}

                        <div className="relative text-center">
                            <motion.div
                                whileHover={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 1,
                                }}
                                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-[#009A9E] to-[#00314A] shadow-[0_0_40px_rgba(0,154,158,.5)]"
                            >
                                <ShieldCheck className="text-white" size={42} />
                            </motion.div>

                            <h1 className="mt-7 text-4xl font-extrabold tracking-wide text-white">
                                Admin Portal
                            </h1>

                            <p className="mt-3 text-sm leading-6 text-cyan-100">
                                Welcome back! Sign in to securely access your
                                <br />
                                INFIN ALPHA Admin Dashboard.
                            </p>
                        </div>

                        {/* Badges */}

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-100">
                                <LockKeyhole size={14} />
                                Secure Login
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-100">
                                <ShieldCheck size={14} />
                                Protected
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs text-orange-100">
                                <TrendingUp size={14} />
                                Investment
                            </div>
                        </div>

                        {/* Divider */}

                        <div className="my-8 flex items-center gap-3">
                            <div className="h-px flex-1 bg-white/10" />

                            <div className="flex items-center gap-2 text-xs uppercase tracking-[4px] text-cyan-100">
                                <Sparkles size={14} />
                                Login
                            </div>

                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        {/* Form */}

                        <LoginForm />

                        {/* Footer */}

                        <div className="mt-8 border-t border-white/10 pt-6 text-center">
                            <p className="text-xs text-cyan-100/80">
                                © 2026 INFIN ALPHA LLP
                            </p>

                            <p className="mt-2 text-[11px] text-cyan-200/60">
                                Secure • Trusted • Encrypted Access
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}