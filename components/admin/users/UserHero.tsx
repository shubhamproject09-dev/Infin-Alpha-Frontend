"use client";

import {

    Users,

    ShieldCheck,

} from "lucide-react";

export default function UserHero() {

    return (

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00314A] via-[#014C63] to-[#009A9E] p-8 text-white shadow-xl">

            {/* Background Effects */}

            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div>

                    <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 backdrop-blur">

                        <ShieldCheck size={20} />

                        <span className="text-sm font-semibold tracking-wider uppercase">

                            ADMIN MANAGEMENT

                        </span>

                    </div>

                    <h1 className="text-4xl font-bold">

                        Administrator Management

                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-100">

                        Manage administrator accounts securely from a single dashboard.

                        Create new admins, update administrator details, assign roles,

                        monitor login activity, and manage account access efficiently.

                    </p>

                </div>

                {/* Right Card */}

                <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">

                    <div className="flex items-center gap-5">

                        <div className="rounded-2xl bg-white/20 p-4">

                            <ShieldCheck

                                size={40}

                            />

                        </div>

                        <div>

                            <p className="text-sm text-cyan-100">

                                System Administration

                            </p>

                            <h2 className="text-3xl font-bold">

                                Admins

                            </h2>

                            <p className="mt-1 text-sm text-cyan-200">

                                INFIN ALPHA LLP

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}