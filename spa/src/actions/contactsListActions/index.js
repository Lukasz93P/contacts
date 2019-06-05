import {FETCH_CONTACTS_INIT, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE} from "./types";

import ContactsApiAxiosService from '../../services/axios/contactsApiService/ContactsApiAxiosService';

export const getContactsList = (searchParams = {}) => {
    return async dispatch => {
        dispatch(getContactsListInit());
        try {
            const response = await ContactsApiAxiosService.getContactsList(searchParams);
            dispatch(getContactsListSuccess(response.data));
        } catch (error) {
            dispatch(getContactsListFailure(error));
        }
    }
};

const getContactsListInit = () => {
    return {
        type: FETCH_CONTACTS_INIT
    }
};

const getContactsListSuccess = data => {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        payload: data,
    }
};

const getContactsListFailure = error => {
    return {
        type: FETCH_CONTACTS_FAILURE,
        payload: error.response.data,
    }
};