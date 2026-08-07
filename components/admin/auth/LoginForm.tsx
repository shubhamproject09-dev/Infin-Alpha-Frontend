"use client";

import { useState } from "react";
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    Loader2,
    ArrowRight,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../../redux/auth/authThunk";
import { useEffect } from "react";
import type {
    RootState,
    AppDispatch,
} from "../../../redux/store";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import ForgotPasswordModal from "./ForgotPasswordModal";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const [openForgotPassword, setOpenForgotPassword] = useState(false);
    const router = useRouter();

    const {
        loading,
        error,
        isAuthenticated,
    } = useSelector(
        (state: RootState) => state.auth
    );

    const [form, setForm] = useState({

        email: "",

        password: "",

    });

    useEffect(() => {

        if (isAuthenticated) {

            toast.success(

                "Login Successful"

            );

            router.replace(

                "/admin/dashboard"

            );

        }

    }, [

        isAuthenticated,

        router,

    ]);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        dispatch(loginAdmin(form));

    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                {/* Email */}

                <div>
                    <label className="mb-2 block text-sm font-medium text-cyan-100">
                        Email Address
                    </label>

                    <div className="flex h-14 items-center rounded-2xl border border-white/20 bg-white/10 px-4 backdrop-blur-xl transition focus-within:border-cyan-300">

                        <Mail
                            size={20}
                            className="text-cyan-200"
                        />

                        <input

                            type="email"

                            value={form.email}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    email: e.target.value,

                                })

                            }

                            placeholder="admin@infinalpha.com"

                            className="ml-3 h-full w-full bg-transparent text-white outline-none placeholder:text-cyan-100/70"

                        />

                    </div>
                </div>

                {/* Password */}

                <div>

                    <label className="mb-2 block text-sm font-medium text-cyan-100">
                        Password
                    </label>

                    <div className="flex h-14 items-center rounded-2xl border border-white/20 bg-white/10 px-4 backdrop-blur-xl transition focus-within:border-cyan-300">

                        <Lock
                            size={20}
                            className="text-cyan-200"
                        />

                        <input

                            type={

                                showPassword

                                    ? "text"

                                    : "password"

                            }

                            value={form.password}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    password:

                                        e.target.value,

                                })

                            }

                            placeholder="Enter your password"

                            className="ml-3 h-full w-full bg-transparent text-white outline-none placeholder:text-cyan-100/70"

                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-cyan-200 hover:text-white"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>

                    </div>

                </div>

                {/* Remember */}

                <div className="flex items-center justify-between">

                    <button
                        type="button"
                        onClick={() => setOpenForgotPassword(true)}
                        className="text-sm font-medium text-cyan-300 transition hover:text-white"
                    >
                        Forgot Password?
                    </button>

                </div>
                {

                    error && (

                        <p className="text-sm text-red-400">

                            {error}

                        </p>

                    )

                }

                {/* Login Button */}

                <button
                    type="submit"
                    disabled={loading}
                    className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#009A9E] to-cyan-400 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <Loader2
                                size={20}
                                className="animate-spin"
                            />

                            Signing In...
                        </>
                    ) : (
                        <>
                            Sign In

                            <ArrowRight size={20} />
                        </>
                    )}
                </button>
            </form>
            <ForgotPasswordModal
                open={openForgotPassword}
                onClose={() => setOpenForgotPassword(false)}
            />
        </>
    );
}