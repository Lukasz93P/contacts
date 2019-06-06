import ContactsApiAxiosService from '../../services/axios/contactsApiService/ContactsApiAxiosService';

export const createEmail = data => {
    return async () => {
        try {
            return ContactsApiAxiosService.addEmail(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };
};