"use client";

import { AlertTriangle } from "lucide-react";

interface Props {

    open: boolean;

    loading?: boolean;

    onClose: () => void;

    onConfirm: () => void;

}

export default function DeleteConfirmModal({

    open,

    loading = false,

    onClose,

    onConfirm,

}: Props) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">

                    <AlertTriangle className="text-red-600" size={34} />

                </div>

                <h2 className="mt-6 text-center text-2xl font-bold">

                    Delete Admin?

                </h2>

                <p className="mt-3 text-center text-slate-500">

                    This action cannot be undone.

                    Are you sure you want to delete this admin?

                </p>

                <div className="mt-8 flex gap-3">

                    <button

                        onClick={onClose}

                        className="flex-1 rounded-xl border py-3 font-semibold"

                    >

                        Cancel

                    </button>

                    <button

                        disabled={loading}

                        onClick={onConfirm}

                        className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700"

                    >

                        {loading ? "Deleting..." : "Delete"}

                    </button>

                </div>

            </div>

        </div>

    );

}