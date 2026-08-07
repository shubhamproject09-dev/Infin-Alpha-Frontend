import {

    createSlice

} from "@reduxjs/toolkit";

import {

    createContact,

    getContacts,

    getSingleContact,

    markContactRead,

    deleteContact

} from "./contactThunk";

interface Contact {

    _id: string;

    name: string;

    email: string;

    phone: string;

    message: string;

    status: "READ" | "UNREAD";

    createdAt: string;

}

interface ContactState {

    contacts: Contact[];

    contact: Contact | null;

    loading: boolean;

    submitting: boolean;

    deleting: boolean;

    error: string;

}

const initialState: ContactState = {

    contacts: [],

    contact: null,

    loading: false,

    submitting: false,

    deleting: false,

    error: ""

};

const contactSlice = createSlice({

    name: "contact",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

            /* Create */

            .addCase(

                createContact.pending,

                (state) => {

                    state.submitting = true;

                }

            )

            .addCase(

                createContact.fulfilled,

                (state) => {

                    state.submitting = false;

                }

            )

            .addCase(

                createContact.rejected,

                (state, action) => {

                    state.submitting = false;

                    state.error = String(action.payload);

                }

            )

            /* Get All */

            .addCase(

                getContacts.pending,

                (state) => {

                    state.loading = true;

                }

            )

            .addCase(

                getContacts.fulfilled,

                (state, action) => {

                    state.loading = false;

                    state.contacts = action.payload;

                }

            )

            .addCase(

                getContacts.rejected,

                (state) => {

                    state.loading = false;

                }

            )

            /* Single */

            .addCase(

                getSingleContact.fulfilled,

                (state, action) => {

                    state.contact = action.payload;

                }

            )

            /* Read */

            .addCase(

                markContactRead.fulfilled,

                (state, action) => {

                    const index = state.contacts.findIndex(

                        (item: any) =>

                            item._id === action.payload._id

                    );

                    if (index !== -1) {

                        state.contacts[index] = action.payload;

                    }

                    if (

                        state.contact &&

                        state.contact._id === action.payload._id

                    ) {

                        state.contact = action.payload;

                    }

                }

            )

            /* Delete */

            .addCase(

                deleteContact.fulfilled,

                (state, action) => {

                    state.contacts =

                        state.contacts.filter(

                            (item: any) =>

                                item._id !== action.payload

                        );

                }

            );

    }

});

export default

    contactSlice.reducer;