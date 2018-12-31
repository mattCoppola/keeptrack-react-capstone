import {createStore, combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';

import reducer from './reducer';

const store = createStore(
    combineReducers({
        form: formReducer,
        reducer: reducer
    })
);

export default store;
