import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "@/services/axios";

/* ==========================================
   CREATE ADMIN
========================================== */

export const createAdmin = createAsyncThunk(

    "admin/create",

    async (

        data: any,

        thunkAPI

    ) => {

        try {

            const response = await api.post(

                "/admin",

                data

            );

            return response.data.data;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to create admin."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);

/* ==========================================
   GET ALL ADMINS
========================================== */

export const getAdmins = createAsyncThunk(

    "admin/getAll",

    async (

        params: any = undefined,

        thunkAPI

    ) => {

        const query = params ?? {};

        try {

            const response = await api.get(

                "/admin",

                {

                    params: query,

                }

            );

            return response.data.data;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to fetch admins."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);

/* ==========================================
   GET SINGLE ADMIN
========================================== */

export const getAdminById = createAsyncThunk(

    "admin/getOne",

    async (

        id: string,

        thunkAPI

    ) => {

        try {

            const response = await api.get(

                `/admin/${id}`

            );

            return response.data.data;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to fetch admin."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);

/* ==========================================
   UPDATE ADMIN
========================================== */

export const updateAdmin = createAsyncThunk(

    "admin/update",

    async (

        {

            id,

            data,

        }: {

            id: string;

            data: any;

        },

        thunkAPI

    ) => {

        try {

            const response = await api.put(

                `/admin/${id}`,

                data

            );

            return response.data.data;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to update admin."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);

/* ==========================================
   DELETE ADMIN
========================================== */

export const deleteAdmin = createAsyncThunk(

    "admin/delete",

    async (

        id: string,

        thunkAPI

    ) => {

        try {

            await api.delete(

                `/admin/${id}`

            );

            return id;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to delete admin."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);

/* ==========================================
   RESTORE ADMIN
========================================== */

export const restoreAdmin = createAsyncThunk(

    "admin/restore",

    async (

        id: string,

        thunkAPI

    ) => {

        try {

            const response = await api.patch(

                `/admin/${id}/restore`

            );

            return response.data.data;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to restore admin."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);

/* ==========================================
   ADMIN DASHBOARD STATS
========================================== */

export const getAdminStats = createAsyncThunk(

    "admin/stats",

    async (

        _,

        thunkAPI

    ) => {

        try {

            const response = await api.get(

                "/admin/stats/dashboard"

            );

            return response.data.data;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to fetch statistics."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);

/* ==========================================
   CHANGE ADMIN STATUS
========================================== */

export const changeAdminStatus = createAsyncThunk(

    "admin/changeStatus",

    async (

        {

            id,

            isActive,

        }: {

            id: string;

            isActive: boolean;

        },

        thunkAPI

    ) => {

        try {

            const response = await api.patch(

                `/admin/${id}/status`,

                {

                    isActive,

                }

            );

            return response.data.data;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to update admin status."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);

/* ==========================================
   CHANGE PASSWORD
========================================== */

export const changePassword = createAsyncThunk(

    "admin/changePassword",

    async (

        data: {

            oldPassword: string;

            newPassword: string;

            confirmPassword: string;

        },

        thunkAPI

    ) => {

        try {

            const response = await api.patch(

                "/admin/change-password",

                data

            );

            return response.data;

        }

        catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to change password."

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong."

            );

        }

    }

);