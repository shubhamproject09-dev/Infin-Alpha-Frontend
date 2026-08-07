"use client";

import {

    Eye,

    Trash2,

    MailOpen,

    User,

} from "lucide-react";

import { useDispatch } from "react-redux";

import { AppDispatch } from "@/redux/store";

import {

    markContactRead,

    deleteContact,

} from "@/redux/contact/contactThunk";

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

    contacts: Contact[];

    loading: boolean;

    onView: (contact: Contact) => void;

}

export default function ContactTable({

    contacts,

    loading,

    onView,

}: Props) {

    const dispatch =

        useDispatch<AppDispatch>();

    const handleRead = async (

        id: string

    ) => {

        try {

            await dispatch(

                markContactRead(id)

            ).unwrap();

            toast.success(

                "Marked as Read."

            );

        }

        catch (error: any) {

            toast.error(error);

        }

    };

    const handleDelete = async (

        id: string

    ) => {

        const ok = window.confirm(

            "Delete this enquiry?"

        );

        if (!ok) return;

        try {

            await dispatch(

                deleteContact(id)

            ).unwrap();

            toast.success(

                "Deleted Successfully."

            );

        }

        catch (error: any) {

            toast.error(error);

        }

    };

    if (loading) {

        return (

            <div className="rounded-3xl border bg-white p-12 text-center">

                Loading Contacts...

            </div>

        );

    }

    if (!contacts.length) {

        return (

            <div className="rounded-3xl border bg-white p-16 text-center">

                <User

                    size={60}

                    className="mx-auto text-slate-300"

                />

                <h3 className="mt-5 text-xl font-semibold">

                    No Contact Found

                </h3>

                <p className="mt-2 text-slate-500">

                    Customer enquiries will appear here.

                </p>

            </div>

        );

    }

    return (

        <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead>

                        <tr className="bg-slate-50">

                            <th className="px-6 py-4 text-left">

                                Customer

                            </th>

                            <th className="px-6 py-4">

                                Phone

                            </th>

                            <th className="px-6 py-4">

                                Status

                            </th>

                            <th className="px-6 py-4">

                                Date

                            </th>

                            <th className="px-6 py-4 text-center">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            contacts.map(

                                (

                                    item

                                ) => (

                                    <tr

                                        key={

                                            item._id

                                        }

                                        className="border-t transition hover:bg-slate-50"

                                    >

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-4">

                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">

                                                    <User

                                                        size={22}

                                                        className="text-[#009A9E]"

                                                    />

                                                </div>

                                                <div>

                                                    <h3 className="font-semibold">

                                                        {

                                                            item.name

                                                        }

                                                    </h3>

                                                    <p className="text-sm text-slate-500">

                                                        {

                                                            item.email

                                                        }

                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        <td className="px-6">

                                            {

                                                item.phone

                                            }

                                        </td>

                                        <td className="px-6">

                                            {

                                                item.status ===

                                                    "READ"

                                                    ? (

                                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

                                                            Read

                                                        </span>

                                                    )

                                                    : (

                                                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">

                                                            Unread

                                                        </span>

                                                    )

                                            }

                                        </td>

                                        <td className="px-6">

                                            {

                                                new Date(

                                                    item.createdAt

                                                ).toLocaleDateString()

                                            }

                                        </td>

                                        <td className="px-6">

                                            <div className="flex justify-center gap-2">

                                                <button

                                                    onClick={() =>

                                                        onView(

                                                            item

                                                        )

                                                    }

                                                    className="rounded-xl border p-2 hover:bg-slate-100"

                                                >

                                                    <Eye

                                                        size={18}

                                                    />

                                                </button>

                                                {

                                                    item.status ===

                                                    "UNREAD" && (

                                                        <button

                                                            onClick={() =>

                                                                handleRead(

                                                                    item._id

                                                                )

                                                            }

                                                            className="rounded-xl bg-green-500 p-2 text-white hover:bg-green-600"

                                                        >

                                                            <MailOpen

                                                                size={18}

                                                            />

                                                        </button>

                                                    )

                                                }

                                                <button

                                                    onClick={() =>

                                                        handleDelete(

                                                            item._id

                                                        )

                                                    }

                                                    className="rounded-xl bg-red-500 p-2 text-white hover:bg-red-600"

                                                >

                                                    <Trash2

                                                        size={18}

                                                    />

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                )

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}