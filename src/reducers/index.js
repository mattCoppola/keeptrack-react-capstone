import * as actions from "../actions";

const initialState = {
    authToken: "",
    error: null,
    user: null,
    userID: "",
    loading: false,
    loggedIn: false,
    signedUp: false,
    workorders: [],
    inventory:[],
};

export default (state = initialState, action) => {
    if (action.type === actions.LEARN_MORE) {
        console.log('Reducer: Learning more...');
    }
    if (action.type === actions.BACK_TO_TOP) {
        console.log('Reducer: Back to the top');
    }
    if (action.type === actions.ERROR) {
        return Object.assign({}, state, {
          error: action.err,
          loading: false
        });
    }
    if (action.type === actions.REQUEST) {
        return Object.assign({}, state, {
            error: null,
            loading: true,
            user: action.user
        });
    }
   if (action.type === actions.SIGNUP_USER) {
       return Object.assign({}, state, {
           signedUp: true
       });
   }
    if (action.type === actions.LOGIN_USER) {
        return Object.assign({}, state, {
            user: action.user
        });
    }
    if (action.type === actions.SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken,
            loading: false
        });
    }
    if (action.type === actions.AUTH_SUCCESS) {
        const username = action.currentUser.user.username;
        const id = action.currentUser.user._id;
        return Object.assign({}, state, {
            loading: false,
            user: username,
            userID: id,
            loggedIn: true
        });
    }
    if (action.type === actions.LOGOUT_USER) {
        return Object.assign({}, state, {
            authToken: '',
            user: null,
            userID: '',
            loggedIn: false,
            signedUp: false
        });
    }
    // if (action.type === actions.SUBMIT_WORKORDER) {
    //     return Object.assign({}, state, {
    //         WORKORDERS: [...state.WORKORDERS, action.workorder]
    //     });
    // }
    if (action.type === actions.RETRIEVE_WORKORDERS) {
        // console.log(action.results);
        return Object.assign({}, state, {
            workorders: action.results.resultsOutput
        });
    }
    if (action.type === actions.RETRIEVE_INVENTORY) {
        return Object.assign({}, state, {
            inventory: action.results.inventoryItems
        });
    }
    return state;
};
