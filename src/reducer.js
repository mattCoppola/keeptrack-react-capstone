import { LEARN_MORE, BACK_TO_TOP, REQUEST, SIGNUP_USER, LOGOUT_USER } from './actions';


const initialState = {
    user: null,
    WORKORDERS: [
        {
            createdBy: 'Matt C',
            dateCreated: '12/26/2018',
            caseNo: 'SC1234567',
            noOfItems: 4
        },
        {
            createdBy: 'Johnny',
            dateCreated: '12/27/2018',
            caseNo: 'SC1234567',
            noOfItems: 4
        },
        {
            createdBy: 'Andy',
            dateCreated: '12/28/2018',
            caseNo: 'SC1234567',
            noOfItems: 4
        },
        {
            createdBy: 'Mark',
            dateCreated: '12/29/2018',
            caseNo: 'SC1234567',
            noOfItems: 4
        },
        {
            createdBy: 'Mark',
            dateCreated: '12/30/2018',
            caseNo: 'SC1234567',
            noOfItems: 4
        },
        {
            createdBy: 'Matt C',
            dateCreated: '12/31/2018',
            caseNo: 'SC1234567',
            noOfItems: 4
        },
        {
            createdBy: 'Matt C',
            dateCreated: '01/01/2019',
            caseNo: 'SC1234567',
            noOfItems: 4
        }
    ],
    INVENTORY: [
        {
            partNumber: 'main-board',
            cost: 290,
            price: 350,
            qty: 100
        },
        {
            partNumber: 'function',
            cost: 290,
            price: 350,
            qty: 100
        },
        {
            partNumber: 'button',
            cost: 290,
            price: 350,
            qty: 100
        },
        {
            partNumber: 'digitizer',
            cost: 290,
            price: 350,
            qty: 100
        },
        {
            partNumber: 'screen',
            cost: 290,
            price: 350,
            qty: 100
        },
        {
            partNumber: 'backcover',
            cost: 290,
            price: 350,
            qty: 100
        },
        {
            partNumber: 'screws',
            cost: 290,
            price: 350,
            qty: 100
        },
        {
            partNumber: 'creditreader',
            cost: 290,
            price: 350,
            qty: 100
        }
    ]
};

export default (state = initialState, action) => {
    if (action.type === LEARN_MORE) {
        console.log('Reducer: Learning more...');
    }
    if (action.type === BACK_TO_TOP) {
        console.log('Reducer: Back to the top');
    }
    if (action.type === REQUEST) {
        return Object.assign({}, state, {
            user: action.user
        });
    }
    if (action.type === SIGNUP_USER) {
        return Object.assign({}, state, {
            user: action.user
        });
    }
    if (action.type === LOGOUT_USER) {
        return Object.assign({}, state, {
            user: null
        });
    }
    return state;
};


