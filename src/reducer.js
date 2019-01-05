import * as actions from "./actions";

const initialState = {
    authToken: "",
    error: null,
    user: null,
    loading: false,
    WORKORDERS: [
        {
            username: 'Matt',
            caseNumber: 'SC3842011',
            customerName: 'TopGolf',
            serialNumber: 'SC7834011',
            partReplaced: ['screen', 'motherboard'],
            notes: 'fixed the loose cables',
        }
//        {
//            createdBy: 'Johnny',
//            dateCreated: '12/27/2018',
//            caseNo: 'SC1234567',
//            noOfItems: 4
//        },
//        {
//            createdBy: 'Andy',
//            dateCreated: '12/28/2018',
//            caseNo: 'SC1234567',
//            noOfItems: 4
//        },
//        {
//            createdBy: 'Mark',
//            dateCreated: '12/29/2018',
//            caseNo: 'SC1234567',
//            noOfItems: 4
//        },
//        {
//            createdBy: 'Mark',
//            dateCreated: '12/30/2018',
//            caseNo: 'SC1234567',
//            noOfItems: 4
//        },
//        {
//            createdBy: 'Matt C',
//            dateCreated: '12/31/2018',
//            caseNo: 'SC1234567',
//            noOfItems: 4
//        },
//        {
//            createdBy: 'Matt C',
//            dateCreated: '01/01/2019',
//            caseNo: 'SC1234567',
//            noOfItems: 4
//        }
    ],
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
        return Object.assign({}, state, {
            user: action.user
        });
    }
    if (action.type === actions.SIGNUP_USER) {
        return Object.assign({}, state, {
            user: action.user
        });
    }
    if (action.type === actions.LOGIN_USER) {
        return Object.assign({}, state, {
            user: action.user
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


