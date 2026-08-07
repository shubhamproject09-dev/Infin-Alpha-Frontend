"use client";

import { useRef, useState } from "react";
import {
    UploadCloud,
    FileText,
    CheckCircle2,
    XCircle,
    RefreshCcw,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import type {
    AppDispatch,
    RootState,
} from "@/redux/store";

import {
    uploadInvestorComplaint,
    getInvestorComplaint,
} from "@/redux/investorComplaint/investorComplaintThunk";

import { toast } from "react-hot-toast";

export default function UploadCard() {

    const dispatch = useDispatch<AppDispatch>();

    const { uploading } = useSelector(

        (state: RootState) =>

            state.investorComplaint

    );

    const inputRef = useRef<HTMLInputElement>(null);

    const [file, setFile] = useState<File | null>(null);

    const [error, setError] = useState("");

    const MAX_SIZE = 5 * 1024 * 1024;

    const handleFile = (selected: File | null) => {

        if (!selected) return;

        setError("");

        if (selected.type !== "application/pdf") {

            setError("Only PDF files are allowed.");

            return;
        }

        if (selected.size > MAX_SIZE) {

            setError("Maximum file size is 5 MB.");

            return;
        }

        setFile(selected);
    };

    const onBrowse = () => {

        inputRef.current?.click();

    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        handleFile(e.target.files?.[0] || null);

    };

    const removeFile = () => {

        setFile(null);

        setError("");

        if (inputRef.current) {

            inputRef.current.value = "";

        }

    };

    const uploadPdf = async () => {

        if (!file) {

            toast.error(

                "Please select a PDF."

            );

            return;

        }

        try {

            const formData = new FormData();

            formData.append(

                "pdf",

                file

            );

            await dispatch(

                uploadInvestorComplaint(formData)

            ).unwrap();

            toast.success(

                "PDF uploaded successfully."

            );

            dispatch(

                getInvestorComplaint()

            );

            setFile(null);

            if (inputRef.current) {

                inputRef.current.value = "";

            }

        } catch (error: any) {

            toast.error(error);

        }

    };

    return (

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">

            {/* Header */}

            <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-cyan-50 px-6 py-5">

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-xl font-bold text-slate-800">

                            Upload New PDF

                        </h2>

                        <p className="mt-1 text-sm text-slate-500">

                            Replace the current Investor Complaint document.

                        </p>

                    </div>

                    <div className="rounded-2xl bg-[#009A9E]/10 p-4">

                        <UploadCloud
                            size={28}
                            className="text-[#009A9E]"
                        />

                    </div>

                </div>

            </div>

            {/* Body */}

            <div className="space-y-6 p-6">

                <input
                    ref={inputRef}
                    type="file"
                    accept=".pdf"
                    hidden
                    onChange={onChange}
                />

                {/* Upload Area */}

                <div
                    onClick={onBrowse}
                    className="cursor-pointer rounded-3xl border-2 border-dashed border-[#009A9E]/40 bg-cyan-50 p-10 text-center transition hover:border-[#009A9E] hover:bg-cyan-100/40"
                >

                    <UploadCloud
                        size={55}
                        className="mx-auto text-[#009A9E]"
                    />

                    <h3 className="mt-5 text-lg font-semibold">

                        Drag & Drop PDF Here

                    </h3>

                    <p className="mt-2 text-sm text-slate-500">

                        or click to browse your computer

                    </p>

                    <p className="mt-5 text-xs text-slate-400">

                        Only PDF • Maximum 5 MB

                    </p>

                </div>

                {/* Error */}

                {error && (

                    <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-red-600">

                        <XCircle size={20} />

                        <span>{error}</span>

                    </div>

                )}

                {/* Selected File */}

                {file && (

                    <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

                        <div className="flex items-center gap-4">

                            <FileText
                                className="text-red-600"
                                size={40}
                            />

                            <div className="flex-1">

                                <h4 className="font-semibold">

                                    {file.name}

                                </h4>

                                <p className="text-sm text-slate-500">

                                    {(file.size / 1024 / 1024).toFixed(2)} MB

                                </p>

                            </div>

                            <CheckCircle2
                                className="text-green-600"
                                size={28}
                            />

                        </div>

                    </div>

                )}

                {/* Buttons */}

                <div className="grid gap-3 sm:grid-cols-2">

                    <button
                        disabled={!file}
                        onClick={removeFile}
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-medium transition hover:bg-slate-100"
                    >

                        <RefreshCcw size={18} />

                        Reset

                    </button>

                    <button
                        disabled={!file || uploading}
                        onClick={uploadPdf}
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#009A9E] py-3 font-semibold text-white transition hover:bg-[#007d80] disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                        {
                            uploading ? (

                                <>

                                    <UploadCloud

                                        size={18}

                                        className="animate-bounce"

                                    />

                                    Uploading...

                                </>

                            ) : (

                                <>

                                    <UploadCloud size={18} />

                                    Upload PDF

                                </>

                            )
                        }

                    </button>

                </div>

            </div>

        </div>

    );

}