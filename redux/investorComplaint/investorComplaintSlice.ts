import { createSlice } from "@reduxjs/toolkit";

import {
    uploadInvestorComplaint,
    getInvestorComplaint,
    deleteInvestorComplaint,
    getInvestorComplaintHistory,
    restoreInvestorComplaint,
    permanentDeleteInvestorComplaint,
} from "./investorComplaintThunk";

interface InvestorComplaintState {

    pdf: any | null;

    history: any[];

    loading: boolean;

    uploading: boolean;

    deleting: boolean;

    historyLoading: boolean;

    restoring: boolean;

    permanentDeleting: boolean;

    error: string;

}

const initialState: InvestorComplaintState = {

    pdf: null,

    history: [],

    loading: false,

    uploading: false,

    deleting: false,

    historyLoading: false,

    restoring: false,

    permanentDeleting: false,

    error: "",

};

const investorComplaintSlice = createSlice({

    name: "investorComplaint",

    initialState,

    reducers: {

        clearInvestorComplaintError: (state) => {

            state.error = "";

        },

    },

    extraReducers: (builder) => {

        /*
        |--------------------------------------------------------------------------
        | Get PDF
        |--------------------------------------------------------------------------
        */

        builder

            .addCase(

                getInvestorComplaint.pending,

                (state) => {

                    state.loading = true;

                    state.error = "";

                }

            )

            .addCase(

                getInvestorComplaint.fulfilled,

                (state, action) => {

                    state.loading = false;

                    state.pdf = action.payload;

                }

            )

            .addCase(

                getInvestorComplaint.rejected,

                (state, action) => {

                    state.loading = false;

                    state.error = String(

                        action.payload ||

                        "Failed to fetch PDF."

                    );

                }

            );

        /*
        |--------------------------------------------------------------------------
        | Upload PDF
        |--------------------------------------------------------------------------
        */

        builder

            .addCase(

                uploadInvestorComplaint.pending,

                (state) => {

                    state.uploading = true;

                    state.error = "";

                }

            )

            .addCase(

                uploadInvestorComplaint.fulfilled,

                (state, action) => {

                    state.uploading = false;

                    state.pdf = action.payload;

                    state.history.unshift(action.payload);

                }

            )

            .addCase(

                uploadInvestorComplaint.rejected,

                (state, action) => {

                    state.uploading = false;

                    state.error = String(

                        action.payload ||

                        "Upload failed."

                    );

                }

            );

        /*
        |--------------------------------------------------------------------------
        | Delete PDF
        |--------------------------------------------------------------------------
        */

        builder

            .addCase(

                deleteInvestorComplaint.pending,

                (state) => {

                    state.deleting = true;

                    state.error = "";

                }

            )

            .addCase(

                deleteInvestorComplaint.fulfilled,

                (state) => {

                    state.deleting = false;

                    state.pdf = null;

                    state.error = "";

                }

            )

            .addCase(

                deleteInvestorComplaint.rejected,

                (state, action) => {

                    state.deleting = false;

                    state.error = String(

                        action.payload ||

                        "Delete failed."

                    );

                }

            )
            /* ===========================
   History
=========================== */

            .addCase(

                getInvestorComplaintHistory.pending,

                (state) => {

                    state.historyLoading = true;

                }

            )

            .addCase(

                getInvestorComplaintHistory.fulfilled,

                (state, action) => {

                    state.historyLoading = false;

                    state.history = action.payload;

                }

            )

            .addCase(

                getInvestorComplaintHistory.rejected,

                (state) => {

                    state.historyLoading = false;

                }

            )
            /* ===========================
   Restore
=========================== */

            .addCase(

                restoreInvestorComplaint.pending,

                (state) => {

                    state.restoring = true;

                }

            )

            .addCase(

                restoreInvestorComplaint.fulfilled,

                (state) => {

                    state.restoring = false;

                }

            )

            .addCase(

                restoreInvestorComplaint.rejected,

                (state) => {

                    state.restoring = false;

                }

            )
            /* ===========================
   Permanent Delete
=========================== */

            .addCase(

                permanentDeleteInvestorComplaint.pending,

                (state) => {

                    state.permanentDeleting = true;

                }

            )

            .addCase(

                permanentDeleteInvestorComplaint.fulfilled,

                (state, action) => {

                    state.permanentDeleting = false;

                    state.history = state.history.filter(

                        (item: any) =>

                            item._id !== action.payload

                    );

                }

            )

            .addCase(

                permanentDeleteInvestorComplaint.rejected,

                (state) => {

                    state.permanentDeleting = false;

                }

            )

    },

});

export const {

    clearInvestorComplaintError,

} = investorComplaintSlice.actions;

export default investorComplaintSlice.reducer;