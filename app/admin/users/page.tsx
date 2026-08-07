"use client";

import UserHero from "@/components/admin/users/UserHero";
import UserSummaryCards from "@/components/admin/users/UserSummaryCards";
import UserToolbar from "@/components/admin/users/UserToolbar";
import UserTable from "@/components/admin/users/UserTable";
import CreateAdminModal from "@/components/admin/users/CreateAdminModal";
import DeleteConfirmModal from "@/components/admin/users/DeleteConfirmModal";
import EditAdminModal from "@/components/admin/users/EditAdminModal";
import ViewAdminModal from "@/components/admin/users/ViewAdminModal";
import { deleteAdmin, getAdmins, getAdminStats } from "@/redux/admin/adminThunk";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

export default function UsersPage() {
    const dispatch = useDispatch<AppDispatch>();
    const [search, setSearch] = useState("");
    const [role, setRole] = useState("ALL");
    const [status, setStatus] = useState("ALL");
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState<any>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [
        openEditModal,
        setOpenEditModal,
    ] = useState(false);
    const [
        openViewModal,
        setOpenViewModal,
    ] = useState(false);

    const { admins, loading, } = useSelector(
        (state: RootState) => state.admin
    );

    useEffect(() => {

        dispatch(

            getAdmins({

                page: 1,

                search,

                role,

                status,

            })

        );

    }, [

        dispatch,

        search,

        role,

        status,

    ]);

    useEffect(() => {

        dispatch(getAdminStats());

    }, [dispatch]);

    return (

        <div className="space-y-8">

            <UserHero />
            <UserSummaryCards />
            <UserToolbar
                search={search}
                setSearch={setSearch}
                role={role}
                setRole={setRole}
                status={status}
                setStatus={setStatus}
                total={admins.length}
                onRefresh={() => {

                    dispatch(

                        getAdmins({

                            page: 1,

                            search,

                            role,

                            status,

                        })

                    );

                    dispatch(getAdminStats());

                }}
                onCreate={() =>
                    setOpenCreateModal(true)
                }
            />
            <UserTable
                admins={admins}
                loading={loading}
                onView={(admin) => {
                    setSelectedAdmin(admin);
                    setOpenViewModal(true);
                }}
                onEdit={(admin) => {
                    setSelectedAdmin(admin);
                    setOpenEditModal(true);
                }}
                onDelete={(id) => {
                    setDeleteId(id);
                }}
            />

            <CreateAdminModal
                open={openCreateModal}
                onClose={() => {

                    setOpenCreateModal(false);

                    dispatch(
                        getAdmins({
                            page: 1,
                            search,
                            role,
                            status,
                        })
                    );

                    dispatch(getAdminStats());

                }}
            />

            <EditAdminModal

                open={openEditModal}

                admin={selectedAdmin}

                onClose={() => {

                    setOpenEditModal(false);

                    setSelectedAdmin(null);

                    dispatch(

                        getAdmins({

                            page: 1,

                            search,

                            role,

                            status,

                        })

                    );

                    dispatch(

                        getAdminStats()

                    );

                }}

            />

            <ViewAdminModal

                open={openViewModal}

                admin={selectedAdmin}

                onClose={() => {

                    setOpenViewModal(false);

                    setSelectedAdmin(null);

                }}

            />

            <DeleteConfirmModal

                open={deleteId !== null}

                loading={loading}

                onClose={() =>

                    setDeleteId(null)

                }

                onConfirm={async () => {

                    if (!deleteId) return;

                    const result = await dispatch(deleteAdmin(deleteId));

                    if (deleteAdmin.fulfilled.match(result)) {

                        dispatch(getAdmins({

                            page: 1,

                            search,

                            role,

                            status,

                        }));

                        dispatch(getAdminStats());

                        setDeleteId(null);

                    }

                }}

            />

        </div>

    );

}