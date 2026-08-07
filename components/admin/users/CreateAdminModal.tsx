"use client";

import {

    X,

    Eye,

    EyeOff,

    Upload,

    Loader2,

} from "lucide-react";

import {

    useState,

    ChangeEvent,

    FormEvent,

    useEffect,

} from "react";

import {

    useDispatch,

} from "react-redux";

import {

    AppDispatch,

} from "@/redux/store";

import {

    createAdmin,

    getAdmins,

    getAdminStats,

} from "@/redux/admin/adminThunk";

import { toast } from "react-hot-toast";

interface Props {

    open: boolean;

    onClose: () => void;

}

export default function CreateAdminModal({

    open,

    onClose,

}: Props) {

    const dispatch = useDispatch<AppDispatch>();

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [preview, setPreview] = useState("");

    const [form, setForm] = useState({

        firstName: "",

        lastName: "",

        email: "",

        password: "",

        role: "Admin",

        profileImage: null as File | null,

    });

    const handleChange = (

        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>

    ) => {

        setForm({

            ...form,

            [e.target.name]:

                e.target.value,

        });

    };

    const handleImage = (

        e: ChangeEvent<HTMLInputElement>

    ) => {

        const file =

            e.target.files?.[0];

        if (!file) return;

        setForm({

            ...form,

            profileImage: file,

        });

        setPreview(

            URL.createObjectURL(file)

        );

    };

    const resetForm = () => {

        setForm({

            firstName: "",

            lastName: "",

            email: "",

            password: "",

            role: "Admin",

            profileImage: null,

        });

        setPreview("");

        setShowPassword(false);

    };

    const handleSubmit = async (

        e: FormEvent

    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            const data =

                new FormData();

            data.append(

                "firstName",

                form.firstName

            );

            data.append(

                "lastName",

                form.lastName

            );

            data.append(

                "email",

                form.email

            );

            data.append(

                "password",

                form.password

            );

            data.append(

                "role",

                form.role

            );

            if (form.profileImage) {

                data.append(

                    "profileImage",

                    form.profileImage

                );

            }

            await dispatch(

                createAdmin(data)

            ).unwrap();

            toast.success(

                "Admin Created Successfully"

            );

            dispatch(getAdmins({}));

            dispatch(getAdminStats());

            resetForm();

            onClose();

        }

        catch (error: any) {

            toast.error(

                String(error)

            );

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        if (open) {

            resetForm();

        }

    }, [open]);

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

            <div className="max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b bg-gradient-to-r from-[#00314A] to-[#009A9E] px-8 py-6 text-white">

                    <div>

                        <h2 className="text-2xl font-bold">

                            Create New Admin

                        </h2>

                        <p className="mt-1 text-sm text-cyan-100">

                            Add a new administrator to the dashboard.

                        </p>

                    </div>

                    <button

                        onClick={() => {

                            resetForm();

                            onClose();

                        }}

                        className="rounded-xl p-2 transition hover:bg-white/20"

                    >

                        <X size={22} />

                    </button>

                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="space-y-8 p-8"
                >
                    <div className="flex flex-col items-center">

                        <label className="group relative cursor-pointer">

                            {

                                preview ? (

                                    <img

                                        src={preview}

                                        alt="Preview"

                                        className="h-28 w-28 rounded-full border-4 border-cyan-100 object-cover"

                                    />

                                ) : (

                                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-slate-100">

                                        <Upload

                                            size={34}

                                            className="text-slate-400"

                                        />

                                    </div>

                                )

                            }

                            <input

                                type="file"

                                accept="image/*"

                                hidden

                                onChange={handleImage}

                            />

                        </label>

                        <p className="mt-3 text-sm text-slate-500">

                            Upload Profile Image

                        </p>

                    </div>
                    <div className="grid gap-6 md:grid-cols-2">

                        <div>

                            <label className="mb-2 block text-sm font-semibold">

                                First Name

                            </label>

                            <input

                                type="text"

                                name="firstName"

                                value={form.firstName}

                                onChange={handleChange}

                                required

                                className="w-full rounded-2xl border px-5 py-3 outline-none transition focus:border-[#009A9E]"

                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-semibold">

                                Last Name

                            </label>

                            <input

                                type="text"

                                name="lastName"

                                value={form.lastName}

                                onChange={handleChange}

                                required

                                className="w-full rounded-2xl border px-5 py-3 outline-none transition focus:border-[#009A9E]"

                            />

                        </div>

                    </div>
                    <div>

                        <label className="mb-2 block text-sm font-semibold">

                            Email Address

                        </label>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="new-email"
                            spellCheck={false}
                            required
                            className="w-full rounded-2xl border px-5 py-3 outline-none transition focus:border-[#009A9E]"
                        />

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Password */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold">

                                Password

                            </label>

                            <div className="relative">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                    required
                                    className="w-full rounded-2xl border px-5 py-3 pr-14 outline-none transition focus:border-[#009A9E]"
                                />

                                <button

                                    type="button"

                                    onClick={() =>

                                        setShowPassword(

                                            !showPassword

                                        )

                                    }

                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"

                                >

                                    {

                                        showPassword

                                            ? (

                                                <EyeOff

                                                    size={20}

                                                />

                                            )

                                            : (

                                                <Eye

                                                    size={20}

                                                />

                                            )

                                    }

                                </button>

                            </div>

                        </div>

                        {/* Role */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold">

                                Role

                            </label>

                            <select

                                name="role"

                                value={form.role}

                                onChange={handleChange}

                                className="w-full rounded-2xl border px-5 py-3 outline-none transition focus:border-[#009A9E]"

                            >

                                <option value="Admin">

                                    Admin

                                </option>

                                <option value="Super Admin">

                                    Super Admin

                                </option>

                            </select>

                        </div>

                    </div><div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5">

                        <h3 className="font-semibold text-[#00314A]">

                            Administrator Information

                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-600">

                            The administrator will receive access to the dashboard

                            according to the assigned role.

                            Super Admins have complete system access,

                            while Admins have limited management permissions.

                        </p>

                    </div><div className="flex flex-col-reverse gap-4 border-t pt-6 sm:flex-row sm:justify-end">

                        <button

                            type="button"

                            onClick={() => {

                                resetForm();

                                onClose();

                            }}

                            className="rounded-2xl border border-slate-300 px-8 py-3 font-medium transition hover:bg-slate-100"

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            disabled={loading}

                            className="flex items-center justify-center gap-2 rounded-2xl bg-[#009A9E] px-8 py-3 font-semibold text-white transition hover:bg-[#007d80] disabled:cursor-not-allowed disabled:opacity-70"

                        >

                            {

                                loading ? (

                                    <>

                                        <Loader2

                                            size={20}

                                            className="animate-spin"

                                        />

                                        Creating...

                                    </>

                                ) : (

                                    "Create Admin"

                                )

                            }

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}