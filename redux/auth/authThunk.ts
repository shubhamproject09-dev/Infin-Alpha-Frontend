import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/axios";
import { logout } from "../../utils/auth";
import { saveAdmin, saveToken } from "../../utils/auth";

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    admin: any;
    accessToken: string;
}

export const loginAdmin = createAsyncThunk<
    LoginResponse,
    LoginPayload,
    {
        rejectValue: string;
    }
>(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const response = await api.post(
                "/auth/login",
                credentials
            );

            const { admin, accessToken } = response.data.data;

            saveToken(accessToken);
            saveAdmin(admin);

            return {
                admin,
                accessToken,
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(
                    error.response?.data?.message ??
                    "Login Failed"
                );
            }

            return thunkAPI.rejectWithValue(
                "Something went wrong"
            );
        }
    }
);

/*
|--------------------------------------------------------------------------
| Logout Current Device
|--------------------------------------------------------------------------
*/

export const logoutAdmin = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await api.post("/auth/logout");

            logout();

            return true;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error?.response?.data?.message || "Logout Failed"
            );
        }
    }
);

/*
|--------------------------------------------------------------------------
| Logout All Devices
|--------------------------------------------------------------------------
*/

export const logoutAllDevices = createAsyncThunk(
    "auth/logoutAll",
    async (_, thunkAPI) => {
        try {
            await api.post("/auth/logout-all");

            logout();

            return true;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error?.response?.data?.message ||
                "Logout All Failed"
            );
        }
    }
);

export const getProfile = createAsyncThunk<
    any,
    void,
    {
        rejectValue: string;
    }
>(
    "auth/getProfile",

    async (_, thunkAPI) => {

        try {

            const response = await api.get(
                "/auth/profile"
            );

            return response.data.data;

        } catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to fetch profile"

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong"

            );

        }

    }
);


export const forgotPassword = createAsyncThunk<
    string,
    string,
    {
        rejectValue: string;
    }
>(
    "auth/forgotPassword",

    async (email, thunkAPI) => {

        try {

            const response = await api.post(

                "/auth/forgot-password",

                { email }

            );

            return response.data.message;

        } catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to send OTP"

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong"

            );

        }

    }

);

export const verifyOTP = createAsyncThunk<
    {
        resetToken: string;
    },
    {
        email: string;
        otp: string;
    },
    {
        rejectValue: string;
    }
>(
    "auth/verifyOTP",

    async (data, thunkAPI) => {

        try {

            const response = await api.post(

                "/auth/verify-otp",

                data

            );

            return response.data.data;

        } catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "OTP Verification Failed"

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong"

            );

        }

    }

);

export const resetPassword = createAsyncThunk<
    string,
    {
        resetToken: string;
        password: string;
        confirmPassword: string;
    },
    {
        rejectValue: string;
    }
>(
    "auth/resetPassword",

    async (data, thunkAPI) => {

        try {

            const response = await api.post(

                "/auth/reset-password",

                data

            );

            return response.data.data;

        } catch (error) {

            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Password Reset Failed"

                );

            }

            return thunkAPI.rejectWithValue(

                "Something went wrong"

            );

        }

    }

);