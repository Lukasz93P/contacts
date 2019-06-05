import * as redux from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import {ContactsListReducer} from "./contactsList/contactsListReducers";
import {PersonReducer} from "./persons/personReducer";

export default () => {
    const combinedReducer = redux.combineReducers({
        form: formReducer,
        contactsList: ContactsListReducer,
        person: PersonReducer
    });

    return redux.createStore(combinedReducer, redux.applyMiddleware(logger, thunk));
}