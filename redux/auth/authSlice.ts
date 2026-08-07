import { createSlice } from "@reduxjs/toolkit";
import {
    loginAdmin,
    logoutAdmin,
    logoutAllDevices,
    getProfile,
    forgotPassword,
    verifyOTP,
    resetPassword
} from "./authThunk";

interface AuthState {
    admin: any | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string;
    forgotLoading: boolean;
    verifyLoading: boolean;
    resetLoading: boolean;
    forgotSuccess: boolean;
    verifySuccess: boolean;
    resetSuccess: boolean;
    resetToken: string | null;
}

const initialState: AuthState = {
    admin: null,
    accessToken: null,
    isAuthenticated: false,
    loading: false,
    error: "",
    forgotLoading: false,
    verifyLoading: false,
    resetLoading: false,
    forgotSuccess: false,
    verifySuccess: false,
    resetSuccess: false,
    resetToken: null,
};

const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {

        clearError: (state) => {

            state.error = "";

        },

        logoutSuccess: (state) => {

            state.admin = null;

            state.accessToken = null;

            state.isAuthenticated = false;

            state.loading = false;

            state.error = "";

        },

    },

    extraReducers: (builder) => {

        builder

            // Login Pending

            .addCase(
                loginAdmin.pending,

                (state) => {

                    state.loading = true;

                    state.error = "";

                }
            )

            // Login Success

            .addCase(
                loginAdmin.fulfilled,

                (state, action) => {

                    state.loading = false;

                    state.isAuthenticated = true;

                    state.admin =
                        action.payload.admin;

                    state.accessToken =
                        action.payload.accessToken;

                }
            )

            // Login Failed

            .addCase(
                loginAdmin.rejected,
                (state, action) => {

                    state.loading = false;

                    state.error = String(
                        action.payload || "Login Failed"
                    );

                }
            )

            .addCase(logoutAdmin.fulfilled, (state) => {

                state.admin = null;
                state.accessToken = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = "";

            })

            .addCase(logoutAllDevices.fulfilled, (state) => {

                state.admin = null;
                state.accessToken = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = "";

            })
            .addCase(
                getProfile.pending,

                (state) => {

                    state.loading = true;

                }
            )

            .addCase(
                getProfile.fulfilled,

                (state, action) => {

                    state.loading = false;

                    state.admin = action.payload;

                }
            )

            .addCase(
                getProfile.rejected,

                (state, action) => {

                    state.loading = false;

                    state.error = String(
                        action.payload || "Failed"
                    );

                }
            )

        builder

            .addCase(

                forgotPassword.pending,

                (state) => {

                    state.forgotLoading = true;

                    state.error = "";

                    state.forgotSuccess = false;

                }

            )

            .addCase(

                forgotPassword.fulfilled,

                (state) => {

                    state.forgotLoading = false;

                    state.forgotSuccess = true;

                }

            )

            .addCase(

                forgotPassword.rejected,

                (state, action) => {

                    state.forgotLoading = false;

                    state.error = String(action.payload);

                }

            )

        builder

            .addCase(

                verifyOTP.pending,

                (state) => {

                    state.verifyLoading = true;

                    state.error = "";

                    state.verifySuccess = false;

                }

            )

            .addCase(
                verifyOTP.fulfilled,
                (state, action) => {

                    state.verifyLoading = false;

                    state.verifySuccess = true;

                    state.resetToken =
                        action.payload.resetToken;

                }
            )

            .addCase(

                verifyOTP.rejected,

                (state, action) => {

                    state.verifyLoading = false;

                    state.error = String(action.payload);

                }

            )

        builder

            .addCase(

                resetPassword.pending,

                (state) => {

                    state.resetLoading = true;

                    state.error = "";

                    state.resetSuccess = false;

                }

            )

            .addCase(

                resetPassword.fulfilled,

                (state) => {

                    state.resetLoading = false;

                    state.resetSuccess = true;

                }

            )

            .addCase(

                resetPassword.rejected,

                (state, action) => {

                    state.resetLoading = false;

                    state.error = String(action.payload);

                }

            )

    },

});

export const {

    clearError,

    logoutSuccess,

} = authSlice.actions;

export default authSlice.reducer;