"use client";

import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    ShieldCheck,
    Send,
    Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import type { Variants } from "framer-motion";
import { toast } from "react-hot-toast";

import {

    createContact,

} from "@/redux/contact/contactThunk";

import {

    AppDispatch,

    RootState,

} from "@/redux/store";
import { useState } from "react";

export default function ContactSection() {
    const dispatch = useDispatch<AppDispatch>();

    const {

        submitting,

    } = useSelector(

        (state: RootState) =>

            state.contact

    );

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        try {

            await dispatch(
                createContact(formData)
            ).unwrap();

            toast.success(
                "Thank you! Your enquiry has been submitted successfully."
            );

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });

        } catch (error: any) {

            toast.error(
                error || "Something went wrong."
            );

        }

    };

    // Animation variants
    const fadeUp: Variants = {
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

    const fadeLeft: Variants = {
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

    const fadeRight: Variants = {
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

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const contactCardVariants: Variants = {
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

    const formFieldVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const buttonVariants: Variants = {
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
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <section className="relative overflow-hidden bg-white">

            {/* Background Pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:24px_24px]"
            ></motion.div>

            {/* TOP HERO SECTION */}
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
                {/* Background Glow */}
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

                {/* MAIN CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        className="flex items-center justify-center text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {/* CONTENT */}
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
                                Secure Investor Communication
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
                                Connect With
                                <span className="block mt-2 text-[#7ACED4]">
                                    INFIN ALPHA LLP
                                </span>
                            </motion.h1>

                            {/* Paragraph */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="mt-8 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-7 text-slate-300"
                            >
                                We engage with qualified investors,
                                institutions, strategic partners,
                                and stakeholders seeking exposure
                                to India's evolving stressed asset
                                and special situations investment landscape.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* MAIN SECTION */}
            <div
                className="relative z-10 pb-20 sm:pb-24"
                style={{
                    paddingTop: "100px",
                }}
            >
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
                            className="lg:col-span-7"
                            variants={fadeLeft}
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-slate-200 bg-white p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 h-full"
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

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#D5F3F5] bg-[#EAF9FA] px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]"
                                    >
                                        <Building2 size={16} />
                                        Contact Information
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em]"
                                        style={{ color: "#009A9E" }}
                                    >
                                        Let's Discuss Strategic
                                        Investment Opportunities
                                    </motion.h2>

                                    {/* Paragraph */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="mt-5 sm:mt-6 leading-7 sm:leading-8 text-base sm:text-lg"
                                    >
                                        For investor communication,
                                        partnership discussions,
                                        fund-related information,
                                        or strategic engagement opportunities,
                                        please reach out to our team.
                                    </motion.p>
                                </div>

                                {/* CONTACT INFO */}
                                <motion.div
                                    className="relative z-10 mt-8 sm:mt-12 grid gap-5 sm:gap-6"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    {/* ADDRESS */}
                                    <motion.div
                                        variants={contactCardVariants}
                                        whileHover={{
                                            y: -5,
                                            borderColor: "#7ACED4",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="group rounded-[24px] sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-[#7ACED4] hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-[#EAF9FA] text-[#00314A] flex items-center justify-center shrink-0"
                                            >
                                                <MapPin size={20} />
                                            </motion.div>

                                            <div>
                                                <motion.h3
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.2, duration: 0.5 }}
                                                    className="text-xl sm:text-2xl font-bold text-[#00314A]"
                                                >
                                                    Office Address
                                                </motion.h3>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.3, duration: 0.5 }}
                                                    className="mt-3 sm:mt-4 leading-7 sm:leading-8 text-sm sm:text-base"
                                                >
                                                    A-3, 1st Floor South Tower,
                                                    Girdhar Apartments,
                                                    28 Firozeshah Road,
                                                    New Delhi – 110001,
                                                    India
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* PHONE */}
                                    <motion.div
                                        variants={contactCardVariants}
                                        whileHover={{
                                            y: -5,
                                            borderColor: "#7ACED4",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="group rounded-[24px] sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-[#7ACED4] hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-[#EAF9FA] text-[#00314A] flex items-center justify-center shrink-0"
                                            >
                                                <Phone size={20} />
                                            </motion.div>

                                            <div>
                                                <motion.h3
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.4, duration: 0.5 }}
                                                    className="text-xl sm:text-2xl font-bold text-[#00314A]"
                                                >
                                                    Phone Number
                                                </motion.h3>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.5, duration: 0.5 }}
                                                    className="mt-3 sm:mt-4 text-base sm:text-lg"
                                                >
                                                    +91 0000000000
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* EMAIL */}
                                    <motion.div
                                        variants={contactCardVariants}
                                        whileHover={{
                                            y: -5,
                                            borderColor: "#7ACED4",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                            transition: { duration: 0.3 },
                                        }}
                                        className="group rounded-[24px] sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-[#7ACED4] hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                                            <motion.div
                                                whileHover={{
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-[#EAF9FA] text-[#00314A] flex items-center justify-center shrink-0"
                                            >
                                                <Mail size={20} />
                                            </motion.div>

                                            <div>
                                                <motion.h3
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.6, duration: 0.5 }}
                                                    className="text-xl sm:text-2xl font-bold text-[#00314A]"
                                                >
                                                    Email Address
                                                </motion.h3>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.7, duration: 0.5 }}
                                                    className="mt-3 sm:mt-4 text-base sm:text-lg break-all"
                                                >
                                                    contact@infinalpha.com
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT SIDE - CONTACT FORM */}
                        <motion.div
                            className="lg:col-span-5"
                            variants={fadeRight}
                        >
                            <motion.div
                                whileHover={{
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                                    transition: { duration: 0.3 },
                                }}
                                className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 lg:p-10 text-white h-full shadow-2xl"
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
                                    className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#EAF9FA]/20 blur-3xl rounded-full"
                                />

                                {/* Pattern */}
                                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:22px_22px]" />

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 rounded-full border border-[#EAF9FA]/20 bg-[#EAF9FA]/10 px-4 py-2 text-xs sm:text-sm font-semibold text-[#00314A]"
                                    >
                                        Investor Enquiry Form
                                    </motion.div>

                                    {/* Heading */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.3, duration: 0.7 }}
                                        className="mt-5 sm:mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.03em]"
                                        style={{ color: "#009A9E" }}
                                    >
                                        Start A
                                        Conversation
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base"
                                        style={{ color: "#00314A" }}
                                    >
                                        Share your details and our team
                                        will connect with you regarding
                                        investment opportunities and
                                        strategic discussions.
                                    </motion.p>

                                    {/* FORM */}
                                    <motion.form
                                        onSubmit={handleSubmit}
                                        className="mt-8 sm:mt-10 space-y-4 sm:space-y-5"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.2 }}
                                    >
                                        {/* Name */}
                                        <motion.div variants={formFieldVariants}>
                                            <label
                                                className="text-sm font-bold mb-2 block"
                                                style={{ color: "#00314A" }}
                                            >
                                                Full Name:
                                            </label>
                                            <motion.input
                                                whileFocus={{
                                                    scale: 1.02,
                                                    borderColor: "#009A9E",
                                                    transition: { duration: 0.2 },
                                                }}
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                className="w-full rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 placeholder-black text-sm sm:text-base"
                                                style={{
                                                    border: "1.5px solid #000",
                                                    color: "#000",
                                                    backgroundColor: "#fff",
                                                }}
                                            />
                                        </motion.div>

                                        {/* Email */}
                                        <motion.div variants={formFieldVariants}>
                                            <label
                                                className="text-sm font-bold mb-2 block"
                                                style={{ color: "#00314A" }}
                                            >
                                                Email Address:
                                            </label>
                                            <motion.input
                                                whileFocus={{
                                                    scale: 1.02,
                                                    borderColor: "#009A9E",
                                                    transition: { duration: 0.2 },
                                                }}
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                className="w-full rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 placeholder-black text-sm sm:text-base"
                                                style={{
                                                    border: "1.5px solid #000",
                                                    color: "#000",
                                                    backgroundColor: "#fff",
                                                }}
                                            />
                                        </motion.div>

                                        {/* Phone */}
                                        <motion.div variants={formFieldVariants}>
                                            <label
                                                className="text-sm font-bold mb-2 block"
                                                style={{ color: "#00314A" }}
                                            >
                                                Phone Number:
                                            </label>
                                            <motion.input
                                                whileFocus={{
                                                    scale: 1.02,
                                                    borderColor: "#009A9E",
                                                    transition: { duration: 0.2 },
                                                }}
                                                type="number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your Number"
                                                className="w-full rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 placeholder-black text-sm sm:text-base"
                                                style={{
                                                    border: "1.5px solid #000",
                                                    color: "#000",
                                                    backgroundColor: "#fff",
                                                }}
                                            />
                                        </motion.div>

                                        {/* Message */}
                                        <motion.div variants={formFieldVariants}>
                                            <label
                                                className="text-sm font-bold mb-2 block"
                                                style={{ color: "#00314A" }}
                                            >
                                                Message:
                                            </label>
                                            <motion.textarea
                                                whileFocus={{
                                                    scale: 1.02,
                                                    borderColor: "#009A9E",
                                                    transition: { duration: 0.2 },
                                                }}
                                                rows={5}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message..."
                                                className="w-full rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 outline-none transition-all duration-300 resize-none placeholder-black text-sm sm:text-base"
                                                style={{
                                                    border: "1.5px solid #000",
                                                    color: "#000",
                                                    backgroundColor: "#fff",
                                                }}
                                            ></motion.textarea>
                                        </motion.div>

                                        {/* Button */}
                                        <motion.button
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#009A9E] hover:bg-[#00314A] px-6 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all duration-300 shadow-lg shadow-[#EAF9FA]/20"
                                        >
                                            {submitting ? "Sending..." : "Send Message"}
                                            <motion.span
                                                animate={{
                                                    x: [0, 5, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <Send size={18} />
                                            </motion.span>
                                        </motion.button>
                                    </motion.form>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}