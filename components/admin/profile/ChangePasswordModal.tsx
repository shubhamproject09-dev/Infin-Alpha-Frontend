"use client";

import { useState } from "react";

import {
    X,
    Lock,
    Eye,
    EyeOff,
    ShieldCheck,
    KeyRound,
} from "lucide-react";

import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

import type {
    AppDispatch,
    RootState,
} from "@/redux/store";

import { changePassword } from "@/redux/admin/adminThunk";

import { logout } from "@/utils/auth";

interface Props {
    open: boolean;
    loading?: boolean;
    onClose: () => void;
    onSubmit?: (data: {
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }) => void;
}

export default function ChangePasswordModal({
    open,
    loading = false,
    onClose,
    onSubmit,
}: Props) {

    const dispatch = useDispatch<AppDispatch>();

    const router = useRouter();

    const {
        changingPassword,
    } = useSelector(
        (state: RootState) => state.admin
    );

    const [oldPassword, setOldPassword] = useState("");

    const [newPassword, setNewPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [showOld, setShowOld] = useState(false);

    const [showNew, setShowNew] = useState(false);

    const [showConfirm, setShowConfirm] = useState(false);

    if (!open) return null;

    const passwordStrength = () => {

        if (newPassword.length === 0)
            return {
                width: "0%",
                text: "",
                color: "bg-slate-300",
            };

        if (newPassword.length < 6)
            return {
                width: "30%",
                text: "Weak",
                color: "bg-red-500",
            };

        if (newPassword.length < 10)
            return {
                width: "70%",
                text: "Medium",
                color: "bg-yellow-500",
            };

        return {
            width: "100%",
            text: "Strong",
            color: "bg-green-500",
        };

    };

    const strength = passwordStrength();

    const handleSubmit = async () => {

        try {

            await dispatch(

                changePassword({

                    oldPassword,

                    newPassword,

                    confirmPassword,

                })

            ).unwrap();

            toast.success(

                "Password changed successfully."

            );

            setOldPassword("");

            setNewPassword("");

            setConfirmPassword("");

            onClose();

            logout();

            router.replace("/admin/login");

        }

        catch (error: any) {

            toast.error(

                error ||

                "Failed to change password."

            );

        }

    };

    return (

        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/70 backdrop-blur-md">

            <div className="flex min-h-screen items-center justify-center p-4">

                <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl">

                    {/* Header */}

                    <div className="relative overflow-hidden bg-gradient-to-r from-[#00314A] via-[#014C63] to-[#009A9E] px-8 py-8 text-white">

                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                        <button
                            onClick={onClose}
                            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex items-center gap-5">

                            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/20 bg-white/10">

                                <ShieldCheck size={40} />

                            </div>

                            <div>

                                <h2 className="text-3xl font-bold">

                                    Change Password

                                </h2>

                                <p className="mt-2 text-sm text-cyan-100">

                                    Keep your account secure by updating your password regularly.

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Body */}

                    <div className="space-y-6 p-8">
                        {/* =========================
    Old Password
========================= */}

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">

                                <Lock size={16} />

                                Old Password

                            </label>

                            <div className="relative">

                                <input
                                    type={showOld ? "text" : "password"}
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    placeholder="Enter old password"
                                    className="w-full rounded-2xl border border-slate-200 py-3 pl-4 pr-12 outline-none transition-all focus:border-[#009A9E] focus:ring-4 focus:ring-cyan-100"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowOld(!showOld)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#009A9E]"
                                >
                                    {showOld ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>

                            </div>

                        </div>

                        {/* =========================
    New Password
========================= */}

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">

                                <KeyRound size={16} />

                                New Password

                            </label>

                            <div className="relative">

                                <input
                                    type={showNew ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    className="w-full rounded-2xl border border-slate-200 py-3 pl-4 pr-12 outline-none transition-all focus:border-[#009A9E] focus:ring-4 focus:ring-cyan-100"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowNew(!showNew)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#009A9E]"
                                >
                                    {showNew ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>

                            </div>

                        </div>

                        {/* =========================
    Password Strength
========================= */}

                        <div>

                            <div className="mb-2 flex items-center justify-between">

                                <span className="text-sm font-medium text-slate-600">

                                    Password Strength

                                </span>

                                <span className="text-sm font-semibold text-[#009A9E]">

                                    {strength.text}

                                </span>

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                                <div
                                    style={{
                                        width: strength.width,
                                    }}
                                    className={`h-full transition-all duration-500 ${strength.color}`}
                                />

                            </div>

                        </div>

                        {/* =========================
    Confirm Password
========================= */}

                        <div>

                            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">

                                <ShieldCheck size={16} />

                                Confirm Password

                            </label>

                            <div className="relative">

                                <input
                                    type={showConfirm ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm new password"
                                    className={`w-full rounded-2xl border py-3 pl-4 pr-12 outline-none transition-all focus:ring-4
            ${confirmPassword &&
                                            confirmPassword !== newPassword
                                            ? "border-red-400 focus:ring-red-100"
                                            : "border-slate-200 focus:border-[#009A9E] focus:ring-cyan-100"
                                        }`}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirm(!showConfirm)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#009A9E]"
                                >
                                    {showConfirm ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>

                            </div>

                            {confirmPassword &&
                                confirmPassword !== newPassword && (
                                    <p className="mt-2 text-sm font-medium text-red-500">

                                        Passwords do not match

                                    </p>
                                )}

                            {confirmPassword &&
                                confirmPassword === newPassword && (
                                    <p className="mt-2 text-sm font-medium text-green-600">

                                        Password matched successfully

                                    </p>
                                )}

                        </div>
                        {/* =========================
                    Security Tips
                ========================= */}

                        <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5">

                            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#00314A]">

                                <ShieldCheck
                                    size={18}
                                />

                                Password Requirements

                            </h4>

                            <ul className="space-y-2 text-sm text-slate-600">

                                <li>
                                    • Minimum 8 characters
                                </li>

                                <li>
                                    • At least one uppercase letter
                                </li>

                                <li>
                                    • At least one lowercase letter
                                </li>

                                <li>
                                    • At least one number
                                </li>

                                <li>
                                    • At least one special character
                                </li>

                            </ul>

                        </div>

                        {/* =========================
                    Footer Buttons
                ========================= */}

                        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">

                            <button

                                type="button"

                                onClick={onClose}

                                disabled={changingPassword}

                                className="rounded-2xl border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"

                            >

                                Cancel

                            </button>

                            <button

                                type="button"

                                onClick={handleSubmit}

                                disabled={
                                    changingPassword ||
                                    !oldPassword ||
                                    !newPassword ||
                                    !confirmPassword ||
                                    newPassword !== confirmPassword
                                }

                                className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#00314A] via-[#014C63] to-[#009A9E] px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"

                            >

                                {

                                    changingPassword ? (

                                        <>

                                            <svg
                                                className="mr-3 h-5 w-5 animate-spin"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >

                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    className="opacity-20"
                                                />

                                                <path
                                                    d="M22 12a10 10 0 0 1-10 10"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                />

                                            </svg>

                                            Updating...

                                        </>

                                    ) : (

                                        <>

                                            <Lock
                                                size={18}
                                                className="mr-2"
                                            />

                                            Update Password

                                        </>

                                    )

                                }

                            </button>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    );

}