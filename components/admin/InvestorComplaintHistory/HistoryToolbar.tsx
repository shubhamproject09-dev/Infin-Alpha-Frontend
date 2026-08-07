"use client";

import { Search, RefreshCcw } from "lucide-react";

interface Props {

    search: string;

    setSearch: React.Dispatch<React.SetStateAction<string>>;

    onRefresh: () => void;

}

export default function HistoryToolbar({

    search,

    setSearch,

    onRefresh,

}: Props) {

    return (

        <div className="rounded-3xl border bg-white p-5 shadow-sm">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="relative w-full lg:max-w-md">

                    <Search

                        size={18}

                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                    />

                    <input

                        value={search}

                        onChange={(e) =>

                            setSearch(

                                e.target.value

                            )

                        }

                        placeholder="Search PDF..."

                        className="w-full rounded-2xl border py-3 pl-11 pr-4"

                    />

                </div>

                <button

                    onClick={onRefresh}

                    className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-slate-100"

                >

                    <RefreshCcw size={18} />

                    Refresh

                </button>

            </div>

        </div>

    );

}