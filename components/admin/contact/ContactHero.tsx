"use client";

import { Mail, PhoneCall } from "lucide-react";

export default function ContactHero() {

    return (

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00314A] via-[#014C63] to-[#009A9E] p-8 text-white shadow-xl">

            {/* Background Decoration */}

            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div>

                    <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur">

                        <Mail size={20} />

                        <span className="text-sm font-medium tracking-wide">

                            CONTACT MANAGEMENT

                        </span>

                    </div>

                    <h1 className="text-4xl font-bold tracking-tight">

                        Website Contact Enquiries

                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-100">

                        Manage all enquiries submitted through your website.

                        View customer details, mark enquiries as read,

                        respond quickly, and keep track of every interaction

                        from a single dashboard.

                    </p>

                </div>

                {/* Right */}

                <div className="flex items-center gap-5 rounded-3xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur">

                    <div className="rounded-2xl bg-white/20 p-4">

                        <PhoneCall size={34} />

                    </div>

                    <div>

                        <p className="text-sm text-cyan-100">

                            Customer Enquiries

                        </p>

                        <h2 className="text-3xl font-bold">

                            Contact Center

                        </h2>

                        <p className="mt-1 text-sm text-cyan-200">

                            INFIN ALPHA LLP

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}