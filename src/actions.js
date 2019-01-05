import { API_ORIGIN } from "../config";

// DELETE LEARN_MORE & BACK_TO_TOP - THESE ARE TESTS...
export const LEARN_MORE = 'LEARN_MORE';
export const learnMore = () => ({
    type: LEARN_MORE
});

export const BACK_TO_TOP = 'BACK_TO_TOP';
export const backToTop = () => ({
   type: BACK_TO_TOP
});

export const REQUEST = 'REQUEST';
export const request = () => ({
    type: REQUEST
});

///////////////////////
// SIGNUP A NEW USER //
///////////////////////

export const SIGNUP_USER = 'SIGNUP_USER';
export const signupUser = user => ({
    type: SIGNUP_USER,
    user
});

//////////////////
// LOGIN A USER //
//////////////////

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = user => ({
    type: LOGIN_USER,
    user
});

////////////////////////////////
// LOGOUT USER FROM DASHBOARD //
////////////////////////////////

export const LOGOUT_USER = 'LOGOUT_USER';
export const logOutUser = () => ({
    type: LOGOUT_USER,
})

////////////////////////
// SUBMIT A WORKORDER //
////////////////////////

export const SUBMIT_WORKORDER = 'SUBMIT_WORKORDER';
export const submitWorkOrder = workorder => ({
    type: SUBMIT_WORKORDER,
    workorder
});

////////////////////////
// SUBTRACT INVENTORY //
////////////////////////

export const SUBTRACT_INVENTORY = 'SUBTRACT_INVENTORY';
export const subtractInventory = partKey => ({
    type: SUBTRACT_INVENTORY,
    partKey
});

//USER ACTIONS:
//Landing Page:
//***DONE***signup button -> show signup form, user fills out form, user clicks submit - goes to Dashboard
//***DONE***login button -> show login form, user fills out form, user clicks submit - goes to Dashboard
//
//Dashboard Page:
//***DONE***logout button -> user clicks button, user is redirected to landing page
//***DONE***create new work order -> user clicks on button, a new work order form appears
//
//Work Order Form:
//***DONE***Save Work Order Button -> user clicks button, data is sent to the server
//***DONE***Completed Work Orders table is updated with the Work Order
//***DONE***Inventory List table shows updated inventory counts after the save

//
//Work Order Form - 3 Form Components
//    1.  workorderform.js
//    2.  additemform.js
//    3.  addpartsform.js
