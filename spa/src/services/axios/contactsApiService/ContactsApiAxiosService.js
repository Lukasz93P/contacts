import axios from 'axios';

import {CONTACTS_API_URL} from "../../../config";

class RepoComparisionAxiosService {

    service;

    constructor() {
        this.init();
    }

    init = () => {
        this.service = axios.create({
            baseURL: CONTACTS_API_URL,
        });
    };

    buildQueryString = values => {
        const queryStringPairs = [];
        Object.entries(values).forEach(entry => {
            if (entry[1] !== null) {
                queryStringPairs.push(`${entry[0]}=${entry[1]}`)
            }
        });

        return queryStringPairs.length ? `?${queryStringPairs.join('&')}` : '';
    };

    getContactsList = searchParams => this.service.get(`/persons/${this.buildQueryString(searchParams)}`);

    deleteEmail = id => this.service.delete(`/emails/${id}/`);

    deletePhone = id => this.service.delete(`/phones/${id}/`);

    addEmail = values => this.service.post('/emails/', values);

    addPhone = values => this.service.post('/phones/', values);

    deleteContact = id => this.service.delete(`/persons/${id}/`);

    fetchPerson = id => this.service.get(`/persons/${id}/`);

    createPerson = data => this.service.post('/persons/', data);

    updatePerson = (id, data) => this.service.put(`/persons/${id}/`, data);
}

export default new RepoComparisionAxiosService();