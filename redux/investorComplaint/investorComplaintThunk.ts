import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import api from "@/services/axios";

/*
|--------------------------------------------------------------------------
| Upload Investor Complaint PDF
|--------------------------------------------------------------------------
*/

export const uploadInvestorComplaint =
    createAsyncThunk(

        "investorComplaint/upload",

        async (

            formData: FormData,

            thunkAPI

        ) => {

            try {

                const response =
                    await api.post(

                        "/investor-complaint/upload",

                        formData,

                        {

                            headers: {

                                "Content-Type":
                                    "multipart/form-data",

                            },

                        }

                    );

                return response.data.data;

            } catch (error) {

                if (

                    axios.isAxiosError(error)

                ) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data
                            ?.message ||

                        "Upload Failed"

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
| Get Investor Complaint PDF
|--------------------------------------------------------------------------
*/

export const getInvestorComplaint =
    createAsyncThunk(

        "investorComplaint/get",

        async (_, thunkAPI) => {

            try {

                const response =
                    await api.get(

                        "/investor-complaint"

                    );

                return response.data.data;

            } catch (error) {

                if (

                    axios.isAxiosError(error)

                ) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data
                            ?.message ||

                        "Fetch Failed"

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
| Delete Investor Complaint PDF
|--------------------------------------------------------------------------
*/

export const deleteInvestorComplaint =
    createAsyncThunk(

        "investorComplaint/delete",

        async (

            id: string,

            thunkAPI

        ) => {

            try {

                await api.delete(

                    `/investor-complaint/${id}`

                );

                return id;

            } catch (error) {

                if (

                    axios.isAxiosError(error)

                ) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data
                            ?.message ||

                        "Delete Failed"

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
| Get Investor Complaint History
|--------------------------------------------------------------------------
*/

export const getInvestorComplaintHistory =
    createAsyncThunk(

        "investorComplaint/history",

        async (_, thunkAPI) => {

            try {

                const response = await api.get(

                    "/investor-complaint/history"

                );

                return response.data.data;

            } catch (error) {

                if (axios.isAxiosError(error)) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data?.message ||

                        "History Fetch Failed"

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
| Restore Investor Complaint PDF
|--------------------------------------------------------------------------
*/

export const restoreInvestorComplaint =
    createAsyncThunk(

        "investorComplaint/restore",

        async (

            id: string,

            thunkAPI

        ) => {

            try {

                const response = await api.patch(

                    `/investor-complaint/restore/${id}`

                );

                return response.data.data;

            } catch (error) {

                if (axios.isAxiosError(error)) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data?.message ||

                        "Restore Failed"

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
| Permanent Delete PDF
|--------------------------------------------------------------------------
*/

export const permanentDeleteInvestorComplaint =
    createAsyncThunk(

        "investorComplaint/permanentDelete",

        async (

            id: string,

            thunkAPI

        ) => {

            try {

                await api.delete(

                    `/investor-complaint/permanent/${id}`

                );

                return id;

            } catch (error) {

                if (axios.isAxiosError(error)) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data?.message ||

                        "Delete Failed"

                    );

                }

                return thunkAPI.rejectWithValue(

                    "Something went wrong"

                );

            }

        }

    );