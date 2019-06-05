import {FETCH_PERSON_INIT, FETCH_PERSON_SUCCESS, FETCH_PERSON_FAILURE} from "./types";
import ContactsApiAxiosService from '../../services/axios/contactsApiService/ContactsApiAxiosService';

export const fetchPerson = id => {
        return async dispatch => {
            dispatch(fetchPersonInit());
            try {
                const person = await ContactsApiAxiosService.fetchPerson(id);
                dispatch(fetchUserSuccess(person.data));
            } catch (error) {
                dispatch(fetchPersonFailed(error));
            }
        };
    }
;

const fetchPersonInit = () => {
    return {
        type: FETCH_PERSON_INIT,
    };
};

const fetchUserSuccess = person => {
    return {
        type: FETCH_PERSON_SUCCESS,
        payload: person,
    };
};

const fetchPersonFailed = error => {
    return {
        type: FETCH_PERSON_FAILURE,
        payload: error,
    };
};

export const createPerson = data => {
    return async () => {
        try {
            return await ContactsApiAxiosService.createPerson(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };
};

export const updatePerson = (id, data) => {
    return async () => {
        try {
            return ContactsApiAxiosService.updatePerson(id, data);
        } catch (error) {
            return Promise.reject(error);
        }
    };
};