"use client";

import {

    Search,

    RefreshCcw,

    Filter,

} from "lucide-react";

interface Props {

    search: string;

    setSearch: React.Dispatch<React.SetStateAction<string>>;

    status: string;

    setStatus: React.Dispatch<React.SetStateAction<string>>;

    total: number;

    onRefresh: () => void;

}

export default function ContactToolbar({

    search,

    setSearch,

    status,

    setStatus,

    total,

    onRefresh,

}: Props) {

    return (

        <div className="rounded-3xl border bg-white p-6 shadow-sm">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                {/* Search */}

                <div className="relative w-full lg:max-w-md">

                    <Search

                        size={18}

                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                    />

                    <input

                        value={search}

                        onChange={(e) =>

                            setSearch(e.target.value)

                        }

                        placeholder="Search name, email or phone..."

                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-[#009A9E] focus:bg-white"

                    />

                </div>

                {/* Right */}

                <div className="flex flex-wrap items-center gap-3">

                    <div className="relative">

                        <Filter

                            size={18}

                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"

                        />

                        <select

                            value={status}

                            onChange={(e) =>

                                setStatus(e.target.value)

                            }

                            className="rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-8 outline-none"

                        >

                            <option value="ALL">

                                All

                            </option>

                            <option value="UNREAD">

                                Unread

                            </option>

                            <option value="READ">

                                Read

                            </option>

                        </select>

                    </div>

                    <button

                        onClick={onRefresh}

                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 transition hover:bg-slate-100"

                    >

                        <RefreshCcw size={18} />

                        Refresh

                    </button>

                </div>

            </div>

            <div className="mt-5 flex items-center justify-between border-t pt-4">

                <p className="text-sm text-slate-500">

                    Total Records

                </p>

                <span className="rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-[#00314A]">

                    {total}

                </span>

            </div>

        </div>

    );

}