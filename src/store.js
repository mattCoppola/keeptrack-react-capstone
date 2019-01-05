import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(
    combineReducers({
        form: formReducer,
        reducer: reducer
    }),
    applyMiddleware(thunk)
);

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()