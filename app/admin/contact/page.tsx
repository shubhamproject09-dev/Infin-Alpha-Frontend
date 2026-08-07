"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactHero from "@/components/admin/contact/ContactHero";
import ContactSummaryCards from "@/components/admin/contact/ContactSummaryCards";
import ContactToolbar from "@/components/admin/contact/ContactToolbar";
import ContactTable from "@/components/admin/contact/ContactTable";
import ContactDetailsModal from "@/components/admin/contact/ContactDetailsModal";

import { getContacts } from "@/redux/contact/contactThunk";
import { AppDispatch, RootState } from "@/redux/store";
import ContactPagination from "@/components/admin/contact/ContactPagination";

interface Contact {

    _id: string;

    name: string;

    email: string;

    phone: string;

    message: string;

    status: "READ" | "UNREAD";

    createdAt: string;

}

export default function ContactPage() {

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const dispatch = useDispatch<AppDispatch>();

    const {

        contacts,

        loading,

    } = useSelector(

        (state: RootState) =>

            state.contact

    );

    const [selectedContact, setSelectedContact] =

        useState<Contact | null>(null);

    const [search, setSearch] =

        useState("");

    const [status, setStatus] =

        useState("ALL");

    useEffect(() => {

        dispatch(getContacts());

    }, [dispatch]);

    const filteredContacts = contacts.filter(

        (item: Contact) => {

            const matchSearch =

                item.name

                    .toLowerCase()

                    .includes(search.toLowerCase()) ||

                item.email

                    .toLowerCase()

                    .includes(search.toLowerCase()) ||

                item.phone.includes(search);

            const matchStatus =

                status === "ALL"

                    ? true

                    : item.status === status;

            return (

                matchSearch &&

                matchStatus

            );

        }

    );

    const indexOfLast = currentPage * itemsPerPage;

    const indexOfFirst = indexOfLast - itemsPerPage;

    const currentContacts =
        filteredContacts.slice(
            indexOfFirst,
            indexOfLast
        );

    const totalPages =
        Math.ceil(
            filteredContacts.length /
            itemsPerPage
        );

    return (

        <div className="space-y-8">

            <ContactHero />

            <ContactSummaryCards />

            <ContactToolbar

                search={search}

                setSearch={setSearch}

                status={status}

                setStatus={setStatus}

                total={filteredContacts.length}

                onRefresh={() =>

                    dispatch(getContacts())

                }

            />

            <ContactTable

                contacts={currentContacts}

                loading={loading}

                onView={(contact) =>

                    setSelectedContact(contact)

                }

            />

            <ContactDetailsModal

                open={selectedContact !== null}

                contact={selectedContact}

                onClose={() =>

                    setSelectedContact(null)

                }

            />

            <ContactPagination

                currentPage={currentPage}

                totalPages={totalPages}

                onPageChange={setCurrentPage}

            />

        </div>

    );

}