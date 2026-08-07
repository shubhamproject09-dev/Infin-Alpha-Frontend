"use client";

import {
    CalendarDays,
    Download,
    Eye,
    FileText,
    HardDrive,
    Trash2,
} from "lucide-react";
import { useState } from "react";
import PdfPreviewDialog from "./PdfPreviewDialog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type {
    AppDispatch,
    RootState,
} from "@/redux/store";

import {
    getInvestorComplaint,
    deleteInvestorComplaint,
} from "@/redux/investorComplaint/investorComplaintThunk";

import { toast } from "react-hot-toast";

export default function PdfCard() {
    const [previewOpen, setPreviewOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const {

        pdf,

        loading,

        deleting,

    } = useSelector(

        (state: RootState) =>

            state.investorComplaint

    );

    useEffect(() => {

        dispatch(

            getInvestorComplaint()

        );

    }, [dispatch]);


    const handleDelete = async () => {

        if (!pdf?._id) return;

        const ok = window.confirm(

            "Delete current PDF?"

        );

        if (!ok) return;

        try {

            await dispatch(deleteInvestorComplaint(pdf._id)).unwrap();

            dispatch(getInvestorComplaint());

            toast.success("PDF deleted successfully.");

        } catch (error: any) {

            toast.error(error);

        }

    };

    if (loading) {

        return (

            <div className="flex h-96 items-center justify-center rounded-3xl border bg-white">

                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#009A9E]" />

            </div>

        );

    }

    if (!pdf) {
        return (
            <div className="flex h-96 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white">

                <FileText
                    size={60}
                    className="text-slate-300"
                />

                <h2 className="mt-4 text-xl font-semibold">
                    No PDF Uploaded
                </h2>

                <p className="mt-2 text-slate-500">
                    Upload Investor Complaint PDF
                </p>

            </div>
        );
    }

    return (
        <>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl">

                {/* Header */}

                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-cyan-50 px-6 py-5">

                    <div className="flex items-center justify-between">

                        <div>

                            <h2 className="text-xl font-bold text-slate-800">

                                Current Uploaded PDF

                            </h2>

                            <p className="mt-1 text-sm text-slate-500">

                                Current document available on the website

                            </p>

                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#009A9E]/10">

                            <FileText
                                size={28}
                                className="text-[#009A9E]"
                            />

                        </div>

                    </div>

                </div>

                {/* Body */}

                <div className="space-y-6 p-6">

                    {/* PDF Preview */}

                    <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100">

                            <FileText
                                size={40}
                                className="text-red-600"
                            />

                        </div>

                        <div className="flex-1">

                            <h3 className="text-lg font-semibold text-slate-800">

                                {pdf.fileName}

                            </h3>

                            <p className="mt-1 text-sm text-slate-500">

                                Investor Complaint PDF Document

                            </p>

                            <span className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

                                {pdf.isActive ? "Active" : "Inactive"}

                            </span>

                        </div>

                    </div>

                    {/* Details */}

                    <div className="grid gap-4 sm:grid-cols-2">

                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">

                            <CalendarDays
                                className="text-[#009A9E]"
                                size={22}
                            />

                            <div>

                                <p className="text-xs text-slate-500">

                                    Uploaded On

                                </p>

                                <p className="font-semibold">

                                    {new Date(pdf.createdAt).toLocaleDateString("en-IN")}

                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">

                            <HardDrive
                                className="text-[#009A9E]"
                                size={22}
                            />

                            <div>

                                <p className="text-xs text-slate-500">

                                    File Size

                                </p>

                                <p className="font-semibold">

                                    {(pdf.fileSize / 1024 / 1024).toFixed(2)} MB

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="grid gap-3 sm:grid-cols-3">

                        <button
                            onClick={() => setPreviewOpen(true)}
                            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-medium transition hover:bg-slate-100"
                        >

                            <Eye size={18} />

                            Preview

                        </button>

                        <a
                            href={pdf.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#009A9E] py-3 font-medium text-white transition hover:bg-[#007d80]"
                        >
                            <Download size={18} />
                            Download
                        </a>

                        <button
                            onClick={handleDelete}
                            disabled={deleting}
                            className="flex items-center justify-center gap-2 rounded-xl bg-red-50 py-3 font-medium text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                        >
                            <Trash2 size={18} />

                            {deleting ? "Deleting..." : "Delete"}

                        </button>

                    </div>

                </div>

            </div>
            <PdfPreviewDialog
                open={previewOpen}
                onOpenChange={setPreviewOpen}
                pdfUrl={pdf.fileUrl}
                fileName={pdf.fileName}
            />
        </>
    );
}