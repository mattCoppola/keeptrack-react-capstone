import * as actions from "./actions";

const initialState = {
    authToken: "",
    error: null,
    user: null,
    userID: "",
    loading: false,
    loggedIn: false,
    workorders: [],
    INVENTORY: [
        {
            partNumber: 'main-board',
            cost: 290,
            price: 350,
            qty: 100,
            id: 1
        },
        {
            partNumber: 'function board',
            cost: 290,
            price: 350,
            qty: 100,
            id: 2
        },
        {
            partNumber: 'button',
            cost: 290,
            price: 350,
            qty: 100,
            id: 3
        },
        {
            partNumber: 'digitizer',
            cost: 290,
            price: 350,
            qty: 100,
            id: 4
        },
        {
            partNumber: 'screen',
            cost: 290,
            price: 350,
            qty: 100,
            id: 5
        },
        {
            partNumber: 'backcover',
            cost: 290,
            price: 350,
            qty: 100,
            id: 6
        },
        {
            partNumber: 'screws',
            cost: 290,
            price: 350,
            qty: 100,
            id: 7
        },
        {
            partNumber: 'creditreader',
            cost: 290,
            price: 350,
            qty: 100,
            id: 8
        }
    ]
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
        console.log("Requesting....", action.user)
        return Object.assign({}, state, {
            user: action.user
        });
    }
//    if (action.type === actions.SIGNUP_USER) {
//        return Object.assign({}, state, {
//            user: action.user
//        });
//    }
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
        console.log(username, id);
        return Object.assign({}, state, {
            loading: false,
            user: username,
            userID: id,
            loggedIn: true
        });
    }
    if (action.type === actions.LOGOUT_USER) {
        return Object.assign({}, state, {
            user: null
        });
    }
    if (action.type === actions.SUBMIT_WORKORDER) {
        return Object.assign({}, state, {
            WORKORDERS: [...state.WORKORDERS, action.workorder]
        });
    }
    if (action.type === actions.RETRIEVE_WORKORDERS) {
        return Object.assign({}, state, {
            workorders: action.results.resultsOutput
        });
    }
    if (action.type === actions.SUBTRACT_INVENTORY) {
        let updatedItem = {}
        initialState.INVENTORY.forEach(function(item) {
           if(item.id === action.partKey){
                updatedItem = item;
                updatedItem.qty--
                console.log(updatedItem);
           }
        });
        return Object.assign({}, state, {
            INVENTORY: state.INVENTORY.map(item =>
                item.id === updatedItem.id ? updatedItem : item
            )
        })

    }
    return state;
};


