import ContactsApiAxiosService from '../../services/axios/contactsApiService/ContactsApiAxiosService';

export const createPhone = data => {
    return async () => {
        try {
            return ContactsApiAxiosService.addPhone(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };
};