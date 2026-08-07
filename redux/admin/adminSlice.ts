import { createSlice } from "@reduxjs/toolkit";

import {

    createAdmin,

    getAdmins,

    getAdminById,

    updateAdmin,

    deleteAdmin,

    restoreAdmin,

    getAdminStats,

    changeAdminStatus,

    changePassword

} from "./adminThunk";

/* ==========================================
   INTERFACES
========================================== */

export interface Admin {

    _id: string;

    firstName: string;

    lastName: string;

    email: string;

    role: "Super Admin" | "Admin";

    profileImage: string;

    isActive: boolean;

    isDeleted: boolean;

    lastLogin: string | null;

    createdAt: string;

}

interface Pagination {

    currentPage: number;

    totalPages: number;

    totalRecords: number;

    hasNextPage: boolean;

    hasPreviousPage: boolean;

}

interface AdminState {

    admins: Admin[];

    admin: Admin | null;

    stats: any;

    recentLogins: any[];

    pagination: Pagination | null;

    loading: boolean;

    creating: boolean;

    updating: boolean;

    deleting: boolean;

    restoring: boolean;

    statsLoading: boolean;

    error: string;

    changingPassword: boolean;

}

/* ==========================================
   INITIAL STATE
========================================== */

const initialState: AdminState = {

    admins: [],

    recentLogins: [],

    admin: null,

    stats: null,

    pagination: null,

    loading: false,

    creating: false,

    updating: false,

    deleting: false,

    restoring: false,

    statsLoading: false,

    error: "",

    changingPassword: false,

};

const adminSlice = createSlice({

    name: "admin",

    initialState,

    reducers: {

        clearAdminError: (state) => {

            state.error = "";

        },

    },

    extraReducers: (builder) => {

        /* =========================
           CREATE
        ========================= */

        builder

            .addCase(

                createAdmin.pending,

                (state) => {

                    state.creating = true;

                }

            )

            .addCase(

                createAdmin.fulfilled,

                (state, action) => {

                    state.creating = false;

                    state.admins.unshift(action.payload);

                }

            )

            .addCase(

                createAdmin.rejected,

                (state, action) => {

                    state.creating = false;

                    state.error = String(action.payload);

                }

            );

        /* =========================
           GET ALL
        ========================= */

        builder

            .addCase(

                getAdmins.pending,

                (state) => {

                    state.loading = true;

                }

            )

            .addCase(

                getAdmins.fulfilled,

                (state, action) => {

                    state.loading = false;

                    state.admins = action.payload.admins;

                    state.pagination =

                        action.payload.pagination;

                }

            )

            .addCase(

                getAdmins.rejected,

                (state, action) => {

                    state.loading = false;

                    state.error = String(action.payload);

                }

            );

        /* =========================
           GET ONE
        ========================= */

        builder

            .addCase(

                getAdminById.fulfilled,

                (state, action) => {

                    state.admin = action.payload;

                }

            );

        /* =========================
           UPDATE
        ========================= */

        builder

            .addCase(

                updateAdmin.pending,

                (state) => {

                    state.updating = true;

                }

            )

            .addCase(

                updateAdmin.fulfilled,

                (state, action) => {

                    state.updating = false;

                    state.admin = action.payload;

                    state.admins =

                        state.admins.map(

                            (item) =>

                                item._id ===

                                    action.payload._id

                                    ? action.payload

                                    : item

                        );

                }

            )

            .addCase(

                updateAdmin.rejected,

                (state, action) => {

                    state.updating = false;

                    state.error = String(action.payload);

                }

            );

        /* =========================
           DELETE
        ========================= */

        builder

            .addCase(

                deleteAdmin.pending,

                (state) => {

                    state.deleting = true;

                }

            )

            .addCase(

                deleteAdmin.fulfilled,

                (state, action) => {

                    state.deleting = false;

                    state.admins =

                        state.admins.filter(

                            (item) =>

                                item._id !==

                                action.payload

                        );

                }

            )

            .addCase(

                deleteAdmin.rejected,

                (state, action) => {

                    state.deleting = false;

                    state.error = String(action.payload);

                }

            );

        /* =========================
           RESTORE
        ========================= */

        builder

            .addCase(

                restoreAdmin.pending,

                (state) => {

                    state.restoring = true;

                }

            )

            .addCase(

                restoreAdmin.fulfilled,

                (state, action) => {

                    state.restoring = false;

                    state.admins.unshift(

                        action.payload

                    );

                }

            )

            .addCase(

                restoreAdmin.rejected,

                (state, action) => {

                    state.restoring = false;

                    state.error = String(action.payload);

                }

            );

        /* =========================
           STATS
        ========================= */

        builder

            .addCase(

                getAdminStats.pending,

                (state) => {

                    state.statsLoading = true;

                }

            )

            .addCase(

                getAdminStats.fulfilled,

                (state, action) => {

                    state.statsLoading = false;

                    state.stats = action.payload.cards;

                    state.recentLogins = action.payload.recentLogins;

                }

            )

            .addCase(

                getAdminStats.rejected,

                (state, action) => {

                    state.statsLoading = false;

                    state.error = String(action.payload);

                }

            )

        /* =========================
CHANGE STATUS
========================= */

        builder

            .addCase(

                changeAdminStatus.pending,

                (state) => {

                    state.updating = true;

                }

            )

            .addCase(

                changeAdminStatus.fulfilled,

                (state, action) => {

                    state.updating = false;

                    state.admins = state.admins.map(

                        (item) =>

                            item._id === action.payload._id

                                ? action.payload

                                : item

                    );

                }

            )

            .addCase(

                changeAdminStatus.rejected,

                (state, action) => {

                    state.updating = false;

                    state.error = String(action.payload);

                }

            )

        /* =========================
CHANGE PASSWORD
========================= */

        builder

            .addCase(

                changePassword.pending,

                (state) => {

                    state.changingPassword = true;

                    state.error = "";

                }

            )

            .addCase(

                changePassword.fulfilled,

                (state) => {

                    state.changingPassword = false;

                }

            )

            .addCase(

                changePassword.rejected,

                (state, action) => {

                    state.changingPassword = false;

                    state.error = String(action.payload);

                }

            );

    },

});

export const {

    clearAdminError,

} = adminSlice.actions;

export default adminSlice.reducer;