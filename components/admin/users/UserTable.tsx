"use client";

import {

    Eye,

    Pencil,

    Trash2,

    User,

} from "lucide-react";
import Image from "next/image";

interface Admin {

    _id: string;

    firstName: string;

    lastName: string;

    email: string;

    role: "Super Admin" | "Admin";

    profileImage: string;

    isActive: boolean;

    createdAt: string;

    lastLogin: string | null;

}

interface Props {

    admins: Admin[];

    loading: boolean;

    onView: (admin: Admin) => void;

    onEdit: (admin: Admin) => void;

    onDelete: (id: string) => void;

}

export default function UserTable({

    admins,

    loading,

    onView,

    onEdit,

    onDelete,

}: Props) {

    if (loading) {

        return (

            <div className="space-y-4 rounded-3xl bg-white p-8 shadow">

                {

                    [...Array(8)].map((_, i) => (

                        <div

                            key={i}

                            className="h-16 animate-pulse rounded-2xl bg-slate-100"

                        />

                    ))

                }

            </div>

        );

    }

    if (admins.length === 0) {

        return (

            <div className="rounded-3xl bg-white py-24 text-center shadow">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">

                    <User

                        size={40}

                        className="text-slate-400"

                    />

                </div>

                <h2 className="mt-6 text-2xl font-bold">

                    No Admin Found

                </h2>

                <p className="mt-2 text-slate-500">

                    Administrator accounts will appear here.

                </p>

            </div>

        );

    }

    return (

        <div className="overflow-hidden rounded-3xl bg-white shadow">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead>

                        <tr className="bg-slate-100">

                            <th className="px-6 py-4 text-left">

                                Admin

                            </th>

                            <th className="px-6 py-4">

                                Role

                            </th>

                            <th className="px-6 py-4">

                                Status

                            </th>

                            <th className="px-6 py-4">

                                Last Login

                            </th>

                            <th className="px-6 py-4">

                                Created

                            </th>

                            <th className="px-6 py-4">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>
                        {
                            admins.map((admin) => (

                                <tr
                                    key={admin._id}
                                    className="border-b transition hover:bg-slate-50"
                                >

                                    {/* Profile */}

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-4">

                                            {

                                                admin.profileImage ? (

                                                    <Image
                                                        src={admin.profileImage}
                                                        alt={admin.firstName}
                                                        width={48}
                                                        height={48}
                                                        className="h-12 w-12 rounded-full object-cover"
                                                    />

                                                ) : (

                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">

                                                        <User
                                                            size={22}
                                                            className="text-[#009A9E]"
                                                        />

                                                    </div>

                                                )

                                            }

                                            <div>

                                                <h3 className="font-semibold text-slate-900">

                                                    {admin.firstName} {admin.lastName}

                                                </h3>

                                                <p className="text-sm text-slate-500">

                                                    {admin.email}

                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* Role */}

                                    <td className="px-6 py-5 text-center">

                                        {

                                            admin.role === "Super Admin" ? (

                                                <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold text-yellow-700">

                                                    👑 Super Admin

                                                </span>

                                            ) : (

                                                <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold text-cyan-700">

                                                    Admin

                                                </span>

                                            )

                                        }

                                    </td>

                                    {/* Status */}

                                    <td className="px-6 py-5 text-center">

                                        {

                                            admin.isActive ? (

                                                <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-semibold text-green-700">

                                                    Active

                                                </span>

                                            ) : (

                                                <span className="rounded-full bg-red-100 px-4 py-2 text-xs font-semibold text-red-700">

                                                    Inactive

                                                </span>

                                            )

                                        }

                                    </td>

                                    {/* Last Login */}

                                    <td className="px-6 py-5 text-center text-sm text-slate-600">

                                        {

                                            admin.lastLogin

                                                ? new Date(

                                                    admin.lastLogin

                                                ).toLocaleString()

                                                : "-"

                                        }

                                    </td>

                                    {/* Created */}

                                    <td className="px-6 py-5 text-center text-sm text-slate-600">

                                        {

                                            new Date(

                                                admin.createdAt

                                            ).toLocaleDateString()

                                        }

                                    </td>

                                    {/* Actions */}

                                    <td className="px-6 py-5">

                                        <div className="flex items-center justify-center gap-3">

                                            <button

                                                onClick={() =>

                                                    onView(admin)

                                                }

                                                className="rounded-xl border p-2 transition hover:bg-slate-100"

                                            >

                                                <Eye size={18} />

                                            </button>

                                            <button

                                                onClick={() =>

                                                    onEdit(admin)

                                                }

                                                className="rounded-xl bg-[#009A9E] p-2 text-white transition hover:bg-[#007f82]"

                                            >

                                                <Pencil size={18} />

                                            </button>

                                            <button

                                                onClick={() =>

                                                    onDelete(admin._id)

                                                }

                                                className="rounded-xl bg-red-500 p-2 text-white transition hover:bg-red-600"

                                            >

                                                <Trash2 size={18} />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))
                        }
                    </tbody>

                </table>

            </div>

        </div>
    );

}