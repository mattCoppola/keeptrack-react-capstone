import {createStore, combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';

import reducer from './reducer';

const store = createStore(
    combineReducers({
        form: formReducer,
        reducer: reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
