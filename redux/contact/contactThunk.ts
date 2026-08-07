import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import api from "@/services/axios";

/* ===============================
Create Contact
=============================== */

export const createContact =
    createAsyncThunk(

        "contact/create",

        async (

            data: any,

            thunkAPI

        ) => {

            try {

                const response =

                    await api.post(

                        "/contact",

                        data

                    );

                return response.data.data;

            }

            catch (error) {

                if (axios.isAxiosError(error)) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data?.message ||

                        "Something went wrong."

                    );

                }

                return thunkAPI.rejectWithValue(

                    "Something went wrong."

                );

            }

        }

    );

/* ===============================
Get All
=============================== */

export const getContacts =
    createAsyncThunk(

        "contact/getAll",

        async (_,

            thunkAPI

        ) => {

            try {

                const response =

                    await api.get(

                        "/contact"

                    );

                return response.data.data;

            }

            catch (error) {

                if (

                    axios.isAxiosError(error)

                ) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data?.message ||

                        "Failed"

                    );

                }

                return thunkAPI.rejectWithValue(

                    "Something went wrong"

                );

            }

        }

    );

/* ===============================
Get Single
=============================== */

export const getSingleContact =
    createAsyncThunk(

        "contact/getOne",

        async (

            id: string,

            thunkAPI

        ) => {

            try {

                const response =

                    await api.get(

                        `/contact/${id}`

                    );

                return response.data.data;

            }

            catch (error) {

                if (

                    axios.isAxiosError(error)

                ) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data?.message ||

                        "Failed"

                    );

                }

                return thunkAPI.rejectWithValue(

                    "Something went wrong"

                );

            }

        }

    );

/* ===============================
Mark Read
=============================== */

export const markContactRead =
    createAsyncThunk(

        "contact/read",

        async (

            id: string,

            thunkAPI

        ) => {

            try {

                const response =

                    await api.patch(

                        `/contact/${id}/read`

                    );

                return response.data.data;

            }

            catch (error) {

                if (

                    axios.isAxiosError(error)

                ) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data?.message ||

                        "Failed"

                    );

                }

                return thunkAPI.rejectWithValue(

                    "Something went wrong"

                );

            }

        }

    );

/* ===============================
Delete
=============================== */

export const deleteContact =
    createAsyncThunk(

        "contact/delete",

        async (

            id: string,

            thunkAPI

        ) => {

            try {

                await api.delete(

                    `/contact/${id}`

                );

                return id;

            }

            catch (error) {

                if (

                    axios.isAxiosError(error)

                ) {

                    return thunkAPI.rejectWithValue(

                        error.response?.data?.message ||

                        "Failed"

                    );

                }

                return thunkAPI.rejectWithValue(

                    "Something went wrong"

                );

            }

        }

    );