"use client";

import {

    Search,

    RefreshCw,

    Plus,

    Shield,

} from "lucide-react";

interface Props {

    search: string;

    setSearch: React.Dispatch<React.SetStateAction<string>>;

    role: string;

    setRole: React.Dispatch<React.SetStateAction<string>>;

    status: string;

    setStatus: React.Dispatch<React.SetStateAction<string>>;

    total: number;

    onRefresh: () => void;

    onCreate: () => void;

}

export default function UserToolbar({

    search,

    setSearch,

    role,

    setRole,

    status,

    setStatus,

    total,

    onRefresh,

    onCreate,

}: Props) {

    return (

        <div className="rounded-3xl border bg-white p-6 shadow-sm">

            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                {/* Left */}

                <div className="flex flex-1 flex-col gap-4 lg:flex-row">

                    {/* Search */}

                    <div className="relative w-full lg:max-w-md">

                        <Search

                            size={18}

                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                        />

                        <input

                            type="text"

                            value={search}

                            onChange={(e) =>

                                setSearch(

                                    e.target.value

                                )

                            }

                            placeholder="Search admin by name or email..."

                            className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-[#009A9E]"

                        />

                    </div>

                    {/* Role */}

                    <select

                        value={role}

                        onChange={(e) =>

                            setRole(

                                e.target.value

                            )

                        }

                        className="rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-[#009A9E]"

                    >

                        <option value="ALL">

                            All Roles

                        </option>

                        <option value="Super Admin">

                            Super Admin

                        </option>

                        <option value="Admin">

                            Admin

                        </option>

                    </select>

                    {/* Status */}

                    <select

                        value={status}

                        onChange={(e) =>

                            setStatus(

                                e.target.value

                            )

                        }

                        className="rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-[#009A9E]"

                    >

                        <option value="ALL">

                            All Status

                        </option>

                        <option value="ACTIVE">

                            Active

                        </option>

                        <option value="INACTIVE">

                            Inactive

                        </option>

                    </select>

                </div>

                {/* Right */}

                <div className="flex flex-wrap items-center gap-3">

                    <div className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold">

                        Total : {total}

                    </div>

                    <button

                        onClick={onRefresh}

                        className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-slate-100"

                    >

                        <RefreshCw size={18} />

                        Refresh

                    </button>

                    <button

                        onClick={onCreate}

                        className="flex items-center gap-2 rounded-xl bg-[#009A9E] px-6 py-3 font-medium text-white transition hover:bg-[#007f82]"

                    >

                        <Plus size={18} />

                        Create Admin

                    </button>

                </div>

            </div>

        </div>

    );

}