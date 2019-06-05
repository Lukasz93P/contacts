import {
    FETCH_CONTACTS_INIT,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE
} from "../../actions/contactsListActions/types";

const initialState = {
    loaded: false,
    data: [],
    error: false,
};

export const ContactsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_INIT: {
            return {...state, loaded: false, data: [], error: false};
        }
        case FETCH_CONTACTS_SUCCESS : {
            return {...state, loaded: true, data: action.payload, error: false}
        }
        case FETCH_CONTACTS_FAILURE : {
            return {...state, loaded: true, data: [], error: action.payload}
        }
        default : {
            return state;
        }
    }
};