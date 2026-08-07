"use client";

import {

    Mail,

    MailOpen,

    Trash2,

    Users,

} from "lucide-react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

export default function ContactSummaryCards() {

    const { contacts } = useSelector(

        (state: RootState) =>

            state.contact

    );

    const totalContacts = contacts.length;

    const unreadContacts = contacts.filter(

        (item: any) =>

            item.status === "UNREAD"

    ).length;

    const readContacts = contacts.filter(

        (item: any) =>

            item.status === "READ"

    ).length;

    const deletedContacts = contacts.filter(

        (item: any) =>

            item.isDeleted === true

    ).length;

    const cards = [

        {

            title: "Total Enquiries",

            value: totalContacts,

            icon: Users,

            bg: "bg-cyan-100",

            iconColor: "text-cyan-700",

            border: "border-cyan-200",

        },

        {

            title: "Unread",

            value: unreadContacts,

            icon: Mail,

            bg: "bg-orange-100",

            iconColor: "text-orange-600",

            border: "border-orange-200",

        },

        {

            title: "Read",

            value: readContacts,

            icon: MailOpen,

            bg: "bg-green-100",

            iconColor: "text-green-600",

            border: "border-green-200",

        },

    ];

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {

                cards.map(

                    (

                        card,

                        index

                    ) => {

                        const Icon =

                            card.icon;

                        return (

                            <div

                                key={index}

                                className={`group rounded-3xl border ${card.border} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}

                            >

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-sm font-medium text-slate-500">

                                            {

                                                card.title

                                            }

                                        </p>

                                        <h2 className="mt-3 text-4xl font-bold text-slate-900">

                                            {

                                                card.value

                                            }

                                        </h2>

                                    </div>

                                    <div

                                        className={`rounded-2xl ${card.bg} p-4 transition-transform duration-300 group-hover:scale-110`}

                                    >

                                        <Icon

                                            size={32}

                                            className={card.iconColor}

                                        />

                                    </div>

                                </div>

                            </div>

                        );

                    }

                )

            }

        </div>

    );

}