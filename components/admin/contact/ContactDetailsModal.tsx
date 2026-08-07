"use client";

import {

    X,

    User,

    Mail,

    Phone,

    Calendar,

    Clipboard,

} from "lucide-react";

import { toast } from "react-hot-toast";

interface Contact {

    _id: string;

    name: string;

    email: string;

    phone: string;

    message: string;

    status: "READ" | "UNREAD";

    createdAt: string;

}

interface Props {

    open: boolean;

    contact: Contact | null;

    onClose: () => void;

}

export default function ContactDetailsModal({

    open,

    contact,

    onClose,

}: Props) {

    if (!open || !contact) return null;

    const copy = async (value: string) => {

        await navigator.clipboard.writeText(value);

        toast.success("Copied Successfully");

    };

    return (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

            <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between bg-gradient-to-r from-[#00314A] to-[#009A9E] px-8 py-6 text-white">

                    <div>

                        <h2 className="text-2xl font-bold">

                            Contact Details

                        </h2>

                        <p className="mt-1 text-cyan-100">

                            Website Enquiry

                        </p>

                    </div>

                    <button

                        onClick={onClose}

                        className="rounded-xl bg-white/20 p-2 hover:bg-white/30"

                    >

                        <X size={22} />

                    </button>

                </div>

                {/* Body */}

                <div className="space-y-8 p-8">

                    <div className="flex flex-col gap-6 lg:flex-row">

                        {/* Left */}

                        <div className="flex w-full flex-col items-center rounded-3xl border bg-slate-50 p-8 lg:w-72">

                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100">

                                <User

                                    size={44}

                                    className="text-[#009A9E]"

                                />

                            </div>

                            <h2 className="mt-5 text-2xl font-bold">

                                {contact.name}

                            </h2>

                            <span

                                className={`mt-3 rounded-full px-4 py-2 text-sm font-semibold ${contact.status === "READ"

                                    ? "bg-green-100 text-green-700"

                                    : "bg-orange-100 text-orange-700"

                                    }`}

                            >

                                {contact.status}

                            </span>

                        </div>

                        {/* Right */}

                        <div className="flex-1 space-y-5">

                            <div className="rounded-2xl border p-5">

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-3">

                                        <Mail size={20} />

                                        <div>

                                            <p className="text-xs text-slate-500">

                                                Email

                                            </p>

                                            <h3 className="font-semibold">

                                                {contact.email}

                                            </h3>

                                        </div>

                                    </div>

                                    <button

                                        onClick={() =>

                                            copy(contact.email)

                                        }

                                        className="rounded-lg border p-2 hover:bg-slate-100"

                                    >

                                        <Clipboard size={18} />

                                    </button>

                                </div>

                            </div>

                            <div className="rounded-2xl border p-5">

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-3">

                                        <Phone size={20} />

                                        <div>

                                            <p className="text-xs text-slate-500">

                                                Phone

                                            </p>

                                            <h3 className="font-semibold">

                                                {contact.phone}

                                            </h3>

                                        </div>

                                    </div>

                                    <button

                                        onClick={() =>

                                            copy(contact.phone)

                                        }

                                        className="rounded-lg border p-2 hover:bg-slate-100"

                                    >

                                        <Clipboard size={18} />

                                    </button>

                                </div>

                            </div>

                            <div className="rounded-2xl border p-5">

                                <div className="flex items-center gap-3">

                                    <Calendar size={20} />

                                    <div>

                                        <p className="text-xs text-slate-500">

                                            Submitted

                                        </p>

                                        <h3 className="font-semibold">

                                            {new Date(

                                                contact.createdAt

                                            ).toLocaleString()}

                                        </h3>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Message */}

                    <div className="rounded-3xl border p-6">

                        <h3 className="mb-4 text-xl font-bold">

                            Customer Message

                        </h3>

                        <p className="whitespace-pre-wrap leading-8 text-slate-600">

                            {contact.message}

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}