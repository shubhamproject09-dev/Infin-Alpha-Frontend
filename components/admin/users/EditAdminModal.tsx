"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { X, Upload, User } from "lucide-react";
import { toast } from "react-hot-toast";

import {
    AppDispatch,
    RootState,
} from "@/redux/store";

import {
    updateAdmin,
} from "@/redux/admin/adminThunk";

interface Admin {

    _id: string;

    firstName: string;

    lastName: string;

    email: string;

    role: "Admin" | "Super Admin";

    profileImage: string;

    isActive: boolean;

}

interface Props {

    open: boolean;

    admin: Admin | null;

    onClose: () => void;

}

export default function EditAdminModal({

    open,

    admin,

    onClose,

}: Props) {

    const dispatch =
        useDispatch<AppDispatch>();

    const {

        updating,

    } = useSelector(

        (state: RootState) =>

            state.admin

    );

    const [

        preview,

        setPreview

    ] = useState("");

    const [

        form,

        setForm

    ] = useState({

        firstName: "",

        lastName: "",

        email: "",

        password: "",

        role: "Admin",

        profileImage: null as File | null,

    });

    useEffect(() => {

        if (

            admin &&

            open

        ) {

            setForm({

                firstName:

                    admin.firstName,

                lastName:

                    admin.lastName,

                email:

                    admin.email,

                password: "",

                role:

                    admin.role,

                profileImage: null,

            });

            setPreview(

                admin.profileImage

            );

        }

    }, [

        admin,

        open,

    ]);

    const handleChange = (

        e: React.ChangeEvent<

            HTMLInputElement |

            HTMLSelectElement

        >

    ) => {

        setForm({

            ...form,

            [

                e.target.name

            ]:

                e.target.value,

        });

    };

    const handleImage = (

        e: ChangeEvent<HTMLInputElement>

    ) => {

        const file =

            e.target.files?.[0];

        if (!file)

            return;

        setForm({

            ...form,

            profileImage: file,

        });

        setPreview(

            URL.createObjectURL(file)

        );

    };

    const handleSubmit = async (

        e: React.FormEvent

    ) => {

        e.preventDefault();

        if (!admin) return;

        if (

            !form.firstName ||

            !form.lastName ||

            !form.email

        ) {

            toast.error(

                "Please fill all required fields."

            );

            return;

        }

        const formData = new FormData();

        formData.append(

            "firstName",

            form.firstName

        );

        formData.append(

            "lastName",

            form.lastName

        );

        formData.append(

            "email",

            form.email

        );

        formData.append(

            "role",

            form.role

        );

        if (

            form.password.trim()

        ) {

            formData.append(

                "password",

                form.password

            );

        }

        if (

            form.profileImage

        ) {

            formData.append(

                "profileImage",

                form.profileImage

            );

        }

        const result = await dispatch(

            updateAdmin({

                id: admin._id,

                data: formData,

            })

        );

        if (

            updateAdmin.fulfilled.match(

                result

            )

        ) {

            toast.success(

                "Admin updated successfully."

            );

            onClose();

        }

        else {

            toast.error(

                String(

                    result.payload ||

                    "Failed to update admin."

                )

            );

        }

    };

    if (

        !open ||

        !admin

    ) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

            <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-[#00314A] to-[#009A9E] px-8 py-6 text-white">

                    <div>

                        <h2 className="text-2xl font-bold">

                            Edit Admin

                        </h2>

                        <p className="mt-1 text-cyan-100">

                            Update administrator details

                        </p>

                    </div>

                    <button

                        onClick={onClose}

                    >

                        <X />

                    </button>

                </div>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-6 p-8"

                >

                    {/* Profile */}

                    <div className="flex flex-col items-center">

                        {

                            preview ?

                                (

                                    <Image

                                        src={preview}

                                        alt="Preview"

                                        width={110}

                                        height={110}

                                        className="h-28 w-28 rounded-full border object-cover"

                                    />

                                )

                                :

                                (

                                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-200">

                                        <User

                                            size={42}

                                        />

                                    </div>

                                )

                        }

                        <label className="mt-4 cursor-pointer rounded-xl bg-[#009A9E] px-5 py-2 text-white">

                            <Upload

                                size={18}

                                className="mr-2 inline"

                            />

                            Change Photo

                            <input

                                hidden

                                type="file"

                                accept="image/*"

                                onChange={handleImage}

                            />

                        </label>

                    </div>

                    <div className="grid gap-5 md:grid-cols-2">

                        <input

                            name="firstName"

                            value={form.firstName}

                            onChange={handleChange}

                            placeholder="First Name"

                            className="rounded-xl border p-3"

                        />

                        <input

                            name="lastName"

                            value={form.lastName}

                            onChange={handleChange}

                            placeholder="Last Name"

                            className="rounded-xl border p-3"

                        />

                        <input

                            name="email"

                            type="email"

                            value={form.email}

                            onChange={handleChange}

                            placeholder="Email"

                            className="rounded-xl border p-3"

                        />

                        <select

                            name="role"

                            value={form.role}

                            onChange={handleChange}

                            className="rounded-xl border p-3"

                        >

                            <option value="Admin">

                                Admin

                            </option>

                            <option value="Super Admin">

                                Super Admin

                            </option>

                        </select>

                        <input

                            type="password"

                            name="password"

                            value={form.password}

                            onChange={handleChange}

                            placeholder="New Password (Optional)"

                            className="rounded-xl border p-3 md:col-span-2"

                        />

                    </div>

                    <div className="flex justify-end gap-4">

                        <button

                            type="button"

                            onClick={onClose}

                            className="rounded-xl border px-6 py-3"

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            disabled={updating}

                            className="rounded-xl bg-[#009A9E] px-6 py-3 font-semibold text-white"

                        >

                            {

                                updating

                                    ?

                                    "Updating..."

                                    :

                                    "Update Admin"

                            }

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}