import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import investorComplaintReducer from "./investorComplaint/investorComplaintSlice";
import contactReducer from "./contact/contactSlice";
import adminReducer from "./admin/adminSlice";

const rootReducer = combineReducers({

    auth: authReducer,
    investorComplaint: investorComplaintReducer,
    contact: contactReducer,
    admin: adminReducer,

});

export default rootReducer;