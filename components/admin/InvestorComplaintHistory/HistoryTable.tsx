"use client";

import {

    Eye,

    Download,

    RotateCcw,

    Trash2,

    FileText,

} from "lucide-react";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-hot-toast";

import StatusBadge from "./StatusBadge";

import {

    getInvestorComplaintHistory,

    restoreInvestorComplaint,

    permanentDeleteInvestorComplaint,

} from "@/redux/investorComplaint/investorComplaintThunk";

import {

    AppDispatch,

    RootState,

} from "@/redux/store";
import HistoryToolbar from "./HistoryToolbar";
import type { InvestorComplaintHistory } from "@/types/investorComplaint";

export default function HistoryTable() {

    const dispatch = useDispatch<AppDispatch>();

    const {

        history,

        historyLoading,

        restoring,

        permanentDeleting,

    } = useSelector(

        (state: RootState) =>

            state.investorComplaint

    );
    const [search, setSearch] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {

        dispatch(

            getInvestorComplaintHistory()

        );

    }, [dispatch]);

    const handleRestore = async (id: string) => {

        const ok = window.confirm("Restore this PDF?");

        if (!ok) return;

        try {

            await dispatch(
                restoreInvestorComplaint(id)
            ).unwrap();

            toast.success("PDF Restored Successfully.");

            dispatch(
                getInvestorComplaintHistory()
            );

        } catch (error) {

            toast.error(String(error));

        }

    };

    const handleDelete = async (id: string) => {

        const ok = window.confirm("Delete Permanently?");

        if (!ok) return;

        try {

            await dispatch(
                permanentDeleteInvestorComplaint(id)
            ).unwrap();

            toast.success("Deleted Successfully.");

            dispatch(
                getInvestorComplaintHistory()
            );

        } catch (error) {

            toast.error(String(error));

        }

    };

    const filteredHistory = history.filter((item) => {

        const query = search.toLowerCase();

        return (

            item.fileName?.toLowerCase().includes(query) ||

            item.uploadedBy?.firstName?.toLowerCase().includes(query) ||

            item.uploadedBy?.lastName?.toLowerCase().includes(query) ||

            item.status?.toLowerCase().includes(query)

        );

    });

    const totalPages = Math.ceil(

        filteredHistory.length / rowsPerPage

    );

    const startIndex =

        (currentPage - 1) * rowsPerPage;

    const paginatedHistory =

        filteredHistory.slice(

            startIndex,

            startIndex + rowsPerPage

        );

    if (historyLoading) {

        return (

            <div className="rounded-3xl border bg-white p-20">

                <div className="flex justify-center">

                    <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#009A9E]" />

                </div>

            </div>

        );

    }

    if (!history.length) {

        return (

            <div className="rounded-3xl border bg-white p-20 text-center">

                <FileText
                    size={70}
                    className="mx-auto text-slate-300"
                />

                <h2 className="mt-6 text-2xl font-bold">

                    No History Found

                </h2>

                <p className="mt-2 text-slate-500">

                    Upload your first Investor Complaint PDF.

                </p>

            </div>

        );

    }

    return (

        <>
            <HistoryToolbar
                search={search}
                setSearch={setSearch}
                onRefresh={() => dispatch(getInvestorComplaintHistory())}
            />
            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

                {/* Header */}

                <div className="border-b bg-gradient-to-r from-slate-50 to-cyan-50 px-6 py-5">

                    <h2 className="text-xl font-bold">

                        Investor Complaint History

                    </h2>

                    <p className="mt-1 text-sm text-slate-500">

                        Manage all uploaded PDF versions

                    </p>

                </div>

                {/* Table */}

                <div className="overflow-x-auto">

                    <table className="min-w-full">

                        <thead>

                            <tr className="border-b bg-slate-50">

                                <th className="px-6 py-4 text-left">

                                    PDF

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Version

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Uploaded By

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Upload Date

                                </th>

                                <th className="px-6 py-4 text-left">

                                    Size

                                </th>

                                <th className="px-6 py-4 text-center">

                                    Status

                                </th>

                                <th className="px-6 py-4 text-center">

                                    Actions

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                paginatedHistory.map((item: InvestorComplaintHistory) => (

                                    <tr

                                        key={item._id}

                                        className="border-b transition hover:bg-slate-50"

                                    >

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-4">

                                                <div className="rounded-2xl bg-red-100 p-3">

                                                    <FileText

                                                        className="text-red-600"

                                                        size={24}

                                                    />

                                                </div>

                                                <div>

                                                    <h3 className="font-semibold">

                                                        {item.fileName}

                                                    </h3>

                                                    <p className="text-xs text-slate-500">

                                                        Investor Complaint PDF

                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        <td className="px-6">

                                            V{item.version}

                                        </td>

                                        <td className="px-6">

                                            {item.uploadedBy?.firstName} {item.uploadedBy?.lastName}

                                        </td>

                                        <td className="px-6">

                                            {new Date(item.createdAt).toLocaleDateString("en-IN", {

                                                day: "2-digit",

                                                month: "short",

                                                year: "numeric",

                                            })}

                                        </td>

                                        <td className="px-6">

                                            {(item.fileSize / 1024 / 1024).toFixed(2)} MB

                                        </td>

                                        <td className="px-6 text-center">

                                            <StatusBadge

                                                status={item.status}

                                            />

                                        </td>

                                        <td className="px-6">

                                            <div className="flex justify-center gap-2">

                                                <button

                                                    onClick={() =>

                                                        window.open(item.fileUrl, "_blank")

                                                    }

                                                    className="rounded-xl border p-2 hover:bg-slate-100"

                                                >

                                                    <Eye size={18} />

                                                </button>

                                                <button

                                                    onClick={() => {

                                                        const link = document.createElement("a");

                                                        link.href = item.fileUrl;

                                                        link.download = item.fileName;

                                                        link.click();

                                                    }}

                                                    className="rounded-xl bg-[#009A9E] p-2 text-white hover:bg-[#007b7d]"

                                                >

                                                    <Download size={18} />

                                                </button>

                                                {

                                                    item.status !== "ACTIVE" && (

                                                        <button

                                                            disabled={restoring}

                                                            onClick={() =>

                                                                handleRestore(item._id)

                                                            }

                                                            className="rounded-xl bg-orange-500 p-2 text-white transition hover:bg-orange-600 disabled:opacity-50"

                                                        >

                                                            <RotateCcw size={18} />

                                                        </button>

                                                    )

                                                }

                                                <button

                                                    disabled={permanentDeleting}

                                                    onClick={() =>

                                                        handleDelete(item._id)

                                                    }

                                                    className="rounded-xl bg-red-500 p-2 text-white transition hover:bg-red-600 disabled:opacity-50"

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

                    <div className="flex flex-col items-center justify-between gap-5 border-t bg-white px-6 py-5 lg:flex-row">

                        <div className="flex items-center gap-3">

                            <span className="text-sm text-slate-500">

                                Rows

                            </span>

                            <select

                                value={rowsPerPage}

                                onChange={(e) => {

                                    setRowsPerPage(

                                        Number(e.target.value)

                                    );

                                    setCurrentPage(1);

                                }}

                                className="rounded-xl border px-3 py-2"

                            >

                                <option value={5}>5</option>

                                <option value={10}>10</option>

                                <option value={20}>20</option>

                                <option value={50}>50</option>

                            </select>

                        </div>

                        <p className="text-sm text-slate-500">

                            Showing

                            {" "}

                            <strong>

                                {

                                    filteredHistory.length === 0

                                        ? 0

                                        : startIndex + 1

                                }

                            </strong>

                            -

                            <strong>

                                {

                                    Math.min(

                                        startIndex +

                                        rowsPerPage,

                                        filteredHistory.length

                                    )

                                }

                            </strong>

                            {" "}

                            of

                            {" "}

                            <strong>

                                {

                                    filteredHistory.length

                                }

                            </strong>

                        </p>

                        <div className="flex items-center gap-2">

                            <button

                                disabled={

                                    currentPage === 1

                                }

                                onClick={() =>

                                    setCurrentPage(

                                        (prev) =>

                                            prev - 1

                                    )

                                }

                                className="rounded-xl border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"

                            >

                                Prev

                            </button>

                            {

                                Array.from(

                                    {

                                        length:

                                            totalPages,

                                    }

                                ).map((_, index) => (

                                    <button

                                        key={index}

                                        onClick={() =>

                                            setCurrentPage(

                                                index + 1

                                            )

                                        }

                                        className={`h-10 w-10 rounded-xl ${currentPage ===

                                            index + 1

                                            ? "bg-[#009A9E] text-white"

                                            : "border"

                                            }`}

                                    >

                                        {

                                            index + 1

                                        }

                                    </button>

                                ))

                            }

                            <button

                                disabled={

                                    currentPage ===

                                    totalPages

                                }

                                onClick={() =>

                                    setCurrentPage(

                                        (prev) =>

                                            prev + 1

                                    )

                                }

                                className="rounded-xl border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"

                            >

                                Next

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );

}