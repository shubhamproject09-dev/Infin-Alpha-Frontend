"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    X,
    Mail,
    ShieldCheck,
    LockKeyhole,
    ArrowLeft,
} from "lucide-react";
import {
    Eye,
    EyeOff,
    CheckCircle2,
    XCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

import {
    forgotPassword,
    verifyOTP,
    resetPassword,
} from "@/redux/auth/authThunk";

import {
    AppDispatch,
    RootState,
} from "@/redux/store";

import {
    useDispatch,
    useSelector,
} from "react-redux";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function ForgotPasswordModal({
    open,
    onClose,
}: Props) {

    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");

    const [otp, setOtp] = useState("");

    const [newPassword, setNewPassword] =
        useState("");
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [timeLeft, setTimeLeft] = useState(120);

    const [canResend, setCanResend] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    const {

        forgotLoading,

        verifyLoading,

        resetLoading,

        resetToken

    } = useSelector(

        (state: RootState) => state.auth

    );

    const [
        confirmPassword,
        setConfirmPassword,
    ] = useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [
        showConfirmPassword,
        setShowConfirmPassword,
    ] = useState(false);

    useEffect(() => {

        if (step !== 2) return;

        if (timeLeft <= 0) {

            setCanResend(true);

            return;

        }

        const timer = setInterval(() => {

            setTimeLeft((prev) => prev - 1);

        }, 1000);

        return () => clearInterval(timer);

    }, [step, timeLeft]);

    const formatTime = () => {

        const minute = Math.floor(timeLeft / 60);

        const second = timeLeft % 60;

        return `${minute}:${second

            .toString()

            .padStart(2, "0")}`;

    };

    const handleOtpChange = (

        value: string,

        index: number

    ) => {

        if (!/^[0-9]?$/.test(value))

            return;

        const otpArray = otp.split("");

        otpArray[index] = value;

        const newOtp = otpArray.join("");

        setOtp(newOtp);

        if (

            value &&

            index < 5

        ) {

            inputRefs.current[index + 1]?.focus();

        }

    };

    const handleKeyDown = (

        e: React.KeyboardEvent<HTMLInputElement>,

        index: number

    ) => {

        if (

            e.key === "Backspace" &&

            !otp[index] &&

            index > 0

        ) {

            inputRefs.current[index - 1]?.focus();

        }

    };

    const handlePaste = (

        e: React.ClipboardEvent<HTMLInputElement>

    ) => {

        e.preventDefault();

        const pasted =

            e.clipboardData

                .getData("text")

                .replace(/\D/g, "")

                .slice(0, 6);

        if (!pasted) return;

        setOtp(pasted);

        pasted.split("").forEach(

            (digit, index) => {

                if (

                    inputRefs.current[index]

                ) {

                    inputRefs.current[index]!.value = digit;

                }

            }

        );

    };

    const passwordRules = {

        length:
            newPassword.length >= 8,

        uppercase:
            /[A-Z]/.test(newPassword),

        lowercase:
            /[a-z]/.test(newPassword),

        number:
            /[0-9]/.test(newPassword),

        special:
            /[^A-Za-z0-9]/.test(newPassword),

    };

    const strength = Object.values(
        passwordRules
    ).filter(Boolean).length;


    const resetModal = () => {

        setStep(1);

        setEmail("");

        setOtp("");

        setNewPassword("");

        setConfirmPassword("");

        setTimeLeft(120);

        setCanResend(false);

        setShowPassword(false);

        setShowConfirmPassword(false);

        inputRefs.current.forEach((item) => {

            if (item) {

                item.value = "";

            }

        });

    };

    if (!open) return null;

    const progress =
        step === 1
            ?
            33
            :
            step === 2
                ?
                66
                :
                100;

    return (

        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">

            <motion.div

                initial={{
                    opacity: 0,
                    scale: .92,
                    y: 40,
                }}

                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}

                exit={{
                    opacity: 0,
                    scale: .92,
                }}

                transition={{
                    duration: .30,
                }}

                className="relative flex max-h-[100vh] w-full max-w-xl flex-col overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-[0_30px_80px_rgba(0,0,0,.25)]"

            >

                {/* Decorative */}

                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />

                <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />

                {/* Header */}

                <div className="relative overflow-hidden bg-gradient-to-r from-[#00314A] via-[#005B77] to-[#009A9E] px-8 py-8 text-white">

                    <button

                        onClick={() => {
                            resetModal();
                            onClose();
                        }}

                        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:rotate-90 hover:bg-white/20"

                    >

                        <X size={20} />

                    </button>

                    <div className="flex items-center gap-5">

                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-xl">

                            {

                                step === 1 ?

                                    <Mail size={34} />

                                    :

                                    step === 2 ?

                                        <ShieldCheck size={34} />

                                        :

                                        <LockKeyhole size={34} />

                            }

                        </div>

                        <div>

                            <p className="text-sm tracking-widest text-cyan-100 uppercase">

                                Account Recovery

                            </p>

                            <h2 className="mt-2 text-3xl font-bold">

                                Forgot Password

                            </h2>

                            <p className="mt-2 text-sm text-cyan-100">

                                Verify your identity to reset your password.

                            </p>

                        </div>

                    </div>

                </div>

                {/* Progress */}

                <div className="px-8 pt-6">

                    <div className="mb-3 flex items-center justify-between">

                        <span className="text-sm font-semibold text-slate-700">

                            Step {step} of 3

                        </span>

                        <span className="text-sm text-[#009A9E] font-bold">

                            {Math.round(progress)}%

                        </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                        <motion.div

                            animate={{

                                width: `${progress}%`,

                            }}

                            transition={{

                                duration: .35,

                            }}

                            className="h-full rounded-full bg-gradient-to-r from-[#00314A] to-[#009A9E]"

                        />

                    </div>

                </div>

                {/* Body */}

                <div className="flex-1 overflow-y-auto px-8 py-8">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key="step1"
                            initial={{
                                opacity: 0,
                                x: 40,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: -40,
                            }}
                            transition={{
                                duration: .30,
                            }}
                            className="space-y-8"
                        >

                            <div className="text-center">

                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100">

                                    <Mail
                                        size={36}
                                        className="text-[#009A9E]"
                                    />

                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-800">

                                    Verify Your Email

                                </h3>

                                <p className="mt-3 text-slate-500 leading-relaxed">

                                    Enter your registered email address.
                                    We'll send a secure verification code
                                    to reset your password.

                                </p>

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-slate-700">

                                    Email Address

                                </label>

                                <div className="relative">

                                    <Mail
                                        size={20}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input

                                        type="email"

                                        value={email}

                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }

                                        placeholder="Enter your email"

                                        className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 pl-12 pr-4 text-slate-700 outline-none transition-all duration-300 focus:border-[#009A9E] focus:bg-white focus:ring-4 focus:ring-cyan-100"

                                    />

                                </div>

                                {
                                    email &&
                                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (

                                        <p className="mt-2 text-sm font-medium text-red-500">

                                            Please enter a valid email address.

                                        </p>

                                    )
                                }

                            </div>

                            <button

                                disabled={
                                    forgotLoading ||
                                    !email ||
                                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                                }

                                onClick={async () => {

                                    const result = await dispatch(

                                        forgotPassword(email)

                                    );

                                    if (

                                        forgotPassword.fulfilled.match(result)

                                    ) {

                                        toast.success(result.payload);

                                        setStep(2);

                                        setTimeLeft(120);

                                        setCanResend(false);

                                    } else {

                                        toast.error(

                                            result.payload as string

                                        );

                                    }

                                }}

                                className="flex h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#00314A] to-[#009A9E] text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-50"

                            >

                                {
                                    forgotLoading
                                        ?
                                        "Sending..."
                                        :
                                        "Send Verification Code"
                                }

                            </button>

                            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5">

                                <div className="flex items-start gap-3">

                                    <ShieldCheck
                                        size={22}
                                        className="mt-0.5 text-[#009A9E]"
                                    />

                                    <div>

                                        <h4 className="font-semibold text-slate-800">

                                            Security Notice

                                        </h4>

                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">

                                            A secure 6-digit verification code
                                            will be sent to your registered
                                            email. The OTP will expire in
                                            <span className="font-semibold text-[#009A9E]">
                                                {" "}2 minutes
                                            </span>
                                            .

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                        {
                            step === 2 && (

                                <motion.div
                                    key="step2"
                                    initial={{
                                        opacity: 0,
                                        x: 40,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -40,
                                    }}
                                    transition={{
                                        duration: .30,
                                    }}
                                    className="space-y-8"
                                >

                                    {/* Icon */}

                                    <div className="text-center">

                                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                                            <ShieldCheck
                                                size={36}
                                                className="text-green-600"
                                            />

                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold text-slate-800">

                                            Verify OTP

                                        </h3>

                                        <p className="mt-3 text-slate-500">

                                            We've sent a 6-digit verification code to

                                        </p>

                                        <p className="mt-2 font-semibold text-[#009A9E]">

                                            {email}

                                        </p>

                                    </div>

                                    {/* OTP */}

                                    <div>

                                        <label className="mb-4 block text-center text-sm font-semibold text-slate-700">

                                            Enter Verification Code

                                        </label>

                                        <div className="flex flex-wrap justify-center gap-3">

                                            {
                                                Array.from({ length: 6 }).map((_, index) => (

                                                    <input

                                                        key={index}

                                                        ref={(el) => {
                                                            inputRefs.current[index] = el;
                                                        }}

                                                        type="text"

                                                        inputMode="numeric"

                                                        maxLength={1}

                                                        value={otp[index] || ""}

                                                        onPaste={handlePaste}

                                                        onKeyDown={(e) =>
                                                            handleKeyDown(e, index)
                                                        }

                                                        onChange={(e) =>
                                                            handleOtpChange(
                                                                e.target.value,
                                                                index
                                                            )
                                                        }

                                                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border border-slate-300 text-center text-xl sm:text-2xl font-bold outline-none transition focus:border-[#009A9E] focus:ring-4 focus:ring-cyan-100"

                                                    />

                                                ))
                                            }

                                        </div>

                                    </div>

                                    {/* Timer */}

                                    <div className="text-center">

                                        <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-5 py-2">

                                            <span className="text-orange-500">

                                                ⏳

                                            </span>

                                            <span className="font-semibold text-orange-600">

                                                {
                                                    timeLeft <= 0
                                                        ?
                                                        "OTP Expired"
                                                        :
                                                        `${formatTime()} Remaining`
                                                }

                                            </span>

                                        </div>

                                    </div>

                                    {/* Resend */}

                                    <div className="text-center">

                                        <button

                                            disabled={!canResend}

                                            onClick={async () => {

                                                setTimeLeft(120);

                                                setCanResend(false);

                                                setOtp("");

                                                inputRefs.current.forEach((item) => {

                                                    if (item) {

                                                        item.value = "";

                                                    }

                                                });

                                                inputRefs.current[0]?.focus();

                                                const result = await dispatch(
                                                    forgotPassword(email)
                                                );

                                                if (forgotPassword.fulfilled.match(result)) {

                                                    toast.success("OTP Sent Again");

                                                } else {

                                                    toast.error(result.payload as string);

                                                }

                                            }}

                                            className="font-semibold text-[#009A9E] disabled:text-slate-400"

                                        >

                                            Resend OTP

                                        </button>

                                    </div>

                                    {/* Verify */}

                                    <button

                                        disabled={
                                            verifyLoading ||
                                            otp.length !== 6
                                        }

                                        onClick={async () => {

                                            const result = await dispatch(

                                                verifyOTP({

                                                    email,

                                                    otp,

                                                })

                                            );

                                            if (

                                                verifyOTP.fulfilled.match(result)

                                            ) {

                                                toast.success(
                                                    "OTP Verified Successfully"
                                                );

                                                setStep(3);

                                            } else {

                                                toast.error(

                                                    result.payload as string

                                                );

                                            }

                                        }}

                                        className="flex h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#00314A] to-[#009A9E] text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"

                                    >

                                        {
                                            verifyLoading
                                                ?
                                                "Verifying..."
                                                :
                                                "Verify OTP"
                                        }

                                    </button>

                                    {/* Info */}

                                    <div className="rounded-2xl border border-green-100 bg-green-50 p-5">

                                        <div className="flex gap-3">

                                            <ShieldCheck
                                                size={22}
                                                className="mt-1 text-green-600"
                                            />

                                            <div>

                                                <h4 className="font-semibold">

                                                    Security Verification

                                                </h4>

                                                <p className="mt-1 text-sm text-slate-600">

                                                    Your OTP is valid for only
                                                    <span className="font-semibold text-green-600">

                                                        {" "}2 minutes

                                                    </span>.
                                                    Never share this code with anyone.

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </motion.div>

                            )
                        }

                        {
                            step === 3 && (

                                <motion.div

                                    key="step3"

                                    initial={{
                                        opacity: 0,
                                        x: 40,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}

                                    exit={{
                                        opacity: 0,
                                        x: -40,
                                    }}

                                    transition={{
                                        duration: .30,
                                    }}

                                    className="space-y-7"

                                >

                                    {/* Header */}

                                    <div className="text-center">

                                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100">

                                            <LockKeyhole
                                                size={36}
                                                className="text-[#009A9E]"
                                            />

                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold text-slate-800">

                                            Create New Password

                                        </h3>

                                        <p className="mt-3 text-slate-500">

                                            Your identity has been verified.

                                            Create a strong password.

                                        </p>

                                    </div>

                                    {/* Password */}

                                    <div className="relative">

                                        <input

                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }

                                            value={newPassword}

                                            onChange={(e) =>
                                                setNewPassword(
                                                    e.target.value
                                                )
                                            }

                                            placeholder="Enter new password"

                                            className="h-14 w-full rounded-2xl border border-slate-300 px-5 pr-14 outline-none transition focus:border-[#009A9E] focus:ring-4 focus:ring-cyan-100"

                                        />

                                        <button

                                            type="button"

                                            onClick={() =>
                                                setShowPassword(
                                                    !showPassword
                                                )
                                            }

                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"

                                        >

                                            {

                                                showPassword

                                                    ?

                                                    <EyeOff size={20} />

                                                    :

                                                    <Eye size={20} />

                                            }

                                        </button>

                                    </div>

                                    {/* Confirm */}

                                    <div className="relative">

                                        <input

                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }

                                            value={confirmPassword}

                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }

                                            placeholder="Confirm Password"

                                            className="h-14 w-full rounded-2xl border border-slate-300 px-5 pr-14 outline-none transition focus:border-[#009A9E] focus:ring-4 focus:ring-cyan-100"

                                        />

                                        <button

                                            type="button"

                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }

                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"

                                        >

                                            {

                                                showConfirmPassword

                                                    ?

                                                    <EyeOff size={20} />

                                                    :

                                                    <Eye size={20} />

                                            }

                                        </button>

                                    </div>

                                    {/* Strength */}

                                    <div>

                                        <div className="mb-3 flex items-center justify-between">

                                            <span className="text-sm font-semibold">

                                                Password Strength

                                            </span>

                                            <span className="font-semibold">

                                                {

                                                    strength <= 2

                                                        ?

                                                        "Weak"

                                                        :

                                                        strength <= 4

                                                            ?

                                                            "Medium"

                                                            :

                                                            "Strong"

                                                }

                                            </span>

                                        </div>

                                        <div className="h-2 rounded-full bg-slate-200">

                                            <div

                                                style={{

                                                    width: `${strength * 20

                                                        }%`,

                                                }}

                                                className={`h-full rounded-full transition-all duration-300

                ${strength <= 2

                                                        ?

                                                        "bg-red-500"

                                                        :

                                                        strength <= 4

                                                            ?

                                                            "bg-yellow-500"

                                                            :

                                                            "bg-green-500"

                                                    }`}

                                            />

                                        </div>

                                    </div>

                                    {/* Rules */}

                                    <div className="rounded-2xl border bg-slate-50 p-5">

                                        <div className="space-y-3">

                                            {

                                                [

                                                    [

                                                        passwordRules.length,

                                                        "Minimum 8 Characters",

                                                    ],

                                                    [

                                                        passwordRules.uppercase,

                                                        "One Uppercase Letter",

                                                    ],

                                                    [

                                                        passwordRules.lowercase,

                                                        "One Lowercase Letter",

                                                    ],

                                                    [

                                                        passwordRules.number,

                                                        "One Number",

                                                    ],

                                                    [

                                                        passwordRules.special,

                                                        "One Special Character",

                                                    ],

                                                ].map(

                                                    ([valid, text]) => (

                                                        <div

                                                            key={String(text)}

                                                            className="flex items-center gap-3"

                                                        >

                                                            {

                                                                valid

                                                                    ?

                                                                    <CheckCircle2

                                                                        size={18}

                                                                        className="text-green-600"

                                                                    />

                                                                    :

                                                                    <XCircle

                                                                        size={18}

                                                                        className="text-red-500"

                                                                    />

                                                            }

                                                            <span>

                                                                {text}

                                                            </span>

                                                        </div>

                                                    )

                                                )

                                            }

                                        </div>

                                    </div>

                                    {/* Match */}

                                    {

                                        confirmPassword && (

                                            <div
                                                className={`rounded-xl p-3 text-sm font-medium ${newPassword === confirmPassword
                                                    ? "bg-green-50 text-green-600"
                                                    : "bg-red-50 text-red-600"
                                                    }`}
                                            >

                                                {

                                                    newPassword === confirmPassword

                                                        ?

                                                        "✔ Passwords matched"

                                                        :

                                                        "✖ Passwords do not match"

                                                }

                                            </div>

                                        )

                                    }

                                    {/* Button */}

                                    <button

                                        disabled={
                                            resetLoading ||
                                            Object.values(passwordRules).includes(false) ||
                                            newPassword !== confirmPassword
                                        }

                                        onClick={async () => {

                                            if (!resetToken) {

                                                toast.error("Reset session expired. Please verify OTP again.");

                                                setStep(2);

                                                return;

                                            }

                                            const result = await dispatch(

                                                resetPassword({
                                                    resetToken,
                                                    password: newPassword,
                                                    confirmPassword,
                                                })

                                            );

                                            if (

                                                resetPassword.fulfilled.match(result)

                                            ) {

                                                toast.success(

                                                    "Password Reset Successfully"

                                                );

                                                resetModal();

                                                onClose();

                                            } else {

                                                toast.error(

                                                    result.payload as string

                                                );

                                            }

                                        }}

                                        className="flex h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#00314A] to-[#009A9E] text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"

                                    >

                                        {
                                            resetLoading
                                                ?
                                                "Resetting..."
                                                :
                                                "Reset Password"
                                        }

                                    </button>

                                </motion.div>

                            )
                        }

                    </AnimatePresence>

                </div>

                {/* Footer */}

                <div className="sticky bottom-0 flex items-center justify-between border-t bg-slate-50 px-8 py-5">

                    {

                        step > 1 ?

                            (

                                <button

                                    onClick={() => {

                                        if (step === 3) {

                                            setNewPassword("");

                                            setConfirmPassword("");

                                        }

                                        setStep(step - 1);

                                    }}

                                    className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium transition hover:bg-slate-100"

                                >

                                    <ArrowLeft size={18} />

                                    Back

                                </button>

                            )

                            :

                            <div />

                    }

                    <div className="text-sm text-slate-500">

                        Secure Password Recovery

                    </div>

                </div>

            </motion.div >

        </div >

    );

}