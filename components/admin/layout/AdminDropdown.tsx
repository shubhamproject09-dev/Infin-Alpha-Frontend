"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    ChevronDown,
    UserCircle2,
    Mail,
    ShieldCheck,
    KeyRound,
    LogOut,
    User,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";
import ViewAdminModal from "@/components/admin/users/ViewAdminModal";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import type {
    AppDispatch,
    RootState,
} from "@/redux/store";

import { getProfile } from "@/redux/auth/authThunk";

interface Props {
    onProfileClick: () => void;
    onPasswordClick: () => void;
}

export default function AdminDropdown({
    onProfileClick,
    onPasswordClick,
}: Props) {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {
        admin,
    } = useSelector(
        (state: RootState) => state.auth
    );

    useEffect(() => {

        dispatch(getProfile());

    }, [dispatch]);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:border-[#009A9E]/30 hover:shadow-lg focus:outline-none">
                        <div className="relative">
                            {
                                admin?.profileImage ?

                                    (

                                        <Image

                                            src={admin.profileImage}

                                            alt={admin.firstName}

                                            width={46}

                                            height={46}

                                            className="h-11 w-11 rounded-full object-cover border-2 border-[#009A9E]"

                                        />

                                    )

                                    :

                                    (

                                        <UserCircle2

                                            size={46}

                                            className="text-[#009A9E]"

                                        />

                                    )

                            }

                            <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                        </div>

                        <div className="hidden text-left md:block">
                            <h3 className="text-sm font-semibold text-slate-800">
                                {admin?.firstName} {admin?.lastName}
                            </h3>

                            <p className="text-xs text-slate-500">
                                {admin?.role}
                            </p>
                        </div>

                        <ChevronDown
                            size={18}
                            className="text-slate-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        />
                    </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    className="w-80 rounded-2xl border border-slate-200 p-2 shadow-2xl"
                >
                    {/* Profile */}
                    <DropdownMenuLabel className="rounded-xl bg-gradient-to-r from-[#00314A] to-[#009A9E] p-4 text-white">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                {
                                    admin?.profileImage ?

                                        (

                                            <Image

                                                src={admin.profileImage}

                                                alt={admin.firstName}

                                                width={52}

                                                height={52}

                                                className="h-14 w-14 rounded-full border-2 border-white object-cover"

                                            />

                                        )

                                        :

                                        (

                                            <UserCircle2

                                                size={52}

                                            />

                                        )

                                }

                                <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-[#00314A] bg-green-400" />
                            </div>

                            <div>
                                <h3 className="text-base font-bold">
                                    {admin?.firstName} {admin?.lastName}
                                </h3>

                                <p className="text-xs text-cyan-100">
                                    {admin?.role}
                                </p>
                            </div>
                        </div>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="cursor-default gap-3 rounded-xl py-3">
                        <Mail
                            size={18}
                            className="text-[#009A9E]"
                        />

                        <div>
                            <p className="text-xs text-slate-500">
                                Email
                            </p>

                            <p className="text-sm font-medium">
                                {admin?.email}
                            </p>
                        </div>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="cursor-default gap-3 rounded-xl py-3">
                        <ShieldCheck
                            size={18}
                            className="text-[#009A9E]"
                        />

                        <div>
                            <p className="text-xs text-slate-500">
                                Status
                            </p>

                            <p className="text-sm font-medium text-green-600">
                                Online
                            </p>
                        </div>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                        onClick={() => {
                            setTimeout(() => {
                                onProfileClick();
                            }, 50);
                        }}
                        className="cursor-pointer rounded-xl py-3"
                    >
                        <User className="mr-3 h-4 w-4" />
                        My Profile
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onSelect={(e) => {
                            e.preventDefault();

                            setTimeout(() => {
                                onPasswordClick();
                            }, 150);
                        }}
                        className="cursor-pointer rounded-xl py-3"
                    >
                        <KeyRound className="mr-3 h-4 w-4" />
                        Change Password
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}