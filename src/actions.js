export const LEARN_MORE = 'LEARN_MORE';
export const learnMore = () => ({
    type: LEARN_MORE
});

export const BACK_TO_TOP = 'BACK_TO_TOP';
export const backToTop = () => ({
   type: BACK_TO_TOP
});

//USER ACTIONS:
//Landing Page:
//signup button -> show signup form, user fills out form, user clicks submit - goes to Dashboard
//login button -> show login form, user fills out form, user clicks submit - goes to Dashboard
//
//Dashboard Page:
//logout button -> user clicks button, user is redirected to landing page
//create new work order -> user clicks on button, a new work order form appears
//
//Work Order Form:
// User fills out form
// User clicks Add Device Button -> user types in serial number, clicks add
//    Edit button allows user to edit text
// User clicks Add a Part button -> user selects an option, clicks add
//    Edit button allows user to edit selection
// Save Work Order Button -> user clicks button, data is sent to the server
//    Completed Work Orders table is updated with the Work Order
//    Inventory List table shows updated inventory counts after the save

//
//Work Order Form - 3 Form Components
//    1.  workorderform.js
//    2.  additemform.js
//    3.  addpartsform.js
